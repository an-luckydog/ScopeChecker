$gwx_XC_159=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_159 || [];
function gz$gwx_XC_159_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_159_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_159_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_159_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'e']])
Z([3,'__l'])
Z([[7],[3,'c']])
Z([[7],[3,'d']])
Z([3,'data-v-f16bbc57'])
Z([3,'f16bbc57-0'])
Z(z[0])
Z([[4],[[5],[1,'d']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_159_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_159_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_159=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_159=true;
var x=['./pages/entry/my/components/cash-tip.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_159_1()
var cCFB=_v()
_(r,cCFB)
if(_oz(z,0,e,s,gg)){cCFB.wxVkey=1
var oDFB=_mz(z,'u-popup',['bind:__l',1,'bindclose',1,'bindopen',2,'class',3,'uI',4,'uP',5,'uS',6],[],e,s,gg)
_(cCFB,oDFB)
}
cCFB.wxXCkey=1
cCFB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_159";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_159();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry/my/components/cash-tip.wxml'] = [$gwx_XC_159, './pages/entry/my/components/cash-tip.wxml'];else __wxAppCode__['pages/entry/my/components/cash-tip.wxml'] = $gwx_XC_159( './pages/entry/my/components/cash-tip.wxml' );
	;__wxRoute = "pages/entry/my/components/cash-tip";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry/my/components/cash-tip.js";define("pages/entry/my/components/cash-tip.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/vendor.js");require("../../../../consts.js"),Array||e.resolveComponent("u-popup")(),Math;var o=e.defineComponent({__name:"cash-tip",setup:function(o,n){var t=n.expose,r=e.useCurrentAppInstance(),u=e.ref(!1);function a(){s()}function c(){s(),r.router.goWithLogin({url:"/tgl/pages/account/wallet/cashRealName?__op=my:go_cashRealName"})}function s(){u.value=!1}function p(){u.value=!0}return e.ref(!0),t({open:p,close:s}),function(o,n){return{a:e.o(a),b:e.o(c),c:e.o(s),d:e.o(p),e:e.p({show:e.unref(u),mode:"center",round:"12px",customStyle:"width:85%;",zIndex:"999999999"})}}}}),n=e._export_sfc(o,[["__scopeId","data-v-f16bbc57"]]);wx.createComponent(n);
},{isPage:false,isComponent:true,currentFile:'pages/entry/my/components/cash-tip.js'});require("pages/entry/my/components/cash-tip.js");