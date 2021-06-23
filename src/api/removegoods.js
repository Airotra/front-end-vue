import http from '@http/http'
export const removegoods = (query) => http.GET('/api/trolleyContainGoods/removeGoods', query)
