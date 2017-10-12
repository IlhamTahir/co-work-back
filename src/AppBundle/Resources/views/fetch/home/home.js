import {get} from '../get'

export function getProjects() {
    // '/api/1' 获取字符串
    return get('/api/project')
}