$gwx_XC_209=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_209 || [];
function gz$gwx_XC_209_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_209_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_209_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_209_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showVip']])
Z([[7],[3,'abstractList']])
Z([[7],[3,'benefitsCount']])
Z([[7],[3,'benefitsList']])
Z([3,'vipStatusChangeEvent'])
Z([[7],[3,'isVipSelected']])
Z([[7],[3,'vipInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_209_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_209_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_209=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_209=true;
var x=['./pages/service_update/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_209_1()
var lAXB=_v()
_(r,lAXB)
if(_oz(z,0,e,s,gg)){lAXB.wxVkey=1
var aBXB=_mz(z,'cy-vip',['abstractList',1,'benefitsCount',1,'benefitsList',2,'bind:vipStatusChange',3,'isVipSelected',4,'vipInfo',5],[],e,s,gg)
_(lAXB,aBXB)
}
lAXB.wxXCkey=1
lAXB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_209";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_209();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/service_update/index.wxml'] = [$gwx_XC_209, './pages/service_update/index.wxml'];else __wxAppCode__['pages/service_update/index.wxml'] = $gwx_XC_209( './pages/service_update/index.wxml' );
	;__wxRoute = "pages/service_update/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/service_update/index.js";define("pages/service_update/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),i=t.baseUrl+"/cooperation/wap/enable_free_problem/",a=t.baseUrl+"/events/activity/heart/re_collect/",r=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param;Page({data:{curUpgrade:{},qaUpgradeList:[],totalPrice:0,problemId:"",inSubmit:!1,showVip:!1,vipInfo:{},abstractList:[],benefitsCount:0,benefitsList:[],isVipSelected:!1},onLoad:function(e){var t=e.problem_id,i=void 0===t?"":t;this.setData({problemId:i});var a=!1,r={},o=[],n=[],c=0,d=!1,s={};try{var p=wx.getStorageSync("chunyu_vip_info");if(p&&(p=JSON.parse(p),Object.keys(p).length)){a=!0;var l=p,u=l.facade_scene,_=void 0===u?{}:u,v=l.vip_info,g=void 0===v?{}:v;r={title:g.title||"",desc:g.desc||"",price:g.price||0,priceDesc:g.price_desc||"¥".concat(g.price)},d=Boolean(g.is_selected);var b=_.abstract_list,f=void 0===b?[]:b,m=_.detail_list,h=void 0===m?[]:m,w=_.detail_count,S=void 0===w?0:w;o=f.map((function(e,t){return{no:e.no||"vip_".concat(t),benefitName:e.benefit_name||"",iconUrl:e.icon_url||"",benefitAbstract:e.benefit_abstract||"",tipDesc:e.tip_desc||""}})),n=h.map((function(e,t){return{idx:t,groupName:e.group_name||"",facadeList:(e.facade_list||[]).map((function(t,i){return{no:e.no||"vip_".concat(i),benefitName:t.benefit_name||"",iconUrl:t.icon_url||"",benefitAbstract:t.benefit_abstract||""}}))}})),c=S}}catch(e){console.log(e)}var x=[];try{var y=wx.getStorageSync("qa_upgrade");y&&(x=(y=JSON.parse(y)).map((function(e,t){return{idx:t,title:e.title||"",price:e.price||0,type:e.type||"",priceText:e.price_text||"¥".concat(e.price),desc:e.desc||""}})))}catch(e){console.log(e)}var U=this.data.totalPrice,q=void 0===U?0:U;d?q=r.price:x.length&&(q=x[0].price,s=x[0]),this.setData({showVip:a,vipInfo:r,abstractList:o,benefitsList:n,benefitsCount:c,isVipSelected:d,qaUpgradeList:x,curUpgrade:s,totalPrice:q})},upgradeChangeEvent:function(e){var t=this.data,i=t.curUpgrade,a=void 0===i?{}:i,r=t.isVipSelected,o=void 0!==r&&r,n=t.totalPrice,c=void 0===n?0:n,d=t.qaUpgradeList,s=void 0===d?[]:d,p=e.currentTarget.dataset.type,l=s.find((function(e){return e.type===p}))||{};a.type===p?(a={},c=0):(o=!1,c=(a=l).price),this.setData({curUpgrade:a,isVipSelected:o,totalPrice:c})},vipStatusChangeEvent:function(){var e=this.data,t=e.isVipSelected,i=void 0!==t&&t,a=e.curUpgrade,r=void 0===a?{}:a,o=e.totalPrice,n=void 0===o?0:o;(i=!i)?(r={},n=this.data.vipInfo.price):n=0,this.setData({isVipSelected:i,curUpgrade:r,totalPrice:n})},getQAUpgradeOrder:function(){var t=this.data,i=t.problemId,a=void 0===i?"":i,r=t.curUpgrade,o=void 0===r?{}:r,n=t.isVipSelected,c=void 0!==n&&n,d={from_wx_mini:1,partner:e.globalData.partner,finish_success_url:"../qa_im/index?partner=chunyu_wap_mini",finish_fail_url:"",order_name:"",order_type:"qa_upgrade"},s={problem_id:a,upgrade_type:o.type||"",vip_type:"gc",from_media_page:!0};c?(s.select_wx_vip=!0,s.upgrade_type="qc_hospital_upgrade"):s.select_wx_vip=!1,d.info_dict=s,e.globalData.order_data=d,wx.navigateTo({url:"/pages/payment/index?mark=qadoc&problemId=".concat(a)})},handleUpgradeService:function(){this.getQAUpgradeOrder()},enableFreeProblem:function(){var t=this.data,a=t.problemId,r=void 0===a?"":a,o=t.inSubmit,n=void 0!==o&&o,c={from_wx_mini:1,partner:e.globalData.partner,problem_id:r};if(!n){wx.showToast({title:"正在提交"});var d=this;this.data.inSubmit=!0,wx.request({url:i,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},data:c,complete:function(){d.data.inSubmit=!1},success:function(e){var t=e.data,i=void 0===t?{}:t;1==i.error?wx.showToast({icon:"none",title:i.error_msg||"问题创建失败"}):(d.setDoubleHeart(r),setTimeout((function(){wx.redirectTo({url:"/pages/qa_im/index?problem_id="+r})}),500))}})}},setDoubleHeart:function(t){var i=wx.getStorageSync("double_heart_problem_id");i&&wx.request({url:a,data:r({collect_problem_id:i,created_problem_id:t||""}),method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},success:function(e){e.data.success?(console.log("二次送爱心成功"),wx.removeStorageSync("double_heart_problem_id")):console.log(e.data)},error:function(e){console.log(e.data)}})}});
},{isPage:true,isComponent:true,currentFile:'pages/service_update/index.js'});require("pages/service_update/index.js");