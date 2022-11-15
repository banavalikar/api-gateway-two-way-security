var AWS = require("aws-sdk");

//Update role for this Lambda so it can access API Gateway and insert a key
exports.handler = (event, context, callback) => {
  var apigateway = new AWS.APIGateway({apiVersion: '2015-07-09'});
  var params = {
      description: 'Key created from a lambda function in a different API',
      enabled: true,
      generateDistinctId: true,
      name: 'Client ' + context.awsRequestId,
      stageKeys: [
        {
          restApiId: 'stage id from API Gateway',
          stageName: 'stage name from API Gateway'
        },
      ],
    };
    apigateway.createApiKey(params, function(err, data) {
      if (err) { 
          console.log(err, err.stack); // an error occurredelse
          callback(err);
      } else {
          console.log(data); // successful response
          //callback(null, data);
          
          var params = {
            keyId: data['id'], /* required */
            keyType: 'API_KEY', /* required */
            usagePlanId: 'Usage plan id from API Gateway' /* required */
          };
          apigateway.createUsagePlanKey(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else  {   
              console.log(data);           // successful response
              callback(null, data);
            }
          });
      }
    });
}