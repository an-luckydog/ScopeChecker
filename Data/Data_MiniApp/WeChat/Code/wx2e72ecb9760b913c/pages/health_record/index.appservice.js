$gwx_XC_122=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_122 || [];
function gz$gwx_XC_122_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_122_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_122_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_122_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'!='],[[7],[3,'record_list']],[1,'']])
Z([3,'sumbitQuestion'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_122_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_122_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_122=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_122=true;
var x=['./pages/health_record/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_122_1()
var lQ4=_n('view')
_rz(z,lQ4,'class',0,e,s,gg)
var aR4=_v()
_(lQ4,aR4)
if(_oz(z,1,e,s,gg)){aR4.wxVkey=1
}
var tS4=_mz(z,'form',['reportSubmit',-1,'bindsubmit',2],[],e,s,gg)
var eT4=_n('bottom-button')
_(tS4,eT4)
_(lQ4,tS4)
aR4.wxXCkey=1
_(r,lQ4)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_122";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_122();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health_record/index.wxml'] = [$gwx_XC_122, './pages/health_record/index.wxml'];else __wxAppCode__['pages/health_record/index.wxml'] = $gwx_XC_122( './pages/health_record/index.wxml' );
	;__wxRoute = "pages/health_record/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/health_record/index.js";define("pages/health_record/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/typeof"),t=getApp(),i=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),o=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,a=i.baseUrl+"/api/patient_profile/",r=i.baseUrl+"/cooperation/wap/create_free_problem/",s=i.baseUrl+"/cooperation/wap/create_problem_content/",n=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint;Page({data:{record_list:"",choose_index:0,age:"",sex:"",modify_button:"show",finish_button:"hide",finish_btn:"finish",is_show:"show",item_choose:"show",item_delete:"hide",page_type:"",index:0,show_tips:!1,is_newer_task:0},onLoad:function(e){var t=this.data.index;"question"==e.type&&this.setData({choose_index:t,page_type:"question"}),e.is_newer_task&&(this.data.is_newer_task=e.is_newer_task)},onShow:function(){var e=this,i=e.data.index,o=e.data.page_type;wx.request({url:a,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},method:"GET",success:function(t){var a=t.data;a.length?"question"==o?e.setData({record_list:a,choose_index:i,age:a[0].age,sex:a[0].sex,page_type:"question"}):e.setData({record_list:a,is_show:"hide",item_choose:"hide"}):e.redirectAddRecord()}})},redirectAddRecord:function(){var e=this.data.page_type;wx.navigateTo({url:"../health_record_add/index?page_type="+e})},switchRecord:function(e){var t=this,i=!0;wx.getStorage({key:"question",success:function(o){o.data.is_paid&&(i=!1),t.setData({choose_index:e.currentTarget.dataset.index,age:e.currentTarget.dataset.age,sex:e.currentTarget.dataset.sex,show_tips:i})}})},modifyRecord:function(){this.setData({modify_button:"hide",finish_button:"show",finish_btn:"un_finish",item_choose:"hide",item_delete:"show"})},finishRecord:function(){"question"==this.data.page_type?this.setData({modify_button:"show",finish_button:"hide",finish_btn:"finish",item_choose:"show",item_delete:"hide"}):this.setData({modify_button:"show",finish_button:"hide",item_delete:"hide"})},deleteRecord:function(e){var i=this.data.page_type,o=e.currentTarget.dataset.id,r=e.currentTarget.dataset.name;if(this.data.record_list.length<=1)return wx.showToast({title:"至少保留一条档案",icon:"loading"}),!1;wx.showModal({title:"提示",content:"是否删除"+r+"的档案",success:function(e){e.confirm&&wx.request({url:a+"?id="+o,header:{"Content-Type":"application/json",Cookie:t.globalData.sessionid},method:"DELETE",success:function(e){e.data.error_msg?wx.showToast({title:e.data.error_msg,icon:"loading"}):wx.showToast({title:"档案删除成功",success:function(){wx.redirectTo({url:"../health_record/index?type="+i})}})}})}})},sumbitQuestion:function(i){var a=this,n=a.data.sex,d=a.data.age,_=a.data.record_list[a.data.choose_index],c={type:"patient_meta",age:d,sex:n,ehr_id:"object"===e(_)&&null!==_?_.id:""};if(!d)return wx.showToast({title:"请完善健康档案(年龄)",icon:"none"}),!1;n||wx.showToast({title:"请完善健康档案(性别)",icon:"none"}),wx.getStorage({key:"question",success:function(e){var i=e.data,n=JSON.parse(i.content),d=i.problem_id,_=i.from_wx_mini,l=i.is_paid,h=i.emergentMark,u=i.emergencyClinicNo,p=i.is_newer_task,m=i.inviter_id,g=t.globalData,f=g.fromOneYuan,w=g.is_new_user;n.push(c);var x={from_wx_mini:_,content:JSON.stringify(n),problem_id:d,partner:t.globalData.partner,inviter_id:m||"",is_newer_task:p,ask_famous_doc:f&&w?1:0};h&&(x.clinic_no=u),wx.request({url:l?s:r,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:t.globalData.sessionid},data:o(x),success:function(e){if(0==(e=e.data).error){if(wx.removeStorageSync("inviter_id"),h)return void a.emergentSubmit(e);l?wx.redirectTo({url:"../qa_im/index?problem_id="+d}):wx.redirectTo({url:"../rec_doc_list/index?problem_id="+e.problem_id})}else wx.showToast({title:e.error_msg,icon:"loading"})}})}})},emergentSubmit:function(e){var i=e.problem_id,o={from_wx_mini:1,finish_success_url:"../fast_qa/index?problem_id="+i,finish_fail_url:"",order_desc:"",order_name:"",order_type:"emergency_graph",info_dict:{emergency_graph_from_type:"h5_homepage_entrance",select_free:!1,select_emergency_graph:!0,doctors:[],problem_id:i},partner:t.globalData.partner};t.globalData.order_data=o,wx.redirectTo({url:"../payment/index?mark=emergency&problemId="+i})},clickEvent:function(){n("AppClick",{click_position:"select_file_page_open_giveqa"})}});
},{isPage:true,isComponent:true,currentFile:'pages/health_record/index.js'});require("pages/health_record/index.js");