$gwx_XC_97=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_97 || [];
function gz$gwx_XC_97_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_97_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_97_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_97_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([[7],[3,'pageTitle']])
Z([3,'c-page'])
Z([[7],[3,'ready']])
Z([3,'doRequest'])
Z([3,'onSubmit'])
Z([3,'getOption'])
Z([3,'initOption'])
Z([3,'sendCode'])
Z([[7],[3,'formFooter']])
Z([[7],[3,'formList']])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_97_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_97_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_97=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_97=true;
var x=['./pages/form/activity/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_97_1()
var b9AB=_mz(z,'header',['onlyTitle',0,'title',1],[],e,s,gg)
_(r,b9AB)
var o0AB=_n('view')
_rz(z,o0AB,'class',2,e,s,gg)
var xABB=_v()
_(o0AB,xABB)
if(_oz(z,3,e,s,gg)){xABB.wxVkey=1
var oBBB=_mz(z,'form-box',['bind:doRequest',4,'bind:formSubmit',1,'bind:getOption',2,'bind:initOption',3,'bind:sendCode',4,'footer',5,'formConf',6,'privacy',7],[],e,s,gg)
_(xABB,oBBB)
}
else{xABB.wxVkey=2
var fCBB=_n('loading')
_(xABB,fCBB)
}
xABB.wxXCkey=1
xABB.wxXCkey=3
xABB.wxXCkey=3
_(r,o0AB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_97";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_97();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/form/activity/index.wxml'] = [$gwx_XC_97, './pages/form/activity/index.wxml'];else __wxAppCode__['pages/form/activity/index.wxml'] = $gwx_XC_97( './pages/form/activity/index.wxml' );
	;__wxRoute = "pages/form/activity/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/form/activity/index.js";define("pages/form/activity/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator");require("../../../@babel/runtime/helpers/Arrayincludes");var a=require("../../../@babel/runtime/helpers/objectSpread2"),n=require("../../../utils/util"),i=getApp();Page({data:{pageTitle:"",ready:!1,formList:[],lastContentId:"",lastNameOfPage:"",CampaignID:"",formName:"",formFooter:{},wxTmpId:"",jumpPath:""},onLoad:function(e){var t=this;console.log("page form index options",e);var n=decodeURIComponent(e.scene);if(!n||"undefined"===n)throw new Error("scene is undefined");i.loginCallback().then((function(){i.API.uuidToParams(n).then((function(e){if(console.log("🚀 ~ file: index.js ~ line 32 ~ .then ~ res",e),0!=e.code||!e.content.params)throw new Error("scene is invalid");var n=e.content.paramsObj||{};t.setData({formInitData:a(a({},n),{},{tplId:n.partnerFormApiName})}),i.QD.parseAppLaunchOptions(e.content.paramsObj);try{t.checkFormSubmit()}catch(e){console.error(e)}})).catch((function(e){throw console.log("🚀 ~ file: index.js ~ line 41 ~ app.loginCallback ~ err",e),new Error("scene is invalid")}))}))},onShow:function(){},checkFormSubmit:function(){var e=this,t=this.data.formInitData,a=t.tplId,n=t.partnerActivityId;if(!a)throw new Error("~ line 63: tplId is not found");i.API.checkFormSubmitDownload("",n,"7",a,wx.getStorageSync("qdVisitId")).then((function(t){if(0==t.code&&(e.setData({wxTmpId:t.content.wxTmpId,jumpPath:t.content.jumpPath}),1==t.content.isSubmit))return e.submitCallback();e.getFormTpl()}))},getFormTpl:function(){var e=this,t=this.data.formInitData.tplId;if(!t)throw new Error("tplId is not found");i.API.getFormTpl(t,"7").then((function(a){console.log("getFormTpl res",a),e.setData({ready:!0,pageTitle:a.content.display_label,formDesc:a.content.desc,formBanner:a.content.pic_url,formList:e.converterOfPolarisForm(a.content.itemList),formName:a.content.title,formFooter:a.content.footer}),i.QD.track("contentView",{ContentID:t,menu:i.globalData.currentTab,name_of_page:a.content.title})})).catch((function(e){console.log("getFormTpl err",e)}))},converterOfPolarisForm:function(e){var t=this,n=[];return e.sort((function(e,t){return e.seq-t.seq})),e.forEach((function(e){var i=e.historyData||e.default||"";e.defaultValue=i;var r={};e.isCode?r={name:"phoneGroup",formType:"group",label:e.label,required:e.required,isHideLabel:!0,children:[a({name:e.name,label:e.label||e.name,required:e.required,placeholder:e.desc||"",value:i},t.polarisFieldFilter(e)),{name:"code",label:"验证码",isHideLabel:!0,dependentPropertyName:e.name,required:e.required,placeholder:"请输入验证码",layout:"inline",maxLength:-1,isCode:!0}]}:("region"===e.name&&n.push({name:"__region_combine",label:"区域",required:e.required,placeholder:"请选择区域",value:t.getDefaultValueByName("__region_combine"),skipSubmit:!0,formType:"region"}),r=a({name:e.name,label:e.label||e.name,required:e.required,placeholder:e.desc||"",value:i},t.polarisFieldFilter(e))),n.push(r)})),n},getDefaultValueByName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t},polarisFieldFilter:function(e){var t={};switch(e.type){case"date":t.formType="dateTime";break;case"datetime":t.formType="dateTime",t.dateMode="dateTime";break;case"enum_single":t.formType="picker",t.options=this.polarisGetEnums(e.enum||e.enums,e.enums_hide||[],e.defaultValue);break;case"enum_multiple":t.formType="checkbox",t.checkMulti=!0,t.options=this.polarisGetEnums(e.enum||e.enums,e.enums_hide||[],e.defaultValue);break;case"text":case"textarea":t.formType="textarea",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e);break;case"float":t.formType="input",t.inputType="digit",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e);break;case"int":t.formType="input",t.inputType="number",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e);break;case"image":t.formType="image";break;default:t.formType="input",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e)}switch(e.name){case"Sub_Industry":t.dependentPropertyName="Industry",t.initOptionRequest=!0,t.dependentShow="all",t.dependentRequiredValue="all";break;case"Industry":this.__field_industry=!0;break;case"region":case"province":case"city":t.dependentPropertyName="__region_combine",t.isCombined=!0,t.dependentShow=[],t.requiredText="请完善地址信息"}return t},polarisFiledValidExec:function(e){var t=[],a=e.reg_pattern;return a&&t.push({type:"custom",rule:a}),t},polarisGetEnums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=[],i=a.split(",");if(e.constructor===Array)e.forEach((function(e){t.includes(e.id)||n.push({label:e.value,value:e.id,checked:-1!=i.indexOf(String(e.id)),dependentValue:"all"})}));else if(e.constructor===Object)for(var r in e)e.hasOwnProperty(r)&&(t.includes(r)||n.push({label:e[r],value:r,checked:-1!=i.indexOf(String(r)),dependentValue:"all"}));else console.warn("返回枚举值格式有误");return n},getOption:function(e){var t=e.detail,a=t.name,n=t.value,i=t.callback;t.fieldObject;switch(a){case"company":this.getCompanySearch(n,i)}},initOption:function(e){var t=e.detail,a=t.fieldObject,n=t.callback;switch(a.name){case"Sub_Industry":this.__field_industry&&this.getIndustryOptions(a,n)}},getIndustryOptions:function(a,n){return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("🚀 ~ file: index.js ~ line 339 ~ getIndustryOptions ~ fieldObject, callback",a,n),e.abrupt("return",{});case 2:case"end":return e.stop()}}),t)})))()},getFieldByName:function(e){var t=null;return this.formList.some((function(a){return a.name===e&&(t=a,!0)})),t},getCompanySearch:function(e,t){var a=(0,n._getStorageData)("comp_".concat(e));a?t(a):i.API.getSearchCompany({keywords:e}).then((function(a){var i=a.content||[];t(i),(0,n._saveStorageData)("comp_".concat(e),i,3e5)}))},sendCode:function(e){var t=e.detail,a=(t.name,t.value),n=t.callback;i.API.formSendCode(a).then(n)},doRequest:function(e){var t=e.detail,a=t.name,n=t.value,r=t.callback;switch(a){case"uploadImage":i.Api.uploadFile({filePath:n}).then((function(e){r(e.content.url)}))}},onSubmit:function(e){var t=this,a=e.detail,n=this.data.formInitData;wx.showLoading({title:"提交数据中"});var r={tplId:n.tplId,version:i.globalData.sysInfo.system,dataType:n.dataType,jumpPath:this.data.jumpPath,refer:"7",data_id:n.partnerActivityId};Object.keys(a).forEach((function(e){var t=a[e];t.skipSubmit||(r[e]=t.value)})),console.log("表单提交数据",r,a),this.data.submitRequest||(this.data.submitRequest=!0,this.data.wxTmpId?wx.requestSubscribeMessage({tmplIds:[this.data.wxTmpId],complete:function(){t.submitHandler(r)}}):t.submitHandler(r))},submitHandler:function(e){var t=this;i.API.formSubmit(e).then((function(e){t.data.submitRequest=!1,0==e.code?(t.qdSubmit(),t.submitCallback()):wx.showToast({title:e.message,icon:"none"})})).catch((function(e){t.data.submitRequest=!1,console.log("form page app.API.formSubmit",e),wx.showToast({title:"请稍后重试",icon:"none"})}))},submitCallback:function(){var e=this.data.jumpPath;wx.hideLoading(),wx.redirectTo({url:"/pages/form/info/index?type=activityForm&backUrl=".concat(encodeURIComponent(e))})},_prevStatusRefresh:function(){var e=getCurrentPages(),t=e.length;if(t>1){var a=e[t-2];a.waitStatusRefresh&&a.waitStatusRefresh()}"register"==this.formInitData.type&&i.setRegStatus()},qdSubmit:function(){i.QD.formSubmit("submit_form",{name_of_page:this.data.formName,SubCampaign:this.data.lastNameOfPage,SubCampaignID:this.data.lastContentId})}});
},{isPage:true,isComponent:true,currentFile:'pages/form/activity/index.js'});require("pages/form/activity/index.js");