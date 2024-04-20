$gwx_XC_110=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_110 || [];
function gz$gwx_XC_110_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_110_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'我的点赞'])
Z([3,'page-bg'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([3,'swiperTab'])
Z([3,'swiper'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'height:calc(100vh - 99rpx - 47rpx - '],z[2][2],z[2][3]])
Z([3,'true'])
Z([3,'height:100%'])
Z([[2,'>'],[[6],[[7],[3,'mineCase']],[3,'length']],[1,0]])
Z([[7],[3,'mineCase']])
Z(z[9])
Z(z[10])
Z([[2,'>'],[[6],[[7],[3,'mineWarehouse']],[3,'length']],[1,0]])
Z([[7],[3,'mineWarehouse']])
Z(z[9])
Z(z[10])
Z([[2,'>'],[[6],[[7],[3,'mineActivity']],[3,'length']],[1,0]])
Z([[7],[3,'mineActivity']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_110_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_110=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_110=true;
var x=['./pages/mine/likes/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_110_1()
var oZFB=_n('header')
_rz(z,oZFB,'title',0,e,s,gg)
_(r,oZFB)
var f1FB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var c2FB=_v()
_(f1FB,c2FB)
if(_oz(z,3,e,s,gg)){c2FB.wxVkey=1
var h3FB=_mz(z,'swiper',['bindchange',4,'class',1,'current',2,'duration',3,'style',4],[],e,s,gg)
var o4FB=_mz(z,'scroll-view',['scrollY',9,'style',1],[],e,s,gg)
var c5FB=_v()
_(o4FB,c5FB)
if(_oz(z,11,e,s,gg)){c5FB.wxVkey=1
var o6FB=_n('case-list')
_rz(z,o6FB,'list',12,e,s,gg)
_(c5FB,o6FB)
}
else{c5FB.wxVkey=2
}
c5FB.wxXCkey=1
c5FB.wxXCkey=3
_(h3FB,o4FB)
var l7FB=_mz(z,'scroll-view',['scrollY',13,'style',1],[],e,s,gg)
var a8FB=_v()
_(l7FB,a8FB)
if(_oz(z,15,e,s,gg)){a8FB.wxVkey=1
var t9FB=_n('warehouse-list')
_rz(z,t9FB,'list',16,e,s,gg)
_(a8FB,t9FB)
}
else{a8FB.wxVkey=2
}
a8FB.wxXCkey=1
a8FB.wxXCkey=3
_(h3FB,l7FB)
var e0FB=_mz(z,'scroll-view',['scrollY',17,'style',1],[],e,s,gg)
var bAGB=_v()
_(e0FB,bAGB)
if(_oz(z,19,e,s,gg)){bAGB.wxVkey=1
var oBGB=_n('industry-activities')
_rz(z,oBGB,'list',20,e,s,gg)
_(bAGB,oBGB)
}
else{bAGB.wxVkey=2
}
bAGB.wxXCkey=1
bAGB.wxXCkey=3
_(h3FB,e0FB)
_(c2FB,h3FB)
}
else{c2FB.wxVkey=2
var xCGB=_n('loading')
_(c2FB,xCGB)
}
c2FB.wxXCkey=1
c2FB.wxXCkey=3
c2FB.wxXCkey=3
_(r,f1FB)
var oDGB=_n('no-card-tip')
_(r,oDGB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_110";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_110();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/likes/index.wxml'] = [$gwx_XC_110, './pages/mine/likes/index.wxml'];else __wxAppCode__['pages/mine/likes/index.wxml'] = $gwx_XC_110( './pages/mine/likes/index.wxml' );
	;__wxRoute = "pages/mine/likes/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/likes/index.js";define("pages/mine/likes/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{ready:!0,currentTab:0,mineCase:[],mineWarehouse:[],mineActivity:[],mineScene:[],shareImg:"",pageName:"我的点赞"},swiperTab:function(t){var e=this;this.setData({currentTab:t.detail.current},(function(){e.getData()}))},clickTab:function(t){console.log(t.currentTarget.dataset.current),this.setData({currentTab:t.currentTarget.dataset.current},(function(){}))},onLoad:function(e){var n=this;t.checkAppInit((function(){var e=t.globalData,a=e.statusBarHeight,c=e.navbarHeight;n.setData({topHeight:c+a})}))},onReady:function(){},onShow:function(){var e=this;t.loginCallback().then((function(n){e.getData(!0),t.QD.track("contentView",{menu:t.globalData.currentTab,name_of_page:"我的-"+e.pageName})}))},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return t.QD.action("shareContent",{menu:t.globalData.currentTab,name_of_page:"我的-"+this.pageName}),{title:"腾讯云产业互联网",path:"/pages/index/index",imageUrl:this.data.shareImg}},getData:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log("my mycollect init getdata");var a={like:1,start:0,num:500};0!=this.data.currentTab||0!=this.data.mineCase.length&&!n?1!=this.data.currentTab||0!=this.data.mineWarehouse.length&&!n?2!=this.data.currentTab||0!=this.data.mineActivity.length&&!n?3!=this.data.currentTab||0!=this.data.mineScene.length&&!n||t.API.getSceneList(a).then((function(t){console.log("my mycollect scene res",t),0==t.code&&e.setData({mineScene:t.content})})).catch((function(t){console.log("my mycollect scene err",t)})):t.API.activityList(a).then((function(t){console.log("my mycollect activity res",t),0==t.code&&e.setData({mineActivity:t.content.list})})).catch((function(t){console.log("my mycollect activity err",t)})):t.API.getTool(a).then((function(t){console.log("my mycollect tool res",t),0==t.code&&e.setData({mineWarehouse:t.content})})).catch((function(t){console.log("my mycollect tool err",t)})):t.API.getCase(a).then((function(t){console.log("my mycollect case res",t),0==t.code&&e.setData({mineCase:t.content})})).catch((function(t){console.log("my mycollect case err",t)}))},toScene:function(t){var e=t.currentTarget.dataset.item.id;wx.navigateTo({url:"/pages/scene/detail/index?id=".concat(e)})}});
},{isPage:true,isComponent:true,currentFile:'pages/mine/likes/index.js'});require("pages/mine/likes/index.js");