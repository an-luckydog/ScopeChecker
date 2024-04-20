$gwx_XC_211=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_211 || [];
function gz$gwx_XC_211_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_211_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_211_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_211_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[6],[[7],[3,'summary_info']],[3,'diseases']],[3,'length']])
Z([[6],[[7],[3,'summary_info']],[3,'revisit_time']])
Z([[6],[[7],[3,'summary_info']],[3,'diet_suggestion']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_211_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_211_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_211=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_211=true;
var x=['./pages/summary/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_211_1()
var cXXB=_n('view')
_rz(z,cXXB,'class',0,e,s,gg)
var hYXB=_v()
_(cXXB,hYXB)
if(_oz(z,1,e,s,gg)){hYXB.wxVkey=1
}
var oZXB=_v()
_(cXXB,oZXB)
if(_oz(z,2,e,s,gg)){oZXB.wxVkey=1
}
var c1XB=_v()
_(cXXB,c1XB)
if(_oz(z,3,e,s,gg)){c1XB.wxVkey=1
}
hYXB.wxXCkey=1
oZXB.wxXCkey=1
c1XB.wxXCkey=1
_(r,cXXB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_211";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_211();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/summary/index.wxml'] = [$gwx_XC_211, './pages/summary/index.wxml'];else __wxAppCode__['pages/summary/index.wxml'] = $gwx_XC_211( './pages/summary/index.wxml' );
	;__wxRoute = "pages/summary/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/summary/index.js";define("pages/summary/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{summary_info:{},reward_count:0,doctor_avatar:""},onLoad:function(a){var n=this,o=decodeURIComponent(a.url);wx.request({url:o,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},method:"GET",data:{is_json:1},success:function(t){(t=t.data).summary_info.content&&(t.summary_info.content=t.summary_info.content.replace(/\n/g,"")),t.summary_info.diet_suggestion&&(t.summary_info.diet_suggestion=t.summary_info.diet_suggestion.replace(/\n/g,"")),n.setData({summary_info:t.summary_info,reward_count:t.reward_count,doctor_avatar:t.doctor_avatar})}})},jumpUserCenter:function(){wx.switchTab({url:"../user_center/index"})}});
},{isPage:true,isComponent:true,currentFile:'pages/summary/index.js'});require("pages/summary/index.js");