$gwx_XC_96=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_96 || [];
function gz$gwx_XC_96_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z(z[0])
Z([3,'资料下载'])
Z([3,'download-container'])
Z([[7],[3,'info']])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_96=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_96=true;
var x=['./pages/download/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_96_1()
var c3AB=_mz(z,'header',['isFullPage',0,'isPlaceholder',1,'title',1],[],e,s,gg)
var o4AB=_n('view')
_rz(z,o4AB,'class',3,e,s,gg)
var l5AB=_v()
_(o4AB,l5AB)
if(_oz(z,4,e,s,gg)){l5AB.wxVkey=1
var a6AB=_n('download')
_rz(z,a6AB,'info',5,e,s,gg)
_(l5AB,a6AB)
}
else{l5AB.wxVkey=2
var t7AB=_n('loading')
_(l5AB,t7AB)
}
l5AB.wxXCkey=1
l5AB.wxXCkey=3
l5AB.wxXCkey=3
_(c3AB,o4AB)
_(r,c3AB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_96";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_96();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/download/index.wxml'] = [$gwx_XC_96, './pages/download/index.wxml'];else __wxAppCode__['pages/download/index.wxml'] = $gwx_XC_96( './pages/download/index.wxml' );
	;__wxRoute = "pages/download/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/download/index.js";define("pages/download/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{info:null,options:null},onLoad:function(t){this.setData({options:t})},onReady:function(){},onShow:function(){var n=this,e=this.data.options;if(0!=e.id){var a=e.id,i=e.type,o=void 0===i?"":i,c=e.scene;this.setData({id:a||c||"",type:o},(function(){t.loginCallback().then((function(){n.getFileDetail()}))}))}else this.setData({info:{file_url:e.url,title:e.name,source_id:e.source_id}}),t.QD.track("contentView",{ContentID:"",menu:t.globalData.currentTab,name_of_page:e.name})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.info.share_img}},getFileDetail:function(){var n=this,e=this.data,a=e.id,i=e.type;2==i?t.API.cpDownDetail({id:a}).then((function(e){var i=e.content.info;i.id=a,n.setData({info:i}),t.QD.track("contentView",{ContentID:"",menu:t.globalData.currentTab,name_of_page:i.title||"下载详情页"})})):3==i?t.API.getSceneDataDetail({id:a}).then((function(e){var i=e.content;i.id=a,n.setData({info:i}),t.QD.track("contentView",{ContentID:"",menu:t.globalData.currentTab,name_of_page:i.title||"下载详情页"})})):t.API.downloadDetail({id:a}).then((function(e){var i=e.content;i.id=a,n.setData({info:i}),t.QD.track("contentView",{ContentID:"",menu:t.globalData.currentTab,name_of_page:i.title||"下载详情页"})}))}});
},{isPage:true,isComponent:true,currentFile:'pages/download/index.js'});require("pages/download/index.js");