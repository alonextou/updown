import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider, connect } from "react-redux"

import store from "./store/index"
import { updateScore } from "./actions/index"

// TODO: Move Provider into index.js

store.subscribe(() => console.log(store))
store.dispatch( updateScore(9000) )
window.store = store
// debugger
console.log(store.getState())


class AppRoot extends React.Component {
    constructor(props) {
        super(props)
        store: this.store
        this.score = 3
    }

  render() {
    return (
        <Provider>
          <View style={styles.container}>
            <Text>It scored! It's over 9000! {this.score}</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
          </Provider>
    );
  }
}

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default connect(mapStateToProps)(AppRoot)
