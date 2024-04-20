$gwx_XC_93=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_93 || [];
function gz$gwx_XC_93_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_93_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_93_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_93=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_93=true;
var x=['./pages/free_clinic_webview/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_93_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_93";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_93();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/free_clinic_webview/index.wxml'] = [$gwx_XC_93, './pages/free_clinic_webview/index.wxml'];else __wxAppCode__['pages/free_clinic_webview/index.wxml'] = $gwx_XC_93( './pages/free_clinic_webview/index.wxml' );
	;__wxRoute = "pages/free_clinic_webview/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/free_clinic_webview/index.js";define("pages/free_clinic_webview/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),a=require("../../92BC1755829A079CF4DA7F52C55D7B70.js");Page({data:{loading:!0,canUseWebView:wx.canIUse("web-view"),url:"",shareInfo:{}},onLoad:function(e){var r=e.url&&decodeURIComponent(e.url);r&&this.setData({loading:!1,url:a.setWebviewUrlWithLoginCredentials(r)}),this.getShareInfo()},reLoad:function(e){this.data.url=e.detail.src},getShareInfo:function(){if(this.data.url.includes("/cooperation/partner_volunteer/front/")){var e=this;wx.request({url:"".concat(this.data.url,"&is_json=1"),method:"GET",success:function(a){var r=a.data,t=void 0===r?{}:r,i=t.error_code,n=t.error_msg,o=t.source_base_conf,s=void 0===o?{}:o;if(0!==i)wx.showToast({title:n||"加载失败，请稍候再试",icon:"none"});else{var h=s.weixin_share,l=s.share_title,u=s.share_img,c=s.page_conf,d=void 0===c?{}:c;h?e.data.shareInfo={shareTitle:l,shareImage:d.mini_share_img||u}:wx.hideShareMenu()}}})}},onShareAppMessage:function(){var a={path:"/pages/free_clinic_webview/index?url=".concat(encodeURIComponent(this.data.url))};return this.data.url.includes("/cooperation/partner_volunteer/front/")&&(a=e(e({},a),{},{title:this.data.shareInfo.shareTitle,imageUrl:this.data.shareInfo.shareImage})),e({},a)}});
},{isPage:true,isComponent:true,currentFile:'pages/free_clinic_webview/index.js'});require("pages/free_clinic_webview/index.js");