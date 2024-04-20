$gwx_XC_62=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_62 || [];
function gz$gwx_XC_62_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'overlay']])
Z([3,'onClickOverlay'])
Z([[7],[3,'overlayStyle']])
Z([[7],[3,'duration']])
Z([[7],[3,'lockScroll']])
Z([[7],[3,'rootPortal']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_62=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_62=true;
var x=['./wxcomponents/vant/popup/index.wxml','./popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_62_1()
var aPR=e_[x[0]].i
_ai(aPR,x[1],e_,x[0],3,2)
var tQR=_v()
_(r,tQR)
if(_oz(z,0,e,s,gg)){tQR.wxVkey=1
var bSR=_mz(z,'van-overlay',['bind:click',1,'customStyle',1,'duration',2,'lockScroll',3,'rootPortal',4,'show',5,'zIndex',6],[],e,s,gg)
_(tQR,bSR)
}
var eRR=_v()
_(r,eRR)
if(_oz(z,8,e,s,gg)){eRR.wxVkey=1
var oTR=e_[x[0]].j
_ic(x[1],e_,x[0],e,s,eRR,gg);
oTR.pop()
}
else{eRR.wxVkey=2
var xUR=e_[x[0]].j
_ic(x[1],e_,x[0],e,s,eRR,gg);
xUR.pop()
}
tQR.wxXCkey=1
tQR.wxXCkey=3
eRR.wxXCkey=1
aPR.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_62";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_62();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/popup/index.wxml'] = [$gwx_XC_62, './wxcomponents/vant/popup/index.wxml'];else __wxAppCode__['wxcomponents/vant/popup/index.wxml'] = $gwx_XC_62( './wxcomponents/vant/popup/index.wxml' );
	;__wxRoute = "wxcomponents/vant/popup/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/popup/index.js";define("wxcomponents/vant/popup/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../common/component"),o=require("../mixins/transition");(0,e.VantComponent)({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class","close-icon-class"],mixins:[(0,o.transition)(!1)],props:{round:Boolean,closeable:Boolean,customStyle:String,overlayStyle:String,transition:{type:String,observer:"observeClass"},zIndex:{type:Number,value:100},overlay:{type:Boolean,value:!0},closeIcon:{type:String,value:"cross"},closeIconPosition:{type:String,value:"top-right"},closeOnClickOverlay:{type:Boolean,value:!0},position:{type:String,value:"center",observer:"observeClass"},safeAreaInsetBottom:{type:Boolean,value:!0},safeAreaInsetTop:{type:Boolean,value:!1},safeAreaTabBar:{type:Boolean,value:!1},lockScroll:{type:Boolean,value:!0},rootPortal:{type:Boolean,value:!1}},created:function(){this.observeClass()},methods:{onClickCloseIcon:function(){this.$emit("close")},onClickOverlay:function(){this.$emit("click-overlay"),this.data.closeOnClickOverlay&&this.$emit("close")},observeClass:function(){var e=this.data,o=e.transition,t=e.position,a=e.duration,s={name:o||t};"none"===o?(s.duration=0,this.originDuration=a):null!=this.originDuration&&(s.duration=this.originDuration),this.setData(s)}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/popup/index.js'});require("wxcomponents/vant/popup/index.js");