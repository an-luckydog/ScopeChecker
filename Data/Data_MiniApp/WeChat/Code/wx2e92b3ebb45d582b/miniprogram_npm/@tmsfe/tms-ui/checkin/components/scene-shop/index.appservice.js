$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];
function gz$gwx_XC_19_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-warp'])
Z([1,true])
Z([1,'transparent'])
Z([3,'onUpdateNavbarHeight'])
Z(z[1])
Z([3,'#fff'])
Z([3,'light'])
Z([3,'选择门店'])
Z([[7],[3,'noLocAuth']])
Z([3,'onLocAuthClick'])
Z([3,'去授权'])
Z([[2,'||'],[[2,'!'],[[7],[3,'shops']]],[[2,'==='],[[6],[[7],[3,'shops']],[3,'length']],[1,0]]])
Z([3,'onCitySelected'])
Z([3,'onCityColumnChange'])
Z([3,'city-selector'])
Z([3,'multiSelector'])
Z([[7],[3,'cities']])
Z([3,'name'])
Z([[7],[3,'cityIndex']])
Z([3,'切换城市'])
Z([[7],[3,'dataReady']])
Z([3,'footer'])
Z([[7],[3,'phone']])
Z([3,'onPresentGet'])
Z([3,'padding: 16rpx 0;'])
Z([3,'立即领取'])
Z([3,'onPhoneAuthorized'])
Z([3,'getPhoneNumber'])
Z(z[24])
Z(z[25])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_19=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_19=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_19_1()
var bWG=_n('view')
_rz(z,bWG,'class',0,e,s,gg)
var xYG=_mz(z,'navbar',['backBtnVisible',1,'backgroundColor',1,'bind:navBarAttached',2,'enableHomeNav',3,'frontColor',4,'styleName',5,'title',6],[],e,s,gg)
_(bWG,xYG)
var oXG=_v()
_(bWG,oXG)
if(_oz(z,8,e,s,gg)){oXG.wxVkey=1
var oZG=_mz(z,'c-btn',['bind:click',9,'title',1],[],e,s,gg)
_(oXG,oZG)
}
else if(_oz(z,11,e,s,gg)){oXG.wxVkey=2
var f1G=_mz(z,'picker',['bindchange',12,'bindcolumnchange',1,'class',2,'mode',3,'range',4,'rangeKey',5,'value',6],[],e,s,gg)
var c2G=_n('c-btn')
_rz(z,c2G,'title',19,e,s,gg)
_(f1G,c2G)
_(oXG,f1G)
}
else{oXG.wxVkey=3
var h3G=_v()
_(oXG,h3G)
if(_oz(z,20,e,s,gg)){h3G.wxVkey=1
var o4G=_n('view')
_rz(z,o4G,'class',21,e,s,gg)
var c5G=_v()
_(o4G,c5G)
if(_oz(z,22,e,s,gg)){c5G.wxVkey=1
var o6G=_mz(z,'c-btn',['bind:click',23,'style',1,'title',2],[],e,s,gg)
_(c5G,o6G)
}
else{c5G.wxVkey=2
var l7G=_mz(z,'c-btn',['bind:phone',26,'openType',1,'style',2,'title',3],[],e,s,gg)
_(c5G,l7G)
}
c5G.wxXCkey=1
c5G.wxXCkey=3
c5G.wxXCkey=3
_(h3G,o4G)
}
h3G.wxXCkey=1
h3G.wxXCkey=3
}
oXG.wxXCkey=1
oXG.wxXCkey=3
oXG.wxXCkey=3
oXG.wxXCkey=3
_(r,bWG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_19";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.wxml'] = [$gwx_XC_19, './miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.wxml'] = $gwx_XC_19( './miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.js";define("miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../../@babel/runtime/helpers/slicedToArray"),t=s(require("../../../../../../@babel/runtime/regenerator")),a=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),n=s(require("../../common/Checkin")),r=s(require("./logic/Controller")),o=s(require("../../vendor")),i=require("../../common/constant");function s(e){return e&&e.__esModule?e:{default:e}}Component({properties:{},data:{imageCDN:n.default.imageCDN,shopImageCDN:n.default.shopImageCDN,selectedShopId:"",shops:[],phone:"",noLocAuth:!1,dataReady:!1,cityIndex:[0,0]},pageLifetimes:{show:function(){}},detached:function(){},ready:function(){this.initCities(),this.initData(),r.default.report("sign_prize_store_pv",i.REPORT_TYPES.pv)},methods:{showLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...";this.setData({loadingText:e,showLoading:!0})},hideLoading:function(){this.setData({showLoading:!1})},onUpdateNavbarHeight:function(e){var t=e.detail,a=t.statusBarHeight,n=void 0===a?88:a,r=t.navBarHeight,o=void 0===r?88:r;this.setData({navbarHeight:n+o})},onNavBack:function(){var e=this;return a(t.default.mark((function a(){return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.default.showLoading();try{n.default.hideLoading(),o.default.Platform.navigateBack()}catch(t){e.setData(t),n.default.hideLoading()}case 2:case"end":return t.stop()}}),a)})))()},renderNavbackBtn:function(){var e=getCurrentPages()||[];this.setData({navBackVisible:e.length>1})},initCities:function(){var e=this;return a(t.default.mark((function a(){return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.default.getCities();case 2:e.setData({cities:r.default.getCityPickerCoulumns()});case 3:case"end":return t.stop()}}),a)})))()},initData:function(){var e=arguments,n=this;return a(t.default.mark((function a(){var i,s,u,c,d,f,l,h;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.length>0&&void 0!==e[0]?e[0]:{},t.next=3,r.default.getPhone();case 3:return s=t.sent,t.next=6,r.default.checkLeadStatus();case 6:if(!(u=t.sent)){t.next=11;break}return o.default.Platform.showToast({title:"您已经领取过奖品啦，正在为您跳转",icon:"none",duration:1e3}),setTimeout((function(){o.default.Platform.redirectTo({url:"../present/index?shopId=".concat(u)})}),1e3),t.abrupt("return");case 11:return n.setData({phone:s}),t.next=14,r.default.fetchShops(i.code,i.name);case 14:if(c=t.sent){t.next=19;break}n.setData({noLocAuth:!0,city:"切换城市"}),t.next=42;break;case 19:if(0!==c.length){t.next=41;break}return t.next=22,r.default.getNearbyCity();case 22:if(t.t0=t.sent,t.t0){t.next=25;break}t.t0={};case 25:return d=t.t0,t.next=28,r.default.fetchShops(d.cityCode,d.cityName);case 28:if(!((f=t.sent)&&f.length>0)){t.next=38;break}return setTimeout((function(){n.setData({cityName:r.default.getCityName(),shops:f,selectedShopId:f[0].shopId,dataReady:!0,noLocAuth:!1})}),1e3),t.next=33,r.default.getRecommendBrand();case 33:l=t.sent,h=l.brandName,o.default.Platform.showToast({title:"您所在的城市没有".concat(h,"的门店，正在为您定位到相关城市"),icon:"none",duration:1e3}),t.next=39;break;case 38:n.setData({cityName:r.default.getCityName(),shops:[],dataReady:!0,noLocAuth:!1});case 39:t.next=42;break;case 41:n.setData({cityName:r.default.getCityName(),shops:c,selectedShopId:c[0].shopId,dataReady:!0,noLocAuth:!1});case 42:case"end":return t.stop()}}),a)})))()},onShopSelected:function(e){var t=e.currentTarget.dataset.id;this.setData({selectedShopId:t})},onMakePhoneCall:function(){o.default.Platform.makePhoneCall({phoneNumber:"021-65235085"})},onPresentGet:function(){var e=this;return a(t.default.mark((function a(){var n,i,s,u,c;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.data.phone){t.next=3;break}return o.default.Platform.showToast({title:"请授权您的手机号",icon:"none"}),t.abrupt("return");case 3:return n=e.data.shops.find((function(t){return t.shopId===e.data.selectedShopId})),i=n.shopId,s=n.shopName,t.next=7,r.default.checkLeadCount();case 7:return u=t.sent,t.next=10,r.default.resertention({shopId:i,shopName:s});case 10:"repeat"===(c=t.sent)?(o.default.Platform.showToast({title:"您已经领取过奖品啦，正在为您跳转",icon:"none",duration:1e3}),setTimeout((function(){o.default.Platform.redirectTo({url:"../present/index?shopId=".concat(i)})}),1e3)):c?(o.default.Platform.showToast({title:u?"领取成功":"当前活动太火爆啦！奖品有限，先到先得",icon:"none",duration:1e3}),setTimeout((function(){o.default.Platform.redirectTo({url:"../present/index?shopId=".concat(i)})}),1e3)):o.default.Platform.showToast({title:"领取失败，请稍后再试",icon:"none"});case 12:case"end":return t.stop()}}),a)})))()},onGoIM:function(e){var n=this;return a(t.default.mark((function a(){var i,s,u,c,d,f,l,h,p,m,g,v,x,I,k,b;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.currentTarget.dataset.id,s=n.data.shops.find((function(e){return e.shopId===i})),u=s.tenantId,c=s.tenantName,d=s.shopId,f="XingtuLive",t.next=6,r.default.getRecommendBrand();case 6:return l=t.sent,h=l.seriesId,t.next=10,r.default.getFollowSalesInfo({tenantId:u});case 10:p=t.sent,m=p.userId,g=p.userName,v=p.openUserId,x={salesId:m,salesName:g,tenantId:u,tenantName:c,salesOpenUserId:v,shopId:d,from:f,seriesId:h},I=Object.keys(x),k=I.map((function(e){return"".concat(e,"=").concat(x[e])})),b="/modules/aggreim/pages/im/index?".concat(k.join("&")),o.default.Platform.navigateTo({url:b});case 17:case"end":return t.stop()}}),a)})))()},onLocAuthClick:function(){var e=this;o.default.Platform.openSetting({success:function(){e.initData()},fail:function(){}})},onCityColumnChange:function(e){var t=e.detail,a=t.column,n=t.value;if(0===a){var o=this.data.cities[a][n].name;this.setData({cities:r.default.getCityPickerCoulumns(o)})}},onCitySelected:function(t){var a=t.detail.value,n=e(a,2)[1];try{this.initData(this.data.cities[1][n])}catch(t){o.default.Platform.showToast({title:"选择了无效城市",icon:"none"})}},onPhoneAuthorized:function(e){var n=this;return a(t.default.mark((function a(){var o,i,s;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.detail.detail,i=o.encryptedData,s=o.iv,t.next=3,r.default.bindPhone({encryptedPhoneData:i,phoneIV:s});case 3:return t.t0=n,t.next=6,r.default.getPhone();case 6:t.t1=t.sent,t.t2={phone:t.t1},t.t3=function(){n.onPresentGet()},t.t0.setData.call(t.t0,t.t2,t.t3);case 10:case"end":return t.stop()}}),a)})))()},onNavigation:function(e){return a(t.default.mark((function a(){var n,r,o;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.currentTarget.dataset.shop,r=n.latitude,o=n.longitude,wx.openLocation({latitude:Number(r),longitude:Number(o),scale:18});case 3:case"end":return t.stop()}}),a)})))()}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.js'});require("miniprogram_npm/@tmsfe/tms-ui/checkin/components/scene-shop/index.js");