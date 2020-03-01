const proxy = require("http-proxy-middleware")

module.exports = function(app){
    app.use(
        proxy(
            "/general",{
                target:"http://newsapi.org/v2/",
                changeOrigin: true
            }
        )
    )
}