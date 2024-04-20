$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];
function gz$gwx_XC_14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./Components/Common/HProcess/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_14";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['Components/Common/HProcess/index.wxml'] = [$gwx_XC_14, './Components/Common/HProcess/index.wxml'];else __wxAppCode__['Components/Common/HProcess/index.wxml'] = $gwx_XC_14( './Components/Common/HProcess/index.wxml' );
	;__wxRoute = "Components/Common/HProcess/index";__wxRouteBegin = true;__wxAppCurrentFile__="Components/Common/HProcess/index.js";define("Components/Common/HProcess/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["Components/Common/HProcess/index"],{"1e36":function(t,e,n){(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"h-process",props:{current:{type:Number||String,default:0},next:{type:Number||String,default:0},process:{type:String,default:""},className:{type:String,default:""},transform:{type:String,default:""},isTextPosition:{type:Boolean,default:!1}},data:function(){return{processTextPosition:0,processWidth:0,textWidth:0}},computed:{getTextDistance:function(){var e=this;return function(){e.$nextTick((function(){0===e.processTextPosition&&(t.createSelectorQuery().in(e).select(".process").boundingClientRect((function(t){e.processWidth=t.width})).exec(),t.createSelectorQuery().in(e).select(".text").boundingClientRect((function(t){e.textWidth=t.width})).exec())}));var n=e.current/e.next*100;return"".concat((n>=100?100:n)||0,"%")}},getTextDistanceTransform:function(){var t=this;return function(){var e=t.current/t.next*100,n=0===e?0:e>=100?-100:-50;return"".concat(t.transform," translateX(").concat(n,"%)")}}},watch:{processWidth:function(){this.initTextPosition()},textWidth:function(){this.initTextPosition()}},methods:{initTextPosition:function(){if(0!==this.processWidth&&0!==this.textWidth&&0===this.processTextPosition){var t=(this.current/this.next).toFixed(2),e=this.processWidth*t+this.textWidth>this.processWidth,n=.75*this.textWidth>this.processWidth*t?1:e?2:3;this.processTextPosition=n}}}};e.default=n}).call(this,n("543d").default)},"56ca":function(t,e,n){n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=(t.$createElement,t._self._c,t.isTextPosition&&1!==t.processTextPosition?t.getTextDistance():null),n=t.isTextPosition&&1!==t.processTextPosition&&2!==t.processTextPosition?t.getTextDistanceTransform():null;t.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},i=[]},"728e":function(t,e,n){n.r(e);var o=n("1e36"),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e.default=i.a},8732:function(t,e,n){},b5cc:function(t,e,n){n.r(e);var o=n("56ca"),i=n("728e");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("c70f");var c=n("f0c5"),r=Object(c.a)(i.default,o.b,o.c,!1,null,"eb2edbfc",null,!1,o.a,void 0);e.default=r.exports},c70f:function(t,e,n){var o=n("8732");n.n(o).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["Components/Common/HProcess/index-create-component",{"Components/Common/HProcess/index-create-component":function(t,e,n){n("543d").createComponent(n("b5cc"))}},[["Components/Common/HProcess/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'Components/Common/HProcess/index.js'});require("Components/Common/HProcess/index.js");