$gwx_XC_73=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_73 || [];
function gz$gwx_XC_73_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'skeleton']],[[4],[[5],[[8],'animate',[[7],[3,'animate']]]]]]]])
Z([[7],[3,'avatar']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_73=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_73=true;
var x=['./wxcomponents/vant/skeleton/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_73_1()
var b5T=_v()
_(r,b5T)
if(_oz(z,0,e,s,gg)){b5T.wxVkey=1
var o6T=_n('view')
_rz(z,o6T,'class',1,e,s,gg)
var x7T=_v()
_(o6T,x7T)
if(_oz(z,2,e,s,gg)){x7T.wxVkey=1
}
var o8T=_v()
_(o6T,o8T)
if(_oz(z,3,e,s,gg)){o8T.wxVkey=1
}
x7T.wxXCkey=1
o8T.wxXCkey=1
_(b5T,o6T)
}
else{b5T.wxVkey=2
var f9T=_n('slot')
_(b5T,f9T)
}
b5T.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_73";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_73();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/skeleton/index.wxml'] = [$gwx_XC_73, './wxcomponents/vant/skeleton/index.wxml'];else __wxAppCode__['wxcomponents/vant/skeleton/index.wxml'] = $gwx_XC_73( './wxcomponents/vant/skeleton/index.wxml' );
	;__wxRoute = "wxcomponents/vant/skeleton/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/skeleton/index.js";define("wxcomponents/vant/skeleton/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../common/component").VantComponent)({classes:["avatar-class","title-class","row-class"],props:{row:{type:Number,value:0,observer:function(a){this.setData({rowArray:Array.from({length:a})})}},title:Boolean,avatar:Boolean,loading:{type:Boolean,value:!0},animate:{type:Boolean,value:!0},avatarSize:{type:String,value:"32px"},avatarShape:{type:String,value:"round"},titleWidth:{type:String,value:"40%"},rowWidth:{type:null,value:"100%",observer:function(a){this.setData({isArray:a instanceof Array})}}},data:{isArray:!1,rowArray:[]}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/skeleton/index.js'});require("wxcomponents/vant/skeleton/index.js");