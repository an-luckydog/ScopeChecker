$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'b']])
Z([3,'__l'])
Z([[7],[3,'a']])
Z([3,'42ead7f3-0'])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./components/c-goods-card/c-goods-card.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
var c6C=_v()
_(r,c6C)
if(_oz(z,0,e,s,gg)){c6C.wxVkey=1
var h7C=_mz(z,'goods-item',['bind:__l',1,'binddetail',1,'uI',2,'uP',3],[],e,s,gg)
_(c6C,h7C)
}
c6C.wxXCkey=1
c6C.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-goods-card/c-goods-card.wxml'] = [$gwx_XC_12, './components/c-goods-card/c-goods-card.wxml'];else __wxAppCode__['components/c-goods-card/c-goods-card.wxml'] = $gwx_XC_12( './components/c-goods-card/c-goods-card.wxml' );
	;__wxRoute = "components/c-goods-card/c-goods-card";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-goods-card/c-goods-card.js";define("components/c-goods-card/c-goods-card.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../@babel/runtime/regenerator")),t=e(require("../../@babel/runtime/helpers/defineProperty")),o=e(require("../../@babel/runtime/helpers/asyncToGenerator"));function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?u(Object(o),!0).forEach((function(r){(0,t.default)(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var n=require("../../common/vendor.js"),a=require("../../config/enums.js");require("../../config/options.js"),require("../../config/theme.js");var i=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js");var c=require("../../hooks/products/useProducts.js");require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useDistricts.js"),require("../../hooks/products/useCategories.js"),require("../../hooks/products/usePromotion.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js"),Math||d();var d=function(){return"../c-product-card/goods-item.js"},p=n.defineComponent({__name:"c-goods-card",props:{item:null,takeout:{type:Boolean},isMtTakeout:{type:Boolean},catId:null,platformId:null,detailHandler:null},emits:["detail","goToGoods","goTakeout"],setup:function(e,t){var u=t.emit,d=e,p=i.useApp(),l=p.app,f=p.isLogin,m=p.currentCityId,g=c.useProducts().openTakeoutShopPage;function h(){return j.apply(this,arguments)}function j(){return(j=(0,o.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.default)(r.default.mark((function e(){var t,o;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(function(e){var r=d.item||{};l.trace("goods:click",{tags:{goods_id:r.goodsId,goods_name:r.goodsName,goods_type:"goods",cat_id:r.catId||d.catId,platform_id:r.platformId||d.platformId,city_id:m.value,item:r}})}(),t=d.item,!1!==d.detailHandler){e.next=4;break}return e.abrupt("return");case 4:if(f.value){e.next=6;break}return e.abrupt("return",void l.router.goLogin());case 6:if(!n.isFunction(d.detailHandler)){e.next=8;break}return e.abrupt("return",Promise.resolve().then((function(){return d.detailHandler(d.item)})));case 8:d.takeout?(n.showLoading("加载中"),g(s(s({},t),{},{catId:t.catId||d.catId,platformId:t.platformId||d.platformId}),{action:"goods:click"}),setTimeout((function(){n.showLoading(!1)}),500)):(o="/pages/goods1/detail?cityId=".concat(m.value,"&platformId=").concat(t.platformId,"&catId=").concat(t.catId,"&goodsId=").concat(t.goodsId,"&shopId=").concat(t.shopId),l.router.goto({url:o,action:"goods:click"})),u("detail",d.item,d.takeout);case 10:case"end":return e.stop()}}),e)})))();case 2:u("goToGoods");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.computed((function(){return d.platformId===a.PubPlatform.ELE})),n.computed((function(){return d.platformId===a.PubPlatform.MT_TakeOut})),function(r,t){return{a:n.o(h),b:n.p({item:e.item})}}}});wx.createComponent(p);
},{isPage:false,isComponent:true,currentFile:'components/c-goods-card/c-goods-card.js'});require("components/c-goods-card/c-goods-card.js");