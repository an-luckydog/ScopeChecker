$gwx_XC_222=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_222 || [];
function gz$gwx_XC_222_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_222_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_222_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_222_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([3,'loginActions'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_222_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_222_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_222=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_222=true;
var x=['./pages/vip_pay/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_222_1()
var c82B=_v()
_(r,c82B)
if(_oz(z,0,e,s,gg)){c82B.wxVkey=1
var h92B=_n('cy-authorize-login')
_rz(z,h92B,'bindloginSuccess',1,e,s,gg)
_(c82B,h92B)
}
else{c82B.wxVkey=2
}
c82B.wxXCkey=1
c82B.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_222";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_222();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/vip_pay/index.wxml'] = [$gwx_XC_222, './pages/vip_pay/index.wxml'];else __wxAppCode__['pages/vip_pay/index.wxml'] = $gwx_XC_222( './pages/vip_pay/index.wxml' );
	;__wxRoute = "pages/vip_pay/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/vip_pay/index.js";define("pages/vip_pay/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),e=t.baseUrl+"/weixin/pay/",a=t.baseUrl+"/weixin/pay/create_order/",n=t.baseUrl+"/weixin/do_pay/",i=t.baseUrl+"/weixin/pay/get_weixin_mini_pay_params/",r=t.baseUrl+"/weixin/pay/get_pure_sign_pay_order_params/",s=t.baseUrl+"/weixin/pay/sign/status/",l=t.baseUrl+"/weixin/pay/do_confirm";Page({data:{isLogin:!0,orderInfo:{},serviceInfoList:[],needPay:0,validPlatformList:[],payMethod:"",periodInfo:"",options:{},createOrderInfo:{},hasNavToPer:!1,perOrderId:"",wxPaySignInfo:{},pollInfo:{isPolling:!1,id:null,interval:1e3}},onLoad:function(o){o&&o.finish_success_url&&(o.finish_success_url=decodeURIComponent(o.finish_success_url)),this.data.options=o||{}},onShow:function(){var t=this.data.hasNavToPer;if(void 0!==t&&t){this.data.hasNavToPer=!1;var e=o.globalData.referrerInfo,a=e.appId,n=void 0===a?"":a,i=e.extraData;if("wxbd687630cd02ce1d"===n){if(void 0===i)return void this.startPollingEvent(this.getPeriodSignStatus);i&&"SUCCESS"==i.return_code?this.startPollingEvent(this.getPeriodSignStatus):wx.showToast({title:"签约失败",icon:"none",duration:1500})}}var r=this;o.globalData.appIsLogin.then((function(){console.log("登录状态"),r.setData({isLogin:!0}),r.getPayInfo(r.data.options)}),(function(){console.log("未登录状态"),r.setData({isLogin:!1})}))},onHide:function(){o.globalData.referrerInfo={},this.stopPollingEvent()},onUnload:function(){o.globalData.referrerInfo={},this.stopPollingEvent()},loginActions:function(){console.log("登录成功"),this.setData({isLogin:!0}),this.getPayInfo(this.data.options)},getPayInfo:function(t){var a={pay_version:2,from_wx_mini:1,order_name:t.order_name,type:t.type||"coop_wx_vip",vip_type:t.vip_type||"gc",partner:o.globalData.partner,info:t.info,is_json:1},n=this;wx.request({url:e,method:"GET",header:{"Content-Type":"application/json",Cookie:o.globalData.sessionid},data:a,success:function(o){var t=o.data||{};t.success?n.setData({orderInfo:{orderName:t.order_name,order_type:t.order_type,order_desc:t.order_desc},serviceInfoList:(t.service_info_list||[]).map((function(o,t){return{idx:t,name:o.name||"",price:o.price||0,priceText:o.price_text||""}})),needPay:t.need_pay,validPlatformList:t.valid_platform_list||[],periodInfo:t.period_info||"",payMethod:t.valid_platform_list[0]||""}):wx.showToast({title:t.error_msg||"订单信息获取失败",icon:"none"})},fail:function(o){wx.showToast({title:o.data.error_msg||"订单信息获取失败",icon:"none"})}})},changePayMethodEvent:function(o){this.setData({payMethod:o.currentTarget.dataset.paymethod})},setCreateOrderInfo:function(){var t=this.data,e=t.orderInfo,a=void 0===e?{}:e,n=t.options,i=void 0===n?{}:n,r=t.periodInfo,s=void 0===r?"":r,l={from_wx_mini:1,partner:o.globalData.partner,order_name:a.orderName||"春雨医生服务",order_type:a.order_type,info_dict:JSON.stringify({vip_type:i.vip_type||"gc",partner:o.globalData.partner})};return s&&s.length&&(l.period_info=s),l},creatOrderEvent:function(){var t=this.setCreateOrderInfo();console.log(o.globalData.sessionid),console.log(t);var e=this;this.data.payMethod&&this.data.payMethod.length?wx.request({url:a,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},data:t,success:function(o){console.log(o),o.data.success&&o.data.payment_order_id?e.payEvent(o.data.payment_order_id):wx.showToast({title:o.data.error_msg||"订单创建失败",icon:"none"})},fail:function(o){wx.showToast({title:o.data.error_msg||"订单创建出错",icon:"none"})}}):wx.showToast({title:"请选择支付方式",icon:"none"})},payEvent:function(o){var t=this.data.payMethod,e=void 0===t?"":t;"weixin"===e?this.wxPayEvent(o):"balance"===e?this.balancePayEvent(o):wx.showToast({title:"支付方式选择有误，请重新选择",icon:"none"})},wxPayEvent:function(t){var e=this,a={from_wx_mini:1,order_id:t};wx.showToast({title:"正在支付",icon:"loading"}),wx.request({url:i,method:"GET",header:{"Content-Type":"application/json",Cookie:o.globalData.sessionid},data:a,success:function(o){if(0===o.data.error){var a=o.data.wx_mini_params;e.setData({wxPaySignInfo:a}),e.data.periodInfo&&e.data.periodInfo.length?e.wxPeriodEvent(t):e.wxPay(a)}else wx.showToast({title:o.data.msg||"获取微信支付信息失败",icon:"none",duration:1500})},fail:function(o){wx.showToast({title:o.data.msg||"获取微信支付信息出错",icon:"none",duration:1500})}})},wxPeriodEvent:function(t){var e=this,a={from_wx_mini:1,order_id:t,trade_account:"weixin_mini"};wx.request({url:r,method:"GET",header:{"Content-Type":"application/json",Cookie:o.globalData.sessionid},data:a,success:function(o){if(0===o.data.error_code){var a=o.data.extra_data;wx.navigateToMiniProgram({appId:"wxbd687630cd02ce1d",path:"pages/index/index",extraData:{appid:a.appid,mch_id:a.mch_id,plan_id:a.plan_id,contract_code:a.contract_code,request_serial:a.request_serial,contract_display_account:a.contract_display_account,notify_url:a.notify_url,sign:a.sign,timestamp:a.timestamp,outerid:a.outerid},success:function(o){e.data.hasNavToPer=!0,e.data.perOrderId=t},fail:function(o){wx.showToast({title:o.data.msg||"签约失败",icon:"none",duration:1500})}})}else wx.showToast({title:o.data.msg||"获取微信签约信息失败",icon:"none",duration:1500})},fail:function(o){wx.showToast({title:o.data.msg||"获取微信签约信息出错",icon:"none",duration:1500})}})},wxPay:function(o){var t=this;wx.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:o.signType,paySign:o.paySign,success:function(){t.redirectView("/wxvip/home?partner=chunyu_wap_mini")},fail:function(o){wx.showToast({title:"支付失败",icon:"none",duration:1500}),console.log("requestPayment err:::",o)}})},startPollingEvent:function(o){console.log("start polling",this.data.pollInfo);var t=this.data.pollInfo,e=void 0===t?{}:t;e.isPolling||e.id||(o(),this.data.pollInfo.id=setInterval(o,e.interval),console.log("polling id",this.data.pollInfo))},stopPollingEvent:function(){console.log("start stop polling",this.data.pollInfo),this.data.pollInfo.isPolling=!1,clearInterval(this.data.pollInfo.id),this.data.pollInfo.id=null,console.log("stop stop polling",this.data.pollInfo)},getPeriodSignStatus:function(){console.log("查询签约状态");var t=this.data.perOrderId,e=void 0===t?"":t,a=this;e?(wx.showToast({title:"支付结果查询中，请勿重复支付",icon:"none"}),this.data.pollInfo.isPolling=!0,wx.request({url:s,method:"GET",header:{"Content-Type":"application/json",Cookie:o.globalData.sessionid},data:{order_id:e},success:function(o){var t=o.data||{};if(0===t.error_code){if("TEMP"===t.status)return;a.stopPollingEvent(),console.log("查询签约停止轮询"),setTimeout((function(){"NORMAL"===t.status?a.startPollingEvent(a.getAutoPayResult):wx.showToast({title:t.error_msg||"签约状态异常",icon:"none",duration:1500})}),1e3)}else a.stopPollingEvent(),console.log("签约error_code!=0停止轮询"),setTimeout((function(){wx.showToast({title:t.error_msg||"签约状态查询失败",icon:"none",duration:1500})}),1e3)},fail:function(o){console.log("fail",data),wx.showToast({title:o.data.error_msg||"签约状态查询出错",icon:"none",duration:1500})},complete:function(){a.data.pollInfo.isPolling=!1}})):wx.showToast({title:"订单 id 获取出错",icon:"none"})},getAutoPayResult:function(){console.log("查询自动扣款");var t=this.data.perOrderId,e=void 0===t?"":t,a=this;e?(wx.showToast({title:"支付结果查询中，请勿重复支付",icon:"none"}),this.data.pollInfo.isPolling=!0,wx.request({url:l,method:"GET",header:{"Content-Type":"application/json",Cookie:o.globalData.sessionid},data:{pay_order_id:e},success:function(o){var t=o.data||{};-2!==t.error&&(a.stopPollingEvent(),console.log("支付结果停止轮询"),setTimeout((function(){0===t.error?(wx.showToast({title:"支付成功",icon:"none",duration:1500}),a.redirectView("/wxvip/home?partner=chunyu_wap_mini")):wx.showToast({title:t.msg||"支付失败",icon:"none",duration:1500})}),1e3))},fail:function(o){wx.showToast({title:o.data.msg||"支付出错",icon:"none",duration:1500})},complete:function(){a.data.pollInfo.isPolling=!1}})):wx.showToast({title:"订单 id 获取出错",icon:"none"})},balancePayEvent:function(t){var e=this,a={from_wx_mini:1,pay_order_id:t,pay_method:"balance",return_url:"/wxvip/home?partner=chunyu_wap_mini"};wx.showToast({title:"正在支付",icon:"loading"}),wx.request({url:n,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},data:a,success:function(o){0===o.data.error?e.redirectView(o.data.finish_success_url||"/wxvip/home?partner=chunyu_wap_mini"):wx.showToast({title:o.data.msg||"支付失败",icon:"none",duration:1500})},fail:function(o){wx.showToast({title:o.data.msg||"支付出错",icon:"none",duration:1500})}})},redirectView:function(o){var e=encodeURIComponent("".concat(t.baseUrl).concat(o)),a="/pages/vip_webview/index?url=".concat(e);wx.redirectTo({url:a})}});
},{isPage:true,isComponent:true,currentFile:'pages/vip_pay/index.js'});require("pages/vip_pay/index.js");