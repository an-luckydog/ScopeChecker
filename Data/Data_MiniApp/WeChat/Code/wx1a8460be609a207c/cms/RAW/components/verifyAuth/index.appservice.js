$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];
function gz$gwx_XC_14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowAuth']])
Z([3,'true'])
Z([3,'vfhidx_1'])
Z([3,'position: relative;'])
Z([[7],[3,'isIPhoneX']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./cms/RAW/components/verifyAuth/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
var tYC=_v()
_(r,tYC)
if(_oz(z,0,e,s,gg)){tYC.wxVkey=1
var eZC=_mz(z,'view',['catchtouchmove',1,'id',1,'style',2],[],e,s,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,4,e,s,gg)){b1C.wxVkey=1
}
b1C.wxXCkey=1
_(tYC,eZC)
}
tYC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_14";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/components/verifyAuth/index.wxml'] = [$gwx_XC_14, './cms/RAW/components/verifyAuth/index.wxml'];else __wxAppCode__['cms/RAW/components/verifyAuth/index.wxml'] = $gwx_XC_14( './cms/RAW/components/verifyAuth/index.wxml' );
	;__wxRoute = "cms/RAW/components/verifyAuth/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/components/verifyAuth/index.js";define("cms/RAW/components/verifyAuth/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a;require("../../titan.bootstrap.js");var t=global.bc("platform","cms"),e=require("../../titan-scoped-env.js"),s=require("../../utils/warning"),i=require("../../utils/ext"),r=null===(a=e.requirePlatform("titan-media").main)||void 0===a?void 0:a.TitanMedia,n="https://cdn2.weimob.com/static/saas-fe-zhan-xapp-stc/images/4.49.0/default_photo.png",o=null,u=e.requirePlatform("cms_sdk").main.SDK;e.Component({properties:{},data:{isShowAuth:!1,nickName:"",avatarUrl:n,isIPhoneX:-1!=e.wx.getSystemInfoSync().model.search(/iPhone X|iPhone11|iPhone12/i),focus:!1},ready:function(){o=new r({preUploadUrl:"".concat((0,i.getExtHost)(),"/api3/merchant/backstage/service/upload/preUpload"),confirmUploadUrl:"".concat((0,i.getExtHost)(),"/api3/merchant/backstage/service/upload/confirmUpload")})},methods:{start:function(a,t){e.wx.hound.debug({url:"/cms/verifyAuth/saveuserinfo",data:{status:"start in verifyAuth component"}}),this.successCb=a,this.failCb=t,this.setData({isShowAuth:!0})},onChooseAvatar:function(a){var t=a.detail.avatarUrl;this.setData({avatarUrl:t})},handleTouchInput:function(){var a=this;e.wx.requirePrivacyAuthorize?e.wx.requirePrivacyAuthorize({success:function(t){a.setData({focus:!0})},fail:function(a){}}):this.setData({focus:!0})},bindNickNameInput:function(a){var t=a.detail.value;this.setData({nickName:t})},saveUserInfo:function(){e.wx.hound.debug({url:"/cms/verifyAuth/saveuserinfo",data:{status:"step1"}});var a=this.data,t=a.nickName,i=a.avatarUrl;if(t&&i){var r,c=this,l=this.data.avatarUrl;if(n==this.data.avatarUrl)this.setData({isShowAuth:!1}),e.wx.hound.debug({url:"/cms/verifyAuth/saveuserinfo",data:{status:"step2"}}),null===(r=this.successCb)||void 0===r||r.call(this,{userInfo:{nickName:t,avatarUrl:i}});else o.uploadImage({filePath:l}).then((function(a){var s;e.wx.hound.debug({url:"/cms/verifyAuth/saveuserinfo",data:{status:"step3"}}),c.setData({isShowAuth:!1}),null===(s=c.successCb)||void 0===s||s.call(c,{userInfo:{nickName:t,avatarUrl:a}})})).catch((function(a){var e;u.toast("头像上传失败"),null===(e=c.successCb)||void 0===e||e.call(c,{userInfo:{nickName:t,avatarUrl:n}}),(0,s.warningFn)("AVATARURL_ERROR",a,"saveUserInfo function")}))}},onClose:function(){this.setData({isShowAuth:!1}),this.failCb&&this.failCb()}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'cms/RAW/components/verifyAuth/index.js'});require("cms/RAW/components/verifyAuth/index.js");