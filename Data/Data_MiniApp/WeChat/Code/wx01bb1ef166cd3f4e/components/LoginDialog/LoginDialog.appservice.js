$gwx_XC_43=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_43 || [];
function gz$gwx_XC_43_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_43_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_43_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_43_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'closeHandle'])
Z([[7],[3,'showDialog']])
Z([3,'formSubmit'])
Z([[2,'==='],[[7],[3,'from']],[1,'login']])
Z([[7],[3,'usePopup']])
Z([3,'handleLogin'])
Z([3,'handleLoginError'])
Z(z[0])
Z([[7],[3,'showLoginPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_43_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_43_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_43=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_43=true;
var x=['./components/LoginDialog/LoginDialog.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_43_1()
var bCF=_mz(z,'CommonBottomDialog',['leftCloseOnly',-1,'bindclose',0,'show',1],[],e,s,gg)
var oDF=_n('form')
_rz(z,oDF,'bindsubmit',2,e,s,gg)
var xEF=_v()
_(oDF,xEF)
if(_oz(z,3,e,s,gg)){xEF.wxVkey=1
}
xEF.wxXCkey=1
_(bCF,oDF)
_(r,bCF)
var eBF=_v()
_(r,eBF)
if(_oz(z,4,e,s,gg)){eBF.wxVkey=1
var oFF=_mz(z,'LoginPopup',['bindonconfirm',5,'bindonerror',1,'bindonhide',2,'toggle',3],[],e,s,gg)
_(eBF,oFF)
}
eBF.wxXCkey=1
eBF.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_43";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_43();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/LoginDialog/LoginDialog.wxml'] = [$gwx_XC_43, './components/LoginDialog/LoginDialog.wxml'];else __wxAppCode__['components/LoginDialog/LoginDialog.wxml'] = $gwx_XC_43( './components/LoginDialog/LoginDialog.wxml' );
	;__wxRoute = "components/LoginDialog/LoginDialog";__wxRouteBegin = true;__wxAppCurrentFile__="components/LoginDialog/LoginDialog.js";define("components/LoginDialog/LoginDialog.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),r=require("@/constant"),a=require("@services/chou"),n=require("@utils/user"),o=g(require("@utils/analyse")),i=require("@utils/upload"),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(require("@utils/tools")),u=s,c=require("@mina-modules/mina-sentry"),l=g(require("@behavior/dialog")),p=g(require("lodash")),d=require("@utils/agreement");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function g(e){return e&&e.__esModule?e:{default:e}}function h(e){wx.requirePrivacyAuthorize?wx.requirePrivacyAuthorize({success:function(){e()}}):e()}Component({behaviors:[l.default],properties:{toggle:{type:Boolean,value:!1},from:{type:String,value:"login"}},data:{avatarUrl:"",nickName:"",DEFAULT_AVATAR:r.DEFAULT_AVATAR,usePopup:!1,showLoginPopup:!1,showDialog:!1},observers:{toggle:function(e){this.toggleHandle(e)}},pageLifetimes:{show:function(){if(getApp().globalData.cropImage&&this.data.showDialog){var e=getApp().globalData.cropImage;this.setData({avatarUrl:e}),this.needUploadImg=!0,getApp().globalData.cropImage=""}}},lifetimes:{attached:function(){this.needUploadImg=!1,u.canUseUserProfile()&&this.setData({usePopup:!0})},detached:function(){this.needUploadImg=!1}},methods:{show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._confirm=e.confirm,(0,o.default)("dialog_detail_auth_show"),this.isDetail=!0,this.toggleHandle(!0)},hide:function(){this.toggleHandle(!1)},closeHandle:function(){this.isDetail&&(0,o.default)("dialog_detail_auth_decline"),this.toggleHandle(!1),this.triggerEvent("onhide")},Login:function(r){var i=this;return t(e().mark((function t(){var s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.isDetail?(0,o.default)("dialog_detail_auth_accept",{label:1}):(0,o.default)("dialog_main_profile_accept",{label:1}),e.prev=1,e.next=4,(0,n.updateWechatInfo)({userInfo:r});case 4:if("login"!==i.data.from){e.next=7;break}return e.next=7,(0,a.updateUserAgreements)();case 7:(0,n.updateWxWork)(),wx.hideLoading(),null===(s=i._confirm)||void 0===s||s.call(i),i.triggerEvent("onconfirm"),i.hide(),e.next=21;break;case 14:e.prev=14,e.t0=e.catch(1),i.triggerEvent("onerror"),wx.hideLoading(),wx.showToast({title:e.t0.message||"保存失败",icon:"none"}),console.log(e.t0),(0,c.error)(e.t0);case 21:case"end":return e.stop()}}),t,null,[[1,14]])})))()},checkAvatar:function(r){var a=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.default.includes(r,"lucky-cdn-resource.nocode.com")){e.next=2;break}return e.abrupt("return",r);case 2:return e.next=4,(0,n.checkAvatarIsOutdate)(r);case 4:if(!e.sent){e.next=11;break}return a.setData({from:"outdate"}),e.next=9,(0,n.updateWechatInfo)({userInfo:{avatarUrl:null}});case 9:return u.deleteDateExpireData("USER_AVATAR"),e.abrupt("return","");case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),t)})))()},handleLogin:function(){var e;null===(e=this._confirm)||void 0===e||e.call(this),this.triggerEvent("onconfirm"),this.hide()},handleLoginError:function(){this.triggerEvent("onerror")},onClickProtocol:function(){this.isDetail&&(0,o.default)("dialog_detail_auth_info"),(0,d.navigateToAgreement)("service")},toggleHandle:function(r){var a=this;return t(e().mark((function n(){return e().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a.data.usePopup){n.next=2;break}return n.abrupt("return",a.setData({showLoginPopup:r}));case 2:r?h(t(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setData({showDialog:!0}),!(r=u.get(getApp().globalData,"userInfo.avatar",""))){e.next=6;break}return e.next=5,a.checkAvatar(r);case 5:r=e.sent;case 6:a.setData({avatarUrl:r,nickName:u.get(getApp().globalData,"userInfo.nick_name","")});case 7:case"end":return e.stop()}}),t)})))):a.setData({showDialog:!1});case 3:case"end":return n.stop()}}),n)})))()},onChooseAvatar:function(r){var a=this;return t(e().mark((function t(){var n,o,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.detail.avatarUrl,o=n,e.prev=2,e.next=5,(0,s.promisify)(wx.getImageInfo)({src:n});case 5:if(132!==(i=e.sent).height||132!==i.width){e.next=9;break}return a.needUploadImg=!0,e.abrupt("return",a.setData({avatarUrl:n}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),wx.showToast({title:e.t0.errMsg||"获取头像信息失败",icon:"none",duration:3e3});case 14:if(!wx.cropImage){e.next=31;break}return e.prev=15,e.next=18,(0,s.promisify)(wx.cropImage)({src:n,cropScale:"1:1"});case 18:return n=e.sent.tempFilePath,e.next=21,(0,s.compressImage)({src:n,compressedWidth:132,compressedHeight:132,quality:80});case 21:n=e.sent.tempFilePath,a.needUploadImg=!0,a.setData({avatarUrl:n}),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(15),1!=(null===e.t1||void 0===e.t1?void 0:e.t1.errno)&&(a.useCrop(o),console.log(e.t1),(0,c.error)(e.t1));case 29:e.next=32;break;case 31:a.useCrop(o);case 32:case"end":return e.stop()}}),t,null,[[2,11],[15,26]])})))()},useCrop:function(r){return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:wx.navigateTo({url:"/pages/crop/crop?image=".concat(encodeURIComponent(r),"&aspectRatio=1&maxWidth=132")});case 1:case"end":return e.stop()}}),t)})))()},uploadImage:function(r){var a=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.uploadUserAvatar)(r);case 3:return r=e.sent,a.setData({avatarUrl:r}),e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),(0,o.default)("dialog_detail_auth_upload_image_fail",{label:e.t0.message||"上传头像失败"}),wx.showToast({title:e.t0.message||"上传头像失败",icon:"none"}),console.log(e.t0),(0,c.error)(e.t0),e.abrupt("return","");case 15:case"end":return e.stop()}}),t,null,[[0,8]])})))()},formSubmit:function(r){var a=this;return t(e().mark((function t(){var n,o,i,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=null===(n=r.detail)||void 0===n||null===(o=n.value)||void 0===o?void 0:o.nickname,s=a.data.avatarUrl,!i||!s){e.next=17;break}if(wx.showLoading({title:"保存中"}),!a.needUploadImg){e.next=9;break}return e.next=7,a.uploadImage(s);case 7:s=e.sent,a.needUploadImg=!1;case 9:if(""===s){e.next=14;break}return e.next=12,a.Login({nickName:i,avatarUrl:s});case 12:e.next=15;break;case 14:wx.hideLoading();case 15:e.next=18;break;case 17:wx.showToast({title:"请设置头像和昵称",icon:"none"});case 18:case"end":return e.stop()}}),t)})))()}}});
},{isPage:false,isComponent:true,currentFile:'components/LoginDialog/LoginDialog.js'});require("components/LoginDialog/LoginDialog.js");