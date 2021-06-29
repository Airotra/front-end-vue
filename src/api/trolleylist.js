import http from '@http/http'
export const trolleylist = (query) => http.GET('/api/trolleyContainGoods/getTrolleyGoods', query)
export const getGoods = (id) => http.GET('/api/goods/' + id)
