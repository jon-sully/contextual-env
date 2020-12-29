# contextual-env

This package is a thin wrapper function intended to inject the value of an already-set `CONTEXT` environment variable into the environment variable argument given to the function. 

This is best explained in https://jonsully.net/blog/configuring-environment-variables-for-all-netlify-environments/

## Usage

This package is particularly well-suited for Netlify Functions, where `CONTEXT` is set for you. This example shows a Function that will pull the correct `<CONTEXT>_API_KEY` value depending on which Netlify environment it's running in:

```js
import { contextualEnv } from 'contextual-env'

exports.handler = async _ => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: contextualEnvVar('API_KEY'),
      context: process.env.CONTEXT
    })
  }
}

```
