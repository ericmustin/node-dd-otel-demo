const bunyan = require('bunyan')
const logger = bunyan.createLogger({
  name: 'dd-trace',
  level: 'trace'
}) 

const { NodeTracerProvider } = require('@opentelemetry/node');
const { DatadogSpanProcessor, DatadogExporter, DatadogProbabilitySampler, DatadogPropagator } = require('opentelemetry-exporter-datadog');

const provider = new NodeTracerProvider();
 
const exporterOptions = {
  serviceName: 'node-dd-otel-demo', // optional
  agentUrl: 'http://datadog-agent:8126', // optional
  tags: 'example_key:example_value', // optional
  env: 'demo', // optional
  version: '1.0' // optional
};
 
const exporter = new DatadogExporter(exporterOptions);
const processor = new DatadogSpanProcessor(exporter);

provider.addSpanProcessor(processor);
 
// Next, add the Datadog Propagator for distributed tracing 
provider.register({
  propagator: new DatadogPropagator()
});

// const tracer = require('dd-trace').init({
//     logger: {
//         debug: message => logger.trace(message),
//         error: err => logger.error(err)
//       },
//     //service:'service-name',
//     debug:true, 
//     logInjection: true, 
//     hostname: 'datadog-agent', 
//     port: 8126
//     });

// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://mongo:27017/resthub', { useNewUrlParser: true }, function(err, db) {
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});
var db = mongoose.connection;
// Setup server port
//var port = process.env.PORT || 4000;
var port = 4000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

