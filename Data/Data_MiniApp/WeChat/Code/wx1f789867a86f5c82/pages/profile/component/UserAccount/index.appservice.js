$gwx_XC_106=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_106 || [];
function gz$gwx_XC_106_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_106_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_106_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_106_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[1,'_div']],[1,'data-v-5a156e3e']],[1,'account-item']],[[2,'&&'],[[7],[3,'isWaitReceived']],[1,'prize']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpTo']],[[4],[[5],[[5],[1,'memberIntegral']],[1,'纪念值']]]]]]]]]]])
Z([[7],[3,'showIntegralIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_106_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_106_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_106=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_106=true;
var x=['./pages/profile/component/UserAccount/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_106_1()
var oH5=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var lI5=_v()
_(oH5,lI5)
if(_oz(z,3,e,s,gg)){lI5.wxVkey=1
}
lI5.wxXCkey=1
_(r,oH5)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_106";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_106();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/profile/component/UserAccount/index.wxml'] = [$gwx_XC_106, './pages/profile/component/UserAccount/index.wxml'];else __wxAppCode__['pages/profile/component/UserAccount/index.wxml'] = $gwx_XC_106( './pages/profile/component/UserAccount/index.wxml' );
	;__wxRoute = "pages/profile/component/UserAccount/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/profile/component/UserAccount/index.js";define("pages/profile/component/UserAccount/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/profile/component/UserAccount/index"],{"51fd":function(e,n,t){t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){this.$createElement;this._self._c},a=[]},7507:function(e,n,t){t.r(n);var o=t("98dc"),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n.default=a.a},8537:function(e,n,t){var o=t("eb2e");t.n(o).a},"98dc":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("6653"),a={name:"UserAccount",props:{couponNum:{type:Number,default:0},integral:{type:Number,default:0},medalNum:{type:Number,default:0},giftCardMoney:{type:Number,default:0},newMedal:{type:Boolean,default:!1},newCoupon:{type:Boolean,default:!1},prizeStatus:String,showIntegralIcon:{type:Boolean,default:!1}},computed:{isWaitReceived:function(e){return e.prizeStatus===o.MEMBER_RIGHTS_STATUS.WAITING}},methods:{jumpTo:function(e,n){this.$sensors.track("member_bannerClick",{banner_area_type:"icon",banner_area_name:"账户icon",banner_id:0,banner_title:n,banner_rank:0}),this.$Router.push({name:e})}}};n.default=a},"9e8c":function(e,n,t){t.r(n);var o=t("51fd"),a=t("7507");for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("8537");var c=t("f0c5"),u=Object(c.a)(a.default,o.b,o.c,!1,null,"5a156e3e",null,!1,o.a,void 0);n.default=u.exports},eb2e:function(e,n,t){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/profile/component/UserAccount/index-create-component",{"pages/profile/component/UserAccount/index-create-component":function(e,n,t){t("543d").createComponent(t("9e8c"))}},[["pages/profile/component/UserAccount/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages/profile/component/UserAccount/index.js'});require("pages/profile/component/UserAccount/index.js");