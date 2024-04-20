$gwx_XC_124=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_124 || [];
function gz$gwx_XC_124_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_124_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_124_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_124_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'视频'])
Z([3,'page-bg'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([3,'chooseIndustryIndex'])
Z([3,'chooseTabIndex'])
Z([[7],[3,'industryActive']])
Z([[7],[3,'homeIndustryList']])
Z([[7],[3,'tabActive']])
Z([3,'content'])
Z([3,'true'])
Z([a,[3,'height:calc(100vh - 210rpx - 30rpx - '],z[2][2],z[2][3]])
Z([[2,'>'],[[6],[[7],[3,'videoList']],[3,'length']],[1,0]])
Z([[7],[3,'videoList']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_124_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_124_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_124=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_124=true;
var x=['./pages/video/list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_124_1()
var hAMB=_n('header')
_rz(z,hAMB,'title',0,e,s,gg)
_(r,hAMB)
var oBMB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var cCMB=_v()
_(oBMB,cCMB)
if(_oz(z,3,e,s,gg)){cCMB.wxVkey=1
var oDMB=_mz(z,'industry-products',['bindindustryIndex',4,'bindtabIndex',1,'industryActive',2,'list',3,'tabActive',4],[],e,s,gg)
_(cCMB,oDMB)
var lEMB=_mz(z,'scroll-view',['class',9,'scrollY',1,'style',2],[],e,s,gg)
var aFMB=_v()
_(lEMB,aFMB)
if(_oz(z,12,e,s,gg)){aFMB.wxVkey=1
var tGMB=_n('video-list')
_rz(z,tGMB,'list',13,e,s,gg)
_(aFMB,tGMB)
}
else{aFMB.wxVkey=2
}
aFMB.wxXCkey=1
aFMB.wxXCkey=3
_(cCMB,lEMB)
var eHMB=_n('consult-btn')
_(cCMB,eHMB)
var bIMB=_n('home-tips')
_(cCMB,bIMB)
}
else{cCMB.wxVkey=2
var oJMB=_n('loading')
_(cCMB,oJMB)
}
cCMB.wxXCkey=1
cCMB.wxXCkey=3
cCMB.wxXCkey=3
_(r,oBMB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_124";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_124();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/video/list/index.wxml'] = [$gwx_XC_124, './pages/video/list/index.wxml'];else __wxAppCode__['pages/video/list/index.wxml'] = $gwx_XC_124( './pages/video/list/index.wxml' );
	;__wxRoute = "pages/video/list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/video/list/index.js";define("pages/video/list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{ready:!0,tabActive:1,industryActive:1,homeIndustryList:[[[{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/1.png",title:"政务",id:"1"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/2.png",title:"泛金融",id:"2"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/3.png",title:"教育",id:"3"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/4.png",title:"泛互联网",id:"4"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/8.png",title:"文旅",id:"8"}],[{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/5.png",title:"智慧零售",id:"5"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/6.png",title:"智慧出行",id:"6"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/7.png",title:"医疗",id:"7"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/9.png",title:"能源",id:"9"}]],[[{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/1.png",title:"政务1",id:"1"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/2.png",title:"泛金融1",id:"2"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/3.png",title:"教育1",id:"3"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/4.png",title:"泛互联网",id:"4"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/8.png",title:"文旅1",id:"8"}],[{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/5.png",title:"智慧零售",id:"5"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/6.png",title:"智慧出行",id:"6"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/7.png",title:"医疗q",id:"7"},{banner:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry/9.png",title:"能源1",id:"9"}]]],videoList:[{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""},{img:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/home/industry-news.png",title:"腾讯云区域性银行数字 化转型白皮书",tagArray:["金融","数字化"],page_url:""}],shareImg:""},onLoad:function(n){var e=this;t.checkAppInit((function(){var n=t.globalData,i=n.statusBarHeight,m=n.navbarHeight;e.setData({topHeight:m+i})}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}},chooseIndustryIndex:function(t){this.setData({industryActive:t.detail.index})},chooseTabIndex:function(t){this.setData({tabActive:t.detail.index})}});
},{isPage:true,isComponent:true,currentFile:'pages/video/list/index.js'});require("pages/video/list/index.js");