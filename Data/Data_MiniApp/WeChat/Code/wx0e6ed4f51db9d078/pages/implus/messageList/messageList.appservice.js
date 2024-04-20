$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];
function gz$gwx_XC_19_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_19=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_19=true;
var x=['./pages/implus/messageList/messageList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_19_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_19";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/implus/messageList/messageList.wxml'] = [$gwx_XC_19, './pages/implus/messageList/messageList.wxml'];else __wxAppCode__['pages/implus/messageList/messageList.wxml'] = $gwx_XC_19( './pages/implus/messageList/messageList.wxml' );
	;__wxRoute = "pages/implus/messageList/messageList";__wxRouteBegin = true;__wxAppCurrentFile__="pages/implus/messageList/messageList.js";define("pages/implus/messageList/messageList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../cwx/cwx");(0,t.CPage)({pageId:"10650065336",data:{canWebView:t.cwx.canIUse("web-view"),isLogin:t.cwx.user.isLogin(),url:"",wsg:"",isNavigate:!0,loginErrorUrl:"",jumpData:null,isSubscribed:!1},getMessageListUrl:function(){wx.j("31M");var a="https://m.ctrip.com";return"fat"==t.__global.env.toLowerCase()?a="https://servicechat.fat3196.qa.nt.ctripcorp.com":"uat"==t.__global.env.toLowerCase()&&(a="https://servicechat.uat.qa.nt.ctripcorp.com"),"".concat(a,"/webapp/servicechatv3/messagelist?source=wechatmini_app&platform=wechat&flag=").concat((new Date).getTime())},onLoad:function(a){var i=this;t.cwx.user.checkLoginStatusFromServer((function(t){wx.j("ppG"),i.setData({isLogin:t}),t?i.asyncLogin():i.setData({isLogin:!1})}))},onReady:function(){},onShow:function(){var a=this;console.log("onShow: "),t.cwx.user.checkLoginStatusFromServer((function(t){wx.j("JIY"),console.log("isLogin: ",t),t!==a.data.isLogin&&(t&&!a.data.isLogin?a.asyncLogin():a.setData({isLogin:!1}))}))},onHide:function(){},onUnload:function(){},asyncLogin:function(){var a=this;wx.j("XBW"),t.cwx.syncLogin.load({url:this.getMessageListUrl(),loginErrorUrl:"",success:function(i){wx.j("4ru"),a.setData({url:i,isLogin:!0}),a.ubtDevTrace&&a.ubtDevTrace("o_implus_messageList_onLoad",{action:"page_onload",user:JSON.stringify(t.cwx.user)})},fail:function(t){wx.j("P2X"),a.setData({isLogin:!1})}})},login:function(){wx.j("Rjx"),t.cwx.user.login({param:{},callback:function(t){wx.j("pI2"),t&&"0"===t.ReturnCode?this.asyncLogin():this.setData({isLogin:!1})}})},showUrlError:function(){wx.j("CTc"),this.setData({url:"",wsg:"目标地址出了点问题，请重新打开该页面"})},onPageLoadDone:function(){wx.j("ffg"),t.cwx.hideLoading(),this.ubtDevTrace&&this.ubtDevTrace("o_implus_messageList_loadDone",{action:"messageList_loadDone",url:this.data.url})},onPageLoadError:function(){wx.j("7mH"),this.showUrlError(),this.ubtDevTrace&&this.ubtDevTrace("o_implus_messageList_loadError",{action:"messageList_loadError",url:this.data.url})},onShareAppMessage:function(){return{title:"携程消息，放心服务",path:"pages/implus/messageList/messageList",imageUrl:"https://dimg04.c-ctrip.com/images/05O1712000at0payzDCAB.png"}}});
},{isPage:true,isComponent:true,currentFile:'pages/implus/messageList/messageList.js'});require("pages/implus/messageList/messageList.js");