
function myMiddleware(req, res, next){
    req.someStuff = "hello"
    next()
    // if(req.body){
    //     req.body.hello = "hello"
    //     next()
    // } else {
    //     next()
    // }
}

module.exports = myMiddleware