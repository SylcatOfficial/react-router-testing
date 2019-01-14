import React from 'react'
import { Router } from 'react-router-dom'
import { render } from 'react-testing-library'
import { createMemoryHistory } from 'history'

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  const output = render(<Router history={history}>{ui}</Router>)

  return {
    ...output,
    rerender: newUi => render(
      <Router history={history}>{newUi}</Router>,
      { container: output.container },
    ),
    history,
  }
}

module.exports = {
  renderWithRouter,
}
