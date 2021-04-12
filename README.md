# cypress7.0-intercept-post-bug

https://github.com/cypress-io/cypress/issues/15901

```
npm install
npm test
```

Should crash with

```
  1 passing (205ms)

TypeError [ERR_INVALID_ARG_TYPE] [ERR_INVALID_ARG_TYPE]: The first argument must be of type string or an instance of Buffer or Uint8Array. Received type number (123)
    at write_ (_http_outgoing.js:696:11)
    at ClientRequest.write (_http_outgoing.js:661:15)
    at Request.write (/Users/gleb/Library/Caches/Cypress/7.0.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/@cypress/request/request.js:1496:27)
    at /Users/gleb/Library/Caches/Cypress/7.0.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/@cypress/request/request.js:546:20
    at Array.forEach (<anonymous>:null:null)
    at end (/Users/gleb/Library/Caches/Cypress/7.0.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/@cypress/request/request.js:545:23)
    at Immediate._onImmediate (/Users/gleb/Library/Caches/Cypress/7.0.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/@cypress/request/request.js:578:7)
    at processImmediate (internal/timers.js:461:21)
```
