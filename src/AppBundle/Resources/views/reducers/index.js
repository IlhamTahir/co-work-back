import { combineReducers } from 'redux'
import projectList from './projectList'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    projectList,
    form: formReducer
})


