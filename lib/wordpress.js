import {
    ABOUT_PAGE_QUERY,
    ALL_PAGES_QUERY,
    CONSULTATION_PAGE_QUERY,
    GALLERY_PAGE_QUERY,
    HOME_PAGE_QUERY,
    SELECTED_WORK_PAGE_QUERY,
    TEACHING_PAGE_QUERY,
} from "./graphql-queries";

const WORDPRESS_GRAPHQL_URL =
    process.env.WORDPRESS_GRAPHQL_URL ||
    "https://drsanjay-wp.studiosentientdemo.com/graphql";

// These defaults use WordPress Pages beneath a parent page with slug "expertise".
// If WPGraphQL exposes a custom post type, set these to its GraphQL names instead.
const EXPERTISE_COLLECTION =
    process.env.WORDPRESS_EXPERTISE_GRAPHQL_COLLECTION || "pages";
const EXPERTISE_SINGLE = process.env.WORDPRESS_EXPERTISE_GRAPHQL_SINGLE || "page";
const EXPERTISE_PARENT_SLUG = process.env.WORDPRESS_EXPERTISE_PARENT_SLUG || "expertise";

function assertGraphQLName(value, environmentVariable) {
    if (!/^[_A-Za-z][_0-9A-Za-z]*$/.test(value)) {
        throw new Error(`${environmentVariable} is not a valid GraphQL field name`);
    }
}

