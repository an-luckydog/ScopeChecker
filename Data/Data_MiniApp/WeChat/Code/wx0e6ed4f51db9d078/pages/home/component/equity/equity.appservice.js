$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./pages/home/component/equity/equity.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/component/equity/equity.wxml'] = [$gwx_XC_16, './pages/home/component/equity/equity.wxml'];else __wxAppCode__['pages/home/component/equity/equity.wxml'] = $gwx_XC_16( './pages/home/component/equity/equity.wxml' );
	;__wxRoute = "pages/home/component/equity/equity";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/component/equity/equity.js";define("pages/home/component/equity/equity.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/objectSpread2"),e=require("../../../../@babel/runtime/helpers/objectWithoutProperties"),a=require("../../../../cwx/cwx.js"),i=require("../../common/confs/fetchConfs"),o=require("../../common/confs/ubtConfs"),r=require("../../common/utils"),s=["ResponseStatus","isShow","result","avatar","curLevelCode"];Component({properties:{equityShowStatus:Boolean},data:{startY:0,animationData:{},equityFlag:!1,equityData:{}},observers:{equityShowStatus:function(){wx.j("O1h"),this.data.equityShowStatus&&this.showCard()}},pageLifetimes:{show:function(){this.showCard()}},methods:{showCard:function(){wx.j("jKD");var i=this,n=i.data.equityShowStatus,u=a.cwx.getStorageSync("equityStatus")||!1,c=a.cwx.user,d=c.auth,h=c.duid,l=u&&JSON.parse(u),w=l&&((new Date).getTime()-l.time)/864e5,g=a.cwx.ABTestingManager.valueForKeySync("210220_BBZ_qyxk"),p=a.cwx.ABTestingManager.valueForExpresultSync("210220_BBZ_qyxk");try{a.cwx.sendUbtByPage.ubtSet&&a.cwx.sendUbtByPage.ubtSet("abtest",p)}catch(t){console.log("提交equityAB埋点异常")}d&&n&&"B"==g&&(!l||l.auth!==d||w>90)&&i.getEquityCard((function(n){if(wx.j("DEp"),200==n.statusCode&&"Success"==n.data.ResponseStatus.Ack&&"1"==n.data.isShow){var u=n.data,c=(u.ResponseStatus,u.isShow,u.result,u.avatar),l=u.curLevelCode,w=e(u,s),g="";switch(l+""){case"0":g="ordinary";break;case"10":g="gold";break;case"20":g="platinum";break;case"30":g="diamond";break;case"35":g="gold-diamond";break;case"40":g="black-diamond";break;default:g="hidden"}i.setData({equityData:t(t({},w),{},{avatar:c.length?c:"//pic.c-ctrip.com/platform/h5/mini_programe/equity/default.jpg",level:g}),equityFlag:!0},(function(){wx.j("UPi"),i.timeOut=setTimeout((function(){wx.j("QgZ"),i.cardDisappear()}),3e3)}));var p={auth:d,time:(new Date).getTime()};a.cwx.setStorageSync("equityStatus",JSON.stringify(p)),(0,r.logWithUbtTrace)({uid:h,cid:a.cwx.clientID},o.TRACE_SHOW_EQUITY_CARD),(0,r.logWithUbtMetric)({type:"show",position:"equity"})}console.log("-------getEquityCard--------",n)}))},getEquityCard:function(t){wx.j("MHd"),a.cwx.request({url:i.URL_MAP.getEquityCard,success:function(e){wx.j("uBX"),t(e)},fail:function(e){wx.j("Ekw"),t(e)}})},touchStart:function(t){wx.j("Ycd");var e=t.touches[0].pageY;this.setData({startY:e})},touchEnd:function(t){wx.j("gWL");var e=this.data.startY;t.changedTouches[0].pageY<e&&(this.cardDisappear(),(0,r.logWithUbtTrace)({uid:a.cwx.user.duid,cid:a.cwx.clientID},o.TRACE_SLIDE_UP_EQUITY_CARD),(0,r.logWithUbtMetric)({type:"end",position:"equity"}))},cardDisappear:function(){wx.j("ah8");var t=wx.createAnimation({duration:300,timingFunction:"linear"});t.opacity(0).translateY(-10).step(),this.setData({animationData:t.export()})},equityHidden:function(){wx.j("MWR");var t=wx.createAnimation({duration:0,timingFunction:"linear"});t.opacity(1).translateY(0).step({duration:0}),this.setData({startY:0,animationData:t.export(),equityFlag:!1,equityData:{}}),clearTimeout(this.timeOut)}}});
},{isPage:false,isComponent:true,currentFile:'pages/home/component/equity/equity.js'});require("pages/home/component/equity/equity.js");