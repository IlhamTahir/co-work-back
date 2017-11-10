/*
 * action 类型
 */
import {getProjects} from '../fetch/home/home'

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    }
}


function reveiceProjects(json) {
    return {
        type: RECEIVE_PROJECTS,
        data: json
    }
}

export function reloadProjects() {
    return dispatch => {
        dispatch(requestProjects())
        const result = getProjects()
        return result.then(response => response.json())
            .then(json => dispatch(reveiceProjects(json)))
    }
}