$gwx_XC_39=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];
function gz$gwx_XC_39_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'open']])
Z([3,'handleImCallback'])
Z([[7],[3,'config']])
Z([3,'ext-button-style'])
Z([3,'wteidx_2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_39=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_39=true;
var x=['./cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
var oZR=_v()
_(r,oZR)
if(_oz(z,0,e,s,gg)){oZR.wxVkey=1
var c1R=_mz(z,'CMSSDKImEntry',['bind:onCallback',1,'config',1,'extClass',2,'id',3],[],e,s,gg)
var o2R=_n('slot')
_(c1R,o2R)
_(oZR,c1R)
}
else{oZR.wxVkey=2
var l3R=_n('slot')
_(oZR,l3R)
}
oZR.wxXCkey=1
oZR.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_39";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_39();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.wxml'] = [$gwx_XC_39, './cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.wxml'];else __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.wxml'] = $gwx_XC_39( './cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.wxml' );
	;__wxRoute = "cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.js";define("cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../titan.bootstrap.js");var n=global.bc("package","cms_design");require("../../../titan-scoped-env.js").Component({options:{},properties:{},data:{config:{useChannelIntegration:!0},open:!0},lifetimes:{ready:function(){},detached:function(){}},pageLifetimes:{show:function(){}},methods:{handleImCallback:function(n){var t=this,e=n.detail,i=e.open,o=void 0===i||i;this.setData({open:o},(function(){t.initCSInfo(e)}))},initCSInfo:function(n){this.triggerEvent("onCSInfo",n)}}}),global.ec(n);
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.js'});require("cms_design/RAW/miniprogram_npm/@design-platform/wx-base-customer-service/index.js");