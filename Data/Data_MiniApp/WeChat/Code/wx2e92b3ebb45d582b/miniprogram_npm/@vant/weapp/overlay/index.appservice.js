$gwx_XC_95=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_95 || [];
function gz$gwx_XC_95_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'lockScroll']])
Z([3,'onClick'])
Z([3,'noop'])
Z([3,'van-overlay'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
Z(z[1])
Z(z[3])
Z([a,z[4][1],z[4][2],z[4][3],z[4][4]])
Z(z[5])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_95=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_95=true;
var x=['./miniprogram_npm/@vant/weapp/overlay/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_95_1()
var fYW=_v()
_(r,fYW)
if(_oz(z,0,e,s,gg)){fYW.wxVkey=1
var cZW=_mz(z,'van-transition',['bind:tap',1,'catch:touchmove',1,'customClass',2,'customStyle',3,'duration',4,'show',5],[],e,s,gg)
var h1W=_n('slot')
_(cZW,h1W)
_(fYW,cZW)
}
else{fYW.wxVkey=2
var o2W=_mz(z,'van-transition',['bind:tap',7,'customClass',1,'customStyle',2,'duration',3,'show',4],[],e,s,gg)
var c3W=_n('slot')
_(o2W,c3W)
_(fYW,o2W)
}
fYW.wxXCkey=1
fYW.wxXCkey=3
fYW.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_95";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_95();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = [$gwx_XC_95, './miniprogram_npm/@vant/weapp/overlay/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = $gwx_XC_95( './miniprogram_npm/@vant/weapp/overlay/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/overlay/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/overlay/index.js";define("miniprogram_npm/@vant/weapp/overlay/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{show:Boolean,customStyle:String,duration:{type:null,value:300},zIndex:{type:Number,value:1},lockScroll:{type:Boolean,value:!0}},methods:{onClick:function(){this.$emit("click")},noop:function(){}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/overlay/index.js'});require("miniprogram_npm/@vant/weapp/overlay/index.js");