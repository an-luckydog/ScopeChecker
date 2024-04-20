$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[12],[[7],[3,'getPrefixCls']],[[5],[1,'seckill-progress-bar-track']]])
Z([3,'s-sidx_3'])
Z([[7],[3,'trackStyleObj']])
Z([[2,'<'],[[6],[[7],[3,'progressData']],[3,'percentage']],[1,100]])
Z(z[3])
Z([[6],[[7],[3,'progressData']],[3,'percentage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var aRI=_mz(z,'view',['class',0,'id',1,'style',1],[],e,s,gg)
var tSI=_v()
_(aRI,tSI)
if(_oz(z,3,e,s,gg)){tSI.wxVkey=1
}
var eTI=_v()
_(aRI,eTI)
if(_oz(z,4,e,s,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(aRI,bUI)
if(_oz(z,5,e,s,gg)){bUI.wxVkey=1
}
tSI.wxXCkey=1
eTI.wxXCkey=1
bUI.wxXCkey=1
_(r,aRI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.wxml'] = [$gwx_XC_30, './cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.wxml'];else __wxAppCode__['cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.wxml'] = $gwx_XC_30( './cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.wxml' );
	;__wxRoute = "cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.js";define("cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../../titan.bootstrap.js");var t=global.bc("package","cms_design");require("../../../../../titan-scoped-env.js").Component({properties:{progressData:{type:Object,value:{}}},data:{originPosition:50,endPosition:20,defaultHeight:32},attached:function(){var t=this.data,a=t.progressData,r=t.defaultHeight,e=a.width,o=a.height,i=a.borderRadiusStyleString,n=(a.borderRadiusVal,e?"".concat(e,"rpx"):"100%"),c="".concat(o||r,"rpx"),s=this.portionStyle(),d=this.markStyle();this.setData({totalBarStyle:"width: ".concat(n,"; height:").concat(c,";"),trackStyleObj:s,markStyleObj:d,borderRadiusStyleString:i})},methods:{portionStyle:function(){var t=this.data.progressData,a=t.color,r=t.percentage,e=t.borderRadiusVal,o=this.computerPercentage(),i="border-top-left-radius: ".concat(e,";border-bottom-left-radius: ").concat(e,"; "),n="border-top-right-radius: ".concat(e,";border-bottom-right-radius: ").concat(e,"; "),c="width:".concat(o,"rpx;background: ").concat(a,";").concat(i," ");return r>=100&&(c="width:100%; background:#E0E0E0;".concat(i,";").concat(n)),c},markStyle:function(t){var a=this.data.progressData.percentage,r="";return(!a||Number(a)<1)&&(r="left: 0; right: 0;margin:auto"),r},computerPercentage:function(){var t=this.data.progressData,a=t.percentage,r=t.width,e=this.data,o=e.originPosition,i=r-o-e.endPosition;return(a/=100)?Math.floor(i*a+o):o}}}),global.ec(t);
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.js'});require("cms_design/RAW/miniprogram_npm/@design-ec/wx-good-card/components/seckill-progress/index.js");