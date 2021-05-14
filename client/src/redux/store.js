import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    form: formReducer,
})

export let store = createStore(reducers)

window.store = store