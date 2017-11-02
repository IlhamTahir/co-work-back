import {get} from '../get'
import {post} from "../post";

export function getProjects() {
    // '/api/1' 获取字符串
    return get('/api/project')
}

export function postProject(title, description) {
    const result = post('/api/project', {
        title: title,
        description: description
    })
}