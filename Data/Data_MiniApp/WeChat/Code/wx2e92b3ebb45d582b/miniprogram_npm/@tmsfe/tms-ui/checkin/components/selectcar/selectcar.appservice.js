$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'status']],[1,0]])
Z([3,'select-car'])
Z([[2,'>'],[[6],[[7],[3,'userDynamicData']],[3,'userSelectedPrizeId']],[1,0]])
Z([3,'prize-selector'])
Z([3,'我的奖品'])
Z([[2,'>'],[[6],[[7],[3,'mainPrizeList']],[3,'length']],[1,1]])
Z(z[3])
Z([[2,'?:'],[[2,'>'],[[6],[[7],[3,'mainPrizeList']],[3,'length']],[1,1]],[1,'想要哪个震撼福利？选一个吧'],[1,'直播大奖']])
Z([[7],[3,'mainPrizeList']])
Z([3,'index'])
Z([3,'onPrizeTypeClick'])
Z([3,'clear-button-style'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[7],[3,'index']])
Z([3,'flex: 1; padding-left: 16rpx;'])
Z(z[5])
Z([3,'24'])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'selectedId']],[[6],[[7],[3,'item']],[3,'id']]],[1,'选择我'],[1,'已选择']])
Z([3,'232'])
Z(z[5])
Z([[2,'!=='],[[7],[3,'selectedId']],[[6],[[7],[3,'item']],[3,'id']]])
Z([[2,'==='],[[7],[3,'status']],[1,1]])
Z([3,'#fff'])
Z([3,'48'])
Z([3,'准备开奖'])
Z([[2,'=='],[[7],[3,'status']],[1,0]])
Z([3,'onReceive'])
Z([[6],[[7],[3,'userDynamicData']],[3,'isSignIn']])
Z([[7],[3,'openType']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
var t9G=_v()
_(r,t9G)
if(_oz(z,0,e,s,gg)){t9G.wxVkey=1
var bAH=_n('view')
_rz(z,bAH,'class',1,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,2,e,s,gg)){oBH.wxVkey=1
var xCH=_n('view')
_rz(z,xCH,'class',3,e,s,gg)
var fEH=_mz(z,'common-title',['noMarginTop',-1,'title',4],[],e,s,gg)
_(xCH,fEH)
var oDH=_v()
_(xCH,oDH)
if(_oz(z,5,e,s,gg)){oDH.wxVkey=1
}
oDH.wxXCkey=1
_(oBH,xCH)
}
else{oBH.wxVkey=2
var cFH=_n('view')
_rz(z,cFH,'class',6,e,s,gg)
var hGH=_mz(z,'common-title',['noMarginTop',-1,'title',7],[],e,s,gg)
_(cFH,hGH)
var oHH=_v()
_(cFH,oHH)
var cIH=function(lKH,oJH,aLH,gg){
var eNH=_mz(z,'button',['bind:tap',10,'class',1,'data-id',2,'data-index',3,'style',4],[],lKH,oJH,gg)
var bOH=_v()
_(eNH,bOH)
if(_oz(z,15,lKH,oJH,gg)){bOH.wxVkey=1
var oRH=_mz(z,'c-btn',['fontSize',16,'title',1,'width',2],[],lKH,oJH,gg)
_(bOH,oRH)
}
var oPH=_v()
_(eNH,oPH)
if(_oz(z,19,lKH,oJH,gg)){oPH.wxVkey=1
}
var xQH=_v()
_(eNH,xQH)
if(_oz(z,20,lKH,oJH,gg)){xQH.wxVkey=1
}
bOH.wxXCkey=1
bOH.wxXCkey=3
oPH.wxXCkey=1
xQH.wxXCkey=1
_(aLH,eNH)
return aLH
}
oHH.wxXCkey=4
_2z(z,8,cIH,e,s,gg,oHH,'item','index','index')
_(oBH,cFH)
}
oBH.wxXCkey=1
oBH.wxXCkey=3
oBH.wxXCkey=3
_(t9G,bAH)
}
else if(_oz(z,21,e,s,gg)){t9G.wxVkey=2
var fSH=_mz(z,'common-title',['color',22,'fontSize',1,'title',2],[],e,s,gg)
_(t9G,fSH)
}
var e0G=_v()
_(r,e0G)
if(_oz(z,25,e,s,gg)){e0G.wxVkey=1
var cTH=_mz(z,'user-profile',['bind:recive',26,'disable',1,'openType',2],[],e,s,gg)
_(e0G,cTH)
}
t9G.wxXCkey=1
t9G.wxXCkey=3
t9G.wxXCkey=3
e0G.wxXCkey=1
e0G.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.wxml'] = [$gwx_XC_20, './miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.wxml'] = $gwx_XC_20( './miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.js";define("miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=u(require("../../../../../../@babel/runtime/regenerator")),t=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),r=u(require("../../common/Checkin")),a=u(require("./Entity")),i=u(require("../../common/Report")),n=require("../../common/User"),s=u(require("../../common/Subscribe"));function u(e){return e&&e.__esModule?e:{default:e}}Component({properties:{status:Number,endTime:{type:Number,value:0},mainPrizeList:{type:Array,value:[]},userDynamicData:{type:Object,value:{}},promotionDynamicData:{type:Object,value:{}},promotionCode:{type:String,value:""},promotionName:{type:String,value:""},selectedIndex:{type:Number,value:0},roomId:{type:String,value:""}},data:{tag:["A","B","C","D","E","F"],imageCDN:r.default.imageCDN,subed:!1,authorizeUserInfo:!1,selectedId:0,selectionDescription:"",openType:"recive"},observers:{userDynamicData:function(e){var t=e.userSelectedPrizeId;if(t){var r=this.data.mainPrizeList.findIndex((function(e){return e.id===t}));this.setData({selectedIndex:r})}},mainPrizeList:function(r){var a=this;return t(e.default.mark((function t(){var i,n;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&r.length>0&&a.data.userDynamicData&&(i=a.data.userDynamicData.userSelectedPrizeId,n=i||r[0].id,a.setData({selectedId:n,selectionDescription:a.getDescription(n,r)}));case 1:case"end":return e.stop()}}),t)})))()},selectedIndex:function(e){if(e<this.data.mainPrizeList.length){var t="recive";t=this.data.userDynamicData.userSelectedPrizeId?"recive":e>=1?"phone":"recive";var r=this.data.mainPrizeList[e].id;this.setData({selectedId:r,selectionDescription:this.getDescription(r),openType:t})}}},lifetimes:{attached:function(){s.default.fetchTemplates(),this.renderTime(),this.renderSubscribeStatus()}},methods:{renderTime:function(){var e=this.data.endTime,t=new Date(e),a=r.default.prefixZero(t.getMonth()+1),i=r.default.prefixZero(t.getDate()),n=r.default.prefixZero(t.getHours()),s=r.default.prefixZero(t.getMinutes());this.setData({endMonth:a,endDay:i,endHours:n,endMinute:s})},onPrizeTypeClick:function(r){var a=this;return t(e.default.mark((function t(){var i;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.currentTarget.dataset.index,a.setData({selectedIndex:i});case 2:case"end":return e.stop()}}),t)})))()},onReceive:function(e){var t=e.detail,r=t.mobile,a=t.userInfo,i=void 0===a?{}:a,n=this.data.selectedId;this.triggerEvent("next",{mobile:r,userInfo:i,prizeId:n})},onSubscribeLiving:function(){var e=this,t=this.data.roomId;wx.redirectTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t),success:function(){setTimeout((function(){e.setData({readyRender:!0})}),1e3)}})},doSubscribe:function(){var s=this;return t(e.default.mark((function t(){var u,o,d,c,f,l;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.default.showLoading("订阅中..."),e.next=4,(0,n.getOpenId)();case 4:return u=e.sent,o=s.data.promotionCode,e.next=8,a.default.subscribe({openId:u,promotionCode:o,messageTypes:"2"});case 8:r.default.hideLoading(),r.default.showToast("订阅成功"),(0,i.default)("AH005"),s.updateSubscribeStatus(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),r.default.hideLoading(),d=e.t0||{},c=d.errCode,f=d.errMsg,l=void 0===f?"订阅失败, 请稍后重试":f,1144===c?(r.default.showToast("订阅成功"),(0,i.default)("AH005"),s.updateSubscribeStatus()):r.default.showToast(l,"none");case 19:case"end":return e.stop()}}),t,null,[[0,14]])})))()},renderSubscribeStatus:function(){var e=r.default.getSubscribeDrawStatus();this.setData({subed:e})},updateSubscribeStatus:function(){this.setData({subed:!0}),r.default.setSubscribeDrawStatus(!0)},getDescription:function(e,t){return t?t.find((function(t){return t.id===e})).name:this.data.mainPrizeList.find((function(t){return t.id===e})).name}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.js'});require("miniprogram_npm/@tmsfe/tms-ui/checkin/components/selectcar/selectcar.js");