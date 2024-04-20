$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'custom-class'])
Z([[6],[[7],[3,'banner']],[3,'showBanner']])
Z([[7],[3,'adName']])
Z([[7],[3,'banner']])
Z([[7],[3,'pathName']])
Z([[7],[3,'isShowCustomAd']])
Z(z[2])
Z([3,'loadCustomAdFail'])
Z([3,'wx-ad'])
Z(z[4])
Z([[7],[3,'customAdUnit']])
Z([[7],[3,'isShowAd']])
Z(z[2])
Z([3,'loadAdFail'])
Z(z[8])
Z(z[4])
Z([[7],[3,'adUnit']])
Z(z[3])
Z(z[2])
Z(z[3])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./components/IndexBannerAd/IndexBannerAd.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,1,e,s,gg)){oFD.wxVkey=1
var xGD=_mz(z,'BannerAd',['adName',2,'banner',1,'pathName',2],[],e,s,gg)
_(oFD,xGD)
}
else{oFD.wxVkey=2
var oHD=_v()
_(oFD,oHD)
if(_oz(z,5,e,s,gg)){oHD.wxVkey=1
var fID=_mz(z,'WxAd',['isCustomAd',-1,'adName',6,'bind:error',1,'class',2,'pathName',3,'unitId',4],[],e,s,gg)
_(oHD,fID)
}
else if(_oz(z,11,e,s,gg)){oHD.wxVkey=2
var cJD=_mz(z,'WxAd',['adName',12,'bind:error',1,'class',2,'pathName',3,'unitId',4],[],e,s,gg)
_(oHD,cJD)
}
else if(_oz(z,17,e,s,gg)){oHD.wxVkey=3
var hKD=_mz(z,'BannerAd',['adName',18,'banner',1,'pathName',2],[],e,s,gg)
_(oHD,hKD)
}
oHD.wxXCkey=1
oHD.wxXCkey=3
oHD.wxXCkey=3
oHD.wxXCkey=3
}
oFD.wxXCkey=1
oFD.wxXCkey=3
oFD.wxXCkey=3
_(r,bED)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/IndexBannerAd/IndexBannerAd.wxml'] = [$gwx_XC_30, './components/IndexBannerAd/IndexBannerAd.wxml'];else __wxAppCode__['components/IndexBannerAd/IndexBannerAd.wxml'] = $gwx_XC_30( './components/IndexBannerAd/IndexBannerAd.wxml' );
	;__wxRoute = "components/IndexBannerAd/IndexBannerAd";__wxRouteBegin = true;__wxAppCurrentFile__="components/IndexBannerAd/IndexBannerAd.js";define("components/IndexBannerAd/IndexBannerAd.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/toConsumableArray"),t=require("@/utils/ad");Component({properties:{pathName:String,adName:String},externalClasses:["custom-class"],data:{banner:null,isShowCustomAd:!1,isShowAd:!1,customAdUnit:"adunit-f2292bd318dc3677",adUnit:"adunit-110f9fa0b90e2176"},pageLifetimes:{show:function(){if(this._everHided){this._everHided=!1;var t=this.selectAllComponents(".wx-ad");e(t).forEach((function(e){var t;return null==e||null===(t=e.adScreenView)||void 0===t?void 0:t.call(e)}))}},hide:function(){this._everHided=!0}},lifetimes:{attached:function(){var e=(0,t.randomBanner)({page:"index"});this.setData({banner:e,isShowCustomAd:!(null!=e&&e.showBanner)})}},methods:{loadCustomAdFail:function(){this.setData({isShowCustomAd:!1,isShowAd:!0})},loadAdFail:function(){this.setData({isShowAd:!1})}}});
},{isPage:false,isComponent:true,currentFile:'components/IndexBannerAd/IndexBannerAd.js'});require("components/IndexBannerAd/IndexBannerAd.js");