// Filename: api-routes.js
// Initialize express router


// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to Node API + Tracing crafted for CAKE with love!',
    });
});

var Request = require("request");
// Import contact controller


router.get('/try', function (req, res) {
    Request.get("http://httpbin.org/ip", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body))
    }); 
    
});

var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
//    .patch(contactController.update)
 //   .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;

