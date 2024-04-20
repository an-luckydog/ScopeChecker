$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([3,'picker-body data-v-8e480de3'])
Z([[7],[3,'b']])
Z([3,'__l'])
Z([3,'data-v-8e480de3'])
Z([3,'8e480de3-0'])
Z(z[2])
Z([[7],[3,'d']])
Z(z[3])
Z([[7],[3,'c']])
Z(z[4])
Z([3,'8e480de3-1'])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./components/c-location-picker/c-location-picker.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var lAD=_v()
_(r,lAD)
if(_oz(z,0,e,s,gg)){lAD.wxVkey=1
var aBD=_n('view')
_rz(z,aBD,'class',1,e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,2,e,s,gg)){tCD.wxVkey=1
var bED=_mz(z,'u--text',['bind:__l',3,'class',1,'uI',2,'uP',3],[],e,s,gg)
_(tCD,bED)
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,7,e,s,gg)){eDD.wxVkey=1
var oFD=_mz(z,'u-button',['bind:__l',8,'bindclick',1,'class',2,'uI',3,'uP',4],[],e,s,gg)
_(eDD,oFD)
}
tCD.wxXCkey=1
tCD.wxXCkey=3
eDD.wxXCkey=1
eDD.wxXCkey=3
_(lAD,aBD)
}
lAD.wxXCkey=1
lAD.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-location-picker/c-location-picker.wxml'] = [$gwx_XC_15, './components/c-location-picker/c-location-picker.wxml'];else __wxAppCode__['components/c-location-picker/c-location-picker.wxml'] = $gwx_XC_15( './components/c-location-picker/c-location-picker.wxml' );
	;__wxRoute = "components/c-location-picker/c-location-picker";__wxRouteBegin = true;__wxAppCurrentFile__="components/c-location-picker/c-location-picker.js";define("components/c-location-picker/c-location-picker.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../common/vendor.js");require("../../config/options.js");var o=require("../../config/theme.js"),r=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/enums.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js"),Array||(e.resolveComponent("u--text")+e.resolveComponent("u-button"))(),Math||(function(){return"../../node-modules/uview-plus/components/u--text/u--text.js"}+function(){return"../../node-modules/uview-plus/components/u-button/u-button.js"})();var u=e.defineComponent({__name:"c-location-picker",props:{descText:{default:"开启定位，获取更准确的周边优惠"},bottom:{default:"5px"}},emits:["change"],setup:function(u,t){var s=t.emit,n=r.useApp(),i=n.isLocationPickerEnabled,c=n.isAccurateLocation,p=n.ensureCurrentLocation,a=n.currentLocation,l=e.computed((function(){return i.value&&!c.value}));function d(){p(!0)}return e.watch((function(){return a.value.latitude}),(function(e,o){e!==o&&s("change",a.value)})),function(r,t){return e.e({a:e.unref(l)},e.unref(l)?{b:e.p({"prefix-icon":"map-fill",color:"black",size:"14px","icon-style":"font-size: 14px; color: black","line-height":"30px",text:u.descText}),c:e.o(d),d:e.p({text:"开启定位",shape:"circle",color:e.unref(o.colors).primary,hairline:!1,"custom-style":{height:"30px"}}),e:"".concat(u.bottom)}:{})}}}),t=e._export_sfc(u,[["__scopeId","data-v-8e480de3"]]);wx.createComponent(t);
},{isPage:false,isComponent:true,currentFile:'components/c-location-picker/c-location-picker.js'});require("components/c-location-picker/c-location-picker.js");