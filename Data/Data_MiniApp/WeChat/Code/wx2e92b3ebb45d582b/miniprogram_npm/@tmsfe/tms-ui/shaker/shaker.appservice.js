$gwx_XC_53=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_53 || [];
function gz$gwx_XC_53_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_53=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_53=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_53_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_53";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_53();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.wxml'] = [$gwx_XC_53, './miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.wxml'] = $gwx_XC_53( './miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/shaker/shaker";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.js";define("miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e={},n=function(n){return(t||(t=new Promise((function(t,e){return wx.startAccelerometer({interval:"ui",success:t,fail:e})})).then((function(){wx.onAccelerometerChange((function(t){return Object.keys(e).forEach((function(n){return e[n](t)}))}))})).catch((function(e){return t=null,Promise.reject(e)}))),t).then((function(){var t=Date.now(),i=Math.random(46655).toString(3),r="".concat(t,"_").concat(i);return e[r]=n,r}))},i=function(n){delete e[n],0===Object.keys(e).length&&(wx.stopAccelerometer({}),t=null)};Component({properties:{interval:{type:Number,value:1e3}},accelerometerChangeListenerID:null,pausing:!1,start:null,lastShakeTime:0,innerAudioCtx:null,lifetimes:{attached:function(){var t=this;n((function(e){return t.handleAccelerometerChange(e)})).then((function(e){t.accelerometerChangeListenerID=e}))},detached:function(){i(this.accelerometerChangeListenerID),this.accelerometerChangeListenerID=null,this.innerAudioCtx&&(this.innerAudioCtx.destroy(),this.innerAudioCtx=null)}},pageLifetimes:{show:function(){this.pausing=!1},hide:function(){this.pausing=!0}},methods:{handleAccelerometerChange:function(t){if(!this.pausing){var e=Date.now();if(!(this.lastShakeTime&&e-this.lastShakeTime<this.data.interval)){if(!this.start)return this.start={point:t,time:e};var n=this.calDiff(this.start.point,t,e-this.start.time),i=n.speed,r=n.diff;if(i<.02)return this.start={point:t,time:e};r<.3||(this.start=null,this.lastShakeTime=e,this.triggerEvent("shake",{}))}}},calDiff:function(t,e,n){var i=Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+Math.pow(t.z-e.z,2);return{diff:i,speed:i/n}},playSound:function(t){var e=this.initPlayInstance();e.src="".concat("https://static.img.tai.qq.com/mp/components/shaker","/sound_").concat(t,".wav"),e.seek(0),e.onCanplay((function(){return e.play()}))},initPlayInstance:function(){return this.innerAudioCtx||(this.innerAudioCtx=wx.createInnerAudioContext({useWebAudioImplement:!0})),this.innerAudioCtx}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.js'});require("miniprogram_npm/@tmsfe/tms-ui/shaker/shaker.js");