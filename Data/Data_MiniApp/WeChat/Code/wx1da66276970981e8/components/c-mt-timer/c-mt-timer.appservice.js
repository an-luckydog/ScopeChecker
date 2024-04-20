$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];
function gz$gwx_XC_17_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./components/c-mt-timer/c-mt-timer.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var o2D=_n('slot')
_(r,o2D)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_17";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-mt-timer/c-mt-timer.wxml'] = [$gwx_XC_17, './components/c-mt-timer/c-mt-timer.wxml'];else __wxAppCode__['components/c-mt-timer/c-mt-timer.wxml'] = $gwx_XC_17( './components/c-mt-timer/c-mt-timer.wxml' );
	;__wxRoute = "components/c-mt-timer/c-mt-timer";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-mt-timer/c-mt-timer.js";define("components/c-mt-timer/c-mt-timer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../common/vendor.js"),r=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../config/options.js"),require("../../config/theme.js"),require("../../hooks/products/useProductsSearch.js");var u=require("../../hooks/products/useScroller.js");require("../../consts.js"),require("../../config/enums.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js");var o=e.defineComponent({__name:"c-mt-timer",props:{time:null,format:null,mtIndex:null,mtCardHeight:null,mtTimer:{type:Boolean}},emits:["change"],setup:function(o,s){var t=s.emit,a=o,n=u.useScroller();e.ref();var i=e.storeToRefs(n),l=i.currentIndexScrollTop,c=i.mtCount,v=i.scrollTopPos;e.ref(e.parseTimeData(0));var p=e.ref("0"),m=e.ref(0),f=e.ref(0),h=e.ref(!1),d=e.ref({}),j=r.useApp().systemInfo,q=e.throttle((function(){k()}),1e3);function g(r){f.value=r;var u=e.parseTimeData(r);t("change",u),p.value=e.parseFormat(a.format,u)}function k(){if(a.mtTimer)h.value=!0;else{var e=l.value,r=j.value.screenHeight+l.value+200,u=d.value.start>e&&d.value.end<r;h.value=u}}return e.watch((function(){return l.value}),(function(e,r){e!==r&&q()})),e.watch((function(){return c.value}),(function(r,u){if(h.value){var o=Math.max(m.value-Date.now(),0);e.isSameSecond(o,f.value)&&0!==o||g(o),f.value}})),e.onMounted((function(){f.value=a.time,g(f.value),m.value=Date.now()+f.value;var e=a.mtIndex+1,r=a.mtCardHeight+9;d.value={start:v.value+a.mtIndex*r,end:v.value+e*r,viewHeight:j.value.screenHeight},k()})),function(e,r){return{}}}});wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'components/c-mt-timer/c-mt-timer.js'});require("components/c-mt-timer/c-mt-timer.js");