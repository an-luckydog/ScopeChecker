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
Z([[7],[3,'isOpenSalas']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/card/no-card-tip/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var c8=_v()
_(r,c8)
if(_oz(z,0,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/card/no-card-tip/index.wxml'] = [$gwx_XC_3, './components/card/no-card-tip/index.wxml'];else __wxAppCode__['components/card/no-card-tip/index.wxml'] = $gwx_XC_3( './components/card/no-card-tip/index.wxml' );
	;__wxRoute = "components/card/no-card-tip/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/card/no-card-tip/index.js";define("components/card/no-card-tip/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../../utils/storage"),r=getApp();Component({properties:{},data:{isOpenSalas:!1,jumpUrl:""},lifetimes:{attached:function(){this.init()}},pageLifetimes:{show:function(){this.init()}},methods:{checkIsStaff:function(){return wx.getStorageSync("isStaff")},init:function(){var a=this;return t(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.checkIsStaff()){e.next=6;break}return e.next=4,a.checkIsOpenDialog();case 4:r=e.sent,a.setData({isOpenSalas:r});case 6:case"end":return e.stop()}}),t)})))()},checkStaffOpenSalas:function(){var e=this;return new Promise((function(t){r.API.getTencetStaffInfo().then((function(r){if(0===r.code)return a.expiresStorage.set("staff_salas_status",1),t(!1);try{var n=r.data.url;e.setData({jumpUrl:"/"+n})}catch(t){e.setData({jumpUrl:"/jiatui/pages/cardInfo/index"})}t(!0)}))}))},handlerOpenLater:function(){var e=r.tool.getTimeOffsetNextDay();a.expiresStorage.set("staff_salas_status",0,e),this.setData({isOpenSalas:!1})},checkIsOpenDialog:function(){var r=this;return t(e().mark((function t(){var n,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=a.expiresStorage.get("staff_salas_status"))||0==+n){e.next=6;break}return e.next=4,r.checkStaffOpenSalas();case 4:return s=e.sent,e.abrupt("return",s);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),t)})))()}}});
},{isPage:false,isComponent:true,currentFile:'components/card/no-card-tip/index.js'});require("components/card/no-card-tip/index.js");