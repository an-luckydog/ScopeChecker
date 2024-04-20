$gwx_XC_141=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_141 || [];
function gz$gwx_XC_141_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_141_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_141_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_141_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_141_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_141_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_141=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_141=true;
var x=['./pages/inquery/components/bind_phone_number/bind_phone_number.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_141_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_141";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_141();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquery/components/bind_phone_number/bind_phone_number.wxml'] = [$gwx_XC_141, './pages/inquery/components/bind_phone_number/bind_phone_number.wxml'];else __wxAppCode__['pages/inquery/components/bind_phone_number/bind_phone_number.wxml'] = $gwx_XC_141( './pages/inquery/components/bind_phone_number/bind_phone_number.wxml' );
	;__wxRoute = "pages/inquery/components/bind_phone_number/bind_phone_number";__wxRouteBegin = true;__wxAppCurrentFile__="pages/inquery/components/bind_phone_number/bind_phone_number.js";define("pages/inquery/components/bind_phone_number/bind_phone_number.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),o=require("../../../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=e(require("../../../../7B9C8496829A079C1DFAEC91795C7B70.js")),r=require("../../../../43A2F676829A079C25C49E711B4C7B70.js"),i=o.baseUrl+"/cooperation/wap/new_wx_mini_bind_phone/";Component({data:{},methods:{handleGetPhoneNumber:function(e){var o=this;console.log(e);var a=e.detail.code;a&&(console.log("成功获取手机号"),(0,t.default)({url:i,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{code:a,app:"weixin_mini"},success:function(e){0!==e.data.error_code?wx.showToast({icon:"none",title:e.data.error_msg||"绑定失败"}):0===e.data.error_code&&((0,r.updateSessionid)(e.data.result.sessionid),o.triggerEvent("get-phone"))}}))}}});
},{isPage:false,isComponent:true,currentFile:'pages/inquery/components/bind_phone_number/bind_phone_number.js'});require("pages/inquery/components/bind_phone_number/bind_phone_number.js");