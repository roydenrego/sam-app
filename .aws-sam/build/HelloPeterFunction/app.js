// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const Test = require('test');
const request = require('request');
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */



exports.lambdaHandler = async (event, context) => {
    let test = new Test();
    try {
        // const ret = await axios(url);

        let promise = new Promise((resolve, reject) => {
            request('https://reqres.in/api/users?page=2', function (error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.
                resolve({
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: `Hello ${test.test2()}`,
                        response: body
                        // location: ret.data.trim()
                    })
                })
            });
        });

        let response = await promise;

        return response;
    } catch (err) {
        console.log(err);
        return err;
    }

    
};
