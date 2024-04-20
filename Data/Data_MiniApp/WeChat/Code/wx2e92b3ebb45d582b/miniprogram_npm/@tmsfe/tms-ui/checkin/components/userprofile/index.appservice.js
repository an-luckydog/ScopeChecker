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
var x=['./miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.wxml'] = [$gwx_XC_22, './miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.wxml'] = $gwx_XC_22( './miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.js";define("miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=a(require("../../../../../../@babel/runtime/regenerator")),t=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),r=require("../../common/User"),n=a(require("../../common/Checkin")),o=a(require("./Entity"));function a(e){return e&&e.__esModule?e:{default:e}}Component({properties:{openType:{type:String,value:"phone"},disable:{type:Boolean,value:!1}},data:{hasUserInfo:!1,canIUseGetUserProfile:!1,userInfo:{},mobile:""},observers:{},lifetimes:{attached:function(){var e=this,t={};wx.getUserProfile&&(t.canIUseGetUserProfile=!0),(0,r.getUserProfile)().then((function(r){var n=r.nickname,o=r.headImgUrl;t.userInfo={nickName:n,avatarUrl:o},t.hasUserInfo=n&&o,e.doNext(t)}))}},methods:{onGetUserInfo:function(e){this.doUpdateUserProfile(e.detail.userInfo)},getUserProfile:function(){var e=this;this.data.canIUseGetUserProfile&&(this.data.hasUserInfo?this.doNext():wx.getUserProfile({desc:"用于公布抽奖结果",success:function(t){e.doUpdateUserProfile(t.userInfo)}}))},doUpdateUserProfile:function(e){var t=this;(0,r.updateUserProfile)(e).then((function(){var r={};r.userInfo=e,r.hasUserInfo=!0,t.doNext(r)}))},doNext:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;"phone"===this.data.openType&&this.data.mobile&&(t.openType="recive"),this.setData(t)},onGetPhoneNumber:function(r){var a=this;return t(e.default.mark((function t(){var i,s,u,f;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.detail,s=i.encryptedData,u=i.iv,s){e.next=4;break}return n.default.showToast("需要您授权手机号才能参与抽奖","none"),e.abrupt("return");case 4:return e.prev=4,n.default.showLoading(),e.next=8,o.default.registMobile(s,u);case 8:f=e.sent,a.setData({mobile:f},(function(){a.onRecive()})),n.default.hideLoading(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),n.default.hideLoading(),n.default.showToast(e.t0,"none");case 17:case"end":return e.stop()}}),t,null,[[4,13]])})))()},onRecive:function(){var e=this.data,t=e.openType,r=e.mobile,n=e.userInfo;("phone"!==t||r)&&this.triggerEvent("recive",{userInfo:n,mobile:r})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.js'});require("miniprogram_npm/@tmsfe/tms-ui/checkin/components/userprofile/index.js");