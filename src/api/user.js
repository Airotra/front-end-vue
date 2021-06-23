import http from '@http/http'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)
export const _userInfo = (id) => http.GET('/api/user/' + id)
export const _userInfoSave = (query) => http.PUT('/api/user/' + query.id, query)
export const _adminInfo = (id) => http.GET('/api/admin/' + id)
export const _adminInfoSave = (query) => http.PUT('/api/admin/' + query.id, query)
export const _userAddrInfo = (id) => http.GET('/api/user/getAddr', {id: id})
export const _userAddrInfoSave = (query) => http.PUT('/api/adress/' + query.id, query)
export const _addrDelete = (id) => http.DELETE('/api/adress/' + id)
