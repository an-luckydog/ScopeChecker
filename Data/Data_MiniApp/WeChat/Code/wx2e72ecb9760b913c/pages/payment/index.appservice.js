$gwx_XC_169=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_169 || [];
function gz$gwx_XC_169_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_169_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_169_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_169_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([3,'onLoginSuccess'])
Z([3,'payment-page payment-page-bg'])
Z([3,'payment-header-wrap'])
Z([[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderType']],[1,'reward_doctor']])
Z([[2,'&&'],[[6],[[7],[3,'orderInfo']],[3,'serviceList']],[[6],[[6],[[7],[3,'orderInfo']],[3,'serviceList']],[3,'length']]])
Z([[6],[[7],[3,'orderInfo']],[3,'serviceList']])
Z([3,'idx'])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[2,'==='],[[7],[3,'mark']],[1,'finddoc']])
Z([3,'payment-content-wrap'])
Z([[6],[[7],[3,'qaUpgradeList']],[3,'length']])
Z([[2,'&&'],[[7],[3,'isNewPayment']],[[6],[[7],[3,'newUpgradeList']],[3,'length']]])
Z([[7],[3,'showVip']])
Z([[7],[3,'abstractList']])
Z([[7],[3,'benefitsCount']])
Z([[7],[3,'benefitsList']])
Z([3,'handleArgeementChange'])
Z([3,'handleVipChange'])
Z([[7],[3,'isVipAgrementSelected']])
Z([[7],[3,'isVipSelected']])
Z([[7],[3,'isVisibleArguments']])
Z([[7],[3,'vipInfo']])
Z([3,'payment-discount-wrap'])
Z([3,'chooseCouponEvent'])
Z([[7],[3,'curCouponInfo']])
Z([[7],[3,'couponList']])
Z([[7],[3,'vipDiscountPrice']])
Z([3,'pay-method-list'])
Z([[2,'&&'],[[7],[3,'showBalance']],[[7],[3,'canUseBalance']]])
Z([[2,'&&'],[[7],[3,'showBalance']],[[2,'!'],[[7],[3,'canUseBalance']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_169_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_169_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_169=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_169=true;
var x=['./pages/payment/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_169_1()
var oXFB=_v()
_(r,oXFB)
if(_oz(z,0,e,s,gg)){oXFB.wxVkey=1
var xYFB=_n('cy-authorize-login')
_rz(z,xYFB,'bindloginSuccess',1,e,s,gg)
_(oXFB,xYFB)
}
else{oXFB.wxVkey=2
var oZFB=_n('view')
_rz(z,oZFB,'class',2,e,s,gg)
var f1FB=_n('view')
_rz(z,f1FB,'class',3,e,s,gg)
var c2FB=_v()
_(f1FB,c2FB)
if(_oz(z,4,e,s,gg)){c2FB.wxVkey=1
}
var h3FB=_v()
_(f1FB,h3FB)
if(_oz(z,5,e,s,gg)){h3FB.wxVkey=1
var c5FB=_v()
_(h3FB,c5FB)
var o6FB=function(a8FB,l7FB,t9FB,gg){
var bAGB=_v()
_(t9FB,bAGB)
if(_oz(z,8,a8FB,l7FB,gg)){bAGB.wxVkey=1
}
bAGB.wxXCkey=1
return t9FB
}
c5FB.wxXCkey=2
_2z(z,6,o6FB,e,s,gg,c5FB,'item','index','idx')
var o4FB=_v()
_(h3FB,o4FB)
if(_oz(z,9,e,s,gg)){o4FB.wxVkey=1
}
o4FB.wxXCkey=1
}
c2FB.wxXCkey=1
h3FB.wxXCkey=1
_(oZFB,f1FB)
var oBGB=_n('view')
_rz(z,oBGB,'class',10,e,s,gg)
var xCGB=_v()
_(oBGB,xCGB)
if(_oz(z,11,e,s,gg)){xCGB.wxVkey=1
}
var oDGB=_v()
_(oBGB,oDGB)
if(_oz(z,12,e,s,gg)){oDGB.wxVkey=1
}
var fEGB=_v()
_(oBGB,fEGB)
if(_oz(z,13,e,s,gg)){fEGB.wxVkey=1
var cFGB=_mz(z,'cy-vip',['abstractList',14,'benefitsCount',1,'benefitsList',2,'bind:agreementStatusChange',3,'bind:vipStatusChange',4,'isVipAgreementSelected',5,'isVipSelected',6,'isVisibleArguments',7,'vipInfo',8],[],e,s,gg)
_(fEGB,cFGB)
}
xCGB.wxXCkey=1
oDGB.wxXCkey=1
fEGB.wxXCkey=1
fEGB.wxXCkey=3
_(oZFB,oBGB)
var hGGB=_n('view')
_rz(z,hGGB,'class',23,e,s,gg)
var cIGB=_mz(z,'choose-coupon',['bind:chooseCoupon',24,'couponInfo',1,'coupons',2],[],e,s,gg)
_(hGGB,cIGB)
var oHGB=_v()
_(hGGB,oHGB)
if(_oz(z,27,e,s,gg)){oHGB.wxVkey=1
}
oHGB.wxXCkey=1
_(oZFB,hGGB)
var oJGB=_n('view')
_rz(z,oJGB,'class',28,e,s,gg)
var lKGB=_v()
_(oJGB,lKGB)
if(_oz(z,29,e,s,gg)){lKGB.wxVkey=1
}
var aLGB=_v()
_(oJGB,aLGB)
if(_oz(z,30,e,s,gg)){aLGB.wxVkey=1
}
lKGB.wxXCkey=1
aLGB.wxXCkey=1
_(oZFB,oJGB)
_(oXFB,oZFB)
}
oXFB.wxXCkey=1
oXFB.wxXCkey=3
oXFB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_169";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_169();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/payment/index.wxml'] = [$gwx_XC_169, './pages/payment/index.wxml'];else __wxAppCode__['pages/payment/index.wxml'] = $gwx_XC_169( './pages/payment/index.wxml' );
	;__wxRoute = "pages/payment/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/payment/index.js";define("pages/payment/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Arrayincludes");var i=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../@babel/runtime/helpers/typeof"),o=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),a=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),n=e(require("../../3B123513829A079C5D745D1477BC7B70.js")),r=require("../../C81F1783829A079CAE797F84E1DB7B70.js"),s=e(require("../../39634846829A079C5F052041CEBB7B70.js")),c=getApp(),d=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,p=require("../../D6CAF1F1829A079CB0AC99F6BFEC7B70.js"),l={tempVipType:"gc",options:{},payParams:{},weixinPayResult:{},curUpgrade:{},periodInfo:"",hasNavToPer:!1,perOrderId:"",perSuccessCB:null,wxPaySignInfo:{},isUserSelectedVip:!1,isPayWithOriginalId:!1},u="graph",_="fast_phone",f="paid_clinic",g="multi_problems",h="qa_upgrade",v="package",y={qadoc:"qaOrUp",paid_clinic:"qaOrUp",qa_upgrade:"qaUpgrade",upgrade:"qaOrUp",sendheart:"sendheart",h5_send_heart:"h5SendHeart",emergency:"emergency",emergency_graph:"emergency",inquiry:"inquiry",vip_doctor_apply:"vipDocApply",service_order:"serviceOrder",app_special_service:"appSpecialService",register_apply:"registerApply",revisit:"revisit",advanced:"advanced",finddoc:"finddoc",fast_phone:"fastPhone",cy_vip:"cyVip",package:"package",video_inquiry_saas:"videoInquirySaas",graph:"graph",expert_consultation:"expertConsultation",baichuan_ai_chat:"baichuanAiChat"};Page({data:{isLogin:!0,orderInfo:{name:"",orderType:"",serviceList:[],extraInfo:[]},needPayPrice:0,isPaidClinicOrUpgrade:!1,payLoading:!1,balance:0,showBalance:!1,canUseBalance:!1,curPayMethod:"",payMethods:{wx:"weixin",balance:"balance"},isVisibleArguments:!0,qaUpgradeList:[],curCouponInfo:{},couponList:[],showVip:!1,vipInfo:{},abstractList:[],benefitsCount:0,benefitsList:[],isVipSelected:!1,isVipAgrementSelected:!1,vipDiscountPrice:0,selectedIcon:"https://static.chunyuyisheng.com/@/chunyu_mini/selected.png",noSelectedIcon:"https://static.chunyuyisheng.com/@/chunyu_mini/noselect.png",isNewPayment:!1,recommend_id:""},onLoad:function(e){var i=this;l.options=Object.freeze(e||{}),this.initPayMethod();var t=this.setPayParams(e),o={type:t.type,upgradeType:t.info.upgrade_type||"",subList:(t.info.sub_list||[]).map((function(e){var i;return{type:e.type||"",upgradeType:(null===(i=e.info)||void 0===i?void 0:i.upgrade_type)||""}}))};l.payParams=t,l.originPayInfo=Object.freeze(o),c.globalData.appIsLogin.then((function(){i.onLoginSuccess()}),(function(){i.setData({isLogin:!1})})),1==e.has_new_coupon&&this.showAlertBeforeLeave()},onShow:function(){(0,n.default)({name:"订单支付页"});var e=l.hasNavToPer;if(void 0!==e&&e){l.hasNavToPer=!1;var i=c.globalData.referrerInfo,o=i.appId,a=void 0===o?"":o,r=i.extraData;if("wxbd687630cd02ce1d"===a){if(void 0===t(r))return void this.pollPeriodSignStatus();r&&"SUCCESS"===r.return_code?this.pollPeriodSignStatus():(this.setData({payLoading:!1}),wx.showToast({title:"签约失败",icon:"none",duration:1500}))}}},onHide:function(){c.globalData.referrerInfo={},this.stopAllPollEvents()},onUnload:function(){c.globalData.referrerInfo={},this.stopAllPollEvents(),(0,r.cancelDocDisCoupon)()},getOrderInfo:function(e){var i=this;wx.showLoading({title:"订单信息获取中",mask:!0});var t=this.convertObjToStr(e.info),o=Object.assign({},e,{info:t});console.log(o),o.version="10.3.2",(0,r.getPayInfo)(o).then((function(e){e.success?(l.weixinPayResult=Object.assign({},e),i.renderPayInfo(e,o)):(wx.hideLoading(),wx.showToast({title:"订单信息获取失败",icon:"none"}))})).catch((function(e){console.log("getPayInfo",e),wx.hideLoading(),wx.showModal({title:"提示",content:"网络连接失败，请重试",showCancel:!1,success:function(e){e.confirm&&i.getOrderInfo(l.payParams)}})}))},renderPayInfo:function(e,i){var t=e.period_info,o=void 0===t?"":t,a=e.chunyu_vip_info,n=void 0===a?{}:a,r=e.balance,s=void 0===r?0:r,c=e.need_pay,d=void 0===c?0:c,p=e.vip_discount_price,u=e.orderInfo,_=void 0===u?{}:u,g=e.available_coupons,v=void 0===g?[]:g,y=e.unavailable_coupons,m=void 0===y?[]:y,w=e.select_upgrade_type,x=void 0===w?"":w,b={};try{b=JSON.parse(i.info),console.log(b)}catch(e){console.log("JSON.parse err",e,i)}var P=this.setVipInfo(n),S=P.isVipSelected,T=P.showVip,I=P.vipInfo,L=P.abstractList,C=P.benefitsList,U=P.benefitsCount;if(!S||l.isUserSelectedVip){var D=this.setOrderInfo(e,b);D.infoDict.select_wx_vip=S,S&&(D.infoDict.vip_type=l.tempVipType),this.data.needPayPrice=d||0,l.periodInfo=o,this.setDefaultPayMethod(s);var O=this.setCouponInfo(e),q=this.changeUpgradeList(x);this.setData({needPayPrice:d||0,orderInfo:Object.assign(_,D),isPaidClinicOrUpgrade:D.orderType===f||D.orderType===h,balance:s,showVip:T,vipInfo:I,isVipSelected:S,abstractList:L,benefitsList:C,benefitsCount:U,qaUpgradeList:q,vipDiscountPrice:p||0,curCouponInfo:O,couponList:this.setCouponList(v,O,m),payLoading:!1,isVisibleArguments:"combo_service"!==D.orderType}),wx.hideLoading()}else this.handleVipChange()},handleClickPayBtn:function(){if(!this.data.isVipAgrementSelected&&this.data.isVipSelected&&this.data.showVip)return wx.showToast({title:"请先阅读并同意协议",icon:"none"}),void d("ListShow",{list_value:"勾选会员连续订阅服务协议toast提示"});wx.showLoading({title:"订单提交中",mask:!0});var e=this.data,i=e.orderInfo,t=void 0===i?{}:i,o=e.curCouponInfo,a=void 0===o?{}:o,n=l.options,r=n.mark,s=n.name,p=n.hospital,_=n.payment_order_id,g=n.activity_partner,v={from_wx_mini:1,partner:c.globalData.partner,finish_success_url:"",finish_fail_url:"",order_name:t.name||"",order_type:t.orderType||"",order_desc:"",info_dict:t.infoDict};if(this.data.recommend_id&&(v.info_dict.recommend_id=this.data.recommend_id),_)return wx.hideLoading(),void this.chunyuPay(_,v.order_type,v.info_dict);t.orderType===h||t.orderType===f?v=Object.assign(v,{finish_success_url:"/pages/qa_im/index?partner=chunyu_wap_mini",order_desc:p||"",info_dict:v.info_dict}):"finddoc"===r&&(v=Object.assign(v,{finish_success_url:"/pages/qa_im/index?partner=chunyu_wap_mini",order_name:"".concat(s,"-图文咨询"),order_type:u,order_desc:p}),g&&(v.activity_partner=g)),l.periodInfo&&(v.period_info=l.periodInfo),a.id&&(v.info_dict.coupon_id=a.id,v.info_dict.use_coupon=!0),this.onCreateOrder(v)},onCreateOrder:function(e){var i=this,t=e.info_dict,o=void 0===t?{}:t,a=e.order_type,n=l.weixinPayResult,s=void 0===n?{}:n,c=l.payParams,d=void 0===c?{}:c,u=this.data.orderInfo,f=void 0===u?{}:u;a!==h||o.upgrade_type||(p.setFilterMsg("PAYMENT"),p.error("PAYMENT",{orderData:e,payParams:d,weixinPayResult:s})),e.info_dict=JSON.stringify(o),this.setData({payLoading:!0}),(0,r.createOrder)(e).then((function(e){wx.hideLoading(),e.success&&e.payment_order_id?(f.id=e.payment_order_id,i.chunyuPay(e.payment_order_id,a,o)):(wx.showToast({title:e.error_msg||"创建订单失败",icon:"none"}),i.setData({payLoading:!1}),a===_&&setTimeout((function(){wx.setStorageSync("fast-phone-fail",1),wx.navigateBack()}),1500))})).catch((function(e){console.log("createOrder error::",e),wx.hideLoading(),wx.showToast({title:"创建订单网络请求出错",icon:"none"}),i.setData({payLoading:!1}),a===_&&setTimeout((function(){wx.setStorageSync("fast-phone-fail",1),wx.navigateBack()}),1500)}))},chunyuPay:function(e,i,t){var o=this.data,a=o.curPayMethod,n=o.payMethods,r=void 0===n?{}:n;this.setData({payLoading:!0}),wx.showLoading({title:"正在支付",mask:!0}),a===r.wx?this.wxPayEvent(e,i,t):a===r.balance&&this.balancePayEvent(e,i,t)},balancePayEvent:function(e,i,t){var o=this;(0,r.balancePay)(e,this.data.payMethods.balance).then((function(a){wx.hideLoading(),0===a.error?o.pollPayResult(e,i,t,!1):2===a.error?(o.setData({payLoading:!1}),wx.reLaunch({url:"/pages/all_service/index"})):((0,r.revertCoupon)({order_id:e}),wx.showToast({title:a.msg||"订单支付失败",icon:"none"}),o.setData({payLoading:!1}))})).catch((function(e){console.log("balancePay error::",e),wx.hideLoading(),wx.showToast({title:"订单支付网络请求出错",icon:"none"}),o.setData({payLoading:!1})}))},wxPayEvent:function(e,i,t){var o=this,a=l.periodInfo,n=void 0===a?"":a;(0,r.getWxPayParams)(e).then((function(a){if(0===a.error){var s=a.wx_mini_params;l.wxPaySignInfo=s,n?o.wxPeriodEvent(e):(wx.hideLoading(),wx.requestPayment({timeStamp:s.timeStamp,nonceStr:s.nonceStr,package:s.package,signType:s.signType,paySign:s.paySign,success:function(){o.pollPayResult(e,i,t,!1)},fail:function(i){console.log(i),wx.reportEvent("wx_requestpayment_fail",{open_id:wx.getStorageSync("open_id")||"",doctor_id:t.doctor_id||"",problem_id:"",error_msg:(null==i?void 0:i.errMsg)||""}),l.isPayWithOriginalId||(0,r.revertCoupon)({order_id:e}),wx.showToast({title:"支付失败",icon:"none"}),o.setData({payLoading:!1})}}))}else 2===a.error?(wx.hideLoading(),o.setData({payLoading:!1}),wx.reLaunch({url:"/pages/all_service/index"})):(wx.hideLoading(),l.isPayWithOriginalId||(0,r.revertCoupon)({order_id:e}),wx.showToast({title:a.msg||"订单支付失败",icon:"none"}),o.setData({payLoading:!1}))})).catch((function(i){console.log("getWxPayParams error::",i),l.isPayWithOriginalId||(0,r.revertCoupon)({order_id:e}),wx.hideLoading(),wx.showToast({title:"订单支付网络请求出错",icon:"none"}),o.setData({payLoading:!1})}))},wxPeriodEvent:function(e,i){var t=this;(0,r.getWxPeriodParams)(e).then((function(o){if(0===o.error_code){wx.hideLoading();var a=o.extra_data;wx.navigateToMiniProgram({appId:"wxbd687630cd02ce1d",path:"pages/index/index",extraData:{appid:a.appid,mch_id:a.mch_id,plan_id:a.plan_id,contract_code:a.contract_code,request_serial:a.request_serial,contract_display_account:a.contract_display_account,notify_url:a.notify_url,sign:a.sign,timestamp:a.timestamp,outerid:a.outerid},success:function(){l.hasNavToPer=!0,l.perOrderId=e,l.perSuccessCB=i},fail:function(){wx.showToast({title:o.msg||"签约失败",icon:"none"}),t.setData({payLoading:!1})}})}else wx.hideLoading(),wx.showToast({title:o.msg||"获取微信签约信息失败",icon:"none"}),t.setData({payLoading:!1})})).catch((function(e){console.log("getWxPeriodParams error::",e),wx.hideLoading(),wx.showToast({title:"获取微信签约信息网络请求出错",icon:"none"}),t.setData({payLoading:!1})}))},pollPayResult:function(e,i,t){var o=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(console.log("查询支付状态"),wx.showLoading({title:"支付状态查询中，请勿重复支付",mask:!0}),!e)return wx.showToast({title:"订单 id 获取出错",icon:"none"}),void wx.hideLoading();l.payResultPoll=new s.default({fn:r.getPayResult,valid:r.isPayResultValid,interval:1e3,maxAttempts:-1}),l.payResultPoll.executePoll(e).then((function(n){console.log("pollPayResult res",n);var r=n||{},s=r.error_msg;0===r.error?a?(wx.showToast({title:"支付成功",icon:"none",duration:1500}),l.perSuccessCB&&"function"==typeof l.perSuccessCB?l.perSuccessCB():wx.reLaunch({url:"/pages/all_service/index"})):o.paySuccessCb(e,i,t,n):(o.setData({payLoading:!1}),wx.showToast({title:s||"支付状态异常",icon:"none",duration:1500}))})).catch((function(e){console.log("pollPayResult error ::",e),wx.hideLoading(),o.setData({payLoading:!1}),wx.showToast({title:"支付状态查询出错",icon:"none",duration:1500})}))},setOrderInfo:function(e,i){var t=e.service_info_list,o=e.default_price,a=e.need_pay,n=(t||[]).map((function(e,i){return{idx:i,name:e.name||"",price:e.price||0,priceText:e.price_text||"¥".concat(e.price,".00")}})),r={name:e.order_name||"服务名称",orderType:e.order_type,serviceList:n,needPay:a,defaultPrice:o,infoDict:i},s=l.options,c=s.hospital,d=void 0===c?"":c,p=s.title,u=void 0===p?"":p,_=s.is_vip_doc,f=void 0===_?"":_,g=s.mark;if("finddoc"===(void 0===g?"":g)){var h=[{label:"医院",content:d},{label:"职称",content:u},{label:"对话回合",content:"1"===String(f)?"10次":"50次"},{label:"对话时长",content:"48小时"}];r.extraInfo=h}return r},setVipInfo:function(e){var i;console.log("vip_info"),console.log(e);var t=!1,o={},a=[],n=[],r=0,s=!1;if(null!=e&&null!==(i=e.vip_info)&&void 0!==i&&i.is_display&&(t=!0),Object.keys(e).length){var c=e.facade_scene,d=void 0===c?{}:c,p=e.vip_info,u=void 0===p?{}:p;o={title:u.title||"",desc:u.desc||"",price:u.price||0,priceDesc:u.price_desc||""},(s=Boolean(u.is_selected))||this.setData({isVipAgrementSelected:!1});var _=l.payParams.info,f=void 0===_?{}:_;f.select_wx_vip=s,f.vip_type=l.tempVipType;var g=d.abstract_list,h=void 0===g?[]:g,v=d.detail_list,y=void 0===v?[]:v,m=d.detail_count,w=void 0===m?0:m;a=h.map((function(e,i){return{no:e.no||"vip_".concat(i),benefitName:e.benefit_name||"",iconUrl:e.icon_url||"",benefitAbstract:e.benefit_abstract||"",tipDesc:e.tip_desc||""}})),n=y.map((function(e,i){return{idx:i,groupName:e.group_name||"",facadeList:(e.facade_list||[]).map((function(i,t){return{no:e.no||"vip_".concat(t),benefitName:i.benefit_name||"",iconUrl:i.icon_url||"",benefitAbstract:i.benefit_abstract||""}}))}})),r=w}return{isVipSelected:s,showVip:t,vipInfo:o,abstractList:a,benefitsList:n,benefitsCount:r}},handleVipChange:function(){l.isUserSelectedVip=!l.isUserSelectedVip,this.vipStatusChangeEvent(l.isUserSelectedVip)},vipStatusChangeEvent:function(e){var i=l.payParams,t=void 0===i?{}:i,o=l.originPayInfo,a=void 0===o?{}:o;if(e&&(l.curUpgrade={}),this.setInfoByVipChange(t,e,a),t.type===v){var n=t.info.sub_list.find((function(e){return e.type===f||e.type===h}));if(n){var r=a.subList.find((function(e){return e.type===f||e.type===h}))||{};this.setInfoByVipChange(n,e,r)}}this.data.isVipSelected||this.setData({isVipAgrementSelected:!1}),this.getOrderInfo(t)},handleArgeementChange:function(){this.setData({isVipAgrementSelected:!this.data.isVipAgrementSelected}),this.data.isVipSelected&&!this.data.isVipAgrementSelected&&d("ListShow",{list_value:"勾选会员连续订阅服务协议标签提示"})},setInfoByVipChange:function(e,i,t){var o=l.tempVipType,a=e.info,n=void 0===a?{}:a;n.select_wx_vip=i,i?(e.type=e.type===f?h:e.type,n.upgrade_type="qc_hospital_upgrade",n.vip_type=o):(e.type=t.type,n.upgrade_type=t.upgradeType,delete n.vip_type)},setCouponInfo:function(e){var t=e.coupon_info,o=e.coupon_discount_price,a=e.is_max_coupon,n=e.available_coupon_num,r=this.data.curCouponInfo,s=void 0===r?{}:r;return s={discountPrice:o,isMax:a,availableNum:n},t&&Object.keys(t).length?t.id&&(l.payParams.info.coupon_id=t.id,l.payParams.info.use_coupon=!0,s=i(i({},t),s)):s.noCoupon=!n||n<=0,s},setCouponList:function(e,i,t){return(e.concat(t)||[]).map((function(e){var t="",o="";"percent_discount"===e.discount_type?(t="折",o=10*e.percent_discount_rate):(t="元",o=e.max_discount_yuan);var a=String(o).split(".");return{id:e.id,title:e.title||"",description:e.description||"",focusPrice:a[0],tipsPrice:a.length>1?".".concat(a[1].substring(0,2)):"",unit:t,expireDate:e.expire_date||"",isSelected:e.id===i.id,isValid:e.is_valid,isExpired:e.is_expired,isUsed:e.is_used,isUnavailable:Boolean(e.reason),reason:e.reason}}))},chooseCouponEvent:function(e){var i=e.detail,t=l.payParams.info,o=void 0===t?{}:t;o.coupon_id=i,o.use_coupon=!!i,l.payParams.info=o,this.getOrderInfo(l.payParams)},changeUpgradeList:function(e){var i=this.data.qaUpgradeList,t=void 0===i?[]:i;if(t&&t.length)return e?t.forEach((function(i){i.type===e?i.isSelected=!0:i.isSelected=!1})):t.forEach((function(e){e.isSelected=!1})),t},initUpgradeList:function(){var e=this;return new Promise((function(i,t){var o=l.payParams,a=void 0===o?{}:o,n=a.info,s=void 0===n?"":n,c=a.type,d=void 0===c?"":c,p=e.convertObjToStr(s);d&&Object.keys(s).length?(0,r.getUpgradeInfo)({type:d,info:p}).then((function(t){if(0===t.error_code){var o=t.data&&t.data.service_list||[];e.data.qaUpgradeList=o.map((function(e,i){return{idx:i,title:e.name||"",price:e.price||0,priceText:e.display_price_text||"",type:e.upgrade_type||"",isSelected:!1}})),e.setData({qaUpgradeList:e.data.qaUpgradeList}),i()}})).catch((function(e){console.log("getUpgradeInfo error::",e),t()})):i()}))},chooseUpgrade:function(e){var i=this,t=this.data.qaUpgradeList,o=void 0===t?[]:t,a=l.payParams,n=void 0===a?{}:a,r=e.currentTarget.dataset.type,s=o.find((function(e){return e.type===r}))||{},c=l.curUpgrade.type!==r;c?(l.isUserSelectedVip=!1,l.curUpgrade=s):l.curUpgrade={},this.setInfoByUpgradeChange(n,c,r),n.type===v&&n.info.sub_list.forEach((function(e){e.type!==f&&e.type!==h||i.setInfoByUpgradeChange(e,c,r)})),this.getOrderInfo(n)},setInfoByUpgradeChange:function(e,i,t){var o=e.info,a=void 0===o?{}:o;i?(a.select_wx_vip=!1,delete a.vip_type,e.type=e.type===f?h:e.type,a.upgrade_type=t):(e.type=e.type===h?f:e.type,a.upgrade_type="")},initPayMethod:function(){this.setData({curPayMethod:this.data.payMethods.wx,showBalance:!0,canUseBalance:!1})},setDefaultPayMethod:function(e){var i=l.weixinPayResult,o=void 0===i?{}:i,a=this.data,n=a.payMethods,r=void 0===n?{}:n,s=a.needPayPrice,c=void 0===s?"":s,d=this.data,p=d.showBalance,u=void 0!==p&&p,_=d.canUseBalance,f=void 0!==_&&_,g=d.curPayMethod,h=void 0===g?"":g,v=l.periodInfo,y=void 0===v?"":v;"object"===t(y)&&(y=Object.keys(y).length?JSON.stringify(y):"");var m=Number(c);h=r.wx;var w=o.valid_platform_list,x=void 0===w?[]:w,b=o.paid_by_balance;x.find((function(e){return e===r.balance}))?u=!0:(u=!1,f=!1),u&&(f=void 0===b&&e>=m||(b||!1)),f&&(h=r.balance),this.setData({curPayMethod:h,balance:e,canUseBalance:f,showBalance:u})},choosePayMethod:function(e){var i=e.currentTarget.dataset.paymethod;this.setData({curPayMethod:i})},setPayParams:function(e){var i={},t=e.payment_order_id,o=e.info,a=e.mark,n=e.order_name,r=e.order_desc,s=e.type,d=e.order_type,p=e.vip_type,u=e.finish_success_url,_=e.finish_fail_url;if(t)l.isPayWithOriginalId=!0,i={pay_order_id:t,common_pay:!0,info:{},type:""};else{l.isPayWithOriginalId=!1;var f=o||"";f&&(f=JSON.parse(decodeURIComponent(f))),i={pay_version:"2"};if(["paid_clinic","app_special_service","revisit","cy_vip","h5_send_heart","video_inquiry_saas","qa_upgrade","graph","package","fast_phone","baichuan_ai_chat"].includes(a))i.order_name=n||"",i.order_desc=r||"",i.type=s||d||"",i.info=f||{},i.finish_success_url=u?decodeURIComponent(u):"",i.finish_fail_url=_?decodeURIComponent(_):"","cy_vip"===a&&(i.vip_type=p||l.tempVipType);else{var g=c.globalData.order_data||{};if(i.order_name=g.order_name||"",i.order_desc=g.order_desc||"",i.type=g.order_type||g.type||"",i.info=g.info_dict||g.info||{},i.recommend_id=g.recommend_id||"",this.data.recommend_id=g.recommend_id||"","upgrade"===a){var h=c.globalData,v=h.fromOneYuan,y=h.is_new_user;i.ask_famous_doc=v&&y?1:0,i.info=Object.assign(i.info,{can_ask_free_qa:0})}}}return i=Object.assign(i,{partner:c.globalData.partner,from_wx_mini:1,is_json:1})},onLoginSuccess:function(){this.setData({isLogin:!0}),this.initPage()},initPage:function(){var e=this;wx.showLoading({title:"订单信息获取中",mask:!0}),this.initUpgradeList().then((function(){console.log(l),e.getOrderInfo(l.payParams)})).catch((function(i){console.log("initPage error::",i),wx.hideLoading(),wx.showModal({title:"提示",content:"网络连接失败，请重试",showCancel:!1,success:function(i){i.confirm&&e.initPage()}})}))},pollPeriodSignStatus:function(){var e=this;console.log("查询签约状态"),wx.showLoading({title:"签约状态查询中，请勿重复支付",mask:!0});var i=l.perOrderId,t=void 0===i?"":i;if(!t)return wx.showToast({title:"订单 id 获取出错",icon:"none"}),void wx.hideLoading();l.periodPoll=new s.default({fn:r.getPeriodSignStatus,valid:r.isPeriodSignStatusValid,interval:1e3,maxAttempts:-1}),l.periodPoll.executePoll(t).then((function(i){console.log("pollPeriodSignStatus res",i);var t=i||{},o=t.error_msg,a=t.status;setTimeout((function(){wx.hideLoading(),"NORMAL"===a?e.pollPayResult(l.perOrderId,"",{},!0):wx.showToast({title:o||"签约状态异常",icon:"none",duration:1500})}),1500)})).catch((function(e){console.log("pollPeriodSignStatus error ::",e),wx.hideLoading(),wx.showToast({title:"签约状态查询出错",icon:"none",duration:1500})}))},paySuccessCb:function(e,i,t,o){var a=this.setCbOptions(e,i,t,o),n=y[l.options.mark]||y[i]||"",r=this.cyPayCallBack(a);(r[n]||r.defaultCallBack)()},setCbOptions:function(e,i,t,o){var a=o.finish_url,n=o.service_type,r=o.service_id;return{docId:t.doctor_id||"",name:l.options.name||"",problemId:t.problem_id||"",orderType:i||"",orderId:e,doctorImg:l.options.doctor_img||"",heartType:c.globalData.heart_type||"",finishUrl:a||"",serviceId:r||"",serviceType:n||""}},cyPayCallBack:function(e){var i=this,t=e.docId,n=void 0===t?"":t,s=e.name,p=void 0===s?"":s,u=e.problemId,_=void 0===u?"":u,f=e.orderType,h=void 0===f?"":f,v=e.orderId,y=void 0===v?"":v,m=e.doctorImg,w=void 0===m?"":m,x=e.heartType,b=void 0===x?"":x,P=e.finishUrl,S=void 0===P?"":P,T=e.serviceType,I=void 0===T?"":T,L=e.serviceId,C=void 0===L?"":L;return wx.showToast({title:"支付成功",icon:"none"}),this.setData({payLoading:!1}),{qaUpgrade:function(){if(S){var e=S.match(new RegExp("[?&]problem_id=([^&]*)(&?)","i")),i=e&&e.length>1&&e[1]||"";i?(0,r.goQaFromAllService)(i):(0,r.switchToAllService)()}else(0,r.switchToAllService)()},qaOrUp:function(){if(h!==g&&_)(0,r.goQaFromAllService)(_);else if(S){var e=S.match(new RegExp("[?&]problem_id=([^&]*)(&?)","i")),i=e&&e.length>1&&e[1]||"";i?(0,r.goQaFromAllService)(i):(0,r.switchToAllService)()}else(0,r.switchToAllService)()},sendheart:function(){wx.redirectTo({url:"/pages/send_heart_ok/index?doc_id=".concat(n,"&name=").concat(p,"&doc_img=").concat(w,"&heart_type=").concat(b)})},h5SendHeart:function(){var e="".concat(o.baseUrl).concat(S);wx.redirectTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(e))})},emergency:function(){if(_)wx.redirectTo({url:"/pages/qa_im/index?problem_id=".concat(_)});else if(S&&S.indexOf("problem_id")>-1){var e=(0,a.getQueryStr)("problem_id",S);(0,r.goQaFromAllService)(e)}else(0,r.switchToAllService)()},inquiry:function(){wx.redirectTo({url:"/pages/tel_inquiry_pay_success/index?pay_order_id=".concat(y)})},vipDocApply:function(){if(d("PageView",{doctor_id:n,platform_source:"weixin_mini",page_title:"预约咨询",page_readable_name:"名院专家-预约成功",source_type:"名院专家-预约咨询"}),S){var e=S.match(new RegExp("[?&]service_id=([^&]*)(&?)","i")),t=e&&e.length>1&&e[1]||"";i.jumpToQaInfinity(t,I)}},expertConsultation:function(){if(d("PageView",{doctor_id:n,platform_source:"weixin_mini",page_title:"预约咨询",page_readable_name:"名院专家-预约成功",source_type:"名院专家-预约咨询"}),S){var e=S.match(new RegExp("[?&]service_id=([^&]*)(&?)","i")),t=e&&e.length>1&&e[1]||"";i.jumpToQaInfinityNew(t)}},serviceOrder:function(){wx.navigateBack({delta:1})},appSpecialService:function(){var e=encodeURIComponent("".concat(o.baseUrl).concat(decodeURIComponent(l.payParams.finish_success_url)))||encodeURIComponent("".concat(o.baseUrl,"/v-m-mall/payment-success"));wx.redirectTo({url:"/pages/h5_webview/index?url=".concat(e)})},registerApply:function(){var e=(c.globalData.order_data||{}).info_dict,i=(void 0===e?{}:e).id;wx.redirectTo({url:"/pages/appointment_doctor_detail/index?id=".concat(i)})},revisit:function(){wx.navigateBack({delta:1})},advanced:function(){h!==g&&_?wx.redirectTo({url:"/pages/qa_im/index?problem_id=".concat(_)}):(0,r.switchToAllService)()},fastPhone:function(){(0,r.switchTabToTarget)("/pages/all_service/index","/pages/pay_success_new/pay_success?page_type=fast_phone")},finddoc:function(){if(S){var e="".concat(o.baseUrl).concat(S);(0,r.getResult)(e,{from_wx_mini:1,is_json:1}).then((function(e){c.globalData.doctor_info=e.doctor_info,c.globalData.problem_id=e.page_info.problem_id,(0,r.goInqueryFromAllService)(e.page_info.problem_id)})).catch((function(e){console.log("".concat(o.baseUrl).concat(S," error::"),e)}))}},cyVip:function(){var e=encodeURIComponent("".concat(o.baseUrl,"/wxvip/home?partner=chunyu_wap_mini")),i="/pages/vip_webview/index?url=".concat(e);(0,r.switchTabToTarget)("/pages/user_center/index",i)},package:function(){var e="/pages/pay_success_new/pay_success?service_count=".concat(l.payParams.info.sub_list.length,"&page_type=normal_service");(0,r.switchTabToTarget)("/pages/all_service/index",e)},videoInquirySaas:function(){var e=encodeURIComponent("".concat(o.baseUrl).concat(S));(0,r.goH5WebviewFromAllService)(e)},defaultCallBack:function(){C?(0,r.goQaFromAllService)(C):(0,r.switchToAllService)()},graph:function(){if(S){var e=S.match(new RegExp("[?&]problem_id=([^&]*)(&?)","i")),i=e&&e.length>1&&e[1]||"";i?(0,r.goQaFromAllService)(i):(0,r.switchToAllService)()}else(0,r.switchToAllService)()},baichuanAiChat:function(){if(S){var e="/pages/h5_webview/index?url=".concat(encodeURIComponent(S));wx.switchTabToTarget("/pages/all_service/index",e)}}}},jumpToQaInfinity:function(e,i){(0,r.getConversationId)(e,i).then((function(e){e.success?wx.redirectTo({url:"/pages/qa_im_infinite/index?problem_id=".concat(e.conversation_id)}):wx.showToast({title:e.error_msg||"会话id获取失败",icon:"none"})})).catch((function(e){console.log("getConversationId error::",e),wx.showToast({title:"获取会话id网络请求出错",icon:"none"})}))},jumpToQaInfinityNew:function(e){(0,r.getConversationIdNew)(e).then((function(e){if(0===e.error_code){var i="/pages/qa_im_infinite/index?problem_id=".concat(e.conversation_id);(0,r.switchTabToTarget)("/pages/all_service/index",i)}else wx.showToast({title:e.error_msg||"会话id获取失败",icon:"none"})})).catch((function(e){console.log("getConversationId error::",e),wx.showToast({title:"获取会话id网络请求出错",icon:"none"})}))},stopAllPollEvents:function(){var e=l.periodPoll,i=l.payResultPoll;e&&e.stop&&"function"==typeof e.stop&&l.periodPoll.stop(),i&&i.stop&&"function"==typeof i.stop&&l.payResultPoll.stop()},convertObjToStr:function(e){return e&&"object"===t(e)?JSON.stringify(e):e},showAlertBeforeLeave:function(){this.data.shouldShowAlertBeforeLeave=!0,wx.canIUse("enableAlertBeforeUnload")&&wx.enableAlertBeforeUnload({message:"您有一张新用户折扣券并未使用，是否要继续退出"})}});
},{isPage:true,isComponent:true,currentFile:'pages/payment/index.js'});require("pages/payment/index.js");