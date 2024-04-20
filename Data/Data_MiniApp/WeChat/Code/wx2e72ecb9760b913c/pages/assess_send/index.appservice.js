$gwx_XC_50=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_50 || [];
function gz$gwx_XC_50_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_50_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_50_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_50_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'&&'],[[7],[3,'doctor_info']],[[6],[[7],[3,'doctor_info']],[3,'id']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'badHidden']]],[[6],[[7],[3,'goodAtTagData']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_50_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_50_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_50=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_50=true;
var x=['./pages/assess_send/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_50_1()
var f3L=_n('view')
_rz(z,f3L,'class',0,e,s,gg)
var c4L=_v()
_(f3L,c4L)
if(_oz(z,1,e,s,gg)){c4L.wxVkey=1
}
var h5L=_v()
_(f3L,h5L)
if(_oz(z,2,e,s,gg)){h5L.wxVkey=1
}
c4L.wxXCkey=1
h5L.wxXCkey=1
_(r,f3L)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_50";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_50();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/assess_send/index.wxml'] = [$gwx_XC_50, './pages/assess_send/index.wxml'];else __wxAppCode__['pages/assess_send/index.wxml'] = $gwx_XC_50( './pages/assess_send/index.wxml' );
	;__wxRoute = "pages/assess_send/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/assess_send/index.js";define("pages/assess_send/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../1D735BD7829A079C7B1533D0C5CC7B70.js"),t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,s=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,o=e+"/cooperation/wap/assess_info_page/",i=e+"/cooperation/wap/assess_problem/";Page({data:{curFace:1,radioHidden:!0,badHidden:!0,level:"best",blacklist:0,is_advanced_graph:!1},inputHandler:function(a){var t=a.detail.value;this.setData({remark:t})},submitAssess:function(){var e=this,o=e.data.assessTagData,r=e.data.goodAtTagData,n=e.data.level,d=e.data.blacklist,c=e.data.problem_id,l=t.globalData.sessionid,g=e.data.remark||"",u=[],p=[];if(Array.isArray(o)&&o.forEach((function(a){a.selected&&u.push(a.key)})),Array.isArray(r)&&r.map((function(a){a.selected&&p.push(a.text)})),u.length<1)wx.showModal({content:"请选择具体标签后提交",showCancel:!1});else{var f={goodat_tags:p,level:n,tag_keys:u,blacklist:d},b={partner:"chunyu_wap_mini",assess_info:JSON.stringify(f),problem_id:c,from_wx_mini:1,remark:g,version:a.productionVersion};wx.request({url:i,data:s(b),method:"POST",header:{Cookie:l,"Content-Type":"application/x-www-form-urlencoded"},success:function(a){0==(a=a.data).error?e.data.is_advanced_graph?(wx.showToast({title:"优惠券已发放到“我的优惠券”中",icon:"none"}),setTimeout((function(){wx.navigateBack({delta:1,fail:function(){console.log("page back fail")}})}),1500)):wx.navigateBack({delta:1,fail:function(){console.log("page back fail")}}):1==a.error&&wx.showModal({content:a.error_msg,showCancel:!1,success:function(){wx.navigateBack({delta:1,fail:function(){console.log("page back fail")}})}})},fail:function(a){console.log(a)}})}},assessTagTap:function(a){var t=this.data.assessTagData,e=a.currentTarget.dataset.index,s=t[e].selected;t[e].selected=!s,this.setData({assessTagData:t})},goodAtTagTap:function(a){var t=this.data.goodAtTagData,e=a.currentTarget.dataset.index,s=t[e].selected;t[e].selected=!s,this.setData({goodAtTagData:t})},radioHandler:function(a){var t=this.data.radioHidden;this.setData({radioHidden:!t,blacklist:t?"1":"0"})},switchSatisfy:function(a){var t=parseInt(a.currentTarget.dataset.index),e=null,s=this.data.blacklist,o="";switch(t){case 1:e=this.data.best,o="best";break;case 2:e=this.data.good,o="good";break;case 3:e=this.data.bad,o="bad";break;default:return}this.setData({curFace:t,level:o,assessTagData:e,badHidden:3!==t,blacklist:3===t&&"1"==s?"1":"0",radioHidden:3!==t||"1"!=s})},onLoad:function(a){var e=this,s=a&&a.problem_id?a.problem_id:0,i=a.is_advanced_graph&&"true"===a.is_advanced_graph||!1,r=t.globalData.partner,n=t.globalData.sessionid;wx.request({url:o,data:{from_wx_mini:1,problem_id:s,partner:r,is_json:1},method:"GET",header:{Cookie:n},success:function(a){function t(a){var t=Object.prototype.toString.call(a),e=[];if("[object Object]"==t)for(var s in a)e.push({text:a[s],key:s});else"[object Array]"==t&&(e=a);return e.map((function(a){var t=Object.prototype.toString.call(a);return"[object Object]"==t?{text:a.text,key:a.key,selected:!1}:{text:a,selected:!1}}))}a=a.data,e.setData({doctor_info:a.doctor_info,bad:t(a.bad),good:t(a.good),page_info:a.page_info,goodat_tags:t(a.goodat_tags),best:t(a.best),assessTagData:t(a.best),goodAtTagData:t(a.goodat_tags),problem_id:s,is_advanced_graph:i})},fail:function(a){console.log(a)}})}});
},{isPage:true,isComponent:true,currentFile:'pages/assess_send/index.js'});require("pages/assess_send/index.js");