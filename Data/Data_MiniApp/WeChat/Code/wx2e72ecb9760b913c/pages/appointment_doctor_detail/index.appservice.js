$gwx_XC_46=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_46 || [];
function gz$gwx_XC_46_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'status-wrapper'])
Z([[2,'==='],[[7],[3,'status']],[1,'success']])
Z([[7],[3,'hasModified']])
Z([[2,'==='],[[7],[3,'status']],[1,'fail']])
Z([[2,'!'],[[7],[3,'tip']]])
Z([[7],[3,'canCancel']])
Z(z[2])
Z([3,'closeDialog'])
Z([3,'change'])
Z([3,'cancelReasonSubmit'])
Z([[7],[3,'cancelReasonList']])
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_46=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_46=true;
var x=['./pages/appointment_doctor_detail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_46_1()
var fWK=_n('view')
_rz(z,fWK,'class',0,e,s,gg)
var hYK=_n('appointment-doctor-header')
_(fWK,hYK)
var oZK=_n('view')
_rz(z,oZK,'class',1,e,s,gg)
var c1K=_v()
_(oZK,c1K)
if(_oz(z,2,e,s,gg)){c1K.wxVkey=1
var l3K=_v()
_(c1K,l3K)
if(_oz(z,3,e,s,gg)){l3K.wxVkey=1
}
l3K.wxXCkey=1
}
else if(_oz(z,4,e,s,gg)){c1K.wxVkey=2
var a4K=_v()
_(c1K,a4K)
if(_oz(z,5,e,s,gg)){a4K.wxVkey=1
}
a4K.wxXCkey=1
}
else{c1K.wxVkey=3
}
var o2K=_v()
_(oZK,o2K)
if(_oz(z,6,e,s,gg)){o2K.wxVkey=1
}
c1K.wxXCkey=1
o2K.wxXCkey=1
_(fWK,oZK)
var cXK=_v()
_(fWK,cXK)
if(_oz(z,7,e,s,gg)){cXK.wxVkey=1
}
var t5K=_mz(z,'cancel-reason',['bind:cancel',8,'bind:change',1,'bind:ok',2,'cancelReasonList',3,'visible',4],[],e,s,gg)
_(fWK,t5K)
cXK.wxXCkey=1
_(r,fWK)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_46";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_46();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/appointment_doctor_detail/index.wxml'] = [$gwx_XC_46, './pages/appointment_doctor_detail/index.wxml'];else __wxAppCode__['pages/appointment_doctor_detail/index.wxml'] = $gwx_XC_46( './pages/appointment_doctor_detail/index.wxml' );
	;__wxRoute = "pages/appointment_doctor_detail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/appointment_doctor_detail/index.js";define("pages/appointment_doctor_detail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=e.baseUrl+"/api/v5/register_apply/${id}/detail",i=e.baseUrl+"/api/global/property/",o=e.baseUrl+"/api/v5/register_apply/${apply_id}/cancel/";Page({data:{id:"",name:"",hospital:"",avatarUrl:"",status:"success",time:"",code:"",address:"",doctorId:"",reason:"",tip:"",applyHospitalName:"",arrivalTime:"",remark:"",content:"",hasModified:!1,visible:!1,canCancel:!1,cancelReasonList:[]},onLoad:function(a){var e=a.id;this.data.id=e},onShow:function(){var a=this.data.id;this.getCancelReasonList(),this.getAppointmentDetail(a)},setCancelOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.data.id,i=o.replace("${apply_id}",t),s=this;wx.request({url:i,data:{reason:e},method:"POST",header:{"Content-Type":"application/json",Cookie:a.globalData.sessionid},success:function(a){var e=a.data,i=e.error_code,o=void 0===i?1:i,n=e.error_msg,r=void 0===n?"取消预约失败":n;0===o?(s.getAppointmentDetail(t),s.closeDialog()):wx.showToast({title:r,icon:"none"})}})},cancelReasonSubmit:function(a){var e=a.detail;e?this.setCancelOrder(e):wx.showToast({title:"请选择取消原因",icon:"none"})},openDialog:function(){this.setData({visible:!0})},closeDialog:function(){this.setData({visible:!1})},getCancelReasonList:function(){var e=this;wx.request({url:i,data:{property_key:"register_apply_cancel_reason_list"},method:"GET",header:{"Content-Type":"application/json",Cookie:a.globalData.sessionid},success:function(a){var t=a.data,i=t.error_code,o=void 0===i?1:i,s=t.property_value,n=void 0===s?"":s,r=t.error_msg,c=void 0===r?"获取取消原因失败":r;if(0===o)try{e.setData({cancelReasonList:JSON.parse(unescape(n.replace(/\\/g,"%")))||[]})}catch(a){console.log(a)}else wx.showToast({title:c,icon:"none"})}})},getAppointmentDetail:function(e){wx.showNavigationBarLoading(),wx.showLoading();var i=t.replace("${id}",e),o=this;wx.request({url:i,method:"GET",header:{"Content-Type":"application/json",Cookie:a.globalData.sessionid},success:function(a){var e=a.data,t=void 0===e?{}:e,i=a.data.doctor,s=void 0===i?{}:i,n="n"===t.status?"pending":"a"===t.status?"success":"fail";o.setData({status:n,hasModified:t.has_modified,name:s.name,hospital:s.hospital,avatarUrl:s.image,time:t.register_time_str,code:t.service_code,tip:t.tip,applyHospitalName:t.apply_hospital_name,arrivalTime:t.arrival_time,address:t.address,reason:t.reason,doctorId:s.id,canCancel:t.can_cancel,availableTime:t.available_time,remark:t.remark,content:t.content}),wx.setNavigationBarTitle({title:s.name+"医生预约就诊"}),wx.hideNavigationBarLoading(),wx.hideLoading()}})},goOrder:function(){var a="view",e=this.data,t=e.id,i=e.status,o=e.doctorId,s=e.name;"pending"!==i&&"success"!==i||(a="update"),wx.navigateTo({url:"/pages/appointment_doctor_order/index?id=".concat(t,"&type=").concat(a,"&doctorId=").concat(o,"&doctorName=").concat(s,"&status=").concat(i,"&isFirstComeIn=true")})}});
},{isPage:true,isComponent:true,currentFile:'pages/appointment_doctor_detail/index.js'});require("pages/appointment_doctor_detail/index.js");