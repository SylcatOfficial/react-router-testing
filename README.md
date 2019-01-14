# React router testing


![npm version](https://img.shields.io/badge/npm-v0.2.0-blue.svg) 

*author: Aral Roca <aral-rg@hotmail.com>*

-------------------

The idea of this library is to use together with `react-testing-library`. 

Is an utility to test react-router things.

## Install

* `npm install react-router-testing --save`

# Required

* react-testing-library -> `^5.4.4`
* react -> `^16.7.0`
* react-dom -> `^16.7.0`
* react-router-dom -> `^4.3.1`

## Usage

```js
import React from 'react'
import { renderWithRouter } from 'react-router-testing'
import YourComponent from './YourComponent'

describe('YourComponent', () => {
  test('example', () => {
    const { getByText } = renderWithRouter(<YourComponent />)
    const submitButton = getByText('Submit')
    expect(submitButton.type).toBe('submit')
  })
})
```

