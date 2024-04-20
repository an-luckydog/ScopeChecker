$gwx_XC_120=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_120 || [];
function gz$gwx_XC_120_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_120_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'fixed']],[[7],[3,'placeholder']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_120_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_120_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_120=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_120=true;
var x=['./miniprogram_npm/@vant/weapp/tabbar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_120_1()
var aL3=_n('slot')
_(r,aL3)
var lK3=_v()
_(r,lK3)
if(_oz(z,0,e,s,gg)){lK3.wxVkey=1
}
lK3.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_120";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_120();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar/index.wxml'] = [$gwx_XC_120, './miniprogram_npm/@vant/weapp/tabbar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar/index.wxml'] = $gwx_XC_120( './miniprogram_npm/@vant/weapp/tabbar/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/tabbar/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/tabbar/index.js";define("miniprogram_npm/@vant/weapp/tabbar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../common/relation"),r=require("../common/utils");(0,e.VantComponent)({relation:(0,t.useChildren)("tabbar-item",(function(){this.updateChildren()})),props:{active:{type:null,observer:"updateChildren"},activeColor:{type:String,observer:"updateChildren"},inactiveColor:{type:String,observer:"updateChildren"},fixed:{type:Boolean,value:!0,observer:"setHeight"},placeholder:{type:Boolean,observer:"setHeight"},border:{type:Boolean,value:!0},zIndex:{type:Number,value:1},safeAreaInsetBottom:{type:Boolean,value:!0}},data:{height:50},methods:{updateChildren:function(){var e=this.children;Array.isArray(e)&&e.length&&e.forEach((function(e){return e.updateFromParent()}))},setHeight:function(){var e=this;this.data.fixed&&this.data.placeholder&&wx.nextTick((function(){(0,r.getRect)(e,".van-tabbar").then((function(t){e.setData({height:t.height})}))}))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/tabbar/index.js'});require("miniprogram_npm/@vant/weapp/tabbar/index.js");