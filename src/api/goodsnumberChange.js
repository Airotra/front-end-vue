import http from '@http/http'
export const goodsnumberChange = (query) => http.GET('/api/trolleyContainGoods/updateGoods', query)
