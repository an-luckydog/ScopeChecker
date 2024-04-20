$gwx_XC_41=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];
function gz$gwx_XC_41_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_41=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_41=true;
var x=['./wxcomponents/vant/dropdown-menu/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_41_1()
var oJN=_n('slot')
_(r,oJN)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_41";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_41();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/dropdown-menu/index.wxml'] = [$gwx_XC_41, './wxcomponents/vant/dropdown-menu/index.wxml'];else __wxAppCode__['wxcomponents/vant/dropdown-menu/index.wxml'] = $gwx_XC_41( './wxcomponents/vant/dropdown-menu/index.wxml' );
	;__wxRoute = "wxcomponents/vant/dropdown-menu/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/dropdown-menu/index.js";define("wxcomponents/vant/dropdown-menu/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../common/component"),e=require("../common/relation"),a=require("../common/utils"),n=[];(0,t.VantComponent)({field:!0,classes:["title-class"],relation:(0,e.useChildren)("dropdown-item",(function(){this.updateItemListData()})),props:{activeColor:{type:String,observer:"updateChildrenData"},overlay:{type:Boolean,value:!0,observer:"updateChildrenData"},zIndex:{type:Number,value:10},duration:{type:Number,value:200,observer:"updateChildrenData"},direction:{type:String,value:"down",observer:"updateChildrenData"},safeAreaTabBar:{type:Boolean,value:!1},closeOnClickOverlay:{type:Boolean,value:!0,observer:"updateChildrenData"},closeOnClickOutside:{type:Boolean,value:!0}},data:{itemListData:[]},beforeCreate:function(){var t=(0,a.getSystemInfoSync)().windowHeight;this.windowHeight=t,n.push(this)},destroyed:function(){var t=this;n=n.filter((function(e){return e!==t}))},methods:{updateItemListData:function(){this.setData({itemListData:this.children.map((function(t){return t.data}))})},updateChildrenData:function(){this.children.forEach((function(t){t.updateDataFromParent()}))},toggleItem:function(t){this.children.forEach((function(e,a){var n=e.data.showPopup;a===t?e.toggle():n&&e.toggle(!1,{immediate:!0})}))},close:function(){this.children.forEach((function(t){t.toggle(!1,{immediate:!0})}))},getChildWrapperStyle:function(){var t=this,e=this.data,n=e.zIndex,i=e.direction;return(0,a.getRect)(this,".van-dropdown-menu").then((function(e){var o=e.top,r=void 0===o?0:o,d=e.bottom,c="down"===i?void 0===d?0:d:t.windowHeight-r,l="z-index: ".concat(n,";");return l+="down"===i?"top: ".concat((0,a.addUnit)(c),";"):"bottom: ".concat((0,a.addUnit)(c),";")}))},onTitleTap:function(t){var e=this,a=t.currentTarget.dataset.index;this.children[a].data.disabled||(n.forEach((function(t){t&&t.data.closeOnClickOutside&&t!==e&&t.close()})),this.toggleItem(a))}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/dropdown-menu/index.js'});require("wxcomponents/vant/dropdown-menu/index.js");