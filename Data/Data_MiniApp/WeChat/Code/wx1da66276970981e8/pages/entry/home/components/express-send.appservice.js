$gwx_XC_136=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_136 || [];
function gz$gwx_XC_136_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_136_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_136_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_136_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_136_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_136_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_136=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_136=true;
var x=['./pages/entry/home/components/express-send.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_136_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_136";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_136();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry/home/components/express-send.wxml'] = [$gwx_XC_136, './pages/entry/home/components/express-send.wxml'];else __wxAppCode__['pages/entry/home/components/express-send.wxml'] = $gwx_XC_136( './pages/entry/home/components/express-send.wxml' );
	;__wxRoute = "pages/entry/home/components/express-send";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry/home/components/express-send.js";define("pages/entry/home/components/express-send.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../../../@babel/runtime/regenerator")),n=e(require("../../../../@babel/runtime/helpers/asyncToGenerator")),u=e(require("../../../../@babel/runtime/helpers/defineProperty"));function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);r&&(u=u.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,u)}return n}function t(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){(0,u.default)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var i=require("../../../../common/vendor.js"),s=require("../../../../hooks/app/useApp.js"),c=require("../../../../consts.js");require("../../../../hooks/order/useOrder.js"),require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../hooks/products/useProductsSearch.js");var a=require("../useIndexHome.js");require("../../../../config/enums.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),require("../useDefaultDpList.js"),require("../../../../hooks/products/useProducts.js"),require("../../../../hooks/products/useDistricts.js"),require("../../../../hooks/products/useCategories.js"),require("../../../../hooks/products/usePromotion.js");var l=i.defineComponent({__name:"express-send",setup:function(e){var u=a.useIndexHome().activityInfo,o=s.useApp(),l=o.app,p=(o.wxApp,o.ensureLogin,o.commonConfig),d=o.currentLocation,f=o.systemInfo,v=i.ref(),g=i.computed((function(){return.3*f.value.screenWidth})),h=i.computed((function(){var e,r,n,o,t,i,s;return(null==(e=v.value)?void 0:e.indexSendBg)&&!(null==(r=v.value)?void 0:r.indexSendHidden)?"url(".concat(null==(n=v.value)?void 0:n.indexSendBg,")"):(null==(o=v.value)?void 0:o.indexSendHidden)&&0===(null==(i=null==(t=u.value)?void 0:t.activityPlaceThree)?void 0:i.length)?"url(".concat(null==(s=v.value)?void 0:s.indexSendBg,")"):"#edf7ff"})),j=i.computed((function(){var e,r,n,o=(null==(r=null==(e=u.value)?void 0:e.activityPlaceThree)?void 0:r.length)>0;return(null==(n=v.value)?void 0:n.indexSendHidden)&&o}));function m(){var e,r,n,o=null==(r=null==(e=u.value)?void 0:e.activityPlaceThree)?void 0:r[0];if(q("express_view:click",{tags:t({},null==(n=u.value)?void 0:n.activityPlaceThree[0])}),null==o?void 0:o.jumpAppId){var s={appId:o.jumpAppId,path:o.jumpUrl};i.navigateToEmbeddedMiniProgram(s)}else l.router.goWithLogin({url:null==o?void 0:o.jumpUrl,action:"express_view:click"})}function q(e,r){l.tracer.setTraceType(c.AppTraceType.HomeExpressSend),l.trace(e,r)}return i.onMounted((function(){i.watch((function(){return d.value}),(function(e,r){v.value=JSON.parse(p.value.indexSwitchConfig)}))})),console.log("commonConfig>>>",p.value),function(e,o){var t;return i.e({a:i.unref(j)},i.unref(j)?{b:"".concat(i.unref(g),"px"),c:null==(t=i.unref(u))?void 0:t.activityPlaceThree[0].headImage,d:i.o(m),e:"".concat(i.unref(g),"px")}:{f:i.unref(h),g:i.o((function(e){return(u=(0,n.default)(r.default.mark((function e(n,u){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&u&&(q("express_sending:click",{tags:{code:n,url:u}}),l.router.goWithLogin({url:u,action:"express_sending:click"}));case 1:case"end":return e.stop()}}),e)}))),function(e,r){return u.apply(this,arguments)})("createSending","/kdcs/pages/sending/index");var u}))})}}}),p=i._export_sfc(l,[["__scopeId","data-v-59d00326"]]);wx.createComponent(p);
},{isPage:false,isComponent:true,currentFile:'pages/entry/home/components/express-send.js'});require("pages/entry/home/components/express-send.js");