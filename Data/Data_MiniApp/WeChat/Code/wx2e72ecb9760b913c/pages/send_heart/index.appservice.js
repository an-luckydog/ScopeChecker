$gwx_XC_206=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_206 || [];
function gz$gwx_XC_206_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_206_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_206_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_206_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goToPay'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_206_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_206_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_206=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_206=true;
var x=['./pages/send_heart/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_206_1()
var o2WB=_n('cy-userinfo')
_rz(z,o2WB,'bindloginevent',0,e,s,gg)
_(r,o2WB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_206";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_206();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/send_heart/index.wxml'] = [$gwx_XC_206, './pages/send_heart/index.wxml'];else __wxAppCode__['pages/send_heart/index.wxml'] = $gwx_XC_206( './pages/send_heart/index.wxml' );
	;__wxRoute = "pages/send_heart/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/send_heart/index.js";define("pages/send_heart/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js");Page({data:{display:"hide",tips_display:"hide",selected:"",selected_text:"",more_text:"更多",thanks_value:"",more_num:"金额",num:[{tag:2,price:"2元",title:"一点心意",is_selected:"0"},{tag:8,price:"8元",title:"白衣天使",is_selected:"0"},{tag:12,price:"12元",title:"医德高尚",is_selected:"0"},{tag:36,price:"36元",title:"德医双馨",is_selected:"0"}],text_val:"",doctor_name:"",doctor_id:"",doctor_img:"",selected_num:"",reward_list:[],heart_type:"doctor",group_name:"",group_id:"",page:1},selectNum:function(t){var e=this.data.num,a=t.target.dataset.tag,o=t.target.dataset.title;e.forEach((function(t){t.is_selected="0"})),this.setData({num:e,selected:"",selected_text:""}),e.forEach((function(t){t.tag==a&&(t.is_selected="1")})),this.setData({num:e,text_val:o,thanks_value:"",selected_num:a,more_text:"更多",more_num:"金额"})},moreNum:function(t){var e=this.data.num,a=t.currentTarget.dataset.title;console.log(t),e.forEach((function(t){t.is_selected="0"})),this.setData({num:e,display:"show",selected:"selected",selected_text:"selected__text",text_val:a})},tipsConcel:function(){this.setData({display:"hide"}),console.log(this.data.display)},getNum:function(t){var e=t.detail.value;console.log(e),e<37||e>288?this.setData({selected_num:e,tips_display:"show"}):this.setData({selected_num:e,tips_display:"hide"})},tipsOk:function(){var t=this.data.selected_num;if(console.log(t),t<37||t>288)return this.setData({tips_display:"show"}),!1;this.setData({tips_display:"hide",display:"hide",more_text:t,more_num:"修改"}),console.log(t)},getText:function(t){var e=t.detail.value;console.log(e),this.setData({text_val:e}),console.log(this.data.text_val)},onLoad:function(e){console.log("当前参数：",e);this.setData({doctor_name:e.name||e.doctor_name,doctor_id:e.id||e.doctor_id,doctor_img:e.img||e.doctor_img,heart_type:e.heart_type||"",group_id:e.group_id||"",group_name:e.group_name||"","urlData.from_page":e.from_page});var a=this.data.doctor_id;this.getRewardList(a),this.getDoctorDetail(a),"counselor"===this.data.heart_type&&t.sensors.track("AdviserMind",{app:"wx_mini",group_id:this.data.group_id,group_name:this.data.group_name,doctor_id:this.data.doctor_id})},getDoctorDetail:function(a){var o=this;wx.request({url:e.baseUrl+"/cooperation/wap/doctor_detail_info/",data:{from_wx_mini:1,doctor_id:a,partner:t.globalData.partner,is_json:1},method:"GET",header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},success:function(t){console.log(t),o.setData({doctor_name:t.data.doctor_detail.doc_name,doctor_img:t.data.doctor_detail.doc_image})}})},onReachBottom:function(){this.setData({page:this.data.page+1}),this.getRewardList(this.data.doctor_id,this.data.page)},inputHandle:function(t){this.setData({text_val:t.detail.value}),t.detail.cursor>=500&&wx.showToast({title:"送心意留言不能超过500字",icon:"none",duration:1500})},getRewardList:function(a){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,s=i.data.reward_list,r=null;wx.request({url:e.baseUrl+"/api/v5/reward_doctor/"+a+"/reward_list?version=8.3.2",data:{from_wx_mini:1,partner:t.globalData.partner,page:o},method:"GET",header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},success:function(t){console.log(t.data.reward_list),r=s.concat(t.data.reward_list),i.setData({reward_list:r})}})},goToPay:function(){var e=this.data.text_val,a=this.data.selected_num,o=this.data.doctor_id,i=this.data.doctor_name,s=this.data.doctor_img,r=this.data.heart_type,d=Number(this.data.group_id);if(""==a)return wx.showToast({title:"请输入金额",icon:"loading",duration:2e3}),!1;var n={from_wx_mini:1,finish_success_url:"",finish_fail_url:"",order_name:i+"-送心意",order_type:"reward_doctor",partner:t.globalData.partner,info_dict:{doctor_id:o,price:parseInt(a),reward_words:e}};"counselor"===r?(n.info_dict.group_id=d,n.info_dict.source="wx_group",t.globalData.heart_type="counselor"):t.globalData.heart_type="doctor",t.globalData.order_data=n,console.log(t.globalData,"支付参数"),wx.redirectTo({url:"../payment/index?mark=sendheart&price="+a+"&name="+i+"&id="+o+"&group_id="+d+"&doctor_img="+s})}});
},{isPage:true,isComponent:true,currentFile:'pages/send_heart/index.js'});require("pages/send_heart/index.js");