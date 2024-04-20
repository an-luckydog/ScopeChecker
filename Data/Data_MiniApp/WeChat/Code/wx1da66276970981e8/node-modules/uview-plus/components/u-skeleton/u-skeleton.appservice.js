$gwx_XC_83=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_83 || [];
function gz$gwx_XC_83_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'u-skeleton data-v-6a8d93aa'])
Z([[7],[3,'a']])
Z([3,'u-skeleton__wrapper data-v-6a8d93aa'])
Z([3,'u-skeleton__wrapper'])
Z([3,'display:flex;flex-direction:row'])
Z([[7],[3,'b']])
Z([[7],[3,'g']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_83=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_83=true;
var x=['./node-modules/uview-plus/components/u-skeleton/u-skeleton.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_83_1()
var l9S=_n('view')
_rz(z,l9S,'class',0,e,s,gg)
var a0S=_v()
_(l9S,a0S)
if(_oz(z,1,e,s,gg)){a0S.wxVkey=1
var tAT=_mz(z,'view',['class',2,'ref',1,'style',2],[],e,s,gg)
var eBT=_v()
_(tAT,eBT)
if(_oz(z,5,e,s,gg)){eBT.wxVkey=1
}
var bCT=_v()
_(tAT,bCT)
if(_oz(z,6,e,s,gg)){bCT.wxVkey=1
}
eBT.wxXCkey=1
bCT.wxXCkey=1
_(a0S,tAT)
}
else{a0S.wxVkey=2
var oDT=_n('slot')
_(a0S,oDT)
}
a0S.wxXCkey=1
_(r,l9S)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_83";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_83();	if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-skeleton/u-skeleton.wxml'] = [$gwx_XC_83, './node-modules/uview-plus/components/u-skeleton/u-skeleton.wxml'];else __wxAppCode__['node-modules/uview-plus/components/u-skeleton/u-skeleton.wxml'] = $gwx_XC_83( './node-modules/uview-plus/components/u-skeleton/u-skeleton.wxml' );
	;__wxRoute = "node-modules/uview-plus/components/u-skeleton/u-skeleton";__wxRouteBegin = true;__wxAppCurrentFile__="node-modules/uview-plus/components/u-skeleton/u-skeleton.js";define("node-modules/uview-plus/components/u-skeleton/u-skeleton.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../../../@babel/runtime/regenerator")),i=t(require("../../../../@babel/runtime/helpers/asyncToGenerator")),n=require("../../../../common/vendor.js");require("../../../../consts.js");var r,a,s={name:"u-skeleton",mixins:[n.mpMixin,n.mixin,n.props$11],data:function(){return{width:0}},watch:{loading:function(){this.getComponentWidth()}},computed:{rowsArray:function(){/%$/.test(this.rowsHeight)&&n.index.$u.error("rowsHeight参数不支持百分比单位");for(var t=[],e=0;e<this.rows;e++){var i={},r=n.index.$u.test.array(this.rowsWidth)?this.rowsWidth[e]||(e===this.rows-1?"70%":"100%"):e===this.rows-1?"70%":this.rowsWidth,a=n.index.$u.test.array(this.rowsHeight)?this.rowsHeight[e]||"18px":this.rowsHeight;i.marginTop=this.title||0!==e?this.title&&0===e?"20px":"12px":0,/%$/.test(r)?i.width=n.index.$u.addUnit(this.width*parseInt(r)/100):i.width=n.index.$u.addUnit(r),i.height=n.index.$u.addUnit(a),t.push(i)}return t},uTitleWidth:function(){var t;return t=/%$/.test(this.titleWidth)?n.index.$u.addUnit(this.width*parseInt(this.titleWidth)/100):n.index.$u.addUnit(this.titleWidth),n.index.$u.addUnit(t)}},mounted:function(){this.init()},methods:{init:function(){this.getComponentWidth()},setNvueAnimation:(a=(0,i.default)(e.default.mark((function t(){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return a.apply(this,arguments)}),getComponentWidth:(r=(0,i.default)(e.default.mark((function t(){var i=this;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.index.$u.sleep(20);case 2:this.$uGetRect(".u-skeleton__wrapper__content").then((function(t){i.width=t.width}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},d=n._export_sfc(s,[["render",function(t,e,i,r,a,s){return n.e({a:t.loading},t.loading?n.e({b:t.avatar},t.avatar?{c:n.n("u-skeleton__wrapper__avatar--".concat(t.avatarShape)),d:n.n(t.animate&&"animate"),e:t.$u.addUnit(t.avatarSize),f:t.$u.addUnit(t.avatarSize)}:{},{g:t.title},t.title?{h:s.uTitleWidth,i:t.$u.addUnit(t.titleHeight),j:n.n(t.animate&&"animate")}:{},{k:n.f(s.rowsArray,(function(t,e,i){return{a:e,b:t.width,c:t.height,d:t.marginTop}})),l:n.n(t.animate&&"animate")}):{})}],["__scopeId","data-v-6a8d93aa"]]);wx.createComponent(d);
},{isPage:false,isComponent:true,currentFile:'node-modules/uview-plus/components/u-skeleton/u-skeleton.js'});require("node-modules/uview-plus/components/u-skeleton/u-skeleton.js");