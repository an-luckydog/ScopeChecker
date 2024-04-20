$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'h-image data-v-5769c2d6'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'$root']],[3,'s0']])
Z([[2,'!'],[[7],[3,'isError']]])
Z([[2,'||'],[[7],[3,'loading']],[[7],[3,'isError']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./Components/Common/HImage/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var xAC=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,4,e,s,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(xAC,fCC)
if(_oz(z,5,e,s,gg)){fCC.wxVkey=1
}
oBC.wxXCkey=1
fCC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['Components/Common/HImage/index.wxml'] = [$gwx_XC_9, './Components/Common/HImage/index.wxml'];else __wxAppCode__['Components/Common/HImage/index.wxml'] = $gwx_XC_9( './Components/Common/HImage/index.wxml' );
	;__wxRoute = "Components/Common/HImage/index";__wxRouteBegin = true;__wxAppCurrentFile__="Components/Common/HImage/index.js";define("Components/Common/HImage/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["Components/Common/HImage/index"],{"00a0":function(t,e,n){},"0a72":function(t,e,n){var i=n("00a0");n.n(i).a},"3f2d":function(t,e,n){n.r(e);var i=n("77a8"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=a.a},"77a8":function(t,e,n){(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2d5d"),a={name:"HImage",props:{src:String,mode:{type:String,default:"widthFix"},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"auto"},borderRadius:{type:[Number,String],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!1},webp:{type:Boolean,default:!1},threshold:{type:[Number,String],default:200},adapted:{type:Boolean,default:!1},adaptWidth:{type:Number,default:0},adaptHeight:{type:Number,default:0},adaptMinWidth:{type:Number,default:0},adaptDesignWidth:{type:Number,default:750}},computed:{wrapStyle:function(){var t={},e=Number(this.width),n=Number(this.height),i=Number(this.borderRadius);return t.width=e>0?e+"rpx":this.width,t.height=n>0?n+"rpx":this.height,t.borderRadius=i+"rpx",t},adaptImage:function(t){var e=t.src;return this.adapted&&(e=(0,i.adaptImageUrl)({url:e,width:this.adaptWidth,height:this.adaptHeight,minWidth:this.adaptMinWidth,designWidth:this.adaptDesignWidth})),this.webp&&(e=(0,i.handleImgWebp)(e)),e}},data:function(){return{isShow:!1,isError:!1,loading:!0,elIndex:this.guid()}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},created:function(){this.observer={},this.isShow=!0},mounted:function(){var e=this;if(this.$nextTick((function(){t.$once("uOnReachBottom",(function(){e.isShow||(e.isShow=!0)}))})),!this.lazyLoad)return this.isShow=!0},methods:{onLoadHandler:function(){this.loading=!1,this.isError=!1,this.$emit("load")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onClick:function(){this.$emit("click")},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}}};e.default=a}).call(this,n("543d").default)},bef2:function(t,e,n){n.r(e);var i=n("cc50"),a=n("3f2d");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0a72");var r=n("f0c5"),d=Object(r.a)(a.default,i.b,i.c,!1,null,"5769c2d6",null,!1,i.a,void 0);e.default=d.exports},cc50:function(t,e,n){n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=(t.$createElement,t._self._c,t.__get_style([t.wrapStyle]));t.$mp.data=Object.assign({},{$root:{s0:e}})},a=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["Components/Common/HImage/index-create-component",{"Components/Common/HImage/index-create-component":function(t,e,n){n("543d").createComponent(n("bef2"))}},[["Components/Common/HImage/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'Components/Common/HImage/index.js'});require("Components/Common/HImage/index.js");