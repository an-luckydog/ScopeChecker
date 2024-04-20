$gwx_XC_122=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_122 || [];
function gz$gwx_XC_122_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_122_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_122_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_122_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'搜索'])
Z([3,'page-bg'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([3,'onSearch'])
Z([[7],[3,'search']])
Z([3,'swiperTab'])
Z([3,'swiper'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'height:calc(100vh - 99rpx - 120rpx - 47rpx - '],z[2][2],z[2][3]])
Z(z[5])
Z([3,'loadHandler'])
Z([3,'case'])
Z([[7],[3,'searchAgain']])
Z([[7],[3,'searchType']])
Z(z[5])
Z(z[5])
Z(z[12])
Z([3,'tool'])
Z(z[14])
Z(z[15])
Z(z[5])
Z(z[5])
Z(z[12])
Z([3,'activity'])
Z(z[14])
Z(z[15])
Z(z[5])
Z(z[5])
Z(z[12])
Z([3,'scene'])
Z(z[14])
Z(z[15])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_122_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_122_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_122=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_122=true;
var x=['./pages/search/result/glob.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_122_1()
var tOLB=_n('header')
_rz(z,tOLB,'title',0,e,s,gg)
_(r,tOLB)
var ePLB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var bQLB=_v()
_(ePLB,bQLB)
if(_oz(z,3,e,s,gg)){bQLB.wxVkey=1
var oRLB=_mz(z,'searchForm',['bindsearch',4,'value',1],[],e,s,gg)
_(bQLB,oRLB)
var xSLB=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'duration',3,'style',4],[],e,s,gg)
var oTLB=_v()
_(xSLB,oTLB)
if(_oz(z,11,e,s,gg)){oTLB.wxVkey=1
var oXLB=_mz(z,'sk-result',['bind:loadData',12,'contentType',1,'searchAgain',2,'searchType',3,'searchWord',4],[],e,s,gg)
_(oTLB,oXLB)
}
var fULB=_v()
_(xSLB,fULB)
if(_oz(z,17,e,s,gg)){fULB.wxVkey=1
var cYLB=_mz(z,'sk-result',['bind:loadData',18,'contentType',1,'searchAgain',2,'searchType',3,'searchWord',4],[],e,s,gg)
_(fULB,cYLB)
}
var cVLB=_v()
_(xSLB,cVLB)
if(_oz(z,23,e,s,gg)){cVLB.wxVkey=1
var oZLB=_mz(z,'sk-result',['bind:loadData',24,'contentType',1,'searchAgain',2,'searchType',3,'searchWord',4],[],e,s,gg)
_(cVLB,oZLB)
}
var hWLB=_v()
_(xSLB,hWLB)
if(_oz(z,29,e,s,gg)){hWLB.wxVkey=1
var l1LB=_mz(z,'sk-result',['bind:loadData',30,'contentType',1,'searchAgain',2,'searchType',3,'searchWord',4],[],e,s,gg)
_(hWLB,l1LB)
}
oTLB.wxXCkey=1
oTLB.wxXCkey=3
fULB.wxXCkey=1
fULB.wxXCkey=3
cVLB.wxXCkey=1
cVLB.wxXCkey=3
hWLB.wxXCkey=1
hWLB.wxXCkey=3
_(bQLB,xSLB)
}
else{bQLB.wxVkey=2
var a2LB=_n('loading')
_(bQLB,a2LB)
}
bQLB.wxXCkey=1
bQLB.wxXCkey=3
bQLB.wxXCkey=3
_(r,ePLB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_122";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_122();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/result/glob.wxml'] = [$gwx_XC_122, './pages/search/result/glob.wxml'];else __wxAppCode__['pages/search/result/glob.wxml'] = $gwx_XC_122( './pages/search/result/glob.wxml' );
	;__wxRoute = "pages/search/result/glob";__wxRouteBegin = true;__wxAppCurrentFile__="pages/search/result/glob.js";define("pages/search/result/glob.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/objectSpread2"),a=getApp(),e={case:0,tool:1,activity:2,scene:3};Page({data:{ready:!0,currentTab:0,caseList:[],warehouseList:[],activityList:[],sceneList:[],search:"",init:!1,q:"",searchType:"",shareImg:"",formMap:{},searchAgain:0},swiperTab:function(t){this.setData({currentTab:t.detail.current})},clickTab:function(t){console.log(t.currentTarget.dataset.current),this.setData({currentTab:t.currentTarget.dataset.current})},onLoad:function(t){var n=this,i=t.q,r=t.type,s=t.fromModule;this.fromModule=s,console.log("🚀 ~ file: glob.js ~ line 41 ~ type",r),this.data.searchType=r,console.log("result",r),i&&(this.data.q=i),this.setData({search:i||"",searchType:r||"",currentTab:this.fromModule&&e[this.fromModule]||0}),a.checkAppInit((function(){var t=a.globalData,e=t.statusBarHeight,i=t.navbarHeight;n.setData({topHeight:i+e})}))},onReady:function(){},onShow:function(){a.QD.track("contentView",{menu:a.globalData.currentTab,name_of_page:"".concat(this.data.q,"搜索结果页")}),this.data.init},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}},setCurrentTab:function(t){this.data.init||(this.data.init=!0,this.fromModule||this.setData({currentTab:t||0}))},loadHandler:function(a){var n=t(t({},this.data.formMap),a.detail),i=4===Object.keys(n).length;if(i){var r=[];for(var s in n)+n[s]>0&&r.push(e[s]);this.setCurrentTab(Math.min.apply(null,r))}this.setData({formMap:i?{}:n})},onSearch:function(t){this.data.search!==t.detail.search?this.setData({search:t.detail.search}):this.setData({searchAgain:++this.data.searchAgain})}});
},{isPage:true,isComponent:true,currentFile:'pages/search/result/glob.js'});require("pages/search/result/glob.js");