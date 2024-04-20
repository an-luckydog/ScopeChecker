$gwx_XC_170=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_170 || [];
function gz$gwx_XC_170_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_170_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_170_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_170_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'paymentList']])
Z([3,'record__section'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'recharge']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'status']],[1,'refunded']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'status']],[1,'reject']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'related_info']],[3,'status']],[1,'refunding']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_170_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_170_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_170=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_170=true;
var x=['./pages/payment_list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_170_1()
var eNGB=_v()
_(r,eNGB)
var bOGB=function(xQGB,oPGB,oRGB,gg){
var cTGB=_n('view')
_rz(z,cTGB,'class',1,xQGB,oPGB,gg)
var hUGB=_v()
_(cTGB,hUGB)
if(_oz(z,2,xQGB,oPGB,gg)){hUGB.wxVkey=1
}
var oVGB=_v()
_(cTGB,oVGB)
if(_oz(z,3,xQGB,oPGB,gg)){oVGB.wxVkey=1
}
var cWGB=_v()
_(cTGB,cWGB)
if(_oz(z,4,xQGB,oPGB,gg)){cWGB.wxVkey=1
}
var oXGB=_v()
_(cTGB,oXGB)
if(_oz(z,5,xQGB,oPGB,gg)){oXGB.wxVkey=1
}
hUGB.wxXCkey=1
oVGB.wxXCkey=1
cWGB.wxXCkey=1
oXGB.wxXCkey=1
_(oRGB,cTGB)
return oRGB
}
eNGB.wxXCkey=2
_2z(z,0,bOGB,e,s,gg,eNGB,'item','index','')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_170";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_170();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/payment_list/index.wxml'] = [$gwx_XC_170, './pages/payment_list/index.wxml'];else __wxAppCode__['pages/payment_list/index.wxml'] = $gwx_XC_170( './pages/payment_list/index.wxml' );
	;__wxRoute = "pages/payment_list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/payment_list/index.js";define("pages/payment_list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/api/v8/get_account_change_list/";Page({data:{paymentList:[],withdraw:"",recharge:"",page:1,list_num:""},onLoad:function(){this.getPayRecordList()},loadMore:function(){this.data.list_num<20||this.getPayRecordList()},onReachBottom:function(){this.loadMore()},getPayRecordList:function(){var e=this,i=e.data.paymentList,s=null,n=0,o=e.data.page,r=t.globalData.sessionid||wx.getStorageSync("sessionid"),c=t.globalData.partner;wx.request({url:a,method:"GET",header:{"Content-Type":"application/json",Cookie:r},data:{from_wx_mini:1,page:o,is_json:1,partner:c},success:function(t){t=t.data,n=t.change_list.length,s=i.concat(t.change_list),e.setData({paymentList:s,page:o+1,list_num:n})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/payment_list/index.js'});require("pages/payment_list/index.js");