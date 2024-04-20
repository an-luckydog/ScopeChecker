$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goToManagement'])
Z([3,'goToProfile'])
Z([3,'form'])
Z([[7],[3,'badge']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/BottomNavigation/BottomNavigation.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var aL=_mz(z,'form',['reportSubmit',-1,'bindlongpress',0,'bindsubmit',1,'class',1],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,3,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
_(r,aL)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/BottomNavigation/BottomNavigation.wxml'] = [$gwx_XC_3, './components/BottomNavigation/BottomNavigation.wxml'];else __wxAppCode__['components/BottomNavigation/BottomNavigation.wxml'] = $gwx_XC_3( './components/BottomNavigation/BottomNavigation.wxml' );
	;__wxRoute = "components/BottomNavigation/BottomNavigation";__wxRouteBegin = true;__wxAppCurrentFile__="components/BottomNavigation/BottomNavigation.js";define("components/BottomNavigation/BottomNavigation.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=u(require("@utils/analyse")),r=u(require("@utils/event")),o=require("@mina-modules/system-info"),i=require("@utils/env"),n=require("@utils/wechatAPI"),s=require("@utils/tools");function u(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.getSysInfo)();function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{switchTab:!1};f()&&(0,s.loginAndRedirectTo)(e),t.switchTab?(0,n.switchTab)(e):(0,n.navigateTo)(e)}function f(){return(0,i.isWxWork)()&&"ios"===l.platform&&!(0,s.getToken)()}Component({properties:{index:{type:Number,value:-1},badge:{type:Boolean,value:!1},weCom:Boolean},data:{isGray:!1},lifetimes:{created:function(){var a=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a._onSetGray=function(e){a.setData({isGray:e})},r.default.on("app:theme_set_gray",a._onSetGray),wx.hideTabBar({});case 3:case"end":return e.stop()}}),t)})))()},detached:function(){r.default.off("app:theme_set_gray",this._onSetGray)}},methods:{goToCreate:function(){this.data.weCom&&(0,a.default)("wecom_intro_create"),c("/pages/new/create/create")},goToHome:function(){0!==this.properties.index&&(this.data.weCom&&(0,a.default)("wecom_intro_index"),c("/pages/index",{switchTab:!0}))},goToProfile:function(){1!==this.properties.index&&(this.data.weCom&&(0,a.default)("wecom_intro_profile"),c("/pages/profile/profile",{switchTab:!0}))},goToManagement:function(){var e;(null===(e=getApp().globalData.userProfile)||void 0===e?void 0:e.is_manager)&&wx.navigateTo({url:"/pages/lotterymanage/pages/homeManagement/homeManagement"})}}});
},{isPage:false,isComponent:true,currentFile:'components/BottomNavigation/BottomNavigation.js'});require("components/BottomNavigation/BottomNavigation.js");