$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowTopMsg']])
Z([[2,'?:'],[[7],[3,'isShareMyCard']],[[7],[3,'activeInfo']],[[7],[3,'shareStaffInfo']]])
Z([3,'gotojiatuiCard'])
Z([3,'trackEvent'])
Z([[7],[3,'isShareMyCard']])
Z([3,'catchtouchmove'])
Z([a,[3,'share-page '],[[2,'?:'],[[7],[3,'showPanel']],[1,'show'],[1,'']]])
Z([[2,'&&'],[[7],[3,'isStaff']],[[6],[[7],[3,'staffInfo']],[3,'id']]])
Z([[7],[3,'activeInfo']])
Z([3,'shareMemberPick'])
Z([3,'infoPick'])
Z([3,'switchPick'])
Z([[7],[3,'infos']])
Z([[7],[3,'isDisplayMyCard']])
Z([[7],[3,'staffInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./components/card/share-pannel/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var oBB=_v()
_(r,oBB)
if(_oz(z,0,e,s,gg)){oBB.wxVkey=1
var lCB=_mz(z,'card-top-msg',['activeInfo',1,'bind:gotojiatuiCard',1,'bind:track',2,'isShareMyCard',3],[],e,s,gg)
_(oBB,lCB)
}
var aDB=_mz(z,'view',['catchtouchmove',5,'class',1],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,7,e,s,gg)){tEB.wxVkey=1
var eFB=_mz(z,'share-card',['activeObj',8,'bind:shareMemberPick',1,'bindinfoPick',2,'bindswitchPick',3,'infos',4,'isDisplayMyCard',5,'shareStaffInfo',6],[],e,s,gg)
_(tEB,eFB)
}
tEB.wxXCkey=1
tEB.wxXCkey=3
_(r,aDB)
var bGB=_n('no-card-tip')
_(r,bGB)
oBB.wxXCkey=1
oBB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/card/share-pannel/index.wxml'] = [$gwx_XC_5, './components/card/share-pannel/index.wxml'];else __wxAppCode__['components/card/share-pannel/index.wxml'] = $gwx_XC_5( './components/card/share-pannel/index.wxml' );
	;__wxRoute = "components/card/share-pannel/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/card/share-pannel/index.js";define("components/card/share-pannel/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../@babel/runtime/helpers/defineProperty"),t=require("../../../@babel/runtime/helpers/regeneratorRuntime"),r=require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),n=require("../../../@babel/runtime/helpers/asyncToGenerator"),o=getApp();Component({properties:{showPanel:{type:Boolean,value:!1},info:{type:Object},shareCardId:{type:String,value:""},shareActiveInfo:{type:Object},type:{type:String,value:""},conferenceType:{type:String,value:""}},data:{userInfo:{},activeInfo:{employeePosition:!1,wechatId:!1,wechatworkId:!1,employeePhone:!1},shareStaffInfo:{},staffInfo:{},isOpenStaffCard:!1,isShowTopMsg:!1,infos:[{key:"employeePosition",name:"职位",value:""},{key:"wechatId",name:"微信号",value:""},{key:"wechatworkId",name:"企业微信号",value:""},{key:"employeePhone",name:"手机号",value:""}],isShareMyCard:!0,isDisplayMyCard:!0},lifetimes:{attached:function(){var e=o.globalData.userInfo,a=wx.getStorageSync("isStaff");console.log("isStaff",a),this.setData({userInfo:e,isStaff:a,isShareMyCard:!this.data.shareCardId,isShowTopMsg:!!a}),this.init(),console.log("share-pannel shareCardId",this.data.shareCardId),console.log("share-pannel isShowTopMsg",this.data.isShowTopMsg)}},methods:{init:function(){var e=this;return n(t().mark((function a(){var n,i,s,f,c,d,h,g,l,u,p,S,I,v,y;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=wx.getStorageSync("isStaff")){a.next=5;break}return a.abrupt("return",e.getShareStaffInfo());case 5:e.triggerEventShowTopMsg();case 6:return s=wx.getStorageSync("staffInfo"),a.next=9,o.API.getTencetStaffInfo();case 9:if(i=a.sent,console.log("debug res",i),c=(f=i).code,d=f.data,console.log("res staffInfo",s),42241!=c){a.next=21;break}return wx.removeStorageSync("i_token"),a.next=17,o.API.getItoken();case 17:h=a.sent,wx.setStorageSync("i_token",h.data),a.next=27;break;case 21:if(0===c){a.next=26;break}return e.setData({isOpenStaffCard:!1,isDisplayMyCard:!1}),a.abrupt("return",e.getShareStaffInfo());case 26:s=d;case 27:g=e.setInfos(s),l=e.data.activeInfo,u=r(g);try{for(u.s();!(p=u.n()).done;)S=p.value,l[S.key]=!!S.value}catch(e){u.e(e)}finally{u.f()}I=wx.getStorageSync("staff_card_id"),v=e.data.shareCardId,e.setData({isShowTopMsg:!0,staffInfo:s,infos:g,activeInfo:l,isOpenStaffCard:!0,isDisplayMyCard:I&&!v||v===I}),console.log("isShowTopMsg",e.data.isShowTopMsg),e.triggerEvent("shareInfo",l),n&&v&&v!=I&&(y=wx.getStorageSync("salesShareCardInfo"),o.QD.track("cardView",{employee_id:y.euserId,OpenID:wx.getStorageSync("openid"),staff_id:y.staffId||"",content_type:2,content_id:e.data.info.source_id>0?e.data.info.source_id.toString():"tool".concat(e.data.info.id),employee_name:y.employee_name,card_id:y.id}));case 37:case"end":return a.stop()}}),a)})))()},getShareStaffInfo:function(){var e=this;return n(t().mark((function a(){var r,n,i;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(r=e.data.shareCardId)){a.next=10;break}return a.next=4,e.getShareStaffCardInfo(r);case 4:n=a.sent,i=e.setInfos(n),e.triggerEventShowTopMsg(),e.setData({isShowTopMsg:!0,shareStaffInfo:n,infos:i}),console.log("isShowTopMsg",e.data.isShowTopMsg),o.QD.track("cardView",{employee_id:n.euserId,OpenID:wx.getStorageSync("openid"),staff_id:n.staffId||"",content_type:2,content_id:e.data.info.source_id>0?e.data.info.source_id.toString():"tool".concat(e.data.info.id),employee_name:n.employee_name,card_id:n.id});case 10:case"end":return a.stop()}}),a)})))()},triggerEventShowTopMsg:function(){this.triggerEvent("showTopMsg",!0)},setInfos:function(e){var a=this.data.infos;for(var t in e){var n,o=r(a);try{for(o.s();!(n=o.n()).done;){var i=n.value;if("wechatId"===i.key)i.value=e.wechatId||e.wechatQrImg;else if("wechatworkId"===i.key)i.value=e.wechatworkId||e.wechatworkQrImg;else if(e[t]&&i.key===t){debugger;i.value=e[t]}}}catch(e){o.e(e)}finally{o.f()}}debugger;return a},getShareStaffCardInfo:function(e){return new Promise((function(a){o.API.getTencetStaffCardInfo(e).then((function(e){0===e.code&&a(e.data)}))}))},getUserInfo:function(e){var t=this;console.log("debug staffInfo",this.data.staffInfo);var r,n=this.data.staffInfo;n&&n.employeeName&&n.employeeAvatar?(wx.setStorageSync("userInfoNickname",n.employeeName),wx.setStorageSync("userInfoAvatarUrl",n.employeeAvatar),this.setData((a(r={},"userInfo.avatar",n.employeeName),a(r,"userInfo.nickname",n.employeeAvatar),r)),this.data.drawerPoster||this.getSharePoster()):wx.getUserProfile({desc:"用于完善用户信息",success:function(e){var r;console.log("获取用户信息 wx.getUserProfile",e);var n=e.userInfo;wx.setStorageSync("userInfoNickname",n.nickName),wx.setStorageSync("userInfoAvatarUrl",n.avatarUrl),t.setData((a(r={},"userInfo.avatar",n.avatarUrl),a(r,"userInfo.nickname",n.nickName),r)),t.data.drawerPoster||t.getSharePoster()}})},getSharePoster:function(){var e=this.data.info||{},a=e.id,t=e.banner,r=e.title,n=e.data_id,i=e.share_img;if("des"!==this.data.conferenceType)return o.jumpSharePoster({pageId:a,cover_img:t||i,title:r,data_id:n});wx.navigateTo({url:"/enroll/pages/enroll/share/index?pageId=".concat(a,"&data_id=").concat(n,"&cover_img=").concat(t||i,"&title=").concat(r)})},shareFriend:function(){this.triggerEvent("shareFriend")},hideSharePanel:function(){this.triggerEvent("hideSharePanel")},infoPick:function(e){var a=this.data.activeInfo,t=e.detail;a[t]=!a[t],this.setData({activeInfo:a}),this.triggerEvent("shareInfo",a)},switchPick:function(e){console.log("switchPick");var a=this.data.activeInfo;if(!e.detail)for(var t in a)a[t]=!1;this.setData({activeInfo:a,isShowTopMsg:e.detail}),console.log("isShowTopMsg",this.data.isShowTopMsg),this.triggerEvent("showTopMsg",e.detail),this.triggerEvent("switchSharePick",{activeInfo:a,isShareCard:e.detail})},shareMemberPick:function(e){this.setData({isShareMyCard:e.detail}),this.triggerEvent("shareMemberPick",e.detail)},trackEvent:function(a){var t=a.detail,r=this.data.shareStaffInfo,n=r.employee_name,i=r.id,s=r.euserId,f=r.staffId,c=this.data.info.id,d=t.type,h=t.data;o.QD.track(d,e({employee_id:s,OpenID:wx.getStorageSync("openid"),staff_id:f||"",content_type:1,ContentID:c,employee_name:n,card_id:i},h))},gotojiatuiCard:function(){var e=this.data,a=e.isStaff,t=e.isOpenStaffCard,r=e.isShareMyCard;a&&t&&r?wx.navigateTo({url:"/jiatui/pages/index/index"}):wx.navigateTo({url:"/jiatui/pages/card/index?id=".concat(this.data.shareCardId,"&type=1")})}}});
},{isPage:false,isComponent:true,currentFile:'components/card/share-pannel/index.js'});require("components/card/share-pannel/index.js");