$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cnpidx_1'])
Z([3,'goodsClick'])
Z([[7],[3,'couponList']])
Z([[7],[3,'currentGoodsId']])
Z([3,'cnpidx_2'])
Z([[2,'==='],[[7],[3,'mode']],[1,'sigle']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([3,'cnpidx_3'])
Z([[2,'==='],[[7],[3,'mode']],[1,'multiple']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var oNE=_n('view')
_rz(z,oNE,'id',0,e,s,gg)
var fOE=_mz(z,'coupon-sigle',['bind:tap',1,'couponList',1,'currentGoodsId',2,'id',3,'visible',4],[],e,s,gg)
_(oNE,fOE)
var cPE=_mz(z,'coupon-multiple',['bind:tap',6,'couponList',1,'currentGoodsId',2,'id',3,'visible',4],[],e,s,gg)
_(oNE,cPE)
_(r,oNE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'] = [$gwx_XC_24, './cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'];else __wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'] = $gwx_XC_24( './cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml' );
	;__wxRoute = "cms_design/RAW/EXTS/ec/components/couponPopup/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/EXTS/ec/components/couponPopup/index.js";define("cms_design/RAW/EXTS/ec/components/couponPopup/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");require("../../titan.bootstrap.js");var e,o=global.bc("platform","ec"),n=require("../../titan-scoped-env.js"),i=require("../../../../../../@titan/env.js"),r=(e=require("./api.config"))&&e.__esModule?e:{default:e},s=n.requirePlatform("cms").main.CMS,a=n.requirePlatform("ec").main,u=a.ecRequest,c=a.ecStore;n.Component({data:{mode:"",couponList:[],currentGoodsId:""},methods:{commitEcStore:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];c.dispatch("couponPopupStore/setMessageListApiStatus",{messageListApiStatus:t})},goodsClick:function(){this.setData({mode:""})},getSetting:function(){return(0,i.babel_coroutine)(t().mark((function e(){var o,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(o=s.getLocalSessionState("browseNoBuySetting"))){t.next=3;break}return t.abrupt("return",n.Promise.resolve(o));case 3:return t.next=5,u.post(r.default.getPromotionConfigInfo);case 5:return 0==(null==(i=t.sent)?void 0:i.errcode)&&(s.setLocalSessionState("browseNoBuySetting",i.data),s.emit("BROWSE_NO_BUY_SETTING_MESSAGE",{sessionKey:"browseNoBuySetting",data:i.data})),t.abrupt("return",null==i?void 0:i.data);case 8:case"end":return t.stop()}}),e)})))()},handleCheckCoupon:function(){try{if(this.isHidden)return;this.queryPromotionMessageList()}catch(t){}},queryPromotionMessageList:function(){var e=this;return(0,i.babel_coroutine)(t().mark((function o(){var i,a,c,d,l,h,m;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.commitEcStore(!1),t.next=3,u.post(r.default.queryPromotionMessageList);case 3:c=t.sent,d=null!==(i=null==c||null===(a=c.data)||void 0===a?void 0:a.messageList)&&void 0!==i?i:[],l=s.getLocalSessionState("browseNoBuySetting"),h=(null!=l?l:{}).messageFetchInterval,m=void 0===h?1:h,n.setTimeout((function(){e.commitEcStore(!0)}),1e3*m),0==(null==c?void 0:c.errcode)&&(null==d?void 0:d.length)>0&&(e.setData({couponList:d,mode:1===d.length?"sigle":"multiple"}),1===d.length&&n.setTimeout((function(){e.setData({mode:""})}),1e4));case 11:case"end":return t.stop()}}),o)})))()},start:function(){var e=this;try{if(this.isHidden=!1,this.handleCheckCouponThis=this.handleCheckCoupon.bind(this),s.on("BROWSE_NO_BUY_CHECK_COUPON",this.handleCheckCouponThis),!c.couponPopupStore.state.messageListApiStatus)return;this.timeId=n.setTimeout((0,i.babel_coroutine)(t().mark((function o(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSetting();case 2:if(n=t.sent,t.t0=n&&n.isBosIdHasRunningPromotion&&n.promotionGlobalSwitch,!t.t0){t.next=7;break}return t.next=7,e.queryPromotionMessageList();case 7:case"end":return t.stop()}}),o)}))),5e3)}catch(t){}}},pageLifetimes:{show:function(){this.isHidden=!1},hide:function(){this.isHidden=!0}},lifetimes:{attached:function(){try{var t=n.getCurrentPages(),e=t[t.length-1];this.route=e.route,"ec_goods/detail"===e.route&&this.setData({currentGoodsId:e.options.id})}catch(t){}},ready:function(){var t=this;n.setTimeout((function(){var e=n.getCurrentPages()||[],o=e[e.length-1];(null==o?void 0:o.selectComponent("#cms:CMSMarketingModal"))?s.once("marketingEnd",(function(){t.start()})):t.start()}),0)},detached:function(){try{s.off("BROWSE_NO_BUY_CHECK_COUPON",this.handleCheckCouponThis),this.timeId&&n.clearTimeout(this.timeId)}catch(t){}}}}),global.ec(o);
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/EXTS/ec/components/couponPopup/index.js'});require("cms_design/RAW/EXTS/ec/components/couponPopup/index.js");