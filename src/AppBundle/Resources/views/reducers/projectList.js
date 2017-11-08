const initialState = {
    data:[],
    loading: true,
    error: false
}

export default function projectList(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_PROJECTS': {
            return {
                loading: true,
                error: false
            }
        }
        case 'LOAD_PROJECTS_SUCCESS': {
            return {
                data: action.payload,
                loading: true,
                error: false
            }
        }

        case 'LOAD_PROJECTS_ERROR': {
            return {
                loading: false,
                error: true
            }
        }

        default:
            return state;
    }
}