$gwx_XC_98=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_98 || [];
function gz$gwx_XC_98_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_98_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_98_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_98_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'glu-list'])
Z([[7],[3,'isEmpty']])
Z([[7],[3,'gluList']])
Z([3,'index'])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'status']],[1,0]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[7],[3,'showMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_98_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_98_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_98=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_98=true;
var x=['./pages/glu_list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_98_1()
var oH3=_n('view')
_rz(z,oH3,'class',0,e,s,gg)
var cI3=_v()
_(oH3,cI3)
if(_oz(z,1,e,s,gg)){cI3.wxVkey=1
}
else{cI3.wxVkey=2
var lK3=_v()
_(cI3,lK3)
var aL3=function(eN3,tM3,bO3,gg){
var xQ3=_v()
_(bO3,xQ3)
if(_oz(z,4,eN3,tM3,gg)){xQ3.wxVkey=1
var oR3=_v()
_(xQ3,oR3)
if(_oz(z,5,eN3,tM3,gg)){oR3.wxVkey=1
}
var fS3=_v()
_(xQ3,fS3)
if(_oz(z,6,eN3,tM3,gg)){fS3.wxVkey=1
}
oR3.wxXCkey=1
fS3.wxXCkey=1
}
xQ3.wxXCkey=1
return bO3
}
lK3.wxXCkey=2
_2z(z,2,aL3,e,s,gg,lK3,'item','index','index')
var oJ3=_v()
_(cI3,oJ3)
if(_oz(z,7,e,s,gg)){oJ3.wxVkey=1
}
oJ3.wxXCkey=1
}
cI3.wxXCkey=1
_(r,oH3)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_98";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_98();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/glu_list/index.wxml'] = [$gwx_XC_98, './pages/glu_list/index.wxml'];else __wxAppCode__['pages/glu_list/index.wxml'] = $gwx_XC_98( './pages/glu_list/index.wxml' );
	;__wxRoute = "pages/glu_list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/glu_list/index.js";define("pages/glu_list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/toConsumableArray"),e=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/ehr/health/glu/list/";Page({data:{gluList:[],page:1,countPerPage:20,hasMore:!1,isEmpty:!1,showMore:!1},onShow:function(t){this.setData({page:1}),this.getGluList()},getGluList:function(){var o=this,s=this.data,i=s.gluList,r=s.page,n=s.countPerPage;wx.request({url:a,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},data:{page:r,count_per_page:n,partner:e.globalData.partner,from_wx_mini:1},method:"GET",success:function(e){if(0===(e=e.data).error_code){var a=e.payload.glu_list;o.setData({isEmpty:1===r&&!a.length,gluList:1===r?a:[].concat(t(i),t(a)),hasMore:!(a.length<n),showMore:!(a.length<n&&1===r),page:r+1})}else wx.showToast({title:e.error_msg||"数据请求失败，请稍后再试",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"数据请求出错，请稍后再试",icon:"none",duration:2e3}),console.log(t)}})},onReachBottom:function(){this.data.hasMore&&this.getGluList()}});
},{isPage:true,isComponent:true,currentFile:'pages/glu_list/index.js'});require("pages/glu_list/index.js");