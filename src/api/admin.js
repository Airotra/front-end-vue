import http from '../tools/http/http'

export const _adminLogin = (query) => http.GET('/api/admin/adminLogin', query)
export const _getAllCoupon = (id) => http.GET('/api/coupon/getAllCoupon')
export const _modifyCoupon = (query) => http.PUT('/api/coupon/' + query.couponId, query)
export const _modifyUserCoupon = (query) => http.POST('/api/userCouponHas/updateUserCoupon', query)
export const _addrCoupon = (query) => http.POST('/api/coupon', query)
export const _addrAdminProvideCoupon = (query) => http.POST('/api/adminCouponProvide', query)
