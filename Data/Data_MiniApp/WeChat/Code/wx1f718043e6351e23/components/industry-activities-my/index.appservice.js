$gwx_XC_34=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];
function gz$gwx_XC_34_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'agendaList']])
Z([3,'index'])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'index',[[7],[3,'index']]]])
Z([3,'listItem'])
Z(z[3])
Z([3,'goToDetail'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([3,'list-item-content'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,3]],[[6],[[7],[3,'item']],[3,'endTime']]],[[6],[[7],[3,'item']],[3,'startTime']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'scaleType']],[1,2]])
Z([3,'clickIcon'])
Z([3,'icon'])
Z(z[7])
Z(z[6])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isShowSub']]])
Z([[6],[[7],[3,'item']],[3,'isShowSub']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'subList']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'subList']],[3,'length']],[1,0]]])
Z([3,'sub'])
Z([[6],[[7],[3,'item']],[3,'subList']])
Z(z[5])
Z([3,'list-sub-item'])
Z([[7],[3,'sub']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'sub']],[3,'status']],[1,3]],[[6],[[7],[3,'sub']],[3,'endTime']]],[[6],[[7],[3,'sub']],[3,'startTime']]],[[2,'=='],[[6],[[7],[3,'sub']],[3,'type']],[1,2]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_34=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_34=true;
var x=['./components/industry-activities-my/index.wxml'];d_[x[0]]={}
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_34_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/industry-activities-my/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',5,'data-item',1,'data-key',2],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',8,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,10,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'view',['catchtap',11,'class',1,'data-index',2,'data-item',3],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,15,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,16,e,s,gg)){cI.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
_(cF,hG)
}
fE.wxXCkey=1
cF.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,17,e,s,gg)){xC.wxVkey=1
var oJ=_v()
_(xC,oJ)
var lK=function(tM,aL,eN,gg){
var oP=_mz(z,'view',['bindtap',20,'class',1,'data-item',2],[],tM,aL,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,23,tM,aL,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
_(eN,oP)
return eN
}
oJ.wxXCkey=2
_2z(z,19,lK,e,s,gg,oJ,'sub','index','')
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
var z=gz$gwx_XC_34_1()
var oHJ=_v()
_(r,oHJ)
var lIJ=function(tKJ,aJJ,eLJ,gg){
var oNJ=_v()
_(eLJ,oNJ)
var xOJ=_oz(z,3,tKJ,aJJ,gg)
var oPJ=_gd(x[0],xOJ,e_,d_)
if(oPJ){
var fQJ=_1z(z,2,tKJ,aJJ,gg) || {}
var cur_globalf=gg.f
oNJ.wxXCkey=3
oPJ(fQJ,fQJ,oNJ,gg)
gg.f=cur_globalf
}
else _w(xOJ,x[0],1,88)
return eLJ
}
oHJ.wxXCkey=2
_2z(z,0,lIJ,e,s,gg,oHJ,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_34";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_34();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/industry-activities-my/index.wxml'] = [$gwx_XC_34, './components/industry-activities-my/index.wxml'];else __wxAppCode__['components/industry-activities-my/index.wxml'] = $gwx_XC_34( './components/industry-activities-my/index.wxml' );
	;__wxRoute = "components/industry-activities-my/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/industry-activities-my/index.js";define("components/industry-activities-my/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/toConsumableArray"),e=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),i=getApp();Component({properties:{list:{type:Array,value:[],observer:function(){this.init()}},type:{type:String,value:[]},searchWords:{type:String,value:""},searchType:{type:String,value:""},isDetail:{type:Boolean,value:!1}},data:{agendaList:[]},methods:{init:function(){var t=this,e=this.data.list;this.signUpIds||(this.signUpIds=[]);var a=JSON.parse(JSON.stringify(e));this.signUpIds&&a.forEach((function(e){t.signUpIds.includes(e.id)&&(e.registStatus=2)})),this.setData({agendaList:a})},goToDetail:function(t){console.log("activity/index goToDetail",t);var e=t.currentTarget.dataset.item,a=e.id,n=e.type,s=(e.live_url,e.regisStatus),r=e.data_id,o=e.data_type,c=(e.tencent_vid,e.out_url,e.notJumpDetail),d=e.scaleType;c&&1==+c||2!=d&&(this.data.searchWords&&i.QD.event("SearchResultClick",{keywords:this.data.searchWords,is_recommendword:"hot"===this.data.searchType,is_historyword:"history"===this.data.searchType,result_tab_name:"活动",result_number:this.data.list.length,ContentID:a.toString(),rank_number:t.currentTarget.dataset.key+1}),1!=s||2!=n?("juhe"==this.data.type&&r&&(a=r),2==n?wx.navigateTo({url:"/pages/online/detail/index?id="+a}):(console.log("data_type",o),"news"==o?wx.navigateTo({url:"/pages/activity/news_detail/index?id="+a}):wx.navigateTo({url:"/pages/activity/act_detail/index?id="+a+"&type="+n})),this.data.isDetail&&this.triggerEvent("toDetail")):this.handleSiteReserve({currentTarget:{dataset:{item:t.currentTarget.dataset.item}}}))},jumpLive:function(t){var e=t.currentTarget.dataset.liveurl;console.log("page activity list jumpLive",e,t),wx.navigateTo({url:"/pages/common/webview/index?url="+e})},signUp:function(t){console.log("page activity list signUp",t)},_checkCanhui:function(){return 2==this.data.info.canhui_status},_changeActStatus:function(t,e){var a=this,n=this.data.info.campaignId;wx.showLoading({title:""}),i.API.refreshOrderStatus({campaignId:n,tag:t,actId:e}).then((function(e){wx.hideLoading(),console.log("_changeActStatus res",e),0==e.code&&(1==t?(a.setData({"info.signup_status":2}),wx.showToast({title:"报名成功",icon:"none"})):2==t&&(a.setData({"info.reserve_status":2}),wx.showToast({title:"预约成功",icon:"none"})))}))},_goActForm:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,r=this.data.info.siteId;t||(t=i.globalData.config.formTpl.reg),this._goForm(t,e,r,a,n,s)},_goForm:function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,o=arguments.length>7?arguments[7]:void 0;console.log("mark 111",s,this.data.id);var c="";c=1==s?"/pages/form/index/index?sendMsg=".concat(o,"&type=act&op_id=").concat(r,"&data_type=").concat(e,"&f_id=").concat(this.data.f_id,"&actId=").concat(n,"&data_id=").concat(a,"&tplId=").concat(t,"&r_url=").concat(i,"&actType=act_offline"):"/pages/form/index/index?sendMsg=".concat(o,"&type=meet_reserve&op_id=").concat(r,"&data_type=").concat(e,"&f_id=").concat(this.data.f_id,"&actId=").concat(n,"&data_id=").concat(a,"&tplId=").concat(t,"&r_url=").concat(i,"&actType=act_online"),wx.navigateTo({url:c})},handleSignUp:function(t){var n=this;return a(e().mark((function a(){var s,r,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.currentTarget.dataset.item.id,r=t.currentTarget.dataset.item.registStatus,e.next=4,i.API.getActivityDetail(s);case 4:o=e.sent,console.log("page activity list handleSignUp getActivityDetail",o),n.setData({info:o.content.info}),2==r||1==r&&(n.waitStatusRefresh=function(){n.setData({"info.canhui_status":2,"info.signup_status":2})},n._goActForm(o.content.info.tpl_id,1,"",s,o.content.info.type));case 8:case"end":return e.stop()}}),a)})))()},_goSiteForm:function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,o=arguments.length>7?arguments[7]:void 0;this._goForm(e,a,t,i,n,s,r,o)},handleSiteReserve:function(t){var e=this;2!==t.currentTarget.dataset.item.registStatus&&wx.requestSubscribeMessage({tmplIds:i.globalData.activityTemplateIds,complete:function(a){var n=+("accept"===a[i.globalData.activityTemplateIds[0]]);e.reserveHandler(t.currentTarget.dataset,n)}})},reserveHandler:function(n,s){var r=this;return a(e().mark((function a(){var o,c,d,g,l,u,h,p,v,m,f,_,y;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.item,c=n.index,d=o.id,e.next=4,i.API.getActivityDetail(d);case 4:return g=e.sent,l=g.content.info,u=l.type,h=l.tpl_id,p=l.id,v=l.data_id,m=l.CampaignID,f=l.NameOfCampaign,i.QD.currentParams={CampaignID:m||"",NameOfCampaign:f||""},e.next=9,i.API.checkFormSubmitDownload(5,p,4,h,wx.getStorageSync("qdVisitId"),s);case 9:if(!(_=e.sent)||!_.content){e.next=17;break}return(y=r.data.agendaList[c]).registStatus=2,r.data.agendaList.splice(c,1,y),r.signUpIds=[].concat(t(r.signUpIds),[p]),r.setData({agendaList:r.data.agendaList}),e.abrupt("return");case 17:r._goSiteForm(p,h,2,"",d,u,v,s);case 18:case"end":return e.stop()}}),a)})))()},clickIcon:function(t){var e=t.currentTarget.dataset.item,a=t.currentTarget.dataset.index;e.isShowSub?e.isShowSub=!1:e.isShowSub=!0;var i=this.data.agendaList;i[a]=e,this.setData({agendaList:i})}}});
},{isPage:false,isComponent:true,currentFile:'components/industry-activities-my/index.js'});require("components/industry-activities-my/index.js");