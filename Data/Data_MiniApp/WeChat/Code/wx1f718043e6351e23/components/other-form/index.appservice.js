$gwx_XC_53=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_53 || [];
function gz$gwx_XC_53_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'doRequest'])
Z([3,'onSubmit'])
Z([3,'getOption'])
Z([3,'initOption'])
Z([3,'sendCode'])
Z([[7],[3,'formFooter']])
Z([[7],[3,'otherFormList']])
Z([3,'dialog'])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_53=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_53=true;
var x=['./components/other-form/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_53_1()
var oLT=_mz(z,'form-box',['bind:doRequest',0,'bind:formSubmit',1,'bind:getOption',1,'bind:initOption',2,'bind:sendCode',3,'footer',4,'formConf',5,'mode',6,'privacy',7],[],e,s,gg)
_(r,oLT)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_53";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_53();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/other-form/index.wxml'] = [$gwx_XC_53, './components/other-form/index.wxml'];else __wxAppCode__['components/other-form/index.wxml'] = $gwx_XC_53( './components/other-form/index.wxml' );
	;__wxRoute = "components/other-form/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/other-form/index.js";define("components/other-form/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator");require("../../@babel/runtime/helpers/Arrayincludes");var a=require("../../@babel/runtime/helpers/objectSpread2"),i=require("../../utils/util"),n=getApp(),r={act:{name:"线下会议"},register:{name:"小程序注册",refer:1},consult:{name:"上云咨询",refer:2},download:{name:"资料下载",refer:3},enroll:{name:"报名",refer:4},scene:{name:"场景库",refer:3},brand:{name:"品牌专题",refer:5},meet_reserve:{name:"云上直播 - 预约报名",refer:"6"},cooper:{name:"生态合作"}};Component({properties:{formList:{type:Array,value:[]},info:{type:Object,value:{}},formName:{type:String,value:""}},data:{lastContentId:"",lastNameOfPage:"",CampaignID:"",isShow:!0,otherFormList:[]},lifetimes:{attached:function(){this.init()}},methods:{init:function(){var e=this.data.formList;this.setData({otherFormList:this.converterOfPolarisForm(e)})},converterOfPolarisForm:function(e){var t=this,i=[];return e.sort((function(e,t){return e.seq-t.seq})),e.forEach((function(e){var n=e.historyData||e.default||"";e.defaultValue=n;var r={};e.isCode?r={name:"phoneGroup",formType:"group",label:e.label,required:e.required,isHideLabel:!0,children:[a({name:e.name,label:e.label||e.name,required:e.required,placeholder:e.desc||"",value:n},t.polarisFieldFilter(e)),{name:"code",label:"验证码",isHideLabel:!0,dependentPropertyName:e.name,required:e.required,placeholder:"请输入验证码",layout:"inline",maxLength:-1,isCode:!0}]}:("region"===e.name&&i.push({name:"__region_combine",label:"区域",required:e.required,placeholder:"请选择区域",value:t.getDefaultValueByName("__region_combine"),skipSubmit:!0,formType:"region"}),r=a({name:e.name,label:e.label||e.name,required:e.required,placeholder:e.desc||"",value:n},t.polarisFieldFilter(e))),i.push(r)})),i},getDefaultValueByName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t},polarisFieldFilter:function(e){var t={};switch(e.type){case"date":t.formType="dateTime";break;case"datetime":t.formType="dateTime",t.dateMode="dateTime";break;case"enum_single":t.formType="picker",t.options=this.polarisGetEnums(e.enum||e.enums,e.enums_hide||[],e.defaultValue);break;case"enum_multiple":t.formType="checkbox",t.checkMulti=!0,t.options=this.polarisGetEnums(e.enum||e.enums,e.enums_hide||[],e.defaultValue);break;case"text":case"textarea":t.formType="textarea",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e);break;case"float":t.formType="input",t.inputType="digit",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e);break;case"int":t.formType="input",t.inputType="number",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e);break;case"image":t.formType="image";break;default:t.formType="input",t.minLength=e.min_len||-1,t.maxLength=e.max_len||-1,t.validExec=this.polarisFiledValidExec(e)}switch(e.name){case"Sub_Industry":t.dependentPropertyName="Industry",t.initOptionRequest=!0,t.dependentShow="all",t.dependentRequiredValue="all";break;case"Industry":this.__field_industry=!0;break;case"region":case"province":case"city":t.dependentPropertyName="__region_combine",t.isCombined=!0,t.dependentShow=[],t.requiredText="请完善地址信息"}return t},polarisFiledValidExec:function(e){var t=[],a=e.reg_pattern;return a&&t.push({type:"custom",rule:a}),t},polarisGetEnums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],n=a.split(",");if(e.constructor===Array)e.forEach((function(e){t.includes(e.id)||i.push({label:e.value,value:e.id,checked:-1!=n.indexOf(String(e.id)),dependentValue:"all"})}));else if(e.constructor===Object)for(var r in e)e.hasOwnProperty(r)&&(t.includes(r)||i.push({label:e[r],value:r,checked:-1!=n.indexOf(String(r)),dependentValue:"all"}));else console.warn("返回枚举值格式有误");return i},sendCode:function(e){var t=e.detail,a=(t.name,t.value),i=t.callback;n.API.formSendCode(a).then(i)},getOption:function(e){var t=e.detail,a=t.name,i=t.value,n=t.callback;t.fieldObject;switch(a){case"company":this.getCompanySearch(i,n)}},initOption:function(e){var t=e.detail,a=t.fieldObject,i=t.callback;switch(a.name){case"Sub_Industry":this.__field_industry&&this.getIndustryOptions(a,i)}},doRequest:function(e){var t=e.detail,a=t.name,i=t.value,r=t.callback;switch(a){case"uploadImage":n.Api.uploadFile({filePath:i}).then((function(e){r(e.content.url)}))}},onSubmit:function(e){var t=e.detail,a=this.data.info,i=a.tplId,o=a.data_type,s=a.type;wx.showLoading({title:"提交数据中"});var u={tplId:i,version:n.globalData.sysInfo.system,__isSecondSilence:1,dataType:o};Object.keys(t).forEach((function(e){var a=t[e];a.skipSubmit||(u[e]=a.value)}));var l=r[s];switch(s){case"act":this.actSubmit(u);break;case"meet_reserve":this.reserveMeet(u);break;case"download":this.leadSubmit(u,l.refer)}},getIndustryOptions:function(){return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),t)})))()},getCompanySearch:function(e,t){var a=(0,i._getStorageData)("comp_".concat(e));a?t(a):n.API.getSearchCompany({keywords:e}).then((function(a){var n=a.content||[];t(n),(0,i._saveStorageData)("comp_".concat(e),n,3e5)}))},actSubmit:function(e){var t=this,a=this.data.info,i=a.actId,r=a.data_id,o=a.data_type;e.actId=i,e.siteId=r,e.refer=o,e.CampaignID=this.data.CampaignID,"act"==this.formInitData.type&&(e.data_id=i,e.data_type=1,e.refer=6),console.log("mark 2",e,this.formInitData),console.log("form submit",e),this.data.submitRequest||(this.data.submitRequest=!0,n.API.formSubmit(e).then((function(e){t.data.submitRequest=!1,0==e.code?(e.content&&1!=e.content.alreadySubmit&&t.qdSubmit(),t.submitCallback()):wx.showToast({title:e.message,icon:"none"})})).catch((function(e){t.data.submitRequest=!1,console.log("form page app.API.formSubmit",e),wx.showToast({title:"请稍后重试",icon:"none"})})))},leadSubmit:function(e,t){var a=this,i=this.data.info,r=i.data_type,o=i.data_id,s=i.industry_id;e.refer=t,e.CampaignID=this.data.CampaignID,3==t||5==t||4==t?(e.data_type=r,e.data_id=o):2==t&&s&&(e.industry_id=s),this.data.submitRequest||(this.data.submitRequest=!0,n.API.formSubmit(e).then((function(e){a.data.submitRequest=!1,0==e.code?(e.content&&1!=e.content.alreadySubmit&&a.qdSubmit(),a.submitCallback()):wx.showToast({title:e.message,icon:"none"})})).catch((function(e){a.data.submitRequest=!1,console.log("form page app.API.formSubmit",e),wx.showToast({title:"请稍后重试",icon:"none"})})))},reserveMeet:function(e){var t=this,a=this.data.info,i=a.data_id,r=a.data_type,o=a.actId;e.meetId=i,e.status=r,e.refer=4,e.data_type=5,e.data_id=o,e.CampaignID=this.data.CampaignID,e.__isSendWxMessage=0,this.data.submitRequest||(this.data.submitRequest=!0,n.API.formSubmit(e).then((function(e){t.data.submitRequest=!1,0==e.code?(e.content&&1!=e.content.alreadySubmit&&t.qdSubmit(),t.submitCallback()):wx.showToast({title:e.message,icon:"none"})})).catch((function(e){t.data.submitRequest=!1,console.log("form page app.API.formSubmit",e),wx.showToast({title:"请稍后重试",icon:"none"})})))},qdSubmit:function(){n.QD.formSubmit("submit_form",{name_of_page:this.data.info.title,SubCampaign:n.QD.getLastNameOfPage(),SubCampaignID:n.QD.getLastContentId(),CampaignID:n.QD.currentParams.CampaignID||"",NameOfCampaign:n.QD.currentParams.NameOfCampaign||""})},submitCallback:function(){wx.hideLoading(),this.triggerEvent("submitSuccess")},closeDialog:function(){this.triggerEvent("closeFormDialog")}}});
},{isPage:false,isComponent:true,currentFile:'components/other-form/index.js'});require("components/other-form/index.js");