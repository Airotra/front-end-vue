import http from '../tools/http/http'

export const _getAllCoupon = (id) => http.GET('/api/coupon/getAllCoupon')
export const _modifyCoupon = (query) => http.PUT('/api/coupon/' + query.couponId, query)
export const _modifyUserCoupon = (query) => http.POST('/api/userCouponHas/updateUserCoupon', query)
