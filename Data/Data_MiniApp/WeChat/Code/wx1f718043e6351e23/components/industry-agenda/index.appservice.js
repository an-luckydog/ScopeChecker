$gwx_XC_36=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];
function gz$gwx_XC_36_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'agendaList']],[3,'length']],[1,0]])
Z([[7],[3,'agendaList']])
Z([3,'index'])
Z([[9],[[9],[[8],'item',[[7],[3,'item']]],[[8],'index',[[7],[3,'index']]]],[[8],'useUin',[[7],[3,'useUin']]]])
Z([3,'listItem'])
Z(z[4])
Z([3,'goToDetail'])
Z([3,'list-item__wrapper'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([3,'list-item'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'tag']],[3,'length']],[1,0]])
Z([3,'label'])
Z([[6],[[7],[3,'item']],[3,'tag']])
Z(z[2])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'endTime']],[[6],[[7],[3,'item']],[3,'startTime']]])
Z([3,'list-item-desc'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'zbTime']],[[6],[[7],[3,'item']],[3,'endTime']]],[[6],[[7],[3,'item']],[3,'startTime']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
Z([[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,2]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,1]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,2]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]],[[2,'!='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,2]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]])
Z([3,'opearte-btns'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,1]]])
Z(z[20])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]],[[6],[[7],[3,'item']],[3,'endTime']]],[[6],[[7],[3,'item']],[3,'startTime']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]],[[2,'=='],[[6],[[7],[3,'item']],[3,'endTime']],[1,0]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'startTime']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_36=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_36=true;
var x=['./components/industry-agenda/index.wxml'];d_[x[0]]={}
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/industry-agenda/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',6,'class',1,'data-item',2,'data-key',3],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',10,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
var fE=_v()
_(oD,fE)
var cF=function(oH,hG,cI,gg){
var lK=_v()
_(cI,lK)
if(_oz(z,15,oH,hG,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
return cI
}
fE.wxXCkey=2
_2z(z,13,cF,e,s,gg,fE,'label','index','index')
}
var aL=_n('view')
_rz(z,aL,'class',16,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,17,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,18,e,s,gg)){eN.wxVkey=1
var oP=_v()
_(eN,oP)
if(_oz(z,19,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,20,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(eN,oR)
if(_oz(z,21,e,s,gg)){oR.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
}
var bO=_v()
_(aL,bO)
if(_oz(z,22,e,s,gg)){bO.wxVkey=1
var fS=_n('view')
_rz(z,fS,'class',23,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,24,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,25,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(fS,oV)
if(_oz(z,26,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(fS,cW)
if(_oz(z,27,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(fS,oX)
if(_oz(z,28,e,s,gg)){oX.wxVkey=1
}
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
_(bO,fS)
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
_(xC,aL)
oD.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
var o4J=_v()
_(r,o4J)
if(_oz(z,0,e,s,gg)){o4J.wxVkey=1
var f5J=_v()
_(o4J,f5J)
var c6J=function(o8J,h7J,c9J,gg){
var lAK=_v()
_(c9J,lAK)
var aBK=_oz(z,4,o8J,h7J,gg)
var tCK=_gd(x[0],aBK,e_,d_)
if(tCK){
var eDK=_1z(z,3,o8J,h7J,gg) || {}
var cur_globalf=gg.f
lAK.wxXCkey=3
tCK(eDK,eDK,lAK,gg)
gg.f=cur_globalf
}
else _w(aBK,x[0],1,122)
return c9J
}
f5J.wxXCkey=2
_2z(z,1,c6J,e,s,gg,f5J,'item','index','index')
}
o4J.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_36";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/industry-agenda/index.wxml'] = [$gwx_XC_36, './components/industry-agenda/index.wxml'];else __wxAppCode__['components/industry-agenda/index.wxml'] = $gwx_XC_36( './components/industry-agenda/index.wxml' );
	;__wxRoute = "components/industry-agenda/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/industry-agenda/index.js";define("components/industry-agenda/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/slicedToArray"),a=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),n=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../utils/phoneLogin.js"),r=getApp();Component({properties:{list:{type:Array,value:[],observer:function(){this.init()}},type:{type:String,value:[]},searchWords:{type:String,value:""},searchType:{type:String,value:""},isDetail:{type:Boolean,value:!1}},pageLifetimes:{show:function(){console.log("🚀 ~ file: index.js ~ line 35 ~ page show",this.data.list),0!==this.data.list.length&&this.init()}},data:{agendaList:[],useUin:wx.getStorageSync("useUin"),actionType:""},onShow:function(){this.data.actionType&&(this[this.data.actionType](),this.setData({actionType:""}))},methods:{init:function(){var i=this;return n(t().mark((function n(){var o,s,c,d,u,l,g,p,f,h;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((o=i.data.list)&&0!==o.length){t.next=3;break}return t.abrupt("return",i.setData({agendaList:[]}));case 3:s=[],c=a(o);try{for(c.s();!(d=c.n()).done;)u=d.value,s.push(u.id)}catch(t){c.e(t)}finally{c.f()}return l=JSON.parse(JSON.stringify(o)),t.next=9,Promise.all([r.API.getServeTime(),r.API.checkSignUpStatus({ids:s})]);case 9:g=t.sent,p=e(g,2),f=p[0],h=p[1],l.forEach((function(t){t.registStatus=1,t.startTime>f?t.status=1:t.endTime<f?t.status=3:t.status=2,t.zbTime=i.formatTime(t.startTime,t.endTime),h.includes(t.id)&&(t.registStatus=2)})),l.sort((function(t,e){var a=2==t.status?0:t.status,n=2==e.status?0:e.status;return a===n?t.startTime-e.startTime:a-n})),i.setData({agendaList:l});case 16:case"end":return t.stop()}}),n)})))()},formatTime:function(t,e){var a=r.tool.formatDateTime(new Date(1e3*t),"MM月dd日 hh:mm"),n=r.tool.formatDateTime(new Date(1e3*e),"MM月dd日 hh:mm"),i=a.split(" "),o=n.split(" ");return i[0]===o[0]?a+"-"+o[1]:a+"-"+n},goToDetail:function(t){var e=this;(0,i.goLogin)("goToDetail").then((function(a){if(a){console.log("activity/index goToDetail",t);var n=t.currentTarget.dataset.item,i=n.id,o=n.type,s=(n.live_url,n.registStatus,n.data_id),c=n.data_type,d=(n.tencent_vid,n.out_url,n.notJumpDetail);if(d&&1==+d)return;e.data.searchWords&&r.QD.event("SearchResultClick",{keywords:e.data.searchWords,is_recommendword:"hot"===e.data.searchType,is_historyword:"history"===e.data.searchType,result_tab_name:"活动",result_number:e.data.list.length,ContentID:i.toString(),rank_number:t.currentTarget.dataset.key+1}),"juhe"==e.data.type&&s&&(i=s),2==o?wx.navigateTo({url:"/pages/online/detail/index?id="+i}):(console.log("data_type",c),"news"==c?wx.navigateTo({url:"/pages/activity/news_detail/index?id="+i}):wx.navigateTo({url:"/pages/activity/act_detail/index?id="+i+"&type="+o})),e.data.isDetail&&e.triggerEvent("toDetail")}}))},jumpLive:function(t){var e=t.currentTarget.dataset.liveurl;console.log("page activity list jumpLive",e,t),wx.navigateTo({url:"/pages/common/webview/index?url="+e})},signUp:function(t){console.log("page activity list signUp",t)},_checkCanhui:function(){return 2==this.data.info.canhui_status},_changeActStatus:function(t,e){var a=this,n=this.data.info.campaignId;wx.showLoading({title:""}),r.API.refreshOrderStatus({campaignId:n,tag:t,actId:e}).then((function(e){wx.hideLoading(),console.log("_changeActStatus res",e),0==e.code&&(1==t?(a.setData({"info.signup_status":2}),wx.showToast({title:"报名成功",icon:"none"})):2==t&&(a.setData({"info.reserve_status":2}),wx.showToast({title:"预约成功",icon:"none"})))}))},_goActForm:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=this.data.info.siteId;t||(t=r.globalData.config.formTpl.reg),this._goForm(t,e,o,a,n,i)},_goForm:function(e,a,i){var r=arguments,o=this;return n(t().mark((function n(){var s,c,d,u,l,g,p;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=r.length>3&&void 0!==r[3]?r[3]:"",c=r.length>4?r[4]:void 0,d=r.length>5?r[5]:void 0,u=r.length>6?r[6]:void 0,l=r.length>7?r[7]:void 0,g=r.length>8?r[8]:void 0,console.log("mark 111",d,o.data.id),p="",p="des2023"===g?"/enroll/pages/enroll/guide/index?sendMsg=".concat(l,"&type=act&op_id=").concat(u,"&data_type=").concat(a,"&f_id=").concat(o.data.f_id,"&actId=").concat(c,"&data_id=").concat(i,"&tplId=").concat(e,"&r_url=").concat(s,"&actType=act_offline"):1==d?"/pages/form/index/index?sendMsg=".concat(l,"&type=act&op_id=").concat(u,"&data_type=").concat(a,"&f_id=").concat(o.data.f_id,"&actId=").concat(c,"&data_id=").concat(i,"&tplId=").concat(e,"&r_url=").concat(s,"&actType=act_offline"):"/pages/form/index/index?sendMsg=".concat(l,"&type=meet_reserve&op_id=").concat(u,"&data_type=").concat(a,"&f_id=").concat(o.data.f_id,"&actId=").concat(c,"&data_id=").concat(i,"&tplId=").concat(e,"&r_url=").concat(s,"&actType=act_online"),wx.navigateTo({url:p});case 10:case"end":return t.stop()}}),n)})))()},handleSignUp:function(e){var a=this;return n(t().mark((function o(){return t().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:(0,i.goLogin)("handleSignUp").then(function(){var i=n(t().mark((function n(i){var o,s,c;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=9;break}return o=e.currentTarget.dataset.item.id,s=e.currentTarget.dataset.item.registStatus,t.next=5,r.API.getActivityDetail(o);case 5:c=t.sent,console.log("page activity list handleSignUp getActivityDetail",c),a.setData({info:c.content.info}),2==s||1==s&&(a.waitStatusRefresh=function(){a.setData({"info.canhui_status":2,"info.signup_status":2})},a._goActForm(c.content.info.tpl_id,1,"",o,c.content.info.type));case 9:case"end":return t.stop()}}),n)})));return function(t){return i.apply(this,arguments)}}());case 1:case"end":return o.stop()}}),o)})))()},_goSiteForm:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,c=arguments.length>8?arguments[8]:void 0;this._goForm(e,a,t,n,i,r,o,s,c)},handleSiteReserve:function(t){var e=this;(0,i.goLogin)("handleSignUp").then((function(a){if(a){var n=e,i=t.currentTarget.dataset.item;if(2===i.registStatus)return;wx.requestSubscribeMessage({tmplIds:r.globalData.activityTemplateIds,complete:function(e){var a=+("accept"===e[r.globalData.activityTemplateIds[0]]);n.reserveHandler(t.currentTarget.dataset,a,i.conferenceType)}})}}))},reserveHandler:function(e,a,i){var o=this;return n(t().mark((function n(){var s,c,d,u,l,g,p,f,h,m,v,_,y,T,w;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.item,c=e.index,d=s.id,u=s.data_id,t.next=4,r.API.getActivityDetail(d);case 4:return l=t.sent,g=l.content.info,p={CampaignID:g.CampaignID,Campaign:g.NameOfCampaign,SubCampaignID:g.CampaignID,SubCampaign:g.NameOfCampaign,CampaignType:"直播营销",ContentID:g.data_id<=0?"activity"+g.id:g.data_id,ContentTheme:g.title,$name_of_marketing_event:g.NameOfCampaign,$marketing_type:"直播营销"},console.log("=============跳转MPReservationClick埋点",p),t.next=10,r.QD.track("MPReservationClick",p);case 10:return f=l.content.info,h=f.type,m=f.tpl_id,v=f.data_id,_=f.CampaignID,y=f.NameOfCampaign,r.QD.currentParams={CampaignID:_||"",NameOfCampaign:y||""},t.next=14,r.API.checkFormSubmitDownload(5,u,4,m,wx.getStorageSync("qdVisitId"),a);case 14:if(T=t.sent,console.log("🚀 ~ file: index.js ~ line 323 ~ reserveHandler ~ formRes",T),0!=+T.code||1!=+T.content){t.next=22;break}return(w=o.data.agendaList[c]).registStatus=2,o.data.agendaList.splice(c,1,w),o.setData({agendaList:o.data.agendaList}),t.abrupt("return");case 22:o._goSiteForm(u,m,2,"",d,h,v,a,i);case 23:case"end":return t.stop()}}),n)})))()},getPhoneNumber:function(t){var e=this;(0,i.phoneLogin)(t,(function(a){e.setData({useUin:a}),e[t.target.id]&&e[t.target.id](t)}))}}});
},{isPage:false,isComponent:true,currentFile:'components/industry-agenda/index.js'});require("components/industry-agenda/index.js");