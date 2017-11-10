import { combineReducers } from 'redux'
import projectList from './projectList'
import { reducer as formReducer } from 'redux-form';
import { reducer as modal } from 'redux-modal'



export default combineReducers({
    projectList,
    form: formReducer,
    modal
})


