$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];
function gz$gwx_XC_21_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'canIUseGetUserProfile']])
Z([3,'bindgetuserProfile'])
Z([3,'cy-userinfo'])
Z([3,'bindgetuserInfo'])
Z(z[2])
Z([3,'getUserInfo'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./components/cy-userinfo/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var bMC=_v()
_(r,bMC)
if(_oz(z,0,e,s,gg)){bMC.wxVkey=1
var oNC=_mz(z,'button',['bindtap',1,'class',1],[],e,s,gg)
var xOC=_n('slot')
_(oNC,xOC)
_(bMC,oNC)
}
else{bMC.wxVkey=2
var oPC=_mz(z,'button',['bindgetuserinfo',3,'class',1,'openType',2],[],e,s,gg)
var fQC=_n('slot')
_(oPC,fQC)
_(bMC,oPC)
}
bMC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_21";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-userinfo/index.wxml'] = [$gwx_XC_21, './components/cy-userinfo/index.wxml'];else __wxAppCode__['components/cy-userinfo/index.wxml'] = $gwx_XC_21( './components/cy-userinfo/index.wxml' );
	;__wxRoute = "components/cy-userinfo/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy-userinfo/index.js";define("components/cy-userinfo/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../A9EAB7C2829A079CCF8CDFC58A3C7B70.js").appLogin,e=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,i=getApp();Component({properties:{url:String,openType:{type:String,value:"navigateTo"}},data:{canIUseGetUserProfile:!1},lifetimes:{attached:function(){wx.getUserProfile&&this.setData({canIUseGetUserProfile:!0})}},methods:{beforeLogin:function(){var t=this;return new Promise((function(e,n){var o={},r={};i.globalData.appIsLogin.then((function(){t.triggerEvent("loginevent",o,r);var e=t.data.url,i=t.data.openType;e&&wx[i]({url:e})})).catch((function(){return n()}))}))},bindgetuserProfile:function(){var t=this;this.triggerEvent("click-on-user-info"),this.beforeLogin().catch((function(){wx.getUserProfile({desc:"获取用户基本信息以登录",success:function(e){try{wx.setStorageSync("ProfileUserInfo",e.userInfo)}catch(t){console.log("存储用户基本信息到本地失败"),console.log(t)}t.loginEvent(e)},fail:function(e){console.log(e||"getUserProfile失败回调"),t.triggerEvent("usernoauthorize")}})}))},bindgetuserInfo:function(t){var e=this;try{wx.setStorageSync("ProfileUserInfo",t.detail.userInfo)}catch(t){console.log("存储用户基本信息到本地失败"),console.log(t)}this.beforeLogin().catch((function(){t.iv=t.detail.iv,t.encryptedData=t.detail.encryptedData,e.loginEvent(t)}))},loginEvent:function(e){var i=this,n=this.data.url,o=this.data.openType,r=e.encryptedData,a=e.iv,s={},l={};i.triggerEvent("isloginevent",s,l),wx.showToast({title:"正在登录",icon:"loading"}),r&&a?t({success:function(){i.pointEvent(),i.triggerEvent("loginevent",s,l),wx.showToast({title:"登录成功"}),n&&wx[o]({url:n})},fail:function(){i.triggerEvent("loginfail",s,l)},encryptedData:r,iv:a}):i.triggerEvent("loginfail",s,l)},pointEvent:function(){var t={platform_source:"weixin_mini",first_login:i.globalData.isFirstAuthorized?"是":"否",from_type:"自然增长来的用户"},n=wx.getStorageSync("authorizationPointData")||{},o=Object.assign(t,n);e("Authorization",o),wx.removeStorage({key:"authorizationPointData"})}}});
},{isPage:false,isComponent:true,currentFile:'components/cy-userinfo/index.js'});require("components/cy-userinfo/index.js");