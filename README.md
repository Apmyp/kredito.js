# kredito.js

<img src="/logo.svg" align="right" alt="kredito.js logo" width="195" height="64">

[![npm version](https://badge.fury.io/js/%40apmyp%2Fkredito.js.svg)](https://badge.fury.io/js/%40apmyp%2Fkredito.js)
[![Build Status](https://travis-ci.org/Apmyp/kredito.js.svg?branch=master)](https://travis-ci.org/Apmyp/kredito.js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://en.wikipedia.org/wiki/MIT_License)

A tiny (~112 bytes) and fast module to calculate loan for JavaScript.

First, you install it:

```bash
$ npm i kredito.js
```

Then, you just use it like this for annuity payment type:

```javascript
import { Annuity } from "@apmyp/kredito.js";

const principal = 100000;
const interestRate = 0.12 / 12; // 12% per year we should convert to 1% per month
const installments = 24;
const annuity = new Annuity(principal, interestRate, installments);

annuity.payment(); //=> 4707.35
annuity.percentageInPayment(1); //=> 1000
annuity.bodyInPayment(1); //=> 3707.35
annuity.totalCost(); //=> 112976.33
annuity.overpayment(); //=> 12976.33
```

Or like this for linear payment type:

```javascript
import { Linear } from "@apmyp/kredito.js";

const principal = 100000;
const interestRate = 0.12 / 12; // 12% per year we should convert to 1% per month
const installments = 24;
const linear = new Linear(principal, interestRate, installments);

linear.payment(1); //=> 5166.67
linear.percentageInPayment(1); //=> 1000
linear.bodyInPayment(); //=> 4166.67
linear.totalCost(); //=> 112500
linear.overpayment(); //=> 12500
```

If you want to use CommonJS modules:

```javascript
const { Annuity, Linear } = require('@apmyp/kredito.js');
```
