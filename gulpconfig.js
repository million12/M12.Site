module.exports = {
    vendorsDir: "BowerComponents",
    source: {
        styles: "Packages/Sites/M12.Site/Resources/Private/Styles/**/",
        vendorScripts: [
            // "BowerComponents/es6-promise/promise.js",
            "BowerComponents/jquery.scrollTo/jquery.scrollTo.js",
            "BowerComponents/jquery.localScroll/jquery.localScroll.js"
        ],
        scripts: [
            "Packages/Sites/M12.Site/Resources/Private/Scripts/App.js"
        ],
        fonts: [
            "BowerComponents/Font-Awesome/fonts/*.*",
            "BowerComponents/open-sans-fontface/fonts/**/*"
        ],
        includePaths: [
            "BowerComponents",
            "BowerComponents/foundation/scss",
            "BowerComponents/Font-Awesome/scss"
        ]
    },
    dest: {
        styles: "Packages/Sites/M12.Site/Resources/Public/Styles",
        scripts: "Packages/Sites/M12.Site/Resources/Public/Scripts",
        images: "/_Resources/Static/Packages/M12.Site/Images",
        fonts: "Packages/Sites/M12.Site/Resources/Public/Fonts"
    },
    watch: {
        styles: "Packages/Sites/M12.Site/Resources/Private/Styles/**/*",
        scripts: "Packages/Sites/M12.Site/Resources/Private/Scripts/**/*",
        php: [
            "Packages/Plugins/M12.Foundation/**/*",
            "Packages/Sites/M12.Site/Classes/**/*",
            "Packages/Sites/M12.Site/Configuration/**/*",
            "Packages/Sites/M12.Site/Resources/Private/**/*"
        ]
    },
    clear: [
        "Packages/Sites/M12.Site/Resources/Public/Styles/*",
        "Packages/Sites/M12.Site/Resources/Public/Scripts/*",
        "Packages/Sites/M12.Site/Resources/Public/Fonts/*"
    ]
};
