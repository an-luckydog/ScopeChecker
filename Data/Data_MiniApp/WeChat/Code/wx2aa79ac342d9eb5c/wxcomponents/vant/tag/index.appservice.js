$gwx_XC_85=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_85 || [];
function gz$gwx_XC_85_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tag']],[[4],[[5],[[5],[[5],[[7],[3,'type']]],[[7],[3,'size']]],[[9],[[9],[[8],'mark',[[7],[3,'mark']]],[[8],'plain',[[7],[3,'plain']]]],[[8],'round',[[7],[3,'round']]]]]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[8],'plain',[[7],[3,'plain']]],[[8],'color',[[7],[3,'color']]]],[[8],'textColor',[[7],[3,'textColor']]]]]])
Z([[7],[3,'closeable']])
Z([3,'onClose'])
Z([3,'van-tag__close'])
Z([3,'cross'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_85=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_85=true;
var x=['./wxcomponents/vant/tag/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_85_1()
var o4W=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var a6W=_n('slot')
_(o4W,a6W)
var l5W=_v()
_(o4W,l5W)
if(_oz(z,2,e,s,gg)){l5W.wxVkey=1
var t7W=_mz(z,'van-icon',['bind:click',3,'customClass',1,'name',2],[],e,s,gg)
_(l5W,t7W)
}
l5W.wxXCkey=1
l5W.wxXCkey=3
_(r,o4W)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_85";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_85();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/tag/index.wxml'] = [$gwx_XC_85, './wxcomponents/vant/tag/index.wxml'];else __wxAppCode__['wxcomponents/vant/tag/index.wxml'] = $gwx_XC_85( './wxcomponents/vant/tag/index.wxml' );
	;__wxRoute = "wxcomponents/vant/tag/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/tag/index.js";define("wxcomponents/vant/tag/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../common/component").VantComponent)({props:{size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,value:"default"},closeable:Boolean},methods:{onClose:function(){this.$emit("close")}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/tag/index.js'});require("wxcomponents/vant/tag/index.js");