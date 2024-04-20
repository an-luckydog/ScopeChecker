$gwx_XC_70=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_70 || [];
function gz$gwx_XC_70_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'options']])
Z([3,'index'])
Z([3,'onSelect'])
Z([3,'van-share-sheet__option'])
Z([[7],[3,'index']])
Z([3,'van-share-sheet__button'])
Z([[6],[[7],[3,'item']],[3,'openType']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'description']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_70=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_70=true;
var x=['./wxcomponents/vant/share-sheet/options.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_70_1()
var cKT=_v()
_(r,cKT)
var oLT=function(aNT,lMT,tOT,gg){
var bQT=_mz(z,'view',['bindtap',2,'class',1,'data-index',2],[],aNT,lMT,gg)
var oRT=_mz(z,'button',['class',5,'openType',1],[],aNT,lMT,gg)
var xST=_v()
_(oRT,xST)
if(_oz(z,7,aNT,lMT,gg)){xST.wxVkey=1
}
var oTT=_v()
_(oRT,oTT)
if(_oz(z,8,aNT,lMT,gg)){oTT.wxVkey=1
}
xST.wxXCkey=1
oTT.wxXCkey=1
_(bQT,oRT)
_(tOT,bQT)
return tOT
}
cKT.wxXCkey=2
_2z(z,0,oLT,e,s,gg,cKT,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_70";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_70();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/share-sheet/options.wxml'] = [$gwx_XC_70, './wxcomponents/vant/share-sheet/options.wxml'];else __wxAppCode__['wxcomponents/vant/share-sheet/options.wxml'] = $gwx_XC_70( './wxcomponents/vant/share-sheet/options.wxml' );
	;__wxRoute = "wxcomponents/vant/share-sheet/options";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/share-sheet/options.js";define("wxcomponents/vant/share-sheet/options.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../common/component").VantComponent)({props:{options:Array,showBorder:Boolean},methods:{onSelect:function(t){var e=t.currentTarget.dataset.index,o=this.data.options[e];this.$emit("select",Object.assign(Object.assign({},o),{index:e}))}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/share-sheet/options.js'});require("wxcomponents/vant/share-sheet/options.js");