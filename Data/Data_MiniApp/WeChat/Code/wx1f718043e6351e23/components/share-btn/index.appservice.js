$gwx_XC_61=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_61 || [];
function gz$gwx_XC_61_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'showConsult']],[[2,'!='],[[7],[3,'mode']],[1,'welfare']]])
Z([[7],[3,'showConsult']])
Z([[2,'&&'],[[7],[3,'showConsult']],[[2,'=='],[[7],[3,'mode']],[1,'welfare']]])
Z([[2,'&&'],[[7],[3,'showConsult']],[[2,'==='],[[7],[3,'type']],[1,2]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_61=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_61=true;
var x=['./components/share-btn/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_61_1()
var t3T=_v()
_(r,t3T)
if(_oz(z,0,e,s,gg)){t3T.wxVkey=1
var o6T=_v()
_(t3T,o6T)
if(_oz(z,1,e,s,gg)){o6T.wxVkey=1
}
o6T.wxXCkey=1
}
var e4T=_v()
_(r,e4T)
if(_oz(z,2,e,s,gg)){e4T.wxVkey=1
}
var b5T=_v()
_(r,b5T)
if(_oz(z,3,e,s,gg)){b5T.wxVkey=1
}
t3T.wxXCkey=1
e4T.wxXCkey=1
b5T.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_61";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_61();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/share-btn/index.wxml'] = [$gwx_XC_61, './components/share-btn/index.wxml'];else __wxAppCode__['components/share-btn/index.wxml'] = $gwx_XC_61( './components/share-btn/index.wxml' );
	;__wxRoute = "components/share-btn/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/share-btn/index.js";define("components/share-btn/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/defineProperty"),e=(require("../../utils/util"),require("../../utils/phoneLogin.js")),a=getApp();Component({externalClasses:["ext-class"],properties:{showConsult:{type:Boolean,value:!0},CampaignID:{type:String,value:""},cid:{type:String,value:""},formId:{type:String,value:""},fId:{type:String,value:""},aId:{type:String,value:""},dataType:{type:String,value:""},dataTitle:{type:String,value:""},industryId:{type:String,value:""},posterTitle:{type:String,value:""},contentId:{type:String,value:""},type:{type:Number,value:1},wechatQrCode:{type:String,value:""},wechatTitle:{type:String,value:""},icon:{type:String,value:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/img-icon/consult-icon.png",observer:function(t){this.initIcon()}},label:{type:String,value:"",observer:function(t){this.initLabel()}},shareImg:{type:String,value:""},consultDetail:{type:Object},mode:{type:String,value:""},conferenceType:{type:String,value:""}},data:{isShowDialog:!1,iconUrl:"",labelText:"",useUin:0,actionType:""},attached:function(){},lifetimes:{attached:function(){var t=this;a.loginCallback().then((function(){console.log("share-btn componment lifetimes",a.globalData);var e=a.globalData.userInfo;t.setData({userInfo:e})})),this.initIcon(),this.initLabel(),this.setData({useUin:wx.getStorageSync("useUin")})}},onShow:function(){this.data.actionType&&(this[this.data.actionType](),this.setData({actionType:""}))},methods:{initIcon:function(){var t=this.data.icon;if(t)return this.setData({iconUrl:t});this.setData({iconUrl:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/img-icon/consult-icon.png"})},initLabel:function(){var t=this.data.label;if(t)return this.setData({labelText:t})},catchtouchmove:function(){},goForm:function(){var t=this;(0,e.goLogin)("goForm").then((function(e){if(e){var n=t.data,i=n.type,o=n.consultDetail,r=n.conferenceType,c=n.posterTitle;if("des"==r?a.QD.track("official_button_click",{CampaignID:a.QD.getLastCampaignUUID()||"",Campaign:a.QD.getLastNameOfPage()||"",SubCampaignID:a.QD.getLastCampaignUUID()||"",SubCampaign:a.QD.getLastNameOfPage()||"",CampaignType:"直播营销",name_of_page:a.QD.getLastNameOfPage(),button_name:t.data.labelText||"咨询",Platform:"小程序",ContentTheme:c||"",NameOfCampaign:c||"",utm_campaign:wx.getStorageSync("qd_utm_campaign"),utm_source:wx.getStorageSync("qd_utm_source"),utm_medium:wx.getStorageSync("qd_utm_medium"),utm_content:wx.getStorageSync("qd_utm_content"),utm_term:wx.getStorageSync("qd_utm_term"),name_of_marketing_event:a.QD.getLastNameOfPage()||"",marketing_type:"直播营销"}):a.QD.track("official_button_click",{name_of_page:a.QD.getLastNameOfPage(),ContentID:a.QD.getLastContentId(),CampaignID:a.QD.currentParams.CampaignID||"",NameOfCampaign:a.QD.currentParams.NameOfCampaign||"",button_name:t.data.labelText,menu:a.globalData.currentTab,button_position:"底部"}),2===i)return t.setData({isShowDialog:!0});if(3===i)return a.tool.redirect("OUTLINK",{jump_type:2,outUrl:o.page_url});if(4===i){if(o.app_id&&o.page_url)return a.tool.redirect("MINIAPP",{appId:o.app_id,pageUrl:o.page_url});if(o.page_url)return void wx.navigateTo({url:o.page_url})}if(!t.data.formId)return void wx.navigateTo({url:"/pages/form/index/index"});wx.navigateTo({url:"/pages/form/index/index?type=consult&tplId=".concat(t.data.formId,"&CampaignID=").concat(t.data.CampaignID)});var g=t.data.tplId;g?wx.navigateTo({url:"/pages/form/index/index?type=consult&tplId=".concat(g,"&industry_id=").concat(t.data.industryId)}):t.data.formId||wx.showToast({title:"未绑定咨询表单",icon:"none"})}}))},getPhoneNumber:function(t){var a=this;(0,e.phoneLogin)(t,(function(e){a.setData({useUin:e}),a[t.target.id]&&a[t.target.id](),console.log(t)}))},getUserInfo:function(e){var a=this;wx.getUserProfile({desc:"用于完善用户信息",success:function(e){var n;console.log("获取用户信息 wx.getUserProfile",e);var i=e.userInfo;e.iv,e.encryptedData;wx.setStorageSync("userInfoNickname",i.nickName),wx.setStorageSync("userInfoAvatarUrl",i.avatarUrl),a.setData((t(n={},"userInfo.avatar",i.avatarUrl),t(n,"userInfo.nickname",i.nickName),n)),a.data.drawerPoster||a.getSharePoster()}})},showSharePanel:function(){var t=this;(0,e.goLogin)("showSharePanel").then((function(e){if(e){t.triggerEvent("showShare");var n=t.data,i=n.conferenceType,o=n.posterTitle;"des"==i&&a.QD.track("CampaignShare",{CampaignID:a.QD.currentParams.CampaignID||"",Campaign:a.QD.getLastNameOfPage()||"",SubCampaignID:a.QD.currentParams.CampaignID||"",SubCampaign:a.QD.getLastNameOfPage()||"",CampaignType:"直播营销",name_of_page:a.QD.getLastNameOfPage(),ContentID:"",Platform:"小程序",ContentTheme:o||"",utm_campaign:wx.getStorageSync("qd_utm_campaign"),utm_source:wx.getStorageSync("qd_utm_source"),utm_medium:wx.getStorageSync("qd_utm_medium"),utm_content:wx.getStorageSync("qd_utm_content"),utm_term:wx.getStorageSync("qd_utm_term"),name_of_marketing_event:a.QD.getLastNameOfPage()||"",marketing_type:"直播营销"})}}))},hideSharePanel:function(){this.setData({showPanel:!1})},hideSharePoster:function(){this.setData({showPoster:!1})},shareFriend:function(){this.triggerEvent("clickFriend")},getSharePoster:function(){console.log(this.data,"data"),this.data.posterTitle;var t=this.data,e=t.contentId,n=t.posterTitle,i=t.shareImg,o=t.cid,r=t.conferenceType,c=getCurrentPages(),g=c[c.length-1].route.split("/")[1];if("des"!==r)return a.jumpSharePoster({pageId:e||"",cover_img:i,title:n,type:g,data_id:e||"",cid:o||""});wx.navigateTo({url:"/enroll/pages/enroll/share/index?cid=".concat(o||"","&type=").concat(g,"&pageId=").concat(e||"","&data_id=","0","&cover_img=").concat(encodeURIComponent(i),"&title=").concat(encodeURIComponent(n))})},closeDialog:function(){this.setData({isShowDialog:!1})},wechatQrCodeLongpress:function(){a.QD.track("official_button_click",{name_of_page:a.QD.getLastNameOfPage(),ContentID:a.QD.getLastContentId(),menu:a.globalData.currentTab,button_name:"长按企微二维码",button_position:"底部"})}}});
},{isPage:false,isComponent:true,currentFile:'components/share-btn/index.js'});require("components/share-btn/index.js");