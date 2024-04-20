$gwx_XC_34=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];
function gz$gwx_XC_34_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'lottery']],[[2,'!=='],[[6],[[7],[3,'lottery']],[3,'draw_type']],[1,'ontime']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_34=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_34=true;
var x=['./components/JoinNotification/JoinNotification.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_34_1()
var oVD=_v()
_(r,oVD)
if(_oz(z,0,e,s,gg)){oVD.wxVkey=1
}
oVD.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_34";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_34();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/JoinNotification/JoinNotification.wxml'] = [$gwx_XC_34, './components/JoinNotification/JoinNotification.wxml'];else __wxAppCode__['components/JoinNotification/JoinNotification.wxml'] = $gwx_XC_34( './components/JoinNotification/JoinNotification.wxml' );
	;__wxRoute = "components/JoinNotification/JoinNotification";__wxRouteBegin = true;__wxAppCurrentFile__="components/JoinNotification/JoinNotification.js";define("components/JoinNotification/JoinNotification.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@models/lottery"),t=require("miniprogram-computed"),o=require("@models/marketing"),i=require("@utils/tools");(0,t.ComponentWithComputed)({properties:{lottery:Object,userBindAllow:Boolean},computed:{imageSrc:function(e){var t=e.isSelected,o=e.styleType;return t?"ontime"===o?"https://lucky-cdn.nocode.com/mina/lottery/ontime-joinnoti-selected@3x.png":"https://lucky-cdn.nocode.com/mina/lottery/icon_selected_red@3x.png":"https://lucky-cdn.nocode.com/mina/lottery/noti-icon-unselect@3x.png"}},data:{isSelected:!0,styleType:"time"},watch:{lottery:function(t){var n,s;if(t){var l="bigTop";"video"!==t.join_type&&(t.need_code||[(0,i.isAssistTask)(t),!(0,i.isQuestionEnabled)(t),!(0,i.isWeComFriendLottery)(t)].every(Boolean))&&(l="noTop"),((null==t||null===(n=t.form_template)||void 0===n?void 0:n.type)==e.FormType.EXAM||function(e){var t,o;if(!e)return!1;return!(null===(t=e.assist_info)||void 0===t||null===(o=t.assist_types)||void 0===o||!o.length||!e.vote)}(t))&&(l="bigTop"),"ontime"===t.draw_type&&(null===(s=t.marketing)||void 0===s?void 0:s.type)===o.marketingTypes.ONTIME&&(l="ontime"),this.setData({styleType:l})}},userBindAllow:function(e){e!==this.data.isSelected&&this.setData({isSelected:e})}},methods:{handleClick:function(){var e=!this.data.isSelected;this.setData({isSelected:e}),this.triggerEvent("onjoinnoti",{userBindAllow:e},{bubbles:!0,composed:!0})}}});
},{isPage:false,isComponent:true,currentFile:'components/JoinNotification/JoinNotification.js'});require("components/JoinNotification/JoinNotification.js");