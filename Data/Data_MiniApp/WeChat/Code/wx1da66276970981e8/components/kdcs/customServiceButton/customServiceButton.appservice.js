$gwx_XC_36=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];
function gz$gwx_XC_36_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'e']])
Z([[7],[3,'f']])
Z([[7],[3,'g']])
Z([3,'all'])
Z([3,'pointer-events:auto'])
Z([[7],[3,'c']])
Z([[7],[3,'d']])
Z([[7],[3,'a']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_36=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_36=true;
var x=['./components/kdcs/customServiceButton/customServiceButton.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
var o0H=_mz(z,'movable-view',['animation',0,'bindchange',1,'bindtouchend',1,'direction',2,'style',3,'x',4,'y',5],[],e,s,gg)
var cAI=_v()
_(o0H,cAI)
if(_oz(z,7,e,s,gg)){cAI.wxVkey=1
}
cAI.wxXCkey=1
_(r,o0H)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_36";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/kdcs/customServiceButton/customServiceButton.wxml'] = [$gwx_XC_36, './components/kdcs/customServiceButton/customServiceButton.wxml'];else __wxAppCode__['components/kdcs/customServiceButton/customServiceButton.wxml'] = $gwx_XC_36( './components/kdcs/customServiceButton/customServiceButton.wxml' );
	;__wxRoute = "components/kdcs/customServiceButton/customServiceButton";__wxRouteBegin = true;__wxAppCurrentFile__="components/kdcs/customServiceButton/customServiceButton.js";define("components/kdcs/customServiceButton/customServiceButton.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty"));function t(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function i(i){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){(0,e.default)(i,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))}))}return i}var n=require("../../../common/vendor.js"),o=require("../../../utils/kdcs/util.js");require("../../../consts.js");var r=o.deviceHeight-100,a=o.deviceWidth-50,s={x:a,y:r},c={data:function(){return{animation:!1,position:i(i({},s),{},{x:"",y:""})}},props:{visible:{type:Boolean,default:!0}},methods:{handlePageShow:function(){this.setPosition(s.x,s.y),this.setData({animation:!0})},handlePageHide:function(){this.setData({animation:!1})},handleMovableViewChange:function(e){if(e&&e.detail){var t=e.detail,i=t.x,n=t.y,o=t.source;this.resetToYaxis(i,n,o)}},handleMovableViewTouchEnd:function(){var e=this;setTimeout((function(){var t=e.position;e.setPosition(a,t.y)}),200)},resetToYaxis:o.debounce((function(e,t,i){i&&this.setPosition(e,t)}),100),setPosition:function(e,t){this.setData({position:{x:e,y:t}}),s.x=e,s.y=t},gotoWebview:function(){n.index.navigateTo({url:"/kdcs/pages/customerMiddlePage/index"})}},created:function(){}},u=n._export_sfc(c,[["render",function(e,t,i,o,r,a){return n.e({a:i.visible},i.visible?{b:n.o((function(){return a.gotoWebview&&a.gotoWebview.apply(a,arguments)}))}:{},{c:r.position.x,d:r.position.y,e:r.animation,f:n.o((function(){return a.handleMovableViewChange&&a.handleMovableViewChange.apply(a,arguments)})),g:n.o((function(){return a.handleMovableViewTouchEnd&&a.handleMovableViewTouchEnd.apply(a,arguments)}))})}]]);wx.createComponent(u);
},{isPage:false,isComponent:true,currentFile:'components/kdcs/customServiceButton/customServiceButton.js'});require("components/kdcs/customServiceButton/customServiceButton.js");