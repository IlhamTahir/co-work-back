import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from '../actions/projectList'

const initialState = {
    data:[],
    loading: true,
    error: false
}

export default function projectList(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PROJECTS: {
            return {
                data:[],
                loading: true,
                error: false
            }
        }
        case RECEIVE_PROJECTS: {
            return {
                data: action.data,
                loading: false,
                error: false
            }
        }

        default:
            return state;
    }
}