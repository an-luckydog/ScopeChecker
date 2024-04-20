$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'waiting']]])
Z([a,[3,'talk-wrap  talk-wrap-'],[[2,'?:'],[[2,'=='],[[7],[3,'direction']],[1,'right']],[1,'right'],[1,'left']]])
Z([[2,'=='],[[7],[3,'direction']],[1,'left']])
Z([3,'bubble'])
Z([[2,'||'],[[2,'!'],[[7],[3,'loading']]],[[2,'=='],[[7],[3,'direction']],[1,'right']]])
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./components/cy-talk/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var fCC=_v()
_(r,fCC)
if(_oz(z,0,e,s,gg)){fCC.wxVkey=1
var cDC=_n('view')
_rz(z,cDC,'class',1,e,s,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,2,e,s,gg)){hEC.wxVkey=1
}
var oFC=_n('view')
_rz(z,oFC,'class',3,e,s,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,4,e,s,gg)){cGC.wxVkey=1
var oHC=_n('slot')
_rz(z,oHC,'name',5,e,s,gg)
_(cGC,oHC)
}
else{cGC.wxVkey=2
}
cGC.wxXCkey=1
_(cDC,oFC)
hEC.wxXCkey=1
_(fCC,cDC)
}
fCC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-talk/index.wxml'] = [$gwx_XC_18, './components/cy-talk/index.wxml'];else __wxAppCode__['components/cy-talk/index.wxml'] = $gwx_XC_18( './components/cy-talk/index.wxml' );
	;__wxRoute = "components/cy-talk/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy-talk/index.js";define("components/cy-talk/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({externalClasses:[],options:{multipleSlots:!0},properties:{direction:String,words:String,loadingTime:Number},data:{loading:!0,waiting:!0},ready:function(){this._laodingSet()},methods:{_laodingSet:function(t){var e=this;(t=t||e.properties.loadingTime)>1?setTimeout((function(){--t,e._laodingSet(t)}),1e3):(e.setData({waiting:!1}),e.triggerEvent("appendPop"),setTimeout((function(){e.setData({loading:!1}),e.triggerEvent("appendPop")}),1e3))}}});
},{isPage:false,isComponent:true,currentFile:'components/cy-talk/index.js'});require("components/cy-talk/index.js");