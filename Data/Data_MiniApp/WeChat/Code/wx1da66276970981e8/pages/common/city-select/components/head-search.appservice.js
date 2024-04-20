$gwx_XC_103=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_103 || [];
function gz$gwx_XC_103_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_103_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_103_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_103_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'c']])
Z([[7],[3,'e']])
Z([3,'__l'])
Z([[7],[3,'d']])
Z([3,'data-v-35154a25'])
Z([3,'35154a25-0'])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_103_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_103_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_103=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_103=true;
var x=['./pages/common/city-select/components/head-search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_103_1()
var h9V=_v()
_(r,h9V)
if(_oz(z,0,e,s,gg)){h9V.wxVkey=1
var o0V=_v()
_(h9V,o0V)
if(_oz(z,1,e,s,gg)){o0V.wxVkey=1
var cAW=_mz(z,'city-filter',['bind:__l',2,'bindselect',1,'class',2,'uI',3,'uP',4],[],e,s,gg)
_(o0V,cAW)
}
o0V.wxXCkey=1
o0V.wxXCkey=3
}
h9V.wxXCkey=1
h9V.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_103";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_103();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/city-select/components/head-search.wxml'] = [$gwx_XC_103, './pages/common/city-select/components/head-search.wxml'];else __wxAppCode__['pages/common/city-select/components/head-search.wxml'] = $gwx_XC_103( './pages/common/city-select/components/head-search.wxml' );
	;__wxRoute = "pages/common/city-select/components/head-search";__wxRouteBegin = true;__wxAppCurrentFile__="pages/common/city-select/components/head-search.js";define("pages/common/city-select/components/head-search.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/vendor.js"),r=require("../../../../hooks/app/useApp.js");require("../../../../hooks/order/useOrder.js"),require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../hooks/products/useProductsSearch.js"),require("../../../../consts.js"),require("../../../../config/enums.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),Math||u();var u=function(){return"./city-filter.js"},s=e.defineComponent({__name:"head-search",emits:["select"],setup:function(u,s){var o=s.emit;r.useApp();var i=e.ref("");function n(e){o("select",e)}return e.watch((function(){return i.value}),(function(){e.preventPageScroll(!!i.value.trim())}),{immediate:!0}),function(r,u){return e.e({a:e.unref(i),b:e.o((function(r){return e.isRef(i)?i.value=r.detail.value:null})),c:e.unref(i)},e.unref(i)?{d:e.o(n),e:e.p({keyword:e.unref(i)})}:{})}}}),o=e._export_sfc(s,[["__scopeId","data-v-35154a25"]]);wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'pages/common/city-select/components/head-search.js'});require("pages/common/city-select/components/head-search.js");