$gwx_XC_64=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_64 || [];
function gz$gwx_XC_64_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'preJoin'])
Z([3,'box'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_64=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_64=true;
var x=['./components/SubBtn/SubBtn.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_64_1()
var hMI=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var oNI=_n('slot')
_(hMI,oNI)
_(r,hMI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_64";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_64();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/SubBtn/SubBtn.wxml'] = [$gwx_XC_64, './components/SubBtn/SubBtn.wxml'];else __wxAppCode__['components/SubBtn/SubBtn.wxml'] = $gwx_XC_64( './components/SubBtn/SubBtn.wxml' );
	;__wxRoute = "components/SubBtn/SubBtn";__wxRouteBegin = true;__wxAppCurrentFile__="components/SubBtn/SubBtn.js";define("components/SubBtn/SubBtn.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../@babel/runtime/helpers/regeneratorRuntime"),r=require("../../@babel/runtime/helpers/asyncToGenerator"),n=(e=require("../../behavior/join"))&&e.__esModule?e:{default:e},i=require("../../services/group"),s=require("../../utils/tools"),o=require("lodash");Component({behaviors:[n.default],properties:{lottery:{type:Object,observer:function(e){e&&this.handleLotteryChanged(e)}},noSubscribe:Boolean},data:{canJoinGroup:!1},methods:{handleLotteryChanged:function(e){var n=this;return r(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._joining&&e.is_participator&&(n.handleJoinSuccess(),n._joining=!1),t.t0=n,t.next=4,(0,i.canJoinGroup)(e);case 4:t.t1=t.sent,t.t2={canJoinGroup:t.t1},t.t0.setData.call(t.t0,t.t2);case 7:case"end":return t.stop()}}),r)})))()},preJoin:function(){if(this.data.noSubscribe)return this.joining();var e=(0,s.getCurrentPage)();this.subscribeComp=e.selectComponent("#join-lottery-subscribe-message"),this.subscribeComp?(this.subscribeComp.auth(!1,this.data.lottery),this.subscribeComp.listen(this.joining.bind(this))):this.joining()},joining:function(e){var n=this;return r(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._joining=!0,n.subResult=e,t.next=4,n.commonCheckJoinable();case 4:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:if(!(0,o.get)(n.data,"lottery.is_participator")){t.next=10;break}return t.next=9,n.onCommonAuthSubscribeFinish({detail:e});case 9:return t.abrupt("return",t.sent);case 10:return t.next=12,n.commonPreJoin();case 12:if(t.sent){t.next=14;break}return t.abrupt("return");case 14:n.triggerEvent("join",e);case 15:case"end":return t.stop()}}),r)})))()},handleJoinSuccess:function(){if(this.subResult){var e=this.subResult.authed;e||this.subscribeComp&&this.subscribeComp.remindAfterJoin(),this.commonPostJoin(e)}}}});
},{isPage:false,isComponent:true,currentFile:'components/SubBtn/SubBtn.js'});require("components/SubBtn/SubBtn.js");