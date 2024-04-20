$gwx_XC_81=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_81 || [];
function gz$gwx_XC_81_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldRender']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_81=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_81=true;
var x=['./wxcomponents/vant/tab/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_81_1()
var x5V=_v()
_(r,x5V)
if(_oz(z,0,e,s,gg)){x5V.wxVkey=1
var o6V=_n('slot')
_(x5V,o6V)
}
x5V.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_81";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_81();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/tab/index.wxml'] = [$gwx_XC_81, './wxcomponents/vant/tab/index.wxml'];else __wxAppCode__['wxcomponents/vant/tab/index.wxml'] = $gwx_XC_81( './wxcomponents/vant/tab/index.wxml' );
	;__wxRoute = "wxcomponents/vant/tab/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/tab/index.js";define("wxcomponents/vant/tab/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../common/relation");(0,require("../common/component").VantComponent)({relation:(0,e.useParent)("tabs"),props:{dot:{type:Boolean,observer:"update"},info:{type:null,observer:"update"},title:{type:String,observer:"update"},disabled:{type:Boolean,observer:"update"},titleStyle:{type:String,observer:"update"},name:{type:null,value:""}},data:{active:!1},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(e,t){var a=t.data;this.inited=this.inited||e,this.setData({active:e,shouldRender:this.inited||!a.lazyRender,shouldShow:e||a.animated})},update:function(){this.parent&&this.parent.updateTabs()}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/tab/index.js'});require("wxcomponents/vant/tab/index.js");