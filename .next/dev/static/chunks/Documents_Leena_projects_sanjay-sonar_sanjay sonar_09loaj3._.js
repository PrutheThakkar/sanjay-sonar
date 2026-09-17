(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const links = [
    {
        label: "Home",
        href: "/",
        width: "30%"
    },
    {
        label: "About",
        href: "/about",
        width: "45%"
    },
    {
        label: "Expertise",
        href: "/expertise",
        width: "65%"
    },
    {
        label: "Teaching",
        href: "/teaching",
        width: "75%"
    },
    // { label: "Publications", href: "/publications", width: "85%" },
    {
        label: "Gallery",
        href: "/gallery",
        width: "85%"
    },
    {
        label: "Selected Work",
        href: "/selected-work",
        width: "100%"
    }
];
function Header() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === "/";
    const closeMenu = ()=>setMenuOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: isHome ? "home-page" : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "logo",
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/sanjay-logo.svg",
                                alt: "Dr. Sanjay Sonar Logo",
                                width: 232,
                                height: 52,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "nav",
                        children: links.map((link)=>{
                            const style = {
                                "--underline-width": link.width
                            };
                            const isActive = pathname === link.href || link.href !== "/" && pathname?.startsWith(link.href);
                            if (link.href && link.href.startsWith("/")) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `navLink ${isActive ? "active" : ""}`,
                                    style: style,
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: `navLink ${isActive ? "active" : ""}`,
                                style: style,
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/consultation",
                        className: "cta site-cta",
                        children: "Consultation"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `menuBtn ${menuOpen ? "active" : ""}`,
                        onClick: ()=>setMenuOpen(!menuOpen),
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobileMenu ${menuOpen ? "open" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mobileNav",
                    children: [
                        links.map((link)=>{
                            const isActive = pathname === link.href || link.href !== "/" && pathname?.startsWith(link.href);
                            if (link.href && link.href.startsWith("/")) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: isActive ? "active" : undefined,
                                    onClick: closeMenu,
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: closeMenu,
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/consultation",
                            className: "mobileCta site-cta",
                            onClick: closeMenu,
                            children: "Consultation"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/Header.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Header, "XeKBFCs+x77NsHWouRwtasyFFlw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothAnimationProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const cardSelector = [
    ".expertise-item",
    ".procedure-card",
    ".evaluated-card",
    ".expect-item",
    ".gallery-card",
    ".publication-card",
    ".tp-row",
    ".about-story-row"
].join(",");
function SmoothAnimationProvider() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showPreloader, setShowPreloader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pageReady, setPageReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothAnimationProvider.useEffect": ()=>{
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            document.body.classList.add("is-preloading");
            if (reduceMotion) {
                const frameId = requestAnimationFrame({
                    "SmoothAnimationProvider.useEffect.frameId": ()=>{
                        document.body.classList.remove("is-preloading");
                        setShowPreloader(false);
                        setPageReady(true);
                    }
                }["SmoothAnimationProvider.useEffect.frameId"]);
                return ({
                    "SmoothAnimationProvider.useEffect": ()=>cancelAnimationFrame(frameId)
                })["SmoothAnimationProvider.useEffect"];
            }
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "power3.out"
                },
                onComplete: {
                    "SmoothAnimationProvider.useEffect.timeline": ()=>{
                        document.body.classList.remove("is-preloading");
                        setShowPreloader(false);
                        setPageReady(true);
                    }
                }["SmoothAnimationProvider.useEffect.timeline"]
            });
            timeline.fromTo(".brand-preloader__orbit", {
                scale: 0.55,
                opacity: 0,
                rotate: -35
            }, {
                scale: 1,
                opacity: 1,
                rotate: 0,
                duration: 0.8
            }).fromTo(".brand-preloader__logo", {
                y: 18,
                opacity: 0,
                scale: 0.92
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.65
            }, "-=0.45").fromTo(".brand-preloader__label", {
                y: 10,
                opacity: 0,
                letterSpacing: "0.5em"
            }, {
                y: 0,
                opacity: 1,
                letterSpacing: "0.28em",
                duration: 0.5
            }, "-=0.3").fromTo(".brand-preloader__progress span", {
                scaleX: 0
            }, {
                scaleX: 1,
                duration: 1,
                ease: "power2.inOut"
            }, "-=0.2").to(".brand-preloader__content", {
                y: -16,
                opacity: 0,
                duration: 0.35,
                delay: 0.1
            }).to(".brand-preloader", {
                yPercent: -100,
                duration: 0.85,
                ease: "power4.inOut"
            }, "-=0.05");
            return ({
                "SmoothAnimationProvider.useEffect": ()=>{
                    timeline.kill();
                    document.body.classList.remove("is-preloading");
                }
            })["SmoothAnimationProvider.useEffect"];
        }
    }["SmoothAnimationProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothAnimationProvider.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.15,
                smoothWheel: true
            });
            let rafId;
            function raf(time) {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 900,
                easing: "ease-out-cubic",
                once: true,
                offset: 90
            });
            return ({
                "SmoothAnimationProvider.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    lenis.destroy();
                }
            })["SmoothAnimationProvider.useEffect"];
        }
    }["SmoothAnimationProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SmoothAnimationProvider.useLayoutEffect": ()=>{
            if (!pageReady) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "SmoothAnimationProvider.useLayoutEffect.context": ()=>{
                    const sections = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".main > section:not(.hero):not(.inside-banner)");
                    sections.forEach({
                        "SmoothAnimationProvider.useLayoutEffect.context": (section)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(section, {
                                clipPath: "inset(100% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "none",
                                scrollTrigger: {
                                    trigger: section,
                                    start: "top 98%",
                                    end: "top 40%",
                                    scrub: 0.6,
                                    invalidateOnRefresh: true
                                }
                            });
                        }
                    }["SmoothAnimationProvider.useLayoutEffect.context"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".header", {
                        y: -24,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        clearProps: "all"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".inside-banner h1", {
                        y: 45,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        clearProps: "all"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray("section:not(.hero) h2:not([data-aos]), section:not(.hero) h3:not([data-aos])").filter({
                        "SmoothAnimationProvider.useLayoutEffect.context": (element)=>!element.closest(".gsap-case-card")
                    }["SmoothAnimationProvider.useLayoutEffect.context"]).forEach({
                        "SmoothAnimationProvider.useLayoutEffect.context": (element)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
                                y: 34,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 0.8,
                                ease: "power3.out",
                                clearProps: "transform,opacity",
                                scrollTrigger: {
                                    trigger: element,
                                    start: "top 88%",
                                    once: true
                                }
                            });
                        }
                    }["SmoothAnimationProvider.useLayoutEffect.context"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(cardSelector).filter({
                        "SmoothAnimationProvider.useLayoutEffect.context": (element)=>!element.hasAttribute("data-aos") && !element.closest(".gsap-case-card")
                    }["SmoothAnimationProvider.useLayoutEffect.context"]).forEach({
                        "SmoothAnimationProvider.useLayoutEffect.context": (element, index)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
                                y: 42,
                                opacity: 0,
                                scale: 0.985
                            }, {
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 0.75,
                                delay: index % 4 * 0.06,
                                ease: "power3.out",
                                clearProps: "all",
                                scrollTrigger: {
                                    trigger: element,
                                    start: "top 90%",
                                    once: true
                                }
                            });
                        }
                    }["SmoothAnimationProvider.useLayoutEffect.context"]);
                    const consultationTimeline = document.querySelector(".consultation-final .prep-timeline");
                    if (consultationTimeline) {
                        const steps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".prep-step", consultationTimeline);
                        const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                            scrollTrigger: {
                                trigger: consultationTimeline,
                                start: "top 82%",
                                once: true
                            }
                        });
                        steps.forEach({
                            "SmoothAnimationProvider.useLayoutEffect.context": (step)=>{
                                const line = step.querySelector(".prep-line");
                                const dot = step.querySelector(".prep-dot");
                                const label = step.querySelector(".name");
                                if (line) {
                                    timeline.fromTo(line, {
                                        scaleX: 0,
                                        transformOrigin: "left center"
                                    }, {
                                        scaleX: 1,
                                        duration: 0.55,
                                        ease: "power2.inOut"
                                    });
                                }
                                if (dot) {
                                    timeline.fromTo(dot, {
                                        opacity: 0,
                                        scale: 0
                                    }, {
                                        opacity: 1,
                                        scale: 1,
                                        duration: 0.25,
                                        ease: "back.out(2)"
                                    });
                                }
                                if (label) {
                                    timeline.fromTo(label, {
                                        opacity: 0,
                                        y: 16
                                    }, {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.4,
                                        ease: "power3.out"
                                    });
                                }
                            }
                        }["SmoothAnimationProvider.useLayoutEffect.context"]);
                    }
                    requestAnimationFrame({
                        "SmoothAnimationProvider.useLayoutEffect.context": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refreshHard();
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                        }
                    }["SmoothAnimationProvider.useLayoutEffect.context"]);
                }
            }["SmoothAnimationProvider.useLayoutEffect.context"]);
            return ({
                "SmoothAnimationProvider.useLayoutEffect": ()=>context.revert()
            })["SmoothAnimationProvider.useLayoutEffect"];
        }
    }["SmoothAnimationProvider.useLayoutEffect"], [
        pageReady,
        pathname
    ]);
    if (!showPreloader) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand-preloader",
        role: "status",
        "aria-label": "Loading website",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand-preloader__wash"
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand-preloader__content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-preloader__brand",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand-preloader__orbit",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "brand-preloader__label",
                        children: "Precision in practice"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-preloader__progress",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/SmoothAnimationProvider.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_s(SmoothAnimationProvider, "EIDw+hN4uorm9VOPt14ggba0/AU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SmoothAnimationProvider;
