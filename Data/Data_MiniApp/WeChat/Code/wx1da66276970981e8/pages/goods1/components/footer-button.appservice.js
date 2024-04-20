$gwx_XC_173=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_173 || [];
function gz$gwx_XC_173_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_173_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_173_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_173_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_173_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_173_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_173=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_173=true;
var x=['./pages/goods1/components/footer-button.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_173_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_173";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_173();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/goods1/components/footer-button.wxml'] = [$gwx_XC_173, './pages/goods1/components/footer-button.wxml'];else __wxAppCode__['pages/goods1/components/footer-button.wxml'] = $gwx_XC_173( './pages/goods1/components/footer-button.wxml' );
	;__wxRoute = "pages/goods1/components/footer-button";__wxRouteBegin = true;__wxAppCurrentFile__="pages/goods1/components/footer-button.js";define("pages/goods1/components/footer-button.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),o=e(require("../../../@babel/runtime/regenerator")),r=e(require("../../../@babel/runtime/helpers/asyncToGenerator")),t=e(require("../../../@babel/runtime/helpers/defineProperty"));function s(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?s(Object(r),!0).forEach((function(o){(0,t.default)(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}var i=require("../../../common/vendor.js"),n=require("../../../hooks/app/useApp.js");require("../../../hooks/order/useOrder.js");var a=require("../../../hooks/distribution/useDistribution.js"),p=require("../../../hooks/products/useProducts.js");require("../../../hooks/products/useProductsSearch.js"),require("../../../consts.js"),require("../../../config/enums.js"),require("../../../config/options.js"),require("../../../config/theme.js"),require("../../../config/routes.js"),require("../../../utils/upgrade.js"),require("../../../hooks/app/useLocation.js"),require("../../../hooks/app/useConfig.js"),require("../../../hooks/app/useSubscribeMsg.js"),require("../../../hooks/products/useFilm.js"),require("../../../utils/num-util.js"),require("../../../hooks/app/useAreas.js"),require("../../../utils/app.js"),require("../../../hooks/products/useDistricts.js"),require("../../../hooks/products/useCategories.js"),require("../../../hooks/products/usePromotion.js"),require("../../../hooks/products/useShopCoupons.js"),require("../../../hooks/products/useDefaultRegionInfo.js");var c=i.defineComponent({__name:"footer-button",props:{goodsData:null,goodsOptions:null},emits:["goShare"],setup:function(e,t){var s=t.emit,c=e,d=n.useApp(),f=d.app,l=d.requestSubscribeMessage,g=d.SUBSCRIBE_MSG_SCENE,h=p.useProducts().openGoodsBuyPage,m=a.useDistribution().getPlatformMiniAppId,j=i.computed((function(){var e;return null==(e=c.goodsData.goodsInfo)?void 0:e.platformId})),b=i.computed((function(){var e,o=m(j.value),r=(null==(e=c.goodsData.goodsInfo)?void 0:e.catId)||c.goodsData.catId;return u(u({miniAppId:o},c.goodsData.goodsInfo),{},{catId:r})})),q=i.computed((function(){return u({},c.goodsData.shopInfo)}));function I(){O("share:click"),l([],[g.BUY_BUTTON,g.SHARE_BUY,g.BUY_REMIND]),s("goShare",{})}function v(){return y.apply(this,arguments)}function y(){return(y=(0,r.default)(o.default.mark((function e(){var r,t;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O("buy:click"),r=b.value,t=q.value,l([],[g.BUY_BUTTON,g.SHARE_BUY,g.BUY_REMIND]),h(u({shopId:t.shopId,link:{miniProgramAppId:r.miniAppId,miniProgramPath:r.miniProgramPath}},r));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var o=c.goodsOptions||{},r=c.goodsData||{},t=r.goodsInfo||{},s=r.shopInfo||{};f.trace(e,{tags:{goods_id:t.goodsId,goods_name:t.goodsName||t.title,goods_type:"goods",cat_id:t.catId||o.catId,platform_id:t.platformId||o.platformId,shop_id:s.shopId||o.shopId,city_id:t.cityId||o.cityId,detail:r}})}return function(o,r){var t,s;return{a:i.t(i.unref(i.formatMoney)(null==(t=e.goodsData)?void 0:t.selfPrice)),b:i.o(v),c:i.t(i.unref(i.formatMoney)(null==(s=e.goodsData)?void 0:s.sharePrice)),d:i.o(I)}}}}),d=i._export_sfc(c,[["__scopeId","data-v-20d5826c"]]);wx.createComponent(d);
},{isPage:false,isComponent:true,currentFile:'pages/goods1/components/footer-button.js'});require("pages/goods1/components/footer-button.js");