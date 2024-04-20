$gwx_XC_55=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_55 || [];
function gz$gwx_XC_55_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'subscribe'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_55=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_55=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_55_1()
var cIO=_n('slot')
_rz(z,cIO,'catchtap',0,e,s,gg)
_(r,cIO)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_55";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_55();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.wxml'] = [$gwx_XC_55, './miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.wxml'] = $gwx_XC_55( './miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.js";define("miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/objectSpread2"),t=o(require("@tmsfe/tms-core")),r=o(require("@tmsfe/tms-runtime")),n=o(require("../platformUtils"));function o(e){return e&&e.__esModule?e:{default:e}}Component({properties:{mode:{type:String,value:"single"},couponId:{type:String},stockId:{type:String},coupons:{type:Object},useScene:{type:String}},subscribing:!1,methods:{subscribe:function(){var e=this;if(!this.subscribing){this.subscribing=!0;var t,r,n,o=this.checkProperty(),s=o.pass,c=o.msg;if(!s)return this.triggerEvent("subscribe-end",{subscribeSuccess:!1,msg:c}),void(this.subscribing=!1);this.invokeWxSubscribe().then((function(t){var r=t.tmplIds,n=t.res,o=r&&r[0];return!(!n||"accept"!==n[o])||(e.log("warn","订阅发生错误",t),!1)})).catch((function(t){return e.log("error","订阅发生错误",t),!1})).then((function(r){return(t=r)?(wx.showLoading({title:"",mask:!0}),e.reportSubscribeStatus()):{success:!1}})).then((function(o){var s=o.success,c=o.couponStr,u=void 0===c?"":c;r=s,n=t?r?"订阅成功":"上报订阅状态失败":"订阅不成功",wx.hideLoading(),e.subscribing=!1;var i=e.data,a=i.mode,p=i.useScene;e.dataReport({26:"8",27:"8012",36:a,37:u,38:String(t),39:String(r),40:p}),e.triggerEvent("subscribe-end",{subscribeSuccess:t,reportSuccess:r,msg:n})}))}},checkProperty:function(){var e=this.data,t=e.mode,r=e.stockId,n=e.couponId,o=e.coupons;if("batch"!==t){var s=!(!r||!n);return{pass:s,msg:s?"ok":"缺少必填代金券属性"}}if(!Array.isArray(o))return{pass:!1,msg:"coupons参数不合法"};var c=o.every((function(e){return e.stockId&&e.couponId}));return{pass:c,msg:c?"ok":"部分代金券参数不合法"}},invokeWxSubscribe:function(){var e=this;return new Promise((function(t,r){var o={wx65cc950f42e8fff1:["mxkBqolsih6Ox4UOgZDsjbKCtmNXhJw7SUcxLPdP8VI"]}[n.default.getAppId()];o?wx.requestSubscribeMessage({tmplIds:o,complete:function(r){var n=r.errCode,s=r.errMsg;e.dataReport({26:"8",27:"800I",36:"couponRemind",37:o.join(","),38:n,39:s,40:JSON.stringify(r)}),t({tmplIds:o,res:r})},fail:r}):r("No template ids")}))},reportSubscribeStatus:function(){var n,o,s,c=this;return r.default.getOpenId().then((function(r){var u={wxOpenId:r};if("batch"!==c.data.mode)o="user/coupon/status/subscribe",s={couponId:c.data.couponId,stockId:c.data.stockId};else{o="user/coupon/status/subscribepkg";var i=c.data.coupons.concat().reverse().filter((function(e,t,r){return!r.slice(t+1).find((function(t){return t.couponId===e.couponId}))})).reverse().map((function(e){return"".concat(e.stockId,",").concat(e.couponId)})).join(";");s={coupons:i}}return n=e(e({},u),s),t.default.createRequest().post(o,n)})).then((function(e){return 0===e.errCode||(c.log("error","上报订阅状态错误",o,n,e),!1)})).catch((function(e){return c.log("error","上报订阅状态失败",o,n,e),!1})).then((function(e){return{success:e,couponStr:s.coupons||"".concat(s.stockId,",").concat(s.couponId)}}))},dataReport:function(e){var r,n=null===(r=t.default.getReporter())||void 0===r?void 0:r.report;n&&n(e)},log:function(e){for(var r=t.default.getLogManager(),n=t.default.getRealtimeLogManager(),o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];r&&r[e]&&r[e].apply(r,s),n&&n[e]&&n[e].apply(n,s)}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.js'});require("miniprogram_npm/@tmsfe/tms-ui/subscribe-coupon-status/subscribe-coupon-status.js");