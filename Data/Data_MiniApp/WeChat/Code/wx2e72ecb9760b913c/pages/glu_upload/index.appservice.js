$gwx_XC_99=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_99 || [];
function gz$gwx_XC_99_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_99_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_99_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_99_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_99_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_99_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_99=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_99=true;
var x=['./pages/glu_upload/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_99_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_99";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_99();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/glu_upload/index.wxml'] = [$gwx_XC_99, './pages/glu_upload/index.wxml'];else __wxAppCode__['pages/glu_upload/index.wxml'] = $gwx_XC_99( './pages/glu_upload/index.wxml' );
	;__wxRoute = "pages/glu_upload/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/glu_upload/index.js";define("pages/glu_upload/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/toConsumableArray"),a=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),r=e(require("../../C871ACB1829A079CAE17C4B61D2C7B70.js")),i=getApp(),s=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),o=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,n=s.baseUrl+"/ehr/health/glu/upload/",u=s.baseUrl+"/ehr/list/";Page({data:{ehrId:"",measureTime:"",value:"",type:null,btnLoading:!1,dateTimeArray:[],dateTimeIndex:[],initDatePicker:[],curDateArray:[],typeIndex:0,typeOptions:[{value:1,verbose:"空腹血糖"},{value:3,verbose:"餐后2h"},{value:4,verbose:"随机"}],typeVerbose:"",valueOptions:[],valueIndex:[],ehrOptions:[],erhIndex:[],ehrVerbose:""},onLoad:function(){this.getEhrOptions(),this.initValidate();var e,r=this.getCurDate(),i=this.initDateTimePicker(r,!0),s=i.dateTimeIndex,o=i.dateTimeArray,n=[],u=a(o);try{for(u.s();!(e=u.n()).done;){var h=e.value;n.push(t(h))}}catch(e){u.e(e)}finally{u.f()}var l=this.getValueOptions();this.setData({dateTimeIndex:s,dateTimeArray:o,curDateArray:r,initDatePicker:n,valueOptions:l})},getEhrOptions:function(){var e=this;wx.request({url:u,header:{"Content-Type":"application/json",Cookie:i.globalData.sessionid},data:{is_json:1,from_wx_mini:1,partner:i.globalData.partner},success:function(t){var a=t.data,r=a.error_code,i=a.error_msg,s=a.payload;if(0===r){var o=(s.ehr_list||[]).map((function(e){return{id:e.id,verbose:"".concat(e.relation_verbose||"--","(").concat(e.name||"--",")"),selected:!1}}));e.setData({ehrOptions:o})}else wx.showToast({icon:"none",title:i||"健康档案信息获取失败，请稍后重试",duration:2e3})},fail:function(e){wx.showToast({icon:"none",title:"健康档案信息获取出错，请稍后重试",duration:2e3}),console.log(e)}})},ehrChangeEvent:function(e){var t=e.detail.value,a=this.data.ehrOptions[t];this.setData({ehrId:a.id,ehrVerbose:a.verbose,ehrIndex:t})},getValueOptions:function(){for(var e=[],t=[],a=1;a<=20;a++)e.push(a);for(var r=0;r<=9;r++)t.push(r);return[e,t]},bindTypeChange:function(e){var t=e.detail.value,a=this.data.typeOptions[t];this.setData({typeIndex:t,type:a.value,typeVerbose:a.verbose})},bindValueChange:function(e){var t=e.detail.value,a=this.data.valueOptions[0][t[0]],r=this.data.valueOptions[1][t[1]],i="".concat(a,".").concat(r);this.setData({valueIndex:t,value:i})},changeDateTime:function(e){var t=e.detail.value,a=this.data.dateTimeArray,r=a[0][t[0]],i=a[1][t[1]],s=a[2][t[2]],o=a[3][t[3]],n=a[4][t[4]];this.setData({measureTime:"".concat(r,"-").concat(i,"-").concat(s," ").concat(o,":").concat(n)})},submitForm:function(){var e=this;this.setData({btnLoading:!0});var t={ehr_id:this.data.ehrId,value:this.data.value,type:this.data.type,measure_time:this.data.measureTime};if(!this.WxValidate.checkForm(t)){var a=this.WxValidate.errorList[0];return wx.showModal({title:"提示",content:a.msg||"",showCancel:!1}),this.setData({btnLoading:!1}),!1}wx.request({url:n,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:i.globalData.sessionid},method:"POST",data:o({ehr_id:t.ehr_id,measure_time:t.measure_time,glu_list:JSON.stringify([{value:t.value,type:t.type}]),from_wx_mini:1}),success:function(e){0===e.data.error_code?wx.showToast({title:"保存成功",mask:!0,success:function(){setTimeout((function(){wx.navigateBack({delta:1})}),1500)}}):wx.showToast({title:e.error_msg||"数据提交失败请重试",icon:"none"})},fail:function(e){wx.showToast({title:"数据提交出错请重试",icon:"none"})},complete:function(){e.setData({btnLoading:!1})}})},initValidate:function(){this.WxValidate=new r.default({ehr_id:{required:!0},measure_time:{required:!0},value:{required:!0},type:{required:!0}},{ehr_id:{required:"请选择健康档案"},measure_time:{required:"请选择测量时间"},value:{required:"请选择血糖值"},type:{required:"请选择时间标签"}})},changeDateTimeColumn:function(e){var t=this.data,a=t.dateTimeIndex,r=t.dateTimeArray,i=e.detail,s=i.column,o=i.value;a[s]=o;var n={selectY:r[0][a[0]],selectM:r[1][a[1]],selectD:r[2][a[2]],selectH:r[3][a[3]],selectMi:r[4][a[4]]};this.setChangePicker(n,r),this.setData({dateTimeIndex:a,dateTimeArray:r})},setChangePicker:function(e,a){var r=e.selectY,i=e.selectM,s=e.selectD,o=e.selectH,n=(e.selectMi,this.data),u=n.curDateArray,h=n.initDatePicker;console.log(e,u),r===u[0]?(a[1]=t(h[1]),i===u[1]?(a[2]=t(h[2]),s===u[2]?(a[3]=t(h[3]),o===u[3]?a[4]=t(h[4]):a[4]=this.getLoopArray(1,59)):(a[3]=this.getLoopArray(1,23),a[4]=this.getLoopArray(1,59))):(a[2]=this.getMonthDay(r,i),a[3]=this.getLoopArray(1,23),a[4]=this.getLoopArray(1,59))):(a[1]=this.getLoopArray(1,12),a[2]=this.getMonthDay(r,i),a[3]=this.getLoopArray(1,23),a[4]=this.getLoopArray(1,59))},initDateTimePicker:function(e){var t=[],a=[];a.push(this.getLoopArray(2017,e[0])||[]),a.push(this.getLoopArray(1,e[1])||[]);var r=this.getMonthDay(e[0],e[1])||[],i=r.indexOf(e[2]);return i>-1&&a.push(r.slice(0,i+1)),a.push(this.getLoopArray(0,e[3])||[]),a.push(this.getLoopArray(0,e[4])||[]),a.forEach((function(a,r){t.push(a.indexOf(e[r]))})),{dateTimeArray:a,dateTimeIndex:t}},getCurDate:function(){var e=new Date;return[this.formatNumber(e.getFullYear()),this.formatNumber(e.getMonth()+1),this.formatNumber(e.getDate()),this.formatNumber(e.getHours()),this.formatNumber(e.getMinutes())]},getMonthDay:function(e,t){var a=e%400==0||e%4==0&&e%100!=0,r=null;switch(t){case"01":case"03":case"05":case"07":case"08":case"10":case"12":r=this.getLoopArray(1,31);break;case"04":case"06":case"09":case"11":r=this.getLoopArray(1,30);break;case"02":r=a?this.getLoopArray(1,29):this.getLoopArray(1,28);break;default:r="月份格式不正确，请重新输入！"}return r},getLoopArray:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[],r=e;r<=t;r++)a.push(this.formatNumber(r));return a},formatNumber:function(e){return e<10?"0".concat(e):e}});
},{isPage:true,isComponent:true,currentFile:'pages/glu_upload/index.js'});require("pages/glu_upload/index.js");