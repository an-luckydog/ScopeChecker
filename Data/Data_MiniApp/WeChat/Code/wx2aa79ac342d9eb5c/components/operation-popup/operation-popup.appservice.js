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
Z([[7],[3,'a']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./components/operation-popup/operation-popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var hMB=_v()
_(r,hMB)
if(_oz(z,0,e,s,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/operation-popup/operation-popup.wxml'] = [$gwx_XC_10, './components/operation-popup/operation-popup.wxml'];else __wxAppCode__['components/operation-popup/operation-popup.wxml'] = $gwx_XC_10( './components/operation-popup/operation-popup.wxml' );
	;__wxRoute = "components/operation-popup/operation-popup";__wxRouteBegin = true;__wxAppCurrentFile__="components/operation-popup/operation-popup.js";define("components/operation-popup/operation-popup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),r=require("../../@babel/runtime/helpers/asyncToGenerator"),t=require("../../common/vendor.js");require("../../store/modules/user.js");var u=require("../../store/modules/draw.js");require("../../store/modules/api.js"),require("../../store/modules/Aiface.js"),require("../../store/modules/buy.js"),require("../../store/modules/track.js"),require("../../store/modules/router.js"),require("../../store/modules/system.js"),require("../../store/modules/faceTest.js");var s=require("../../utils/td_sdk/ta_sdk.js");require("../../utils/getClientId/ClientIdHelper.js"),require("../../utils/getClientId/CRC32.js"),require("../../utils/getClientId/AppletInfoHelper.js"),require("../../config.js"),require("../../utils/formData/formdata.js"),require("../../utils/formData/mimeMap.js"),require("../../utils/index.js"),require("../../api/account.js"),require("../../utils/request2.js"),require("../../utils/luch-request/core/Request.js"),require("../../utils/luch-request/core/dispatchRequest.js"),require("../../utils/luch-request/adapters/index.js"),require("../../utils/luch-request/helpers/buildURL.js"),require("../../utils/luch-request/utils.js"),require("../../utils/luch-request/core/buildFullPath.js"),require("../../utils/luch-request/helpers/isAbsoluteURL.js"),require("../../utils/luch-request/helpers/combineURLs.js"),require("../../utils/luch-request/core/settle.js"),require("../../utils/luch-request/core/InterceptorManager.js"),require("../../utils/luch-request/core/mergeConfig.js"),require("../../utils/luch-request/core/defaults.js"),require("../../utils/luch-request/utils/clone.js"),require("../../api/index.js"),require("../../utils/request.js"),require("../../apiConfig.js"),require("../../utils/gravityInfinite/gravityInfinite.js"),require("../../utils/gravityInfinite/gravityengine.uniapp.js"),require("../../utils/td_sdk/thinkingdata.wx.min.js"),require("../../utils/td_sdk/ta_consts.js");var i=t.defineComponent({__name:"operation-popup",props:{from_source:null},setup:function(i){var o=i,n=u.useDrawStore(),l=function(){n.operationShowPopup.close(c.value,o.from_source)},a=function(){var u=r(e().mark((function r(){var u,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=t.index.getStorageSync("LOARID"),i=n.operationShowPopup,s.trackClick("PopUpClick","","".concat(c.value),"","","".concat(o.from_source)),!u||!i.linkId){e.next=12;break}return e.prev=2,e.next=5,n.getClassifyListLora(i.linkId);case 5:if(e.t0=e.sent,!e.t0){e.next=8;break}t.index.navigateTo({url:"/pages/selected-template/index?id=".concat(i.linkId)});case 8:e.next=12;break;case 10:e.prev=10,e.t1=e.catch(2);case 12:i.close(c.value,o.from_source);case 13:case"end":return e.stop()}}),r,null,[[2,10]])})));return function(){return u.apply(this,arguments)}}();t.ref("");var c=t.ref("");t.ref("");var p=t.ref(null);return t.onMounted((function(){var e=Date.now(),r=n.operationShowPopup,t=r.lastShowTime,u=r.rollTime,s=function(){r.show||(r.intervalId&&(clearInterval(r.intervalId),r.intervalId=null),p.value&&(clearTimeout(p.value),p.value=null),r.open(c.value,o.from_source),r.lastShowTime=Date.now(),r.intervalId=setInterval((function(){r.open(c.value,o.from_source),r.lastShowTime=Date.now()}),u))};if(t)if(e-t>=u)s();else{var i=u-(e-t);p.value=setTimeout(s,i)}else r.open(c.value,o.from_source),r.lastShowTime=Date.now(),r.intervalId=setInterval((function(){r.open(c.value,o.from_source),r.lastShowTime=Date.now()}),u)})),t.onUnmounted((function(){n.operationShowPopup.intervalId&&(clearInterval(n.operationShowPopup.intervalId),n.operationShowPopup.intervalId=null),clearTimeout(p.value),p.value=null})),function(e,r){return t.e({a:t.unref(n).operationShowPopup.show},t.unref(n).operationShowPopup.show?{b:t.unref(n).operationShowPopup.banner,c:t.o(a),d:t.o(l)}:{})}}}),o=t._export_sfc(i,[["__scopeId","data-v-a7032994"]]);wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'components/operation-popup/operation-popup.js'});require("components/operation-popup/operation-popup.js");