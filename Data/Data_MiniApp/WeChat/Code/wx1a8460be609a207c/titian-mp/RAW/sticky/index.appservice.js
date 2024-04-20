$gwx_XC_112=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_112 || [];
function gz$gwx_XC_112_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_112_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'usePureCss']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_112_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_112_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_112=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_112=true;
var x=['./titian-mp/RAW/sticky/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_112_1()
var a4CB=_v()
_(r,a4CB)
if(_oz(z,0,e,s,gg)){a4CB.wxVkey=1
var t5CB=_n('slot')
_(a4CB,t5CB)
}
else{a4CB.wxVkey=2
var e6CB=_n('slot')
_(a4CB,e6CB)
}
a4CB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_112";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_112();	if (__vd_version_info__.delayedGwx) __wxAppCode__['titian-mp/RAW/sticky/index.wxml'] = [$gwx_XC_112, './titian-mp/RAW/sticky/index.wxml'];else __wxAppCode__['titian-mp/RAW/sticky/index.wxml'] = $gwx_XC_112( './titian-mp/RAW/sticky/index.wxml' );
	;__wxRoute = "titian-mp/RAW/sticky/index";__wxRouteBegin = true;__wxAppCurrentFile__="titian-mp/RAW/sticky/index.js";define("titian-mp/RAW/sticky/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../titan.bootstrap.js");var e,t=global.bc("platform","titian-mp"),i=require("../titan-scoped-env.js"),r=(e=require("../common/basic/BasicComponent"))&&e.__esModule?e:{default:e},s=require("../common/utils/index"),n=".titian-sticky";(0,r.default)({properties:{offsetTop:{type:Number,value:0},container:null,disabled:{type:Boolean,value:!1,observer:"disabledChanged"},zIndex:{type:Number,value:99},usePureCss:Boolean},data:{fixed:!1,width:0,height:0},observers:{container:function(e){"function"==typeof e&&this.data.height&&this.creatContainerObserver()},offsetTop:function(){this.data.disabled||this.initObserver()}},lifetimes:{ready:function(){this.data.disabled||this.initObserver()},detached:function(){this.destroyObserver()}},methods:{disabledChanged:function(e){e?this.destroyObserver():this.initObserver()},getContainerRect:function(){var e=this.data.container();return new i.Promise((function(t,i){e.boundingClientRect((function(e){e?t(e):i(new Error("get rect error:".concat(e)))})).exec()}))},initObserver:function(){var e=this;this.destroyObserver(),(0,s.getRect)(this,n).then((function(t){e.setData({height:t.height}),0!==t.height&&(e.createObserver(),e.creatContainerObserver())}))},createObserver:function(){var e=this,t=this.data.offsetTop;this.data.usePureCss&&(t+=1),this.destroyObserver("contentObserver");var i=this.createIntersectionObserver({thresholds:[1],initialRatio:1});i.relativeToViewport({top:-t,left:1e3,right:1e3}),i.observe(n,(function(t){e.setData({width:t.boundingClientRect.width}),e.setFixed(t.boundingClientRect.top)})),this.contentObserver=i},creatContainerObserver:function(){var e=this;"function"==typeof this.data.container&&this.getContainerRect().then((function(t){(0,s.getRect)(e,n).then((function(i){var r=t.height-e.data.offsetTop-i.height-(i.top-t.top);e.data.usePureCss&&(r=1-e.data.offsetTop),e.destroyObserver("containerObserver");var s=e.createIntersectionObserver({thresholds:[1],initialRatio:1});s.relativeToViewport({top:r,left:1e3,right:1e3}),s.observe(n,(function(t){e.setFixed(t.boundingClientRect.top,r)})),e.containerObserver=s}))}))},destroyObserver:function(e){if(e){var t=this[e];t&&t.disconnect()}else this.contentObserver&&this.contentObserver.disconnect(),this.containerObserver&&this.containerObserver.disconnect()},setFixed:function(e,t){var i;i=this.data.usePureCss?e===this.data.offsetTop:void 0!==t?e>=-t&&e<this.data.offsetTop:e<this.data.offsetTop,this.triggerEvent("fixed",{isFixed:i,top:e}),this.data.usePureCss||this.setData({fixed:i})}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'titian-mp/RAW/sticky/index.js'});require("titian-mp/RAW/sticky/index.js");