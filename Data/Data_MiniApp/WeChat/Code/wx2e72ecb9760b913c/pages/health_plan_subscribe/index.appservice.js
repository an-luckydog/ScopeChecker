$gwx_XC_121=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_121 || [];
function gz$gwx_XC_121_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_121_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_121_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_121_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_121_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_121_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_121=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_121=true;
var x=['./pages/health_plan_subscribe/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_121_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_121";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_121();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_plan_subscribe/index.wxml'] = [$gwx_XC_121, './pages/health_plan_subscribe/index.wxml'];else __wxAppCode__['pages/health_plan_subscribe/index.wxml'] = $gwx_XC_121( './pages/health_plan_subscribe/index.wxml' );
	;__wxRoute = "pages/health_plan_subscribe/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_plan_subscribe/index.js";define("pages/health_plan_subscribe/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,i="".concat(e,"/cooperation/wap/get_session_id/"),s="".concat(e,"/product_operation/health_program/set_push/"),t="4ztYTNvm4EoxrjJDNY5z395PKDiNoB9zQGRHUrUKIr4";Page({data:{isLogin:!0,isSubscribed:!1,programId:"",next:""},onShow:function(){var e=this;wx.showLoading({mask:!0}),o.globalData.appIsLogin.then((function(){wx.hideLoading(),e.loginSuccess()})).catch((function(o){console.log("app.globalData.appIsLogin catch::",o),e.setData({isLogin:!1}),e.loginEvent().then((function(){wx.hideLoading(),e.loginSuccess()})).catch((function(o){wx.hideLoading(),wx.showToast({title:o,icon:"none"})}))}))},onLoad:function(o){this.data.programId=o.id,this.data.next=o.next||""},onSubscribe:function(){var e=this;wx.requestSubscribeMessage({tmplIds:[t]}).then((function(i){"accept"===i[t]&&(wx.showLoading({title:"订阅中",mask:!0}),wx.request({url:s,data:{is_push:!0,platform:"weixin_mini"},header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},method:"POST",success:function(o){wx.hideLoading();var i=o.data||{};0===i.error_code?wx.showToast({title:"订阅成功",icon:"success",duration:1500,success:function(){e.setData({isSubscribed:!0}),e.data.next&&wx.redirectTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(e.data.next))})}}):wx.showToast({title:i.error_msg||"订阅失败",icon:"none"})},fail:function(){wx.hideLoading(),wx.showToast({title:"网络出错",icon:"none"})}}))})).catch((function(o){wx.showToast({title:"订阅出错",icon:"none"}),console.log(o)}))},loginSuccess:function(){this.setData({isLogin:!0}),this.isUserSubscribed()},isUserSubscribed:function(){var e=this;wx.showLoading({mask:"true"}),wx.request({url:s,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},method:"GET",success:function(o){var i=o.data||{};console.log(i),0===i.error_code?e.setData({isSubscribed:Boolean(i.is_push)}):e.setData({isSubscribed:!1}),wx.hideLoading()},fail:function(){e.setData({isSubscribed:!1}),wx.hideLoading()}})},loginEvent:function(){return new Promise((function(e,s){wx.login({success:function(t){wx.hideLoading(),t.code?wx.request({url:i,data:{from_wx_mini:1,code:t.code},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){wx.hideLoading();var t=i.data||{},n=t.sessionid,a=t.user_name,c=t.is_first,r=t.user_id;if(n){var d="sessionid=".concat(n);wx.setStorageSync("sessionid",d),wx.setStorageSync("sessionUserId",r),wx.setStorageSync("userName",a),o.globalData.sessionid=d,o.globalData.isFirstAuthorized=c,e()}else s(t.err_msg||"登录失败")},fail:function(){s("网络出错")}}):s("登录出错")},fail:function(){s("网络出错")}})}))},switchChange:function(e){var i=this;console.log(e.detail),e.detail.value?this.onSubscribe():wx.request({url:s,data:{is_push:!1,platform:"weixin_mini"},header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:o.globalData.sessionid},method:"POST",success:function(o){var e=o.data||{};0===e.error_code?wx.showToast({title:"取消订阅成功",icon:"success",duration:1500,success:function(){i.setData({isSubscribed:!1})}}):wx.showToast({title:e.error_msg||"取消订阅失败",icon:"none",duration:1500,success:function(){i.setData({isSubscribed:!0})}})},fail:function(o){var e;wx.showToast({title:(null===(e=o.data)||void 0===e?void 0:e.error_msg)||"取消订阅失败",icon:"none",duration:1500,success:function(){i.setData({isSubscribed:!0})}})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/health_plan_subscribe/index.js'});require("pages/health_plan_subscribe/index.js");