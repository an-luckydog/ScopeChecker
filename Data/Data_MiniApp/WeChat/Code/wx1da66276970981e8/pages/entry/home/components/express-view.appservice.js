$gwx_XC_137=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_137 || [];
function gz$gwx_XC_137_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_137_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_137_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_137_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-6bbb9663'])
Z([3,'display:flex;flex-direction:row;width:100%;align-items:center'])
Z([3,'__l'])
Z([3,'r data-v-6bbb9663'])
Z([3,'display:flex;flex:1;margin-left:12px'])
Z([3,'6bbb9663-0'])
Z([3,'expressPackageInfoRef'])
Z(z[2])
Z(z[0])
Z([3,'margin-right:12px'])
Z([3,'6bbb9663-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_137_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_137_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_137=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_137=true;
var x=['./pages/entry/home/components/express-view.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_137_1()
var eD6=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var bE6=_mz(z,'express-package-info',['bind:__l',2,'class',1,'style',2,'uI',3,'uR',4],[],e,s,gg)
_(eD6,bE6)
var oF6=_mz(z,'express-send',['bind:__l',7,'class',1,'style',2,'uI',3],[],e,s,gg)
_(eD6,oF6)
_(r,eD6)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_137";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_137();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry/home/components/express-view.wxml'] = [$gwx_XC_137, './pages/entry/home/components/express-view.wxml'];else __wxAppCode__['pages/entry/home/components/express-view.wxml'] = $gwx_XC_137( './pages/entry/home/components/express-view.wxml' );
	;__wxRoute = "pages/entry/home/components/express-view";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry/home/components/express-view.js";define("pages/entry/home/components/express-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../common/vendor.js"),s=require("../../../../hooks/app/useApp.js");require("../../../../hooks/order/useOrder.js"),require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../hooks/products/useProductsSearch.js");var o=require("../../../../utils/kdcs/getData.js"),r=require("../useIndexHome.js");require("../../../../consts.js"),require("../../../../config/enums.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/products/useFilm.js"),require("../../../../utils/num-util.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),require("../../../../utils/kdcs/ad.js"),require("../../../../config/env.js"),require("../../../../config/env.ci.js"),require("../useDefaultDpList.js"),require("../../../../hooks/products/useProducts.js"),require("../../../../hooks/products/useDistricts.js"),require("../../../../hooks/products/useCategories.js"),require("../../../../hooks/products/usePromotion.js"),Math||(n+i)();var n=function(){return"./express-package-info.js"},i=function(){return"./express-send.js"},u=e.defineComponent({__name:"express-view",setup:function(n,i){var u=i.expose,t=s.useApp(),c=t.app,a=t.wxApp,p=t.ensureBindMobile,d=r.useIndexHome(),g=d.activityInfo,f=d.topImageSwitchComp,k=e.ref(),l=[{img:"https://fscdn.zto.com/fs41/M09/41/5E/CgRReWVNkUWAAHQoAAAaRFE_M7E558.png",name:"查询快递",onClick:function(){j("createQueryWuliu","/kdcs/pages/queryOrder/index")}},{img:"https://fscdn.zto.com/fs41/M0A/41/5E/CgRReWVNkUWAB46TAAARTig4jDc745.png",name:"亲友代取",onClick:function(){j("createFriendTake","/kdcs/pages/othersTake/index")}},{img:"https://fscdn.zto.com/fs41/M0A/D2/F7/CgRRbWVNkUWAfv5iAAAPAPp47QY286.png",name:"我的寄件",onClick:function(){j("createMySending","/kdcs/pages/orderRecord/index")}},{img:"https://fscdn.zto.com/fs41/M09/D2/F7/CgRRbWVNkUWAB8i0AAAMWOttjZY008.png",name:"快递问题",onClick:function(){j("createProblem","/kdcs/pages/complaint/index")}},{img:"https://fscdn.zto.com/fs41/M07/D2/F7/CgRRbWVNkUWAIlIRAAAL8t8WGSc272.png",name:"签收码",onClick:function(){e.index.uma.trackEvent("createSignCode"),p((function(){var e;o.getSignature({unionId:null==(e=a.globalData)?void 0:e.unionId}).then((function(e){c.router.goWithLogin({url:"/kdcs/pages/signCodeFinish/index",action:"jingang:click"})})).catch((function(){c.router.goWithLogin({url:"/kdcs/pages/signCode/index",action:"jingang:click"})}))}))}}],m=e.computed((function(){var e,s;return f.value?(null==(s=null==(e=g.value)?void 0:e.activityPlaceOne)?void 0:s.length)>0?"-108rpx":"-216rpx":"-66rpx"}));function j(s,o){s&&o&&(e.index.uma.trackEvent(s),p((function(){c.router.goWithLogin({url:o,action:"jingang:click"})})))}return u({queryExpress:function(){k.value&&k.value.queryExpress()}}),function(s,o){return{a:e.sr(k,"6bbb9663-0",{k:"expressPackageInfoRef"}),b:e.f(l,(function(s,o,r){return{a:s.img,b:e.t(s.name),c:o,d:e.o(s.onClick,o)}})),c:"".concat(e.unref(m))}}}}),t=e._export_sfc(u,[["__scopeId","data-v-6bbb9663"]]);wx.createComponent(t);
},{isPage:false,isComponent:true,currentFile:'pages/entry/home/components/express-view.js'});require("pages/entry/home/components/express-view.js");