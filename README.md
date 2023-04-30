# Fabric API Docs Version Switcher

An extension which ensures the documentation you are looking at is for the version you are working on.

Often when I am googling classes from the fabric api, the google results are not for the latest version of the game, and manually updating the url each time is time-consuming.
This extension allows you to set a preference for a version, then automatically redirects you to the documentation for that version whenever you visit maven.fabricmc.net.

This currently works for `https://maven.fabricmc.net/docs/fabric-api-{API_VERSION}+{MC_VERSION}`, but support for `https://maven.fabricmc.net/docs/yarn-{MC_VERSION}+{BUILD_ID}` is coming soon.

Please open an issue if you know of packages with the same problem (different versions posted in different subpaths of same domain) and I can add fixes for those as well.
