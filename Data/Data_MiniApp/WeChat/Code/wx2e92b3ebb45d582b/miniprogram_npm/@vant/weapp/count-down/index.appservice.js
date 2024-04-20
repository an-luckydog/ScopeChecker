$gwx_XC_73=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_73 || [];
function gz$gwx_XC_73_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-count-down'])
Z([[7],[3,'useSlot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_73=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_73=true;
var x=['./miniprogram_npm/@vant/weapp/count-down/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_73_1()
var aHS=_n('view')
_rz(z,aHS,'class',0,e,s,gg)
var tIS=_v()
_(aHS,tIS)
if(_oz(z,1,e,s,gg)){tIS.wxVkey=1
var eJS=_n('slot')
_(tIS,eJS)
}
else{tIS.wxVkey=2
}
tIS.wxXCkey=1
_(r,aHS)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_73";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_73();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = [$gwx_XC_73, './miniprogram_npm/@vant/weapp/count-down/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = $gwx_XC_73( './miniprogram_npm/@vant/weapp/count-down/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/count-down/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/count-down/index.js";define("miniprogram_npm/@vant/weapp/count-down/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),i=require("./utils");function e(t){return setTimeout(t,30)}(0,t.VantComponent)({props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,observer:"reset"},format:{type:String,value:"HH:mm:ss"},autoStart:{type:Boolean,value:!0}},data:{timeData:(0,i.parseTimeData)(0),formattedTime:"0"},destroyed:function(){clearTimeout(this.tid),this.tid=null},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.data.time,this.setRemain(this.remain),this.data.autoStart&&this.start()},tick:function(){this.data.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.tid=e((function(){t.setRemain(t.getRemain()),0!==t.remain&&t.microTick()}))},macroTick:function(){var t=this;this.tid=e((function(){var e=t.getRemain();(0,i.isSameSecond)(e,t.remain)&&0!==e||t.setRemain(e),0!==t.remain&&t.macroTick()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t;var e=(0,i.parseTimeData)(t);this.data.useSlot&&this.$emit("change",e),this.setData({formattedTime:(0,i.parseFormat)(this.data.format,e)}),0===t&&(this.pause(),this.$emit("finish"))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/count-down/index.js'});require("miniprogram_npm/@vant/weapp/count-down/index.js");