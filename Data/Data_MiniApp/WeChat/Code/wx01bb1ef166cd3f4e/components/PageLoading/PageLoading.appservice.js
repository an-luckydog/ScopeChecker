$gwx_XC_51=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_51 || [];
function gz$gwx_XC_51_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loading'])
Z([a,[3,'height:calc(100vh - '],[[7],[3,'height']],[3,'px);']])
Z([[2,'==='],[[7],[3,'type']],[1,'spin']])
Z([[2,'==='],[[7],[3,'type']],[1,'progress']])
Z([3,'progress'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_51=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_51=true;
var x=['./components/PageLoading/PageLoading.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_51_1()
var xKG=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oLG=_v()
_(xKG,oLG)
if(_oz(z,2,e,s,gg)){oLG.wxVkey=1
var cNG=_n('Spin')
_(oLG,cNG)
}
var fMG=_v()
_(xKG,fMG)
if(_oz(z,3,e,s,gg)){fMG.wxVkey=1
var hOG=_n('Progress')
_rz(z,hOG,'id',4,e,s,gg)
_(fMG,hOG)
}
oLG.wxXCkey=1
oLG.wxXCkey=3
fMG.wxXCkey=1
fMG.wxXCkey=3
_(r,xKG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_51";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_51();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PageLoading/PageLoading.wxml'] = [$gwx_XC_51, './components/PageLoading/PageLoading.wxml'];else __wxAppCode__['components/PageLoading/PageLoading.wxml'] = $gwx_XC_51( './components/PageLoading/PageLoading.wxml' );
	;__wxRoute = "components/PageLoading/PageLoading";__wxRouteBegin = true;__wxAppCurrentFile__="components/PageLoading/PageLoading.js";define("components/PageLoading/PageLoading.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@mina-modules/system-info");Component({properties:{type:{type:String,value:"spin"}},data:{height:(0,e.getSysInfo)().navBarHeight}});
},{isPage:false,isComponent:true,currentFile:'components/PageLoading/PageLoading.js'});require("components/PageLoading/PageLoading.js");