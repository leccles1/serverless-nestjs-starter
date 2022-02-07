## Serverless NestJS TypeScript starter


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

This repository is basically the [NestJS FAQ / Serverless](https://docs.nestjs.com/faq/serverless) guide that provides an example NestJS app setup with Serverless. No webpack or esbuild is provided out of the box but could defintely be configured to use either.

serverless-domain-manager plugin is setup as a dependency but not enabled in the serverless.ts file
serverless-offline plugin is setup and enabled by default. However any DynamoDB tables required must have previously had ```yarn run sls:deploy``` setup as there is no serverless-dynamodb-local functionality.

This project was mainly setup as a way to dig into the serverless framework since I found most Serverless examples provided, don't provide enough information OOTB without deeply understanding the serverless framework beforehand. 

I appreciate this also doesn't povide much information about usage and it has been customised to my needs that are;

* Simple mono api exposed through a single lambda function - Looking to split out in future with NestJS still in use.
* Route53 setup with customisation for different stages
  * Requires Certificate setup through aws Certificate Manager
* DynamoDB integration

## Installation

```bash
$ npm install
```
Or

```bash
$ yarn install
```

## Running the app

```bash
# development
$ nest build --watch
$ yarn run start:offline

# watch mode
$ yarn run start:offline

# production mode
$ yarn run sls:deploy
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
