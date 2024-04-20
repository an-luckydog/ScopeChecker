$gwx_XC_196=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_196 || [];
function gz$gwx_XC_196_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_196_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_196_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_196_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'show_doc_list']])
Z([3,'doc-list'])
Z([[7],[3,'doc_list']])
Z([3,'id'])
Z([3,'selectDoctor'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z(z[6])
Z([3,'to_doc_refund'])
Z([[2,'!'],[[7],[3,'isFromWaitingRecommend']]])
Z([[2,'!'],[[7],[3,'isLoading']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_196_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_196_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_196=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_196=true;
var x=['./pages/re_select_doc/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_196_1()
var bAUB=_n('view')
_rz(z,bAUB,'class',0,e,s,gg)
var oBUB=_v()
_(bAUB,oBUB)
if(_oz(z,1,e,s,gg)){oBUB.wxVkey=1
var xCUB=_n('view')
_rz(z,xCUB,'class',2,e,s,gg)
var fEUB=_v()
_(xCUB,fEUB)
var cFUB=function(oHUB,hGUB,cIUB,gg){
var lKUB=_mz(z,'doctor-service-card',['bind:click-on-doctor-service',5,'data-index',1,'doctorDetail',2,'listIndex',3,'scene',4],[],oHUB,hGUB,gg)
_(cIUB,lKUB)
return cIUB
}
fEUB.wxXCkey=4
_2z(z,3,cFUB,e,s,gg,fEUB,'item','index','id')
var oDUB=_v()
_(xCUB,oDUB)
if(_oz(z,10,e,s,gg)){oDUB.wxVkey=1
}
oDUB.wxXCkey=1
_(oBUB,xCUB)
}
else if(_oz(z,11,e,s,gg)){oBUB.wxVkey=2
}
oBUB.wxXCkey=1
oBUB.wxXCkey=3
_(r,bAUB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_196";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_196();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/re_select_doc/index.wxml'] = [$gwx_XC_196, './pages/re_select_doc/index.wxml'];else __wxAppCode__['pages/re_select_doc/index.wxml'] = $gwx_XC_196( './pages/re_select_doc/index.wxml' );
	;__wxRoute = "pages/re_select_doc/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/re_select_doc/index.js";define("pages/re_select_doc/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),o=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,i=o.baseUrl+"/cooperation/wap/get_reselect_recommend_doctor_list/",a=o.baseUrl+"/cooperation/wap/refund_paid_problem/",r=o.baseUrl+"/cooperation/wap/re_select_doctor/";Page({data:{doc_list:"",selected:"https://static.chunyuyisheng.com/@/chunyu_mini/icon_selected.png",no_selected:"https://static.chunyuyisheng.com/@/chunyu_mini/icon_noselected.png",select_index:-1,original_price:0,problem_id:"",partner:"",doctor_id:"",show_doc_list:"",show_text:"重新提问",originalProblemId:"",isFromWaitingRecommend:!1,fromType:"",isLoading:!1},onLoad:function(o){var t=this,a=this,r=o.problem_id,n=e.globalData.partner,s=o.from_type;this.setData({originalProblemId:r,isFromWaitingRecommend:"waiting_recommend"===s,fromType:s,isLoading:!0}),wx.showLoading({title:"加载中"});var d={from_wx_mini:1,problem_id:r,partner:n,is_json:1,recommend_type:a.data.fromType};wx.request({url:i,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},method:"GET",data:d,success:function(e){if(a.setData({isLoading:!1}),wx.hideLoading(),(e=e.data)&&e.doctors.length){var o=e.problem_info.price,t=e.doctors[0].id;a.setData({doc_list:e.doctors,show_doc_list:e.doctors,original_price:o,problem_id:r,partner:n,doctor_id:t,recommend_id:e.recommend_id})}else a.setData({problem_id:r,partner:n})},fail:function(){t.setData({isLoading:!1}),wx.hideLoading()}})},selectDoctor:function(e){var o=e.detail.doctorDetail.is_selected?parseInt(e.currentTarget.dataset.index):-1,t=e.detail.doctorDetail.id;this.data.doc_list.forEach((function(e){console.log(e.id,t),e.is_selected=e.id===t})),this.setData({select_index:o,doctor_id:t,doc_list:this.data.doc_list})},refundDoctor:function(){var o=this.data.problem_id,i=this.data.partner;wx.showModal({title:"确定申请退款？",content:"已花费的金额会立即返回您的账户",confirmColor:"#1B91E0",cancelColor:"#1B91E0",success:function(r){if(1==r.confirm){var n={problem_id:o,partner:i,from_wx_mini:1,is_json:1};wx.request({url:a,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},method:"POST",data:t(n),success:function(e){0===e.data.error?wx.redirectTo({url:"/module_a/pages/re_buy_page/re_buy_page?problem_id=".concat(o,"&partner=").concat(i,"&scene=to_doc_refund")}):1===e.data.error&&wx.showToast({title:e.data.error_msg||"申请退款失败",icon:"none"})},fail:function(){wx.showToast({title:"申请退款失败",icon:"loading"})}})}}})},askAgain:function(){var o=this;if(this.data.select_index<0)wx.showToast({title:"请选择要重新提问的医生",icon:"none"});else{var i=this.data.partner,a={pre_problem_id:this.data.problem_id,partner:i,doctor_id:this.data.doctor_id,from_wx_mini:1,from_type:this.data.fromType,type:this.data.fromType,cy_page_from:this.data.fromType};try{var n={app:"weixin_mini",click_position:"重新提问",page_readable_name:"重选医生",list_rank:"".concat(this.data.select_index+1),doctor_name:this.data.doc_list.filter((function(e){return e.id===o.data.doctor_id}))[0].name,from_type:this.data.fromType,cy_page_from:this.data.fromType,recommend_id:this.data.recommend_id};console.log(n),e.sensors.track("AppClick",n)}catch(e){console.log(e)}wx.request({url:r,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},method:"POST",data:t(a),success:function(t){if(0!==t.data.error)e.sensors.track("ActivityPOPView",{pop_title:"重选过程首问医生回复"}),wx.showModal({content:t.data.error_msg,showCancel:!1,confirmText:"好的",confirmColor:"#1B91E0",success:function(e){e.confirm&&wx.navigateTo({url:"/pages/qa_im/index?problem_id=".concat(o.data.originalProblemId)})}});else if(0===t.data.error){var i=t.data.problem_id;wx.switchTab({url:"/pages/all_service/index",complete:function(){setTimeout((function(){wx.navigateTo({url:"../qa_im/index?problem_id="+i})}),1e3)}})}},fail:function(){wx.showToast({title:"提问失败",icon:"loading"})}})}}});
},{isPage:true,isComponent:true,currentFile:'pages/re_select_doc/index.js'});require("pages/re_select_doc/index.js");