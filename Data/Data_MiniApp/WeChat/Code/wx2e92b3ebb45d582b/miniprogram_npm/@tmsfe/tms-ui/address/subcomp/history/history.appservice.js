$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'place-history'])
Z([[2,'&&'],[[7],[3,'commuteAddr']],[[2,'==='],[[6],[[7],[3,'commuteAddr']],[3,'length']],[1,0]]])
Z([3,'index'])
Z([[7],[3,'commuteAddr']])
Z(z[2])
Z([[6],[[7],[3,'item']],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var cUC=_n('view')
_rz(z,cUC,'class',0,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,1,e,s,gg)){oVC.wxVkey=1
}
else{oVC.wxVkey=2
var lWC=_v()
_(oVC,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_v()
_(b1C,x3C)
if(_oz(z,5,eZC,tYC,gg)){x3C.wxVkey=1
}
x3C.wxXCkey=1
return b1C
}
lWC.wxXCkey=2
_2z(z,3,aXC,e,s,gg,lWC,'item','index','index')
}
oVC.wxXCkey=1
_(r,cUC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.wxml'] = [$gwx_XC_2, './miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.wxml'] = $gwx_XC_2( './miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.js";define("miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=(t=require("../../../../../../@babel/runtime/regenerator"))&&t.__esModule?t:{default:t},r=require("../../../../../../@babel/runtime/helpers/asyncToGenerator");var a=getApp({allowDefault:!0}).tms.createRequest();Component({properties:{},data:{commuteAddr:null,historyEnd:null},pageLifetimes:{show:function(){this.getCommute()}},lifetimes:{attached:function(){var t=this.getCachedHistory(this.keyGenerater());this.setData({historyEnd:t})}},methods:{keyGenerater:function(){return"aggredrive@key_destination"},getCachedHistory:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;try{var r=JSON.parse(wx.getStorageSync(t));return r.reverse().slice(0,Math.min(e,r.length))}catch(t){return[]}},onTapHistory:function(t){var e,r,a=((null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.dataset)||{}).index,n=null===(r=this.data.historyEnd)||void 0===r?void 0:r[a],i=n.title,o=n.address,s=n.latitude,u=n.longitude;this.triggerEvent("taphistory",{title:i,address:o,latitude:s,longitude:u})},onTapCommute:function(t){var e,r,a=((null==t||null===(e=t.currentTarget)||void 0===e?void 0:e.dataset)||{}).index,n=null===(r=this.data.commuteAddr)||void 0===r?void 0:r[a],i=n.title,o=n.address,s=n.latitude,u=n.longitude;this.triggerEvent("taphistory",{title:i,address:o,latitude:s,longitude:u})},getCommute:function(){var t=this;return r(e.default.mark((function r(){var n,i,o,s,u,d,l;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get("/commute/setting");case 3:n=e.sent,i=null==n?void 0:n.resData,o=i.companyExt,s=i.homeExt,(u=s&&JSON.parse(s)||{}).title=u.name,u.type="home",(d=o&&JSON.parse(o)||{}).title=d.name,d.type="company",l=[u,d].filter((function(t){return t.title})),t.setData({commuteAddr:l}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),t.setData({commuteAddr:[]});case 18:case"end":return e.stop()}}),r,null,[[0,15]])})))()},onTapCommuteEdit:function(){wx.navigateTo({url:"/modules/me/pages/commute/address?from=addresshistorycomp"})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.js'});require("miniprogram_npm/@tmsfe/tms-ui/address/subcomp/history/history.js");