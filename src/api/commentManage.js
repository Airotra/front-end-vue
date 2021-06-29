import http from '@http/http'
// 获取评论
export const getCommentList = (commentListDTO) => http.POST('/api/goodsComment/listByPage', commentListDTO)
export const deleteCommentsByList = (commentDeleteDTO) => http.POST('/api/goodsComment/deleteCommentByList', commentDeleteDTO)
export const getGoodsById = (id) => http.GET('/api/goods/' + id)
