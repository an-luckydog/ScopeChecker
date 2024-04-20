$gwx_XC_44=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_44 || [];
function gz$gwx_XC_44_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'closeHandle'])
Z([3,'width: 305px; border-radius: 10px; z-index: 1005; overflow: visible;'])
Z([3,'loginpopup'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_44=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_44=true;
var x=['./components/LoginPopup/LoginPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_44_1()
var cHF=_mz(z,'PopupBox',['bindpopupboxhide',0,'customStyle',1,'id',1],[],e,s,gg)
_(r,cHF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_44";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_44();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/LoginPopup/LoginPopup.wxml'] = [$gwx_XC_44, './components/LoginPopup/LoginPopup.wxml'];else __wxAppCode__['components/LoginPopup/LoginPopup.wxml'] = $gwx_XC_44( './components/LoginPopup/LoginPopup.wxml' );
	;__wxRoute = "components/LoginPopup/LoginPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/LoginPopup/LoginPopup.js";define("components/LoginPopup/LoginPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t,r=require("../../@babel/runtime/helpers/regeneratorRuntime"),n=require("../../@babel/runtime/helpers/asyncToGenerator"),o=require("@/constant"),i=require("@services/chou"),a=require("@utils/user"),s=(e=require("@utils/analyse"))&&e.__esModule?e:{default:e},l=require("@utils/agreement");Component({properties:{toggle:{type:Boolean,value:!1}},observers:{toggle:function(e){this.toggleHandle(e)}},data:{DEFAULT_AVATAR:o.DEFAULT_AVATAR},methods:{closeHandle:function(){this.triggerEvent("onhide"),this.toggleHandle(!1)},handleLogin:(t=n(r().mark((function e(){var t,n,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,s.default)("dialog_main_profile_accept",{label:1}),e.prev=1,e.next=4,(0,i.getWxUserInfo)("展示用户头像昵称");case 4:if(o=e.sent,"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"!==(null===(t=o.userInfo)||void 0===t?void 0:t.avatarUrl)||"微信用户"!==(null===(n=o.userInfo)||void 0===n?void 0:n.nickName)){e.next=9;break}throw wx.showToast({title:"更新失败，请升级微信后再试",icon:"none"}),new Error("更新失败，请升级微信后再试");case 9:return e.next=11,(0,a.updateWechatInfo)(o);case 11:return e.next=13,(0,i.updateUserAgreements)();case 13:(0,a.updateWxWork)(),this.triggerEvent("onconfirm"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),this.triggerEvent("onerror");case 20:case"end":return e.stop()}}),e,this,[[1,17]])}))),function(){return t.apply(this,arguments)}),onClickProtocol:function(){(0,l.navigateToAgreement)("service")},toggleHandle:function(e){var t,r;e?null===(t=this.selectComponent("#loginpopup"))||void 0===t||t.show():null===(r=this.selectComponent("#loginpopup"))||void 0===r||r.hide()}}});
},{isPage:false,isComponent:true,currentFile:'components/LoginPopup/LoginPopup.js'});require("components/LoginPopup/LoginPopup.js");