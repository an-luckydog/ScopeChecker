$gwx_XC_110=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_110 || [];
function gz$gwx_XC_110_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_110_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'skeleton']],[[4],[[5],[[8],'animate',[[7],[3,'animate']]]]]]]])
Z([[7],[3,'avatar']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_110_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_110=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_110=true;
var x=['./miniprogram_npm/@vant/weapp/skeleton/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_110_1()
var o8Z=_v()
_(r,o8Z)
if(_oz(z,0,e,s,gg)){o8Z.wxVkey=1
var l9Z=_n('view')
_rz(z,l9Z,'class',1,e,s,gg)
var a0Z=_v()
_(l9Z,a0Z)
if(_oz(z,2,e,s,gg)){a0Z.wxVkey=1
}
var tA1=_v()
_(l9Z,tA1)
if(_oz(z,3,e,s,gg)){tA1.wxVkey=1
}
a0Z.wxXCkey=1
tA1.wxXCkey=1
_(o8Z,l9Z)
}
else{o8Z.wxVkey=2
var eB1=_n('slot')
_(o8Z,eB1)
}
o8Z.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_110";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_110();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/skeleton/index.wxml'] = [$gwx_XC_110, './miniprogram_npm/@vant/weapp/skeleton/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/skeleton/index.wxml'] = $gwx_XC_110( './miniprogram_npm/@vant/weapp/skeleton/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/skeleton/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/skeleton/index.js";define("miniprogram_npm/@vant/weapp/skeleton/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({classes:["avatar-class","title-class","row-class"],props:{row:{type:Number,value:0,observer:function(e){this.setData({rowArray:Array.from({length:e})})}},title:Boolean,avatar:Boolean,loading:{type:Boolean,value:!0},animate:{type:Boolean,value:!0},avatarSize:{type:String,value:"32px"},avatarShape:{type:String,value:"round"},titleWidth:{type:String,value:"40%"},rowWidth:{type:null,value:"100%",observer:function(e){this.setData({isArray:e instanceof Array})}}},data:{isArray:!1,rowArray:[]}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/skeleton/index.js'});require("miniprogram_npm/@vant/weapp/skeleton/index.js");