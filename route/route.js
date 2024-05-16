const processRoute=require('./process')

const routes = [
    // {
    //     path:'/process',
    //     handler:processRoute
    // },
    {
        path: '/',
        handler:processRoute
    },
   
]

module.exports = (app) => {
    routes.forEach(r => {
        if (r.path == '/') {
            app.use(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })
}