function stripHtml(value = "") {
    return (value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeExpertise(node) {
    return {
        id: node.id,
        slug: node.slug,
        title: node.title || "",
        description: stripHtml(node.content).slice(0, 220),
        content: node.content || "",
        icon: node.featuredImage?.node?.sourceUrl || "/images/laparoscopic.svg",
    };
}

export async function graphqlRequest(query, variables = {}) {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error(`WPGraphQL request failed with status ${response.status}`);
    }

    const result = await response.json();

    if (result.errors?.length) {
        throw new Error(result.errors.map((error) => error.message).join("; "));
    }

    return result.data;
}

export async function getAllPages() {
    const data = await graphqlRequest(ALL_PAGES_QUERY);
    return data.pages?.nodes || [];
}

export async function getPageBySlug(slug) {
    const data = await graphqlRequest(
        `
            query GetPageBySlug($slug: ID!) {
                page(id: $slug, idType: URI) {
                    id
                    databaseId
                    title
                    slug
                    uri
                    content
                    featuredImage {
                        node {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
        `,
        { slug },
    );

    return data.page || null;
}

function normalizeWordPressHtml(html = "") {
    return (html || "").replace(/\bclassName=/g, "class=");
}

function removeOuterDiv(html = "") {
    const match = html.match(/^\s*<div\b[^>]*>([\s\S]*)<\/div>\s*$/i);
    return match ? match[1] : html;
}

function mapHomeHeroSlides(banners = []) {
    return banners
        .map((banner, index) => {
            const desktopImage = banner.image?.node;
            const mobileImage = banner.mobImage?.node;
            const overlayImage = banner.overlayTextImg?.node;

            if (!desktopImage?.mediaItemUrl) return null;

            return {
                id: `wordpress-hero-${index + 1}`,
                desktopBackground: desktopImage.mediaItemUrl,
                mobileBackground: mobileImage?.mediaItemUrl || desktopImage.mediaItemUrl,
                desktopContent: overlayImage?.mediaItemUrl || null,
                mobileContent: overlayImage?.mediaItemUrl || null,
                contentAlt:
                    overlayImage?.altText ||
                    overlayImage?.title ||
                    desktopImage.altText ||
                    desktopImage.title ||
                    "Homepage banner",
            };
        })
        .filter(Boolean);
}

function mapHomeExpertiseItems(items = []) {
    return items
        .map((item, index) => {
            const image = item.image?.node;

            if (!image?.mediaItemUrl) return null;

            return {
                id: image.uri || `wordpress-expertise-${index + 1}`,
                imageUrl: image.mediaItemUrl,
                title: image.title || image.altText || "",
                imageAlt: image.altText || image.title || "Surgical expertise",
            };
        })
        .filter(Boolean);
}

function mapTeachingSection(sections = []) {
    const groups = Array.isArray(sections) ? sections : [sections];
    const items = groups.flatMap((section) => {
        const columns = section?.teachingSectionColumn;
        return Array.isArray(columns) ? columns : columns ? [columns] : [];
    });

    return items.map((column, index) => {
        const image = column.teachingSectionImage?.node;
        const button = column.sectionButton;
        const buttonIsUrl =
            typeof button === "string" &&
            (/^(https?:\/\/|\/|#)/.test(button.trim()));

        return {
            id: image?.uri || `wordpress-teaching-${index + 1}`,
            title: stripHtml(column.sectionTitle),
            subtitle: stripHtml(column.sectionSubTitle),
            textHtml: normalizeWordPressHtml(column.sectionText),
            imageUrl: image?.mediaItemUrl || null,
            imageAlt: image?.altText || image?.title || "Teaching",
            buttonHref: buttonIsUrl ? button.trim() : "/teaching",
            buttonLabel: buttonIsUrl ? "View More" : stripHtml(button) || "View More",
        };
    });
}

export async function getHomePageData() {
    const data = await graphqlRequest(HOME_PAGE_QUERY);
    const homePage = data.page?.homePage;
    const aboutImage = homePage?.aboutDrImage?.node;
    const aboutTitleHtml = normalizeWordPressHtml(homePage?.aboutSectionTitle);
    let aboutContentHtml = normalizeWordPressHtml(homePage?.rightSectionContent);

    aboutContentHtml = removeOuterDiv(aboutContentHtml);

    if (aboutTitleHtml) {
        aboutContentHtml = aboutContentHtml.replace(/<h2\b[^>]*>[\s\S]*?<\/h2>/i, "");
    }

    return {
        heroSlides: mapHomeHeroSlides(homePage?.homebanner),
        aboutSection: {
            imageUrl: aboutImage?.mediaItemUrl || null,
            imageAlt: aboutImage?.altText || aboutImage?.title || "Dr. Sanjay Sonar",
            titleHtml: aboutTitleHtml,
            contentHtml: aboutContentHtml,
        },
        expertiseSection: {
            title: stripHtml(homePage?.sectionTitle),
            items: mapHomeExpertiseItems(homePage?.expertiseList),
        },
        teachingSection: mapTeachingSection(homePage?.teachingSection),
        consultationSection: {
            title: stripHtml(homePage?.consultationSectionTitle),
            paragraphHtml: normalizeWordPressHtml(
                homePage?.consultationSectionParagraph,
            ),
        },
    };
}

export async function getAboutPageData() {
    const data = await graphqlRequest(ABOUT_PAGE_QUERY);
    const page = data.page;
    const aboutPage = page?.aboutPage;
    const aboutImage = aboutPage?.aboutImage?.node;
    const practiceGroups = Array.isArray(aboutPage?.practiceSection)
        ? aboutPage.practiceSection
        : aboutPage?.practiceSection
          ? [aboutPage.practiceSection]
          : [];

    return {
        pageTitle: stripHtml(page?.title),
        intro: {
            imageUrl: aboutImage?.mediaItemUrl || null,
            imageAlt: aboutImage?.altText || aboutImage?.title || "Dr. Sanjay Sonar",
            titleHtml: normalizeWordPressHtml(aboutPage?.aboutSectionTitle),
            paragraphHtml: normalizeWordPressHtml(aboutPage?.aboutSectionParagraph),
        },
        practiceSections: practiceGroups.map((section, index) => {
            const image = section?.image?.node;

            return {
                id: image?.uri || `wordpress-practice-${index + 1}`,
                title: stripHtml(section?.sectionTitle),
                paragraphHtml: normalizeWordPressHtml(section?.sectionParagraph),
                imageUrl: image?.mediaItemUrl || null,
                imageAlt: image?.altText || image?.title || "The Practice",
                imagePosition: index % 2 === 0 ? "right" : "left",
            };
        }),
    };
}

export async function getConsultationPageData() {
    const data = await graphqlRequest(CONSULTATION_PAGE_QUERY);
    const page = data.page;
    const consultationPage = page?.consultationPage;
    const patientItems = Array.isArray(consultationPage?.patientReapeater)
        ? consultationPage.patientReapeater
        : consultationPage?.patientReapeater
          ? [consultationPage.patientReapeater]
          : [];
    const areaItems = Array.isArray(consultationPage?.areaList)
        ? consultationPage.areaList
        : consultationPage?.areaList
          ? [consultationPage.areaList]
          : [];

    return {
        pageTitle: stripHtml(page?.title),
        consultationTitleHtml: normalizeWordPressHtml(
            consultationPage?.consultationTitle,
        ),
        consultationParagraphHtml: normalizeWordPressHtml(
            consultationPage?.consultationParagraph,
        ),
        whatToExpectTitleHtml: normalizeWordPressHtml(
            consultationPage?.whatToExpectTitle,
        ),
        patientsGuidedHtml: normalizeWordPressHtml(
            consultationPage?.patientsGuided,
        ),
        patientItems: patientItems.map((item, index) => {
            const icon = item?.icons?.node;

            return {
                id: icon?.slug || `wordpress-patient-guide-${index + 1}`,
                title: stripHtml(item?.iconTitle),
                iconUrl: icon?.mediaItemUrl || null,
                iconAlt: icon?.altText || icon?.title || stripHtml(item?.iconTitle),
            };
        }),
        secondOpinionsTitleHtml: normalizeWordPressHtml(
            consultationPage?.secondOpinionsTitle,
        ),
        secondParagraphHtml: normalizeWordPressHtml(
            consultationPage?.secondParagraph,
        ),
        areaCommonlyHtml: normalizeWordPressHtml(consultationPage?.areaCommonly),
        areaItems: areaItems.map((item, index) => {
            const image = item?.image?.node;

            return {
                id: image?.slug || `wordpress-consultation-area-${index + 1}`,
                title: stripHtml(item?.title),
                imageUrl: image?.mediaItemUrl || null,
                imageAlt: image?.altText || image?.title || stripHtml(item?.title),
            };
        }),
        appointmentRequestHtml: normalizeWordPressHtml(
            consultationPage?.appointmentReauestSection,
        ),
    };
}

export async function getTeachingPageData() {
    const data = await graphqlRequest(TEACHING_PAGE_QUERY);
    const page = data.pages?.nodes?.find((node) => node.slug === "teaching");

    if (!page) return null;

    const teachingPage = page.teachingPage;
    const introImage = teachingPage?.teachingPageImage?.node;
    const academicItems = Array.isArray(teachingPage?.academicList)
        ? teachingPage.academicList
        : teachingPage?.academicList
          ? [teachingPage.academicList]
          : [];

    return {
        pageTitle: stripHtml(page.title) || "Teaching",
        introImageUrl: introImage?.mediaItemUrl || null,
        introImageAlt: introImage?.altText || introImage?.title || "Dr. Sanjay Sonar teaching",
        rightSectionHtml: normalizeWordPressHtml(
            teachingPage?.teachingPageRightSection,
        ),
        academicItems: academicItems.map((item, index) => {
            const image = item?.image?.node;

            return {
                id: image?.uri || `wordpress-academic-${index + 1}`,
                title: stripHtml(item?.academicTitle),
                paragraphHtml: normalizeWordPressHtml(item?.academicPara),
                imageUrl: image?.mediaItemUrl || null,
                imageAlt:
                    image?.altText ||
                    image?.title ||
                    stripHtml(item?.academicTitle) ||
                    "Surgical teaching",
            };
        }),
    };
}

export async function getGalleryPageData() {
    const data = await graphqlRequest(GALLERY_PAGE_QUERY);
    const page = data.pages?.nodes?.find((node) => node.slug === "gallery");

    if (!page) return null;

    const galleryTabs = Array.isArray(page.galleryPage?.galleryTab)
        ? page.galleryPage.galleryTab
        : page.galleryPage?.galleryTab
          ? [page.galleryPage.galleryTab]
          : [];
    const categoryDefinitions = [
        ["felicitationByHimachalGovernor", "Felicitation by Himachal Governor"],
        ["selectFiagesEfiagesAurangabadFiagesEfiagesAurangabad", "FIAGES / EFIAGES Aurangabad"],
        ["herniaSymposiumVidisha", "Hernia Symposium, Vidisha"],
        ["lapHerniaCourse", "Lap Hernia Course"],
        ["lasVegasUsa", "Las Vegas, USA"],
        ["laturMasicon", "Latur MASICON"],
        ["lectureAtAwrDeepImpactDelhi", "Lecture at AWR Deep Impact, Delhi"],
        ["orgSecretaryFalsHerniaWockhardtHospitalMumbai2023", "FALS Hernia, Wockhardt Hospital Mumbai 2023"],
        ["other", "Other"],
    ];

    const mapImage = (node, index, categoryKey) => {
        if (!node?.mediaItemUrl) return null;

        return {
            id: node.id || node.uri || node.slug || `${categoryKey}-${index + 1}`,
            title: node.altText || node.title || "Gallery image",
            image: node.mediaItemUrl,
            alt: node.altText || node.title || "Dr. Sanjay Sonar gallery image",
            width: node.mediaDetails?.width || 1200,
            height: node.mediaDetails?.height || 900,
        };
    };

    return {
        pageTitle: stripHtml(page.title) || "Gallery",
        categories: categoryDefinitions
            .map(([key, label]) => ({
                key,
                label,
                images: galleryTabs
                    .flatMap((tab) => tab?.[key]?.nodes || [])
                    .map((node, index) => mapImage(node, index, key))
                    .filter(Boolean),
            })),
    };
}

export async function getSelectedWorkPageData() {
    const data = await graphqlRequest(SELECTED_WORK_PAGE_QUERY);
    const pages = data.pages?.nodes || [];
    const page =
        pages.find((node) => node.slug === "selectedwork") ||
        pages.find((node) => node.slug === "selected-work") ||
        pages.find((node) => node.selectedWork?.selectedWorkList?.length);

    if (!page) return null;

    const selectedWorkList = Array.isArray(page.selectedWork?.selectedWorkList)
        ? page.selectedWork.selectedWorkList
        : page.selectedWork?.selectedWorkList
          ? [page.selectedWork.selectedWorkList]
          : [];

    return {
        pageTitle: stripHtml(page.title) || "Selected Work",
        items: selectedWorkList.map((item, index) => {
            const image = item?.image?.node;
            const title = stripHtml(item?.sectionTitle);

            return {
                id: image?.uri || `wordpress-selected-work-${index + 1}`,
                number: `Case ${String(index + 1).padStart(2, "0")}`,
                title,
                paragraphHtml: normalizeWordPressHtml(item?.paragraph),
                image: image?.mediaItemUrl || null,
                imageAlt: image?.altText || image?.title || title || "Selected work",
            };
        }),
    };
}

export async function getExpertiseItems() {
    assertGraphQLName(
        EXPERTISE_COLLECTION,
        "WORDPRESS_EXPERTISE_GRAPHQL_COLLECTION",
    );

    if (EXPERTISE_COLLECTION === "pages") {
        const pages = await getAllPages();
        return pages
            .filter((page) => page.parent?.node?.slug === EXPERTISE_PARENT_SLUG)
            .map(normalizeExpertise);
    }

    const data = await graphqlRequest(`
        query GetExpertiseItems {
            ${EXPERTISE_COLLECTION}(first: 100) {
                nodes {
                    id
                    slug
                    title
                    content
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `);

    return (data[EXPERTISE_COLLECTION]?.nodes || []).map(normalizeExpertise);
}

export async function getExpertiseBySlug(slug) {
    if (EXPERTISE_SINGLE === "page") {
        const page = await getPageBySlug(slug);
        return page ? normalizeExpertise(page) : null;
    }

    assertGraphQLName(EXPERTISE_SINGLE, "WORDPRESS_EXPERTISE_GRAPHQL_SINGLE");

    const data = await graphqlRequest(
        `
            query GetExpertiseBySlug($slug: ID!) {
                ${EXPERTISE_SINGLE}(id: $slug, idType: SLUG) {
                    id
                    slug
                    title
                    content
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        `,
        { slug },
    );

    const node = data[EXPERTISE_SINGLE];
    return node ? normalizeExpertise(node) : null;
}
