$gwx_XC_48=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_48 || [];
function gz$gwx_XC_48_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_48_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_48_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_48=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_48=true;
var x=['./components/live-status/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_48_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_48";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_48();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/live-status/index.wxml'] = [$gwx_XC_48, './components/live-status/index.wxml'];else __wxAppCode__['components/live-status/index.wxml'] = $gwx_XC_48( './components/live-status/index.wxml' );
	;__wxRoute = "components/live-status/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/live-status/index.js";define("components/live-status/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();Component({externalClasses:["ext-class"],properties:{startTime:{type:Number,observer:function(){this.init()}},status:{type:Number,observer:function(){this.init()}},serviceTime:{type:Number,observer:function(){this.init()}}},data:{diff:0,diffFormat:"",dataInfo:{serviceTime:0}},detached:function(){},methods:{init:function(){var t=this.data,i=t.startTime,e=t.status,n=t.serviceTime;if(1===e)return this.countDown(n,i);this.clearTimeoutHanlder()},countDown:function(t,i){if(t&&i){if(this.diff=i-t,this.diff<=0)return this.clearTimeoutHanlder(),void this.triggerEvent("countDownEnd");this.clearTimeoutHanlder(),this.countDownHandler(),this.startCountDown()}},startCountDown:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;this.clearTimeoutHanlder(),this.timer=setTimeout((function(){t.diff=t.diff-i,t.startCountDown(i,e),t.countDownHandler()}),e)},countDownHandler:function(){this.diff<=0&&(this.clearTimeoutHanlder(),this.triggerEvent("countDownEnd"));var t=this.formatTime(this.diff);if(t===this.data.diffFormat)return!1;this.setData({diffFormat:t})},clearTimeoutHanlder:function(){this.timer&&clearTimeout(this.timer),this.timer=null},formatTime:function(t){var i=Math.floor(t/86400),e=Math.floor(t/3600%24),n=Math.floor(t/60%60);if(i<10&&i>0&&(i="0"+i),e<10&&(e="0"+e),n<10&&(n="0"+n),0==i){var o=Math.floor(t%60);return o<10&&(o="0"+o),"".concat(e,"时").concat(n,"分").concat(o,"秒")}return"".concat(i,"天").concat(e,"时").concat(n,"分")}}});
},{isPage:false,isComponent:true,currentFile:'components/live-status/index.js'});require("components/live-status/index.js");