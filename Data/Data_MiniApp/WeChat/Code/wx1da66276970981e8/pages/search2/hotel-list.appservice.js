$gwx_XC_216=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_216 || [];
function gz$gwx_XC_216_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_216_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_216_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_216_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item'])
Z([[7],[3,'a']])
Z([3,'d'])
Z([[6],[[7],[3,'item']],[3,'c']])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'a']])
Z([[6],[[7],[3,'item']],[3,'b']])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_216_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_216_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_216=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_216=true;
var x=['./pages/search2/hotel-list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_216_1()
var tOSB=_v()
_(r,tOSB)
var ePSB=function(oRSB,bQSB,xSSB,gg){
var fUSB=_v()
_(xSSB,fUSB)
if(_oz(z,3,oRSB,bQSB,gg)){fUSB.wxVkey=1
var cVSB=_mz(z,'goods-item',['bind:__l',4,'binddetail',1,'uI',2,'uP',3],[],oRSB,bQSB,gg)
_(fUSB,cVSB)
}
fUSB.wxXCkey=1
fUSB.wxXCkey=3
return xSSB
}
tOSB.wxXCkey=4
_2z(z,1,ePSB,e,s,gg,tOSB,'item','index','d')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_216";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_216();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search2/hotel-list.wxml'] = [$gwx_XC_216, './pages/search2/hotel-list.wxml'];else __wxAppCode__['pages/search2/hotel-list.wxml'] = $gwx_XC_216( './pages/search2/hotel-list.wxml' );
	;__wxRoute = "pages/search2/hotel-list";__wxRouteBegin = true;__wxAppCurrentFile__="pages/search2/hotel-list.js";define("pages/search2/hotel-list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../@babel/runtime/regenerator")),t=e(require("../../@babel/runtime/helpers/defineProperty")),o=e(require("../../@babel/runtime/helpers/asyncToGenerator"));function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){(0,t.default)(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var s=require("../../common/vendor.js"),a=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../config/options.js"),require("../../config/theme.js"),require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/enums.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js"),Math||c();var c=function(){return"../../components/c-product-card/goods-item.js"},i=s.defineComponent({__name:"hotel-list",setup:function(e,t){var n,c=t.expose,i=s.ref([]),p=a.useApp(),d=p.app,f=p.currentCityId,l=p.commonConfig,h=s.ref(!1),g=s.computed((function(){var e;return!(null==(e=i.value)?void 0:e.length)&&!h.value}));function m(e){return v.apply(this,arguments)}function v(){return(v=(0,o.default)(r.default.mark((function e(t){var o,n,a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.tryExec(d.request,{api:"tuxi.txsh.goods.mt.goodsListPageInfoShop",params:u({},t)});case 2:return o=e.sent,n=o.success,a=o.result,e.abrupt("return",a&&n?a.goodsList.map((function(e){return e.goodsName=e.title,e.catId=t.cat0Id,e})):[]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.computed((function(){var e;return!!(null==(e=i.value)?void 0:e.length)})),c({loadData:(n=(0,o.default)(r.default.mark((function e(t){var o,n,s,a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.value=!0,o=u({cat0Id:"209"},t),n=u({cat0Id:"217"},t),l.value.searchSwitchConfig&&-1!==l.value.searchSwitchConfig.indexOf("hotel")){e.next=4;break}return e.abrupt("return",(h.value=!1,void(i.value=[])));case 4:return e.next=6,m(o);case 6:return s=e.sent,e.next=9,m(n);case 9:a=e.sent,s&&(i.value=s.concat(a)),h.value=!1;case 11:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),isNoData:g}),function(e,r){return{a:s.f(s.unref(i),(function(e,r,t){return{a:s.o((function(r){return function(e){d.trace("goods_detail_click",{tags:[e.goodsId,e.goodsName,e.catId,e.platformId,e.shopId,f.value]});var r="/pages/goods1/detail?cityId=".concat(f.value,"&platformId=").concat(e.platformId,"&catId=").concat(e.catId,"&goodsId=").concat(e.goodsId,"&shopId=").concat(e.shopId);d.router.goto({url:r})}(e)}),r),b:"ebfadf78-0-"+t,c:s.p({item:e}),d:r,e:0===r?"-32px":0}}))}}}});wx.createComponent(i);
},{isPage:false,isComponent:true,currentFile:'pages/search2/hotel-list.js'});require("pages/search2/hotel-list.js");