$gwx_XC_95=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_95 || [];
function gz$gwx_XC_95_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_95=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_95=true;
var x=['./pages/profile/component/BirthdayDetail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_95_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_95";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_95();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/profile/component/BirthdayDetail/index.wxml'] = [$gwx_XC_95, './pages/profile/component/BirthdayDetail/index.wxml'];else __wxAppCode__['pages/profile/component/BirthdayDetail/index.wxml'] = $gwx_XC_95( './pages/profile/component/BirthdayDetail/index.wxml' );
	;__wxRoute = "pages/profile/component/BirthdayDetail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/profile/component/BirthdayDetail/index.js";define("pages/profile/component/BirthdayDetail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/profile/component/BirthdayDetail/index"],{"1b58":function(e,t,n){n.r(t);var i=n("421d"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=r.a},"421d":function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n("4795")),r=n("6653"),a=n("ea9b"),u=n("d257");function o(e,t,n,i,r,a,u){try{var o=e[a](u),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(i,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function u(e){o(a,i,r,u,c,"next",e)}function c(e){o(a,i,r,u,c,"throw",e)}u(void 0)}))}}var s="/pages/allProduct/index",l="/crmActivityMiniAppUnit/pages/birthdayCare/guide?former_banner_source=birthday_popup",f={props:{order:Number,current:Number,level:String,data:Object,popupVisible:Boolean},data:function(){return{LEVEL_MAP:r.LEVEL_MAP,type:1,hasPrivilege:!1,inBirthdayCycle:!1,isReceived:!1}},computed:{isShow:function(e){return e.order===e.current},hasTacked:function(){return["has-ticket","has-frame","off-gift"].includes(this.state)},state:function(){var e=this.data,t=e.birthGiftStatus,n=e.memberLevel;if("disable"===t)return"un-level";if(!n.includes(this.level))return"un-level";switch(t){case"precondition":return"on-birthday";case"waiting":case"wait_use":return"has-ticket";case"exchanged":return"has-frame";case"expired":return"off-gift";default:return"no-gift"}},scrollState:function(){var e=this;return{class:["un-level","no-gift","off-gift"].includes(this.state)?"normal":"on-birthday",text:function(){switch(e.state){case"un-level":return"升级可享受生日权益哦~";case"no-gift":return"期待美好的日子到来~";default:return""}}()}},ktClass:function(){return"on-birthday"===this.state?"wait_tag":["has-ticket","has-frame"].includes(this.state)?"get_tag":"none_tag"},btnInfo:function(){return{"no-privilege":{name:"去升级",link:s},"not-date":{name:"解锁更多惊喜",link:s},"not-receive":{name:"领取生日福利",link:l},"is-receive":{name:"查看生日福利",link:l}}[this.btnState]},btnState:function(){return this.hasPrivilege?this.inBirthdayCycle?this.isReceived?"is-receive":"not-receive":"not-date":"no-privilege"}},watch:{popupVisible:{immediate:!0,handler:function(e){e&&this.getPrivilegeStatus()}}},methods:{handleClick:function(){var t=this;return c(i.default.mark((function n(){return i.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.$emit("close"),t.btnInfo.link){n.next=3;break}return n.abrupt("return");case 3:if(t.btnInfo.link!==s){n.next=6;break}return e.switchTab({url:t.btnInfo.link}),n.abrupt("return");case 6:if(t.btnInfo.link!==l){n.next=11;break}if(u.IS_ALIPAY_MINI||u.IS_WX_MINI){n.next=10;break}return t.$littleToast("请从支付宝或微信打开"),n.abrupt("return");case 10:(0,u.navigateTo)({url:t.btnInfo.link});case 11:case"end":return n.stop()}}),n)})))()},getPrivilegeStatus:function(){var e=this;return c(i.default.mark((function t(){var n,r,u,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.getBirthdayPrivilegeState)();case 2:n=t.sent,r=n.hasBirthDayCouponBenefit,u=n.isReceivedBirthdayCoupon,o=n.inBirthdayCycle,e.hasPrivilege=r,e.isReceived=u,e.inBirthdayCycle=o;case 9:case"end":return t.stop()}}),t)})))()}}};t.default=f}).call(this,n("543d").default)},"89b3":function(e,t,n){var i=n("e4fd");n.n(i).a},"8fcf":function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){this.$createElement;this._self._c},r=[]},c116:function(e,t,n){n.r(t);var i=n("8fcf"),r=n("1b58");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("89b3");var u=n("f0c5"),o=Object(u.a)(r.default,i.b,i.c,!1,null,"d149426c",null,!1,i.a,void 0);t.default=o.exports},e4fd:function(e,t,n){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/profile/component/BirthdayDetail/index-create-component",{"pages/profile/component/BirthdayDetail/index-create-component":function(e,t,n){n("543d").createComponent(n("c116"))}},[["pages/profile/component/BirthdayDetail/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages/profile/component/BirthdayDetail/index.js'});require("pages/profile/component/BirthdayDetail/index.js");