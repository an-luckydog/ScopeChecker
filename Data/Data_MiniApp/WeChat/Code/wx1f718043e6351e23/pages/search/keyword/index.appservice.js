$gwx_XC_121=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_121 || [];
function gz$gwx_XC_121_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_121_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_121_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_121_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'搜索'])
Z([3,'onSearch'])
Z([[7],[3,'keyword']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_121_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_121_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_121=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_121=true;
var x=['./pages/search/keyword/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_121_1()
var cKLB=_n('header')
_rz(z,cKLB,'title',0,e,s,gg)
_(r,cKLB)
var oLLB=_mz(z,'searchForm',['bindsearch',1,'value',1],[],e,s,gg)
_(r,oLLB)
var lMLB=_n('Privacy')
_(r,lMLB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_121";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_121();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/keyword/index.wxml'] = [$gwx_XC_121, './pages/search/keyword/index.wxml'];else __wxAppCode__['pages/search/keyword/index.wxml'] = $gwx_XC_121( './pages/search/keyword/index.wxml' );
	;__wxRoute = "pages/search/keyword/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/search/keyword/index.js";define("pages/search/keyword/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Page({data:{hotList:[],oldList:[],keyword:"",shareImg:""},onLoad:function(t){var o=this;this.fromModule=t.fromModule,e.checkAppInit((function(){var t=e.globalData,n=t.statusBarHeight,a=t.navbarHeight;o.setData({topHeight:a+n})}))},onReady:function(){},onShow:function(){var t=this;e.loginCallback().then((function(o){t.getData(),e.QD.track("contentView",{menu:e.globalData.currentTab,name_of_page:"搜索页"})}))},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}},getData:function(){var t=this;e.API.keywordRecommend().then((function(e){0==e.code&&t.setData({hotList:e.content.list})})),e.API.keywordHistory().then((function(e){0==e.code&&t.setData({oldList:e.content.list})}))},clearOldList:function(){var t=this;e.API.keywordClear().then((function(e){0==e.code&&t.setData({oldList:[]})}))},chooseTag:function(e){this.setData({keyword:e.currentTarget.dataset.item.name}),this.searchLink(e.currentTarget.dataset.item.name,e.currentTarget.dataset.type)},onSearch:function(t){var o=t.detail.search;return"89757"==o&&"release"!=__wxConfig.envVersion?(wx.setStorageSync("isStaff",!0),wx.setStorageSync("staffInfo",{upgrade:1}),e.API.getTencetStaffInfo(),void wx.showToast({title:"设置身份成功"})):"#:useLocalTime"===o?(wx.setStorageSync("smarket_time_type","local"),wx.showToast({title:"设置读取本地时间成功",icon:"none"})):"#:useServerTime"===o?(wx.setStorageSync("smarket_time_type","server"),wx.showToast({title:"设置读取服务器时间成功",icon:"none"})):void("#:givemecode"!=o?this.searchLink(o):wx.login({success:function(e){console.log("give me code",e),wx.showModal({content:e.code,success:function(t){t.confirm&&wx.setClipboardData({data:e.code})}})}}))},searchLink:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click";if(e.QD.event("searchClick",{keywords:t}),"89757"==t&&"release"!=__wxConfig.envVersion)return wx.setStorageSync("isStaff",!0),wx.setStorageSync("staffInfo",{upgrade:1}),e.API.getTencetStaffInfo(),void wx.showToast({title:"设置身份成功"});if("#:givemecode"!=t)if("#:givemeopenid"!=t)if("#:givemetoken"!=t)if("#:clear"!=t){if("#:upgrade"!=t){if("#:usesaas"==t||"#:useuat"==t){var n="saas";return"#:useuat"==t&&(n="uat"),wx.setStorageSync("smarket_env_manual",n),void wx.showModal({title:"环境已设置",content:"请重新进入小程序！",showCancel:!1,success:function(){},fail:function(){}})}return"#:notstaff"==t?(wx.setStorageSync("isStaff",!1),void wx.showModal({title:"身份已设置",content:"已设置为非腾讯员工！",showCancel:!1,success:function(){},fail:function(){}})):"#:staff"==t?(wx.removeStorageSync("token"),void wx.showModal({title:"身份已设置",content:"请重新进入小程序！",showCancel:!1,success:function(){},fail:function(){}})):void wx.navigateTo({url:"/pages/search/result/glob?q=".concat(t,"&type=").concat(o).concat(this.fromModule?"&fromModule="+this.fromModule:"")})}var a=wx.getUpdateManager();a.onCheckForUpdate((function(e){e.hasUpdate?(a.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",showCancel:!1,success:function(e){e.confirm&&(wx.removeStorage("token"),a.applyUpdate())},fail:function(){}})})),a.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"为了更好的体验，请删除当前小程序，重新搜索打开",showCancel:!1,success:function(){},fail:function(){}})}))):wx.showToast({title:"已经是最新版本了！"})}))}else wx.clearStorageSync();else{var s=wx.getStorageSync("token");wx.showModal({content:s,success:function(e){e.confirm&&wx.setClipboardData({data:s})}})}else{var c=wx.getStorageSync("openid");wx.showModal({content:c,success:function(e){e.confirm&&wx.setClipboardData({data:c})}})}else wx.login({success:function(e){console.log("give me code",e),wx.showModal({content:e.code,success:function(t){t.confirm&&wx.setClipboardData({data:e.code})}})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/search/keyword/index.js'});require("pages/search/keyword/index.js");