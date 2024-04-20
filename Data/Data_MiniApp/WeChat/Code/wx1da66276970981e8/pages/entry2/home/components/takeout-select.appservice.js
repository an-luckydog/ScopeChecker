$gwx_XC_164=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_164 || [];
function gz$gwx_XC_164_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_164_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_164_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_164_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_164_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_164_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_164=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_164=true;
var x=['./pages/entry2/home/components/takeout-select.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_164_1()
var t7HB=_v()
_(r,t7HB)
if(_oz(z,0,e,s,gg)){t7HB.wxVkey=1
}
t7HB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_164";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_164();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry2/home/components/takeout-select.wxml'] = [$gwx_XC_164, './pages/entry2/home/components/takeout-select.wxml'];else __wxAppCode__['pages/entry2/home/components/takeout-select.wxml'] = $gwx_XC_164( './pages/entry2/home/components/takeout-select.wxml' );
	;__wxRoute = "pages/entry2/home/components/takeout-select";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry2/home/components/takeout-select.js";define("pages/entry2/home/components/takeout-select.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/vendor.js"),u=require("../useHome.js"),r=require("../../../../config/enums.js");require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../consts.js"),require("../../../../hooks/app/useApp.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/order/useOrder.js"),require("../../../../hooks/products/useProducts.js"),require("../../../../hooks/products/useDistricts.js"),require("../../../../hooks/products/useCategories.js"),require("../../../../hooks/products/usePromotion.js"),require("../../../../hooks/products/useProductsSearch.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js");var o=e.defineComponent({__name:"takeout-select",emits:["confirm"],setup:function(o,s){var t=s.emit,n=u.useHome(),i=n.currentTakeoutType,c=n.changeTakeoutType,p=n.hiddenMtTakeoutTab;function a(e){c(e),t("confirm",e)}e.onMounted((function(){c(r.TakeOutType.MT),e.watch((function(){return p.value}),(function(e,u,o){console.log("hiddenMtTakeoutTab>>>",e),c(e?r.TakeOutType.ELE:r.TakeOutType.MT)}))}));var d=e.computed((function(){return i.value===r.TakeOutType.MT})),f=e.computed((function(){return i.value===r.TakeOutType.ELE}));return function(u,o){return e.e({a:!e.unref(p)},e.unref(p)?{}:{b:e.unref(d)?"#fd3d53":"#222222",c:e.o((function(u){return a(e.unref(r.TakeOutType).MT)})),d:"1px ".concat(e.unref(d)?"#fd3d53":"white"," solid")},{e:e.unref(f)?"#fd3d53":"#222222",f:e.o((function(u){return a(e.unref(r.TakeOutType).ELE)})),g:"1px ".concat(e.unref(f)?"#fd3d53":"white"," solid")})}}}),s=e._export_sfc(o,[["__scopeId","data-v-0391f9d5"]]);wx.createComponent(s);
},{isPage:false,isComponent:true,currentFile:'pages/entry2/home/components/takeout-select.js'});require("pages/entry2/home/components/takeout-select.js");