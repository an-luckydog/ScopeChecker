$gwx_XC_68=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_68 || [];
function gz$gwx_XC_68_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-circle'])
Z([[2,'!'],[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_68=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_68=true;
var x=['./miniprogram_npm/@vant/weapp/circle/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_68_1()
var oZR=_n('view')
_rz(z,oZR,'class',0,e,s,gg)
var c1R=_v()
_(oZR,c1R)
if(_oz(z,1,e,s,gg)){c1R.wxVkey=1
var o2R=_n('slot')
_(c1R,o2R)
}
else{c1R.wxVkey=2
}
c1R.wxXCkey=1
_(r,oZR)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_68";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_68();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/circle/index.wxml'] = [$gwx_XC_68, './miniprogram_npm/@vant/weapp/circle/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/circle/index.wxml'] = $gwx_XC_68( './miniprogram_npm/@vant/weapp/circle/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/circle/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/circle/index.js";define("miniprogram_npm/@vant/weapp/circle/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/color"),t=require("../common/component"),r=require("../common/utils"),a=require("../common/validator"),n=require("../common/version"),i=require("./canvas");var o=2*Math.PI,l=-Math.PI/2;(0,t.VantComponent)({props:{text:String,lineCap:{type:String,value:"round"},value:{type:Number,value:0,observer:"reRender"},speed:{type:Number,value:50},size:{type:Number,value:100,observer:function(){this.drawCircle(this.currentValue)}},fill:String,layerColor:{type:String,value:e.WHITE},color:{type:null,value:e.BLUE,observer:function(){var e=this;this.setHoverColor().then((function(){e.drawCircle(e.currentValue)}))}},type:{type:String,value:""},strokeWidth:{type:Number,value:4},clockwise:{type:Boolean,value:!0}},data:{hoverColor:e.BLUE},methods:{getContext:function(){var e=this,t=this.data,a=t.type,o=t.size;if(""===a||!(0,n.canIUseCanvas2d)()){var l=wx.createCanvasContext("van-circle",this);return Promise.resolve(l)}var s=(0,r.getSystemInfoSync)().pixelRatio;return new Promise((function(t){wx.createSelectorQuery().in(e).select("#van-circle").node().exec((function(r){var n=r[0].node,l=n.getContext(a);e.inited||(e.inited=!0,n.width=o*s,n.height=o*s,l.scale(s,s)),t((0,i.adaptor)(l))}))}))},setHoverColor:function(){var e=this,t=this.data,r=t.color,n=t.size;return(0,a.isObj)(r)?this.getContext().then((function(t){var a=t.createLinearGradient(n,0,0,0);Object.keys(r).sort((function(e,t){return parseFloat(e)-parseFloat(t)})).map((function(e){return a.addColorStop(parseFloat(e)/100,r[e])})),e.hoverColor=a})):(this.hoverColor=r,Promise.resolve())},presetCanvas:function(e,t,r,a,n){var i=this.data,o=i.strokeWidth,l=i.lineCap,s=i.clockwise,c=i.size/2,u=c-o/2;e.setStrokeStyle(t),e.setLineWidth(o),e.setLineCap(l),e.beginPath(),e.arc(c,c,u,r,a,!s),e.stroke(),n&&(e.setFillStyle(n),e.fill())},renderLayerCircle:function(e){var t=this.data,r=t.layerColor,a=t.fill;this.presetCanvas(e,r,0,o,a)},renderHoverCircle:function(e,t){var r=this.data.clockwise,a=o*(t/100),n=r?l+a:3*Math.PI-(l+a);this.presetCanvas(e,this.hoverColor,l,n)},drawCircle:function(e){var t=this,r=this.data.size;this.getContext().then((function(a){a.clearRect(0,0,r,r),t.renderLayerCircle(a);var n,i=(n=e,Math.min(Math.max(n,0),100));0!==i&&t.renderHoverCircle(a,i),a.draw()}))},reRender:function(){var e=this,t=this.data,r=t.value,a=t.speed;if(a<=0||a>1e3)this.drawCircle(r);else{this.clearMockInterval(),this.currentValue=this.currentValue||0;!function t(){e.interval=setTimeout((function(){e.currentValue!==r?(Math.abs(e.currentValue-r)<1?e.currentValue=r:e.currentValue<r?e.currentValue+=1:e.currentValue-=1,e.drawCircle(e.currentValue),t()):e.clearMockInterval()}),1e3/a)}()}},clearMockInterval:function(){this.interval&&(clearTimeout(this.interval),this.interval=null)}},mounted:function(){var e=this;this.currentValue=this.data.value,this.setHoverColor().then((function(){e.drawCircle(e.currentValue)}))},destroyed:function(){this.clearMockInterval()}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/circle/index.js'});require("miniprogram_npm/@vant/weapp/circle/index.js");