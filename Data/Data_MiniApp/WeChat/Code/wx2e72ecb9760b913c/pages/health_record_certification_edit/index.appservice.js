$gwx_XC_126=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_126 || [];
function gz$gwx_XC_126_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_126_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_126_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_126_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowGuardianModule']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_126_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_126_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_126=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_126=true;
var x=['./pages/health_record_certification_edit/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_126_1()
var o04=_v()
_(r,o04)
if(_oz(z,0,e,s,gg)){o04.wxVkey=1
}
o04.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_126";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_126();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_record_certification_edit/index.wxml'] = [$gwx_XC_126, './pages/health_record_certification_edit/index.wxml'];else __wxAppCode__['pages/health_record_certification_edit/index.wxml'] = $gwx_XC_126( './pages/health_record_certification_edit/index.wxml' );
	;__wxRoute = "pages/health_record_certification_edit/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_record_certification_edit/index.js";define("pages/health_record_certification_edit/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),t=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),i=require("../../FD56CE94829A079C9B30A693E59B7B70.js"),n=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").dateFormat,o=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,d=a.baseUrl+"/events/newer_task/ehr/has_self/",r=a.baseUrl+"/ehr/patient_profile/create_or_update/",s=a.baseUrl+"/ehr/patient_profile/detail/";Page({data:{ehrId:"",isShowGuardianModule:!1,relation:"",patientName:"",sex:"",birthday:"",identityCard:"",guardianName:"",guardianIdentityCard:"",pageType:"add",nowDay:"",submitDisabled:!1,relationList:i.relationList,sexList:i.sexList,bornTime:"1990-01-01",fromVideo:0},onLoad:function(e){console.log("options",e),this.data.sceneIn=e.sceneIn||"register_apply";var t=e.isNeedRealName,a=void 0!==t&&t,i=e.pageType,n=e.ehrId,o=e.fromVideo,d=void 0===o?0:o;this.setData({pageType:i||"add",ehrId:n,fromVideo:d}),wx.setNavigationBarTitle({title:"add"===i?"新增健康档案":"编辑健康档案"}),this.openModal(a),"edit"===i?this.getPatientProfileDetail(n):"add"===i&&this.getRelationData(),this.getDateStr()},onUnload:function(){wx.setStorageSync("isFirstCreatedEhr",JSON.stringify(!1))},addOrEditRecord:function(){var a=this,i=2,n=this.data,d=n.ehrId,s=n.relation,l=n.patientName,u=n.sex,c=n.birthday,h=n.identityCard,g=n.guardianName,w=n.guardianIdentityCard,f=n.pageType,m=void 0===f?"add":f;if(this.verifyData()){wx.showLoading(),this.setData({submitDisabled:!0});var p={id:d,relation:s,patient_name:l,sex:u,birthday:c,identity_card:h,guardian_name:g,guardian_identity_card:w};"add"===m&&delete p.id;try{wx.request({url:"".concat(r,"?scene_in=").concat(a.data.sceneIn),timeout:1e4,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},method:"POST",data:o(p),success:function(t){wx.hideLoading();var n=t.data,o=n.error_code,d=void 0===o?1:o,r=n.error_msg,s=void 0===r?"档案创建失败":r,l=n.ehr_info,u=void 0===l?{}:l;if(0===d){var c={};1!==Number(a.data.fromVideo)&&(c=JSON.parse(wx.getStorageSync("isFirstCreatedEhr"))),wx.showToast({title:"档案创建成功",success:function(){wx.setStorageSync("selectHealthRecordInfo",JSON.stringify(e(e({},u),{},{isCreatedEhr:!0}))),1===Number(a.data.fromVideo)?(wx.setStorageSync("video-varified",1),wx.navigateBack()):(c&&(i=1),wx.navigateBack({delta:i}))}})}else wx.showToast({title:s,icon:"none"});a.setData({submitDisabled:!1})},fail:function(){wx.showToast({title:"请求出错，请稍后再试",icon:"none"})}})}catch(e){console.log(e),wx.hideLoading(),a.setData({submitDisabled:!1})}}},verifyData:function(){var e=this.data,t=e.relation,a=e.patientName,i=e.sex,n=e.birthday,o=e.identityCard,d=e.guardianName,r=e.guardianIdentityCard,s=function(e){return e=e.toUpperCase(),!!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(e)},l=function(e){return e&&String(e).trim().length};return t?l(a)?i?n?l(o)?s(o)?this.isNeedAddGuardian(n)&&!l(d)?(wx.showToast({title:"请填写监护人姓名",icon:"none"}),!1):this.isNeedAddGuardian(n)&&!l(r)?(wx.showToast({title:"请填写监护人身份证",icon:"none"}),!1):!(this.isNeedAddGuardian(n)&&!s(r))||(wx.showToast({title:"请输入正确的监护人身份证号",icon:"none"}),!1):(wx.showToast({title:"请输入正确的身份证号",icon:"none"}),!1):(wx.showToast({title:"请填写身份证",icon:"none"}),!1):(wx.showToast({title:"请选择出生日期",icon:"none"}),!1):(wx.showToast({title:"请选择性别",icon:"none"}),!1):(wx.showToast({title:"请填写姓名",icon:"none"}),!1):(wx.showToast({title:"请选择关系",icon:"none"}),!1)},getPatientProfileDetail:function(e){var a=this;wx.request({url:s,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},data:{id:e,scene_in:"register_apply"},method:"GET",success:function(e){var t=e.data,i=t.error_code,n=void 0===i?1:i,o=t.error_msg,d=void 0===o?"获取档案详情失败":o,r=t.ehr_detail,s=void 0===r?{}:r;if(0===n){var l=s.patient_name,u=s.sex,c=s.relation,h=s.birthday,g=s.identity_card,w=s.guardian_name,f=s.guardian_identity_card,m=a.data.sexList.map((function(e){return e.value===u&&(e.checked=!0),e}));a.setData({isShowGuardianModule:a.isNeedAddGuardian(h),relation:c,patientName:l,sex:u,sexList:m,birthday:h,identityCard:g,guardianName:w,guardianIdentityCard:f})}else wx.showToast({title:d,icon:"none"})}})},getRelationData:function(){var e=this;wx.request({url:d,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},method:"GET",success:function(t){t.data&&t.data.has_self&&e.setData({relationList:e.data.relationList.slice(1)})}})},getDateStr:function(){var e=new Date;Date.prototype.dateFormat=n;var t=e.dateFormat("yyyy-MM-dd");this.setData({nowDay:t})},setIdcard:function(e){this.setData({identityCard:e.detail.value})},setName:function(e){this.setData({patientName:e.detail.value})},setGuardianName:function(e){this.setData({guardianName:e.detail.value})},setGuardianIdentityCard:function(e){this.setData({guardianIdentityCard:e.detail.value})},radioChange:function(e){this.setData({sex:e.detail.value})},bindDateChange:function(e){this.setData({isShowGuardianModule:this.isNeedAddGuardian(e.detail.value),birthday:e.detail.value})},isNeedAddGuardian:function(e){return new Date(e).getTime()>=(new Date).getTime()-220752e6},changePick:function(e){var t=this.data.relationList,a=void 0===t?[]:t;console.log(a[e.detail.value]),this.setData({relation:a[e.detail.value]})},openModal:function(e){"true"===e&&wx.showModal({content:1===Number(this.data.fromVideo)?"视频问诊需实名预约，请补充档案信息":"预约就诊需实名预约，请补充档案信息",showCancel:!1,confirmText:"我知道了",confirmColor:"#39D167"})}});
},{isPage:true,isComponent:true,currentFile:'pages/health_record_certification_edit/index.js'});require("pages/health_record_certification_edit/index.js");