$gwx_XC_117=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_117 || [];
function gz$gwx_XC_117_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_117_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_117_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_117_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'switch']],[[9],[[8],'on',[[2,'==='],[[7],[3,'checked']],[[7],[3,'activeValue']]]],[[8],'disabled',[[7],[3,'disabled']]]]]],[3,' custom-class']])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[9],[[8],'size',[[7],[3,'size']]],[[8],'checked',[[7],[3,'checked']]]],[[8],'activeColor',[[7],[3,'activeColor']]]],[[8],'inactiveColor',[[7],[3,'inactiveColor']]]]]])
Z([[7],[3,'loading']])
Z([[12],[[6],[[7],[3,'computed']],[3,'loadingColor']],[[5],[[9],[[9],[[8],'checked',[[7],[3,'checked']]],[[8],'activeColor',[[7],[3,'activeColor']]]],[[8],'inactiveColor',[[7],[3,'inactiveColor']]]]]])
Z([3,'van-switch__loading'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_117_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_117_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_117=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_117=true;
var x=['./miniprogram_npm/@vant/weapp/switch/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_117_1()
var o42=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var c52=_v()
_(o42,c52)
if(_oz(z,3,e,s,gg)){c52.wxVkey=1
var o62=_mz(z,'van-loading',['color',4,'customClass',1],[],e,s,gg)
_(c52,o62)
}
c52.wxXCkey=1
c52.wxXCkey=3
_(r,o42)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_117";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_117();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.wxml'] = [$gwx_XC_117, './miniprogram_npm/@vant/weapp/switch/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.wxml'] = $gwx_XC_117( './miniprogram_npm/@vant/weapp/switch/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/switch/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/switch/index.js";define("miniprogram_npm/@vant/weapp/switch/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({field:!0,classes:["node-class"],props:{checked:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,size:{type:String,value:"30"},activeValue:{type:null,value:!0},inactiveValue:{type:null,value:!1}},methods:{onClick:function(){var e=this.data,i=e.activeValue,t=e.inactiveValue,a=e.disabled,l=e.loading;if(!a&&!l){var n=this.data.checked===i?t:i;this.$emit("input",n),this.$emit("change",n)}}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/switch/index.js'});require("miniprogram_npm/@vant/weapp/switch/index.js");