$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'] = [$gwx_XC_7, './miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml'] = $gwx_XC_7( './miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.js";define("miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=(t=require("../../../../@babel/runtime/regenerator"))&&t.__esModule?t:{default:t},r=require("../../../../@babel/runtime/helpers/slicedToArray"),a=require("../../../../@babel/runtime/helpers/objectSpread2"),n=require("../../../../@babel/runtime/helpers/asyncToGenerator"),i=require("./logic");Component({properties:{buss:{type:String,value:""},id:{type:Number,value:0},name:{type:String,value:""},from:{type:String,value:""}},data:{productMap:{},ready:!1},attached:function(){this.init()},methods:{init:function(){var t=this;return n(e.default.mark((function u(){return e.default.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:(0,i.getUserLocation)().then(function(){var u=n(e.default.mark((function n(u){var c,o,s,d,p,f,l;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(c=u||{}).cityName,s=c.longitude,d=c.latitude,t.params={cityName:o,longitude:s,latitude:d},e.next=4,(0,i.getFilterObj)();case 4:if(p=e.sent,(f=Object.keys(p).map((function(t){return a({id:t},p[t])}))).forEach((function(e,a){if(e.id!==t.data.buss);else{var n=f.splice(a,1),i=r(n,1);l=i[0]}})),l&&f.unshift(l),f&&f.length){e.next=10;break}return e.abrupt("return",Promise.reject("商品类别获取失败"));case 10:t.setData({ready:!0,tabList:f,currentTab:f[0].id}),t.renderTabContent(f[0].id);case 12:case"end":return e.stop()}}),n)})));return function(t){return u.apply(this,arguments)}}()).catch((function(){}));case 1:case"end":return u.stop()}}),u)})))()},renderTabContent:function(t){var r=this;return n(e.default.mark((function a(){var n,i,u,c;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({buss:t},r.params),e.next=3,r.getProductList(n);case 3:i=e.sent,u=r.data.productMap,c=(u[t]||[]).slice(0),u[t]=c.concat(i),r.setData({productMap:u});case 8:case"end":return e.stop()}}),a)})))()},changeTab:function(t){var e,r=t.currentTarget.dataset.current;r&&(this.report("AJ020",{40:r,37:this.data.buss,36:this.data.name,35:this.data.id}),this.setData({currentTab:r}),null!==(e=this.data.productMap[r])&&void 0!==e&&e.length||this.renderTabContent(r))},getProductList:function(t){return(0,i.request)("marketing/booking/product/recommand/list",t).then((function(t){var e=t.errCode,r=t.resData,a=void 0===r?{}:r;return 0===e?(0,i.formatProduct)(a):Promise.reject(t)})).catch((function(){return[]}))},onGoProduct:function(t){var e=t.mark,r=e.name,a=void 0===r?"":r,n=e.id,i=void 0===n?0:n,u=e.buss,c=void 0===u?0:u;this.report("AJ021",{40:c,39:a,38:i,37:this.data.buss,36:this.data.name,35:this.data.id});var o=this.data.from;o.indexOf("recommand")<0&&(o="recommand_".concat(o)),wx.redirectTo({url:"/launch/launch?target=bookingProduct&id=".concat(i,"&buss=").concat(c,"&from=").concat(o,"_").concat(this.data.buss)})},report:function(t,e){(0,i.report)(a(a({},{26:"AJ"}),{},{27:t},e))}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.js'});require("miniprogram_npm/@tmsfe/tms-ui/booking-recommand/booking-recommand.js");