$gwx_XC_41=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];
function gz$gwx_XC_41_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_41=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_41=true;
var x=['./cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_41_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_41";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_41();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.wxml'] = [$gwx_XC_41, './cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.wxml'];else __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.wxml'] = $gwx_XC_41( './cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.wxml' );
	;__wxRoute = "cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.js";define("cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../titan.bootstrap.js");var t,a=global.bc("package","cms_design"),e=require("../../../titan-scoped-env.js"),o=(t=require("../wx-utils/behaviors.js"))&&t.__esModule?t:{default:t};e.Component({behaviors:[o.default],options:{addGlobalClass:!0},properties:{moduleData:Object,exData:{type:Object,value:{}}},data:{computed:{}},attached:function(){this.init()},methods:{init:function(t){var a=t||this.data.moduleData,e=a.moduleId;this.setData({moduleId:e}),this.formatVMData(a)},formatVMData:function(t){var a=t.style,e=a.lineStyle,o=void 0===e?0:e,i=a.color,r="width:694rpx;";r+=o?"\n          height:2rpx;\n          background-image:linear-gradient(to right, ".concat(i," 0%, ").concat(i," 50%, transparent 50%);\n          background-size:").concat(1===o?"12rpx 1rpx":"6rpx 2rpx",";"):"height:1rpx;background:".concat(i,";"),this.setData({computed:{lineStyleStr:r}})}}}),global.ec(a);
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.js'});require("cms_design/RAW/miniprogram_npm/@design-platform/wx-line/index.js");