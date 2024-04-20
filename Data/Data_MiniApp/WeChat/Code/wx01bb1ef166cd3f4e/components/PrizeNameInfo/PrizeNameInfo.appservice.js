$gwx_XC_58=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_58 || [];
function gz$gwx_XC_58_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'custom-class'])
Z([3,'header'])
Z([3,'prize'])
Z([[7],[3,'prizes']])
Z([3,'id'])
Z(z[2])
Z([[2,'&'],[[7],[3,'isMultiplePrize']],[[2,'!'],[[6],[[6],[[7],[3,'lottery']],[3,'extra']],[3,'hide_prize_level']]]])
Z([3,'prize-right'])
Z([[2,'==='],[[6],[[7],[3,'prize']],[3,'type']],[[6],[[7],[3,'PRIZE_TYPES']],[3,'CASH']]])
Z([[7],[3,'isPrizeCountShow']])
Z([[6],[[7],[3,'prize']],[3,'increase_count']])
Z([[2,'==='],[[6],[[7],[3,'prize']],[3,'type']],[[6],[[7],[3,'PRIZE_TYPES']],[3,'LUCKY_CASH']]])
Z(z[9])
Z([[2,'&&'],[[2,'!=='],[[6],[[7],[3,'prize']],[3,'type']],[[6],[[7],[3,'PRIZE_TYPES']],[3,'OFFICIAL_CASH']]],[[7],[3,'isPrizeCountShow']]])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_58=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_58=true;
var x=['./components/PrizeNameInfo/PrizeNameInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_58_1()
var hGH=_n('view')
_rz(z,hGH,'class',0,e,s,gg)
var oHH=_n('slot')
_rz(z,oHH,'name',1,e,s,gg)
_(hGH,oHH)
var cIH=_v()
_(hGH,cIH)
var oJH=function(aLH,lKH,tMH,gg){
var bOH=_n('view')
_rz(z,bOH,'class',5,aLH,lKH,gg)
var oPH=_v()
_(bOH,oPH)
if(_oz(z,6,aLH,lKH,gg)){oPH.wxVkey=1
}
var xQH=_n('view')
_rz(z,xQH,'class',7,aLH,lKH,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,8,aLH,lKH,gg)){oRH.wxVkey=1
var fSH=_v()
_(oRH,fSH)
if(_oz(z,9,aLH,lKH,gg)){fSH.wxVkey=1
var cTH=_v()
_(fSH,cTH)
if(_oz(z,10,aLH,lKH,gg)){cTH.wxVkey=1
}
cTH.wxXCkey=1
}
fSH.wxXCkey=1
}
else if(_oz(z,11,aLH,lKH,gg)){oRH.wxVkey=2
var hUH=_v()
_(oRH,hUH)
if(_oz(z,12,aLH,lKH,gg)){hUH.wxVkey=1
}
hUH.wxXCkey=1
}
else{oRH.wxVkey=3
var oVH=_v()
_(oRH,oVH)
if(_oz(z,13,aLH,lKH,gg)){oVH.wxVkey=1
var cWH=_v()
_(oVH,cWH)
if(_oz(z,14,aLH,lKH,gg)){cWH.wxVkey=1
}
cWH.wxXCkey=1
}
oVH.wxXCkey=1
}
oRH.wxXCkey=1
_(bOH,xQH)
oPH.wxXCkey=1
_(tMH,bOH)
return tMH
}
cIH.wxXCkey=2
_2z(z,3,oJH,e,s,gg,cIH,'prize','index','id')
_(r,hGH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_58";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_58();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PrizeNameInfo/PrizeNameInfo.wxml'] = [$gwx_XC_58, './components/PrizeNameInfo/PrizeNameInfo.wxml'];else __wxAppCode__['components/PrizeNameInfo/PrizeNameInfo.wxml'] = $gwx_XC_58( './components/PrizeNameInfo/PrizeNameInfo.wxml' );
	;__wxRoute = "components/PrizeNameInfo/PrizeNameInfo";__wxRouteBegin = true;__wxAppCurrentFile__="components/PrizeNameInfo/PrizeNameInfo.js";define("components/PrizeNameInfo/PrizeNameInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@models/lottery"),i=require("@/constant"),t=require("@utils/prize");Component({options:{multipleSlots:!0},externalClasses:["custom-class"],properties:{lottery:{type:Object,observer:function(e){var i,r;if(e){var s=(null===(i=e.prizes)||void 0===i?void 0:i.data)||e.prizes||[];this.setData({isPrizeCountShow:null===(r=e.prizes)||void 0===r||!r.data||(0,t.isPrizeCountShow)(e),isMultiplePrize:s.length>1,prizes:s})}}}},data:{isPrizeCountShow:!0,isMultiplePrize:!1,PRIZE_TYPES:e.PRIZE_TYPES,REDPACKET_ICON:i.REDPACKET_ICON,prizes:[]},methods:{}});
},{isPage:false,isComponent:true,currentFile:'components/PrizeNameInfo/PrizeNameInfo.js'});require("components/PrizeNameInfo/PrizeNameInfo.js");