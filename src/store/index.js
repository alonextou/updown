import { createStore } from "redux"
import appReducer from "../reducers/index.js"
const store = createStore(appReducer)
export default store
