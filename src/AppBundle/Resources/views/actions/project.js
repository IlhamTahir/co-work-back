/*
 * action 类型
 */
import {getProjects} from '../fetch/home/home'

export const ADD_PROJECT = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const LOAD_PROJECTS_ERROR = 'LOAD_PROJECTS_ERROR';

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