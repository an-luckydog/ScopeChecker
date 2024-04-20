$gwx_XC_93=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_93 || [];
function gz$gwx_XC_93_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_93_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z([3,'__e'])
Z([3,'more _p data-v-56d11dbf'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toAlbum']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-56d11dbf'])
Z([3,'#8C8C8C'])
Z([3,'arrow-right'])
Z([3,'24'])
Z([3,'00cc8ab5-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_93_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_93=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_93=true;
var x=['./pages/profile/component/Album/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_93_1()
var oX2=_v()
_(r,oX2)
if(_oz(z,0,e,s,gg)){oX2.wxVkey=1
var xY2=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oZ2=_mz(z,'h-icon',['bind:__l',4,'class',1,'color',2,'name',3,'size',4,'vueId',5],[],e,s,gg)
_(xY2,oZ2)
_(oX2,xY2)
}
oX2.wxXCkey=1
oX2.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_93";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_93();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/profile/component/Album/index.wxml'] = [$gwx_XC_93, './pages/profile/component/Album/index.wxml'];else __wxAppCode__['pages/profile/component/Album/index.wxml'] = $gwx_XC_93( './pages/profile/component/Album/index.wxml' );
	;__wxRoute = "pages/profile/component/Album/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/profile/component/Album/index.js";define("pages/profile/component/Album/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/profile/component/Album/index"],{4586:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"Album",props:{list:Array},computed:{imgList:function(n){var t=n.list;if(!t||t.length<1)return[];var e=[];return t.length>1?t.map((function(n){e.length<4&&e.push(n.photos[0])})):t[0].photos.map((function(n){e.length<4&&e.push(n)})),e},leftList:function(n){var t=n.imgList,e=[];return t.length<1||(e=t.filter((function(n,t){return t%2==0}))),e},rightList:function(n){var t=n.imgList,e=[];return t.length<1||(e=t.filter((function(n,t){return t%2!=0}))),e}},methods:{toAlbum:function(){this.$Router.push({name:"album"})}}};t.default=o},"56d2":function(n,t,e){},c242:function(n,t,e){e.r(t);var o=e("4586"),u=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t.default=u.a},d0d3:function(n,t,e){e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){}));var o=function(){this.$createElement;this._self._c},u=[]},f633:function(n,t,e){var o=e("56d2");e.n(o).a},fac6:function(n,t,e){e.r(t);var o=e("d0d3"),u=e("c242");for(var i in u)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e("f633");var r=e("f0c5"),c=Object(r.a)(u.default,o.b,o.c,!1,null,"56d11dbf",null,!1,o.a,void 0);t.default=c.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/profile/component/Album/index-create-component",{"pages/profile/component/Album/index-create-component":function(n,t,e){e("543d").createComponent(e("fac6"))}},[["pages/profile/component/Album/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages/profile/component/Album/index.js'});require("pages/profile/component/Album/index.js");