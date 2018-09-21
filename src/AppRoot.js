import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { connect } from "react-redux"

import store from "./store/index"
import { updateScore } from "./actions/index"

/*
import store from "./store/index"
store.subscribe(() => console.log(store))
store.dispatch( updateScore(9000) )
window.store = store
console.log(store.getState())
// debugger
*/

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

class AppRoot extends React.Component {
  _updateScore(intAmount) {
    store.dispatch( updateScore(intAmount) )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>UpDown</Text>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{fontSize: 100}}>{this.props.score}</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            onPress={() => this._updateScore(1)}
            title="Up"
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            onPress={() => this._updateScore(-1)}
            title="Down"
          />
        </View>
      </View>
    )
  }
}

/*
const AppRoot = (props) => {
  return (
    <View style={styles.container}>
      <Text>It scored! It's over 9000! {props.score}</Text>
      <Button
        onPress={increaseScore}
        title="increase"
      />
    </View>
  )
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
})

export default connect(mapStateToProps)(AppRoot)
