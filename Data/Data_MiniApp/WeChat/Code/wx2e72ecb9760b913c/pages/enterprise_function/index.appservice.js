$gwx_XC_80=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_80 || [];
function gz$gwx_XC_80_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_80_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_80_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_80_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_80_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_80_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_80=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_80=true;
var x=['./pages/enterprise_function/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_80_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_80";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_80();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/enterprise_function/index.wxml'] = [$gwx_XC_80, './pages/enterprise_function/index.wxml'];else __wxAppCode__['pages/enterprise_function/index.wxml'] = $gwx_XC_80( './pages/enterprise_function/index.wxml' );
	;__wxRoute = "pages/enterprise_function/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/enterprise_function/index.js";define("pages/enterprise_function/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Page({data:{token:"",expires_in:"",filterType:0},onLoad:function(e){var o=this;wx.getSystemInfo({success:function(e){console.log(e.environment),"wxwork"==e.environment&&o.getQyCode()}})},getQyCode:function(){var e=this;return new Promise((function(o,t){var n=e;wx.qy.login({success:function(e){console.log(e),e.code?(n.setData({code:e.code}),wx.showToast({title:e.errMsg,icon:"none",duration:1500}),n.getToken().then((function(e){n.getSessionKey(e.access_token,n.data.code).then((function(){o()})).catch((function(e){t()}))}))):(t(),wx.showToast({title:"获取code失败！",icon:"none",duration:1500}))}})}))},getToken:function(){var o=this;return new Promise((function(t,n){wx.request({url:"https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ww5cba1baed377f596&corpsecret=mdWjZFSjLVCsoCazpgkc7g1g_Iip3LBGNSvGVM9ya1Q",header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},method:"GET",success:function(e){console.log("响应的token:",e,e.data),0===e.data.errcode?(o.setData({token:e.data.access_token,expires_in:e.data.expires_in}),t(e.data)):(wx.showToast({title:e.data.errmsg||"token请求错误！",icon:"none",duration:1500}),n(err))},fail:function(e){wx.showToast({title:"token请求错误！",icon:"none",duration:1500}),n(e)}})}))},getSessionKey:function(o,t){return new Promise((function(n,s){wx.request({url:"https://qyapi.weixin.qq.com/cgi-bin/miniprogram/jscode2session?access_token=".concat(o,"&js_code=").concat(t,"&grant_type=authorization_code"),method:"GET",header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},success:function(e){console.log(e.data),0===e.data.errcode?(wx.setStorageSync("qySessionid",e.data.session_key),n(),console.log("哈哈 ，最终获取到了qySessionid："+e.data.session_key)):(s(),wx.showToast({title:e.data.errmsg||"SessionKey请求错误！",icon:"none",duration:1500}))},fail:function(){s(),wx.showToast({title:"SessionKey请求错误！",icon:"none",duration:1500})}})}))},jumpQy:function(){var e=this;e.checkSession().then((function(){e.sendUrl()}))},checkSession:function(){return new Promise((function(e){wx.qy.checkSession({success:function(){e()},fail:function(){that.getQyCode().then((function(){e()}))}})}))},sendUrl:function(){var e=this;console.log(wx.qy),wx.qy.getContext({success:function(o){var t=o.entry;console.log("当前的入口是："+t),"single_chat_tools"===t||"group_chat_tools"===t?(wx.showToast({title:"向微信群发送中！ヾ(◍°∇°◍)ﾉﾞ",duration:2e3}),e.sendChatType()):wx.showToast({title:"不是通过聊天会话进入！",duration:2e3})},fail:function(e){console.log("错误："+e)},complete:function(e){console.log("检测："+e)}})},sendChatType:function(){wx.qy.sendChatMessage({msgtype:"news",text:{content:"发送处方到企业群"},image:{mediaid:""},video:{mediaid:""},file:{mediaid:""},news:{link:"https://www.chunyuyisheng.com/",title:"春雨医生在线问诊",desc:"春雨医生提供真实医生的在线医疗健康咨询服务。由公立医院医师解答用户的健康问题。移动客户端产品春雨掌上医生是一款“自查+咨询”的健康服务类手机客户端；您可通过春雨医生、春雨掌上医生，查询自己或他人有可能罹患的疾病，向医生提问，同时您将得到及时解答。",imgUrl:"https://resource.chunyu.mobi/@/media/images/2020/10/29/1696/baf0b1b65e7d_w720_h288_.png"},success:function(e){"qy.sendChatMessage:ok"==e.err_msg&&wx.showToast({title:"已发送",duration:2e3})},fail:function(e){console.log("发送失败"+e)},complete:function(e){console.log("检测发送："+e)}})},selectExternalContact:function(){var e=this;this.checkSession().then((function(){wx.qy.selectExternalContact({filterType:e.data.filterType,success:function(e){var o=e.userIds;console.log("成功获取多个id",e,o)},fail:function(e){console.log("选择多个错误",e)},complete:function(e){console.log("选择多个：",e)}})}))},getCurExternalContact:function(){console.log(wx.qy),this.checkSession().then((function(){wx.qy.getContext({success:function(e){var o=e.entry;console.log("当前的入口是："+o),"contact_profile"===o||"single_chat_tools"===o||"chat_attachment"===o?wx.qy.getCurExternalContact({success:function(e){var o=e.userId;console.log("获取外部联系人userid成功",e,o)},fail:function(e){console.log("获取外部联系人userid失败",e)},complete:function(e){console.log("获取联系人",e)}}):wx.showToast({title:"不是聊天工具栏进入小程序！",duration:2e3})},fail:function(e){console.log("检测入口错误：",e)},complete:function(e){console.log("检测入口：",e)}})}))},cut:function(){this.data.filterType?this.setData({filterType:0}):this.setData({filterType:1}),wx.showToast({title:"获取模式"+this.data.filterType,icon:"none",duration:1500})}});
},{isPage:true,isComponent:true,currentFile:'pages/enterprise_function/index.js'});require("pages/enterprise_function/index.js");