# React router testing


![npm version](https://img.shields.io/badge/npm-v0.2.1-blue.svg) 

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
import LinkButton from './LinkButton'

describe('LinkButton Component', () => {
  test('LinkButton is disabled meanwhile is loading', () => {
    const text = 'Some text'
    const { getByText, rerender } = renderWithRouter(
      <LinkButton text={text} />,
    )
    const LinkButtonNode = getByText(text)

    expect(LinkButtonNode.disabled).toBe(false)

    // update loading to true
    rerender(
      <LinkButton text={text} loading />,
    )

    expect(LinkButtonNode.disabled).toBe(true)

    // update loading to false
    rerender(
      <LinkButton text={text} loading={false} />,
    )

    expect(LinkButtonNode.disabled).toBe(false)
  })
})
```
