$gwx_XC_164=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_164 || [];
function gz$gwx_XC_164_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_164_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_164_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_164_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_164_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_164_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_164=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_164=true;
var x=['./pages/open_mini_program/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_164_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_164";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_164();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/open_mini_program/index.wxml'] = [$gwx_XC_164, './pages/open_mini_program/index.wxml'];else __wxAppCode__['pages/open_mini_program/index.wxml'] = $gwx_XC_164( './pages/open_mini_program/index.wxml' );
	;__wxRoute = "pages/open_mini_program/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/open_mini_program/index.js";define("pages/open_mini_program/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a={wx77f06a7c08f97fb0:{title:"生长曲线",name:"生长曲线",desc:"宝宝身高体重发育管理",img:"https://resource.chunyu.mobi/@/media/images/2022/01/12/93a4/5a643acae135_w282_h282_.png"},wx5965bcf00d9a8b2d:{title:"疫苗时间",name:"疫苗时间表",desc:"宝宝疫苗接种管理",img:"https://resource.chunyu.mobi/@/media/images/2022/01/12/bcbd/7033053e124a_w282_h282_.png"},wx4265b42a4479a472:{title:"育儿知识",name:"育儿知识游戏",desc:"边学边玩 做宝宝的最棒妈妈",img:"https://resource.chunyu.mobi/@/media/images/2022/01/12/bcbd/7033053e124a_w282_h282_.png"},wxdab36ef6fb4f9394:{title:"饮食宜忌",name:"能不能吃",desc:"查询宝宝和妈妈的饮食宜忌",img:"https://resource.chunyu.mobi/@/media/images/2022/01/12/ea71/70ad5bd18811_w282_h282_.png"}};Page({data:{loading:!0,img:"",name:"",desc:""},onLoad:function(e){var i=e.appId,t=e.path,n=a[i]||{},s=n.name,c=n.img,d=n.desc,m=n.title;this.appId=i,this.path=t,wx.setNavigationBarTitle({title:m}),this.setData({name:s,desc:d,img:c,loading:!1})},openMini:function(){var a=this.appId,e=this.path;wx.navigateToMiniProgram({appId:a,path:e,success:function(){console.log("打开成功")},fail:function(a){wx.showToast({title:a.data&&a.data.msg||"打开失败",icon:"none"})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/open_mini_program/index.js'});require("pages/open_mini_program/index.js");