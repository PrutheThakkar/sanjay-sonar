(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/GoogleAnalytics.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PageView({ measurementId }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageView.useEffect": ()=>{
            if (!window.gtag) return;
            const query = searchParams.toString();
            window.gtag("config", measurementId, {
                page_path: query ? `${pathname}?${query}` : pathname
            });
        }
    }["PageView.useEffect"], [
        measurementId,
        pathname,
        searchParams
    ]);
    return null;
}
_s(PageView, "h6p6PpCFmP4Mu5bIMduBzSZThBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PageView;
function GoogleAnalytics() {
    const measurementId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/GoogleAnalytics.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "google-analytics",
                strategy: "afterInteractive",
                children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{'send_page_view':false});`
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/GoogleAnalytics.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageView, {
                    measurementId: measurementId
                }, void 0, false, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/GoogleAnalytics.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/GoogleAnalytics.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = GoogleAnalytics;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageView");
__turbopack_context__.k.register(_c1, "GoogleAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=10xf_Leena_projects_sanjay-sonar_sanjay%20sonar_components_GoogleAnalytics_jsx_13na97j._.js.map