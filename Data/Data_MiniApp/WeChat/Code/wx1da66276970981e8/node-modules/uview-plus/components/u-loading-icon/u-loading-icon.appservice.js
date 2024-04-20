$gwx_XC_71=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_71 || [];
function gz$gwx_XC_71_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([[4],[[5],[[5],[[5],[1,'u-loading-icon']],[1,'data-v-adfb58a0']],[[7],[3,'t']]]])
Z([[7],[3,'s']])
Z([[7],[3,'b']])
Z([[7],[3,'c']])
Z([[7],[3,'o']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_71=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_71=true;
var x=['./node-modules/uview-plus/components/u-loading-icon/u-loading-icon.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_71_1()
var cTO=_v()
_(r,cTO)
if(_oz(z,0,e,s,gg)){cTO.wxVkey=1
var hUO=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oVO=_v()
_(hUO,oVO)
if(_oz(z,3,e,s,gg)){oVO.wxVkey=1
var oXO=_v()
_(oVO,oXO)
if(_oz(z,4,e,s,gg)){oXO.wxVkey=1
}
oXO.wxXCkey=1
}
var cWO=_v()
_(hUO,cWO)
if(_oz(z,5,e,s,gg)){cWO.wxVkey=1
}
oVO.wxXCkey=1
cWO.wxXCkey=1
_(cTO,hUO)
}
cTO.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_71";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_71();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-loading-icon/u-loading-icon.wxml'] = [$gwx_XC_71, './node-modules/uview-plus/components/u-loading-icon/u-loading-icon.wxml'];else __wxAppCode__['node-modules/uview-plus/components/u-loading-icon/u-loading-icon.wxml'] = $gwx_XC_71( './node-modules/uview-plus/components/u-loading-icon/u-loading-icon.wxml' );
	;__wxRoute = "node-modules/uview-plus/components/u-loading-icon/u-loading-icon";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-plus/components/u-loading-icon/u-loading-icon.js";define("node-modules/uview-plus/components/u-loading-icon/u-loading-icon.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/vendor.js");require("../../../../consts.js");var t={name:"u-loading-icon",mixins:[e.mpMixin,e.mixin,e.props$3],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=e.index.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(e){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var e=this,t=getCurrentPages(),i=t[t.length-1].$getAppWebview();i.addEventListener("hide",(function(){e.webviewHide=!0})),i.addEventListener("show",(function(){e.webviewHide=!1}))}}},i=e._export_sfc(t,[["render",function(t,i,n,o,r,d){return e.e({a:t.show},t.show?e.e({b:!r.webviewHide},r.webviewHide?{}:e.e({c:"spinner"===t.mode},"spinner"===t.mode?{d:e.f(r.array12,(function(e,t,i){return{a:t}}))}:{},{e:e.n("u-loading-icon__spinner--".concat(t.mode)),f:t.color,g:t.$u.addUnit(t.size),h:t.$u.addUnit(t.size),i:t.color,j:d.otherBorderColor,k:d.otherBorderColor,l:d.otherBorderColor,m:"".concat(t.duration,"ms"),n:"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}),{o:t.text},t.text?{p:e.t(t.text),q:t.$u.addUnit(t.textSize),r:t.textColor}:{},{s:e.s(t.$u.addStyle(t.customStyle)),t:e.n(t.vertical&&"u-loading-icon--vertical")}):{})}],["__scopeId","data-v-adfb58a0"]]);wx.createComponent(i);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-plus/components/u-loading-icon/u-loading-icon.js'});require("node-modules/uview-plus/components/u-loading-icon/u-loading-icon.js");