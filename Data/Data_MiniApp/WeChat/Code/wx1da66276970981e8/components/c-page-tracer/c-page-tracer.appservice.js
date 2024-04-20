$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./components/c-page-tracer/c-page-tracer.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-page-tracer/c-page-tracer.wxml'] = [$gwx_XC_22, './components/c-page-tracer/c-page-tracer.wxml'];else __wxAppCode__['components/c-page-tracer/c-page-tracer.wxml'] = $gwx_XC_22( './components/c-page-tracer/c-page-tracer.wxml' );
	;__wxRoute = "components/c-page-tracer/c-page-tracer";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-page-tracer/c-page-tracer.js";define("components/c-page-tracer/c-page-tracer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Arrayincludes"),require("../../@babel/runtime/helpers/Objectentries");var r=e(require("../../@babel/runtime/regenerator")),t=e(require("../../@babel/runtime/helpers/asyncToGenerator")),o=require("../../common/vendor.js"),n=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../config/options.js"),require("../../config/theme.js"),require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/enums.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js");var a=o.defineComponent({__name:"c-page-tracer",props:{immediate:{type:Boolean,default:!0},anchor:{default:!1},traceData:null},setup:function(e,a){var s=a.expose,u=e,i=n.useApp(),c=i.app,p=i.onShow,d=i.setTraceAnchor,l=o.ref(!1);function m(){return f.apply(this,arguments)}function f(){return(f=(0,t.default)(r.default.mark((function e(){var t,n,a,s,i,p,d;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.nextTick$1();case 2:if(l.value){e.next=4;break}try{a="function"==typeof u.traceData?u.traceData():u.traceData,s=(a=a||{}).name,i=o.unref(a.data)||{},p="",d=a.tags||{},Object.entries(d).length||(["mt_goods"].includes(s)?d={goods_id:i.goodsId,goods_name:i.title,goods_type:"goods"}:["mt_coupon"].includes(s)?d={goods_id:i.vpSkuViewId,goods_name:i.name,goods_type:"coupon"}:["film"].includes(s)&&(d={goods_id:null==(t=null==i?void 0:i.film)?void 0:t.id,goods_name:null==(n=null==i?void 0:i.film)?void 0:n.name,goods_type:"film"}),d.trace_name=s,d.item=i.item,["film"].includes(s)&&(i.cinema&&(d.cinema_id=i.cinema.standard_id,d.cinema_name=i.cinema.cinema_name),p=function(e){if(e.isSharePage)return"film:film_hot:share"}),a={anchor:p,tags:d}),c.trace("page_enter",a),l.value=!0}catch(e){c.trace("page_error",{error:e})}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return p((0,t.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(u.anchor),e.t0=u.immediate,!e.t0){e.next=5;break}return e.next=5,m();case 5:case"end":return e.stop()}}),e)})))),s({tracePageEnter:m}),function(e,r){return{}}}});wx.createComponent(a);
},{isPage:false,isComponent:true,currentFile:'components/c-page-tracer/c-page-tracer.js'});require("components/c-page-tracer/c-page-tracer.js");