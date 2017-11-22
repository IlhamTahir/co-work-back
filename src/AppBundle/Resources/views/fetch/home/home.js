import {get} from '../get'
import {post} from "../post";

export function getProjects() {
    // '/api/1' 获取字符串
    return get('/api/project')
}

export function postProject(name, description) {
    const result = post('/api/project', {
        name: name,
        description: description,

    })
    return result;
}