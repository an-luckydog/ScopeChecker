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
Z([3,'c-drop-down data-v-79461b41'])
Z([3,'header'])
Z([[7],[3,'g']])
Z([3,'__l'])
Z([3,'data-v-79461b41'])
Z([3,'79461b41-0'])
Z(z[2])
Z([[4],[[5],[1,'d']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./components/c-drop-down/c-drop-down.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var b9B=_n('view')
_rz(z,b9B,'class',0,e,s,gg)
var xAC=_n('slot')
_rz(z,xAC,'name',1,e,s,gg)
_(b9B,xAC)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,2,e,s,gg)){o0B.wxVkey=1
var oBC=_mz(z,'u-transition',['bind:__l',3,'class',1,'uI',2,'uP',3,'uS',4],[],e,s,gg)
var fCC=_n('slot')
_(oBC,fCC)
_(o0B,oBC)
}
o0B.wxXCkey=1
o0B.wxXCkey=3
_(r,b9B)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-drop-down/c-drop-down.wxml'] = [$gwx_XC_9, './components/c-drop-down/c-drop-down.wxml'];else __wxAppCode__['components/c-drop-down/c-drop-down.wxml'] = $gwx_XC_9( './components/c-drop-down/c-drop-down.wxml' );
	;__wxRoute = "components/c-drop-down/c-drop-down";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-drop-down/c-drop-down.js";define("components/c-drop-down/c-drop-down.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),n=e(require("../../@babel/runtime/regenerator")),t=e(require("../../@babel/runtime/helpers/asyncToGenerator")),o=require("../../common/vendor.js");require("../../consts.js"),Array||o.resolveComponent("u-transition")(),Math;var r=o.defineComponent({__name:"c-drop-down",props:{modelValue:{type:Boolean},noPadding:{type:Boolean},popupTop:{default:0},popupZIndex:{default:99},maxPopupHeight:null,onScrollToTop:null,clickOverlayClose:{type:Boolean,default:!0},popupWidth:{default:100}},emits:["update:modelValue","open","close"],setup:function(e,r){var u=r.expose,a=r.emit,p=e,c=o.ref(p.modelValue);o.watch((function(){return p.modelValue}),function(){var e=(0,t.default)(n.default.mark((function e(t,o){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t!==o,!e.t0){e.next=9;break}if(!t){e.next=7;break}return e.next=5,i();case 5:e.next=9;break;case 7:return e.next=9,f();case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),o.watch((function(){return c.value}),(function(){a("update:modelValue",c.value)}));var l=o.computed((function(){var e=p.maxPopupHeight||"calc(100vh - ".concat(p.popupTop,"px - 100px)");return{top:"".concat(p.popupTop,"px"),maxHeight:e,zIndex:p.popupZIndex}}));function i(){return s.apply(this,arguments)}function s(){return(s=(0,t.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=p.onScrollToTop,!e.t0){e.next=4;break}return e.next=4,Promise.resolve().then((function(){return o.tryExec(p.onScrollToTop)}));case 4:c.value=!0,a("open");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){p.clickOverlayClose&&(c.value=!1,a("close"))}return o.watch((function(){return c.value}),(function(){o.preventPageScroll(c.value)}),{immediate:!0}),o.onBeforeUnmount((function(){o.preventPageScroll(!1)})),u({isOpened:c.value,open:i,close:f}),function(n,t){return{a:e.noPadding?1:"",b:o.s(o.unref(l)),c:"".concat(e.popupTop,"px"),d:"".concat(e.popupWidth,"vw"),e:o.o(f),f:"".concat(e.popupWidth,"vw"),g:o.p({mode:"top",duration:100,show:o.unref(c)})}}}}),u=o._export_sfc(r,[["__scopeId","data-v-79461b41"]]);wx.createComponent(u);
},{isPage:false,isComponent:true,currentFile:'components/c-drop-down/c-drop-down.js'});require("components/c-drop-down/c-drop-down.js");