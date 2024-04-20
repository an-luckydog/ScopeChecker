$gwx_XC_57=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_57 || [];
function gz$gwx_XC_57_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_57=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_57=true;
var x=['./node-modules/uview-plus/components/u-form/u-form.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_57_1()
var hWM=_n('slot')
_(r,hWM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_57";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_57();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-form/u-form.wxml'] = [$gwx_XC_57, './node-modules/uview-plus/components/u-form/u-form.wxml'];else __wxAppCode__['node-modules/uview-plus/components/u-form/u-form.wxml'] = $gwx_XC_57( './node-modules/uview-plus/components/u-form/u-form.wxml' );
	;__wxRoute = "node-modules/uview-plus/components/u-form/u-form";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-plus/components/u-form/u-form.js";define("node-modules/uview-plus/components/u-form/u-form.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault");require("../../../../@babel/runtime/helpers/Arrayincludes");var t=e(require("../../../../@babel/runtime/regenerator")),n=e(require("../../../../@babel/runtime/helpers/toConsumableArray")),r=e(require("../../../../@babel/runtime/helpers/defineProperty")),i=e(require("../../../../@babel/runtime/helpers/asyncToGenerator")),a=require("../../../../common/vendor.js");require("../../../../consts.js"),a.Schema.warning=function(){};var o,l={name:"u-form",mixins:[a.mpMixin,a.mixin,a.props$27],provide:function(){return{uForm:this}},data:function(){return{formRules:{},validator:{},originalModel:null}},watch:{rules:{immediate:!0,handler:function(e){this.setRules(e)}},propsChange:function(e){var t;(null==(t=this.children)?void 0:t.length)&&this.children.map((function(e){"function"==typeof e.updateParentData&&e.updateParentData()}))},model:{immediate:!0,handler:function(e){this.originalModel||(this.originalModel=a.index.$u.deepClone(e))}}},computed:{propsChange:function(){return[this.errorType,this.borderBottom,this.labelPosition,this.labelWidth,this.labelAlign,this.labelStyle]}},created:function(){this.children=[]},methods:{setRules:function(e){0!==Object.keys(e).length&&(this.formRules=e,this.validator=new a.Schema(e))},resetFields:function(){this.resetModel()},resetModel:function(e){var t=this;this.children.map((function(e){var n=null==e?void 0:e.prop,r=a.index.$u.getProperty(t.originalModel,n);a.index.$u.setProperty(t.model,n,r)}))},clearValidate:function(e){e=[].concat(e),this.children.map((function(t){(void 0===e[0]||e.includes(t.prop))&&(t.message=null)}))},validateField:(o=(0,i.default)(t.default.mark((function e(i,o){var l,u=this,s=arguments;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=s.length>2&&void 0!==s[2]?s[2]:null,this.$nextTick((function(){var e=[];i=[].concat(i),u.children.map((function(t){var o=[];if(i.includes(t.prop)){var s=a.index.$u.getProperty(u.model,t.prop),c=t.prop.split("."),d=c[c.length-1],p=u.formRules[t.prop];if(!p)return;for(var h=[].concat(p),f=0;f<h.length;f++){var m=h[f],v=[].concat(null==m?void 0:m.trigger);l&&!v.includes(l)||new a.Schema((0,r.default)({},d,m)).validate((0,r.default)({},d,s),(function(r,i){var l;a.index.$u.test.array(r)&&(e.push.apply(e,(0,n.default)(r)),o.push.apply(o,(0,n.default)(r))),t.message=(null==(l=o[0])?void 0:l.message)?o[0].message:null}))}}})),"function"==typeof o&&o(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)}),validate:function(e){var t=this;return new Promise((function(e,n){t.$nextTick((function(){var r=t.children.map((function(e){return e.prop}));t.validateField(r,(function(r){r.length?("toast"===t.errorType&&a.index.$u.toast(r[0].message),n(r)):e(!0)}))}))}))}}},u=a._export_sfc(l,[["render",function(e,t,n,r,i,a){return{}}]]);wx.createComponent(u);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-plus/components/u-form/u-form.js'});require("node-modules/uview-plus/components/u-form/u-form.js");