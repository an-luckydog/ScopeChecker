$gwx_XC_36=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];
function gz$gwx_XC_36_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_36=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_36=true;
var x=['./components/new_user_welfare_bar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_36";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/new_user_welfare_bar/index.wxml'] = [$gwx_XC_36, './components/new_user_welfare_bar/index.wxml'];else __wxAppCode__['components/new_user_welfare_bar/index.wxml'] = $gwx_XC_36( './components/new_user_welfare_bar/index.wxml' );
	;__wxRoute = "components/new_user_welfare_bar/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/new_user_welfare_bar/index.js";define("components/new_user_welfare_bar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")),t=require("../../@babel/runtime/helpers/asyncToGenerator"),r=require("../../FE1120A4829A079C987748A30A3D7B70.js"),a=r.subscribeBtnShow,s=r.changeIsSubscribeConsultMessageValue,i=r.saveSubscribeMessage,o=r.subscribeMessage,n=r.jumpToTargetPage,u=["4ztYTNvm4EoxrjJDNY5z395PKDiNoB9zQGRHUrUKIr4"],l=getApp();Component({properties:{adDetail:{type:Object,default:{}},from:{type:String,default:""},pageReadableName:{type:String,default:""},bottomGroupHeight:{type:Number,default:0}},observers:{adDetail:function(e){e.image&&(console.log("bottomGroupHeight",this.data.bottomGroupHeight),a(u,s))}},methods:{clickToJump:function(){var r=this;return t(e.default.mark((function t(){var a,s,c,b,p,g;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.data,s=a.adDetail,c=void 0===s?{}:s,b=a.pageReadableName,p=(null==c?void 0:c.cy_redirect)||{},l.sensors.track("AppClick",{page_readable_name:b,app:"weixin_mini",click_position:"新用户礼包引导条"}),!l.globalData.isSubscribeConsultMessage){e.next=7;break}n(p),e.next=19;break;case 7:return e.prev=7,e.next=10,o(u);case 10:g=e.sent,i(u,g),n(p),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),n(p),console.log("error",e.t0);case 19:case"end":return e.stop()}}),t,null,[[7,15]])})))()}}});
},{isPage:false,isComponent:true,currentFile:'components/new_user_welfare_bar/index.js'});require("components/new_user_welfare_bar/index.js");