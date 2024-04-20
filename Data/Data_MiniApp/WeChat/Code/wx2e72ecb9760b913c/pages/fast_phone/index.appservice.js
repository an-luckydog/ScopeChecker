$gwx_XC_82=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_82 || [];
function gz$gwx_XC_82_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_82_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_82_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_82_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submitFrom'])
Z([3,'submit-btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_82_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_82_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_82=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_82=true;
var x=['./pages/fast_phone/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_82_1()
var eFW=_mz(z,'cy-userinfo',['bindloginevent',0,'class',1],[],e,s,gg)
_(r,eFW)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_82";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_82();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/fast_phone/index.wxml'] = [$gwx_XC_82, './pages/fast_phone/index.wxml'];else __wxAppCode__['pages/fast_phone/index.wxml'] = $gwx_XC_82( './pages/fast_phone/index.wxml' );
	;__wxRoute = "pages/fast_phone/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/fast_phone/index.js";define("pages/fast_phone/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var i=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,n=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),s=(n.param,n.getQueryStr),c=e.baseUrl+"/ask/clinic/fast_phone_order/introduction/?multi_clinic=True&is_json=1";Page({data:{clinicPop:!1,currentClinc:{},curIndex:"",phone:"",assessList:[{name:"188*******9",assess:"很满意",desc:"打字沟通总觉得很费劲，慢不说还说不清，电话服务还是挺方便的，有啥不清楚直接电话里几句说完，快速解决问题。给个好评",doctor:"郝振锋",hospital:"北京军区总医院"},{name:"乐乐妈",assess:"很满意",desc:"医助分配的专家很好，本来担心10分钟内说不完，直接买了2份，结果大夫很快就给了解决方案！还讲的特别仔细，根本就是多虑。",doctor:"侯彩英",hospital:"中国人民解放军第二炮兵总医院"},{name:"微信登录",assess:"很满意",desc:"提交订单不到两分钟就回过电话来了，太快了。医生解答的很清楚，5分钟完事。体验不错！",doctor:"丁海青",hospital:"山东省妇幼保健院"},{name:"彩虹",assess:"很满意",desc:"医生很专业，也很有耐心，给个好评",doctor:"时岩",hospital:"中国人民解放军第四军医大学西京医院"},{name:"138*******3很满意",assess:"很满意",desc:"我的情况比较复杂，很感谢张医生能耐着性子听我唠叨，不仅建议了解决办法，还不忘鼓励安慰，真的很感动。",doctor:"张焱",hospital:"北京军区总医院附属八一儿童医院"},{name:"182*******9",assess:"很满意",desc:"去个医院没几百下不来，还要各种排队，想想就心累。没想一个电话在家就把病问清了，真是便民服务。",doctor:"刘海防",hospital:"复旦大学附属华山医院北院"}],clinicList:[],serviceTime:""},onLoad:function(i){if(this.getClinicList(),i.scene){var e="?"+decodeURIComponent(i.scene),t=s("fv",e);["seo-m","seo-mip","seo-pc"].includes(t)&&this.h5ServicePoint(t)}},getClinicList:function(){var e=this;wx.request({url:c,header:{Cookie:i.globalData.sessionid},method:"GET",success:function(i){i.data.clinic_info_list?e.setData({clinicList:i.data.clinic_info_list,serviceTime:i.data.service_time||"8:30-22:00"}):wx.showToast({title:"科室数据加载错误",icon:"loading"})},error:function(i){console.log(i)}})},showClincList:function(){this.setData({clinicPop:!0})},hideClincList:function(i){i.target.id===i.currentTarget.id&&this.setData({clinicPop:!1})},chooseClinic:function(i){var e=i.currentTarget.dataset.index;this.setData({currentClinc:this.data.clinicList[e],curIndex:e,clinicPop:!1});var n={click_position:this.data.currentClinc.clinic_name,source:"wx_mini"};t("FastphoneDetailPage",n)},updatePhone:function(i){var e=i.detail.value;this.setData({phone:e})},submitFrom:function(){var i=this;if(this.checkInfo()){var e="nb"==this.data.currentClinc.clinic_no?"20分钟":"10分钟";wx.showModal({content:"通话时长："+e+"\r\n服务时间："+this.data.serviceTime+"\r\n接听手机号为"+this.data.phone,cancelText:"修改",success:function(e){e.confirm&&i.ajaxForm()}})}},ajaxForm:function(){var e={order_type:"fast_phone",order_desc:"",finish_success_url:"../pay_success/index",price:this.data.currentClinc.price,clinic_name:this.data.currentClinc.clinic_name,order_name:this.data.currentClinc.clinic_name+"极速电话服务",info_dict:{phone:this.data.phone,clinic_no:this.data.currentClinc.clinic_no}};i.globalData.order_data=e,wx.redirectTo({url:"../payment/index?mark=fast_phone&common_pay=true&clinic_name="+e.clinic_name+"&price="+e.price})},checkInfo:function(){var i="";if(this.data.currentClinc.clinic_no)if(this.data.phone){if(/^1[3|4|5|7|8]\d{9}$/.test(this.data.phone))return!0;i="请输入正确格式的手机号"}else i="请输入手机号";else i="请选择科室";return wx.showToast({title:i,icon:"loading"}),!1},h5ServicePoint:function(i){var e={source_type:i,order_type:"快捷电话",from_type:"中转页扫码"};t("WebServeiceScan",e),wx.setStorage({key:"authorizationPointData",data:e})},onShareAppMessage:function(){return{title:"推荐春雨医生「快接电话」：身体不适，一个电话就够了",imageUrl:"https://staff.chunyu.mobi/@/media/images/2018/10/11/5d58/9fc9bd741d89_w422_h338_.png"}}});
},{isPage:true,isComponent:true,currentFile:'pages/fast_phone/index.js'});require("pages/fast_phone/index.js");