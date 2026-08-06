export const ALL_PAGES_QUERY = `
    query GetPages {
        pages(first: 100) {
            nodes {
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
                parent {
                    node {
                        ... on Page {
                            title
                            slug
                        }
                    }
                }
                homePage {
                    homebanner {
                        image { node { altText mediaItemUrl title } }
                        mobImage { node { altText mediaItemUrl title } }
                        overlayTextImg { node { altText mediaItemUrl title } }
                    }
                    aboutDrImage {
                        node {
                            altText
                            mediaItemUrl
                            title
                        }
                    }
                    aboutSectionTitle
                    rightSectionContent
                    expertiseList {
                        image {
                            node {
                                altText
                                mediaItemUrl
                                uri
                                title
                            }
                        }
                    }
                    sectionTitle
                    teachingSection {
                        teachingSectionColumn {
                            sectionTitle
                            sectionText
                            sectionSubTitle
                            sectionButton
                            teachingSectionImage {
                                node {
                                    altText
                                    mediaItemUrl
                                    uri
                                    title
                                }
                            }
                        }
                    }
                    consultationSectionTitle
                    consultationSectionParagraph
                }
            }
        }
    }
`;

export const HOME_PAGE_QUERY = `
    query GetHomePage {
        page(id: "home", idType: URI) {
            homePage {
                homebanner {
                    image { node { altText mediaItemUrl title } }
                    mobImage { node { altText mediaItemUrl title } }
                    overlayTextImg { node { altText mediaItemUrl title } }
                }
                aboutDrImage {
                    node {
                        altText
                        mediaItemUrl
                        title
                    }
                }
                aboutSectionTitle
                rightSectionContent
                expertiseList {
                    image {
                        node {
                            altText
                            mediaItemUrl
                            uri
                            title
                        }
                    }
                }
                sectionTitle
                teachingSection {
                    teachingSectionColumn {
                        sectionTitle
                        sectionText
                        sectionSubTitle
                        sectionButton
                        teachingSectionImage {
                            node {
                                altText
                                mediaItemUrl
                                uri
                                title
                            }
                        }
                    }
                }
                consultationSectionTitle
                consultationSectionParagraph
            }
        }
    }
`;

export const ABOUT_PAGE_QUERY = `
    query GetAboutPage {
        page(id: "about", idType: URI) {
            databaseId
            title
            slug
            uri
            aboutPage {
                aboutImage {
                    node {
                        altText
                        mediaItemUrl
                        title
                        uri
                    }
                }
                aboutSectionTitle
                aboutSectionParagraph
                practiceSection {
                    image {
                        node {
                            altText
                            mediaItemUrl
                            title
                            uri
                        }
                    }
                    sectionTitle
                    sectionParagraph
                }
            }
        }
    }
`;

export const CONSULTATION_PAGE_QUERY = `
    query GetConsultationPage {
        page(id: "consultation", idType: URI) {
            databaseId
            title
            slug
            uri
            consultationPage {
                consultationTitle
                consultationParagraph
                whatToExpectTitle
                patientsGuided
                patientReapeater {
                    icons {
                        node {
                            altText
                            mediaItemUrl
                            slug
                            title
                        }
                    }
                    iconTitle
                }
                secondOpinionsTitle
                secondParagraph
                areaCommonly
                areaList {
                    image {
                        node {
                            altText
                            mediaItemUrl
                            slug
                            title
                        }
                    }
                    title
                }
                appointmentReauestSection
            }
        }
    }
`;

export const TEACHING_PAGE_QUERY = `
    query GetTeachingPage {
        pages(first: 238) {
            nodes {
                databaseId
                title
                slug
                uri
                teachingPage {
                    teachingPageImage {
                        node {
                            altText
                            mediaItemUrl
                            uri
                            title
                        }
                    }
                    teachingPageRightSection
                    academicList {
                        academicTitle
                        academicPara
                        image {
                            node {
                                altText
                                mediaItemUrl
                                uri
                                title
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GALLERY_PAGE_QUERY = `
    fragment GalleryImageFields on MediaItem {
        id
        altText
        mediaItemUrl
        title
        slug
        uri
        mediaDetails { width height }
    }

    query GetGalleryPage {
        pages {
            nodes {
                databaseId
                title
                slug
                uri
                galleryPage {
                    galleryTab {
                        felicitationByHimachalGovernor { nodes { ...GalleryImageFields } }
                        selectFiagesEfiagesAurangabadFiagesEfiagesAurangabad { nodes { ...GalleryImageFields } }
                        herniaSymposiumVidisha { nodes { ...GalleryImageFields } }
                        lapHerniaCourse { nodes { ...GalleryImageFields } }
                        lasVegasUsa { nodes { ...GalleryImageFields } }
                        laturMasicon { nodes { ...GalleryImageFields } }
                        lectureAtAwrDeepImpactDelhi { nodes { ...GalleryImageFields } }
                        orgSecretaryFalsHerniaWockhardtHospitalMumbai2023 { nodes { ...GalleryImageFields } }
                        other { nodes { ...GalleryImageFields } }
                    }
                }
            }
        }
    }
`;

export const SELECTED_WORK_PAGE_QUERY = `
    query GetSelectedWorkPage {
        pages {
            nodes {
                databaseId
                title
                slug
                uri
                selectedWork {
                    selectedWorkList {
                        sectionTitle
                        paragraph
                        image {
                            node {
                                altText
                                mediaItemUrl
                                title
                                uri
                            }
                        }
                    }
                }
            }
        }
    }
`;
