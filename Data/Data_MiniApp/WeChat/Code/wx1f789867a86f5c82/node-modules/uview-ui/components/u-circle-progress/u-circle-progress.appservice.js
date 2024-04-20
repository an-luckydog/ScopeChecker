$gwx_XC_46=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_46 || [];
function gz$gwx_XC_46_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_46=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_46=true;
var x=['./node-modules/uview-ui/components/u-circle-progress/u-circle-progress.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_46_1()
var lEN=_n('slot')
_(r,lEN)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_46";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_46();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-ui/components/u-circle-progress/u-circle-progress.wxml'] = [$gwx_XC_46, './node-modules/uview-ui/components/u-circle-progress/u-circle-progress.wxml'];else __wxAppCode__['node-modules/uview-ui/components/u-circle-progress/u-circle-progress.wxml'] = $gwx_XC_46( './node-modules/uview-ui/components/u-circle-progress/u-circle-progress.wxml' );
	;__wxRoute = "node-modules/uview-ui/components/u-circle-progress/u-circle-progress";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-ui/components/u-circle-progress/u-circle-progress.js";define("node-modules/uview-ui/components/u-circle-progress/u-circle-progress.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["node-modules/uview-ui/components/u-circle-progress/u-circle-progress"],{"0672":function(e,t,r){r.r(t);var n=r("4331"),i=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t.default=i.a},4331:function(e,t,r){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-circle-progress",props:{percent:{type:Number,default:0,validator:function(e){return e>=0&&e<=100}},inactiveColor:{type:String,default:"#ececec"},activeColor:{type:String,default:"#19be6b"},borderWidth:{type:[Number,String],default:14},width:{type:[Number,String],default:200},duration:{type:[Number,String],default:1500},type:{type:String,default:""},bgColor:{type:String,default:"#ffffff"}},data:function(){return{elBgId:"uCircleProgressBgId",elId:"uCircleProgressElId",widthPx:e.upx2px(this.width),borderWidthPx:e.upx2px(this.borderWidth),startAngle:-Math.PI/2,progressContext:null,newPercent:0,oldPercent:0}},watch:{percent:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e>100&&(e=100),e<0&&(r=0),this.newPercent=e,this.oldPercent=r,setTimeout((function(){t.drawCircleByProgress(r)}),50)}},created:function(){this.newPercent=this.percent,this.oldPercent=0},computed:{circleColor:function(){return["success","error","info","primary","warning"].indexOf(this.type)>=0?this.$u.color[this.type]:this.activeColor}},mounted:function(){var e=this;setTimeout((function(){e.drawProgressBg(),e.drawCircleByProgress(e.oldPercent)}),50)},methods:{drawProgressBg:function(){var t=e.createCanvasContext(this.elBgId,this);t.setLineWidth(this.borderWidthPx),t.setStrokeStyle(this.inactiveColor),t.beginPath();var r=this.widthPx/2;t.arc(r,r,r-this.borderWidthPx,0,2*Math.PI,!1),t.stroke(),t.draw()},drawCircleByProgress:function(t){var r=this,n=this.progressContext;n||(n=e.createCanvasContext(this.elId,this),this.progressContext=n),n.setLineCap("round"),n.setLineWidth(this.borderWidthPx),n.setStrokeStyle(this.circleColor);var i=Math.floor(this.duration/100),o=2*Math.PI/100*t+this.startAngle;n.beginPath();var s=this.widthPx/2;if(n.arc(s,s,s-this.borderWidthPx,this.startAngle,o,!1),n.stroke(),n.draw(),this.newPercent>this.oldPercent){if(++t>this.newPercent)return}else if(--t<this.newPercent)return;setTimeout((function(){r.drawCircleByProgress(t)}),i)}}};t.default=r}).call(this,r("543d").default)},"9cbe":function(e,t,r){r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){}));var n=function(){this.$createElement;this._self._c},i=[]},b014:function(e,t,r){var n=r("d818");r.n(n).a},d818:function(e,t,r){},d932:function(e,t,r){r.r(t);var n=r("9cbe"),i=r("0672");for(var o in i)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("b014");var s=r("f0c5"),c=Object(s.a)(i.default,n.b,n.c,!1,null,"7f284ac8",null,!1,n.a,void 0);t.default=c.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["node-modules/uview-ui/components/u-circle-progress/u-circle-progress-create-component",{"node-modules/uview-ui/components/u-circle-progress/u-circle-progress-create-component":function(e,t,r){r("543d").createComponent(r("d932"))}},[["node-modules/uview-ui/components/u-circle-progress/u-circle-progress-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-ui/components/u-circle-progress/u-circle-progress.js'});require("node-modules/uview-ui/components/u-circle-progress/u-circle-progress.js");