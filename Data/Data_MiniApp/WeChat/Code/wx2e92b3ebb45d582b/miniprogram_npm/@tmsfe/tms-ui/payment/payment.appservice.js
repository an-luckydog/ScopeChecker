$gwx_XC_44=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_44 || [];
function gz$gwx_XC_44_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'paymentLayer']],[3,'length']])
Z([3,'payment-wrap'])
Z([3,'tapBg'])
Z([3,'payment-layer-bg'])
Z([a,[3,'background-color: '],[[6],[[6],[[7],[3,'paymentLayer']],[1,0]],[3,'backgroundColor']],[3,';']])
Z([[2,'>'],[[6],[[7],[3,'paymentLayer']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_44=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_44=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/payment/payment.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_44_1()
var eBM=_v()
_(r,eBM)
if(_oz(z,0,e,s,gg)){eBM.wxVkey=1
var bCM=_n('view')
_rz(z,bCM,'class',1,e,s,gg)
var oDM=_mz(z,'view',['catchtap',2,'class',1,'style',2],[],e,s,gg)
var xEM=_v()
_(oDM,xEM)
if(_oz(z,5,e,s,gg)){xEM.wxVkey=1
}
xEM.wxXCkey=1
_(bCM,oDM)
var oFM=_n('slot')
_(bCM,oFM)
_(eBM,bCM)
}
eBM.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_44";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_44();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/payment/payment.wxml'] = [$gwx_XC_44, './miniprogram_npm/@tmsfe/tms-ui/payment/payment.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/payment/payment.wxml'] = $gwx_XC_44( './miniprogram_npm/@tmsfe/tms-ui/payment/payment.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/payment/payment";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/payment/payment.js";define("miniprogram_npm/@tmsfe/tms-ui/payment/payment.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/slicedToArray"),t=u(require("../../../../@babel/runtime/regenerator")),r=require("../../../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../../../@babel/runtime/helpers/objectSpread2"),n=u(require("@tmsfe/tms-core"));function u(e){return e&&e.__esModule?e:{default:e}}Component({properties:{paymentParam:{type:Object},businessParam:{type:Object}},data:{currentStep:0,paymentLayer:[]},lifetimes:{},methods:{api:function(){return this.API||(this.API=n.default.createRequest()),this.API},report:function(e){var t;this.REPORT||(this.REPORT=null===(t=n.default.getReporter())||void 0===t?void 0:t.report);var r=a({26:"AP"},e);this.REPORT(r)},fetchConfig:function(){var e=this;return r(t.default.mark((function r(){var a,u,i,s,o,c,l,p;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.data.businessParam,u=a.bussClassify,i=a.from,s=a.filter,o=void 0===s?"":s,t.next=4,wx.getLaunchOptionsSync();case 4:return c=t.sent,l=c.scene,t.next=8,null===n.default||void 0===n.default?void 0:n.default.getConfig("/sinan/payment/config",{bussClassify:u,scene:l,from:i,filter:o});case 8:return p=t.sent,t.abrupt("return",p);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",{});case 15:case"end":return t.stop()}}),r,null,[[0,12]])})))()},wxPayment:function(e){return r(t.default.mark((function r(){var a;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,wx.requestPayment(e);case 3:return a=t.sent,t.abrupt("return",a);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),r,null,[[0,7]])})))()},requestPayment:function(a){var n=arguments,u=this;return r(t.default.mark((function r(){var i,s,o,c,l,p,d,f,m,v,h,y,b,P,g,w,x,k,C,S,R,T;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.length>1&&void 0!==n[1]?n[1]:{},s=a.timeStamp,o=a.nonceStr,c=a.paySign,l=a.signType,p=a.prepayId,(d={timeStamp:s,nonceStr:o,paySign:c,signType:l}).package=a.package,u.setData({paymentParam:a,businessParam:i}),!d.package&&p&&(d.package="prepay_id=".concat(p)),t.next=8,Promise.all([u.wxPayment(d),u.fetchConfig(i)]);case 8:if(f=t.sent,m=e(f,2),v=m[0],h=m[1],y=function(){},b=a.success,P=void 0===b?y:b,g=a.fail,w=void 0===g?y:g,x=a.complete,k=void 0===x?y:x,C=i.bussClassify,S=i.orderId,R=i.from,u.report({27:"AP010",36:null==v?void 0:v.errMsg,37:null==h?void 0:h.type,38:C,39:S,40:R}),"requestPayment:ok"!==(null==v?void 0:v.errMsg)){t.next=26;break}if(u.reportOrderPaid(i),null==h||!h.length){t.next=22;break}return u.report({27:"AP006",38:C,39:S,40:R}),t.next=20,u.showPaymentCallback(h);case 20:T=t.sent,v.tap=T.tap;case 22:P(v),k(v),t.next=29;break;case 26:throw w(v),k(v),new Error(null==v?void 0:v.errMsg);case 29:return t.abrupt("return",v);case 30:case"end":return t.stop()}}),r)})))()},showPaymentCallback:function(e){var t=this;return new Promise((function(r){t.paymentCallbackResolve=r;var n=e.map((function(e){return a({width:"560rpx",backgroundColor:"rgba(0, 0, 0, 0.5)"},e)}));t.setData({paymentLayer:n})}))},hidePaymentCallback:function(){this.setData({paymentLayer:[]})},onScroll:function(e){var t;"touch"===e.detail.source&&this.setData({currentStep:(null==e||null===(t=e.detail)||void 0===t?void 0:t.current)||0})},tapImg:function(e){var t,r;this.report({27:"AP007"});var a=(null==e||null===(t=e.currentTarget)||void 0===t||null===(r=t.dataset)||void 0===r?void 0:r.idx)||0,n=this.data.paymentLayer[a],u=n.type,i=n.url;if("mp"===u)wx.redirectTo({url:i});else if("h5"===u){wx.navigateTo({url:"".concat("/modules/x/webcontainer/webcontainer","?disableShare=true&url=").concat(encodeURIComponent(i))})}},tapClose:function(){this.hidePaymentCallback(),this.paymentCallbackResolve({tap:"close"}),this.report({27:"AP008"})},tapBg:function(){this.report({27:"AP009"})},reportOrderPaid:function(e){null!=e&&e.orderId&&this.api().post("order/report",{orderId:null==e?void 0:e.orderId,payStatus:1,updateTime:Date.now()})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/payment/payment.js'});require("miniprogram_npm/@tmsfe/tms-ui/payment/payment.js");