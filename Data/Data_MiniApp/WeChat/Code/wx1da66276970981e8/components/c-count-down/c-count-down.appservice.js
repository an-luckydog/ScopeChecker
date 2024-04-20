$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'u-count-down data-v-2f38f4db'])
Z([[6],[[7],[3,'$slots']],[3,'d']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./components/c-count-down/c-count-down.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var hMB=_n('view')
_rz(z,hMB,'class',0,e,s,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,1,e,s,gg)){oNB.wxVkey=1
var cOB=_n('slot')
_(oNB,cOB)
}
else{oNB.wxVkey=2
}
oNB.wxXCkey=1
_(r,hMB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-count-down/c-count-down.wxml'] = [$gwx_XC_5, './components/c-count-down/c-count-down.wxml'];else __wxAppCode__['components/c-count-down/c-count-down.wxml'] = $gwx_XC_5( './components/c-count-down/c-count-down.wxml' );
	;__wxRoute = "components/c-count-down/c-count-down";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-count-down/c-count-down.js";define("components/c-count-down/c-count-down.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../common/vendor.js");require("../../consts.js");var i={name:"u-count-down",mixins:[t.mpMixin,t.mixin,t.props$14],data:function(){return{timer:null,timeData:t.parseTimeData(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}},watch:{time:function(t){this.reset()}},mounted:function(){console.log("init>>>>Act"),this.init()},methods:{init:function(){this.reset()},start:function(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick:function(){this.macroTick()},macroTick:function(){var i=this;this.timer=setInterval((function(){var e=i.getRemainTime();t.isSameSecond(e,i.remainTime)&&0!==e||i.setRemainTime(e),0===i.remainTime&&i.clearTimeout()}),1e3)},getRemainTime:function(){return Math.max(this.endTime-Date.now(),0)},setRemainTime:function(i){this.remainTime=i;var e=t.parseTimeData(i);this.$emit("change",e),this.formattedTime=t.parseFormat(this.format,e),i<=0&&(this.pause(),this.$emit("finish"))},reset:function(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause:function(){this.runing=!1,this.clearTimeout()},clearTimeout:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(){clearTimeout(this.timer),this.timer=null}))},onBeforeUnmont:function(){console.log("onBeforeUnmont>>>c-count-down"),this.clearTimeout()}},e=t._export_sfc(i,[["render",function(i,e,n,r,m,o){return{a:t.t(m.formattedTime)}}],["__scopeId","data-v-2f38f4db"]]);wx.createComponent(e);
},{isPage:false,isComponent:true,currentFile:'components/c-count-down/c-count-down.js'});require("components/c-count-down/c-count-down.js");