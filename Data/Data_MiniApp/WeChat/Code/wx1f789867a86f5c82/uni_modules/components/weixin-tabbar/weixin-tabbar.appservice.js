$gwx_XC_114=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_114 || [];
function gz$gwx_XC_114_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_114_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_114_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_114_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_114_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_114_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_114=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_114=true;
var x=['./uni_modules/components/weixin-tabbar/weixin-tabbar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_114_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_114";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_114();	if (__vd_version_info__.delayedGwx) __wxAppCode__['uni_modules/components/weixin-tabbar/weixin-tabbar.wxml'] = [$gwx_XC_114, './uni_modules/components/weixin-tabbar/weixin-tabbar.wxml'];else __wxAppCode__['uni_modules/components/weixin-tabbar/weixin-tabbar.wxml'] = $gwx_XC_114( './uni_modules/components/weixin-tabbar/weixin-tabbar.wxml' );
	;__wxRoute = "uni_modules/components/weixin-tabbar/weixin-tabbar";__wxRouteBegin = true;__wxAppCurrentFile__="uni_modules/components/weixin-tabbar/weixin-tabbar.js";define("uni_modules/components/weixin-tabbar/weixin-tabbar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["uni_modules/components/weixin-tabbar/weixin-tabbar"],{"360dd":function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("4795")),a=n("d257"),o=n("2f62");function i(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="https://cdn.haimati.cn/himo-user-miniapp/assets/image/new/tabbar",f="https://cdn.haimati.cn/himo-user-miniapp/assets/image/new/2024spring/tabbar",d=[{pagePath:"/pages/index/index",iconPath:p+"/home.png",selectedPath:p+"/home_cur.png",text:"首页"},{pagePath:"/pages/allProduct/index",iconPath:p+"/product.png",selectedPath:p+"/product_cur.png",text:"全部产品"},{pagePath:"/pages/order/index",iconPath:p+"/order.png",selectedPath:p+"/order_cur.png",text:"订单"},{pagePath:"/pages/profile/index",iconPath:p+"/mine.png",selectedPath:p+"/mine_cur.png",text:"我的"}],l={name:"customTabBar",props:{selected:Number,animationData:Object,showTop:{type:Boolean,default:!1},isStart:{type:Boolean,default:!1},isThemeGray:{type:Boolean,default:!1}},data:function(){return{color:"#7A7E83",selectedColor:"#3cc51f",startAnimation:!1,activeIndex:0,lastIndex:0,bottom:""}},mounted:function(){this.activeIndex=this.selected},computed:u(u({},(0,o.mapState)({showThemeSkin:function(e){return e.home.showThemeSkin}})),{},{fitIphoneX:function(){return(0,a.inIos)()&&(0,a.longScreen)()},list:function(){return this.showThemeSkin?d.map((function(e){return u(u({},e),{},{iconPath:e.iconPath.replace(p,f),selectedPath:e.selectedPath.replace(p,f)})})):d}}),methods:{handleClick:function(t,n){if(n===this.activeIndex&&!this.showTop)return!1;var r=t.currentTarget.dataset.path;if(0===n&&this.showTop)return e.pageScrollTo({scrollTop:0,duration:100});e.switchTab({url:r})},tabBarHeight:function(){var e=this;return function(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,u,"next",e)}function u(e){i(o,r,a,c,u,"throw",e)}c(void 0)}))}}(r.default.mark((function t(){var n;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.queryClientRect)(e,".custom_tab-bar");case 2:return n=t.sent,t.abrupt("return",n?n.height:0);case 4:case"end":return t.stop()}}),t)})))()}}};t.default=l}).call(this,n("543d").default)},"5bfe":function(e,t,n){n.r(t);var r=n("360dd"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=a.a},"7bd19":function(e,t,n){},aab6:function(e,t,n){n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var r=function(){this.$createElement;this._self._c},a=[]},f863:function(e,t,n){n.r(t);var r=n("aab6"),a=n("5bfe");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f8d9");var i=n("f0c5"),c=Object(i.a)(a.default,r.b,r.c,!1,null,"6dee5fb6",null,!1,r.a,void 0);t.default=c.exports},f8d9:function(e,t,n){var r=n("7bd19");n.n(r).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["uni_modules/components/weixin-tabbar/weixin-tabbar-create-component",{"uni_modules/components/weixin-tabbar/weixin-tabbar-create-component":function(e,t,n){n("543d").createComponent(n("f863"))}},[["uni_modules/components/weixin-tabbar/weixin-tabbar-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'uni_modules/components/weixin-tabbar/weixin-tabbar.js'});require("uni_modules/components/weixin-tabbar/weixin-tabbar.js");