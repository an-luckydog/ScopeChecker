$gwx_XC_56=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_56 || [];
function gz$gwx_XC_56_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'z-index:10000;background-color:rgba(0, 0, 0, 0.5);--opacity:1;'])
Z([3,'z-index:10001;border-top-left-radius:12px;border-top-right-radius:12px;'])
Z([[7],[3,'isShowDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_56=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_56=true;
var x=['./components/PrivacyPopup/PrivacyPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_56_1()
var c5G=_mz(z,'activity-views',['coverStyle',0,'customStyle',1,'visible',1],[],e,s,gg)
_(r,c5G)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_56";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_56();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PrivacyPopup/PrivacyPopup.wxml'] = [$gwx_XC_56, './components/PrivacyPopup/PrivacyPopup.wxml'];else __wxAppCode__['components/PrivacyPopup/PrivacyPopup.wxml'] = $gwx_XC_56( './components/PrivacyPopup/PrivacyPopup.wxml' );
	;__wxRoute = "components/PrivacyPopup/PrivacyPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/PrivacyPopup/PrivacyPopup.js";define("components/PrivacyPopup/PrivacyPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var i,t=(i=require("@utils/analyse"))&&i.__esModule?i:{default:i};Component({data:{title:"用户隐私保护提示",desc1:"感谢你使用本小程序，你使用本小程序前应当阅读并同意",urlTitle:"《用户隐私保护指引》",desc2:"当你点击同意并开始使用产品服务时，即表示你已理解并同意该条款内容，该条款将对你产生法律约束力。如你拒绝，将无法正常使用小程序。",isShowDialog:!1},lifetimes:{attached:function(){var i,t,a=this;null===(i=(t=wx).onNeedPrivacyAuthorization)||void 0===i||i.call(t,(function(i){a.resolvePrivacyAuthorization=i,a.show()}))}},pageLifetimes:{show:function(){var i,t,a=this;null===(i=(t=wx).onNeedPrivacyAuthorization)||void 0===i||i.call(t,(function(i){a.resolvePrivacyAuthorization=i,a.show()}))}},methods:{hide:function(){this.setData({isShowDialog:!1})},show:function(){(0,t.default)("dialog_privacycontract"),this.setData({isShowDialog:!0})},openPrivacyContract:function(){var i,t;null===(i=(t=wx).openPrivacyContract)||void 0===i||i.call(t,{})},handleAgree:function(i){var a;(0,t.default)("dialog_privacycontract_agree");var e=i.currentTarget.id;null===(a=this.resolvePrivacyAuthorization)||void 0===a||a.call(this,{buttonId:e,event:"agree"}),this.hide()},handleDisagree:function(){var i;(0,t.default)("dialog_privacycontract_refuse"),null===(i=this.resolvePrivacyAuthorization)||void 0===i||i.call(this,{event:"disagree"}),this.hide()}}});
},{isPage:false,isComponent:true,currentFile:'components/PrivacyPopup/PrivacyPopup.js'});require("components/PrivacyPopup/PrivacyPopup.js");