$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isLogin']])
Z([[2,'=='],[[6],[[7],[3,'cardList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'travelPlanList']],[3,'length']],[1,0]])
Z([3,'showScheduleLayer'])
Z([3,'custom-button-for-compt'])
Z([3,'only_travel_plan'])
Z([[6],[[7],[3,'travelPlanList']],[1,0]])
Z(z[3])
Z(z[4])
Z([[2,'==='],[[6],[[7],[3,'travelPlanList']],[3,'length']],[1,0]])
Z([3,'scroll_login'])
Z([[7],[3,'positionId']])
Z([[7],[3,'cardList']])
Z([3,'smartTripId'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,0]],[[7],[3,'activity']],[1,null]])
Z([3,'deleteCard'])
Z([3,'touchCancel'])
Z([3,'touchEnd'])
Z([3,'touchMove'])
Z([3,'touchStart'])
Z([[7],[3,'item']])
Z([[2,'>'],[[6],[[7],[3,'travelPlanList']],[3,'length']],[1,0]])
Z(z[6])
Z(z[3])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./pages/schedule/index/index.wxml','addScheduleLayer.wxml','./noLogin/noLogin.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var oTK=_n('perinfo-protect-float')
_(r,oTK)
var bSK=_v()
_(r,bSK)
if(_oz(z,0,e,s,gg)){bSK.wxVkey=1
var xUK=e_[x[0]].j
var oVK=_v()
_(bSK,oVK)
if(_oz(z,1,e,s,gg)){oVK.wxVkey=1
var fWK=_v()
_(oVK,fWK)
if(_oz(z,2,e,s,gg)){fWK.wxVkey=1
var cXK=_mz(z,'formid-button',['catchtap',3,'formidButtonClass',1],[],e,s,gg)
_(fWK,cXK)
}
else{fWK.wxVkey=2
var hYK=_n('view')
_rz(z,hYK,'class',5,e,s,gg)
var oZK=_n('travel-plan-view')
_rz(z,oZK,'itemData',6,e,s,gg)
_(hYK,oZK)
var c1K=_mz(z,'formid-button',['catchtap',7,'formidButtonClass',1],[],e,s,gg)
_(hYK,c1K)
_(fWK,hYK)
}
fWK.wxXCkey=1
fWK.wxXCkey=3
fWK.wxXCkey=3
}
else{oVK.wxVkey=2
var o2K=_v()
_(oVK,o2K)
if(_oz(z,9,e,s,gg)){o2K.wxVkey=1
}
var l3K=_mz(z,'scroll-view',['scrollY',-1,'class',10,'scrollIntoView',1],[],e,s,gg)
var t5K=_v()
_(l3K,t5K)
var e6K=function(o8K,b7K,x9K,gg){
var fAL=_mz(z,'card-item',['activity',14,'bindCardDelete',1,'bindCardTouchCancel',2,'bindCardTouchEnd',3,'bindCardTouchMove',4,'bindCardTouchStart',5,'cardData',6],[],o8K,b7K,gg)
_(x9K,fAL)
return x9K
}
t5K.wxXCkey=4
_2z(z,12,e6K,e,s,gg,t5K,'item','index','smartTripId')
var a4K=_v()
_(l3K,a4K)
if(_oz(z,21,e,s,gg)){a4K.wxVkey=1
var cBL=_n('travel-plan-view')
_rz(z,cBL,'itemData',22,e,s,gg)
_(a4K,cBL)
}
else{a4K.wxVkey=2
}
a4K.wxXCkey=1
a4K.wxXCkey=3
_(oVK,l3K)
var hCL=_mz(z,'formid-button',['catchtap',23,'formidButtonClass',1],[],e,s,gg)
_(oVK,hCL)
o2K.wxXCkey=1
}
_ic(x[1],e_,x[0],e,s,bSK,gg);
oVK.wxXCkey=1
oVK.wxXCkey=3
oVK.wxXCkey=3
xUK.pop()
}
else{bSK.wxVkey=2
var oDL=e_[x[0]].j
_ic(x[2],e_,x[0],e,s,bSK,gg);
oDL.pop()
}
bSK.wxXCkey=1
bSK.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/schedule/index/index.wxml'] = [$gwx_XC_25, './pages/schedule/index/index.wxml'];else __wxAppCode__['pages/schedule/index/index.wxml'] = $gwx_XC_25( './pages/schedule/index/index.wxml' );
	;__wxRoute = "pages/schedule/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/schedule/index/index.js";define("pages/schedule/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),i=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../cwx/cwx.js"),e=t(require("../utils/CtsConstant.js")),n=require("../utils/util.js"),c=require("../cardEdit.js"),o=require("../utils/actionCode.js");a.cwx.config.init();(0,a.CPage)({pageId:"10650009139",locationInfo:{cityID:0},lastAuth:"",needPagecode:!1,isLoadingScheduleList:!1,isLoadingTravelInfoList:!1,checkPerformance:!0,data:{isLoading:!0,cardList:[],activity:null,isLogin:!0,travelPlanList:[]},onLoad:function(t){wx.showShareMenu({withShareTicket:!0}),this.lastAuth=a.cwx.user.auth,this.startLocation()},pageDisplayCode:function(){wx.j("PGR"),this.data.isLogin?0==this.data.cardList.length?this.ubtTrace(102324,{actionCode:"schedule_empty_trip",actionType:"display"}):this.ubtTrace(102324,{actionCode:"schedule",actionType:"display"}):this.ubtTrace(102324,{actionCode:"unlogin",actionType:"display"})},onShow:function(t){var i=this;a.cwx.user.checkLoginStatusFromServer((function(t){wx.j("A5q"),i.setData({isLogin:t})})),a.cwx.user.auth!=this.lastAuth?(this.lastAuth=a.cwx.user.auth,this.setData({cardList:[]}),this.needPagecode=!0,a.cwx.startPullDownRefresh()):this.needPagecode||this.pageDisplayCode()},startLocation:function(){wx.j("oFZ");var t=this;t.needPagecode=!0,a.cwx.locate.startGetCtripCity((function(i){if(wx.j("DPi"),!i.error){var e=i.data.CityEntities[0];e&&(t._saveLocationCity(e.cityName,i.data.CityLatitude,i.data.CityLongitude),t.locationInfo.cityID=e.CityID,t.locationInfo.latitude=i.data.CityLatitude,t.locationInfo.longitude=i.data.CityLongitude,a.cwx.schedule.locationInfo=t.locationInfo)}a.cwx.startPullDownRefresh()}),"schedule-wxlbs")},onPullDownRefresh:function(){a.cwx.user.isLogin()?(this.setData({isLoading:!0}),this.isLoadingScheduleList=!0,this.isLoadingTravelInfoList=!0,this.getScheduleList(),this.getTravelPlanInfo()):(this.needPagecode&&(this.pageDisplayCode(),this.needPagecode=!1),a.cwx.stopPullDownRefresh(),this.setData({isLoading:!1}))},checkNeedDismissLoading:function(){wx.j("TWH"),this.isLoadingScheduleList||this.isLoadingTravelInfoList||(a.cwx.stopPullDownRefresh(),this.setData({isLoading:!1}))},getScheduleList:function(){var t=this;wx.j("qNS"),a.cwx.schedule.districtIds="",(0,n.getTimelineService)().then((function(i){wx.j("LRk");var n=i.scheduleListSearch,c=i.getActivityInformationRequest;a.cwx.showLoading({title:"加载中",mask:!0}),n({cityId:t.locationInfo.cityID,callback:function(i,n){if(wx.j("oJV"),i)try{t.handleGroupSource(n.groupList);wx.getSystemInfoSync();var r=n.cardList;r.forEach((function(t,i){wx.j("anp"),t.index=i+1,t.count=r.length,e.default.IS_CHARTERED_PICK_DROP.includes(t.cardType)&&(t.isNewCarCard=!0),(t.selfDrivingCard||t.busCard||t.shipCard)&&(t.isNewCarCard=!0,t.carCard=t.selfDrivingCard||t.busCard||t.shipCard),t.bnbCard&&(t.hotelCard=t.bnbCard),(0,o.logExpose)((0,o.cardClickParameter)(t))})),t.needPagecode&&(t.data.cardList=r,t.pageDisplayCode(),t.needPagecode=!1),t.setData({cardList:r})}catch(i){t.setData({cardList:n.cardList})}c("").then((function(i){wx.j("35u"),i&&i.name&&i.jumpUrl&&(t.ubtTrace(102324,{actionCode:"o_schedule_marketing_display",actionType:"display"}),t.setData({activity:i}))})),a.cwx.hideLoading(),t.isLoadingScheduleList=!1,t.checkNeedDismissLoading()}})}))},getTravelPlanInfo:function(){var t=this;wx.j("R7u"),(0,n.getTimelineService)().then((function(i){wx.j("I5A"),(0,i.getTravelPlanInfo)({callback:function(i,a){var e;(wx.j("3SV"),i)&&t.setData({travelPlanList:null!==(e=a.travelPlanList)&&void 0!==e?e:[]});t.isLoadingTravelInfoList=!1,t.checkNeedDismissLoading()}})}))},handleGroupSource:function(t){if(wx.j("fYL"),t){var i="",e=[];t.forEach((function(t){wx.j("bw4"),-1===e.indexOf(t.districtId)&&(i&&(i+=","),i+=t.districtId,e.push(t.districtId))})),a.cwx.schedule.districtIds=i}},showScheduleLayer:function(){wx.j("9H3"),this.ubtTrace(102324,{actionCode:"schedule_addtrip",actionType:"click",page:this.data.cardList.length>0?"schedule":"schedule_empty_trip"}),this.setData({showAddScheduleLayer:!0}),this.containerAnimation||(this.containerAnimation=wx.createAnimation()),this.containerAnimation.translateY(0).step({duration:300}),this.backgrondAnimation||(this.backgrondAnimation=wx.createAnimation()),this.backgrondAnimation.backgroundColor("rgba(51, 51, 51,0.2)").step({duration:300}),this.setData({containerAnimation:this.containerAnimation.export(),backgrondAnimation:this.backgrondAnimation.export()})},doNothing:function(){},hideScheduleLayer:function(){wx.j("mSH"),this.ubtTrace(102324,{actionCode:"c_addtrip_back_click",actionType:"click"}),this.containerAnimation.translateY(440).step({duration:300}),this.backgrondAnimation.backgroundColor("rgba(51, 51, 51,0.0)").step({duration:300}),this.setData({containerAnimation:this.containerAnimation.export(),backgrondAnimation:this.backgrondAnimation.export()});var t=this;setTimeout((function(){wx.j("JMn"),t.setData({showAddScheduleLayer:!1})}),300)},showAddPage:function(t){wx.j("aUO");var i=t.currentTarget.dataset.biztype;"flight"==i?(this.ubtTrace(102324,{actionCode:"c_addtrip_switch_to_flight_tab",actionType:"click"}),a.cwx.navigateTo({url:"/pages/schedule/pages/cardAdd/flight/flight"})):"train"==i&&(this.ubtTrace(102324,{actionCode:"c_addtrip_switch_to_train_tab",actionType:"click"}),a.cwx.navigateTo({url:"/pages/schedule/pages/cardAdd/trainAdd/trainAdd"})),this.hideScheduleLayer()},onShareAppMessage:function(t){var i=this;if("button"===t.from){var a=t.target.dataset.sharemodel,e=a.actionCode;return this.ubtTrace(102325,{actionCode:e,actionType:"click"}),{title:a.title,path:a.path,imageUrl:a.imageUrl,success:function(t){wx.j("L05"),(0,n.shareSuccess)(t,i)}}}return{title:"懂你的行程管家，一个就够了",path:"/pages/schedule/index/index",imageUrl:"https://pages.ctrip.com/schedule/photo/sku_wxshare_itinerary.png",success:function(t){wx.j("1Bs"),(0,n.shareSuccess)(t,i)}}},_saveLocationCity:function(t,i,e){wx.j("HvH"),a.cwx.schedule.g_locationCity=t,a.cwx.schedule.latitude=i,a.cwx.schedule.longitude=e},touchStart:function(t){wx.j("Xhn");var i=t.detail.event,a=t.detail.card;a.touchStartX=i.touches[0].clientX,a.touchStartY=i.touches[0].clientY;var e=this.data.cardList.map((function(t){return wx.j("rTP"),a.smartTripId==t.smartTripId?(t.touchStartX=a.touchStartX,t.touchStartY=a.touchStartY):(t.marginLeft=60,t.marginRight=20,t.touchStartX=0,t.touchStartY=0),t}));this.setData({cardList:e})},touchMove:function(t){wx.j("gct");var i=t.detail.event,a=t.detail.card,e=i.touches[0].clientX,n=i.touches[0].clientY,c=e-a.touchStartX,o=n-a.touchStartY;c<0&&Math.abs(c)>Math.abs(o)?(c=Math.min(Math.abs(c),a.optionViewWidth/2),a.marginLeft=60-2*c,a.marginRight=20+2*c):(a.marginLeft=60,a.marginRight=20);var r=this.data.cardList.map((function(t){return wx.j("e4i"),a.smartTripId==t.smartTripId&&(t.marginLeft=a.marginLeft,t.marginRight=a.marginRight),t}));this.setData({cardList:r})},touchEnd:function(t){wx.j("4O1");var i=t.detail.event,a=t.detail.card,e=i.changedTouches[0].clientX-a.touchStartX;if(!(Math.abs(e)<5)){e<0&&Math.abs(e)>=80?(e=Math.min(Math.abs(e),a.optionViewWidth),a.marginLeft=60-a.optionViewWidth,a.marginRight=20+a.optionViewWidth):(a.marginLeft=60,a.marginRight=20);var n=this.data.cardList.map((function(t){return wx.j("dMw"),a.smartTripId==t.smartTripId&&(t.marginLeft=a.marginLeft,t.marginRight=a.marginRight,t.animation=a.animation),t}));this.setData({cardList:n})}},touchCancel:function(t){wx.j("261");var i=this.data.cardList.map((function(t){return wx.j("y9m"),t.marginLeft=60,t.marginRight=20,t.touchStartX=0,t.touchStartY=0,t}));this.setData({cardList:i})},deleteCard:function(t){wx.j("kQ8");var i=t.detail.card;(0,c.deleteCardAC)(i.cardType),1==i.cardSource?this._showDeleteDialog(i):this._deleteCard(i)},_deleteCard:function(t){wx.j("y1b"),a.cwx.showLoading({title:"提交中",mask:!0}),(0,o.logClick)(i(i({},(0,o.logParameter)(t)),{},{BH:"del",SC:"card"})),(0,n.getTimelineService)().then((function(i){wx.j("ED6"),(0,i.deleteCard)({smartTripId:t.smartTripId,locationCityId:a.cwx.schedule.smartTripId}).then((function(t){wx.j("Qf6"),a.cwx.hideLoading(),a.cwx.startPullDownRefresh({})})).catch((function(t){wx.j("qDN"),a.cwx.hideLoading(),wx.showToast({icon:"none",title:"删除未成功，请稍后再试"})}))}))},_showDeleteDialog:function(t){wx.j("97X");var i=this;wx.showModal({title:"",content:"卡片删除后将无法在行程中查看, 对应订单不会取消, 确认删除?",confirmText:"删除",confirmColor:"#1980FE",cancelColor:"#1980FE",success:function(a){wx.j("BWo"),a.confirm&&i._deleteCard(t)}})},login:function(){wx.j("fbA"),this.ubtTrace(102325,{actionCode:"c_log_in",actionType:"click"});var t=this;a.cwx.user.login({callback:function(i){wx.j("Q4s"),"0"===i.ReturnCode&&(t.setData({isLogin:!0}),a.cwx.startPullDownRefresh())}})}});
},{isPage:true,isComponent:true,currentFile:'pages/schedule/index/index.js'});require("pages/schedule/index/index.js");