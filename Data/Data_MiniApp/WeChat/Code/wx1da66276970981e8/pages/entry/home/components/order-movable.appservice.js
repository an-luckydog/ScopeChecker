$gwx_XC_147=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_147 || [];
function gz$gwx_XC_147_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_147_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_147_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_147_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([[7],[3,'e']])
Z([3,'fixed-button data-v-c969d7db'])
Z([3,'all'])
Z([1,true])
Z(z[4])
Z([[7],[3,'d']])
Z([3,'data-v-c969d7db'])
Z([3,'display:flex;justify-content:center;align-items:center'])
Z([[7],[3,'b']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_147_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_147_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_147=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_147=true;
var x=['./pages/entry/home/components/order-movable.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_147_1()
var cK8=_v()
_(r,cK8)
if(_oz(z,0,e,s,gg)){cK8.wxVkey=1
var oL8=_mz(z,'movable-view',['bindchange',1,'class',1,'direction',2,'inertia',3,'outOfBounds',4],[],e,s,gg)
var lM8=_mz(z,'view',['bindtap',6,'class',1,'style',2],[],e,s,gg)
var aN8=_v()
_(lM8,aN8)
if(_oz(z,9,e,s,gg)){aN8.wxVkey=1
}
aN8.wxXCkey=1
_(oL8,lM8)
_(cK8,oL8)
}
else{cK8.wxVkey=2
}
cK8.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_147";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_147();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry/home/components/order-movable.wxml'] = [$gwx_XC_147, './pages/entry/home/components/order-movable.wxml'];else __wxAppCode__['pages/entry/home/components/order-movable.wxml'] = $gwx_XC_147( './pages/entry/home/components/order-movable.wxml' );
	;__wxRoute = "pages/entry/home/components/order-movable";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry/home/components/order-movable.js";define("pages/entry/home/components/order-movable.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../../../@babel/runtime/regenerator")),o=e(require("../../../../@babel/runtime/helpers/asyncToGenerator")),s=require("../../../../common/vendor.js"),u=require("../../../../hooks/app/useApp.js");require("../../../../hooks/order/useOrder.js");var t=require("../../../../config/enums.js");require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../hooks/products/useProductsSearch.js");var n=require("../useIndexHome.js");require("../../../../consts.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),require("../useDefaultDpList.js"),require("../../../../hooks/products/useProducts.js"),require("../../../../hooks/products/useDistricts.js"),require("../../../../hooks/products/useCategories.js"),require("../../../../hooks/products/usePromotion.js");var i=s.defineComponent({__name:"order-movable",setup:function(e){var i,a=n.useIndexHome(),c=a.queryOrderLabel,p=a.orderLabelRef,d=a.openOrderLabel,f=a.closeOrderLabel,l=u.useApp(),q=l.app,h=(l.systemInfo,l.ensureLogin);function j(e){e.detail.x>=-6&&f()}function m(){return g.apply(this,arguments)}function g(){return(g=(0,o.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){p.value.iconName?q.router.goto({url:"/tgl/pages/account/orders/index?orderType=".concat(t.OrderType.FILM,"&__op=order:go_order_list")}):q.router.goto({url:"/tgl/pages/account/orders/index?orderType=".concat(t.OrderType.ALL,"&__op=order:go_order_list")}),f()}return s.onMounted((0,o.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:c(),i&&clearInterval(i),i=setInterval((function(){c()}),6e4);case 5:case"end":return e.stop()}}),e)})))),function(e,r){return s.e({a:s.unref(p).showStatus},s.unref(p).showStatus?s.e({b:s.unref(p).iconName},s.unref(p).iconName?{c:s.t(s.unref(p).iconName)}:{},{d:s.o(k),e:s.o(j),f:"1270rpx"}):{g:s.o(m)})}}}),a=s._export_sfc(i,[["__scopeId","data-v-c969d7db"]]);wx.createComponent(a);
},{isPage:false,isComponent:true,currentFile:'pages/entry/home/components/order-movable.js'});require("pages/entry/home/components/order-movable.js");