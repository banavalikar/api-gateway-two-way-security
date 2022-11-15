# api-gateway-two-way-security

This repo demonstrates how to secure an API gateway with dual layer security using a key and JWT token.

![alt text](https://github.com/banavalikar/api-gateway-two-way-security/blob/main/apicog.png?raw=true)

## Table of Contents
1. [About this Repo](#About)
2. [How to use the repo](#Examples)
3. [Learning Resources](#Learning)
4. [License](#License)

## About this Repo <a name="About"></a>
It is always a good practice to add more than one layers of security where an exchange happens between internal and external entities. This repo shows an example of how API gateways can be secured using two layers of security - 1. An API key and 2. An AWS Cognito generated JWT token.

## Steps involved <a name="Examples"></a>
1. Git clone the repo 
2. Run the template from the IaC folder in CloudFormation to create a user pool and user pool client in Cognito.
3. Create a node.js lambda function and replace the function body with the Key.js file from the Lambda folder.
4. Create an API Gateway and create Cognito authorizer (see [Learning Resources](#Learning))
5. Run the commands from the test folder from your preferred console. Try different combinations of correct and incorrect keys/JWT token.
6. Delete the gateway, CloudFormation stack and lambda function after you finish.


## Learning Resources <a name="Learning"></a>
- [Building nodejs functions with Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html)
- [AWS Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/tutorial-create-user-pool.html)
- [Using Cognito authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html)


# License <a name="License"></a>

This library is licensed under the Apache 2.0 License.


