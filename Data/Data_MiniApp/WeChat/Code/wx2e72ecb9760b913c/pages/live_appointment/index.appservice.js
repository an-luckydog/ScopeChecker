$gwx_XC_155=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_155 || [];
function gz$gwx_XC_155_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_155_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_155_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_155_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_155_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_155_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_155=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_155=true;
var x=['./pages/live_appointment/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_155_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_155";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_155();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/live_appointment/index.wxml'] = [$gwx_XC_155, './pages/live_appointment/index.wxml'];else __wxAppCode__['pages/live_appointment/index.wxml'] = $gwx_XC_155( './pages/live_appointment/index.wxml' );
	;__wxRoute = "pages/live_appointment/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/live_appointment/index.js";define("pages/live_appointment/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var i=require("../../15CA5C31829A079C73AC343652AB7B70.js"),t=getApp();Page({data:{templateId:"",activityId:"",goldActivityId:"",inSubscribe:!1},onLoad:function(i){var e=this;wx.showLoading({title:"登录校验中...",mask:!0}),this.data.templateId=(null==i?void 0:i.template_id)||"",this.data.activityId=(null==i?void 0:i.activity_id)||"",this.data.goldActivityId=(null==i?void 0:i.gold_activity_id)||"",t.globalData.appIsLogin.then((function(){wx.hideLoading()})).catch((function(){wx.hideLoading(),e.wxLogin().then((function(i){e.cyLogin(i).then((function(){wx.hideLoading()})).catch((function(i){wx.hideLoading(),wx.showToast({title:i||"登录出错，请稍后重试",mask:!0,icon:"none"})}))})).catch((function(i){wx.hideLoading(),wx.showToast({title:i||"微信登录出错，请稍后重试",mask:!0,icon:"none"})}))}))},onSubscribe:function(){var i=this;if(!this.data.inSubscribe){this.data.inSubscribe=!0;var t=this.data,e=t.templateId,n=t.activityId;return e&&e.length?n&&n.length?void wx.requestSubscribeMessage({tmplIds:[e],success:function(t){t&&t[e]?"accept"===t[e]?i.saveAcceptStatus(e):i.data.inSubscribe=!1:(i.data.inSubscribe=!1,wx.showToast({title:(null==t?void 0:t.errMsg)||"订阅接口调用失败",icon:"none",mask:!0}))},fail:function(t){console.log("wx.requestSubscribeMessage error::",t),i.data.inSubscribe=!1,wx.showToast({title:(null==t?void 0:t.errMsg)||"订阅接口调用出错",icon:"none",mask:!0})}}):(wx.showToast({title:"直播id获取失败",icon:"none",mask:!0}),void(this.data.inSubscribe=!1)):(wx.showToast({title:"模板id获取失败",icon:"none",mask:!0}),void(this.data.inSubscribe=!1))}},wxLogin:function(){return wx.showLoading({title:"登录中...",mask:!0}),new Promise((function(i,t){wx.login({success:function(e){e.code?i(e.code):t("获取登录 code 失败，请稍后重试")},fail:function(i){console.log("wx.login fail::",i),t("微信登录出错，请稍后重试")}})}))},cyLogin:function(e){return new Promise((function(n,o){(0,i.loginApi)(e).then((function(i){var e=i||{},a=e.sessionid,s=e.error_msg;if(a){var c="sessionid=".concat(a);t.globalData.sessionid=c,wx.setStorageSync("sessionid",c),n()}else o(s||"登录失败")})).catch((function(i){console.log("loginApi error::",i),o((null==i?void 0:i.error_msg)||"登录出错")}))}))},saveAcceptStatus:function(t){var e=this;wx.showLoading({mask:!0}),(0,i.subSaveApi)(t).then((function(i){var t=i||{},n=t.error_code,o=t.error_msg;0===n?e.saveReservedEvent():(wx.hideLoading(),e.data.inSubscribe=!1,wx.showToast({title:o||"保存订阅状态失败，请稍后重试",icon:"none",mask:!0}))})).catch((function(i){console.log("subSaveApi err::",i),wx.hideLoading(),e.data.inSubscribe=!1,wx.showToast({title:"保存订阅状态出错，请稍后重试",icon:"none",mask:!0})}))},saveReservedEvent:function(){var t=this;(0,i.saveReservedApi)({activity_id:this.data.activityId,gold_activity_id:this.data.goldActivityId,mini_template_id:this.data.templateId,reserved_app:"mini_template_msg"}).then((function(i){var e=i||{},n=e.error_code,o=e.error_msg;0===n?(setTimeout((function(){wx.navigateBack({delta:1})}),1500),wx.hideLoading(),wx.showToast({title:"订阅成功",mask:!0,icon:"success"}),t.data.inSubscribe=!1):(t.data.inSubscribe=!1,wx.hideLoading(),wx.showToast({title:o||"保存预约状态失败，请稍后重试",icon:"none",mask:!0}))})).catch((function(i){console.log("saveReservedApi err::",i),t.data.inSubscribe=!1,wx.hideLoading(),wx.showToast({title:"保存预约状态出错，请稍后重试",icon:"none",mask:!0})}))}});
},{isPage:true,isComponent:true,currentFile:'pages/live_appointment/index.js'});require("pages/live_appointment/index.js");