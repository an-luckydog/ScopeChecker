$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([1,'transparent'])
Z([3,'onUpdateNavbarHeight'])
Z(z[0])
Z([3,'light'])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var tUG=_mz(z,'navbar',['backBtnVisible',0,'backgroundColor',1,'bind:navBarAttached',1,'enableHomeNav',2,'styleName',3,'title',4],[],e,s,gg)
_(r,tUG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.wxml'] = [$gwx_XC_18, './miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.wxml'] = $gwx_XC_18( './miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.js";define("miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../../@babel/runtime/helpers/objectSpread2"),t=require("../../../../../../@babel/runtime/helpers/slicedToArray"),a=u(require("../../../../../../@babel/runtime/regenerator")),n=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),r=u(require("../../common/Checkin")),o=u(require("./logic/Controller")),i=u(require("../../vendor")),s=u(require("../../common/fetchRemote"));function u(e){return e&&e.__esModule?e:{default:e}}Component({properties:{options:{type:Object,value:{shopId:""}}},data:{shopImageCDN:r.default.shopImageCDN,showPhone:!1},pageLifetimes:{show:function(){}},detached:function(){},ready:function(){var e,t=((null===(e=this.data)||void 0===e?void 0:e.options)||{}).shopId;this.initData(t)},methods:{showLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...";this.setData({loadingText:e,showLoading:!0})},hideLoading:function(){this.setData({showLoading:!1})},onUpdateNavbarHeight:function(e){var t=e.detail,a=t.statusBarHeight,n=void 0===a?88:a,r=t.navBarHeight,o=void 0===r?88:r;this.setData({navbarHeight:n+o})},onNavBack:function(){var e=this;return n(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.default.showLoading();try{r.default.hideLoading(),i.default.Platform.navigateBack()}catch(t){e.setData(t),r.default.hideLoading()}case 2:case"end":return t.stop()}}),t)})))()},renderNavbackBtn:function(){var e=getCurrentPages()||[];this.setData({navBackVisible:e.length>1})},initData:function(r){var i=this;return n(a.default.mark((function n(){var u,d,c,l,h;return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.default.fetchShop({id:r});case 2:return u=a.sent,i.setData({shop:u}),a.next=6,o.default.getPhone();case 6:return d=a.sent,a.next=9,s.default.getArrivePrizeList();case 9:c=a.sent,l=t(c,1),h=l[0],i.setData(e(e({},d),{},{arrivePrize:h}));case 13:case"end":return a.stop()}}),n)})))()},onMakePhoneCall:function(){i.default.Platform.makePhoneCall({phoneNumber:"021-65235085"})},onGoIM:function(){var e=this;return n(a.default.mark((function t(){var n,r,s,u,d,c,l,h,f,p,m,g,v,b,w;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.data.shop,r=n.bindEnterpriseId,s=n.bindEnterpriseName,u=n.id,d="XingtuLive",t.next=4,o.default.getRecommendBrand();case 4:return c=t.sent,l=c.seriesId,t.next=8,o.default.getFollowSalesInfo({tenantId:r});case 8:h=t.sent,f=h.userId,p=h.userName,m=h.openUserId,g={salesId:f,salesName:p,tenantId:r,tenantName:s,salesOpenUserId:m,shopId:u,from:d,seriesId:l},v=Object.keys(g),b=v.map((function(e){return"".concat(e,"=").concat(g[e])})),w="/modules/aggreim/pages/im/index?".concat(b.join("&")),i.default.Platform.navigateTo({url:w});case 15:case"end":return t.stop()}}),t)})))()},onPhoneSwitch:function(){this.setData({showPhone:!this.data.showPhone})},onNavigation:function(e){return n(a.default.mark((function t(){var n,r,o;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.currentTarget.dataset.shop,r=n.latitude,o=n.longitude,wx.openLocation({latitude:Number(r),longitude:Number(o),scale:18});case 3:case"end":return t.stop()}}),t)})))()}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.js'});require("miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-present/index.js");