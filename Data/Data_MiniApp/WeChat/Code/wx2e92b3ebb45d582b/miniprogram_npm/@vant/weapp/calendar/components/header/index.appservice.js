$gwx_XC_60=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_60 || [];
function gz$gwx_XC_60_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_60_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-calendar__header'])
Z([[7],[3,'showTitle']])
Z([3,'title'])
Z([[7],[3,'showSubtitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_60_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_60=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_60=true;
var x=['./miniprogram_npm/@vant/weapp/calendar/components/header/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_60_1()
var aDP=_n('view')
_rz(z,aDP,'class',0,e,s,gg)
var tEP=_v()
_(aDP,tEP)
if(_oz(z,1,e,s,gg)){tEP.wxVkey=1
var bGP=_n('slot')
_rz(z,bGP,'name',2,e,s,gg)
_(tEP,bGP)
}
var eFP=_v()
_(aDP,eFP)
if(_oz(z,3,e,s,gg)){eFP.wxVkey=1
}
tEP.wxXCkey=1
eFP.wxXCkey=1
_(r,aDP)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_60";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_60();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/calendar/components/header/index.wxml'] = [$gwx_XC_60, './miniprogram_npm/@vant/weapp/calendar/components/header/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/calendar/components/header/index.wxml'] = $gwx_XC_60( './miniprogram_npm/@vant/weapp/calendar/components/header/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/calendar/components/header/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/calendar/components/header/index.js";define("miniprogram_npm/@vant/weapp/calendar/components/header/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=function(e,t,i){if(i||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../../../common/component").VantComponent)({props:{title:{type:String,value:"日期选择"},subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:{type:Number,observer:"initWeekDay"}},data:{weekdays:[]},created:function(){this.initWeekDay()},methods:{initWeekDay:function(){var t=["日","一","二","三","四","五","六"],i=this.data.firstDayOfWeek||0;this.setData({weekdays:e(e([],t.slice(i,7),!0),t.slice(0,i),!0)})},onClickSubtitle:function(e){this.$emit("click-subtitle",e)}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/calendar/components/header/index.js'});require("miniprogram_npm/@vant/weapp/calendar/components/header/index.js");