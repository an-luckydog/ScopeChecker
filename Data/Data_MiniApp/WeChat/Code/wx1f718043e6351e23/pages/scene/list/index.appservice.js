$gwx_XC_120=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_120 || [];
function gz$gwx_XC_120_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_120_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'场景应用详情'])
Z([3,'page-bg page'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([[6],[[7],[3,'consultDetail']],[3,'CampaignID']])
Z([[7],[3,'consultDetail']])
Z([[6],[[7],[3,'consultDetail']],[3,'tplId']])
Z([[6],[[7],[3,'consultDetail']],[3,'icon']])
Z([[6],[[7],[3,'consultDetail']],[3,'title']])
Z([[6],[[7],[3,'consultDetail']],[3,'enable_status']])
Z([[6],[[7],[3,'consultDetail']],[3,'consultType']])
Z([[6],[[7],[3,'consultDetail']],[3,'wechatQrCode']])
Z([[6],[[7],[3,'consultDetail']],[3,'wechatTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_120_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_120=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_120=true;
var x=['./pages/scene/list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_120_1()
var oDLB=_n('header')
_rz(z,oDLB,'title',0,e,s,gg)
_(r,oDLB)
var xELB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oFLB=_v()
_(xELB,oFLB)
if(_oz(z,3,e,s,gg)){oFLB.wxVkey=1
var fGLB=_mz(z,'consult-btn',['CampaignID',4,'consultDetail',1,'formId',2,'icon',3,'label',4,'showConsult',5,'type',6,'wechatQrCode',7,'wechatTitle',8],[],e,s,gg)
_(oFLB,fGLB)
var cHLB=_n('home-tips')
_(oFLB,cHLB)
}
else{oFLB.wxVkey=2
var hILB=_n('loading')
_(oFLB,hILB)
}
oFLB.wxXCkey=1
oFLB.wxXCkey=3
oFLB.wxXCkey=3
_(r,xELB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_120";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_120();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scene/list/index.wxml'] = [$gwx_XC_120, './pages/scene/list/index.wxml'];else __wxAppCode__['pages/scene/list/index.wxml'] = $gwx_XC_120( './pages/scene/list/index.wxml' );
	;__wxRoute = "pages/scene/list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/scene/list/index.js";define("pages/scene/list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{ready:!0,sceneAppItem:[],shareImg:"",consultDetail:{}},onLoad:function(e){var n=this;t.checkAppInit((function(){var e=t.globalData,a=e.statusBarHeight,o=e.navbarHeight;n.setData({topHeight:o+a})})),t.loginCallback().then((function(t){n.getData()}))},onReady:function(){},onShow:function(){t.QD.track("contentView",{menu:t.globalData.currentTab,name_of_page:"场景列表页"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}},toDetail:function(t){var e=t.currentTarget.dataset.item.id;wx.navigateTo({url:"/pages/scene/detail/index?id=".concat(e)})},getData:function(){var e=this;t.API.getSceneList().then((function(t){console.log("page scene list getData res",t),0==t.code&&e.setData({sceneAppItem:t.content})})).catch((function(t){console.log("page scene list getData err",t)}))},consultDetail:function(e,n){var a=this;t.API.consultDetail(e,n).then((function(t){0==t.code&&a.setData({consultDetail:t.content})}))}});
},{isPage:true,isComponent:true,currentFile:'pages/scene/list/index.js'});require("pages/scene/list/index.js");