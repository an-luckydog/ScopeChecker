$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cms:CMSThemeProvider'])
Z([[6],[[7],[3,'vidInfo']],[3,'vidLogo']])
Z([3,'cms:verifyAuth'])
Z([3,'cms:CMSUserAgreement'])
Z([3,'cms:mergeWidInfos'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./cms/RAW/pages/auth/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var f5C=_n('f_cms_cmsThemeProvider')
_rz(z,f5C,'id',0,e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,1,e,s,gg)){c6C.wxVkey=1
}
var h7C=_n('getUserInfo')
_rz(z,h7C,'id',2,e,s,gg)
_(f5C,h7C)
var o8C=_n('f_cms_userAgreement')
_rz(z,o8C,'id',3,e,s,gg)
_(f5C,o8C)
var c9C=_n('f_cms_mergeWidInfos')
_rz(z,c9C,'id',4,e,s,gg)
_(f5C,c9C)
c6C.wxXCkey=1
_(r,f5C)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/pages/auth/index.wxml'] = [$gwx_XC_16, './cms/RAW/pages/auth/index.wxml'];else __wxAppCode__['cms/RAW/pages/auth/index.wxml'] = $gwx_XC_16( './cms/RAW/pages/auth/index.wxml' );
	;__wxRoute = "cms/RAW/pages/auth/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/pages/auth/index.js";define("cms/RAW/pages/auth/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/typeof");require("../../titan.bootstrap.js"),global.beginDefinePage=!0;var t=global.bc("platform","cms"),a=require("../../titan-scoped-env.js"),i=require("../../index"),o=require("../../utils/util"),n=a.requirePlatform("cms").main.CMS,r=a.requirePlatform("cms_sdk").main.SDK;a.Page({data:{logo:"",merchantName:"",pageBoolean:!1,hasGetUserProfile:!!a.wx.getUserProfile,vidInfo:{},platFormLabel:(0,o.getPlatFormLabel)()},url:"",webview:"0",$cmsNotRecommendVid:!0,onLoad:function(e){var t=this,i=e.url,o=e.webview,r=void 0===o?"0":o,l=e.authTicket;this.url=decodeURIComponent(i||""),this.webview=r,this.authTicket=l,(l||a.getCurrentPages().length>1)&&this.setData({pageBoolean:!0}),n.getVidInfo().then((function(e){e&&(e.vidLogo=Array.isArray(e.vidLogos)?e.vidLogos[0]:"",t.setData({vidInfo:e}))}))},onUnload:function(){i.auth.completeAuthRequest(this.authTicket,new Error("用户已取消授权"))},empty:function(){},cancelAuthorization:function(){a.wx.navigateBack({delta:1})},bindGetUserInfo:function(){var t=this,o=this.authTicket;o?(i.auth.completeAuthRequest(o),a.wx.navigateBack({delta:1})):i.auth.updateUserInfo({promptRegardless:!0},{weimobOS:!1}).then((function(e){if(a.wx.hideLoading(),e&&e.userInfo){var i=t.url;if("1"==t.webview)try{var o=a.getCurrentPages(),n=o[o.length-2];r.navigator("<").then((function(){null==n||n.freshenPage({url:"/cms_webview/index"})}))}catch(e){r.toast("授权失败"),r.navigator("<")}else a.wx.redirectTo({url:i,fail:function(e){throw e}})}})).catch((function(t){a.wx.hideLoading(),"object"==e(t)&&a.wx.showModal({content:(null==t?void 0:t.message)||"授权失败",showCancel:!1})}))}}),global.ec(t),global.beginDefinePage=!1;
},{isPage:false,isComponent:true,currentFile:'cms/RAW/pages/auth/index.js'});require("cms/RAW/pages/auth/index.js");