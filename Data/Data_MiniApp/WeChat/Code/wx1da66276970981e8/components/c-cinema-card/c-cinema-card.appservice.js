$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'j']])
Z([3,'cinema-item data-v-b5d509b5'])
Z([[7],[3,'b']])
Z([[7],[3,'e']])
Z([[7],[3,'g']])
Z([[7],[3,'i']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./components/c-cinema-card/c-cinema-card.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var bGB=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,2,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,3,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(bGB,oJB)
if(_oz(z,4,e,s,gg)){oJB.wxVkey=1
var fKB=_v()
_(oJB,fKB)
if(_oz(z,5,e,s,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
}
oHB.wxXCkey=1
xIB.wxXCkey=1
oJB.wxXCkey=1
_(r,bGB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-cinema-card/c-cinema-card.wxml'] = [$gwx_XC_4, './components/c-cinema-card/c-cinema-card.wxml'];else __wxAppCode__['components/c-cinema-card/c-cinema-card.wxml'] = $gwx_XC_4( './components/c-cinema-card/c-cinema-card.wxml' );
	;__wxRoute = "components/c-cinema-card/c-cinema-card";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-cinema-card/c-cinema-card.js";define("components/c-cinema-card/c-cinema-card.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../common/vendor.js"),i=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../config/options.js"),require("../../config/theme.js"),require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/enums.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js");var r=e.defineComponent({__name:"c-cinema-card",props:{item:null,hidePrice:{type:Boolean},film:null},setup:function(r){var n=r,o=i.useApp(),t=o.app,u=o.currentCityId,s=o.isAccurateLocation,c=e.computed((function(){var e=n.item.cinema_service&&"[]"!==n.item.cinema_service,i=n.item.inUseCoupon;return e||i})),a=e.computed((function(){return s.value}));function m(){var e,i,r=n.item;r&&(t.trace("item:click",{tags:{cinema_id:r.standard_id,cinema_name:r.cinema_name,jump_date:r.jumpDate,film_id:null==(e=n.film)?void 0:e.id,film_name:null==(i=n.film)?void 0:i.name,city_id:u.value},anchor:function(e){if(!e.entryAnchor)return"film:cinema_around"}}),t.router.goto({url:"/film/pages/ticket/ticket?sid=".concat(n.item.standard_id,"&jumpDate=").concat(n.item.jumpDate,"&jumpFilmCode=").concat(n.item.jumpFilmCode),action:"item:click"}))}function p(e){var i=null;if(e&&e.length>0){var r=JSON.parse(e),n=Object.keys(r);i=[];for(var o=0;o<n.length;o++){var t=n[o],u=r[t];"退票"!==t&&"改签"!==t&&i.push({key:t,val:u})}}return console.log("arr>>>",i),i}return function(i,n){return e.e({a:e.t(r.item.cinema_name),b:!r.hidePrice},r.hidePrice?{}:{c:e.t(e.unref(e.formatMoney)(r.item.net_price))},{d:e.t(r.item.address),e:e.unref(a)},e.unref(a)?{f:e.t(r.item.distance)}:{},{g:e.unref(c)},e.unref(c)?e.e({h:e.f(p(r.item.cinema_service),(function(i,r,n){return{a:e.t(i.key)}})),i:r.item.inUseCoupon},(r.item.inUseCoupon,{})):{},{j:e.o(m)})}}}),n=e._export_sfc(r,[["__scopeId","data-v-b5d509b5"]]);wx.createComponent(n);
},{isPage:false,isComponent:true,currentFile:'components/c-cinema-card/c-cinema-card.js'});require("components/c-cinema-card/c-cinema-card.js");