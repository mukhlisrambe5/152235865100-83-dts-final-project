const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app =>{
    app.use(
        createProxyMiddleware('/playlists/playlist_id', 
        {
            target: 'https://api.spotify.com/v1',
            changeOrigin: true
        })
    )
}