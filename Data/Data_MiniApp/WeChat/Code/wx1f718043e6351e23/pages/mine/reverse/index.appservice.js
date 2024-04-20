$gwx_XC_112=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_112 || [];
function gz$gwx_XC_112_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_112_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
Z([3,'page-bg mine-page'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([[2,'>'],[[6],[[7],[3,'homeIndustryList']],[3,'length']],[1,0]])
Z([[7],[3,'homeIndustryList']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_112_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_112=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_112=true;
var x=['./pages/mine/reverse/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_112_1()
var xQGB=_n('header')
_rz(z,xQGB,'title',0,e,s,gg)
_(r,xQGB)
var oRGB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var fSGB=_v()
_(oRGB,fSGB)
if(_oz(z,3,e,s,gg)){fSGB.wxVkey=1
var cTGB=_v()
_(fSGB,cTGB)
if(_oz(z,4,e,s,gg)){cTGB.wxVkey=1
var hUGB=_n('industry-activities-my')
_rz(z,hUGB,'list',5,e,s,gg)
_(cTGB,hUGB)
}
else{cTGB.wxVkey=2
}
cTGB.wxXCkey=1
cTGB.wxXCkey=3
}
else{fSGB.wxVkey=2
var oVGB=_n('loading')
_(fSGB,oVGB)
}
fSGB.wxXCkey=1
fSGB.wxXCkey=3
fSGB.wxXCkey=3
_(r,oRGB)
var cWGB=_n('no-card-tip')
_(r,cWGB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_112";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_112();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/reverse/index.wxml'] = [$gwx_XC_112, './pages/mine/reverse/index.wxml'];else __wxAppCode__['pages/mine/reverse/index.wxml'] = $gwx_XC_112( './pages/mine/reverse/index.wxml' );
	;__wxRoute = "pages/mine/reverse/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/reverse/index.js";define("pages/mine/reverse/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{ready:!0,homeIndustryList:[],shareImg:"",title:"",type:""},onLoad:function(e){var n=this;t.checkAppInit((function(){var e=t.globalData,a=e.statusBarHeight,o=e.navbarHeight;n.setData({topHeight:o+a})})),t.loginCallback().then((function(t){n.getData()})),this.setData({type:e.type,title:2==e.type?"我预约的线上直播":"我报名的线下会议"})},onReady:function(){},onShow:function(){t.QD.track("contentView",{menu:t.globalData.currentTab,name_of_page:"我的预约"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return t.QD.action("shareContent",{menu:t.globalData.currentTab,name_of_page:"我的-我的预约"}),{title:"腾讯云产业互联网",path:"/pages/index/index",imageUrl:this.data.shareImg}},getData:function(){var e=this,n={start:0,num:500,collect:1,platform:1,token:wx.getStorageSync("token"),type:this.data.type};t.API.getUserReserveList(n).then((function(t){console.log("my Signup res",t),0==t.code&&e.setData({homeIndustryList:t.content.list})})).catch((function(t){console.log("my Signup err",t)}))}});
},{isPage:true,isComponent:true,currentFile:'pages/mine/reverse/index.js'});require("pages/mine/reverse/index.js");