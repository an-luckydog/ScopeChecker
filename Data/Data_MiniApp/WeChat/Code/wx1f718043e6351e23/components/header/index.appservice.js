$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'onlyTitle']]])
Z([[7],[3,'showBack']])
Z([[7],[3,'showHome']])
Z([[7],[3,'isFullPage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./components/header/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var oNE=_v()
_(r,oNE)
if(_oz(z,0,e,s,gg)){oNE.wxVkey=1
var cPE=_v()
_(oNE,cPE)
if(_oz(z,1,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(oNE,hQE)
if(_oz(z,2,e,s,gg)){hQE.wxVkey=1
}
cPE.wxXCkey=1
hQE.wxXCkey=1
}
var fOE=_v()
_(r,fOE)
if(_oz(z,3,e,s,gg)){fOE.wxVkey=1
var oRE=_n('slot')
_(fOE,oRE)
}
oNE.wxXCkey=1
fOE.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/header/index.wxml'] = [$gwx_XC_22, './components/header/index.wxml'];else __wxAppCode__['components/header/index.wxml'] = $gwx_XC_22( './components/header/index.wxml' );
	;__wxRoute = "components/header/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/header/index.js";define("components/header/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Component({properties:{title:{type:String,value:""},isPlaceholder:{type:Boolean,value:!0},isFullPage:{type:Boolean,value:!1},hideHome:{type:Boolean,value:!1},onlyTitle:{type:Boolean,value:!1}},data:{showBack:!1,showHome:!1},methods:{tarBack:function(){},tarHome:function(){}},attached:function(){var t=this,a=getCurrentPages();a.length>1?this.setData({showBack:!0}):a[0].route!=__wxConfig.pages[0]&&0==this.data.hideHome&&this.setData({showHome:!0,homePage:__wxConfig.pages[0]}),e.checkAppInit((function(){var a=e.globalData,o=a.statusBarHeight,i=a.navbarHeight;t.setData({topHeight:i+o,navbarHeight:i,statusBarHeight:o})}))}});
},{isPage:false,isComponent:true,currentFile:'components/header/index.js'});require("components/header/index.js");