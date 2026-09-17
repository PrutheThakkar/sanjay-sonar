self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/selected-work",
        "destination": "/selectedwork"
      },
      {
        "source": "/consultation",
        "destination": "/Consultation"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/HomePage",
    "/__graphql",
    "/_app",
    "/_error",
    "/api/graphql",
    "/expertise",
    "/expertise/[slug]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()