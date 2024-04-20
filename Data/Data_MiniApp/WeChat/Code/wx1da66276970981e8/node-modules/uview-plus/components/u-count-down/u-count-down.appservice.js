$gwx_XC_54=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_54 || [];
function gz$gwx_XC_54_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_54_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'u-count-down data-v-68231eb2'])
Z([[6],[[7],[3,'$slots']],[3,'d']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_54_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_54=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_54=true;
var x=['./node-modules/uview-plus/components/u-count-down/u-count-down.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_54_1()
var o2L=_n('view')
_rz(z,o2L,'class',0,e,s,gg)
var f3L=_v()
_(o2L,f3L)
if(_oz(z,1,e,s,gg)){f3L.wxVkey=1
var c4L=_n('slot')
_(f3L,c4L)
}
else{f3L.wxVkey=2
}
f3L.wxXCkey=1
_(r,o2L)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_54";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_54();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-count-down/u-count-down.wxml'] = [$gwx_XC_54, './node-modules/uview-plus/components/u-count-down/u-count-down.wxml'];else __wxAppCode__['node-modules/uview-plus/components/u-count-down/u-count-down.wxml'] = $gwx_XC_54( './node-modules/uview-plus/components/u-count-down/u-count-down.wxml' );
	;__wxRoute = "node-modules/uview-plus/components/u-count-down/u-count-down";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-plus/components/u-count-down/u-count-down.js";define("node-modules/uview-plus/components/u-count-down/u-count-down.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var i=require("../../../../common/vendor.js");require("../../../../consts.js");var t={name:"u-count-down",mixins:[i.mpMixin,i.mixin,i.props$14],data:function(){return{timer:null,timeData:i.parseTimeData(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}},watch:{time:function(i){this.reset()}},mounted:function(){this.init()},emits:["change","finish"],methods:{init:function(){this.reset()},start:function(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick:function(){this.millisecond?this.microTick():this.macroTick()},macroTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){var e=t.getRemainTime();i.isSameSecond(e,t.remainTime)&&0!==e||t.setRemainTime(e),0!==t.remainTime&&t.macroTick()}),30)},microTick:function(){var i=this;this.clearTimeout(),this.timer=setTimeout((function(){i.setRemainTime(i.getRemainTime()),0!==i.remainTime&&i.microTick()}),50)},getRemainTime:function(){return Math.max(this.endTime-Date.now(),0)},setRemainTime:function(t){this.remainTime=t;var e=i.parseTimeData(t);this.$emit("change",e),this.formattedTime=i.parseFormat(this.format,e),t<=0&&(this.pause(),this.$emit("finish"))},reset:function(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause:function(){this.runing=!1,this.clearTimeout()},clearTimeout:function(i){function t(){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}((function(){clearTimeout(this.timer),this.timer=null}))},beforeDestroy:function(){this.clearTimeout()}},e=i._export_sfc(t,[["render",function(t,e,n,m,r,s){return{a:i.t(r.formattedTime)}}],["__scopeId","data-v-68231eb2"]]);wx.createComponent(e);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-plus/components/u-count-down/u-count-down.js'});require("node-modules/uview-plus/components/u-count-down/u-count-down.js");