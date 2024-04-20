$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/card/card-top-msg/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var o6=_n('Privacy')
_(r,o6)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/card/card-top-msg/index.wxml'] = [$gwx_XC_2, './components/card/card-top-msg/index.wxml'];else __wxAppCode__['components/card/card-top-msg/index.wxml'] = $gwx_XC_2( './components/card/card-top-msg/index.wxml' );
	;__wxRoute = "components/card/card-top-msg/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/card/card-top-msg/index.js";define("components/card/card-top-msg/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{isShareMyCard:{type:Boolean,value:!0,observer:function(){this.init()}},activeInfo:{type:Object,value:{employeePosition:!1,wechatId:!1,wechatworkId:!1,employeePhone:!1},observer:function(){this.init()}}},data:{shareStaffId:"",premiseInfo:{},shareStaffInfo:{},topHeight:0,defaultAvatar:"https://mkttencent-1256915710.file.myqcloud.com/saas/2022/06/23/f5abac49b0f4af4a6c6e76872be57c70.png",hiddenWxDialog:!0,shareCardId:"",shareActiveInfo:{}},lifetimes:{attached:function(){var e=this;t.checkAppInit((function(){var a=t.globalData,o=a.statusBarHeight,n=a.navbarHeight;e.setData({topHeight:n+o,navbarHeight:n,statusBarHeight:o})})),this.init()}},methods:{init:function(){var t=this.data,e=t.activeInfo,a=t.isShareMyCard,o=wx.getStorageSync("salesShareCardId"),n=wx.getStorageSync("salesShareCardParams"),i=wx.getStorageSync("salesShareCardInfo"),s=wx.getStorageSync("staffInfo");wx.getStorageSync("staff_card_id")&&a?this.setData({premiseInfo:e,shareStaffInfo:s}):o&&n?this.setData({premiseInfo:n,shareStaffInfo:i}):this.setData({premiseInfo:e,shareStaffInfo:s})},handlerCallPhone:function(){var t=this.data.shareStaffInfo.employeePhone;/^1[0-9]{10}/.test(t)?wx.makePhoneCall({phoneNumber:t}):wx.showToast({title:"号码异常",icon:"none",duration:2e3}),this.triggerEvent("track",{type:"callPhone",data:{phone:t}})},handlerWxOrWork:function(t){console.log("🚀 ~ file: index.js ~ line 89 ~ handlerWxOrWork ~ e",t);var e=t.currentTarget.dataset.type,a=this.data.shareStaffInfo,o=a.wechatId,n=a.wechatworkQrImg,i=a.wechatworkId;if("wx"===e)return this.triggerEvent("track",{type:"copyWechat",data:{}}),wx.setClipboardData({data:o,success:function(){wx.showToast({title:"复制成功!",icon:"success",duration:500})}});if("wxwrok"===e){if(this.triggerEvent("track",{type:"copyWechatWork",data:{}}),i)return wx.setClipboardData({data:i,success:function(){wx.showToast({title:"复制成功!",icon:"success",duration:500})}});n&&this.setData({contactType:"企业微信",qrImg:n,hiddenWxDialog:!1})}},handleClose:function(){console.log("🚀 ~ file: index.js ~ line 102 ~ handleClose ~ handleClose"),this.setData({hiddenWxDialog:!0})},gotojiatuiCard:function(){this.triggerEvent("gotojiatuiCard")}}});
},{isPage:false,isComponent:true,currentFile:'components/card/card-top-msg/index.js'});require("components/card/card-top-msg/index.js");