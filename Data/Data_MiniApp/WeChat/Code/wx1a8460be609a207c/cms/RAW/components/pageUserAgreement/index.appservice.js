$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pua-box'])
Z([3,'pAtidx_1'])
Z([[7],[3,'show']])
Z([[7],[3,'modal']])
Z([[7],[3,'showHome']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./cms/RAW/components/pageUserAgreement/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var xAC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,2,e,s,gg)){oBC.wxVkey=1
var fCC=_v()
_(oBC,fCC)
if(_oz(z,3,e,s,gg)){fCC.wxVkey=1
var cDC=_v()
_(fCC,cDC)
if(_oz(z,4,e,s,gg)){cDC.wxVkey=1
}
cDC.wxXCkey=1
}
fCC.wxXCkey=1
}
var hEC=_n('slot')
_(xAC,hEC)
oBC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms/RAW/components/pageUserAgreement/index.wxml'] = [$gwx_XC_8, './cms/RAW/components/pageUserAgreement/index.wxml'];else __wxAppCode__['cms/RAW/components/pageUserAgreement/index.wxml'] = $gwx_XC_8( './cms/RAW/components/pageUserAgreement/index.wxml' );
	;__wxRoute = "cms/RAW/components/pageUserAgreement/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms/RAW/components/pageUserAgreement/index.js";define("cms/RAW/components/pageUserAgreement/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/slicedToArray");require("../../titan.bootstrap.js");var e=global.bc("platform","cms"),a=require("../../titan-scoped-env.js"),n=a.requirePlatform("cms_sdk").main.wm;a.Component({data:{show:!1,modal:!1,showHome:!1},pageLifetimes:{show:function(){this.pageHided&&!this.modalDone&&this.check()},hide:function(){this.pageHided=!0}},attached:function(){this.isAttached=!0,this.check(),this.setDataOnAttachedAfter()},methods:{check:function(){var t=this;this.checking||(this.checking=!0,this.onDataReady((function(e,a){var i;if(!e||!e.length||!a)return t.checking=!1,t.modalDone=!0,void n.log("无页面协议弹框配置，暂不渲染页面协议遮罩");var o=a.pagename||(null===(i=a.data)||void 0===i?void 0:i.pagename)||"";o&&e.some((function(t){return t===o}))?(t.setDataOnAttachedAfter({show:!0,showHome:"cms-index"!==o}),t.checking=!1,n.log("显示协议白屏遮罩"),n.showUserAgreementModal({id:t.getPageId()}).then((function(e){n.log("showUserAgreementModal触发结果："+e),e?(t.modalDone=!0,t.setDataOnAttachedAfter({show:!1})):t.setDataOnAttachedAfter({modal:!0})})).catch((function(){t.modalDone=!0,t.setDataOnAttachedAfter({show:!1})}))):(t.checking=!1,t.modalDone=!0,n.log((o?"当前页面refer不在配置中":"当前页面refer值为空")+"，暂不渲染页面协议遮罩","PUA",a))})))},toHome:function(){n.navigator("/cms_design/index")},setDataOnAttachedAfter:function(t){if(this.isAttached){if(t)return void this.setData(Object.assign(this.waitData||{},t));this.setData(this.waitData||{})}else this.waitData=Object.assign(this.waitData||{},t)},fireCb:function(t){t()},onDataReady:function(e){var i=this,o=n.getCurrentWOSSettingInfoSync("popupPrivacyAggrementPage"),s=n.lib.getOwnerPageSync(this);if(!s){var r,h=null===(r=a.getCurrentPages())||void 0===r?void 0:r[0];h&&h.getPageId()===this.getPageId()&&(s=h)}if(o&&s)return this.fireCb((function(){return e(o,s)}));a.Promise.all([n.getCurrentWOSSettingInfo("popupPrivacyAggrementPage"),n.lib.getOwnerPage(this)]).then((function(a){var n=t(a,2),o=n[0],s=n[1];i.fireCb((function(){return e(o,s)}))}))},showAgreement:function(){var t=this;n.showUserAgreementModal().then((function(e){n.log("showUserAgreementModal触发结果："+e),e&&(t.modalDone=!0,t.setDataOnAttachedAfter({show:!1}))}))}}}),global.ec(e);
},{isPage:false,isComponent:true,currentFile:'cms/RAW/components/pageUserAgreement/index.js'});require("cms/RAW/components/pageUserAgreement/index.js");