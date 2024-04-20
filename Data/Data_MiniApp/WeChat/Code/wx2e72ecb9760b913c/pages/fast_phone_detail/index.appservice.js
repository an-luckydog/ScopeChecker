$gwx_XC_83=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_83 || [];
function gz$gwx_XC_83_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'doctor_info']],[[6],[[7],[3,'doctor_info']],[3,'id']]])
Z([3,'detail-main'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'status']],[1,'r']],[[7],[3,'refund_reason']]])
Z([[2,'=='],[[7],[3,'status']],[1,'t']])
Z([3,'item'])
Z([[7],[3,'contents']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'d']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_83=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_83=true;
var x=['./pages/fast_phone_detail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_83_1()
var oHW=_v()
_(r,oHW)
if(_oz(z,0,e,s,gg)){oHW.wxVkey=1
}
var xIW=_n('view')
_rz(z,xIW,'class',1,e,s,gg)
var oJW=_v()
_(xIW,oJW)
if(_oz(z,2,e,s,gg)){oJW.wxVkey=1
}
else if(_oz(z,3,e,s,gg)){oJW.wxVkey=2
var fKW=_v()
_(oJW,fKW)
var cLW=function(oNW,hMW,cOW,gg){
var lQW=_v()
_(cOW,lQW)
if(_oz(z,6,oNW,hMW,gg)){lQW.wxVkey=1
}
lQW.wxXCkey=1
return cOW
}
fKW.wxXCkey=2
_2z(z,5,cLW,e,s,gg,fKW,'item','index','')
}
oJW.wxXCkey=1
_(r,xIW)
oHW.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_83";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_83();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/fast_phone_detail/index.wxml'] = [$gwx_XC_83, './pages/fast_phone_detail/index.wxml'];else __wxAppCode__['pages/fast_phone_detail/index.wxml'] = $gwx_XC_83( './pages/fast_phone_detail/index.wxml' );
	;__wxRoute = "pages/fast_phone_detail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/fast_phone_detail/index.js";define("pages/fast_phone_detail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,o=t+"/cooperation/wap/problem_detail_page/";Page({data:{doctor_info:null,sessionid:"",problem_id:"",partner:"",problem_detail:"",status:"",contents:"",inquiry_time_str:"",need_assess:"",service_type:""},onLoad:function(a){var i=a.service_type;o=i?t+"/cooperation/wap/problem_detail_page/?service_type=fast_phone":t+"/cooperation/wap/problem_detail_page/";var s=e.globalData.sessionid||wx.getStorageSync("sessionid");this.setData({problem_id:a&&a.problem_id?a.problem_id:e.globalData.problem_id,doctor_info:e.globalData.doctor_info,sessionid:s}),this.init()},init:function(){var t=this,a=t.data.sessionid,i=e.globalData.partner,s=t.data.problem_id;wx.request({url:o,header:{Cookie:a},data:{from_wx_mini:1,partner:i,problem_id:s,is_json:1},success:function(e){var o=e.data;o.doctor_info&&wx.setNavigationBarTitle({title:o.doctor_info.name+"医生"}),t.setData({partner:i,doctor_info:o.doctor_info,is_problem_user:o.is_problem_user,page_info:o.page_info,problem_detail:o.problem_detail,status:o.status,contents:o.contents,inquiry_time_str:o.inquiry_time_str,need_assess:o.need_assess,refund_reason:o.refund_reason})},fail:function(e){t.setData({error_msg:e.error_msg,toast_hidden:!1})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/fast_phone_detail/index.js'});require("pages/fast_phone_detail/index.js");