const path = require("path");
module.exports = {
    title: "ZAQRIT TITLE",
    description: "ZAQRIT DESCRIPTION", configureWebpack: {
        resolve: {
            alias: {
                '@image': path.resolve(__dirname, "../images")
            }
        }
    }
}