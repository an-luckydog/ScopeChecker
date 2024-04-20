$gwx_XC_213=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_213 || [];
function gz$gwx_XC_213_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_213_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_213_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_213_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_213_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_213_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_213=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_213=true;
var x=['./pages/tel_inquiry_calling_page/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_213_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_213";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_213();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tel_inquiry_calling_page/index.wxml'] = [$gwx_XC_213, './pages/tel_inquiry_calling_page/index.wxml'];else __wxAppCode__['pages/tel_inquiry_calling_page/index.wxml'] = $gwx_XC_213( './pages/tel_inquiry_calling_page/index.wxml' );
	;__wxRoute = "pages/tel_inquiry_calling_page/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/tel_inquiry_calling_page/index.js";define("pages/tel_inquiry_calling_page/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,i=a.baseUrl+"/cooperation/wap/telephone/calling/";a.baseUrl;Page({data:{inquiry_id:"",call_type:"",phone_num:""},onLoad:function(e){var a=e.inquiry_id,t=e.call_type;this.setData({inquiry_id:a,call_type:t}),this.getInfo()},getInfo:function(){var a=this,t=a.data.inquiry_id;wx.request({url:i,method:"GET",header:{cookie:e.globalData.sessionid,"content-type":"application/json"},data:{inquiry_id:t,partner:e.globalData.partner,is_json:1},success:function(e){e=e.data;a.setData({phone_num:e.phone_num,image:e.image,nick_name:e.nick_name}),a.callNumber()}})},callNumber:function(){var e="",t=this.data.call_type;"dial"==t?e=a.baseUrl+"/cooperation/wap/telephone/dial/":"recall"==t?e=a.baseUrl+"/cooperation/wap/telephone/recall/":"resume"==t&&(e=a.baseUrl+"/cooperation/wap/telephone/resume/"),this.dialNumber(e)},dialNumber:function(a){var i=this.data.inquiry_id;wx.request({url:a,method:"POST",header:{cookie:e.globalData.sessionid,"Content-Type":"application/x-www-form-urlencoded"},data:t({partner:e.globalData.partner,inquiry_id:i}),success:function(e){e.data.success?console.log("success"):wx.showToast({title:e.data.error_msg||"加载失败，请稍后重试",icon:"none"})},error:function(e){wx.showToast({title:e.data.error_msg||"加载失败，请稍后重试",icon:"none"})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/tel_inquiry_calling_page/index.js'});require("pages/tel_inquiry_calling_page/index.js");