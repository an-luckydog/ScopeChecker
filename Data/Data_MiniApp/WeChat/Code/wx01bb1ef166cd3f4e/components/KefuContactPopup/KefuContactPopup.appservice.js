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
Z([3,'kefubox'])
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_36=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_36=true;
var x=['./components/KefuContactPopup/KefuContactPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
var cBE=_n('PopupBox')
_rz(z,cBE,'id',0,e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,1,e,s,gg)){hCE.wxVkey=1
}
hCE.wxXCkey=1
_(r,cBE)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/KefuContactPopup/KefuContactPopup.wxml'] = [$gwx_XC_36, './components/KefuContactPopup/KefuContactPopup.wxml'];else __wxAppCode__['components/KefuContactPopup/KefuContactPopup.wxml'] = $gwx_XC_36( './components/KefuContactPopup/KefuContactPopup.wxml' );
	;__wxRoute = "components/KefuContactPopup/KefuContactPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/KefuContactPopup/KefuContactPopup.js";define("components/KefuContactPopup/KefuContactPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=(e=require("@utils/analyse"))&&e.__esModule?e:{default:e},o=require("@utils/tools");Component({properties:{contactId:{type:String,value:""},lotteryId:{type:String,value:""}},data:{visible:!1,showGif:!1,sessionFrom:'{"open_reply":"off"}',path:""},methods:{switchImage:function(){this.setData({showGif:!0})},handleContactReply:function(){(0,t.default)("winnercontact_savecode_confirm")},hide:function(){var e=this.selectComponent("#kefubox");e&&e.hide(),this.setData({visible:!1})},show:function(){var e=this.selectComponent("#kefubox");e&&e.show(),this.setData({visible:!0,sessionFrom:(0,o.getSessionFrom)('{"open_reply":"off"}')})}}});
},{isPage:false,isComponent:true,currentFile:'components/KefuContactPopup/KefuContactPopup.js'});require("components/KefuContactPopup/KefuContactPopup.js");