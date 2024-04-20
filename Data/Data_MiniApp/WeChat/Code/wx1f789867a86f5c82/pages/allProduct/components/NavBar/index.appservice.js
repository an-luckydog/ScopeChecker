$gwx_XC_66=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_66 || [];
function gz$gwx_XC_66_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_66_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'customBarCtnright _div'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goSearch']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'#8C8C8C'])
Z([3,'search'])
Z([1,46])
Z([3,'20854362-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_66_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_66=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_66=true;
var x=['./pages/allProduct/components/NavBar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_66_1()
var h7Q=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o8Q=_mz(z,'h-icon',['bind:__l',3,'color',1,'name',2,'size',3,'vueId',4],[],e,s,gg)
_(h7Q,o8Q)
_(r,h7Q)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_66";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_66();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/allProduct/components/NavBar/index.wxml'] = [$gwx_XC_66, './pages/allProduct/components/NavBar/index.wxml'];else __wxAppCode__['pages/allProduct/components/NavBar/index.wxml'] = $gwx_XC_66( './pages/allProduct/components/NavBar/index.wxml' );
	;__wxRoute = "pages/allProduct/components/NavBar/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/allProduct/components/NavBar/index.js";define("pages/allProduct/components/NavBar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/allProduct/components/NavBar/index"],{1493:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"navBar",props:{addressName:{type:String,default:""},hotWord:{type:String,default:""},isH5:{type:Boolean,default:!1}},methods:{goAddress:function(){this.$emit("address",this.addressName)},goSearch:function(){this.$emit("search",this.hotWord)}}};n.default=a},"27ed":function(e,n,t){t.r(n);var a=t("1493"),o=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n.default=o.a},"3eb6":function(e,n,t){t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var a=function(){this.$createElement;this._self._c},o=[]},7499:function(e,n,t){t.r(n);var a=t("3eb6"),o=t("27ed");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);var c=t("f0c5"),d=Object(c.a)(o.default,a.b,a.c,!1,null,null,null,!1,a.a,void 0);n.default=d.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/allProduct/components/NavBar/index-create-component",{"pages/allProduct/components/NavBar/index-create-component":function(e,n,t){t("543d").createComponent(t("7499"))}},[["pages/allProduct/components/NavBar/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages/allProduct/components/NavBar/index.js'});require("pages/allProduct/components/NavBar/index.js");