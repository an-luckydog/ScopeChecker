$gwx_XC_85=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_85 || [];
function gz$gwx_XC_85_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_85=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_85=true;
var x=['./node-modules/uview-plus/components/u-sticky/u-sticky.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_85_1()
var cHT=_n('slot')
_(r,cHT)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_85";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_85();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-sticky/u-sticky.wxml'] = [$gwx_XC_85, './node-modules/uview-plus/components/u-sticky/u-sticky.wxml'];else __wxAppCode__['node-modules/uview-plus/components/u-sticky/u-sticky.wxml'] = $gwx_XC_85( './node-modules/uview-plus/components/u-sticky/u-sticky.wxml' );
	;__wxRoute = "node-modules/uview-plus/components/u-sticky/u-sticky";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-plus/components/u-sticky/u-sticky.js";define("node-modules/uview-plus/components/u-sticky/u-sticky.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../../../@babel/runtime/regenerator")),i=t(require("../../../../@babel/runtime/helpers/asyncToGenerator")),s=require("../../../../common/vendor.js");require("../../../../consts.js");var n,o={name:"u-sticky",mixins:[s.mpMixin,s.mixin,s.props$20],data:function(){return{cssSticky:!1,stickyTop:0,elId:s.index.$u.guid(),left:0,width:"auto",height:"auto",fixed:!1}},computed:{style:function(){var t={};return this.disabled?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=s.index.$u.addUnit(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,s.index.$u.deepMerge(s.index.$u.addStyle(this.customStyle),t)},stickyContent:function(){var t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex:function(){return this.zIndex?this.zIndex:s.index.$u.zIndex.sticky}},mounted:function(){this.init()},methods:{init:function(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent:function(){var t=this;this.$uGetRect("#"+this.elId).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))}))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=s.index.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("#".concat(this.elId),(function(e){t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<=this.stickyTop;this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()},getStickyTop:function(){this.stickyTop=s.index.$u.getPx(this.offsetTop)+s.index.$u.getPx(this.customNavHeight)},checkSupportCssSticky:(n=(0,i.default)(e.default.mark((function t(){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"android"===s.index.$u.os()&&Number(s.index.$u.sys().system)>8&&(this.cssSticky=!0),t.next=3,this.checkComputedStyle();case 3:this.cssSticky=t.sent,"ios"===s.index.$u.os()&&(this.cssSticky=!0);case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),checkComputedStyle:function(){var t=this;return new Promise((function(e){s.index.createSelectorQuery().in(t).select(".u-sticky").fields({computedStyle:["position"]}).exec((function(t){e("sticky"===t[0].position)}))}))},checkCssStickyForH5:function(){}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}},c=s._export_sfc(o,[["render",function(t,e,i,n,o,c){return{a:s.s(c.stickyContent),b:o.elId,c:s.s(c.style)}}],["__scopeId","data-v-a2c39d76"]]);wx.createComponent(c);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-plus/components/u-sticky/u-sticky.js'});require("node-modules/uview-plus/components/u-sticky/u-sticky.js");