$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'isVipSelected']],[[2,'!'],[[7],[3,'isVipAgreementSelected']]]])
Z([[7],[3,'_isPopShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./components/cy-vip/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var hSC=_v()
_(r,hSC)
if(_oz(z,0,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(r,oTC)
if(_oz(z,1,e,s,gg)){oTC.wxVkey=1
}
hSC.wxXCkey=1
oTC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cy-vip/index.wxml'] = [$gwx_XC_22, './components/cy-vip/index.wxml'];else __wxAppCode__['components/cy-vip/index.wxml'] = $gwx_XC_22( './components/cy-vip/index.wxml' );
	;__wxRoute = "components/cy-vip/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/cy-vip/index.js";define("components/cy-vip/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{vipInfo:{type:Object,value:{}},isVisibleArguments:{type:Boolean,vaule:!0},abstractList:{type:Array,value:[]},benefitsCount:{type:Number,value:0},benefitsList:{type:Array,value:[]},isVipSelected:{type:Boolean,value:!1},isVipAgreementSelected:{type:Boolean,value:!1}},data:{_isPopShow:!1,_selectedIcon:"https://static.chunyuyisheng.com/@/chunyu_mini/selected.png",_noSelectedIcon:"https://static.chunyuyisheng.com/@/chunyu_mini/noselect.png",_selectedArgeementIcon:"https://resource.chunyu.mobi/@/media/images/2022/12/26/3755/c70b2b6115d2_w42_h42_.png",_noSelectedArgeementIcon:"https://resource.chunyu.mobi/@/media/images/2022/12/26/2c0e/7c1358854a38_w42_h42_.png"},methods:{_showPop:function(){this.setData({_isPopShow:!0})},_hidePop:function(){this.setData({_isPopShow:!1})},_changeVipStatus:function(){this.triggerEvent("vipStatusChange")},_changeVipArgeemment:function(){this.triggerEvent("agreementStatusChange")},goArgument:function(){wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent("https://weixin.chunyuyisheng.com/api/wx_group/vip/service_agreement/"))})}}});
},{isPage:false,isComponent:true,currentFile:'components/cy-vip/index.js'});require("components/cy-vip/index.js");