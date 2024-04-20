$gwx_XC_150=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_150 || [];
function gz$gwx_XC_150_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_150_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_150_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_150_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'single-message-container '],[[2,'?:'],[[2,'==='],[[7],[3,'type']],[1,'patient']],[1,'reverse'],[1,'']]])
Z([[2,'==='],[[7],[3,'type']],[1,'doctor']])
Z([3,'content-holder'])
Z(z[1])
Z([[2,'==='],[[7],[3,'contentType']],[1,'text']])
Z([[2,'==='],[[7],[3,'contentType']],[1,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_150_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_150_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_150=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_150=true;
var x=['./pages/inquery/components/single_message/single_message.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_150_1()
var o2BB=_n('view')
_rz(z,o2BB,'class',0,e,s,gg)
var x3BB=_v()
_(o2BB,x3BB)
if(_oz(z,1,e,s,gg)){x3BB.wxVkey=1
}
var o4BB=_n('view')
_rz(z,o4BB,'class',2,e,s,gg)
var f5BB=_v()
_(o4BB,f5BB)
if(_oz(z,3,e,s,gg)){f5BB.wxVkey=1
}
var c6BB=_v()
_(o4BB,c6BB)
if(_oz(z,4,e,s,gg)){c6BB.wxVkey=1
}
var h7BB=_v()
_(o4BB,h7BB)
if(_oz(z,5,e,s,gg)){h7BB.wxVkey=1
}
f5BB.wxXCkey=1
c6BB.wxXCkey=1
h7BB.wxXCkey=1
_(o2BB,o4BB)
x3BB.wxXCkey=1
_(r,o2BB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_150";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_150();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inquery/components/single_message/single_message.wxml'] = [$gwx_XC_150, './pages/inquery/components/single_message/single_message.wxml'];else __wxAppCode__['pages/inquery/components/single_message/single_message.wxml'] = $gwx_XC_150( './pages/inquery/components/single_message/single_message.wxml' );
	;__wxRoute = "pages/inquery/components/single_message/single_message";__wxRouteBegin = true;__wxAppCurrentFile__="pages/inquery/components/single_message/single_message.js";define("pages/inquery/components/single_message/single_message.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{avatar:{type:String,value:""},text:{type:String,value:""},type:{type:String,value:"doctor"},contentType:{type:String,value:"text"},imgPath:{type:String,value:""},doctorName:{type:String,value:""}}});
},{isPage:false,isComponent:true,currentFile:'pages/inquery/components/single_message/single_message.js'});require("pages/inquery/components/single_message/single_message.js");