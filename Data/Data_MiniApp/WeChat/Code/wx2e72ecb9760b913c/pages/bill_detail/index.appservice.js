$gwx_XC_55=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_55 || [];
function gz$gwx_XC_55_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'bill__account clearfix'])
Z([[2,'=='],[[7],[3,'status']],[1,'refunding']])
Z([[2,'=='],[[7],[3,'status']],[1,'refunded']])
Z([3,'step'])
Z([[6],[[7],[3,'history']],[1,0]])
Z([[6],[[7],[3,'history']],[1,1]])
Z([[6],[[7],[3,'history']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_55=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_55=true;
var x=['./pages/bill_detail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_55_1()
var hIM=_n('view')
_rz(z,hIM,'class',0,e,s,gg)
var oJM=_n('view')
_rz(z,oJM,'class',1,e,s,gg)
var cKM=_v()
_(oJM,cKM)
if(_oz(z,2,e,s,gg)){cKM.wxVkey=1
}
var oLM=_v()
_(oJM,oLM)
if(_oz(z,3,e,s,gg)){oLM.wxVkey=1
}
cKM.wxXCkey=1
oLM.wxXCkey=1
_(hIM,oJM)
var lMM=_n('view')
_rz(z,lMM,'class',4,e,s,gg)
var aNM=_v()
_(lMM,aNM)
if(_oz(z,5,e,s,gg)){aNM.wxVkey=1
}
var tOM=_v()
_(lMM,tOM)
if(_oz(z,6,e,s,gg)){tOM.wxVkey=1
}
var ePM=_v()
_(lMM,ePM)
if(_oz(z,7,e,s,gg)){ePM.wxVkey=1
}
aNM.wxXCkey=1
tOM.wxXCkey=1
ePM.wxXCkey=1
_(hIM,lMM)
_(r,hIM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_55";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_55();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/bill_detail/index.wxml'] = [$gwx_XC_55, './pages/bill_detail/index.wxml'];else __wxAppCode__['pages/bill_detail/index.wxml'] = $gwx_XC_55( './pages/bill_detail/index.wxml' );
	;__wxRoute = "pages/bill_detail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/bill_detail/index.js";define("pages/bill_detail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/defineProperty"),e=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/cooperation/wap/balance/withdraw/record_detail/";Page({data:{},onLoad:function(o){var i,r=this,n=o.record_id,s=e.globalData.sessionid||wx.getStorageSync("sessionid"),d=e.globalData.partner;n?wx.request({url:a,method:"GET",header:{"Content-Type":"application/json",Cookie:s},data:(i={from_wx_mini:1,record_id:n,partner:d},t(i,"from_wx_mini",1),t(i,"is_json",1),i),success:function(t){t=t.data,r.setData({amount:t.amount,datetime:t.datetime,history:t.history,page_info:t.page_info,platform_info:t.platform_info,status:t.status,title:t.title})}}):wx.showToast({title:"这个没有详情～",icon:"none"})}});
},{isPage:true,isComponent:true,currentFile:'pages/bill_detail/index.js'});require("pages/bill_detail/index.js");