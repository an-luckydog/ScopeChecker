$gwx_XC_163=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_163 || [];
function gz$gwx_XC_163_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_163_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_163_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_163_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([3,'height:220rpx;display:flex;flex:1;position:relative;flex-direction:column'])
Z([[7],[3,'b']])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_163_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_163_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_163=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_163=true;
var x=['./pages/entry2/home/components/film-vip-card.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_163_1()
var o2HB=_v()
_(r,o2HB)
if(_oz(z,0,e,s,gg)){o2HB.wxVkey=1
var c3HB=_n('view')
_rz(z,c3HB,'style',1,e,s,gg)
var o4HB=_v()
_(c3HB,o4HB)
if(_oz(z,2,e,s,gg)){o4HB.wxVkey=1
}
else{o4HB.wxVkey=2
var l5HB=_v()
_(o4HB,l5HB)
if(_oz(z,3,e,s,gg)){l5HB.wxVkey=1
}
l5HB.wxXCkey=1
}
o4HB.wxXCkey=1
_(o2HB,c3HB)
}
o2HB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_163";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_163();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/entry2/home/components/film-vip-card.wxml'] = [$gwx_XC_163, './pages/entry2/home/components/film-vip-card.wxml'];else __wxAppCode__['pages/entry2/home/components/film-vip-card.wxml'] = $gwx_XC_163( './pages/entry2/home/components/film-vip-card.wxml' );
	;__wxRoute = "pages/entry2/home/components/film-vip-card";__wxRouteBegin = true;__wxAppCurrentFile__="pages/entry2/home/components/film-vip-card.js";define("pages/entry2/home/components/film-vip-card.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../../../@babel/runtime/regenerator")),o=e(require("../../../../@babel/runtime/helpers/asyncToGenerator")),u=require("../../../../common/vendor.js"),i=require("../../../../hooks/app/useApp.js");require("../../../../hooks/order/useOrder.js"),require("../../../../config/options.js"),require("../../../../config/theme.js"),require("../../../../hooks/products/useProductsSearch.js");var n=require("../../../../hooks/products/useFilm.js");require("../../../../consts.js"),require("../../../../config/enums.js"),require("../../../../config/routes.js"),require("../../../../utils/upgrade.js"),require("../../../../hooks/app/useLocation.js"),require("../../../../hooks/app/useConfig.js"),require("../../../../hooks/app/useSubscribeMsg.js"),require("../../../../hooks/app/useAreas.js"),require("../../../../hooks/products/useShopCoupons.js"),require("../../../../hooks/products/useDefaultRegionInfo.js"),require("../../../../utils/num-util.js");var s=u.defineComponent({__name:"film-vip-card",props:{home:{type:Boolean}},setup:function(e){var s=e,t=i.useApp(),a=t.app,c=t.commonConfig,l=t.currentCityId,p=n.useFilm(),f=p.firstVipInfo,d=p.isFilmVip,m=u.ref(!0);u.onMounted((function(){"1"===c.value.filmVipMainSwitch&&"1"===c.value.filmVipBannerSwitch&&(m.value=!1)}));var h=u.computed((function(){var e=!0;return console.log("props.home>>>",s.home),!s.home&&d&&(e=!1),!m.value&&e}));function v(){return q.apply(this,arguments)}function q(){return(q=(0,o.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.trace("cinema_card_get_click",{tags:{city_id:l.value}}),c.value.filmVipJumpAddr?a.router.goto({url:c.value.filmVipJumpAddr}):(u.index.showLoading(),a.api.receiveFilmVip().then((function(e){setTimeout((function(){u.index.hideLoading(),a.ui.showModal({content:"领取成功,有效期至".concat(u.format(null==f?void 0:f.expirationTime,"YYYY年MM月DD日")),closable:!1,showCancel:!1,hideCancel:!0})}),1e3)})).catch((function(e){u.index.hideLoading();var r=e.message;r&&a.ui.showModal({content:r,closable:!1,showCancel:!1,hideCancel:!0})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(e,r){var o,i,n,s,t;return u.e({a:u.unref(h)},u.unref(h)?u.e({b:!u.unref(d)},u.unref(d)?u.e({d:u.t(u.unref(u.dateUtil).format(null==(o=u.unref(f))?void 0:o.expirationTime,"YYYY年MM月DD日"))},{e:u.t((null==(i=u.unref(f))?void 0:i.count)?null==(n=u.unref(f))?void 0:n.count:"0"),f:u.t((null==(s=u.unref(f))?void 0:s.sumMoney)?null==(t=u.unref(f))?void 0:t.sumMoney:"0"),g:u.o(v)}):{c:u.o(v)}):{})}}});wx.createComponent(s);
},{isPage:false,isComponent:true,currentFile:'pages/entry2/home/components/film-vip-card.js'});require("pages/entry2/home/components/film-vip-card.js");