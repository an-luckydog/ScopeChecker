$gwx_XC_142=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_142 || [];
function gz$gwx_XC_142_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_142_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_142_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_142_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_142_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_142_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_142=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_142=true;
var x=['./pages/inquery/components/coupon_dialog/coupon_dialog.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_142_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_142";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_142();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquery/components/coupon_dialog/coupon_dialog.wxml'] = [$gwx_XC_142, './pages/inquery/components/coupon_dialog/coupon_dialog.wxml'];else __wxAppCode__['pages/inquery/components/coupon_dialog/coupon_dialog.wxml'] = $gwx_XC_142( './pages/inquery/components/coupon_dialog/coupon_dialog.wxml' );
	;__wxRoute = "pages/inquery/components/coupon_dialog/coupon_dialog";__wxRouteBegin = true;__wxAppCurrentFile__="pages/inquery/components/coupon_dialog/coupon_dialog.js";define("pages/inquery/components/coupon_dialog/coupon_dialog.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=require("../../../../A9EAB7C2829A079CCF8CDFC58A3C7B70.js"),o=e.baseUrl+"/api/v7/new_user/get_coupon/",n=getApp();Component({properties:{couponId:{type:Number,value:0}},data:{expiredDate:""},lifetimes:{attached:function(){this.setData({expiredDate:this.getTodayDateString()})}},methods:{closeDialog:function(){n.sensors.track("AppClick",{app:"weixin_mini",page_readable_name:"新用户弹窗",click_position:"关闭"}),this.getCoupon()},beforeLogin:function(){var e=this;return new Promise((function(t,o){n.globalData.appIsLogin.then((function(){e.getCoupon()})).catch((function(){return o()}))}))},bindgetuserProfile:function(){var e=this;n.sensors.track("AppClick",{app:"weixin_mini",page_readable_name:"新用户弹窗",click_position:"立即领取"}),this.beforeLogin().catch((function(){wx.getUserProfile({desc:"获取用户基本信息以登录",success:function(t){try{wx.setStorageSync("ProfileUserInfo",t.userInfo)}catch(e){console.log("存储用户基本信息到本地失败"),console.log(e)}e.loginEvent(t)},fail:function(t){console.log(t||"getUserProfile失败回调"),e.triggerEvent("usernoauthorize")}})}))},loginEvent:function(e){var o=this,n=e.encryptedData,i=e.iv;wx.showToast({title:"正在登录",icon:"loading"}),n&&i&&(0,t.appLogin)({success:function(e){wx.showToast({title:"正在领取",icon:"loading"}),o.getCoupon()},fail:function(){},encryptedData:n,iv:i})},getCoupon:function(){var e=this;wx.request({url:o,header:{cookie:n.globalData.sessionid},method:"POST",success:function(t){e.triggerEvent("get-coupon"),0===t.data.error_code?wx.showToast({title:"领取成功",icon:"none"}):wx.showToast({title:t.data.error_msg,icon:"none",duration:2500})},fail:function(e){console.log(e)}})},getTodayDateString:function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()+1);var o=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+"-"+n+"-"+o}}});
},{isPage:false,isComponent:true,currentFile:'pages/inquery/components/coupon_dialog/coupon_dialog.js'});require("pages/inquery/components/coupon_dialog/coupon_dialog.js");