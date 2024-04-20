$gwx_XC_208=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_208 || [];
function gz$gwx_XC_208_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_208_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_208_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_208_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isLogin']])
Z([[7],[3,'desc']])
Z([[2,'==='],[[7],[3,'status']],[1,'i']])
Z([3,'loginSuccess'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_208_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_208_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_208=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_208=true;
var x=['./pages/service_order/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_208_1()
var f5WB=_v()
_(r,f5WB)
if(_oz(z,0,e,s,gg)){f5WB.wxVkey=1
var c6WB=_n('view')
var h7WB=_v()
_(c6WB,h7WB)
if(_oz(z,1,e,s,gg)){h7WB.wxVkey=1
}
var o8WB=_v()
_(c6WB,o8WB)
if(_oz(z,2,e,s,gg)){o8WB.wxVkey=1
}
h7WB.wxXCkey=1
o8WB.wxXCkey=1
_(f5WB,c6WB)
}
else{f5WB.wxVkey=2
var c9WB=_n('cy-userinfo')
_rz(z,c9WB,'bindloginevent',3,e,s,gg)
_(f5WB,c9WB)
}
f5WB.wxXCkey=1
f5WB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_208";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_208();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/service_order/index.wxml'] = [$gwx_XC_208, './pages/service_order/index.wxml'];else __wxAppCode__['pages/service_order/index.wxml'] = $gwx_XC_208( './pages/service_order/index.wxml' );
	;__wxRoute = "pages/service_order/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/service_order/index.js";define("pages/service_order/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../ACF33105829A079CCA9559029C0D7B70.js");require("../../BC983DD1829A079CDAFE55D6E84D7B70.js");Page({data:{isLogin:!1,orderId:"",orderNo:"",status:"",statusText:"",price:"",serviceId:"",serviceType:"",serviceTypeText:"",des:"",orderType:"",clinicName:""},onLoad:function(e){this.options=e;var t=decodeURIComponent(e.scene),r=t=this.parseScene(t),i=r.type,o=r.id;this.options.serviceId=e.scene,this.options.recordId=o,this.options.orderType=i},onReady:function(){},onShow:function(){var t=this;e.globalData.appIsLogin.then((function(){t.loginSuccess()}),(function(){t.setData({isLogin:!1})}))},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){var e=this,t=Object.keys(this.options).map((function(t){return"".concat(t,"=").concat(e.options[t]||"")})).join("&");return{title:"服务订单",path:"/pages/service_order/index?".concat(t)}},loginSuccess:function(){this.setData({isLogin:!0}),this.init()},init:function(){var e=this.options,t=e.serviceId,r=e.service_id,i=e.recordId,o=e.orderType;i&&o?this.getDetail(i,o):(t||r)&&this.getServiveDetail(t||r)},getServiveDetail:function(e){var r=this;t({url:"/api/v8/expert/".concat(e,"/detail/?is_json=1"),success:function(t){var i=t.data||{};0===i.error_code&&(r.payUrl="/pages/payment/index?payment_order_id=".concat(i.order_id,"&mark=service_order&service_id=").concat(e),r.setData({orderId:i.order_id,orderNo:(i.order_id||"").substr(-8),status:i.status,statusText:i.status_text,price:i.price,serviceType:i.service_type,serviceTypeText:i.service_type_text,desc:i.desc,serviceId:e}))}})},getDetail:function(e,r){var i=this,o="",n="";t({url:"/api/crm/task/order/detail/?record_id=".concat(e,"&order_type=").concat(r),success:function(t){var s=t.data||{},a=s.error_code,c=s.payload;0===a&&("fast_phone"==r?(o="快捷电话服务",n=c.desc,i.payUrl="/pages/payment/index?payment_order_id=".concat(c.order_id,"&&mark=fast_phone&common_pay=true&clinic_name=").concat(c.clinic_name,"&price=").concat(c.price)):"inquiry"==r&&(o="春雨专家服务",n=c.desc,i.payInfo=c),i.setData({orderId:c.order_id,orderNo:(c.order_id||"").substr(-8),status:c.pay_status,statusText:c.pay_status_verbose,price:c.price,serviceTypeText:o,desc:n,serviceId:e,clinicName:c.clinic_name}))},error:function(e){console.log(e)}})},parseScene:function(e){var t={};return"string"!=typeof e||e.split("&").forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=e.split("=");t[r[0]]=r[1]})),t},goBuy:function(){var t=this.options.orderType,r=this.payUrl,i=this.payInfo;if(!r){var o={finish_success_url:"",finish_fail_url:"",order_desc:"",order_name:i.desc,order_type:t,info_dict:i.info_dict,partner:e.globalData.partner};return e.globalData.order_data=o,void wx.navigateTo({url:"/pages/payment/index?name=".concat(i.desc&&i.desc.split("-")[0],"&mark=").concat(t,"&common_pay=true&price=").concat(i.price)})}wx.navigateTo({url:r})}});
},{isPage:true,isComponent:true,currentFile:'pages/service_order/index.js'});require("pages/service_order/index.js");