var _c;
__turbopack_context__.k.register(_c, "SmoothAnimationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__A11y$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/modules/a11y.mjs [app-client] (ecmascript) <export default as A11y>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/modules/effect-fade.mjs [app-client] (ecmascript) <export default as EffectFade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/modules/keyboard.mjs [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
"use client";
;
;
;
;
;
;
;
function HeroSlider({ isLoading, slides, children }) {
    const heroSlides = slides || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `hero hero-slider-section ${!isLoading ? "hero-loaded" : ""}`,
        id: "home",
        "aria-label": "Featured information",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                className: "hero-swiper",
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__["EffectFade"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                    // Pagination,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__A11y$3e$__["A11y"]
                ],
                // Change "fade" to "slide", "creative", etc.
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                speed: 1200,
                loop: heroSlides.length > 1,
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                // navigation
                // pagination={{
                //     clickable: true,
                // }}
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                },
                a11y: {
                    enabled: true,
                    prevSlideMessage: "Previous hero slide",
                    nextSlideMessage: "Next hero slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                },
                children: heroSlides.map((slide, index)=>{
                    const hasContentImage = slide.desktopContent && slide.mobileContent;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        className: `hero-slide ${hasContentImage ? "hero-slide--image-content" : "hero-slide--text-content"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-bg hero-cinematic-reveal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            media: "(max-width: 767px)",
                                            srcSet: slide.mobileBackground
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            media: "(min-width: 768px)",
                                            srcSet: slide.desktopBackground
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 84,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: slide.desktopBackground,
                                            alt: "",
                                            "aria-hidden": "true",
                                            className: "hero-background-image",
                                            loading: index === 0 ? "eager" : "lazy",
                                            fetchPriority: index === 0 ? "high" : "auto"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 89,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                    lineNumber: 78,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-content hero-content-reveal",
                                children: hasContentImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                    className: "hero-content-picture",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            media: "(max-width: 767px)",
                                            srcSet: slide.mobileContent
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 105,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            media: "(min-width: 768px)",
                                            srcSet: slide.desktopContent
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 110,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: slide.desktopContent,
                                            alt: slide.contentAlt,
                                            className: "hero-content-image",
                                            loading: index === 0 ? "eager" : "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 115,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                    lineNumber: 104,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-copy",
                                    children: [
                                        slide.eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-eyebrow",
                                            children: slide.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 127,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 132,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: slide.description
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                            lineNumber: 134,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                    lineNumber: 125,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                                lineNumber: 102,
                                columnNumber: 29
                            }, this)
                        ]
                    }, slide.id, true, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-social-overlay",
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
                lineNumber: 145,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$components$2f$HeroSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/components/HeroSlider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HomePage({ heroSlides, aboutSection, expertiseSection, teachingSection, consultationSection }) {
    _s();
    // useEffect(() => {
    //     const sections = document.querySelectorAll(".clip-reveal-section");
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add("section-active");
    //                 }
    //             });
    //         },
    //         { threshold: 0.35 }
    //     );
    //     sections.forEach((section) => observer.observe(section));
    //     return () => observer.disconnect();
    // }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const sections = document.querySelectorAll(".clip-reveal-section");
            const observer = new IntersectionObserver({
                "HomePage.useEffect": (entries)=>{
                    entries.forEach({
                        "HomePage.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("section-active");
                                observer.unobserve(entry.target);
                            }
                        }
                    }["HomePage.useEffect"]);
                }
            }["HomePage.useEffect"], {
                threshold: 0.25
            });
            sections.forEach({
                "HomePage.useEffect": (section)=>{
                    observer.observe(section);
                }
            }["HomePage.useEffect"]);
            return ({
                "HomePage.useEffect": ()=>{
                    observer.disconnect();
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$components$2f$HeroSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isLoading: false,
                slides: heroSlides,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "social-links",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://instagram.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Instagram"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://facebook.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Facebook"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://linkedin.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "LinkedIn"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            aboutSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section green-bg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "left",
                                children: aboutSection.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-img-wrapper",
                                    "data-aos": "fade-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: aboutSection.imageUrl,
                                        alt: aboutSection.imageAlt,
                                        width: 485,
                                        height: 585,
                                        priority: true,
                                        className: "about-img"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 101,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 100,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "right",
                                "data-aos": "fade-up",
                                children: [
                                    aboutSection.titleHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: aboutSection.titleHtml
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 115,
                                        columnNumber: 37
                                    }, this),
                                    aboutSection.contentHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: aboutSection.contentHtml
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 122,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                        lineNumber: 97,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                    lineNumber: 96,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                lineNumber: 95,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "years-Mastery white-bg",
                "data-aos-duration": "900",
                "data-aos-easing": "ease-out-cubic",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "900",
                            "data-aos-delay": "100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/35-svg.svg",
                                        alt: "Dr. Sanjay Sonar",
                                        width: 442,
                                        height: 330,
                                        priority: true,
                                        className: "about-img"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                expertiseSection?.title || "years of Mastery in Complex Surgical Cases"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: (expertiseSection?.items || []).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "850",
                                    "data-aos-delay": 150 + index * 100,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "complex-sec-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "img-wrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.imageUrl,
                                                    alt: item.imageAlt,
                                                    width: 442,
                                                    height: 330,
                                                    className: "about-img"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this),
                                            item.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                lineNumber: 177,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 167,
                                        columnNumber: 33
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "btn-wrapper",
                            "data-aos": "fade-up",
                            "data-aos-duration": "850",
                            "data-aos-delay": "750",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/expertise#Colorectal-Surgery",
                                className: "btn cta site-cta",
                                children: "View More"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "teaching-publication-section green-bg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: (teachingSection || []).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-row",
                            children: [
                                item.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-image",
                                    "data-aos": "fade-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.imageUrl,
                                        alt: item.imageAlt,
                                        width: 560,
                                        height: 410
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 202,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 201,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-content",
                                    "data-aos": "fade-up",
                                    children: [
                                        item.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 212,
                                            columnNumber: 48
                                        }, this),
                                        item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: item.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 213,
                                            columnNumber: 51
                                        }, this),
                                        item.textHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: item.textHtml
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 215,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.buttonHref,
                                            className: "btn site-cta",
                                            children: item.buttonLabel
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 221,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 211,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 199,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                lineNumber: 196,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "beyond-consultation-section green-bg clip-reveal-section",
                id: "consultation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "beyond-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "beyond-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "beyond-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    "data-aos": "fade-up",
                                                    children: "BEYOND SURGERY"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "100",
                                                    children: "Outside the operating room, the work continues in more ways."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 358,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "200",
                                                    children: [
                                                        "Through teaching, writing, and time spent in reflection. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                            lineNumber: 363,
                                                            columnNumber: 94
                                                        }, this),
                                                        "Through initiatives like plantation drives."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "300",
                                                    children: "At heart, the work is about contributing and passing it forward."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 355,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "beyond-small-images",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "beyond-img small site-img-reveal delay-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/beyond-surgery-1st.webp",
                                                        alt: "Beyond surgery",
                                                        width: 420,
                                                        height: 260
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 373,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "beyond-img small site-img-reveal delay-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/beyond-surgery-2nd.webp",
                                                        alt: "Plantation drive",
                                                        width: 420,
                                                        height: 260
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                        lineNumber: 383,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                                    lineNumber: 382,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 372,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 354,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "beyond-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "beyond-img large site-img-reveal delay-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/beyond-surgery-3rd.webp",
                                            alt: "Community care",
                                            width: 720,
                                            height: 650
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                            lineNumber: 395,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                        lineNumber: 394,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 393,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 353,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "consultation-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-aos": "fade-up",
                                    children: consultationSection?.title || "CONSULTATION"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 406,
                                    columnNumber: 25
                                }, this),
                                consultationSection?.paragraphHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "100",
                                    dangerouslySetInnerHTML: {
                                        __html: consultationSection.paragraphHtml
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 411,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Leena$2f$projects$2f$sanjay$2d$sonar$2f$sanjay__sonar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/consultation",
                                    className: "consultation-btn site-cta",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "300",
                                    children: "Request a consultation"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                                    lineNumber: 420,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                            lineNumber: 405,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                    lineNumber: 352,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Leena/projects/sanjay-sonar/sanjay sonar/pages/HomePage.jsx",
                lineNumber: 348,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Leena_projects_sanjay-sonar_sanjay%20sonar_09loaj3._.js.map