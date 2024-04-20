$gwx_XC_37=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_37 || [];
function gz$gwx_XC_37_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'height:100%'])
Z([[7],[3,'a']])
Z([[7],[3,'d']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_37=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_37=true;
var x=['./components/kdcs/mpweixin/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_37_1()
var lCI=_n('view')
_rz(z,lCI,'style',0,e,s,gg)
var aDI=_v()
_(lCI,aDI)
if(_oz(z,1,e,s,gg)){aDI.wxVkey=1
}
var tEI=_v()
_(lCI,tEI)
if(_oz(z,2,e,s,gg)){tEI.wxVkey=1
}
aDI.wxXCkey=1
tEI.wxXCkey=1
_(r,lCI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_37";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_37();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/kdcs/mpweixin/index.wxml'] = [$gwx_XC_37, './components/kdcs/mpweixin/index.wxml'];else __wxAppCode__['components/kdcs/mpweixin/index.wxml'] = $gwx_XC_37( './components/kdcs/mpweixin/index.wxml' );
	;__wxRoute = "components/kdcs/mpweixin/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/kdcs/mpweixin/index.js";define("components/kdcs/mpweixin/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var o=require("../../../utils/kdcs/getData.js"),e=require("../../../hooks/app/useApp.js"),s=require("../../../common/vendor.js");require("../../../hooks/order/useOrder.js"),require("../../../config/options.js"),require("../../../config/theme.js"),require("../../../hooks/products/useProductsSearch.js"),require("../../../utils/kdcs/ad.js"),require("../../../config/env.js"),require("../../../config/env.ci.js"),require("../../../consts.js"),require("../../../config/enums.js"),require("../../../config/routes.js"),require("../../../utils/upgrade.js"),require("../../../hooks/app/useLocation.js"),require("../../../hooks/app/useConfig.js"),require("../../../hooks/app/useSubscribeMsg.js"),require("../../../hooks/products/useFilm.js"),require("../../../utils/num-util.js"),require("../../../hooks/app/useAreas.js"),require("../../../hooks/products/useShopCoupons.js"),require("../../../hooks/products/useDefaultRegionInfo.js");var i=e.useApp().openOfficalAccountFollow,n=getApp(),r={data:function(){return{isShow:!1,isCustomShow:!1}},props:{},externalClasses:["tag-class"],mounted:function(){var o=this;this.$nextTick((function(){return o.ready()}))},methods:{ready:function(){var o=this;n.globalData.promiseObj.then((function(){o.checkBindUnionId()}))},binderror:function(o){console.log(o,"binderror"),this.setData({isCustomShow:!0})},bindload:function(o){console.log(o,"bindload"),0===o.detail.status?this.setData({isCustomShow:!1}):this.setData({isCustomShow:!0})},checkBindUnionId:function(){var e=this;o.checkSubscribeByUnionId({unionId:n.globalData.unionId}).then((function(o){console.log("进入$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"),console.log("bindUnind",o),o?e.setData({isShow:!1}):(console.log("进入22222"),e.setData({isShow:!0}))})).catch((function(o){console.log("是否绑定",o),e.setData({isShow:!0})}))},closeFun:function(){this.setData({isCustomShow:!1})},follow:function(){i()}},created:function(){}},t=s._export_sfc(r,[["render",function(o,e,i,n,r,t){return s.e({a:r.isShow},r.isShow?{b:s.o((function(){return t.closeFun&&t.closeFun.apply(t,arguments)})),c:s.o((function(){return t.follow&&t.follow.apply(t,arguments)}))}:{},{d:r.isShow},r.isShow?{e:s.n(r.isCustomShow?"":"tag-class")}:{})}]]);wx.createComponent(t);
},{isPage:false,isComponent:true,currentFile:'components/kdcs/mpweixin/index.js'});require("components/kdcs/mpweixin/index.js");