$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];
function gz$gwx_XC_26_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([[7],[3,'showGuide']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var oPI=_v()
_(r,oPI)
if(_oz(z,0,e,s,gg)){oPI.wxVkey=1
}
var lQI=_v()
_(r,lQI)
if(_oz(z,1,e,s,gg)){lQI.wxVkey=1
}
oPI.wxXCkey=1
lQI.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.wxml'] = [$gwx_XC_26, './miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.wxml'] = $gwx_XC_26( './miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/favorite/favorite";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.js";define("miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes");var t=e(require("../platformUtils"));function e(t){return t&&t.__esModule?t:{default:t}}var n=e(require("@tmsfe/tms-core")).default.getReporter().report,i=[1001,1089,1103,1104,1168];Component({properties:{from:{type:String},key:{type:String},mode:{type:String},wrapBgColor:{type:String,value:"#fff"},borderColor:{type:String,value:"rgba(100, 133, 193, 0.3)"},bgColor:{type:String,value:"#eff6ff"},color:{type:String,value:"#6485c1"},pullDownBgColor:{type:String,value:"transparent"},content:{type:String,value:t.default.isSinan()?"添加到我的小程序，下拉微信首页就能找到":"添加到我的小程序, 下次打开更方便"},subContent:{type:String,value:""},floating:{type:Boolean,value:!1},closeIconType:{type:String,value:""},bubbleArrowType:{type:String,value:"black"},bubbleButtonStyle:{type:String,value:""}},data:{animationData:{},show:!0,isSinan:t.default.isSinan(),showAni:!0,showGuide:!1},rendered:!1,pageLifetimes:{show:function(){this.rendered&&this.render()}},ready:function(){this.render()},methods:{render:function(){var t={scene:0},e=!1;try{var n=wx.getEnterOptionsSync&&wx.getEnterOptionsSync();t.scene=(null==n?void 0:n.scene)||0;var r=this.data.key?"".concat("favorite_closed","_").concat(this.data.key):"favorite_closed";e=wx.getStorageSync(r)}catch(t){e=!0}e||i.includes(t.scene)?this.hide():(this.renderArrow(),this.show(),this.rendered=!0)},show:function(){var t=this,e=this.createAnimation("84rpx",1);this.setData({animationData:e},(function(){return setTimeout((function(){return t.triggerEvent("display-changed",!0)}),210)})),n({26:"AP",27:"AP000",40:this.data.from})},hide:function(){var t=this,e=this.createAnimation("0rpx",0);this.setData({animationData:e},(function(){t.setData({show:!1}),t.triggerEvent("display-changed",!1)}))},close:function(){this.hide();try{var t=this.data.key?"".concat("favorite_closed","_").concat(this.data.key):"favorite_closed";wx.setStorageSync(t,!0)}catch(t){}n({26:"AP",27:"AP001",40:this.data.from})},createAnimation:function(t,e){var n=wx.createAnimation({duration:200,timingFunction:"ease-in-out"});return n.height(t).opacity(e).step(),n.export()},renderArrow:function(){var t={left:0,width:88};try{t=wx.getMenuButtonBoundingClientRect()||t}catch(t){}var e=t.width,n=t.left;n=n<=0?"80.9%":n-10/3+e/4,this.setData({arrowLeft:n})},showGuide:function(){this.setData({showAni:!1,showGuide:!0}),n({26:"AP",27:"AP002",40:this.data.from})},hideGuide:function(){this.setData({showAni:!0,showGuide:!1})},disableScroll:function(){return!1}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.js'});require("miniprogram_npm/@tmsfe/tms-ui/favorite/favorite.js");