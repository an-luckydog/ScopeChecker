$gwx_XC_89=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_89 || [];
function gz$gwx_XC_89_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'场景应用详情'])
Z([3,'page-bg page'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_89=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_89=true;
var x=['./pages/brand/list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_89_1()
var cX6=_n('header')
_rz(z,cX6,'title',0,e,s,gg)
_(r,cX6)
var hY6=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oZ6=_v()
_(hY6,oZ6)
if(_oz(z,3,e,s,gg)){oZ6.wxVkey=1
var c16=_n('consult-btn')
_(oZ6,c16)
var o26=_n('home-tips')
_(oZ6,o26)
}
else{oZ6.wxVkey=2
var l36=_n('loading')
_(oZ6,l36)
}
oZ6.wxXCkey=1
oZ6.wxXCkey=3
oZ6.wxXCkey=3
_(r,hY6)
var a46=_n('no-card-tip')
_(r,a46)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_89";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_89();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/brand/list/index.wxml'] = [$gwx_XC_89, './pages/brand/list/index.wxml'];else __wxAppCode__['pages/brand/list/index.wxml'] = $gwx_XC_89( './pages/brand/list/index.wxml' );
	;__wxRoute = "pages/brand/list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/brand/list/index.js";define("pages/brand/list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{ready:!0,sceneAppItem:[],shareImg:""},onLoad:function(a){var n=this;t.checkAppInit((function(){var a=t.globalData,e=a.statusBarHeight,o=a.navbarHeight;n.setData({topHeight:o+e})})),t.loginCallback().then((function(t){n.getData()}))},onReady:function(){},onShow:function(){t.QD.track("contentView",{menu:t.globalData.currentTab,name_of_page:"品牌列表页"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return t.QD.action("shareContent",{menu:t.globalData.currentTab,name_of_page:"品牌列表页"}),{imageUrl:this.data.shareImg}},toDetail:function(t){var a=t.currentTarget.dataset.item.id;wx.navigateTo({url:"/pages/brand/index/index?id=".concat(a)})},getData:function(){var a=this;t.API.getBrandList().then((function(t){console.log("page brand list getData res",t),0==t.code&&a.setData({sceneAppItem:t.content})})).catch((function(t){console.log("page scene list getData err",t)}))}});
},{isPage:true,isComponent:true,currentFile:'pages/brand/list/index.js'});require("pages/brand/list/index.js");