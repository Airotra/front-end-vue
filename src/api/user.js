import http from '@http/http'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)
export const _userInfo = (id) => http.GET('/api/user/' + id)
export const _userInfoSave = (query) => http.PUT('/api/user/' + query.id, query)
export const _adminInfo = (id) => http.GET('/api/admin/' + id)
export const _adminInfoSave = (query) => http.PUT('/api/admin/' + query.id, query)
