import {combineReducers} from 'redux'
import todos from './todos'
import loading from './loading'
import goals from './goals'


export default combineReducers({
    goals,
    todos,
    loading
})