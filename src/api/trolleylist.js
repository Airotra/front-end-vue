import http from '@http/http'
export const trolleylist = (id) => http.GET('/api/trolleyContainGoods/getGoodsID', {id: id})
