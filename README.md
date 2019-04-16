## Motivation

`catch` in Google apps script is reserved word and this make it impossible to use
with promises. And while you can easily overcome it by not using promises which in
fact absent in GAS environment the problem become hard to solve if your project
requires 3rd-party library. In example `jsonwebtoken`, which dependent on another
library, which has `.catch` in its code.

At the end of the day it become simpler to roll-out babel transformation than any
other option.

## Example

**In**

```js
performRequest.then(doSomething).catch(function() { handler() });
```

**Out**

```js

performRequest.then(doSomething)["catch"](function () {
  handler();
});
```

## Installation

```sh
$ npm install babel-plugin-transform-catch
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-transform-catch"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-transform-catch script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-transform-catch"]
});
```
