$gwx_XC_144=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_144 || [];
function gz$gwx_XC_144_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_144_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_144_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_144_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_144_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_144_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_144=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_144=true;
var x=['./pages/entry/home/components/head-search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_144_1()
var oZ7=_v()
_(r,oZ7)
if(_oz(z,0,e,s,gg)){oZ7.wxVkey=1
}
oZ7.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_144";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_144();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry/home/components/head-search.wxml'] = [$gwx_XC_144, './pages/entry/home/components/head-search.wxml'];else __wxAppCode__['pages/entry/home/components/head-search.wxml'] = $gwx_XC_144( './pages/entry/home/components/head-search.wxml' );
	;__wxRoute = "pages/entry/home/components/head-search";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry/home/components/head-search.js";define("pages/entry/home/components/head-search.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../../../@babel/runtime/regenerator")),u=e(require("../../../../@babel/runtime/helpers/asyncToGenerator")),o=require("../../../../common/vendor.js"),t=require("../../../../hooks/app/useApp.js"),s=require("../../../../consts.js");require("../../../../hooks/order/useOrder.js"),require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../hooks/products/useProductsSearch.js");var n=require("../useIndexHome.js");require("../../../../config/enums.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),require("../useDefaultDpList.js"),require("../../../../hooks/products/useProducts.js"),require("../../../../hooks/products/useDistricts.js"),require("../../../../hooks/products/useCategories.js"),require("../../../../hooks/products/usePromotion.js");var i=o.defineComponent({__name:"head-search",setup:function(e){var i=t.useApp(),a=i.systemInfo,c=i.app,p=i.chooseLocation,l=i.currentLocation,f=i.isAccurateLocation,h=a.value,q=h.navTop,v=h.navWidth,m=n.useIndexHome(),d=m.activityInfo,j=m.topImageSwitchComp,g=o.querySceneIsTimeline(),k=o.computed((function(){var e;return!(j.value&&!g)||(null==(e=d.value)?void 0:e.activityPlaceOne.length)>0}));function y(){return b.apply(this,arguments)}function b(){return(b=(0,u.default)(r.default.mark((function e(){var u;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:u=e.sent,c.trace("action",{name:"home-city-select",tags:{location:u}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){c.tracer.setTraceType(s.AppTraceType.HomeSearch),c.router.goWithLogin({url:"/pages/search2/search",action:"search:click"})}var D=o.computed((function(){if(!l.value)return"定位中";if(console.log("currentLocation.value>>>",l.value),f.value&&!k.value){var e=l.value.cityName;return l.value.ztoDistrict&&(e+=l.value.ztoDistrict),l.value.ztoDistrict&&(e+=l.value.town),e}return l.value.cityName}));return function(e,r){return o.e({a:!o.unref(k)},o.unref(k)?{}:{b:o.t(o.unref(D)),c:o.o(y),d:"".concat(o.unref(q)+4,"px"),e:"".concat(o.unref(v),"px")},{f:!o.unref(k)},o.unref(k)?{h:o.t(o.unref(D)),i:o.o(y),j:o.o(y),k:o.o(x),l:"".concat(o.unref(q),"px"),m:"".concat(o.unref(v),"px")}:{g:o.o(x)})}}});wx.createComponent(i);
},{isPage:false,isComponent:true,currentFile:'pages/entry/home/components/head-search.js'});require("pages/entry/home/components/head-search.js");