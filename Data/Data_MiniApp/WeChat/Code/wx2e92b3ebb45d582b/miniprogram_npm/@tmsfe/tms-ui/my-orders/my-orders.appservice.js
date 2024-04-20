$gwx_XC_39=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];
function gz$gwx_XC_39_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_39=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_39=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_39";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_39();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.wxml'] = [$gwx_XC_39, './miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.wxml'] = $gwx_XC_39( './miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.js";define("miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e;var t=((e=require("@tmsfe/tms-core"))&&e.__esModule?e:{default:e}).default.getReporter,r=null;Component({properties:{orderType:{type:String},fixedType:{type:String},bottom:{type:Number,value:232},pageScrollTrigger:{type:Number,observer:function(){this.toggleEntry()}}},data:{expanding:!0},lifetimes:{detached:function(){clearTimeout(this.expandEntryTimeout)}},methods:{toggleEntry:function(){var e=this;this.data.expanding&&this.setData({expanding:!1}),clearTimeout(this.expandEntryTimeout),this.expandEntryTimeout=setTimeout((function(){e.setData({expanding:!0})}),2e3)},clickEntry:function(){var e=this.data,t=e.expanding,r=e.orderType,i=e.fixedType;if(this.report({26:"8",27:"8013",39:t?"1":"0",40:r}),t){var n="showTab=".concat(r,"&fixedTab=").concat(i,"&from=myOrders_").concat(r);wx.navigateTo({url:"/modules/me/pages/orders/orders?".concat(n)})}else this.setData({expanding:!0})},report:function(e){var i;r||(r=null===(i=t())||void 0===i?void 0:i.report),r&&r(e)}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.js'});require("miniprogram_npm/@tmsfe/tms-ui/my-orders/my-orders.js");