$gwx_XC_215=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_215 || [];
function gz$gwx_XC_215_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_215_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_215_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_215_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item'])
Z([[7],[3,'a']])
Z([3,'a'])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'b']])
Z([[6],[[7],[3,'item']],[3,'c']])
Z([[6],[[7],[3,'item']],[3,'d']])
Z(z[3])
Z([3,'r'])
Z([3,'453b60ac-1'])
Z([3,'filmShareRef'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_215_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_215_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_215=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_215=true;
var x=['./pages/search2/film-list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_215_1()
var xESB=_n('view')
var oFSB=_v()
_(xESB,oFSB)
var fGSB=function(hISB,cHSB,oJSB,gg){
var oLSB=_mz(z,'c-film-card',['bind:__l',3,'bindgoShare',1,'uI',2,'uP',3],[],hISB,cHSB,gg)
_(oJSB,oLSB)
return oJSB
}
oFSB.wxXCkey=4
_2z(z,1,fGSB,e,s,gg,oFSB,'item','index','a')
var lMSB=_mz(z,'c-film-share',['bind:__l',7,'class',1,'uI',2,'uR',3],[],e,s,gg)
_(xESB,lMSB)
_(r,xESB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_215";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_215();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search2/film-list.wxml'] = [$gwx_XC_215, './pages/search2/film-list.wxml'];else __wxAppCode__['pages/search2/film-list.wxml'] = $gwx_XC_215( './pages/search2/film-list.wxml' );
	;__wxRoute = "pages/search2/film-list";__wxRouteBegin = true;__wxAppCurrentFile__="pages/search2/film-list.js";define("pages/search2/film-list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../@babel/runtime/regenerator")),u=e(require("../../@babel/runtime/helpers/asyncToGenerator")),s=require("../../common/vendor.js"),o=require("../../config/enums.js");require("../../config/options.js"),require("../../config/theme.js");var n=require("../../hooks/app/useApp.js");require("../../hooks/order/useOrder.js"),require("../../hooks/products/useProductsSearch.js"),require("../../consts.js"),require("../../config/routes.js"),require("../../utils/upgrade.js"),require("../../hooks/app/useLocation.js"),require("../../hooks/app/useConfig.js"),require("../../hooks/app/useSubscribeMsg.js"),require("../../hooks/products/useFilm.js"),require("../../utils/num-util.js"),require("../../hooks/app/useAreas.js"),require("../../hooks/products/useShopCoupons.js"),require("../../hooks/products/useDefaultRegionInfo.js"),Array||(s.resolveComponent("c-film-card")+s.resolveComponent("c-film-share"))(),Math||(function(){return"../../components/c-film-card/c-film-card.js"}+function(){return"../../components/c-film-share/c-film-share.js"})();var t=s.defineComponent({__name:"film-list",setup:function(e,t){var i,a=t.expose,c=n.useApp().app,p=s.ref(),l=s.ref([]),f=s.ref(!1),m=s.computed((function(){var e;return!(null==(e=l.value)?void 0:e.length)&&!f.value}));function h(e){p.value&&p.value.open(e)}return s.computed((function(){var e;return!!(null==(e=l.value)?void 0:e.length)})),a({loadData:(i=(0,u.default)(r.default.mark((function e(u){var o,n,t;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.value=!0,e.next=3,s.tryExec(c.request,{api:"tuxi.txsh.film.searchFilms",params:u});case 3:o=e.sent,n=o.success,t=o.result,n&&(l.value=t),f.value=!1;case 7:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),isNoData:m}),function(e,r){return{a:s.f(s.unref(l),(function(e,r,u){return{a:r,b:s.o(h,r),c:"453b60ac-0-"+u,d:s.p({item:e,type:1===(null==e?void 0:e.showStatus)?s.unref(o.FILM_TYPE).PLAYING:s.unref(o.FILM_TYPE).READY})}})),b:s.sr(p,"453b60ac-1",{k:"filmShareRef"})}}}});wx.createComponent(t);
},{isPage:false,isComponent:true,currentFile:'pages/search2/film-list.js'});require("pages/search2/film-list.js");