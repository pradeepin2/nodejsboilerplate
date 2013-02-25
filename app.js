/**
 * User: pradeeps
 * Date: 2/25/13
 * Time: 5:01 PM
 */
var express = require("express"), app = express(), port = parseInt(
    process.env.PORT, 10) || 4567;

/**
 * needed for parsing the request parameters sent in the body of request
 */
app.use(express.bodyParser());

//default redirect url
app.get("/", function(req, res) {
    console.log("inside app redirection");
    res.redirect("/index.html");
});

//default redirection  of any other static urls (/test)
app.get("/test", function(req, res) {
    console.log("inside test  redirection");
    res.redirect("/client/test.html");
});


/**
 * Sample Ajax url(/login) implementation to with request parameter and response
 * @param req request with parameters
 * @param res response with parameters
 */
app.use(express.bodyParser());
app.post("/login", function(req, res) {
    console.log("inside quiz");
    console.log(req.body);
    res.json( {
        userName : req.body.userName
    });
});

/**
 * configuration of the node tp work as web server
 */
app.configure(function() {
    //app.use(express.methodOverride());
    app.use(express.bodyParser());
    //app.use(express.urlencoded);
    /**
     * configurations of the static directories
     */
    app.use(express.static(__dirname + '/test'));
    app.use(express.errorHandler( {
        dumpExceptions : true,
        showStack : true
    }));
    app.use(app.router);
});

/**
 * configuration of the port to run node server
 */
app.listen(port);