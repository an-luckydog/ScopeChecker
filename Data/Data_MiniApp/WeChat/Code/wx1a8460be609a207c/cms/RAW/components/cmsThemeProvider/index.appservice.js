$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./cms/RAW/components/cmsThemeProvider/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var h1B=_n('slot')
_(r,h1B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/components/cmsThemeProvider/index.wxml'] = [$gwx_XC_5, './cms/RAW/components/cmsThemeProvider/index.wxml'];else __wxAppCode__['cms/RAW/components/cmsThemeProvider/index.wxml'] = $gwx_XC_5( './cms/RAW/components/cmsThemeProvider/index.wxml' );
	;__wxRoute = "cms/RAW/components/cmsThemeProvider/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/components/cmsThemeProvider/index.js";define("cms/RAW/components/cmsThemeProvider/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/slicedToArray");require("../../titan.bootstrap.js");var a=global.bc("platform","cms"),i=require("../../titan-scoped-env.js"),t=require("../../utils/util"),o=i.requirePlatform("cms_sdk").main.CMS,r=o.getCurrentChannelStyle().primaryColor,n="";i.Component({data:{themeVariable:""},attached:function(){var a=this;(n?i.Promise.resolve(n):o.getCurrentWOSSettingInfo("style").then((function(a){if(!a)return"";var i=a.color,o=a.iconStyleType,c=a.styleType,s=i||{},l=s.colorMain,m=void 0===l?"#FF0000":l,u=s.colorSecondary,d=void 0===u?"#F75000":u,p=s.priceColor,h=void 0===p?"#F75000":p,v=s.tagColor,y=void 0===v?"#F75000":v,C=s.topNavBackGroundColor,f=void 0===C?"":C,z=s.topNavContentColor,x=void 0===z?"":z,S=(0,t.hexToRGB)(m||"").split(","),b=e(S,3),g=b[0],j=b[1],F=b[2],w=(0,t.hexToRGB)(y||"").split(","),N=e(w,3),T=N[0],q=N[1],B=N[2],H=["--theme-iconStyleType:".concat(o,";"),"--theme-main:".concat(m,";"),"--theme-secondary:".concat(d,";"),"--theme-price:".concat(h,";"),"--theme-tag:".concat(y,";"),"--theme-topNavBackGroundColor:".concat(f,";"),"--theme-topNavContentColor:".concat(x,";"),"--theme-r:var(--whatever,".concat(g,");"),"--theme-g:var(--whatever, ".concat(j,");"),"--theme-b:var(--whatever, ".concat(F,");"),"--theme-tr:var(--whatever,".concat(T,");"),"--theme-tg:var(--whatever, ".concat(q,");"),"--theme-tb:var(--whatever, ".concat(B,");"),"--channel-color: ".concat(r,";")].join(""),M={0:{"--icon-family":"titian-icon-popular, titian-icon","--radius-size":-999,"--radius-size-max":0},1:{"--icon-family":"titian-icon","--radius-size":0,"--radius-size-max":0},2:{"--icon-family":"titian-icon-lovely, titian-icon","--radius-size":8,"--radius-size-max":999}},k=M[c]||M[1],G=["--icon-family: ".concat((M[o]||M[1])["--icon-family"],";"),"--radius-size:".concat(k["--radius-size"],"rpx;"),"--radius-size-max:".concat(k["--radius-size-max"],"rpx;")].join(""),A=[0,2,4,6,8,10,12,16,20,24,28,30,32,36,40,44,48].map((function(e){return["--border-radius-s".concat(e,":").concat(k["--radius-size"]+e,"rpx;"),"--tag-radius-s".concat(e,":").concat(k["--radius-size"]+k["--radius-size-max"]+e,"rpx;")]})).flat(2).join(""),E="--s: ".concat(c,";").concat({0:"--base-radius-size: -999rpx; --capsule-radius-size: -999rpx;",1:"--base-radius-size: 0rpx; --capsule-radius-size: 0rpx;",2:"--base-radius-size: 8rpx; --capsule-radius-size: 999rpx;"}[c],";");return n=[H,G,A,E,"font-family: 'PingFang SC', 'HarmonyOSSansSC', 'HarmonyOS Sans SC', 'Noto Sans SC', system-ui, '-apple-system', 'BlinkMacSystemFont', 'Microsoft YaHei', '微软雅黑', 'MicrosoftJhengHei', '华文细黑', Helvetica, Arial, 'sans-serif', 'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji';"].join(";")}))).then((function(e){a.setData({themeVariable:e})}))}}),global.ec(a);
},{isPage:false,isComponent:true,currentFile:'cms/RAW/components/cmsThemeProvider/index.js'});require("cms/RAW/components/cmsThemeProvider/index.js");