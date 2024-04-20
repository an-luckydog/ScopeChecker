$gwx_XC_117=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_117 || [];
function gz$gwx_XC_117_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_117_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_117_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_117_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'pageTitle']])
Z([a,[3,'page c-page '],[[2,'?:'],[[7],[3,'isShowTopMsg']],[1,'top-msg-page'],[1,'']]])
Z([[7],[3,'ready']])
Z([[7],[3,'pageAllList']])
Z([3,'index'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'code']],[1,'POLYMER']])
Z([3,'cShareImgChange'])
Z([3,'tabChange'])
Z([[7],[3,'cid']])
Z([[6],[[7],[3,'item']],[3,'jhd']])
Z([[7],[3,'id']])
Z([[7],[3,'style']])
Z([3,'product'])
Z([1,true])
Z([[7],[3,'item']])
Z(z[10])
Z(z[12])
Z([[6],[[7],[3,'consultDetail']],[3,'CampaignID']])
Z([3,'onShareClick'])
Z([[7],[3,'consultDetail']])
Z(z[10])
Z([[6],[[7],[3,'consultDetail']],[3,'tplId']])
Z([[6],[[7],[3,'consultDetail']],[3,'icon']])
Z([[6],[[7],[3,'consultDetail']],[3,'title']])
Z([3,'outer'])
Z(z[0])
Z([[6],[[7],[3,'consultDetail']],[3,'enable_status']])
Z([[6],[[7],[3,'consultDetail']],[3,'consultType']])
Z([[6],[[7],[3,'consultDetail']],[3,'wechatQrCode']])
Z([[6],[[7],[3,'consultDetail']],[3,'wechatTitle']])
Z([[2,'?:'],[[6],[[7],[3,'consultDetail']],[3,'enable_status']],[1,109],[1,0]])
Z([[6],[[7],[3,'sharePosterInfo']],[3,'id']])
Z([3,'shareMemberPick'])
Z([3,'hideSharePanel'])
Z([3,'shareInfoUpdate'])
Z([3,'showTopMsgHandler'])
Z([3,'switchSharePick'])
Z([[7],[3,'sharePosterInfo']])
Z([[7],[3,'shareActiveInfo']])
Z([[7],[3,'shareCardId']])
Z([[7],[3,'showPanel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_117_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_117_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_117=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_117=true;
var x=['./pages/product/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_117_1()
var xOIB=_n('header')
_rz(z,xOIB,'title',0,e,s,gg)
_(r,xOIB)
var oPIB=_n('view')
_rz(z,oPIB,'class',1,e,s,gg)
var fQIB=_v()
_(oPIB,fQIB)
if(_oz(z,2,e,s,gg)){fQIB.wxVkey=1
var cRIB=_v()
_(fQIB,cRIB)
var hSIB=function(cUIB,oTIB,oVIB,gg){
var aXIB=_v()
_(oVIB,aXIB)
if(_oz(z,5,cUIB,oTIB,gg)){aXIB.wxVkey=1
var tYIB=_mz(z,'juhe-tabs',['bindcShareImgChange',6,'bindtabChange',1,'cid',2,'list',3,'op_id',4,'styleCategortry',5,'type',6],[],cUIB,oTIB,gg)
_(aXIB,tYIB)
}
else{aXIB.wxVkey=2
var eZIB=_mz(z,'juhe-item',['change',13,'item',1,'op_id',2,'type',3],[],cUIB,oTIB,gg)
_(aXIB,eZIB)
}
aXIB.wxXCkey=1
aXIB.wxXCkey=3
aXIB.wxXCkey=3
return oVIB
}
cRIB.wxXCkey=4
_2z(z,3,hSIB,e,s,gg,cRIB,'item','index','index')
var b1IB=_mz(z,'share-btn',['CampaignID',17,'bindshowShare',1,'consultDetail',2,'contentId',3,'formId',4,'icon',5,'label',6,'mode',7,'posterTitle',8,'showConsult',9,'type',10,'wechatQrCode',11,'wechatTitle',12],[],e,s,gg)
_(fQIB,b1IB)
var o2IB=_n('home-tips')
_rz(z,o2IB,'bottom',30,e,s,gg)
_(fQIB,o2IB)
}
else{fQIB.wxVkey=2
var x3IB=_n('loading')
_(fQIB,x3IB)
}
fQIB.wxXCkey=1
fQIB.wxXCkey=3
fQIB.wxXCkey=3
_(r,oPIB)
var oNIB=_v()
_(r,oNIB)
if(_oz(z,31,e,s,gg)){oNIB.wxVkey=1
var o4IB=_mz(z,'share-pannel',['bind:shareMemberPick',32,'bindhideSharePanel',1,'bindshareInfo',2,'bindshowTopMsg',3,'bindswitchSharePick',4,'info',5,'shareActiveInfo',6,'shareCardId',7,'showPanel',8],[],e,s,gg)
_(oNIB,o4IB)
}
oNIB.wxXCkey=1
oNIB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_117";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_117();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/product/index.wxml'] = [$gwx_XC_117, './pages/product/index.wxml'];else __wxAppCode__['pages/product/index.wxml'] = $gwx_XC_117( './pages/product/index.wxml' );
	;__wxRoute = "pages/product/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/product/index.js";define("pages/product/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{id:null,cid:"",cName:"",cShareImg:"",pageTitle:"产品",mp_shareID:null,ready:!0,listBanner:[],popularProducts:[{title:"云会议"},{title:"会议 Rooms"},{title:"会议室 连接器"},{title:"开放平台"}],customCases:[],recommendGoods:[],industryActivities:[],industryNews:[],industryVideo:[],pageAllList:[],share_img:"",init:!1,consultDetail:{},style:1,showPanel:!1,shareCardId:"",shareCardInfo:{},isShareCard:!0,isShowTopMsg:!1,isShareMyInfo:!0},onLoad:function(a){var e=this;if(console.log("juhe options",a),a.id){this.data.id=a.id;var n=a.employeePosition,o=a.wechatId,i=a.wechatworkId,s=a.employeePhone;t.QD.setSalesShareCardParams(a),this.setData({id:a.id,cid:a.cid,shareCardId:a.shareCardId,shareActiveInfo:{employeePosition:n,wechatId:o,wechatworkId:i,employeePhone:s}}),t.loginCallback().then((function(t){e.getData(a.id),e.getDataProduct(a.id),e.consultDetail("juhe",a.id)}))}else if(a.scene){var r=decodeURIComponent(a.scene);t.loginCallback().then((function(){t.API.uuidToParams(r,"product").then((function(a){if(console.log("uuidToParams res",a),0==a.code&&a.content.params){var n=a.content.paramsObj,o=n.employeePosition,i=n.wechatId,s=n.wechatworkId,r=n.employeePhone;t.QD.setSalesShareCardParams(a.content.paramsObj),e.setData({id:a.content.paramsObj.id,cid:a.content.paramsObj.cid,shareCardId:a.content.paramsObj.shareCardId,shareActiveInfo:{employeePosition:o,wechatId:i,wechatworkId:s,employeePhone:r}}),e.getData(a.content.paramsObj.id),e.getDataProduct(a.content.paramsObj.id),e.consultDetail("juhe",a.content.paramsObj.id),a.content.paramsObj.shareId&&(e.data.mp_shareID=a.content.paramsObj.shareId)}})).catch((function(t){console.log("uuidToParams err",t)}))}))}else wx.showToast({title:"数据加载失败",icon:"none"})},onReady:function(){},onShow:function(){if(this.data.init){var a={ContentID:"juhe_product".concat(this.data.id),menu:t.globalData.currentTab,name_of_page:this.data.pageTitle};this.data.mp_shareID&&(a.mp_shareID=this.data.mp_shareID),t.QD.track("contentView",a)}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){var a=this.data,e=a.cid,n=a.id,o=a.pageTitle,i=a.cName,s=e?"juhe_product".concat(n,"_polymer").concat(e):"juhe_product".concat(n),r=e?"".concat(o,"-").concat(i):o;return t.QD.action("shareContent",{ContentID:s,menu:t.globalData.currentTab,name_of_page:r}),t.tool.onShareAppMessage({path:"/pages/product/index",title:"腾讯产业互联网干货库 - ".concat(this.data.pageTitle),imageUrl:this.data.cShareImg||this.data.shareImg||this.data.share_img||"",shareCardInfo:this.shareCardInfo,id:this.data.id,isShareCard:this.isShareCard,isShareMyInfo:this.data.isShareMyInfo,cid:e})},getDataProduct:function(t){},getData:function(a){var e=this;t.API.juheListSort("product",a).then((function(n){if(console.log(n),0==n.code&&n.content.info&&n.content.info.length>0){n.content.jHTitle&&e.setData({pageTitle:n.content.jHTitle}),n.content.share_img&&(e.data.share_img=n.content.share_img),n.content.info.forEach((function(t){"BANNER"==t.code&&e.setData({listBanner:t.jhd}),"CASES"==t.code&&e.setData({customCases:t.jhd}),"TOOLS"==t.code&&e.setData({recommendGoods:t.jhd}),"SIGNUP"==t.code&&e.setData({industryActivities:t.jhd}),"NEWS"==t.code&&e.setData({industryNews:t.jhd}),"VIDEO"==t.code&&e.setData({industryVideo:t.jhd})})),e.setData({pageAllList:n.content.info,style:n.content.style,init:!0,sharePosterInfo:{id:a,data_id:a,title:n.content.name,banner:n.content.share_img}});var o={ContentID:"juhe_product".concat(a),menu:t.globalData.currentTab,name_of_page:n.content.jHTitle};e.data.mp_shareID&&(o.mp_shareID=e.data.mp_shareID),t.QD.track("contentView",o)}else wx.showToast({title:"数据加载失败",icon:"none"})}))},consultDetail:function(a,e){var n=this;t.API.consultDetail(a,e).then((function(t){0==t.code&&n.setData({consultDetail:t.content})}))},onShareClick:function(t){this.setData({showPanel:!0})},tabChange:function(t){this.setData(t.detail)},cShareImgChange:function(t){var a=t.detail.cShareImg;this.setData({cShareImg:a})},hideSharePanel:function(){this.setData({showPanel:!1})},shareInfoUpdate:function(t){this.shareCardInfo=t.detail,this.isShareCard=!0,this.setData({shareCardInfo:t.detail,isShareCard:!0})},switchSharePick:function(t){var a=t.detail,e=a.activeInfo,n=a.isShareCard;this.shareCardInfo=e,this.isShareCard=n,this.setData({shareCardInfo:e,isShareCard:n})},showTopMsgHandler:function(t){this.setData({isShowTopMsg:t.detail})},shareMemberPick:function(t){console.log("🚀 ~ file: index.js ~ line 654 ~ shareMemberPick ~ e",t),this.setData({isShareMyInfo:t.detail})}});
},{isPage:true,isComponent:true,currentFile:'pages/product/index.js'});require("pages/product/index.js");