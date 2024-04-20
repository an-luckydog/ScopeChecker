$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[1,'_div']],[1,'data-v-2c94cc82']],[1,'image-box']],[1,'u-flex']],[1,'u-row-center']],[1,'h-border']],[[2,'&&'],[[7],[3,'mr']],[1,'mr-20']]],[[2,'&&'],[[7],[3,'isCart']],[1,'isCart']]],[[2,'&&'],[[7],[3,'text']],[1,'bottom-shadow']]],[[2,'&&'],[[7],[3,'hideBorder']],[1,'hide-h-border']]],[[7],[3,'className']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'$root']],[3,'s0']])
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./Components/business/ProdThum/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var f7H=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var c8H=_v()
_(f7H,c8H)
if(_oz(z,4,e,s,gg)){c8H.wxVkey=1
}
else{c8H.wxVkey=2
var h9H=_n('slot')
_(c8H,h9H)
}
c8H.wxXCkey=1
_(r,f7H)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['Components/business/ProdThum/index.wxml'] = [$gwx_XC_30, './Components/business/ProdThum/index.wxml'];else __wxAppCode__['Components/business/ProdThum/index.wxml'] = $gwx_XC_30( './Components/business/ProdThum/index.wxml' );
	;__wxRoute = "Components/business/ProdThum/index";__wxRouteBegin = true;__wxAppCurrentFile__="Components/business/ProdThum/index.js";define("Components/business/ProdThum/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["Components/business/ProdThum/index"],{"08be":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"ProdThum",props:{img:String,text:String,className:String,hideBorder:{type:Boolean,default:!1},mr:{type:Boolean,default:!0},width:{type:[String,Number],default:160},height:{type:[String,Number],default:160},isCart:{type:Boolean,default:!1}},computed:{wrapStyle:function(){var e={},t=Number(this.width),n=Number(this.height);return e.width=t>0?t+"rpx":"100%",e.height=n>0?n+"rpx":"100%",e},imgStyle:function(e){var t=e.img,n=e.width,a=e.height,o=e.isCart;return{backgroundImage:"url(".concat(t+"?imageView2/2/w/200",")"),width:n+"rpx",height:a+"rpx",borderRadius:(o?12:8)+"rpx"}}},methods:{handleClick:function(){this.$emit("click")}}};t.default=a},"0cc7":function(e,t,n){var a=n("540a");n.n(a).a},"3c25":function(e,t,n){n.r(t);var a=n("9a1c"),o=n("aa38");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("0cc7");var i=n("f0c5"),u=Object(i.a)(o.default,a.b,a.c,!1,null,"2c94cc82",null,!1,a.a,void 0);t.default=u.exports},"540a":function(e,t,n){},"9a1c":function(e,t,n){n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=(e.$createElement,e._self._c,e.__get_style([e.wrapStyle])),n=e.__get_style([e.imgStyle]);e.$mp.data=Object.assign({},{$root:{s0:t,s1:n}})},o=[]},aa38:function(e,t,n){n.r(t);var a=n("08be"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["Components/business/ProdThum/index-create-component",{"Components/business/ProdThum/index-create-component":function(e,t,n){n("543d").createComponent(n("3c25"))}},[["Components/business/ProdThum/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'Components/business/ProdThum/index.js'});require("Components/business/ProdThum/index.js");