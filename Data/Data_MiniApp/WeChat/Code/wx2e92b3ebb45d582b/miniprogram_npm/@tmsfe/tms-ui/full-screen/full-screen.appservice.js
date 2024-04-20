$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_28 || [];
function gz$gwx_XC_28_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
var oXI=_v()
_(r,oXI)
if(_oz(z,0,e,s,gg)){oXI.wxVkey=1
}
oXI.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_28";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.wxml'] = [$gwx_XC_28, './miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.wxml'] = $gwx_XC_28( './miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.js";define("miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/objectSpread2"),t=n(require("../platformUtils")),i=n(require("@tmsfe/tms-core"));function n(e){return e&&e.__esModule?e:{default:e}}var a=i.default.getConfig,o=i.default.getLocationManager,r=i.default.getReporter,l=i.default.isAppPageExist,c=null,d=null;Component({properties:{containerId:String,confPath:String,extraParam:Object},data:{visible:!1,id:"",name:"",imageUrl:"",linkType:"",link:"",mpAppId:""},lifetimes:{attached:function(){this.loadFullScreen()}},methods:{loadFullScreen:function(){var t=this,i=this.data,n=i.containerId,o=i.confPath,r=i.extraParam,l=o||"/${client}/components/fullscreen/".concat(n);this.getUserLoc().then((function(t){var i,o,c=(null===(i=wx.getSystemInfoSync())||void 0===i?void 0:i.host)||{},d=c.appId,p=c.env,s=t||{},u=s.province,m=s.city,v=s.cityCode,f=s.adCode,g=e(e({province:u,city:m,cityCode:v,adCode:f,hostAppId:d||p||"unknown",appEnterScene:(null===(o=wx.getEnterOptionsSync())||void 0===o?void 0:o.scene)||-1},r||{}),{},{containerId:n});return a(l,g).catch((function(){return[]}))})).then((function(e){return t.chooseOneToDisplay(e)})).then((function(i){var n;if(i){var a=i.id,o=i.name,r=i.imageUrl,l=i.linkType,c=void 0===l?"mp":l,d=i.link,p=i.mpAppId,s=void 0===p?"":p;t.setData({id:a,name:o,imageUrl:r,linkType:c,link:d,mpAppId:s,visible:!0});var u=t.getDisplayData(),m=((null==u||null===(n=u[t.data.containerId])||void 0===n?void 0:n[a])||{}).displayTimes,v=void 0===m?0:m;t.updateItemData(a,{displayTimes:v+1,lastDisplayTime:Date.now()},!0);var f=t.data.containerId;t.triggerEvent("display",e(e({},i),{},{containerId:f})),t.report("AP003",{34:s,35:o,36:a,37:c,38:d,39:f})}}))},getUserLoc:function(){if(d&&Date.now()-d.updateTime<3e4)return Promise.resolve(d);var e=o();return e?e.getLocationDetailSilent().catch((function(){return null})).then((function(e){var t=e||{},i=t.province,n=void 0===i?"":i,a=t.cityName,o=void 0===a?"":a,r=t.cityCode,l=void 0===r?"":r,c=t.adCode,p=void 0===c?"":c,s=t.longitude,u=t.latitude;return d={province:n,city:o,cityCode:l,adCode:p,longitude:s,latitude:u,updateTime:Date.now()}})):{}},chooseOneToDisplay:function(e){var t=this,i=this.getDisplayData()[this.data.containerId]||{},n=i.displayedDays,a=void 0===n?[]:n,o=i.items,r=void 0===o?{}:o,c=this.getDateStr(new Date);return a.some((function(e){return e===c}))?null:e.find((function(e){var i=e.id,n=e.linkType,a=e.link,o=e.mpAppId;if("mp"===n){if(t.isNavToCurApp(o)&&!l(a))return!1}else if("web"===n){if(!a)return!1}else if(-1===["none",""].indexOf(n))return!1;return!(null==r?void 0:r[i||"default"])}))},isNavToCurApp:function(e){return!e||e===t.default.getAppId()},getDateStr:function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},getDisplayData:function(){return c||(c=wx.getStorageSync("ComponentFullScreenDisplay")||{})},closeFullScreen:function(){this.setData({visible:!1});var e=this.data,t=e.id,i=e.name,n=e.imageUrl,a=e.linkType,o=e.link,r=e.mpAppId,l=e.containerId;this.triggerEvent("click",{id:t,name:i,imageUrl:n,linkType:a,link:o,mpAppId:r,containerId:l,clickAction:"close"}),this.report("AP004",{34:r,35:i,36:t,37:a,38:o,39:l})},openFullScreen:function(){this.setData({visible:!1});var e=this.data,t=e.id,i=e.name,n=e.imageUrl,a=e.linkType,o=e.link,r=e.mpAppId,l=e.containerId;switch(this.updateItemData(t,{clickedTime:Date.now()},!1),this.triggerEvent("click",{id:t,name:i,imageUrl:n,linkType:a,link:o,mpAppId:r,containerId:l,clickAction:"open"}),this.report("AP005",{34:r,35:i,36:t,37:a,38:o,39:l}),a){case"mp":this.openMp(o,r);break;case"web":this.openWeb(o)}},openMp:function(e,t){t?wx.navigateToMiniProgram({appId:t,path:e}):wx.navigateTo({url:e})},openWeb:function(e){wx.navigateTo({url:"".concat("/modules/x/webcontainer/webcontainer","?url=").concat(encodeURIComponent(e))})},updateItemData:function(e,t,i){var n=this.getDisplayData(),a=this.data.containerId;if(n[a]||(n[a]={}),n[a].items||(n[a].items={}),n[a].items[e]||(n[a].items[e]=t),n[a].displayedDays?Object.assign(n[a].items[e],t):n[a].displayedDays=[],i){var o=this.getDateStr(new Date);n[a].displayedDays.unshift(o),n[a].displayedDays.slice(0,10)}c=n,wx.setStorage({key:"ComponentFullScreenDisplay",data:n})},report:function(t,i){var n,a=null===(n=r())||void 0===n?void 0:n.report;a&&a(e({26:"AP",27:t},i))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.js'});require("miniprogram_npm/@tmsfe/tms-ui/full-screen/full-screen.js");