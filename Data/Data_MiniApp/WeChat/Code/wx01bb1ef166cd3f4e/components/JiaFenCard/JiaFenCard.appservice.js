$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];
function gz$gwx_XC_33_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleClickCard'])
Z([3,'jiafen custom-class'])
Z([3,'jiafenOuter'])
Z([[7],[3,'avatar']])
Z(z[3])
Z([[7],[3,'showBadge']])
Z([[2,'||'],[[7],[3,'btnText']],[[7],[3,'btnTextFromType']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./components/JiaFenCard/JiaFenCard.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
var tQD=_mz(z,'view',['bindtap',0,'class',1,'id',1],[],e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,3,e,s,gg)){eRD.wxVkey=1
var oTD=_mz(z,'JiaFenAvatar',['avatar',4,'showBadge',1],[],e,s,gg)
_(eRD,oTD)
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,6,e,s,gg)){bSD.wxVkey=1
}
eRD.wxXCkey=1
eRD.wxXCkey=3
bSD.wxXCkey=1
_(r,tQD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_33";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/JiaFenCard/JiaFenCard.wxml'] = [$gwx_XC_33, './components/JiaFenCard/JiaFenCard.wxml'];else __wxAppCode__['components/JiaFenCard/JiaFenCard.wxml'] = $gwx_XC_33( './components/JiaFenCard/JiaFenCard.wxml' );
	;__wxRoute = "components/JiaFenCard/JiaFenCard";__wxRouteBegin = true;__wxAppCurrentFile__="components/JiaFenCard/JiaFenCard.js";define("components/JiaFenCard/JiaFenCard.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("miniprogram-computed"),t=require("@models/jiafen"),i=require("@/utils/analyse");(0,e.ComponentWithComputed)({properties:{avatar:String,name:String,desc:String,btnText:String,type:null,buttonOptions:Object,disabled:Boolean,needBubbling:Boolean,kefuData:Object,lottery:Object,isCertificated:Boolean},externalClasses:["custom-class","custom-title","custom-text"],computed:{btnTextFromType:function(e){return(0,t.getJiaFenBtnText)(null==e?void 0:e.type)},showBadge:function(e){var t,i;return e.isCertificated||!(null===(t=e.lottery)||void 0===t||null===(i=t.initiator)||void 0===i||!i.certificate_name)}},lifetimes:{created:function(){this._observer=this.createIntersectionObserver()},ready:function(){var e=this;this._observer.relativeToViewport().observe("#jiafenOuter",(function(t){var n;if(!("smart_promotion"!==e.data.type||t.intersectionRatio<=0||(new Date).getTime()-(e._lastDate||0)<i.MININAL_AD_REPORT_INTERVAL)){e._lastDate=(new Date).getTime();var r=null===(n=e.data.kefuData.promotion)||void 0===n?void 0:n.lottery_id;(0,i.screenView)("detail_reco",{ad_options:{adtype:"real_reco_detail_contact",adid:r}})}}))},detached:function(){var e;null===(e=this._observer)||void 0===e||e.disconnect()}},methods:{handleClickBtn:function(){this.triggerEvent("cardbutton")},handleClickCard:function(e){"jiafenInner"!==e.target.id&&this.triggerEvent("card")}}});
},{isPage:false,isComponent:true,currentFile:'components/JiaFenCard/JiaFenCard.js'});require("components/JiaFenCard/JiaFenCard.js");