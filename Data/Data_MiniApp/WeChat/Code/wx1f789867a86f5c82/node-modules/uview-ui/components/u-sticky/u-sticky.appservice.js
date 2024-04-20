$gwx_XC_61=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_61 || [];
function gz$gwx_XC_61_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_61=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_61=true;
var x=['./node-modules/uview-ui/components/u-sticky/u-sticky.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_61_1()
var l5P=_n('slot')
_(r,l5P)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_61";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_61();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-ui/components/u-sticky/u-sticky.wxml'] = [$gwx_XC_61, './node-modules/uview-ui/components/u-sticky/u-sticky.wxml'];else __wxAppCode__['node-modules/uview-ui/components/u-sticky/u-sticky.wxml'] = $gwx_XC_61( './node-modules/uview-ui/components/u-sticky/u-sticky.wxml' );
	;__wxRoute = "node-modules/uview-ui/components/u-sticky/u-sticky";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-ui/components/u-sticky/u-sticky.js";define("node-modules/uview-ui/components/u-sticky/u-sticky.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["node-modules/uview-ui/components/u-sticky/u-sticky"],{"0f4f":function(e,t,n){n.r(t);var i=n("8b8a"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t.default=o.a},1814:function(e,t,n){var i=n("4ea5");n.n(i).a},"4ea5":function(e,t,n){},"680e":function(e,t,n){n.r(t);var i=n("8cb1"),o=n("0f4f");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("1814");var c=n("f0c5"),u=Object(c.a)(o.default,i.b,i.c,!1,null,"7751e6c3",null,!1,i.a,void 0);t.default=u.exports},"8b8a":function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(e){this.initObserver()},enable:function(e){0==e?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var t=this;this.enable&&(this.stickyTop=0!=this.offsetTop?e.upx2px(this.offsetTop):0,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))})))},observeContent:function(){var e=this;this.disconnectObserver("contentObserver");var t=this.createIntersectionObserver({thresholds:[.95,.98,1]});t.relativeToViewport({top:-this.stickyTop}),t.observe("."+this.elClass,(function(t){e.enable&&e.setFixed(t.boundingClientRect.top)})),this.contentObserver=t},setFixed:function(e){var t=e<this.stickyTop;t?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=t},disconnectObserver:function(e){var t=this[e];t&&t.disconnect()}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};t.default=n}).call(this,n("543d").default)},"8cb1":function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){this.$createElement;this._self._c},o=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["node-modules/uview-ui/components/u-sticky/u-sticky-create-component",{"node-modules/uview-ui/components/u-sticky/u-sticky-create-component":function(e,t,n){n("543d").createComponent(n("680e"))}},[["node-modules/uview-ui/components/u-sticky/u-sticky-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-ui/components/u-sticky/u-sticky.js'});require("node-modules/uview-ui/components/u-sticky/u-sticky.js");