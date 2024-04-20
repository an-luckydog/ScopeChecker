$gwx_XC_70=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_70 || [];
function gz$gwx_XC_70_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'unitId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_70=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_70=true;
var x=['./components/WxAd/WxAd.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_70_1()
var fYI=_v()
_(r,fYI)
if(_oz(z,0,e,s,gg)){fYI.wxVkey=1
}
fYI.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_70";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_70();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/WxAd/WxAd.wxml'] = [$gwx_XC_70, './components/WxAd/WxAd.wxml'];else __wxAppCode__['components/WxAd/WxAd.wxml'] = $gwx_XC_70( './components/WxAd/WxAd.wxml' );
	;__wxRoute = "components/WxAd/WxAd";__wxRouteBegin = true;__wxAppCurrentFile__="components/WxAd/WxAd.js";define("components/WxAd/WxAd.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(a);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=r?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(require("../../utils/analyse"));function t(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:a})(e)}Component({externalClasses:["ext-class"],properties:{unitId:{type:String,value:""},pathName:{type:String,value:""},adName:{type:String,value:""},isCustomAd:{type:Boolean,value:!1},adType:{type:String,value:"banner"},adTheme:{type:String,value:"white"},gridOpacity:{type:String,value:"0"},gridCount:{type:String,value:"5"},extException:{type:Boolean,value:!1}},data:{skipReport:!1},lifetimes:{created:function(){this._observer=this.createIntersectionObserver()},attached:function(){this.location_name=(0,e.getReportLocation)(),this.data.extException&&this.setData({skipReport:!0})},detached:function(){this._observer.disconnect()},ready:function(){this._observer.relativeToViewport().observe("#wx-ad-component",function(t){var a=t.boundingClientRect;if(this.handleReport(a),this._lastDate){var n=(new Date).getTime();n-this._lastDate>=e.MININAL_AD_REPORT_INTERVAL&&(this.adScreenView("real"),this._lastDate=n)}else this._lastDate=(new Date).getTime(),this.adScreenView("real")}.bind(this))}},pageLifetimes:{show:function(){this.setData({skipReport:!1})}},methods:{handleReport:function(t){t.height<80&&(0,e.default)("index_ad_banner_fail",{label:this._errCode?this._errCode:"unknown"})},handleAdClick:function(){console.log("handleAdClick -> handleAdClick")},adScreenView:function(t){if(!this.data.skipReport){var a=this.data,n=a.unitId,i=a.pathName,r=a.adName,o=this.location_name||i,s=i||this.location_name,l=r||"".concat(o,"_ad");(0,e.screenView)(s,{ad_options:{adtype:t?"".concat(t,"_").concat(l):l,adid:n}})}},loadAdSuccess:function(){this.adScreenView(),this.triggerEvent("load")},loadAdFall:function(e){this._errCode=e.detail.errCode,console.error("loadAdFall -> loadAdFall",e),this.triggerEvent("error")},loadAdClose:function(){console.log("loadAdClose -> loadAdClose",this.data.unitId)}}});
},{isPage:false,isComponent:true,currentFile:'components/WxAd/WxAd.js'});require("components/WxAd/WxAd.js");