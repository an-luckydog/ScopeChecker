$gwx_XC_65=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_65 || [];
function gz$gwx_XC_65_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'device-use-wrap'])
Z([[6],[[7],[3,'deviceInfo']],[3,'device_name']])
Z([[6],[[7],[3,'deviceInfo']],[3,'device_image']])
Z([[7],[3,'firstStepIcon']])
Z([[7],[3,'isShowSecondStep']])
Z([1,true])
Z(z[5])
Z(z[4])
Z([[6],[[7],[3,'deviceInfo']],[3,'only_self_ehr']])
Z([[7],[3,'recordInfo']])
Z([3,'您正在使用的设备'])
Z(z[4])
Z([3,'请遵从健康顾问线下指导，规范检测'])
Z([[7],[3,'secondDescImg']])
Z([[7],[3,'secondStepIcon']])
Z([[7],[3,'isShowThirdStep']])
Z([3,'设备正在使用中...'])
Z(z[15])
Z([[7],[3,'thirdStepIcon']])
Z([1,false])
Z([3,'设备使用结束，请查看检测报告'])
Z([[7],[3,'isShowUseBtn']])
Z([3,'confirmEvent'])
Z([3,'我知道了'])
Z([[7],[3,'isShowDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_65=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_65=true;
var x=['./pages/device_use/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_65_1()
var oHO=_n('view')
_rz(z,oHO,'class',0,e,s,gg)
var aLO=_mz(z,'step',['desc',1,'descImg',1,'icon',2,'isAddPadding',3,'isHighlightDesc',4,'isShowRecord',5,'isUsingDevice',6,'onlySelfEhr',7,'recordInfo',8,'title',9],[],e,s,gg)
_(oHO,aLO)
var cIO=_v()
_(oHO,cIO)
if(_oz(z,11,e,s,gg)){cIO.wxVkey=1
var tMO=_mz(z,'step',['desc',12,'descImg',1,'icon',2,'isAddPadding',3,'title',4],[],e,s,gg)
_(cIO,tMO)
}
var oJO=_v()
_(oHO,oJO)
if(_oz(z,17,e,s,gg)){oJO.wxVkey=1
var eNO=_mz(z,'step',['icon',18,'isShowImg',1,'title',2],[],e,s,gg)
_(oJO,eNO)
}
var lKO=_v()
_(oHO,lKO)
if(_oz(z,21,e,s,gg)){lKO.wxVkey=1
}
var bOO=_mz(z,'cy_modal',['bind:confirmEvent',22,'btnText',1,'show',2],[],e,s,gg)
_(oHO,bOO)
cIO.wxXCkey=1
cIO.wxXCkey=3
oJO.wxXCkey=1
oJO.wxXCkey=3
lKO.wxXCkey=1
_(r,oHO)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_65";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_65();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/device_use/index.wxml'] = [$gwx_XC_65, './pages/device_use/index.wxml'];else __wxAppCode__['pages/device_use/index.wxml'] = $gwx_XC_65( './pages/device_use/index.wxml' );
	;__wxRoute = "pages/device_use/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/device_use/index.js";define("pages/device_use/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/regenerator")),r=require("../../@babel/runtime/helpers/asyncToGenerator"),n=e(require("../../7C7490B0829A079C1A12F8B759DC7B70.js")),i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").wxShowToast,a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,o="gmWJ2T9MD0p5tp1Xczk3G2s-ot3mIgrZ1GDqjJ3hfQQ";Page({data:{isRequesting:!1,deviceType:"",deviceId:null,serialNo:null,ehrId:null,recordInfo:{},isShowSecondStep:!1,isShowThirdStep:!1,isShowUseBtn:!0,btnText:"立即使用",reportUrl:"",deviceInfo:{},isShowDialog:!1,dialogTxt:"",firstStepIcon:"https://resource.chunyu.mobi/@/media/images/2022/10/11/c132/cb7f0ca89527_w72_h72_.png",secondStepIcon:"https://resource.chunyu.mobi/@/media/images/2022/10/11/70fb/7dba4cdb167f_w72_h72_.png",secondDescImg:"https://resource.chunyu.mobi/@/media/images/2022/10/11/3202/36e13ffeeb18_w723_h432_.png",thirdStepIcon:"https://resource.chunyu.mobi/@/media/images/2022/10/11/d921/ec99f9660cc1_w72_h72_.png"},onLoad:function(e){this.setData({deviceType:e.device_type,deviceId:e.device_id},this.getDeviceInfo)},onShow:function(){this.getRecordInfo()},onHide:function(){this.endPolling()},onUnload:function(){this.endPolling()},getDeviceInfo:function(){var e=this;return r(t.default.mark((function r(){var a,o,s,c,d,u,l;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,n.default)("/api/crm/device/station/device_info/",{device_type:e.data.deviceType,device_id:e.data.deviceId});case 3:a=t.sent,o=a.error_code,s=a.error_msg,c=a.data,d=void 0===c?{}:c,console.log("data",d),0===o?(e.setData({deviceInfo:d||{}}),d.qr_code_own&&(i("二维码已被使用，请等待上一位用户检测完成后再次扫码"),e.setData({isShowUseBtn:!1}))):i(s||"获取设备信息失败"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),i((null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u||null===(l=u.data)||void 0===l?void 0:l.error_msg)||"获取设备信息失败");case 15:case"end":return t.stop()}}),r,null,[[0,12]])})))()},getRecordInfo:function(){var e=this;return r(t.default.mark((function r(){var a,o,s,c,d,u,l;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,n.default)("/api/crm/device/station/access/ehr_info/",{device_type:e.data.deviceType});case 3:a=t.sent,o=a.error_code,s=a.error_msg,c=a.data,d=void 0===c?{}:c,console.log("data",d),0===o?e.setData({recordInfo:d}):i(s||"获取档案信息失败"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),i((null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u||null===(l=u.data)||void 0===l?void 0:l.error_msg)||"获取设备信息失败");case 15:case"end":return t.stop()}}),r,null,[[0,12]])})))()},useDevice:function(){var e=this;return r(t.default.mark((function r(){var o,s,c,d,u,l,v,p,h,f,_,g,m,S,w,b,x,I,D,T;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.data.isShowThirdStep){t.next=6;break}return wx.setStorageSync("REPORT_URL",e.data.reportUrl),wx.setStorageSync("RECORD_ID",null===(o=e.data.recordInfo)||void 0===o?void 0:o.ehr_id),wx.setStorageSync("IS_FIRST_SHOW",!0),wx.switchTab({url:"/pages/health_home/index"}),t.abrupt("return");case 6:if(s=e.data,c=s.recordInfo,d=void 0===c?{}:c,u=s.isRequesting,l=s.deviceType,v=s.deviceId,!u){t.next=9;break}return t.abrupt("return");case 9:if(e.setData({isRequesting:!0}),d.ehr_id){t.next=14;break}return i("请先完善档案信息"),e.setData({isRequesting:!1}),t.abrupt("return");case 14:return p={device_type:l,device_id:v,ehr_id:d.ehr_id},t.prev=15,t.next=18,(0,n.default)("/api/crm/device/station/upload/tester_info/",p,"POST");case 18:h=t.sent,f=h.error_code,_=h.error_msg,g=h.data,m=void 0===g?{}:g,console.log("上传个人信息",f,_,m),S=m.device_status,w=m.toast_txt,b=void 0===w?"":w,x=m.serial_no,I=void 0===x?"":x,0===f?(e.setData({isRequesting:!1,serialNo:I}),"idle"===S?e.subscribeMessage(b):"detecting"===S?i("设备当前正在使用中，请稍候"):"shutdown"===S?i("设备已关机"):"not_login"===S&&i("设备未登录，请先登录")):1001===f?(i(_||"上传个人信息失败"),setTimeout((function(){var t,r,n=null!==(t=e.data.deviceInfo)&&void 0!==t&&t.only_self_ehr?"1":"0",i=null===(r=e.data.recordInfo)||void 0===r?void 0:r.ehr_id,o="".concat(a,"/v_m_general_vue/qa/health_records/edit?scene=station_device_dock&ehr_id=").concat(i,"&only_self_ehr=").concat(n);wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(o)),success:function(){e.setData({isRequesting:!1})}})}),3e3)):(i(_||"上传个人信息失败"),e.setData({isRequesting:!1})),t.next=33;break;case 28:t.prev=28,t.t0=t.catch(15),console.log("error",t.t0),i((null===t.t0||void 0===t.t0||null===(D=t.t0.response)||void 0===D||null===(T=D.data)||void 0===T?void 0:T.error_msg)||"上传个人信息失败"),e.setData({isRequesting:!1});case 33:case"end":return t.stop()}}),r,null,[[15,28]])})))()},subscribeMessage:function(e){var a,s=this;wx.requestSubscribeMessage({tmplIds:[o],complete:(a=r(t.default.mark((function r(a){var c,d;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a[o],d={data:JSON.stringify([{template_id:o,choice:c||"reject"}]),platform:"weixin_mini"},e?s.setData({isShowUseBtn:!1,isShowDialog:!!e,dialogTxt:e}):(s.setData({isShowUseBtn:!1,isShowSecondStep:!0}),s.clearServerEhrId(),s.getDetectStatus()),t.prev=3,t.next=6,(0,n.default)("/cooperation/wap/mini_sub/save/",d,"POST");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),i(t.t0||"订阅出错");case 11:case"end":return t.stop()}}),r,null,[[3,8]])}))),function(e){return a.apply(this,arguments)})})},clearServerEhrId:function(){return r(t.default.mark((function e(){var r,a,o;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,n.default)("/api/crm/device/station/delete/ehr_id/",{},"POST");case 3:r=e.sent,a=r.error_code,o=r.error_msg,0===a?console.log("清除成功"):i(o||"清除档案id失败"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("清除失败");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getDetectStatus:function(){var e=this;return r(t.default.mark((function r(){var a,o,s,c,d,u,l;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,n.default)("/api/crm/device/station/detect_status/",{serial_no:e.data.serialNo});case 3:a=t.sent,o=a.error_code,s=a.error_msg,c=a.data,d=void 0===c?{}:c,0===o?d&&!0===d.is_finish?(e.setData({isShowThirdStep:!0,isShowUseBtn:!0,btnText:"查看检测报告",reportUrl:d.report_url}),e.endPolling()):e.startPolling():i(s||"获取检测结果失败"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),i((null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u||null===(l=u.data)||void 0===l?void 0:l.error_msg)||"获取检测结果失败");case 15:case"end":return t.stop()}}),r,null,[[0,11]])})))()},startPolling:function(){var e=this;this.timer&&clearTimeout(this.timer),setTimeout((function(){e.getDetectStatus()}),3e3)},endPolling:function(){this.timer&&clearTimeout(this.timer)},confirmEvent:function(){this.setData({isShowSecondStep:!0}),this.clearServerEhrId(),this.getDetectStatus()}});
},{isPage:true,isComponent:true,currentFile:'pages/device_use/index.js'});require("pages/device_use/index.js");