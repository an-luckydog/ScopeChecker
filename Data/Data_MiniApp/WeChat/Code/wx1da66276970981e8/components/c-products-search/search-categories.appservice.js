$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'b']])
Z([3,'__l'])
Z([[7],[3,'a']])
Z([3,'1bf9cabd-0'])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./components/c-products-search/search-categories.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var fEH=_v()
_(r,fEH)
if(_oz(z,0,e,s,gg)){fEH.wxVkey=1
var cFH=_mz(z,'c-list-select',['bind:__l',1,'bindclick',1,'uI',2,'uP',3],[],e,s,gg)
_(fEH,cFH)
}
fEH.wxXCkey=1
fEH.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-products-search/search-categories.wxml'] = [$gwx_XC_30, './components/c-products-search/search-categories.wxml'];else __wxAppCode__['components/c-products-search/search-categories.wxml'] = $gwx_XC_30( './components/c-products-search/search-categories.wxml' );
	;__wxRoute = "components/c-products-search/search-categories";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-products-search/search-categories.js";define("components/c-products-search/search-categories.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../@babel/runtime/regenerator")),u=e(require("../../@babel/runtime/helpers/asyncToGenerator")),o=e(require("../../@babel/runtime/helpers/toConsumableArray")),s=require("../../common/vendor.js"),t=require("../../config/enums.js");require("../../config/options.js"),require("../../config/theme.js");var n=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js");var a=require("../../hooks/products/useProducts.js");require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useDistricts.js"),require("../../hooks/products/useCategories.js"),require("../../hooks/products/usePromotion.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js"),Array||s.resolveComponent("c-list-select")(),Math;var i=s.defineComponent({__name:"search-categories",props:{model:null},emits:["change"],setup:function(e,i){var c=i.emit,l=e,p=n.useApp().currentCityId,d=a.useProducts().retrieveCategories,f=s.ref([]),m=s.computed((function(){return l.model.platformId===t.PubPlatform.ELE})),h=s.computed((function(){return m.value})),v=s.computed((function(){var e;if(!(null==(e=f.value)?void 0:e.length))return[];var r=[];if(m.value)r=f.value||[];else{var u=f.value.find((function(e){return l.model.catId===e.value}));r=(null==u?void 0:u.children)||[]}return[{label:"全部",value:""}].concat((0,o.default)(r))}));function q(e){l.model.cat1Ids=Array.isArray(e.value)?e.value:[e.value],c("change",l.model)}return s.watch((function(){return[l.model.platformId]}),(0,u.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r.default.mark((function e(){var u;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(l.model.platformId,p.value);case 2:u=e.sent,f.value=u;case 4:case"end":return e.stop()}}),e)})))();case 2:case"end":return e.stop()}}),e)}))),{immediate:!0}),function(r,u){return{a:s.o(q),b:s.p({"model-value":e.model.cat1Ids,multiple:s.unref(h),options:s.unref(v),unchange:!0})}}}});wx.createComponent(i);
},{isPage:false,isComponent:true,currentFile:'components/c-products-search/search-categories.js'});require("components/c-products-search/search-categories.js");