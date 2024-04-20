$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'showConsult']],[[2,'!='],[[7],[3,'layoutStyle']],[1,'1']]])
Z([3,'goForm'])
Z([3,'consult-btn'])
Z([[7],[3,'labelText']])
Z([[2,'&&'],[[7],[3,'showConsult']],[[2,'=='],[[7],[3,'layoutStyle']],[1,'1']]])
Z([[2,'&&'],[[7],[3,'showConsult']],[[2,'==='],[[7],[3,'type']],[1,2]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./components/consult-btn/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var eTB=_v()
_(r,eTB)
if(_oz(z,0,e,s,gg)){eTB.wxVkey=1
var xWB=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,3,e,s,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
_(eTB,xWB)
}
var bUB=_v()
_(r,bUB)
if(_oz(z,4,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(r,oVB)
if(_oz(z,5,e,s,gg)){oVB.wxVkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
oVB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/consult-btn/index.wxml'] = [$gwx_XC_7, './components/consult-btn/index.wxml'];else __wxAppCode__['components/consult-btn/index.wxml'] = $gwx_XC_7( './components/consult-btn/index.wxml' );
	;__wxRoute = "components/consult-btn/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/consult-btn/index.js";define("components/consult-btn/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/phoneLogin.js"),e=getApp();Component({properties:{industryId:{type:String,value:""},showConsult:{type:Boolean,value:!0},CampaignID:{type:String,value:""},formId:{type:String,value:""},type:{type:Number,value:1},wechatQrCode:{type:String,value:""},wechatTitle:{type:String,value:""},icon:{type:String,value:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/img-icon/consult-icon.png",observer:function(t){this.initIcon()}},label:{type:String,value:"",observer:function(t){this.initLabel()}},consultDetail:{type:Object},layoutStyle:{type:String,value:""}},data:{isShowDialog:!1,iconUrl:"",labelText:"",useUin:0},lifetimes:{attached:function(){this.initIcon(),this.initLabel(),this.setData({useUin:wx.getStorageSync("useUin")})}},methods:{initIcon:function(){var t=this.data.icon;if(t)return this.setData({iconUrl:t});this.setData({iconUrl:"https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/img-icon/consult-icon.png"})},initLabel:function(){var t=this.data.label;if(t)return this.setData({labelText:t})},goForm:function(){var t=this.data,a=t.type,n=t.consultDetail;if(0!=wx.getStorageSync("useUin"))return e.QD.track("official_button_click",{name_of_page:e.QD.getLastNameOfPage(),ContentID:e.QD.getLastContentId(),button_name:this.data.labelText,menu:e.globalData.currentTab,CampaignID:e.QD.currentParams.CampaignID||"",NameOfCampaign:e.QD.currentParams.NameOfCampaign||"",button_position:"悬浮"}),2===a?this.setData({isShowDialog:!0}):3===a?e.tool.redirect("OUTLINK",{jump_type:2,outUrl:n.page_url}):4===a?e.tool.redirect("MINIAPP",{appId:n.app_id,pageUrl:n.page_url}):void wx.navigateTo({url:"/pages/form/index/index?tplId=".concat(this.data.formId,"&CampaignID=").concat(this.data.CampaignID)});wx.navigateTo({url:"/pages/login/index"})},closeDialog:function(){this.setData({isShowDialog:!1})},catchtouchmove:function(){},wechatQrCodeLongpress:function(){e.QD.track("official_button_click",{name_of_page:e.QD.getLastNameOfPage(),ContentID:e.QD.getLastContentId(),menu:e.globalData.currentTab,button_name:"长按企微二维码",button_position:"悬浮"})},getPhoneNumber:function(e){var a=this;(0,t.phoneLogin)(e,(function(t){a.setData({useUin:t})}))}}});
},{isPage:false,isComponent:true,currentFile:'components/consult-btn/index.js'});require("components/consult-btn/index.js");