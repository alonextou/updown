// import AppRoot from './src/AppRoot.js'
// export default AppRoot

import React from 'react'
import { Provider } from "react-redux"

import AppRoot from './src/AppRoot.js'
import store from "./src/store/index"
// import { updateScore } from "./actions/index"

// TODO: Move Provider into index.js

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    )
  }
}

export default App
