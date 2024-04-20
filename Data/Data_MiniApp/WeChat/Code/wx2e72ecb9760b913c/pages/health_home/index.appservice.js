$gwx_XC_120=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_120 || [];
function gz$gwx_XC_120_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_120_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_120_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_120=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_120=true;
var x=['./pages/health_home/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_120_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_120";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_120();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_home/index.wxml'] = [$gwx_XC_120, './pages/health_home/index.wxml'];else __wxAppCode__['pages/health_home/index.wxml'] = $gwx_XC_120( './pages/health_home/index.wxml' );
	;__wxRoute = "pages/health_home/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_home/index.js";define("pages/health_home/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e,a,n=getApp(),o=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl;Page({data:{loading:!0,canUseWebView:wx.canIUse("web-view"),url:"",hash:"first_show"},onLoad:function(n){n&&(t=decodeURIComponent(n.url||""),e=n.ehr_id||"",a=!!t)},onShow:function(){var n=this;try{var c=e||wx.getStorageSync("healthHomeEhrId")||wx.getStorageSync("RECORD_ID")||"",r=a||wx.getStorageSync("IS_FIRST_SHOW"),s=t||wx.getStorageSync("REPORT_URL")||"";if(console.log(""),s&&r)return void wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent("".concat(o,"/insurance/pdf_view/?report_url=").concat(encodeURIComponent(s)))),success:function(){a=!1,wx.setStorageSync("IS_FIRST_SHOW",!1)}});var h=wx.getStorageSync("sessionid"),i="";if(h&&h.length){var S=h.split("sessionid=");S.length>1&&(i=S[1])}var g="".concat(o,"/v-m-health-records/#").concat(this.data.hash,"*").concat(c,"*").concat(s);i.length&&(g="".concat(o,"/v-m-health-records/?_CS=").concat(i,"#").concat(this.data.hash,"*").concat(c,"*").concat(s)),this.setData({loading:!1,url:g}),this.resetStatus(),setTimeout((function(){n.setData({hash:Math.random()})}))}catch(t){console.log("获取储存信息错误",t)}},resetStatus:function(){t="",e="",wx.setStorageSync("healthHomeEhrId",""),wx.setStorageSync("REPORT_URL",""),wx.setStorageSync("RECORD_ID","")},onShareAppMessage:function(){return{title:"健康+",path:"/pages/health_home/index"}},onTabItemTap:function(t){var e=wx.getStorageSync("hide_tabbar_card");null!=e&&e.hide||wx.setStorageSync("hide_tabbar_card",{hide:!0}),n.globalData.hide_tabbar_card=!0}});
},{isPage:true,isComponent:true,currentFile:'pages/health_home/index.js'});require("pages/health_home/index.js");