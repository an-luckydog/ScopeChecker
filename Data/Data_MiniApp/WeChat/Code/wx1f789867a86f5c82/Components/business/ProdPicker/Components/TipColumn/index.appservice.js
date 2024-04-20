$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'data']],[3,'resourceName']])
Z([3,'info-tip-column data-v-28f7d06c'])
Z([[6],[[7],[3,'data']],[3,'resourceButton']])
Z([[6],[[7],[3,'data']],[3,'resourceImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./Components/business/ProdPicker/Components/TipColumn/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var cNG=_v()
_(r,cNG)
if(_oz(z,0,e,s,gg)){cNG.wxVkey=1
var hOG=_n('view')
_rz(z,hOG,'class',1,e,s,gg)
var oPG=_v()
_(hOG,oPG)
if(_oz(z,2,e,s,gg)){oPG.wxVkey=1
}
var cQG=_v()
_(hOG,cQG)
if(_oz(z,3,e,s,gg)){cQG.wxVkey=1
}
oPG.wxXCkey=1
cQG.wxXCkey=1
_(cNG,hOG)
}
cNG.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['Components/business/ProdPicker/Components/TipColumn/index.wxml'] = [$gwx_XC_27, './Components/business/ProdPicker/Components/TipColumn/index.wxml'];else __wxAppCode__['Components/business/ProdPicker/Components/TipColumn/index.wxml'] = $gwx_XC_27( './Components/business/ProdPicker/Components/TipColumn/index.wxml' );
	;__wxRoute = "Components/business/ProdPicker/Components/TipColumn/index";__wxRouteBegin = true;__wxAppCurrentFile__="Components/business/ProdPicker/Components/TipColumn/index.js";define("Components/business/ProdPicker/Components/TipColumn/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["Components/business/ProdPicker/Components/TipColumn/index"],{"62df":function(n,e,o){var t=o("ed776");o.n(t).a},"6ad9":function(n,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"TipColumn",props:{data:Object,gold:Boolean},computed:{isLink:function(n){return"url"===n.data.jump.type}},methods:{clickHandle:function(){if(this.isLink)return this.$Router.push({name:"webview",params:{url:this.data.jump.url}});this.$emit("click",this.data)}}};e.default=t},"72c9":function(n,e,o){o.r(e);var t=o("7aa7"),i=o("e551");for(var a in i)["default"].indexOf(a)<0&&function(n){o.d(e,n,(function(){return i[n]}))}(a);o("62df");var u=o("f0c5"),c=Object(u.a)(i.default,t.b,t.c,!1,null,"28f7d06c",null,!1,t.a,void 0);e.default=c.exports},"7aa7":function(n,e,o){o.d(e,"b",(function(){return t})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var t=function(){this.$createElement;this._self._c},i=[]},e551:function(n,e,o){o.r(e);var t=o("6ad9"),i=o.n(t);for(var a in t)["default"].indexOf(a)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(a);e.default=i.a},ed776:function(n,e,o){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["Components/business/ProdPicker/Components/TipColumn/index-create-component",{"Components/business/ProdPicker/Components/TipColumn/index-create-component":function(n,e,o){o("543d").createComponent(o("72c9"))}},[["Components/business/ProdPicker/Components/TipColumn/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'Components/business/ProdPicker/Components/TipColumn/index.js'});require("Components/business/ProdPicker/Components/TipColumn/index.js");