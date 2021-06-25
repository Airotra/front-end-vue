import http from '@http/http'
export const goodsPage = (query) => http.GET('/api/goods/listByPage', query)
export const updateGoodsById = (id, goods) => http.PUT('/api/goods/' + id, goods)
export const deleteGoodsByList = (deleteGoodsDto) => http.POST('/api/goods/deleteGoodsByList', deleteGoodsDto)
export const createGoodsApi = (goodsDetail) => http.POST('/api/goods', goodsDetail)
