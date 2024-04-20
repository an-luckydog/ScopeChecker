$gwx_XC_144=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_144 || [];
function gz$gwx_XC_144_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_144_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_144_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_144_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_144_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_144_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_144=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_144=true;
var x=['./pages/inquery/components/header/header.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_144_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_144";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_144();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquery/components/header/header.wxml'] = [$gwx_XC_144, './pages/inquery/components/header/header.wxml'];else __wxAppCode__['pages/inquery/components/header/header.wxml'] = $gwx_XC_144( './pages/inquery/components/header/header.wxml' );
	;__wxRoute = "pages/inquery/components/header/header";__wxRouteBegin = true;__wxAppCurrentFile__="pages/inquery/components/header/header.js";define("pages/inquery/components/header/header.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/defineProperty");new Component({properties:{currentIndex:{type:Number,value:0},headerType:{type:String,value:""}},observers:{currentIndex:function(t){var a=this,n=function(t,n){var r="iconSet[".concat(t,"]");a.setData(e({},r,n))};this.data.iconSet.forEach((function(e,a){n(a,a===t-1?"right":a===t?"left":"normal")}))}},data:{typeMap:{normal:{headers:["描述病情","发送图片","选择就诊人","匹配医生"]},specific:{headers:["描述病情","发送图片","选择就诊人","医生接诊"]}},iconSet:["left","normal","normal"],iconMap:{left:"https://staff.chunyu.mobi/@/media/images/2022/12/29/6955/ed32effd20b7_w45_h102_.png",normal:"https://staff.chunyu.mobi/@/media/images/2022/12/29/0241/b603088ec18d_w45_h102_.png",right:"https://staff.chunyu.mobi/@/media/images/2022/12/29/fcb8/ee1a5c1d81c1_w45_h102_.png"}}});
},{isPage:false,isComponent:true,currentFile:'pages/inquery/components/header/header.js'});require("pages/inquery/components/header/header.js");