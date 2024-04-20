$gwx_XC_125=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_125 || [];
function gz$gwx_XC_125_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_125_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_125_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_125_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'profileList']],[3,'length']])
Z([3,'container'])
Z(z[0])
Z([[2,'==='],[[7],[3,'finishButton']],[1,'hide']])
Z([3,'sumbitQuestion'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_125_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_125_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_125=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_125=true;
var x=['./pages/health_record_certification/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_125_1()
var c34=_v()
_(r,c34)
if(_oz(z,0,e,s,gg)){c34.wxVkey=1
var o44=_n('view')
_rz(z,o44,'class',1,e,s,gg)
var l54=_v()
_(o44,l54)
if(_oz(z,2,e,s,gg)){l54.wxVkey=1
}
var a64=_v()
_(o44,a64)
if(_oz(z,3,e,s,gg)){a64.wxVkey=1
}
var t74=_mz(z,'form',['reportSubmit',-1,'bindsubmit',4],[],e,s,gg)
var e84=_n('bottom-button')
_(t74,e84)
_(o44,t74)
l54.wxXCkey=1
a64.wxXCkey=1
_(c34,o44)
}
c34.wxXCkey=1
c34.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_125";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_125();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_record_certification/index.wxml'] = [$gwx_XC_125, './pages/health_record_certification/index.wxml'];else __wxAppCode__['pages/health_record_certification/index.wxml'] = $gwx_XC_125( './pages/health_record_certification/index.wxml' );
	;__wxRoute = "pages/health_record_certification/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_record_certification/index.js";define("pages/health_record_certification/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),t=getApp(),i=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),o=i.baseUrl+"/ehr/patient_profile/ehr_list/",s=i.baseUrl+"/ehr/patient_profile/delete/";Page({data:{profileList:[],chooseIndex:0,age:"",sex:"",disabled:!1,realNameCompleted:!1,modifyButton:"show",finishButton:"hide",finishBtn:"finish",itemChoose:"show",itemDelete:"hide"},onShow:function(){this.getProfileList()},getProfileList:function(){var e=this;wx.showLoading(),wx.request({url:o,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},data:{scene_in:"register_apply"},method:"GET",success:function(t){var i=t.data,o=i.error_code,s=void 0===o?1:o,r=i.error_msg,a=void 0===r?"获取档案列表失败":r,n=i.profile_list,d=void 0===n?[]:n;0===s?(wx.hideLoading(),d.length?e.setData({profileList:d,chooseIndex:0,age:d[0]&&d[0].age,sex:d[0]&&d[0].sex}):(e.isFirstCreatedEhr=!0,wx.setStorageSync("isFirstCreatedEhr",JSON.stringify(e.isFirstCreatedEhr)),e.redirectAddRecord())):(wx.hideLoading(),wx.showToast({title:a,icon:"none"}))}})},redirectAddRecord:function(){var e="navigateTo";this.isFirstCreatedEhr&&(e="redirectTo"),wx[e]({url:"../health_record_certification_edit/index?pageType=add"})},switchRecord:function(e){this.setData({chooseIndex:e.currentTarget.dataset.index})},modifyRecord:function(){this.setData({disabled:!0,modifyButton:"hide",finishButton:"show",finishBtn:"un-finish",itemChoose:"hide",itemDelete:"show"})},finishRecord:function(){this.setData({disabled:!1,modifyButton:"show",finishButton:"hide",finishBtn:"finish",itemChoose:"show",itemDelete:"hide"})},deleteRecord:function(e){var i=this.data.profileList,o=void 0===i?[]:i,r=e.currentTarget.dataset,a=r.id,n=r.name;if(o.length<=1)return wx.showToast({title:"至少保留一条档案",icon:"none"}),!1;wx.showModal({title:"提示",content:"是否删除"+n+"的档案",success:function(e){e.confirm&&wx.request({url:s,data:{id:a,scene_in:"register_apply"},header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},method:"POST",success:function(e){var t=e.data,i=t.error_code,o=void 0===i?1:i,s=t.error_msg,r=void 0===s?"删除档案失败":s;0===o?wx.showToast({title:"档案删除成功",success:function(){wx.redirectTo({url:"/pages/health_record_certification/index"})}}):wx.showToast({title:r,icon:"none"})}})}})},sumbitQuestion:function(){var t=this.data.profileList[this.data.chooseIndex]||{},i=t.real_name_completed,o=void 0===i||i,s=t.id;o?(wx.setStorageSync("selectHealthRecordInfo",JSON.stringify(e({},t))),wx.navigateBack({delta:1})):wx.navigateTo({url:"/pages/health_record_certification_edit/index?ehrId=".concat(s,"&pageType=edit&isNeedRealName=true")})}});
},{isPage:true,isComponent:true,currentFile:'pages/health_record_certification/index.js'});require("pages/health_record_certification/index.js");