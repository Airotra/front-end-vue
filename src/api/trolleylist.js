import http from '@http/http'
export const trolleylist = (query) => http.GET('/api/trolleyContainGoods/getTrolleyGoods', query)
