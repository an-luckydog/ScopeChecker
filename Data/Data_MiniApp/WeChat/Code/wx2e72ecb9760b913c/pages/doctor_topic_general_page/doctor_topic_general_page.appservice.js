$gwx_XC_77=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_77 || [];
function gz$gwx_XC_77_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_77_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_77_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_77_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'error']])
Z([3,'topic'])
Z([[7],[3,'doctorInfo']])
Z([[7],[3,'visitPageName']])
Z([[7],[3,'shouldAdShow']])
Z([3,'doPoint'])
Z([[6],[[7],[3,'adInfo']],[3,'image']])
Z([[6],[[7],[3,'adInfo']],[3,'url']])
Z([[6],[[7],[3,'adInfo']],[3,'redirect_type']])
Z([[7],[3,'src']])
Z([3,'onMpHtmlLinkTap'])
Z([[7],[3,'topicRichtextContent']])
Z([1,false])
Z([3,'onFollowSuccess'])
Z([[6],[[7],[3,'doctorInfo']],[3,'id']])
Z([[6],[[7],[3,'doctorInfo']],[3,'hasFollowed']])
Z([[6],[[7],[3,'topicInfo']],[3,'content_type']])
Z([[6],[[7],[3,'topicInfo']],[3,'title']])
Z([[6],[[7],[3,'topicInfo']],[3,'id']])
Z([[2,'&&'],[[7],[3,'newUserWelfare']],[[6],[[7],[3,'newUserWelfare']],[3,'image']]])
Z([[7],[3,'newUserWelfare']])
Z(z[1])
Z([[7],[3,'pageReadableName']])
Z([[6],[[7],[3,'doctorInfo']],[3,'canAskDoctor']])
Z([[6],[[7],[3,'doctorInfo']],[3,'clinic']])
Z([[6],[[7],[3,'doctorInfo']],[3,'clinicNo']])
Z(z[14])
Z([[6],[[7],[3,'doctorInfo']],[3,'doctor_name']])
Z([3,'语音'])
Z([1,true])
Z([[2,'&&'],[[7],[3,'isDocCouponActive']],[[2,'||'],[[2,'&&'],[[7],[3,'isLogin']],[[7],[3,'toDocUser']]],[[2,'&&'],[[2,'!'],[[7],[3,'isLogin']]],[[7],[3,'dayFristVisit']]]]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_77_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_77_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_77=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_77=true;
var x=['./pages/doctor_topic_general_page/doctor_topic_general_page.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_77_1()
var cWV=_v()
_(r,cWV)
if(_oz(z,0,e,s,gg)){cWV.wxVkey=1
}
else{cWV.wxVkey=2
var lYV=_n('view')
_rz(z,lYV,'class',1,e,s,gg)
var e2V=_mz(z,'doctor-header-detail-page',['doctorInfo',2,'visitPageName',1],[],e,s,gg)
_(lYV,e2V)
var aZV=_v()
_(lYV,aZV)
if(_oz(z,4,e,s,gg)){aZV.wxVkey=1
var b3V=_mz(z,'ad-bar',['bindtap',5,'imgUrl',1,'targetUrl',2,'type',3],[],e,s,gg)
_(aZV,b3V)
}
var t1V=_v()
_(lYV,t1V)
if(_oz(z,9,e,s,gg)){t1V.wxVkey=1
}
var o4V=_mz(z,'mp-html',['bind:linktap',10,'content',1,'copyLink',2],[],e,s,gg)
_(lYV,o4V)
var x5V=_mz(z,'follow-doc-button-detail-page',['bind:followsuccess',13,'doctorId',1,'hasFollowed',2],[],e,s,gg)
_(lYV,x5V)
aZV.wxXCkey=1
aZV.wxXCkey=3
t1V.wxXCkey=1
_(cWV,lYV)
}
var o6V=_mz(z,'doctor-recommend-list',['contentType',16,'title',1,'titleId',2],[],e,s,gg)
_(r,o6V)
var oXV=_v()
_(r,oXV)
if(_oz(z,19,e,s,gg)){oXV.wxVkey=1
var f7V=_mz(z,'new-user-welfare-bar',['adDetail',20,'from',1,'pageReadableName',2],[],e,s,gg)
_(oXV,f7V)
}
var c8V=_mz(z,'page-footer',['canAskDoctor',23,'clinic',1,'clinicNo',2,'docId',3,'doctorName',4,'fromType',5,'shouldShowDiscoutTag',6,'showDiscountBadge',7,'visitPageName',8],[],e,s,gg)
_(r,c8V)
cWV.wxXCkey=1
cWV.wxXCkey=3
oXV.wxXCkey=1
oXV.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_77";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_77();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/doctor_topic_general_page/doctor_topic_general_page.wxml'] = [$gwx_XC_77, './pages/doctor_topic_general_page/doctor_topic_general_page.wxml'];else __wxAppCode__['pages/doctor_topic_general_page/doctor_topic_general_page.wxml'] = $gwx_XC_77( './pages/doctor_topic_general_page/doctor_topic_general_page.wxml' );
	;__wxRoute = "pages/doctor_topic_general_page/doctor_topic_general_page";__wxRouteBegin = true;__wxAppCurrentFile__="pages/doctor_topic_general_page/doctor_topic_general_page.js";define("pages/doctor_topic_general_page/doctor_topic_general_page.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Arrayincludes");var e=t(require("../../@babel/runtime/regenerator")),i=require("../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../@babel/runtime/helpers/objectSpread2"),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),n=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),s=t(require("../../7B9C8496829A079C1DFAEC91795C7B70.js")),c=t(require("../../6A719353829A079C0C17FB54BF7D7B70.js")),r=require("../../43A2F676829A079C25C49E711B4C7B70.js"),d=t(require("../../3B123513829A079C5D745D1477BC7B70.js")),l=getApp(),p="".concat(a.baseUrl,"/api/v7/new_user/to_doc/"),u=a.baseUrl+"/events/new_user_welfare/entrance_info/?from_wx_mini=1";Page({data:{topicType:"",id:0,error:!1,canAskDoctor:!1,doctorInfo:{},topicInfo:{},progress:0,src:"",audioAction:{method:"pause"},time:"00:00",adInfo:{},shouldAdShow:!1,isHasMargin:!1,dayFristVisit:!1,isDocCouponActive:!1,toDocUser:!1,isLogin:!1,urlData:{id:"",topicType:""},structuredDoctorInfo:{can_ask_doctor:!1,clinic_name:"",name:"",doctor_name:"",hospital:"",hospital_name:"",hospital_level:"",id:"",image:"",title:"",coupon_rate:"",discounted_price:""},topicRichtextContent:"",newUserWelfare:{},pageReadableName:"",visitPageName:"话题详情页",fromVisitPage:""},onLoad:function(t){if(this.time=0,this.g=0,this.s=0,this.minuteG=0,this.minuteS=0,console.log(t),(0,c.default)({level:2,id:"generanl_topic_detail",hasPassed:t&&t.topic_type&&t.id,extraInfo:{problemId:t?t.id:"options is undefined",topicType:t?t.topic_type:"options is undefined"}}),this.setData({"urlData.id":t.id||"","urlData.topicType":t.topic_type,fromVisitPage:t.from_visit_page||""}),t.id)this.getTopicDetail(t.id);else{var e=decodeURIComponent(t.scene);e=this.parseScene(e),this.getTopicDetail(e.id)}},onShow:function(t){this.getTopicDetail(this.data.urlData.id);var e=this;this.getNewUserWelfare(),l.globalData.appIsLogin.then((function(){e.getNewUserToDoc(),e.setData({dayFristVisit:!1})}),(function(){var t,i=function(){var t=new Date,e=("0"+String(t.getDate())).slice(-2);return("0"+String(t.getMonth()+1)).slice(-2)+"/"+e+"/"+t.getFullYear()},o=wx.getStorageSync("OPENED_MINI_APP_IN_HISTORY_FOR_COUPON");o&&i()!==o?i()===o?t=!0:i()!==o&&(t=!1):(wx.setStorageSync("OPENED_MINI_APP_IN_HISTORY_FOR_COUPON",i()),t=!0),e.setData({dayFristVisit:t})})),(0,d.default)({fromName:this.data.fromVisitPage,name:this.data.visitPageName,extraInfo:{filter:{id:this.data.id||""},click_position:"",click_order:0}})},audioTimeUpdated:function(t){this.time+=1;var e=t.detail.duration,i=t.detail.currentTime;1===this.time&&(this.g+=1,this.minuteG>=10&&(this.minuteS=""),this.g>=10&&(this.s=""),60===this.g&&(this.s=0,this.g=1,this.minuteG+=1),this.setData({time:"".concat(this.minuteS).concat(this.minuteG,":").concat(this.s).concat(this.g)})),4===this.time&&(this.time=0);var o=i/e*100;this.setData({progress:o})},getTopicDetail:function(t){var e=this,i={audio:"".concat(a.baseUrl,"/cooperation/wap/audio/").concat(t,"/?partner=chunyu_wap_mini"),qa:"".concat(a.baseUrl,"/cooperation/wap/qa/answers/").concat(t,"/?partner=chunyu_wap_mini"),topic:"".concat(a.baseUrl,"/cooperation/wap/topic/").concat(t,"/")};(0,s.default)({url:i[this.data.urlData.topicType],data:{from_wx_mini:1,device_id:wx.getStorageSync("open_id")||wx.getStorageSync("device_id")},success:function(a){var n=a.data;if("qa"===e.data.urlData.topicType){var s=o(o({},n.answer_list[0]),{},{doctor_name:n.answer_list[0].doctor,image:n.answer_list[0].doctor_img,canAskDoctor:n.can_ask_doctor,clinicNo:n.clinic_no,hasFollowed:n.has_followed}),r=n.answer_list[0].answer,d={title:n.title,read_num:n.view_num,pubdate:n.publish_date,content_type:n.content_type,id:n.id};e.setData({doctorInfo:s,topicRichtextContent:r,topicInfo:d,pageReadableName:"医生话题详情页"})}else if("audio"===e.data.urlData.topicType){var p,u=o(o({},n.doctor_info),{},{canAskDoctor:!!n.doctor_info&&n.doctor_info.can_ask_doctor,clinicNo:n.clinic_no,hasFollowed:n.has_followed});(0,c.default)({id:"audio_detail",hasPassed:n.topic_info&&n.topic_info.html_content,extraInfo:o({problemId:t,requestUrl:i[e.data.urlData.topicType]},n)});var _=null===(p=n.topic_info)||void 0===p?void 0:p.html_content;if(!_)return void wx.showToast({title:"获取话题详情失败",icon:"none"});e.setData({doctorInfo:u,topicRichtextContent:_,topicInfo:n.topic_info,canAskDoctor:!!n.doctor_info&&n.doctor_info.can_ask_doctor,src:n.topic_info?n.topic_info.final_audio:"",adInfo:n.ad_info,shouldAdShow:!!n.ad_info&&Boolean(Object.keys(n.ad_info).length),clinicNo:n.clinic_no,pageReadableName:"语音话题详情页"})}else if("topic"===e.data.urlData.topicType){console.log(n);var h=o(o({},n.doctor_info),{},{canAskDoctor:n.can_ask_doctor,clinicNo:n.clinic_no,hasFollowed:n.has_followed}),f={title:n.title,read_num:n.read_num,pubdate:n.created_time,content_type:n.content_type,id:n.id},g=n.content;e.setData({doctorInfo:h,topicRichtextContent:g,topicInfo:f,pageReadableName:"简答话题详情页"})}e.data.shouldAdShow&&l.sensors.track("AdShow",{app:"weixin_mini",ad_position:"AD语音话题广告展示",ad_title:n.ad_info.ad_title});wx.setNavigationBarTitle({title:{topic:"专家科普",audio:"春雨医生",qa:"春雨医生"}[e.data.urlData.topicType]}),e.getNewUserToDoc()},fail:function(){this.setData({error:!0})}})},getNewUserWelfare:function(){var t=this;return i(e.default.mark((function i(){return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.data.isLogin){e.next=3;break}return e.next=3,(0,r.manualLogin)();case 3:(0,s.default)({url:u,data:{from_wx_mini:1,device_id:wx.getStorageSync("open_id")||wx.getStorageSync("device_id"),scene:"seo_topic"},success:function(e){200===e.statusCode&&e.data&&t.setData({newUserWelfare:e.data})}});case 4:case"end":return e.stop()}}),i)})))()},setStructuredDoctorInfo:function(){},onShareAppMessage:function(){return{path:"/pages/doctor_topic_general_page/doctor_topic_general_page?id=".concat(this.data.urlData.id,"&topic_type=").concat(this.data.urlData.topicType),title:this.data.topicInfo.title}},playAudio:function(){"play"===this.data.audioAction.method?this.setData({audioAction:{method:"pause"}}):this.setData({audioAction:{method:"play"}})},pauseHandle:function(){100===this.data.progress&&(this.setData({progress:0,time:"00:00",audioAction:{this:"pause"}}),this.time=0,this.g=0,this.s=0,this.minuteG=0,this.minuteS=0)},doPoint:function(){l.sensors.track("AdClick",{app:"weixin_mini",ad_position:"AD语音话题广告点击",ad_title:this.data.adInfo.ad_title})},trackDoctor:function(){l.sensors.track("AppClick",{app:"weixin_mini",click_position:"医生信息-内容详情页"})},trackShare:function(){l.sensors.track("AppClick",{app:"weixin_mini",click_position:"咨询医生-分享"})},parseScene:function(t){var e={};return"string"!=typeof(t=decodeURIComponent(t))||t.split("&").forEach((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=t.split("=");e[i[0]]=i[1]})),e},onFollowSuccess:function(t){this.setData({"doctorInfo.hasFollowed":t.detail.isFollowed})},getNewUserToDoc:function(){var t,e=this;null!==(t=this.data.doctorInfo)&&void 0!==t&&t.id&&wx.request({url:p,method:"GET",header:{"Content-Type":"application/json",Cookie:l.globalData.sessionid},data:{doctor_id:this.data.doctorInfo.id},success:function(t){var i=t.data.data,o=i.is_login,a=i.is_doc_coupon_active,n=i.to_doc_user;e.setData({isDocCouponActive:a,toDocUser:n,isLogin:o})}})},onMpHtmlLinkTap:function(t){var e=t.detail.href;if(e)if(e.includes("/wx-mini-bridge/")){var i=(0,n.getQueryStr)("query",e);i&&wx.navigateTo({url:"/pages/home_search/index?query=".concat(i,"&from_visit_page=").concat(this.data.visitPageName)})}else wx.navigateTo({url:"/pages/h5_webview/index?url=".concat(encodeURIComponent(e))})}});
},{isPage:true,isComponent:true,currentFile:'pages/doctor_topic_general_page/doctor_topic_general_page.js'});require("pages/doctor_topic_general_page/doctor_topic_general_page.js");