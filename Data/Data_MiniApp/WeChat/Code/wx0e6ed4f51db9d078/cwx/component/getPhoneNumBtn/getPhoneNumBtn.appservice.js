$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'getPhoneNumber'])
Z([[7],[3,'btnClassName']])
Z([[7],[3,'disableBtn']])
Z([[7],[3,'showLoading']])
Z(z[0])
Z([3,'left'])
Z([3,'middle'])
Z([[7],[3,'isCountdown']])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./cwx/component/getPhoneNumBtn/getPhoneNumBtn.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var eJE=_mz(z,'button',['bindgetphonenumber',0,'class',1,'disabled',1,'loading',2,'openType',3],[],e,s,gg)
var oLE=_n('slot')
_rz(z,oLE,'name',5,e,s,gg)
_(eJE,oLE)
var xME=_n('slot')
_rz(z,xME,'name',6,e,s,gg)
_(eJE,xME)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,7,e,s,gg)){bKE.wxVkey=1
}
var oNE=_n('slot')
_rz(z,oNE,'name',8,e,s,gg)
_(eJE,oNE)
bKE.wxXCkey=1
_(r,eJE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cwx/component/getPhoneNumBtn/getPhoneNumBtn.wxml'] = [$gwx_XC_10, './cwx/component/getPhoneNumBtn/getPhoneNumBtn.wxml'];else __wxAppCode__['cwx/component/getPhoneNumBtn/getPhoneNumBtn.wxml'] = $gwx_XC_10( './cwx/component/getPhoneNumBtn/getPhoneNumBtn.wxml' );
	;__wxRoute = "cwx/component/getPhoneNumBtn/getPhoneNumBtn";__wxRouteBegin = true;__wxAppCurrentFile__="cwx/component/getPhoneNumBtn/getPhoneNumBtn.js";define("cwx/component/getPhoneNumBtn/getPhoneNumBtn.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../cwx"),t=e.cwx,s=e.__global,o="cwx_getPhoneNumBtn_timer";Component({options:{multipleSlots:!0,styleIsolation:"shared"},properties:{limitTriggerCGP:{type:Boolean,value:!1},sourceKey:{type:String,value:""},disableLoading:{type:Boolean,value:!0},btnLoadingText:{type:String,value:"loading 中，请稍候"},btnLoadingClassName:{type:String,value:"loading"},btnReadyText:{type:String,value:"手机号快速验证"},btnReadyClassName:{type:String,value:"ready"},btnErrorText:{type:String,value:"校验失败，请使用其他方式验证手机号"},btnErrorClassName:{type:String,value:"error"},limitFrequency:{type:Number,optionalTypes:[Boolean],value:60}},data:{passCheck:!1,isInit:!0,disableBtn:!0,showLoading:!0,content:"",countdown:0,isCountdown:!1,btnClassName:""},lifetimes:{created:function(){},attached:function(){t.sendUbtByPage.ubtTrace("mkt_getPhoneNumber_load",{launchtime:(new Date).getTime(),source:this.properties.sourceKey,type:"getPhoneNumber"}),this.initCountDown=this.getStoreCountDown(),this.checkSource("init")},detached:function(){this.timer=null,this.setStoreCountDown()}},methods:{setStoreCountDown:function(){var e=t.getStorageSync(o);if(e)try{e=JSON.parse(e)}catch(t){console.error(t),e={}}else e={};e[this.properties.sourceKey]=this.data.countdown,t.setStorageSync(o,JSON.stringify(e))},getStoreCountDown:function(){var e=t.getStorageSync(o);if(e)try{e=JSON.parse(e)}catch(t){console.error(t),e={}}else e={};return e&&this.properties.sourceKey&&e[this.properties.sourceKey]||0},setLoadingStatus:function(){this.setData({disableBtn:!0,showLoading:!this.properties.disableLoading,btnClassName:this.properties.btnLoadingClassName,content:this.properties.btnLoadingText}),this.triggerEventByStatus("loading","正在校验 sourceKey")},triggerEventByStatus:function(e,t){this.triggerEvent("clistenbtnstatus",{status:e,message:t,sourceKey:this.properties.sourceKey}),this.properties.limitTriggerCGP||this.triggerEvent("cgetphonenumber",{status:e,message:t,sourceKey:this.properties.sourceKey})},setReadyStatus:function(){this.setData({disableBtn:!1,showLoading:!1,btnClassName:this.properties.btnReadyClassName,content:this.properties.btnReadyText}),this.triggerEventByStatus("ready","sourceKey 校验成功，可使用手机号快速校验功能")},setErrorStatus:function(e){this.setData({disableBtn:!0,showLoading:!1,btnClassName:this.properties.btnErrorClassName,content:this.properties.btnErrorText}),this.triggerEventByStatus("error",e)},getPhoneNumber:function(e){var s=e&&e.detail||{},o=s.errMsg,r=void 0===o?"":o,i=s.code,n=void 0===i?"":i;t.sendUbtByPage.ubtTrace("mkt_getPhoneNumber_click",{launchtime:(new Date).getTime(),type:"getPhoneNumber",source:this.properties.sourceKey,code:n,resMsg:r}),"getPhoneNumber:ok"===e.detail.errMsg?(this.triggerEvent("cgetphonenumber",Object.assign(e,{sourceKey:this.properties.sourceKey,userAllow:!0})),this.checkSource()):this.triggerEvent("cgetphonenumber",Object.assign(e,{userAllow:!1}))},checkSource:function(e){var o=this;this.setLoadingStatus();var r=this.properties.sourceKey;console.log("%c 开始校验 sourceKey:","color:red;",r);var i={sourceKey:this.properties.sourceKey,thirdpartPlatformName:"WECHAT",thirdpartAppId:s.appId};"init"===e&&(i.sceneType=1),t.request({url:"/restapi/soa2/29052/checkSourceKey",data:i,method:"POST",success:function(e){console.log("checkSourceKey success:",e),o.handleCheckResult(e)},fail:function(e){console.log("checkSourceKey fail:",e),o.handleCheckResult(e)}})},handleCheckResult:function(e){var t=e&&e.data||{};if(0===t.resultCode&&t.result&&t.result.valid)return console.log("%c sourceKey 校验通过，可以获取手机号","color:green;"),this.data.passCheck=!0,this.setReadyStatus(),void this.handleCountDown();console.log("%c sourceKey 校验失败，按钮不可用","color:red;"),this.data.passCheck=!1,this.setErrorStatus(t.result&&t.result.message||t.resultMessage||"sourceKey 校验失败，请检查入参的 sourceKey 是否正确")},handleCountDown:function(){var e=this,t=this.properties.limitFrequency;if("boolean"==typeof t&&!t)return this.data.isInit=!1,void this.setReadyStatus();if(this.data.isInit){if(this.data.isInit=!1,!this.initCountDown)return void this.setReadyStatus();this.setData({isCountdown:!0,countdown:this.initCountDown})}0===this.data.countdown&&this.setData({isCountdown:!0,countdown:this.properties.limitFrequency}),this.timer=setTimeout((function(){var t=e.data.countdown-1;e.setData({countdown:t},(function(){e.data.countdown>0?e.handleCountDown():(e.setData({isCountdown:!1}),e.setReadyStatus())}))}),1e3)}}});
},{isPage:false,isComponent:true,currentFile:'cwx/component/getPhoneNumBtn/getPhoneNumBtn.js'});require("cwx/component/getPhoneNumBtn/getPhoneNumBtn.js");