$gwx_XC_154=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_154 || [];
function gz$gwx_XC_154_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_154_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_154_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_154_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[7],[3,'inLoginCheck']]],[[2,'!'],[[7],[3,'isLogin']]]])
Z([3,'onLoginSuccess'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_154_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_154_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_154=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_154=true;
var x=['./pages/inquiry_subscribe/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_154_1()
var oLDB=_v()
_(r,oLDB)
if(_oz(z,0,e,s,gg)){oLDB.wxVkey=1
var xMDB=_n('cy-authorize-login')
_rz(z,xMDB,'bindloginSuccess',1,e,s,gg)
_(oLDB,xMDB)
}
oLDB.wxXCkey=1
oLDB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_154";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_154();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquiry_subscribe/index.wxml'] = [$gwx_XC_154, './pages/inquiry_subscribe/index.wxml'];else __wxAppCode__['pages/inquiry_subscribe/index.wxml'] = $gwx_XC_154( './pages/inquiry_subscribe/index.wxml' );
	;__wxRoute = "pages/inquiry_subscribe/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/inquiry_subscribe/index.js";define("pages/inquiry_subscribe/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,n="".concat(e,"/cooperation/wap/mini_sub/save/");Page({data:{inLoginCheck:!0,isLogin:!0,next:"",templateId:""},onLoad:function(t){console.log("options",t);var e=t.next,n=void 0===e?"":e,o=t.template_id;n&&(n=decodeURIComponent(n)),this.setData({next:n,templateId:o})},onShow:function(){var e=this;t.globalData.appIsLogin.then((function(){e.onLoginSuccess()})).catch((function(t){console.log("app.globalData.appIsLogin catch::",t),e.setData({isLogin:!1,inLoginCheck:!1})}))},onLoginSuccess:function(){var t=this;this.setData({isLogin:!0,inLoginCheck:!1},(function(){wx.showModal({title:"提示",content:"为保证在问诊中医生回复后，您能正常收到消息通知，请订阅消息通知",showCancel:!1,confirmText:"我知道了",confirmColor:"#39d167",success:function(){t.subscribeEvent()}})}))},subscribeEvent:function(){var t=this,e=this.data.templateId;wx.requestSubscribeMessage({tmplIds:[e]}).then((function(n){if(t.data.isLogin){wx.showLoading({title:"订阅中",mask:!0});var o=n[e];t.reportServer(o)}else t.subCompleteEvent()})).catch((function(e){console.log("sub error:::",e),t.subCompleteEvent()}))},reportServer:function(e){var o=this,a=this.data.templateId;wx.request({url:n,data:{data:JSON.stringify([{template_id:a,choice:e}])},header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},method:"POST",complete:function(){wx.hideLoading(),o.subCompleteEvent()}})},subCompleteEvent:function(){if(console.log("subCompleteEvent",this.data.next),this.data.next)if(/\/pages\//.test(this.data.next))wx.redirectTo({url:this.data.next});else{var t=/^http(s)?:\/\//.test(this.data.next)?this.data.next:"".concat(e).concat(this.data.next);wx.redirectTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(t))})}}});
},{isPage:true,isComponent:true,currentFile:'pages/inquiry_subscribe/index.js'});require("pages/inquiry_subscribe/index.js");