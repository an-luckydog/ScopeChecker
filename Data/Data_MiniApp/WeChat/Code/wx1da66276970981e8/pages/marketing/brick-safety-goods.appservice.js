$gwx_XC_192=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_192 || [];
function gz$gwx_XC_192_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_192_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_192_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_192_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item'])
Z([[7],[3,'a']])
Z([3,'a'])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'b']])
Z([[6],[[7],[3,'item']],[3,'c']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_192_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_192_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_192=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_192=true;
var x=['./pages/marketing/brick-safety-goods.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_192_1()
var h7PB=_v()
_(r,h7PB)
var o8PB=function(o0PB,c9PB,lAQB,gg){
var tCQB=_mz(z,'brick-safety-goods-item',['bind:__l',3,'uI',1,'uP',2],[],o0PB,c9PB,gg)
_(lAQB,tCQB)
return lAQB
}
h7PB.wxXCkey=4
_2z(z,1,o8PB,e,s,gg,h7PB,'item','index','a')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_192";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_192();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/marketing/brick-safety-goods.wxml'] = [$gwx_XC_192, './pages/marketing/brick-safety-goods.wxml'];else __wxAppCode__['pages/marketing/brick-safety-goods.wxml'] = $gwx_XC_192( './pages/marketing/brick-safety-goods.wxml' );
	;__wxRoute = "pages/marketing/brick-safety-goods";__wxRouteBegin = true;__wxAppCurrentFile__="pages/marketing/brick-safety-goods.js";define("pages/marketing/brick-safety-goods.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../@babel/runtime/regenerator")),t=e(require("../../@babel/runtime/helpers/slicedToArray")),o=e(require("../../@babel/runtime/helpers/asyncToGenerator"));function n(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){a=!0,s=e},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw s}}}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}var s=require("../../common/vendor.js"),i=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../config/options.js"),require("../../config/theme.js"),require("../../hooks/products/useProductsSearch.js");var a=require("./useBrickGoods.js");require("../../consts.js"),require("../../config/enums.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js"),require("../../hooks/products/useProducts.js"),require("../../hooks/products/useDistricts.js"),require("../../hooks/products/useCategories.js"),require("../../hooks/products/usePromotion.js"),Math||c();var c=function(){return"./brick-safety-goods-item.js"},f=s.defineComponent({__name:"brick-safety-goods",props:{goods:null},setup:function(e){var u=e;i.useApp();var c=a.useBrickGoods().querySafetyGoodsByRule,f=s.ref([]),l=!1;return s.watch((function(){return u.goods}),(0,o.default)(r.default.mark((function e(){var o,s,i,a,p,d,h;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=2;break}return e.abrupt("return");case 2:f.value=[],l=!0,o=n(u.goods.items.entries()),e.prev=4,o.s();case 6:if((s=o.n()).done){e.next=14;break}return i=(0,t.default)(s.value,2),i[0],a=i[1],e.next=10,c(a);case 10:p=e.sent,f.value=f.value.concat(p);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),o.e(e.t0);case 19:return e.prev=19,o.f(),e.finish(19);case 22:if(d=4-f.value.length%4)for(h=0;h<d;h++)f.value.push(null);l=!1;case 25:case"end":return e.stop()}}),e,null,[[4,16,19,22]])}))),{immediate:!0}),function(e,r){return{a:s.f(s.unref(f),(function(e,r,t){return{a:r,b:"22c2e290-0-"+t,c:s.p({data:e,index:r})}}))}}}});wx.createComponent(f);
},{isPage:false,isComponent:true,currentFile:'pages/marketing/brick-safety-goods.js'});require("pages/marketing/brick-safety-goods.js");