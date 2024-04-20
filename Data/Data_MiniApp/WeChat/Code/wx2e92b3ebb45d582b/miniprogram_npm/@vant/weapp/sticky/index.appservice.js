$gwx_XC_114=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_114 || [];
function gz$gwx_XC_114_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_114_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_114_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_114_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_114_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_114_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_114=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_114=true;
var x=['./miniprogram_npm/@vant/weapp/sticky/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_114_1()
var lE2=_n('slot')
_(r,lE2)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_114";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_114();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/sticky/index.wxml'] = [$gwx_XC_114, './miniprogram_npm/@vant/weapp/sticky/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/sticky/index.wxml'] = $gwx_XC_114( './miniprogram_npm/@vant/weapp/sticky/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/sticky/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/sticky/index.js";define("miniprogram_npm/@vant/weapp/sticky/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/utils"),e=require("../common/component"),o=require("../common/validator"),i=require("../mixins/page-scroll");(0,e.VantComponent)({props:{zIndex:{type:Number,value:99},offsetTop:{type:Number,value:0,observer:"onScroll"},disabled:{type:Boolean,observer:"onScroll"},container:{type:null,observer:"onScroll"},scrollTop:{type:null,observer:function(t){this.onScroll({scrollTop:t})}}},mixins:[(0,i.pageScrollMixin)((function(t){null==this.data.scrollTop&&this.onScroll(t)}))],data:{height:0,fixed:!1,transform:0},mounted:function(){this.onScroll()},methods:{onScroll:function(e){var i=this,r=(void 0===e?{}:e).scrollTop,n=this.data,s=n.container,a=n.offsetTop;n.disabled?this.setDataAfterDiff({fixed:!1,transform:0}):(this.scrollTop=r||this.scrollTop,"function"!=typeof s?(0,t.getRect)(this,".van-sticky").then((function(t){(0,o.isDef)(t)&&(a>=t.top?(i.setDataAfterDiff({fixed:!0,height:t.height}),i.transform=0):i.setDataAfterDiff({fixed:!1}))})):Promise.all([(0,t.getRect)(this,".van-sticky"),this.getContainerRect()]).then((function(t){var e=t[0],o=t[1];a+e.height>o.height+o.top?i.setDataAfterDiff({fixed:!1,transform:o.height-e.height}):a>=e.top?i.setDataAfterDiff({fixed:!0,height:e.height,transform:0}):i.setDataAfterDiff({fixed:!1,transform:0})})))},setDataAfterDiff:function(t){var e=this;wx.nextTick((function(){var o=Object.keys(t).reduce((function(o,i){return t[i]!==e.data[i]&&(o[i]=t[i]),o}),{});Object.keys(o).length>0&&e.setData(o),e.$emit("scroll",{scrollTop:e.scrollTop,isFixed:t.fixed||e.data.fixed})}))},getContainerRect:function(){var t=this.data.container();return new Promise((function(e){return t.boundingClientRect(e).exec()}))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/sticky/index.js'});require("miniprogram_npm/@vant/weapp/sticky/index.js");