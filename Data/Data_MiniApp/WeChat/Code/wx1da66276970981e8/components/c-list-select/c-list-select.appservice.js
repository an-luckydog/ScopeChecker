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
var x=['./components/c-list-select/c-list-select.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-list-select/c-list-select.wxml'] = [$gwx_XC_14, './components/c-list-select/c-list-select.wxml'];else __wxAppCode__['components/c-list-select/c-list-select.wxml'] = $gwx_XC_14( './components/c-list-select/c-list-select.wxml' );
	;__wxRoute = "components/c-list-select/c-list-select";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-list-select/c-list-select.js";define("components/c-list-select/c-list-select.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Arrayincludes");var n=e(require("../../@babel/runtime/regenerator")),r=e(require("../../@babel/runtime/helpers/asyncToGenerator")),t=e(require("../../@babel/runtime/helpers/toConsumableArray")),u=require("../../common/vendor.js");require("../../consts.js");var a=u.defineComponent({__name:"c-list-select",props:{name:null,modelValue:null,options:null,dataType:null,multiple:{type:Boolean},toggle:{type:Boolean},unchange:{type:Boolean}},emits:["update:modelValue","change","select","click"],setup:function(e,a){var l=a.emit,o=e,i=u.useCurrentAppInstance(),c=u.ref([]),s=u.computed((function(){return(0,t.default)(o.options)}));return u.watch((function(){return o.modelValue}),(function(e,n){e!==n&&(u.isNil(o.modelValue)?c.value=[]:c.value=Array.isArray(o.modelValue)?o.modelValue:[o.modelValue])}),{immediate:!0}),u.watch((function(){return c.value}),(function(e,n){if(!u.deepEqual(e,n)){var r=c.value;o.multiple||"array"===o.dataType||(r=r[0]),l("update:modelValue",r),l("change",r)}})),function(e,a){return{a:u.f(u.unref(s),(function(e,a,s){return{a:u.t(e.label),b:a,c:u.unref(c).includes(e.value)?1:"",d:u.o((function(a){return(s=(0,r.default)(n.default.mark((function e(r){var a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l("click",r),!o.unchange){e.next=2;break}return e.abrupt("return");case 2:return a=(0,t.default)(c.value),o.multiple?a.includes(r.value)?o.toggle&&(a=a.filter((function(e){return e!==r.value}))):a.push(r.value):a=o.toggle&&a.includes(r.value)?[]:[r.value],c.value=a,e.next=7,u.nextTick$1();case 7:l("select",r),i.trace("action",{name:o.name,tags:{selection:a.join()}});case 9:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)})(e);var s}),a)}}))}}}}),l=u._export_sfc(a,[["__scopeId","data-v-f5800c9e"]]);wx.createComponent(l);
},{isPage:false,isComponent:true,currentFile:'components/c-list-select/c-list-select.js'});require("components/c-list-select/c-list-select.js");