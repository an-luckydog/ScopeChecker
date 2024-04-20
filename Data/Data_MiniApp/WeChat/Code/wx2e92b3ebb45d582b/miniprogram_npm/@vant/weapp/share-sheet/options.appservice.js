$gwx_XC_107=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_107 || [];
function gz$gwx_XC_107_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'options']])
Z([3,'index'])
Z([3,'onSelect'])
Z([3,'van-share-sheet__option'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'description']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_107=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_107=true;
var x=['./miniprogram_npm/@vant/weapp/share-sheet/options.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_107_1()
var fOZ=_v()
_(r,fOZ)
var cPZ=function(oRZ,hQZ,cSZ,gg){
var lUZ=_mz(z,'view',['bindtap',2,'class',1,'data-index',2],[],oRZ,hQZ,gg)
var aVZ=_v()
_(lUZ,aVZ)
if(_oz(z,5,oRZ,hQZ,gg)){aVZ.wxVkey=1
}
var tWZ=_v()
_(lUZ,tWZ)
if(_oz(z,6,oRZ,hQZ,gg)){tWZ.wxVkey=1
}
aVZ.wxXCkey=1
tWZ.wxXCkey=1
_(cSZ,lUZ)
return cSZ
}
fOZ.wxXCkey=2
_2z(z,0,cPZ,e,s,gg,fOZ,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_107";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_107();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/share-sheet/options.wxml'] = [$gwx_XC_107, './miniprogram_npm/@vant/weapp/share-sheet/options.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/share-sheet/options.wxml'] = $gwx_XC_107( './miniprogram_npm/@vant/weapp/share-sheet/options.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/share-sheet/options";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/share-sheet/options.js";define("miniprogram_npm/@vant/weapp/share-sheet/options.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{options:Array,showBorder:Boolean},methods:{onSelect:function(t){var o=t.currentTarget.dataset.index,r=this.data.options[o];this.$emit("select",e(e({},r),{index:o}))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/share-sheet/options.js'});require("miniprogram_npm/@vant/weapp/share-sheet/options.js");