# kredito.js

<img src="/logo.svg" align="right" alt="kredito.js logo" width="195" height="64">

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/apmyp/takes/kredito.js/master/LICENSE.txt)

A tiny (~58B) and fast module to calculate loan for JavaScript.

First, you install it:

```bash
$ npm i kredito.js
```

Then, you just use it like this for annuity payment type:

```javascript
import { Annuity } from "kredito.js";

const principal = 100000;
const interestRate = 0.12 / 12; // 12% per year we should convert to 1% per month
const instalments = 24;
const annuity = new Annuity(principal, interestRate, instalments);
```

Or like this for linear payment type:

```javascript
import { Linear } from "kredito.js";

const principal = 100000;
const interestRate = 0.12 / 12; // 12% per year we should convert to 1% per month
const instalments = 24;
const linear = new Linear(principal, interestRate, instalments);
```
