$gwx_XC_118=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_118 || [];
function gz$gwx_XC_118_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_118_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_118_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_118_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'showLoginBtn']])
Z([3,'loginInit'])
Z([[7],[3,'showPhoneBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_118_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_118_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_118=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_118=true;
var x=['./pages/health_center_login/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_118_1()
var xI4=_n('view')
_rz(z,xI4,'class',0,e,s,gg)
var oJ4=_v()
_(xI4,oJ4)
if(_oz(z,1,e,s,gg)){oJ4.wxVkey=1
var cL4=_n('cy-userinfo')
_rz(z,cL4,'bindloginevent',2,e,s,gg)
_(oJ4,cL4)
}
var fK4=_v()
_(xI4,fK4)
if(_oz(z,3,e,s,gg)){fK4.wxVkey=1
}
oJ4.wxXCkey=1
oJ4.wxXCkey=3
fK4.wxXCkey=1
_(r,xI4)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_118";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_118();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_center_login/index.wxml'] = [$gwx_XC_118, './pages/health_center_login/index.wxml'];else __wxAppCode__['pages/health_center_login/index.wxml'] = $gwx_XC_118( './pages/health_center_login/index.wxml' );
	;__wxRoute = "pages/health_center_login/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_center_login/index.js";define("pages/health_center_login/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),n=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),o=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,a=n.baseUrl+"/cooperation/wap/wx_mini_bind_phone/",t=n.baseUrl+"/cooperation/wap/my_center/",i=n.baseUrl+"/api/crm/user/inquiry/code/exchange/detail/";Page({data:{isLogin:!1,bind_phone:"",showPhoneBtn:!1,showLoginBtn:!1},onLoad:function(e){},onShow:function(){var n=this;e.globalData.appIsLogin.then((function(){n.setData({isLogin:!0,showLoginBtn:!1}),wx.showLoading(),wx.request({url:t,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},success:function(e){var o=e.data.bind_phone;n.setData({phone:o||""}),o?(n.setData({showPhoneBtn:!1}),n.navPage()):n.setData({showPhoneBtn:!0}),wx.hideLoading()}})}),(function(){n.setData({isLogin:!1,showLoginBtn:!0})}))},loginInit:function(){var n=this;wx.request({url:t,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},success:function(e){var o=e.data.bind_phone;n.setData({phone:o||""}),o?(n.setData({showPhoneBtn:!1,showLoginBtn:!1}),n.navPage()):n.setData({showPhoneBtn:!0,showLoginBtn:!1})}})},getPhoneNumber:function(n){var t=this;if("getPhoneNumber:ok"===n.detail.errMsg){var i={iv:n.detail.iv,encryptedData:n.detail.encryptedData,app:"weixin_mini"};wx.request({url:a,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},method:"POST",data:o(i),success:function(n){if(0==n.data.error_code){var o=n.data.result.sessionid||"",a="sessionid =".concat(o);wx.setStorageSync("sessionid",a),e.globalData.sessionid=a,wx.showLoading({title:"加载中"}),setTimeout((function(){wx.hideLoading(),t.navPage()}),1e3)}else wx.showToast({icon:"none",title:n.data.error_msg||"绑定手机失败，请稍后重试",duration:2e3})},fail:function(e){wx.showToast({icon:"none",title:e.data.error_msg||"绑定手机失败，请稍后重试",duration:2e3})}})}},navPage:function(){wx.request({url:i,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},method:"GET",success:function(e){1==e.data.error_code?wx.redirectTo({url:"/pages/health_center_active/index"}):wx.redirectTo({url:"/pages/health_center/index"})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/health_center_login/index.js'});require("pages/health_center_login/index.js");