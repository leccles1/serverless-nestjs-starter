import { AWS } from '@serverless/typescript';


const serverlessConfig: AWS = {
  // org: "<Org Goes Here>",
  service: "serverless-nest-js",
  // app: "serverless-nestjs-starter",
  useDotenv: true,
  provider: {
    stage: "dev",
    name: 'aws',
    region: "eu-west-2",
    runtime: "nodejs12.x",
    lambdaHashingVersion: "20201221",
    endpointType: "REGIONAL",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      // Use .env.<stage> file to provide values
      // stage defaults to dev  
      STAGE: '${env:STAGE}',
      REGION: '${env:REGION}'
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:DescribeTable',
          'dynamodb:Query',
          'dynamodb:Scan',
          'dynamodb:GetItem',
          'dynamodb:PutItem',
          'dynamodb:UpdateItem',
          'dynamodb:DeleteItem'
        ],
        // Resource: [
        //   { "Fn::GetAtt": ['UsersDynamoDBTable', 'Arn'] },
        // ]
      }
    ]
  },
  plugins: [
    // TODO: Plans to upgrade for esbuild compatibility
    // 'serverless-esbuild',
    // Enable below plugin for automatic domain management.
    // 'serverless-domain-manager',
    'serverless-offline'
  ],
  custom: {
    // customDomain: {
    //   domainName: '${self:provider.environment.STAGE}-<domain goes here>.xyz',
    //   basePath: 'v1',
    //   certificateName: '<certificate name goes here>',
    //   stage: '${self:provider.environment.STAGE}',
    //   createRoute53Record: true,
    //   apiType: 'rest',
    //   endpointType: 'regional',
    //   autoDomain: true
    // },
  },
  //For simplicity function definition lives here, could provide imports instead.
  functions: {
    main: {
      handler: 'dist/src/serverlessInitialiser.handler',
      events: [{
        http: {
          method: 'ANY',
          path: "/"
        },
      }, {
        http: {
          method: 'ANY',
          path: "{proxy+}"
        }
      }]
    }
  },
  resources: {
    // Example DynamoDB table declaration.
    // Resources: {
    //   UsersDynamoDBTable: {
    //     Type: "AWS::DynamoDB::Table",
    //     Properties: {
    //       BillingMode: "PAY_PER_REQUEST",
    //       TableName: "${self:custom.tableName}",
    //       AttributeDefinitions: [
    //         { AttributeName: "userId", AttributeType: "S" }
    //       ],
    //       KeySchema: [
    //         { AttributeName: "userId", KeyType: "HASH" }
    //       ]
    //     }
    //   }
    // }
  }
}

module.exports = serverlessConfig;