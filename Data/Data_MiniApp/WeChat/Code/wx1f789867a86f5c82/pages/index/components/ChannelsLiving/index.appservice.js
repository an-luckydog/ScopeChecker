$gwx_XC_73=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_73 || [];
function gz$gwx_XC_73_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[[5],[1,'_div']],[1,'data-v-320d0b39']],[1,'component-channels-living']],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'showThemeSkin']],[1,'christmas-theme'],[1,'']]],[[2,'?:'],[[7],[3,'isThemeGray']],[1,'theme-gray'],[1,'']]]]]])
Z([[2,'==='],[[6],[[7],[3,'liveContentInfo']],[3,'type']],[[6],[[7],[3,'LIVING_CONTENT_TYPE']],[3,'IMAGE']]])
Z([[2,'==='],[[6],[[7],[3,'liveContentInfo']],[3,'type']],[[6],[[7],[3,'LIVING_CONTENT_TYPE']],[3,'SPU']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_73=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_73=true;
var x=['./pages/index/components/ChannelsLiving/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_73_1()
var l1T=_n('view')
_rz(z,l1T,'class',0,e,s,gg)
var a2T=_v()
_(l1T,a2T)
if(_oz(z,1,e,s,gg)){a2T.wxVkey=1
}
var t3T=_v()
_(l1T,t3T)
if(_oz(z,2,e,s,gg)){t3T.wxVkey=1
}
a2T.wxXCkey=1
t3T.wxXCkey=1
_(r,l1T)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_73";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_73();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/components/ChannelsLiving/index.wxml'] = [$gwx_XC_73, './pages/index/components/ChannelsLiving/index.wxml'];else __wxAppCode__['pages/index/components/ChannelsLiving/index.wxml'] = $gwx_XC_73( './pages/index/components/ChannelsLiving/index.wxml' );
	;__wxRoute = "pages/index/components/ChannelsLiving/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/components/ChannelsLiving/index.js";define("pages/index/components/ChannelsLiving/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/index/components/ChannelsLiving/index"],{"0f80":function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("591d"),i=t("2a2c"),r=t("a63a"),a={props:{liveContentInfo:{type:Object,default:function(){return{}}},showThemeSkin:{type:Boolean,default:!1},isThemeGray:{type:Boolean,default:!1}},data:function(){return{LIVING_CONTENT_TYPE:i.LIVING_CONTENT_TYPE}},computed:{spuList:function(n){var e=n.liveContentInfo.spus;return e&&e.length?Array.from({length:Math.ceil(e.length/2)},(function(n,t){return e.slice(2*t,2*(t+1))})):[]},livingIcon:function(){return"".concat(r.IMG_HOST,"/home/home_living.gif")},livingHeart:function(){return"".concat(r.IMG_HOST,"/home/home_living_heart.gif")}},methods:{priceToFixed:function(n){return Number(n).toFixed(2)},handleToLive:function(n){this.track("live_banner_click",{module_name:i.LIVING_TRACK_MODULE_NAME[n]}),(0,o.openChannelsLive)(this.liveContentInfo.outLiveId)},splitArrayIntoChunks:function(n,e){return Array.from({length:Math.ceil(n.length/e)},(function(t,o){return n.slice(o*e,(o+1)*e)}))}}};e.default=a},1748:function(n,e,t){},"93be":function(n,e,t){t.r(e);var o=t("babe"),i=t("d7d8");for(var r in i)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(r);t("d9cd");var a=t("f0c5"),c=Object(a.a)(i.default,o.b,o.c,!1,null,"320d0b39",null,!1,o.a,void 0);e.default=c.exports},babe:function(n,e,t){t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var o=function(){var n=this,e=(n.$createElement,n._self._c,n.liveContentInfo.type===n.LIVING_CONTENT_TYPE.SPU?n.__map(n.spuList,(function(e,t){return{$orig:n.__get_orig(e),l0:n.__map(e,(function(e,t){return{$orig:n.__get_orig(e),m0:n.priceToFixed(e.salePrice),m1:n.priceToFixed(e.originalPrice)}}))}})):null);n.$mp.data=Object.assign({},{$root:{l1:e}})},i=[]},d7d8:function(n,e,t){t.r(e);var o=t("0f80"),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(r);e.default=i.a},d9cd:function(n,e,t){var o=t("1748");t.n(o).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/index/components/ChannelsLiving/index-create-component",{"pages/index/components/ChannelsLiving/index-create-component":function(n,e,t){t("543d").createComponent(t("93be"))}},[["pages/index/components/ChannelsLiving/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages/index/components/ChannelsLiving/index.js'});require("pages/index/components/ChannelsLiving/index.js");