$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/avatar-slideshow/avatar-slideshow.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/avatar-slideshow/avatar-slideshow.wxml'] = [$gwx_XC_2, './components/avatar-slideshow/avatar-slideshow.wxml'];else __wxAppCode__['components/avatar-slideshow/avatar-slideshow.wxml'] = $gwx_XC_2( './components/avatar-slideshow/avatar-slideshow.wxml' );
	;__wxRoute = "components/avatar-slideshow/avatar-slideshow";__wxRouteBegin = true;__wxAppCurrentFile__="components/avatar-slideshow/avatar-slideshow.js";define("components/avatar-slideshow/avatar-slideshow.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../common/vendor.js"),e={props:{interval:{type:Number,default:1500,desc:"轮播间隔时间"},urls:{type:Array,default:function(){return[]}},width:{type:Number,default:50},height:{type:Number,default:50},overlap:{type:Number,default:20,desc:"重叠的部分"},prop:{type:Object,default:function(){return{url:"url"}},desc:"urls数组中，图片url对应属性的key"}},data:function(){return{list:[],uid:0,intervalTimer:null}},computed:{marginLeft:function(){return this.width-this.overlap}},watch:{urls:{handler:function(t,e){var r=this;t.length?(this.list=t.map((function(t,e){var i=t&&t[r.prop.url];return"string"==typeof t&&(i=t),{url:i,order:e+1,id:"".concat(r._uid,"-avatar-").concat(e)}})),this.stop(),this.start()):this.stop()},immediate:!0}},onUnload:function(){this.stop()},methods:{itemSyle:function(t,e){var r={"z-index":e.order,transition:"0.25s",transform:" translateX(".concat((e.order-1)*this.marginLeft,"rpx) scale(1)")},i=this.list.length;return 0==e.order&&(r.transform=" translateX(".concat(e.order*this.marginLeft,"rpx) scale(0)")),-1==e.order&&(r.transform=" translateX(".concat((i-1)*this.marginLeft,"rpx) scale(0)"),r["z-index"]=i),this.nextState(e),e.order==i&&(r["z-index"]=i),r},itemBaseSyle:function(){return{width:this.width+"rpx",height:this.height+"rpx"}},boxBaseSyle:function(){return this.list.length,{width:"278rpx",height:this.height+2+"rpx"}},start:function(){var t=this;this.intervalTimer=setInterval((function(){t.forwardMove()}),this.interval)},stop:function(){clearInterval(this.intervalTimer)},nextState:function(t){var e=this;if(0==t.order)var r=setTimeout((function(){t.order=-1,clearTimeout(r),r=null}),300);else if(-1==t.order)var i=setTimeout((function(){t.order=e.list.length,clearTimeout(i),i=null}),300)},forwardMove:function(){this.list.forEach((function(t,e){if(1==t.order)var r=setTimeout((function(){t.order=0,clearTimeout(r),r=null}),250);t.order--}))}}},r=t._export_sfc(e,[["render",function(e,r,i,n,o,a){return{a:t.f(o.list,(function(e,r,i){return{a:e.id,b:e.url,c:t.s(a.itemSyle(r,e))}})),b:t.s(a.itemBaseSyle()),c:t.s(a.boxBaseSyle())}}],["__scopeId","data-v-0c77df88"]]);wx.createComponent(r);
},{isPage:false,isComponent:true,currentFile:'components/avatar-slideshow/avatar-slideshow.js'});require("components/avatar-slideshow/avatar-slideshow.js");