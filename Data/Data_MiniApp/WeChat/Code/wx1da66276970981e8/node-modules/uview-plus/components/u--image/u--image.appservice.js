$gwx_XC_42=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_42 || [];
function gz$gwx_XC_42_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'d']])
Z([3,'__l'])
Z([[7],[3,'a']])
Z([[7],[3,'b']])
Z([[7],[3,'c']])
Z([3,'bf77ed36-0'])
Z(z[0])
Z([[4],[[5],[[5],[1,'loading']],[1,'error']]])
Z([3,'loading'])
Z(z[8])
Z([3,'error'])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_42=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_42=true;
var x=['./node-modules/uview-plus/components/u--image/u--image.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_42_1()
var eLJ=_v()
_(r,eLJ)
if(_oz(z,0,e,s,gg)){eLJ.wxVkey=1
var bMJ=_mz(z,'uv-image',['bind:__l',1,'bindclick',1,'binderror',2,'bindload',3,'uI',4,'uP',5,'uS',6],[],e,s,gg)
var oNJ=_n('view')
_rz(z,oNJ,'slot',8,e,s,gg)
var xOJ=_n('slot')
_rz(z,xOJ,'name',9,e,s,gg)
_(oNJ,xOJ)
_(bMJ,oNJ)
var oPJ=_n('view')
_rz(z,oPJ,'slot',10,e,s,gg)
var fQJ=_n('slot')
_rz(z,fQJ,'name',11,e,s,gg)
_(oPJ,fQJ)
_(bMJ,oPJ)
_(eLJ,bMJ)
}
eLJ.wxXCkey=1
eLJ.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_42";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_42();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u--image/u--image.wxml'] = [$gwx_XC_42, './node-modules/uview-plus/components/u--image/u--image.wxml'];else __wxAppCode__['node-modules/uview-plus/components/u--image/u--image.wxml'] = $gwx_XC_42( './node-modules/uview-plus/components/u--image/u--image.wxml' );
	;__wxRoute = "node-modules/uview-plus/components/u--image/u--image";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-plus/components/u--image/u--image.js";define("node-modules/uview-plus/components/u--image/u--image.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=require("../../../../common/vendor.js");require("../../../../consts.js");var r={name:"u--image",mixins:[o.mpMixin,o.props$1,o.mixin],components:{uvImage:function(){return"../u-image/u-image.js"}},emits:["click","error","load"]};Array||o.resolveComponent("uvImage")();var e=o._export_sfc(r,[["render",function(r,e,n,i,t,s){return{a:o.o((function(o){return r.$emit("click")})),b:o.o((function(o){return r.$emit("error")})),c:o.o((function(o){return r.$emit("load")})),d:o.p({src:r.src,mode:r.mode,width:r.width,height:r.height,shape:r.shape,radius:r.radius,lazyLoad:r.lazyLoad,showMenuByLongpress:r.showMenuByLongpress,loadingIcon:r.loadingIcon,errorIcon:r.errorIcon,showLoading:r.showLoading,showError:r.showError,fade:r.fade,webp:r.webp,duration:r.duration,bgColor:r.bgColor,customStyle:r.customStyle})}}]]);wx.createComponent(e);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-plus/components/u--image/u--image.js'});require("node-modules/uview-plus/components/u--image/u--image.js");