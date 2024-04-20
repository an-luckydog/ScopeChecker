$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[9],[[9],[[8],'canWebView',[[7],[3,'canWebView']]],[[8],'url',[[7],[3,'url']]]],[[8],'wsg',[[7],[3,'wsg']]]],[[8],'showShareFloat',[[7],[3,'showShareFloat']]]],[[8],'shareType',[[7],[3,'shareType']]]],[[8],'floatTitle',[[7],[3,'floatTitle']]]])
Z([3,'cwebshare'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./cwx/component/cwebview/cwebview.wxml','./cwebshare.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var o8D=e_[x[0]].i
_ai(o8D,x[1],e_,x[0],1,1)
var x9D=_v()
_(r,x9D)
var o0D=_oz(z,1,e,s,gg)
var fAE=_gd(x[0],o0D,e_,d_)
if(fAE){
var cBE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x9D.wxXCkey=3
fAE(cBE,cBE,x9D,gg)
gg.f=cur_globalf
}
else _w(o0D,x[0],2,14)
o8D.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cwx/component/cwebview/cwebview.wxml'] = [$gwx_XC_8, './cwx/component/cwebview/cwebview.wxml'];else __wxAppCode__['cwx/component/cwebview/cwebview.wxml'] = $gwx_XC_8( './cwx/component/cwebview/cwebview.wxml' );
	;__wxRoute = "cwx/component/cwebview/cwebview";__wxRouteBegin = true;__wxAppCurrentFile__="cwx/component/cwebview/cwebview.js";define("cwx/component/cwebview/cwebview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),r=require("../../../@babel/runtime/helpers/objectSpread2"),t=require("../../../@babel/runtime/helpers/createClass"),a=require("../../../@babel/runtime/helpers/classCallCheck"),i=require("../../../@babel/runtime/helpers/inherits"),l=require("../../../@babel/runtime/helpers/createSuper"),u=e(require("CWebviewBaseClass.js")),c=require("../../cwx.js");(new(function(e){i(n,e);var u=l(n);function n(){var e;a(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(e=u.call.apply(u,[this].concat(i))).type="cwebview",e.feature="middlePage",e.preOnLoad=function(e){var t=Object.keys(e),a=c.__global.cwebview.targetPagePath;t.forEach((function(t,i){var l=e[t];if("[object Object]"==Object.prototype.toString.call(l)){var u=r({},l);try{l=JSON.stringify(u)}catch(r){l=e[t]}}a=a+(0===i?"?":"&")+t+"="+l})),console.log("最终重新拼接得出的url:",a),wx.redirectTo({url:a})},e}return t(n)}(u.default))).register();
},{isPage:true,isComponent:true,currentFile:'cwx/component/cwebview/cwebview.js'});require("cwx/component/cwebview/cwebview.js");