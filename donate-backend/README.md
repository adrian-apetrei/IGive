<p align="center">
  <a href="https://github.com/adrian-apetrei/donate" target="blank"><img src="../donate-ui/src/assets/png/logolarge.png" width="150" alt="IGive logo" /></a>
</p>

## Description

IGive server-side application was build with [Nest](https://github.com/nestjs/nest) framework. &nbsp; <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="100" alt="Nest Logo" /></a>

## Installation

1. [Register an application on FFDC](https://medium.com/finastra-fintechs-devs/create-an-application-on-finastras-developer-portal-d90ef266cafb)

You need to register an application on [FusionFabric.cloud Developer Portal](https://developer.fusionfabric.cloud) and select [Star Connect - Service](https://developer.preprod.fusionfabric.cloud/api/start-connect-v2-86e9d125-cdcf-470a-8514-8c3aed618e8d/docs).

2. Setup environment variables

Rename `.env.template` to `.env` and setup `OIDC_CLIENT_ID` , `OIDC_CLIENT_SECRET`, `ACCESS_TOKEN_URL` from the application created at step 1, and `MONGODB_URI` the connection string to your mongoDB database.

3. Run `npm i`

<br/>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
