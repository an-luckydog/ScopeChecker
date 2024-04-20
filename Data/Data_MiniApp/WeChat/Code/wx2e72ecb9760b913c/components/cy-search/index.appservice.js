$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'top-search-inner'])
Z([[7],[3,'showIcon']])
Z([[7],[3,'showClear']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./components/cy-search/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var a6B=_n('view')
_rz(z,a6B,'class',0,e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,1,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(a6B,e8B)
if(_oz(z,2,e,s,gg)){e8B.wxVkey=1
}
t7B.wxXCkey=1
e8B.wxXCkey=1
_(r,a6B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-search/index.wxml'] = [$gwx_XC_15, './components/cy-search/index.wxml'];else __wxAppCode__['components/cy-search/index.wxml'] = $gwx_XC_15( './components/cy-search/index.wxml' );
	;__wxRoute = "components/cy-search/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy-search/index.js";define("components/cy-search/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{query:{type:String,value:""},placeholder:{type:String,value:"按症状、疾病、医院、科室、医生名"},showIcon:{type:Boolean,value:!0},width:{type:Number,value:750},paddingLeft:{type:Number,value:20},focus:{type:Boolean,value:!1},showClear:{type:Boolean,value:!0}},data:{},methods:{inputEvent:function(e){var t=e.detail.value;this.setData({query:t}),this.triggerEvent("inputEvent",t)},clearValue:function(){this.setData({query:"",focus:!0}),this.triggerEvent("inputEvent",this.data.query)},confirmEvent:function(e){var t=e.detail.value;this.triggerEvent("confirmEvent",t)},focusEvent:function(){this.triggerEvent("focusEvent")}}});
},{isPage:false,isComponent:true,currentFile:'components/cy-search/index.js'});require("components/cy-search/index.js");