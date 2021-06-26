import http from '../tools/http/http'

export const _delPicture = (url) => http.GET('/api/file/delPicture', {url: url})
