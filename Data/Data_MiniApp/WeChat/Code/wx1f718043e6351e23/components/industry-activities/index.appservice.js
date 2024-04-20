$gwx_XC_35=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_35 || [];
function gz$gwx_XC_35_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'agendaList']])
Z([3,'index'])
Z([[9],[[9],[[8],'item',[[7],[3,'item']]],[[8],'index',[[7],[3,'index']]]],[[8],'useUin',[[7],[3,'useUin']]]])
Z([3,'listItem'])
Z(z[3])
Z([3,'goToDetail'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'data_type']],[1,'news']])
Z([3,'list-item'])
Z([3,'list-item-active'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]],[[6],[[7],[3,'item']],[3,'endTime']]],[[6],[[7],[3,'item']],[3,'startTime']]])
Z([3,'list-item-content'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'banner']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'banner']],[3,'length']],[1,0]])
Z([3,'label'])
Z([[6],[[7],[3,'item']],[3,'tag']])
Z(z[1])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'endTime']],[[6],[[7],[3,'item']],[3,'startTime']]])
Z([3,'list-item-desc'])
Z([3,'item-desc-list'])
Z([[6],[[7],[3,'item']],[3,'lecturer']])
Z([[6],[[7],[3,'item']],[3,'lecturer_desc']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'zbTime']],[[6],[[7],[3,'item']],[3,'endTime']]],[[6],[[7],[3,'item']],[3,'startTime']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,1]]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,2]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,1]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,2]]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,2]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]])
Z([3,'opearte-btns'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,1]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'registStatus']],[1,2]])
Z(z[12])
Z(z[13])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]],[[2,'=='],[[6],[[7],[3,'item']],[3,'endTime']],[1,0]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'startTime']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_35=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_35=true;
var x=['./components/industry-activities/index.wxml'];d_[x[0]]={}
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_35_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/industry-activities/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',5,'data-item',1,'data-key',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,8,e,s,gg)){xC.wxVkey=1
}
else{xC.wxVkey=2
var oD=_n('view')
_rz(z,oD,'class',9,e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',10,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,11,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(fE,hG)
if(_oz(z,12,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(fE,oH)
if(_oz(z,13,e,s,gg)){oH.wxVkey=1
}
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(oD,fE)
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,15,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,16,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(cI,aL)
var tM=function(bO,eN,oP,gg){
var oR=_v()
_(oP,oR)
if(_oz(z,20,bO,eN,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
return oP
}
aL.wxXCkey=2
_2z(z,18,tM,e,s,gg,aL,'label','index','index')
oJ.wxXCkey=1
lK.wxXCkey=1
_(oD,cI)
var fS=_n('view')
_rz(z,fS,'class',21,e,s,gg)
var lY=_n('view')
_rz(z,lY,'class',22,e,s,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,23,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(lY,t1)
if(_oz(z,24,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(lY,e2)
if(_oz(z,25,e,s,gg)){e2.wxVkey=1
}
aZ.wxXCkey=1
t1.wxXCkey=1
e2.wxXCkey=1
_(fS,lY)
var cT=_v()
_(fS,cT)
if(_oz(z,26,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,27,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(fS,oV)
if(_oz(z,28,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(fS,cW)
if(_oz(z,29,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(fS,oX)
if(_oz(z,30,e,s,gg)){oX.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',31,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,32,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,33,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(b3,o6)
if(_oz(z,34,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(b3,f7)
if(_oz(z,35,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(b3,c8)
if(_oz(z,36,e,s,gg)){c8.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
f7.wxXCkey=1
c8.wxXCkey=1
_(oX,b3)
}
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
_(oD,fS)
_(xC,oD)
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_35_1()
var hSJ=_v()
_(r,hSJ)
var oTJ=function(oVJ,cUJ,lWJ,gg){
var tYJ=_v()
_(lWJ,tYJ)
var eZJ=_oz(z,3,oVJ,cUJ,gg)
var b1J=_gd(x[0],eZJ,e_,d_)
if(b1J){
var o2J=_1z(z,2,oVJ,cUJ,gg) || {}
var cur_globalf=gg.f
tYJ.wxXCkey=3
b1J(o2J,o2J,tYJ,gg)
gg.f=cur_globalf
}
else _w(eZJ,x[0],1,88)
return lWJ
}
hSJ.wxXCkey=2
_2z(z,0,oTJ,e,s,gg,hSJ,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_35";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_35();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/industry-activities/index.wxml'] = [$gwx_XC_35, './components/industry-activities/index.wxml'];else __wxAppCode__['components/industry-activities/index.wxml'] = $gwx_XC_35( './components/industry-activities/index.wxml' );
	;__wxRoute = "components/industry-activities/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/industry-activities/index.js";define("components/industry-activities/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/toConsumableArray"),e=require("../../@babel/runtime/helpers/defineProperty"),a=require("../../@babel/runtime/helpers/regeneratorRuntime"),n=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../utils/phoneLogin"),o=require("../../utils/phoneLogin.js"),r=getApp();Component({properties:{list:{type:Array,value:[],observer:function(){this.init()}},type:{type:String,value:[]},searchWords:{type:String,value:""},searchType:{type:String,value:""},isDetail:{type:Boolean,value:!1}},data:{agendaList:[],useUin:0,actionType:""},lifetimes:{attached:function(){this.setData({useUin:wx.getStorageSync("useUin")})}},onShow:function(){this.data.actionType&&(this[this.data.actionType](),this.setData({actionType:""}))},methods:{init:function(){var t=this,e=this.data.list;this.signUpIds||(this.signUpIds=[]);var a=JSON.parse(JSON.stringify(e));this.signUpIds&&a.forEach((function(e){t.signUpIds.includes(e.id)&&(e.registStatus=2)})),this.setData({agendaList:a})},goToDetail:function(t){var e=this;(0,i.goLogin)("goToDetail").then((function(a){if(a){console.log("activity/index goToDetail",t);var n=t.currentTarget.dataset.item,i=n.id,o=n.type,s=(n.live_url,n.regisStatus),c=n.data_id,d=n.data_type,u=(n.tencent_vid,n.out_url,n.notJumpDetail);if(u&&1==+u)return;if(e.data.searchWords&&r.QD.event("SearchResultClick",{keywords:e.data.searchWords,is_recommendword:"hot"===e.data.searchType,is_historyword:"history"===e.data.searchType,result_tab_name:"活动",result_number:e.data.list.length,ContentID:i.toString(),rank_number:t.currentTarget.dataset.key+1}),1==s&&2==o)return void e.handleSiteReserve({currentTarget:{dataset:{item:t.currentTarget.dataset.item}}});"juhe"==e.data.type&&c&&(i=c),2==o?wx.navigateTo({url:"/pages/online/detail/index?id="+i}):(console.log("data_type",d),"news"==d?wx.navigateTo({url:"/pages/activity/news_detail/index?id="+i}):wx.navigateTo({url:"/pages/activity/act_detail/index?id="+i+"&type="+o})),e.data.isDetail&&e.triggerEvent("toDetail")}}))},jumpLive:function(t){var e=t.currentTarget.dataset.liveurl;console.log("page activity list jumpLive",e,t),wx.navigateTo({url:"/pages/common/webview/index?url="+e})},signUp:function(t){console.log("page activity list signUp",t)},_checkCanhui:function(){return 2==this.data.info.canhui_status},_changeActStatus:function(t,e){var a=this,n=this.data.info.campaignId;wx.showLoading({title:""}),r.API.refreshOrderStatus({campaignId:n,tag:t,actId:e}).then((function(e){wx.hideLoading(),console.log("_changeActStatus res",e),0==e.code&&(1==t?(a.setData({"info.signup_status":2}),wx.showToast({title:"报名成功",icon:"none"})):2==t&&(a.setData({"info.reserve_status":2}),wx.showToast({title:"预约成功",icon:"none"})))}))},_goActForm:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=this.data.info,s=o.siteId,c=o.data_id;t||(t=r.globalData.config.formTpl.reg),this._goForm(t,e,s,a,n,i,c)},_goForm:function(t,e,i){var o=arguments,r=this;return n(a().mark((function n(){var s,c,d,u,g,l,p;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=o.length>3&&void 0!==o[3]?o[3]:"",c=o.length>4?o[4]:void 0,d=o.length>5?o[5]:void 0,u=o.length>6?o[6]:void 0,g=o.length>7?o[7]:void 0,l=o.length>8?o[8]:void 0,console.log("mark 111",d,r.data.id),p="",p="des2023"===l?"/enroll/pages/enroll/guide/index?sendMsg=".concat(g,"&type=act&op_id=").concat(u,"&data_type=").concat(e,"&f_id=").concat(r.data.f_id,"&actId=").concat(c,"&data_id=").concat(i,"&tplId=").concat(t,"&r_url=").concat(s,"&actType=act_offline"):1==d?"/pages/form/index/index?sendMsg=".concat(g,"&type=act&op_id=").concat(u,"&data_type=").concat(e,"&f_id=").concat(r.data.f_id,"&actId=").concat(c,"&data_id=").concat(i,"&tplId=").concat(t,"&r_url=").concat(s,"&actType=act_offline"):"/pages/form/index/index?sendMsg=".concat(g,"&type=meet_reserve&op_id=").concat(u,"&data_type=").concat(e,"&f_id=").concat(r.data.f_id,"&actId=").concat(c,"&data_id=").concat(i,"&tplId=").concat(t,"&r_url=").concat(s,"&actType=act_online"),wx.navigateTo({url:p});case 10:case"end":return a.stop()}}),n)})))()},handleSignUp:function(t){var o=this;return n(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:console.log(t),(0,i.goLogin)("handleSignUp").then(function(){var i=n(a().mark((function n(i){var s,c,d,u,g;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!i){a.next=20;break}return s=t.currentTarget.dataset.item.id,t.currentTarget.dataset.item.registStatus,a.next=5,r.API.getActivityDetail(s);case 5:return c=a.sent,console.log("page activity list handleSignUp getActivityDetail",c),o.setData({info:c.content.info}),a.next=10,r.API.checkFormSubmitDownload(5,c.content.info.id,6,c.content.info.tpl_id,wx.getStorageSync("qdVisitId"));case 10:if(!(d=a.sent)||1!=d.content){a.next=18;break}return u="",o.data.list.forEach((function(t,e){t.id===c.content.info.id&&(u=e)})),g="list["+u+"].signup_status",o.setData(e({},g,2)),wx.showToast({title:"报名成功",icon:"none"}),a.abrupt("return");case 18:o.waitStatusRefresh=function(){o.setData({"info.canhui_status":2,"info.signup_status":2})},o._goActForm(c.content.info.tpl_id,1,"",s,c.content.info.type);case 20:case"end":return a.stop()}}),n)})));return function(t){return i.apply(this,arguments)}}());case 2:case"end":return s.stop()}}),s)})))()},_goSiteForm:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,c=arguments.length>8?arguments[8]:void 0;this._goForm(e,a,t,n,i,o,r,s,c)},handleSiteReserve:function(t){var e=this;(0,i.goLogin)("handleSiteReserve").then((function(a){if(a){var n=e,i=t.currentTarget.dataset.item;if(2===i.registStatus)return;wx.requestSubscribeMessage({tmplIds:r.globalData.activityTemplateIds,complete:function(e){var a=+("accept"===e[r.globalData.activityTemplateIds[0]]);n.reserveHandler(t.currentTarget.dataset,a,i.conferenceType)}})}}))},reserveHandler:function(e,i,o){var s=this;return n(a().mark((function n(){var c,d,u,g,l,p,h,f,v,m,_,y,w,x,T;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.item,d=e.index,u=c.id,a.next=4,r.API.getActivityDetail(u);case 4:return g=a.sent,l=g.content.info,p={CampaignID:l.CampaignID,Campaign:l.NameOfCampaign,SubCampaignID:l.CampaignID,SubCampaign:l.NameOfCampaign,CampaignType:"直播营销",ContentID:l.data_id<=0?"activity"+l.id:l.data_id,ContentTheme:l.title,$name_of_marketing_event:l.NameOfCampaign,$marketing_type:"直播营销"},console.log("=============跳转MPReservationClick埋点",p),a.next=10,r.QD.track("MPReservationClick",p);case 10:return h=g.content.info,f=h.type,v=h.tpl_id,m=h.id,_=h.data_id,y=h.CampaignID,w=h.NameOfCampaign,r.QD.currentParams={CampaignID:y||"",NameOfCampaign:w||""},a.next=14,r.API.checkFormSubmitDownload(5,m,4,v,wx.getStorageSync("qdVisitId"),i);case 14:if(!(x=a.sent)||!x.content){a.next=22;break}return(T=s.data.agendaList[d]).registStatus=2,s.data.agendaList.splice(d,1,T),s.signUpIds=[].concat(t(s.signUpIds),[m]),s.setData({agendaList:s.data.agendaList}),a.abrupt("return");case 22:s._goSiteForm(m,v,2,"",u,f,_,i,o);case 23:case"end":return a.stop()}}),n)})))()},getPhoneNumber:function(t){var e=this;(0,o.phoneLogin)(t,(function(a){e.setData({useUin:a}),e[t.target.id]&&e[t.target.id](t)}))}}});
},{isPage:false,isComponent:true,currentFile:'components/industry-activities/index.js'});require("components/industry-activities/index.js");