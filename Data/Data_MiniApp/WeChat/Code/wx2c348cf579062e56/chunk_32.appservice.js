$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];
function gz$gwx_XC_26_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-root'])
Z([[2,'==='],[[7],[3,'currentPage']],[[6],[[7],[3,'pageIndex']],[3,'isNewOrders']]])
Z([[2,'==='],[[7],[3,'currentPage']],[[6],[[7],[3,'pageIndex']],[3,'orders']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./pages/orders/orders.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var oNS=_n('view')
_rz(z,oNS,'id',0,e,s,gg)
var fOS=_v()
_(oNS,fOS)
if(_oz(z,1,e,s,gg)){fOS.wxVkey=1
var cPS=_n('newOrders')
_(fOS,cPS)
}
else if(_oz(z,2,e,s,gg)){fOS.wxVkey=2
var hQS=_n('orders')
_(fOS,hQS)
}
else{fOS.wxVkey=3
}
fOS.wxXCkey=1
fOS.wxXCkey=3
fOS.wxXCkey=3
_(r,oNS)
var oRS=_n('tm')
_(r,oRS)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orders/orders.wxml'] = [$gwx_XC_26, './pages/orders/orders.wxml'];else __wxAppCode__['pages/orders/orders.wxml'] = $gwx_XC_26( './pages/orders/orders.wxml' );
	;__wxRoute = "pages/orders/orders";__wxRouteBegin = true;__wxAppCurrentFile__="pages/orders/orders.js";define("pages/orders/orders.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t,o=require("../../npm/wmfe/wxapp-component-abtest0_4_4/src/components/abtest/index"),r={default:0,orders:1,isNewOrders:2};Page({data:{pageIndex:r,currentPage:r.default},eventBus:getApp()&&getApp().__modules__&&getApp().__modules__.EventBus,pageParams:null,onLoad:function(e){this.pageParams=e;try{global.mmb.logInfo&&global.mmb.logInfo("页面onload: "+this.route,e)}catch(e){}"B"===o.abtest.getCache("wxapp-order-list-page")?this.setData({currentPage:r.isNewOrders}):this.setData({currentPage:r.orders})},onShow:function(){var r=this,n=getApp();if(n.setCustomTabBar("order"),setTimeout((function(){r.eventBus.fire("order:onShow",r.pageParams)}),1e3),"B"===o.abtest.getCache("wxapp-order-list-page")){var a=global.mmb.getSelectCommon(n.store.getState()),s=a.wm_latitude,i=a.wm_longitude;void 0!==e&&void 0!==t&&s!==e&&i!==t&&this.eventBus.fire("order:addressRefresh"),e=s,t=i}},onHide:function(){this.eventBus.fire("order:onHide")},onTabItemTap:function(){this.eventBus.fire("order:onTabItemTap")},onReachBottom:function(){this.eventBus.fire("order:onReachBottom")},onPullDownRefresh:function(){this.eventBus.fire("order:onPullDownRefresh")},onPageScroll:function(e){this.eventBus.fire("order:onPageScroll",e)}});
},{isPage:true,isComponent:true,currentFile:'pages/orders/orders.js'});require("pages/orders/orders.js");