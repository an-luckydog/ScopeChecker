$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./Components/Common/HFlexibleBox/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var fYB=_n('slot')
_(r,fYB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['Components/Common/HFlexibleBox/index.wxml'] = [$gwx_XC_6, './Components/Common/HFlexibleBox/index.wxml'];else __wxAppCode__['Components/Common/HFlexibleBox/index.wxml'] = $gwx_XC_6( './Components/Common/HFlexibleBox/index.wxml' );
	;__wxRoute = "Components/Common/HFlexibleBox/index";__wxRouteBegin = true;__wxAppCurrentFile__="Components/Common/HFlexibleBox/index.js";define("Components/Common/HFlexibleBox/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["Components/Common/HFlexibleBox/index"],{"1b00":function(e,n,t){t.r(n);var i=t("a3ae"),o=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n.default=o.a},7834:function(e,n,t){t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var i=function(){var e=this,n=(e.$createElement,e._self._c,e.__get_style([e.spread?{height:"auto"}:{maxHeight:e.maxHeight,height:"inherit"===e.maxHeight?e.height:""}]));e.$mp.data=Object.assign({},{$root:{s0:n}})},o=[]},"88e2":function(e,n,t){},"9da6":function(e,n,t){t.r(n);var i=t("7834"),o=t("1b00");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("a687");var l=t("f0c5"),c=Object(l.a)(o.default,i.b,i.c,!1,null,"69cbd85a",null,!1,i.a,void 0);n.default=c.exports},a3ae:function(e,n,t){(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"h-flexible-box",props:{height:{type:String,default:"40rpx"},maxHeight:{type:String,default:"inherit"},spread:Boolean,needDian:Boolean,needCalc:{type:Number,default:0}},data:function(){return{fullHeight:"",elClass:this.$u.guid()}},mounted:function(){var n=this;e.createSelectorQuery().in(this).select("."+this.elClass).boundingClientRect((function(e){e&&(n.fullHeight=e.height+"px")})).exec()},watch:{spread:function(n){var t=this;n&&this.$nextTick((function(){e.createSelectorQuery().in(t).select("."+t.elClass).boundingClientRect((function(e){e&&(t.fullHeight=e.height+"px")})).exec()}))},needCalc:function(n){var t=this;n&&this.$nextTick((function(){e.createSelectorQuery().in(t).select("."+t.elClass).boundingClientRect((function(e){e&&(t.fullHeight=e.height+"px")})).exec()}))}}};n.default=t}).call(this,t("543d").default)},a687:function(e,n,t){var i=t("88e2");t.n(i).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["Components/Common/HFlexibleBox/index-create-component",{"Components/Common/HFlexibleBox/index-create-component":function(e,n,t){t("543d").createComponent(t("9da6"))}},[["Components/Common/HFlexibleBox/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'Components/Common/HFlexibleBox/index.js'});require("Components/Common/HFlexibleBox/index.js");