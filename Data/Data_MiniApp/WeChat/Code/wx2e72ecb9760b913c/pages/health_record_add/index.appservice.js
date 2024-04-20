$gwx_XC_123=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_123 || [];
function gz$gwx_XC_123_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_123_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_123_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_123_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_123_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_123_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_123=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_123=true;
var x=['./pages/health_record_add/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_123_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_123";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_123();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_record_add/index.wxml'] = [$gwx_XC_123, './pages/health_record_add/index.wxml'];else __wxAppCode__['pages/health_record_add/index.wxml'] = $gwx_XC_123( './pages/health_record_add/index.wxml' );
	;__wxRoute = "pages/health_record_add/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_record_add/index.js";define("pages/health_record_add/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/defineProperty"),a=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,n=e.baseUrl+"/api/patient_profile/",s=e.baseUrl+"/events/newer_task/ehr/has_self/";Page({data:{patient_name:"",sex:"",birthday:"",nowDay:"",page_type:"",relation:"",relation_list:[{name:"自己",value:"自己"},{name:"父母",value:"父母"},{name:"子女",value:"子女"},{name:"爱人",value:"爱人"},{name:"其他",value:"其他"}],sex_list:[{name:"男",value:"男"},{name:"女",value:"女"}],born_time:"1990-01-01"},onLoad:function(t){var a=t.page_type||"";this.setData({page_type:a}),this.getRelationData(),this.getDateStr()},getDateStr:function(){var t=new Date,a=t.getMonth()+1,e=t.getDate(),i=t.getFullYear()+"-"+(a<10?"0"+a:a)+"-"+(e<10?"0"+e:e);this.setData({nowDay:i})},getRelationData:function(){var t=this;wx.request({url:s,header:{"Content-Type":"application/json",Cookie:a.globalData.sessionid},method:"GET",success:function(a){a.data&&a.data.has_self&&t.setData({relation_list:t.data.relation_list.slice(1)})}})},setName:function(t){var a=t.detail.value;this.setData({patient_name:a}),console.log(this.data.patient_name)},addRecord:function(){var t=this.data.patient_name,e=this.data.sex,s=this.data.birthday,o=(this.data.page_type,this.data.relation);if(!o)return wx.showToast({title:"请选择关系",icon:"loading"}),!1;if(!t||!t.trim().length)return wx.showToast({title:"请输入姓名",icon:"loading"}),!1;if(!e)return wx.showToast({title:"请选择性别",icon:"loading"}),!1;if(!s)return wx.showToast({title:"请选择出生日期",icon:"loading"}),!1;var l={patient_name:t,sex:e,birthday:s,relation:o};wx.request({url:n,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:a.globalData.sessionid},method:"POST",data:i(l),success:function(t){wx.showToast({title:"档案创建成功",success:function(){wx.navigateBack({delta:1})}})},fail:function(t){wx.showToast({title:t.error_msg||"档案创建失败",icon:"loading"})}})},radioChange:function(t){this.setData({sex:t.detail.value})},bindDateChange:function(t){this.setData({birthday:t.detail.value})},changePick:function(a){var e,i=a.target.dataset.name,n=this.data[i+"_list"][a.detail.value];this.setData((t(e={},i,n.value),t(e,i+"_value",n.name),e))}});
},{isPage:true,isComponent:true,currentFile:'pages/health_record_add/index.js'});require("pages/health_record_add/index.js");