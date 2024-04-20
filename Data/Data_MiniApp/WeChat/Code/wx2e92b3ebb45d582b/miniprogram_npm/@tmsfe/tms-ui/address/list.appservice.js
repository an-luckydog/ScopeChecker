$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'address-list-outer'])
Z([[7],[3,'keyword']])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z([3,'onMapRegionChange'])
Z([3,'search_map'])
Z([3,'map'])
Z([[7],[3,'latitude']])
Z([3,'2'])
Z([[7],[3,'longitude']])
Z([[7],[3,'showMarkers']])
Z([3,'15'])
Z([3,'true'])
Z([3,'22DBZ-EROC4-CJDUN-DHG66-CJKAF-5EBL6'])
Z([[2,'&&'],[[7],[3,'userRealLocation']],[[6],[[7],[3,'userRealLocation']],[3,'latitude']]])
Z([[6],[[7],[3,'wxs']],[3,'touchEnd']])
Z([[6],[[7],[3,'wxs']],[3,'touchMove']])
Z([[6],[[7],[3,'wxs']],[3,'touchStart']])
Z([a,[3,'site '],[[2,'?:'],[[7],[3,'moveTop']],[[7],[3,'top']],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'moveBtm']],[[7],[3,'btm']],[1,'']]])
Z(z[11])
Z([[7],[3,'lookList']])
Z([3,'updateList'])
Z([3,'list'])
Z(z[11])
Z([[7],[3,'sugs']])
Z([3,'index'])
Z(z[23])
Z([[2,'&&'],[[7],[3,'sugsMore']],[[2,'>'],[[6],[[7],[3,'sugs']],[3,'length']],[1,0]]])
Z([[7],[3,'commuteAddr']])
Z([3,'comp-history'])
Z([3,'display: none;'])
Z([[7],[3,'historyAddr']])
Z([3,'hid'])
Z([3,'onHistoryTapItem'])
Z([3,'item'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'hint']])
Z(z[33])
Z(z[23])
Z(z[24])
Z([3,'position: relative;'])
Z([3,'onAddressTapItem'])
Z(z[33])
Z(z[34])
Z(z[35])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'sub']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'sub']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'<='],[[6],[[7],[3,'sugs']],[3,'length']],[1,0]],[[2,'<='],[[6],[[7],[3,'historyAddr']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/address/list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,1,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,2,e,s,gg)){bUB.wxVkey=1
var oVB=_mz(z,'map',['bindregionchange',3,'class',1,'id',2,'latitude',3,'layerStyle',4,'longitude',5,'markers',6,'scale',7,'showLocation',8,'subkey',9],[],e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,13,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
_(bUB,oVB)
var oXB=_mz(z,'view',['bindtouchend',14,'bindtouchmove',1,'bindtouchstart',2,'class',3,'scrollY',4],[],e,s,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,19,e,s,gg)){fYB.wxVkey=1
var cZB=_mz(z,'scroll-view',['bindscrolltolower',20,'class',1,'scrollY',2],[],e,s,gg)
var o2B=_v()
_(cZB,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_v()
_(a6B,e8B)
if(_oz(z,25,l5B,o4B,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
return a6B
}
o2B.wxXCkey=2
_2z(z,23,c3B,e,s,gg,o2B,'item','index','index')
var h1B=_v()
_(cZB,h1B)
if(_oz(z,26,e,s,gg)){h1B.wxVkey=1
}
h1B.wxXCkey=1
_(fYB,cZB)
}
fYB.wxXCkey=1
_(bUB,oXB)
}
else{bUB.wxVkey=2
var b9B=_v()
_(bUB,b9B)
if(_oz(z,27,e,s,gg)){b9B.wxVkey=1
}
var xAC=_mz(z,'comp-history',['id',28,'style',1],[],e,s,gg)
_(bUB,xAC)
var oBC=_v()
_(bUB,oBC)
var fCC=function(hEC,cDC,oFC,gg){
var oHC=_mz(z,'view',['bind:tap',32,'class',1,'data-index',2],[],hEC,cDC,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,35,hEC,cDC,gg)){lIC.wxVkey=1
}
lIC.wxXCkey=1
_(oFC,oHC)
return oFC
}
oBC.wxXCkey=2
_2z(z,30,fCC,e,s,gg,oBC,'item','index','hid')
var aJC=_v()
_(bUB,aJC)
var tKC=function(bMC,eLC,oNC,gg){
var oPC=_n('view')
_rz(z,oPC,'style',39,bMC,eLC,gg)
var cRC=_mz(z,'view',['bind:tap',40,'class',1,'data-index',2],[],bMC,eLC,gg)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,43,bMC,eLC,gg)){hSC.wxVkey=1
}
hSC.wxXCkey=1
_(oPC,cRC)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,44,bMC,eLC,gg)){fQC.wxVkey=1
}
fQC.wxXCkey=1
_(oNC,oPC)
return oNC
}
aJC.wxXCkey=2
_2z(z,37,tKC,e,s,gg,aJC,'item','index','index')
var o0B=_v()
_(bUB,o0B)
if(_oz(z,45,e,s,gg)){o0B.wxVkey=1
}
b9B.wxXCkey=1
o0B.wxXCkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
bUB.wxXCkey=3
_(r,tSB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/address/list.wxml'] = [$gwx_XC_1, './miniprogram_npm/@tmsfe/tms-ui/address/list.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/address/list.wxml'] = $gwx_XC_1( './miniprogram_npm/@tmsfe/tms-ui/address/list.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/address/list";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/address/list.js";define("miniprogram_npm/@tmsfe/tms-ui/address/list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=(t=require("../../../../@babel/runtime/regenerator"))&&t.__esModule?t:{default:t},a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../../../@babel/runtime/helpers/objectSpread2"),i=require("../../../../@babel/runtime/helpers/slicedToArray"),r=require("../../../../@babel/runtime/helpers/typeof");var s=getApp({allowDefault:!0}).tms,o=s.createRequest();Component({properties:{options:{type:Object,value:{}},eventChannel:{type:Object,value:null},markers:{type:Array,value:[]}},data:{cityName:"",latitude:0,longitude:0,userRealLocation:{},type:0,title:"",keyword:"",pageSize:10,pageIndex:1,commuteAddr:null,historyAddr:null,sugs:[],showMarkers:[],touchS:"",touchE:"",moveTop:!1,moveBtm:!1,top:"",btm:"",lookList:!0},observers:{options:function(t){"object"===r(t)&&Object.keys(t).length>0&&this.updateOptions(t)},markers:function(t){var e=this.data.showMarkers.filter((function(t){return"center"===t.iconType})),a=i(e,1)[0];a&&t.unshift(a),this.setData({showMarkers:t}),this.setIncludeTimes<=0&&this.setMapIncludes(t)}},pageLifetimes:{show:function(){this.pendingCommuteEdit&&(this.pendingCommuteEdit=!1,this.getCommute())}},lifetimes:{attached:function(){this.mapCtx=wx.createMapContext("map",this),this.setIncludeTimes=0}},methods:{updateOptions:function(t){var e,a=this,i=t;t.latitude&&0!==Number(t.latitude)&&"当前位置"!==t.title||(i={cityName:"北京市",latitude:39.906547,longitude:116.397627,type:1});var r=(null===(e=i)||void 0===e?void 0:e.title)||"";i.type=Number(i.type),this.setData(n({keyword:r},i),(function(){a.fetchSuggestion(),a.getHistory(),a.getCommute()}))},fetchSuggestion:function(){var t=this;return a(e.default.mark((function a(){var n;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchFromLBS();case 2:n=e.sent,t.setData({sugs:n});case 4:case"end":return e.stop()}}),a)})))()},fetchFromLBS:function(){var t=this;return new Promise(function(){var n=a(e.default.mark((function a(n,i){var r,o,u,c,d,l,p,h,m,f,g;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,o=r.keyword,u=r.title,c=r.cityName,d=r.type,l=o||u||c,p=c||"全国","https://apis.map.qq.com","/ws/place/v1/suggestion",h="".concat("https://apis.map.qq.com").concat("/ws/place/v1/suggestion","?keyword=").concat(l,"&region=").concat(p),e.prev=5,e.next=8,s.getLocationManager().getLocation(!1);case 8:m=e.sent,f=m.latitude,g=m.longitude,h+="&location=".concat(f,",").concat(g),t.setData({userRealLocation:{latitude:f,longitude:g}}),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(5);case 16:h+="&policy=".concat(["10","11"][d-1],"&region_fix=0&get_subpois=1"),h+="&key=XFRBZ-Z4EKS-GXNOO-6H3GD-ZQTFJ-NVFCQ",wx.request({url:h,fail:i,success:function(e){var a=null==e?void 0:e.data,i=a.status,r=a.data,s=a.sub_pois;n(t.formatSugList(i,r,s))}});case 19:case"end":return e.stop()}}),a,null,[[5,14]])})));return function(t,e){return n.apply(this,arguments)}}())},formatSugList:function(t,e,a){var i=this,r=[];if(0!==t)return r;var s=function(t){var e=t.id,a=t.title,n=t.address,i=t.city,r=t.location;return{id:e,title:a,address:n,city:i,latitude:r.lat,longitude:r.lng}};return e.sort((function(t,e){return t._distance-e._distance})).forEach((function(t){var e=a.filter((function(e){return e.parent_id===t.id})).map(s);r.push(n({sub:e,segments:[t.title],dist:i.formatDistance(t._distance)},s(t)))})),r},formatDistance:function(t){if(isNaN(t))return"";if(t<1e3)return"".concat(t,"m");var e=(t/1e3).toFixed(1).replace(/\.0$/,"");return"".concat(e,"km")},setMapIncludes:function(t){var e;"function"==typeof(null===(e=this.mapCtx)||void 0===e?void 0:e.includePoints)&&(this.mapCtx.includePoints({points:t,padding:[60,30,60,30]}),this.setIncludeTimes+=1)},handleCurTap:function(){this.setData(n({},this.data.userRealLocation))},getHistory:function(){if(2===this.data.type&&""===this.data.keyword){var t=this.selectComponent("#comp-history"),e=t.getCachedHistory(t.keyGenerater());this.setData({historyAddr:e})}else this.setData({historyAddr:null})},onHistoryTapItem:function(t){var e=t.currentTarget.dataset.index,a=this.data,n=a.type,i=a.historyAddr[e]||{},r=i.title,s={city:i.city,cityCode:i.adcode,title:r,address:i.address,latitude:i.latitude,longitude:i.longitude};this.data.eventChannel&&this.data.eventChannel.emit("onPlaceChose",{type:n,selectAddress:s}),this.onBack()},getCommute:function(){var t=this;return a(e.default.mark((function a(){var n,i,r,s,u,c,d;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2===t.data.type){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,o.get("commute/setting");case 5:n=e.sent,i=null==n?void 0:n.resData,r=i.companyExt,s=i.homeExt,c=(u=function(t){return t&&JSON.parse(t)||{}})(s),d=u(r),t.setData({commuteAddr:[c,d]}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t.setData({commuteAddr:[]});case 16:case"end":return e.stop()}}),a,null,[[2,13]])})))()},onTapCommuteAddr:function(t){var e=t.currentTarget.dataset.index,a=this.data,n=a.type,i=a.commuteAddr[e];if(i&&i.name){var r={city:i.city,cityCode:i.cityCode,title:i.name,address:i.address,latitude:i.latitude,longitude:i.longitude};this.data.eventChannel&&this.data.eventChannel.emit("onPlaceChose",{type:n,selectAddress:r}),this.onBack()}else this.goCommuteEdit()},goCommuteEdit:function(){this.pendingCommuteEdit=!0,wx.navigateTo({url:"/modules/me/pages/commute/address?from=addresslistcomp"})},getSiteTop:function(t){var e=t.touchS,a=t.touchE;console.log(":::",{touchS:e,touchE:a})},onAddressTapItem:function(t){var e=t.currentTarget.dataset,a=e.index,n=e.subindex,i=this.data,r=i.type,s=i.sugs[a]||{},o=s.title,u=s.city,c=s.adcode,d=s.address,l=s.latitude,p=s.longitude,h=s.sub,m={city:u,cityCode:c,title:o,address:d,latitude:l,longitude:p};if(void 0!==n){var f=h[n],g=f.title,v=f.address,y=f.latitude,C=f.longitude;m.title+="-".concat(g),m.address=v,m.latitude=y,m.longitude=C}this.data.eventChannel&&this.data.eventChannel.emit("onPlaceChose",{type:r,selectAddress:m}),this.onBack()},onMapRegionChange:function(t){var n,i=this,r=t.type,s=t.causedBy;"end"!==r||["drag","scale"].indexOf(s)<0||this.mapCtx.getCenterLocation({complete:(n=a(e.default.mark((function t(a){var n,r,s,u,c,d,l,p,h,m;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=(n=a||{}).latitude,s=n.longitude,!r||!s){t.next=16;break}return i.setCenterMarker({latitude:r,longitude:s}),i.triggerEvent("mapCenterChange",{latitude:r,longitude:s,type:i.data.type}),t.prev=4,t.next=7,o.post("basic/lbs/decode",{lat:r,lng:s});case 7:u=t.sent,c=u.resData,d=null==c?void 0:c.result,l=d.address_reference,p=l.landmark_l1,h=l.landmark_l2,m=l.town.title,i.setData({keyword:(null==p?void 0:p.title)||(null==h?void 0:h.title)||m},(function(){i.fetchSuggestion()})),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(4);case 16:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t){return n.apply(this,arguments)})})},setCenterMarker:function(t){var e,a={latitude:t.latitude,longitude:t.longitude,width:31,height:43,iconPath:"https://static.img.tai.qq.com/mp/driving/icons/icon-map-center.png",iconType:"center"},n=(null===(e=this.data.showMarkers)||void 0===e?void 0:e.filter((function(t){return"center"!==t.iconType})))||[];n.unshift(a),this.setData({showMarkers:n})},onInput:function(t){var e=this,a=t.detail.value;this.setData({keyword:a},(function(){a&&e.fetchSuggestion()})),this.getHistory()},onClear:function(){this.setData({keyword:""})},onTapCancel:function(){this.onBack()},onBack:function(){wx.navigateBack()}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/address/list.js'});require("miniprogram_npm/@tmsfe/tms-ui/address/list.js");