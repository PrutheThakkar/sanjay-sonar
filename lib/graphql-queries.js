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
                        title
                        slug
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
