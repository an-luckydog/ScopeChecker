$gwx_XC_119=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_119 || [];
function gz$gwx_XC_119_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_119_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_119_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_119_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'c-page'])
Z([[7],[3,'pageTitle']])
Z([[7],[3,'ready']])
Z([[7],[3,'downloadData']])
Z([3,'index'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'sceneItem'])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_119_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_119_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_119=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_119=true;
var x=['./pages/scene/download_list/index.wxml'];d_[x[0]]={}
d_[x[0]]["sceneItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_119_1()
var b=x[0]+':sceneItem'
r.wxVkey=b
gg.f=$gdc(f_["./pages/scene/download_list/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_119_1()
var bYKB=_n('view')
_rz(z,bYKB,'class',0,e,s,gg)
var x1KB=_n('header')
_rz(z,x1KB,'title',1,e,s,gg)
_(bYKB,x1KB)
var oZKB=_v()
_(bYKB,oZKB)
if(_oz(z,2,e,s,gg)){oZKB.wxVkey=1
var o2KB=_v()
_(oZKB,o2KB)
var f3KB=function(h5KB,c4KB,o6KB,gg){
var o8KB=_v()
_(o6KB,o8KB)
var l9KB=_oz(z,6,h5KB,c4KB,gg)
var a0KB=_gd(x[0],l9KB,e_,d_)
if(a0KB){
var tALB=_1z(z,5,h5KB,c4KB,gg) || {}
var cur_globalf=gg.f
o8KB.wxXCkey=3
a0KB(tALB,tALB,o8KB,gg)
gg.f=cur_globalf
}
else _w(l9KB,x[0],1,186)
return o6KB
}
o2KB.wxXCkey=2
_2z(z,3,f3KB,e,s,gg,o2KB,'item','index','index')
}
else{oZKB.wxVkey=2
var eBLB=_n('loading')
_(oZKB,eBLB)
}
oZKB.wxXCkey=1
oZKB.wxXCkey=3
_(r,bYKB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_119";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_119();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scene/download_list/index.wxml'] = [$gwx_XC_119, './pages/scene/download_list/index.wxml'];else __wxAppCode__['pages/scene/download_list/index.wxml'] = $gwx_XC_119( './pages/scene/download_list/index.wxml' );
	;__wxRoute = "pages/scene/download_list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/scene/download_list/index.js";define("pages/scene/download_list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),e=getApp();Page({data:{ready:!1,pageTitle:"资料下载",downloadData:[],shareImg:""},onLoad:function(a){var t=this,n=a.id,o=a.cid;this.data.cid=o,this.setData({cjkId:n}),e.loginCallback().then((function(){t.getData({id:a.id})}))},onReady:function(){},onShow:function(){e.QD.track("contentView",{ContentID:"scene".concat(this.data.cid),menu:e.globalData.currentTab,name_of_page:"资料下载列表页"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{imageUrl:this.data.shareImg}},getData:function(n){var o=this;return t(a().mark((function t(){var r;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.API.getSceneDataList(n).catch((function(a){}));case 2:r=a.sent,console.log("getData",r),0==r.code?o.setData({downloadData:r.content,ready:!0}):o.setData({downloadData:[],ready:!0});case 5:case"end":return a.stop()}}),t)})))()},download:function(a){var t=a.currentTarget.dataset,e=t.id,n=(t.name,"/pages/download/index?type=3&id=".concat(e));wx.navigateTo({url:n})}});
},{isPage:true,isComponent:true,currentFile:'pages/scene/download_list/index.js'});require("pages/scene/download_list/index.js");