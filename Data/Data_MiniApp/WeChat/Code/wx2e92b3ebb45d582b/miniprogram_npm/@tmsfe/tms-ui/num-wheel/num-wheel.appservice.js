$gwx_XC_41=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];
function gz$gwx_XC_41_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'decimals']],[[6],[[7],[3,'decimals']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_41=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_41=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_41_1()
var c1K=_v()
_(r,c1K)
if(_oz(z,0,e,s,gg)){c1K.wxVkey=1
}
c1K.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_41";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_41();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.wxml'] = [$gwx_XC_41, './miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.wxml'] = $gwx_XC_41( './miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.js";define("miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/slicedToArray");Component({properties:{num:{type:String,value:"0.00",observer:function(t,e){t!==e&&this.updateNum(t)}},fontFamily:{type:String,value:"DIN Alternate"},fontSize:{type:Number,value:66},color:{type:String,value:"#fff"},duration:{type:Number,value:2e3}},data:{integers:[],decimals:[]},attached:function(){this.updateNum(this.data.num)},methods:{updateNum:function(t){var e=this,i=this.splitIntegerDecimal(String(t)),r=i.integerStr,n=i.decimalStr;if(r||n){var a=r.split("").map((function(t){return parseInt(t,10)})),l=n.split("").map((function(t){return parseInt(t,10)})),u=this.data,s=u.integers,d=u.decimals;if(s.length<a.length)for(var g=a.length-s.length;g>0;g-=1)s.unshift(0);if(d.length<l.length)for(var o=l.length-d.length;o>0;o-=1)d.unshift(0);this.setData({integers:s,decimals:d},(function(){return e.setData({integers:a,decimals:l})}))}},splitIntegerDecimal:function(e){var i,r;if(!/^\d+(\.\d*)?$/.test(e))return{integerStr:"",decimalStr:""};var n=e.split("."),a=t(n,2),l=a[0],u=a[1],s=null===(i=l)||void 0===i?void 0:i.length,d=null===(r=u)||void 0===r?void 0:r.length;if(!s){if(!d)return{integerStr:"",decimalStr:""};l="0"}return d||(u=""),{integerStr:l,decimalStr:u}}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.js'});require("miniprogram_npm/@tmsfe/tms-ui/num-wheel/num-wheel.js");