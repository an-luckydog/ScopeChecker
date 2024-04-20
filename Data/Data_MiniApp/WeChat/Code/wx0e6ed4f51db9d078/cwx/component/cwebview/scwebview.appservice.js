$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[8],'canWebView',[[7],[3,'canWebView']]],[[8],'url',[[7],[3,'url']]]],[[8],'wsg',[[7],[3,'wsg']]]])
Z([3,'cwebtemplate'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./cwx/component/cwebview/scwebview.wxml','./cwebtemplate.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var oDE=e_[x[0]].i
_ai(oDE,x[1],e_,x[0],1,1)
var cEE=_v()
_(r,cEE)
var oFE=_oz(z,1,e,s,gg)
var lGE=_gd(x[0],oFE,e_,d_)
if(lGE){
var aHE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cEE.wxXCkey=3
lGE(aHE,aHE,cEE,gg)
gg.f=cur_globalf
}
else _w(oFE,x[0],2,14)
oDE.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cwx/component/cwebview/scwebview.wxml'] = [$gwx_XC_9, './cwx/component/cwebview/scwebview.wxml'];else __wxAppCode__['cwx/component/cwebview/scwebview.wxml'] = $gwx_XC_9( './cwx/component/cwebview/scwebview.wxml' );
	;__wxRoute = "cwx/component/cwebview/scwebview";__wxRouteBegin = true;__wxAppCurrentFile__="cwx/component/cwebview/scwebview.js";define("cwx/component/cwebview/scwebview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),r=require("../../../@babel/runtime/helpers/objectSpread2"),t=require("../../../@babel/runtime/helpers/createClass"),a=require("../../../@babel/runtime/helpers/classCallCheck"),i=require("../../../@babel/runtime/helpers/inherits"),l=require("../../../@babel/runtime/helpers/createSuper"),s=e(require("CWebviewBaseClass.js")),u=require("../../cwx.js");(new(function(e){i(n,e);var s=l(n);function n(e){var t;return a(this,n),(t=s.call(this,e)).onShareAppMessage=null,t.type="scwebview",t.feature="middlePage",t.preOnLoad=function(e){var t=Object.keys(e),a=u.__global.scwebview.targetPagePath;t.forEach((function(t,i){console.log("遍历 options, index:",i,"key:",t,"value:",e[t]);var l=e[t];if("[object Object]"==Object.prototype.toString.call(l)){var s=r({},l);try{l=JSON.stringify(s)}catch(r){l=e[t]}}a=a+(0===i?"?":"&")+t+"="+l})),console.log("最终重新拼接得出的url:",a),wx.redirectTo({url:a})},t.data.pageId="10650059679",t}return t(n)}(s.default))).register();
},{isPage:true,isComponent:true,currentFile:'cwx/component/cwebview/scwebview.js'});require("cwx/component/cwebview/scwebview.js");