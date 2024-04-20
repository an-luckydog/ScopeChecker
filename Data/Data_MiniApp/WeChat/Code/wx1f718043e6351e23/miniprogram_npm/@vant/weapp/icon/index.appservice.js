$gwx_XC_74=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_74 || [];
function gz$gwx_XC_74_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_74_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_74_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_74_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootClass']],[[5],[[9],[[8],'classPrefix',[[7],[3,'classPrefix']]],[[8],'name',[[7],[3,'name']]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[8],'customStyle',[[7],[3,'customStyle']]],[[8],'color',[[7],[3,'color']]]],[[8],'size',[[7],[3,'size']]]]]])
Z([[2,'||'],[[2,'!=='],[[7],[3,'info']],[1,null]],[[7],[3,'dot']]])
Z([3,'van-icon__info info-class'])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
Z([[12],[[6],[[7],[3,'computed']],[3,'isImage']],[[5],[[7],[3,'name']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_74_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_74_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_74=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_74=true;
var x=['./miniprogram_npm/@vant/weapp/icon/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_74_1()
var xUY=_mz(z,'view',['bindtap',0,'class',1,'style',1],[],e,s,gg)
var oVY=_v()
_(xUY,oVY)
if(_oz(z,3,e,s,gg)){oVY.wxVkey=1
var cXY=_mz(z,'van-info',['customClass',4,'dot',1,'info',2],[],e,s,gg)
_(oVY,cXY)
}
var fWY=_v()
_(xUY,fWY)
if(_oz(z,7,e,s,gg)){fWY.wxVkey=1
}
oVY.wxXCkey=1
oVY.wxXCkey=3
fWY.wxXCkey=1
_(r,xUY)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_74";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_74();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.wxml'] = [$gwx_XC_74, './miniprogram_npm/@vant/weapp/icon/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.wxml'] = $gwx_XC_74( './miniprogram_npm/@vant/weapp/icon/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/icon/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/icon/index.js";define("miniprogram_npm/@vant/weapp/icon/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({classes:["info-class"],props:{dot:Boolean,info:null,size:null,color:String,customStyle:String,classPrefix:{type:String,value:"van-icon"},name:String},methods:{onClick:function(){this.$emit("click")}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/icon/index.js'});require("miniprogram_npm/@vant/weapp/icon/index.js");