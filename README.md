# Fabric API Docs Version Switcher

An extension which ensures the documentation you are looking at is for the version you are working on.

Often when I am googling classes from the fabric api, the google results are not for the latest version of the game, and manually updating the url each time is time-consuming.
This extension allows you to set a preference for a version, then automatically redirects you to the documentation for that version whenever you visit maven.fabricmc.net.

This currently works for `https://maven.fabricmc.net/docs/fabric-api-{API_VERSION}+{MC_VERSION}`, as well as `https://maven.fabricmc.net/docs/yarn-{MC_VERSION}+{BUILD_ID}`.

Please open an issue if you know of packages with the same problem (different versions posted in different subpaths of same domain) and I can add fixes for those as well.

This extension also fixes a css error with long values inside `<code>` elements inside `<table>`s, adding `overflow-x: auto` to them so they don't cause the entire page to have a scrollbar.
