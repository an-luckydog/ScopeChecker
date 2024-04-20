$gwx_XC_143=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_143 || [];
function gz$gwx_XC_143_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_143_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_143_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_143_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'head-wrap data-v-f126c56a'])
Z([[7],[3,'a']])
Z([[7],[3,'b']])
Z([3,'__l'])
Z([3,'data-v-f126c56a'])
Z([3,'f126c56a-0'])
Z(z[3])
Z([3,'r data-v-f126c56a'])
Z([3,'f126c56a-1'])
Z([3,'subscribeAlertRef'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_143_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_143_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_143=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_143=true;
var x=['./pages/entry/home/components/head-pic-view.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_143_1()
var oT7=_n('view')
_rz(z,oT7,'class',0,e,s,gg)
var lU7=_v()
_(oT7,lU7)
if(_oz(z,1,e,s,gg)){lU7.wxVkey=1
}
var aV7=_v()
_(oT7,aV7)
if(_oz(z,2,e,s,gg)){aV7.wxVkey=1
}
var tW7=_mz(z,'head-search',['bind:__l',3,'class',1,'uI',2],[],e,s,gg)
_(oT7,tW7)
lU7.wxXCkey=1
aV7.wxXCkey=1
_(r,oT7)
var eX7=_mz(z,'subscribe-alert',['bind:__l',6,'class',1,'uI',2,'uR',3],[],e,s,gg)
_(r,eX7)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_143";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_143();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry/home/components/head-pic-view.wxml'] = [$gwx_XC_143, './pages/entry/home/components/head-pic-view.wxml'];else __wxAppCode__['pages/entry/home/components/head-pic-view.wxml'] = $gwx_XC_143( './pages/entry/home/components/head-pic-view.wxml' );
	;__wxRoute = "pages/entry/home/components/head-pic-view";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry/home/components/head-pic-view.js";define("pages/entry/home/components/head-pic-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/vendor.js"),r=require("../../../../consts.js"),u=require("../../../../hooks/app/useApp.js");require("../../../../hooks/order/useOrder.js"),require("../../../../config/options.js"),require("../../../../config/theme.js");var o=require("../../../../hooks/products/useProducts.js");require("../../../../hooks/products/useProductsSearch.js");var s=require("../useIndexHome.js");require("../../../../config/enums.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useDistricts.js"),require("../../../../hooks/products/useCategories.js"),require("../../../../hooks/products/usePromotion.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),require("../useDefaultDpList.js"),Math||(i+n)();var i=function(){return"./head-search.js"},n=function(){return"../../../common/subscribe-alert/subscribe-alert.js"},t=e.defineComponent({__name:"head-pic-view",setup:function(i){var n=u.useApp(),t=n.systemInfo,c=(n.chooseLocation,n.app),a=(n.currentLocation,n.isAccurateLocation,o.useProducts().openMiniProgram),p=e.ref(),l=s.useIndexHome().activityInfo;t.value,e.computed((function(){var e,r;return(null==(e=l.value)?void 0:e.activityPlaceOne)&&(null==(r=l.value)?void 0:r.activityPlaceOne.length)>0?null:"url(https://fscdn.zto.com/fs41/M08/F4/1C/CgRRbWVcVa2AVVG0AAjWxbec1UY304.png)"}));var d=e.computed((function(){return"630rpx"}));return function(u,o){var s,i,n,t,f,j,v;return e.e({a:0===(null==(i=null==(s=e.unref(l))?void 0:s.activityPlaceOne)?void 0:i.length)},(null==(t=null==(n=e.unref(l))?void 0:n.activityPlaceOne)||t.length,{}),{b:null==(f=e.unref(l))?void 0:f.activityPlaceOne},(null==(j=e.unref(l))?void 0:j.activityPlaceOne)?{c:e.f(null==(v=e.unref(l))?void 0:v.activityPlaceOne,(function(u,o,s){return{a:u.headImage,b:e.o((function(e){return function(e){c.tracer.setTraceType(r.AppTraceType.HomeTopBanner),p.value.toCheck({bizNo:"activity",groupType:"activity"},(function(){e.jumpAppId?a({miniProgramAppId:e.jumpAppId,miniProgramPath:e.jumpUrl?e.jumpUrl:"",action:"banner0:click"}):e.jumpUrl&&(c.setAppData(r.AppMenuUrlDataKey,e.jumpUrl),c.router.goWithLogin({url:e.jumpUrl,action:"banner0:click"}))}))}(u)}),o),c:o}}))}:{},{d:e.unref(d),e:e.sr(p,"f126c56a-1",{k:"subscribeAlertRef"})})}}}),c=e._export_sfc(t,[["__scopeId","data-v-f126c56a"]]);wx.createComponent(c);
},{isPage:false,isComponent:true,currentFile:'pages/entry/home/components/head-pic-view.js'});require("pages/entry/home/components/head-pic-view.js");