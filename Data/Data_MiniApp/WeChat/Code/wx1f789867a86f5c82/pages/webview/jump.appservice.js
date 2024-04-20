$gwx_XC_112=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_112 || [];
function gz$gwx_XC_112_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_112_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-a140c184 vue-ref'])
Z([3,'touchPopup'])
Z([3,'097abdae-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_112_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_112=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_112=true;
var x=['./pages/webview/jump.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_112_1()
var c16=_mz(z,'touch-popup',['bind:__l',0,'class',1,'data-ref',1,'vueId',2],[],e,s,gg)
_(r,c16)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_112";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_112();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/webview/jump.wxml'] = [$gwx_XC_112, './pages/webview/jump.wxml'];else __wxAppCode__['pages/webview/jump.wxml'] = $gwx_XC_112( './pages/webview/jump.wxml' );
	;__wxRoute = "pages/webview/jump";__wxRouteBegin = true;__wxAppCurrentFile__="pages/webview/jump.js";define("pages/webview/jump.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/webview/jump"],{2793:function(t,e,i){(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("d257"),a=i("a63a");var o={default:"",loversActivity:"请前往“himore定制”微信小程序核销使用",tickets:"请前往“缦图摄影”微信小程序使用",reunionFestival1:"您正在前往“海马体家庭店”，请确认",reunionFestival2:"您正在前往查看我的奖励，请确认"},u={default:"跳转",loversActivity:"使用奖励",tickets:"使用奖励",reunionFestival1:"海马体家庭店",reunionFestival2:"我的奖励"},c={default:"跳转",loversActivity:"去使用",tickets:"去使用",reunionFestival1:"确认前往",reunionFestival2:"确认查看"},s={name:"activity",data:function(){return{JUMP_TEXT:o,JUMP_BTN_TEXT:c,miniType:"",miniPath:"",isToken:"",type:"",appId:"",goJumpState:!1}},onShow:function(){var e=getCurrentPages();this.goJumpState&&e.length>1?this.$Router.back(1):this.goJumpState&&t.switchTab({url:"/pages/index/index"})},onLoad:function(e){var i=(0,n.getGlobalPageOptions)(e,this),a=i.miniType,o=i.miniPath,c=i.isToken,s=i.type,r=i.appId;this.miniType=a,this.miniPath=(0,n.decodeUrlSymbol)(decodeURIComponent(o||"")),this.isToken=c,this.appId=r,this.type=s||"default",t.setNavigationBarTitle({title:u[this.type]})},methods:{jump:function(){this.goJumpState=!0;var t=this.$sensors.getMiniAnonymousID();this.$uniJumpMiniApp({appId:this.appId||a.APPID_DIC[this.miniType],path:this.miniPath.indexOf("?")>-1?"".concat(this.miniPath,"&distinctID=").concat(t):"".concat(this.miniPath,"?distinctID=").concat(t),envVersion:"release",notNeedToken:"true"!==this.isToken})}}};e.default=s}).call(this,i("543d").default)},5607:function(t,e,i){var n=i("ef96");i.n(n).a},"7f45":function(t,e,i){i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){this.$createElement;this._self._c},a=[]},b1c3:function(t,e,i){i.r(e);var n=i("2793"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=a.a},b880:function(t,e,i){i.r(e);var n=i("7f45"),a=i("b1c3");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5607");var u=i("f0c5"),c=Object(u.a)(a.default,n.b,n.c,!1,null,"a140c184",null,!1,n.a,void 0);e.default=c.exports},e50e:function(t,e,i){(function(t){function e(t){return t&&t.__esModule?t:{default:t}}i("6cdc"),e(i("66fd")),t(e(i("b880")).default)}).call(this,i("543d").createPage)},ef96:function(t,e,i){}},[["e50e","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages/webview/jump.js'});require("pages/webview/jump.js");