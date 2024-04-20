$gwx_XC_94=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_94 || [];
function gz$gwx_XC_94_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_94_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTap'])
Z([3,'van-notify__container'])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[8],'zIndex',[[7],[3,'zIndex']]],[[8],'top',[[7],[3,'top']]]]]])
Z([3,'slide-down'])
Z([[7],[3,'show']])
Z([[7],[3,'safeAreaInsetTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_94_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_94=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_94=true;
var x=['./miniprogram_npm/@vant/weapp/notify/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_94_1()
var oVW=_mz(z,'van-transition',['bind:tap',0,'customClass',1,'customStyle',1,'name',2,'show',3],[],e,s,gg)
var xWW=_v()
_(oVW,xWW)
if(_oz(z,5,e,s,gg)){xWW.wxVkey=1
}
xWW.wxXCkey=1
_(r,oVW)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_94";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_94();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/notify/index.wxml'] = [$gwx_XC_94, './miniprogram_npm/@vant/weapp/notify/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/notify/index.wxml'] = $gwx_XC_94( './miniprogram_npm/@vant/weapp/notify/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/notify/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/notify/index.js";define("miniprogram_npm/@vant/weapp/notify/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../common/color"),o=require("../common/utils");(0,e.VantComponent)({props:{message:String,background:String,type:{type:String,value:"danger"},color:{type:String,value:t.WHITE},duration:{type:Number,value:3e3},zIndex:{type:Number,value:110},safeAreaInsetTop:{type:Boolean,value:!1},top:null},data:{show:!1,onOpened:null,onClose:null,onClick:null},created:function(){var e=(0,o.getSystemInfoSync)().statusBarHeight;this.setData({statusBarHeight:e})},methods:{show:function(){var e=this,t=this.data,o=t.duration,n=t.onOpened;clearTimeout(this.timer),this.setData({show:!0}),wx.nextTick(n),o>0&&o!==1/0&&(this.timer=setTimeout((function(){e.hide()}),o))},hide:function(){var e=this.data.onClose;clearTimeout(this.timer),this.setData({show:!1}),wx.nextTick(e)},onTap:function(e){var t=this.data.onClick;t&&t(e.detail)}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/notify/index.js'});require("miniprogram_npm/@vant/weapp/notify/index.js");