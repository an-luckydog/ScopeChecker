$gwx_XC_54=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_54 || [];
function gz$gwx_XC_54_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_54_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'confirm'])
Z([[7],[3,'btnText']])
Z([[7],[3,'modalShow']])
Z([[7],[3,'title']])
Z([3,'content'])
Z([[7],[3,'icon']])
Z([3,'知道了'])
Z([[7],[3,'noChanceTip']])
Z([3,'抽奖机会已用完'])
Z([3,'formConfirm'])
Z([1,false])
Z([3,'提交'])
Z([[7],[3,'modalFormShow']])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_54_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_54=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_54=true;
var x=['./pages/big_wheel/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_54_1()
var bCM=_mz(z,'cy-modal',['bind:confirmEvent',0,'btnText',1,'show',1,'title',2],[],e,s,gg)
var oDM=_n('view')
_rz(z,oDM,'slot',4,e,s,gg)
var xEM=_v()
_(oDM,xEM)
if(_oz(z,5,e,s,gg)){xEM.wxVkey=1
}
xEM.wxXCkey=1
_(bCM,oDM)
_(r,bCM)
var oFM=_mz(z,'cy-modal',['btnText',6,'show',1,'title',2],[],e,s,gg)
_(r,oFM)
var fGM=_mz(z,'cy-modal',['bind:confirmEvent',9,'btnClose',1,'btnText',2,'show',3,'title',4],[],e,s,gg)
_(r,fGM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_54";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_54();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/big_wheel/index.wxml'] = [$gwx_XC_54, './pages/big_wheel/index.wxml'];else __wxAppCode__['pages/big_wheel/index.wxml'] = $gwx_XC_54( './pages/big_wheel/index.wxml' );
	;__wxRoute = "pages/big_wheel/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/big_wheel/index.js";define("pages/big_wheel/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,a=require("../../840A1D64829A079CE26C7563276C7B70.js").doPoint,s=!0,n=e.baseUrl+"/events/lottery/weixin_mini/lottery_page/",o=e.baseUrl+"/events/lottery/lottery_result/",r=e.baseUrl+"/events/newer_task/record_form_id/",u=e.baseUrl+"/events/lottery/record_address_info/",d="chunyu_wap_mini";Page({data:{modalShow:!1,modalFormShow:!1,lottery_image:"",prize_num:0,animationData:null,result_num:0,prise_type:"",title:"",icon:"",content:"",times_left:0,add_submit_url:"",receiver:"",address:"",cellphone:"",noChanceTip:!1,btnText:"确定",rotate_num:1},onShow:function(){var e=this;t.globalData.appIsLogin.then((function(){e.init()}))},init:function(){this.initWheel();var t=wx.createAnimation({duration:5e3,timingFunction:"ease"});this.aniData=t},receiverInput:function(t){this.setData({receiver:t.detail.value})},cellphoneInput:function(t){this.setData({cellphone:t.detail.value})},addressInput:function(t){this.setData({address:t.detail.value})},initWheel:function(){var e=this;wx.request({url:n,header:{Cookie:t.globalData.sessionid},data:{partner:d},success:function(t){var i=t.data;i.activity_id?e.setData({prize_num:i.prize_num,lottery_image:i.icon,activity_id:i.activity_id,times_left:i.times_left||0,user_id:i.user_id}):wx.showToast({icon:"none",title:"数据加载失败，请退出重试",duration:3e3})},error:function(t){wx.showToast({icon:"none",title:"数据加载失败，请退出重试",duration:3e3})}})},getResult:function(){var e=this;s=!1,wx.request({url:o,header:{Cookie:t.globalData.sessionid},data:{partner:d,activity_id:this.data.activity_id},success:function(t){var i=t.data;i.success?(e.setData({prize_user_id:i.prize_user_id,title:i.title||"",prise_type:i.type||"",content:i.content||"",icon:i.icon||"",add_submit_url:i.url||"",result_num:i.num||0,times_left:i.times_left||0,btnText:"goods"===i.type?"领取":"确定"}),e.rotate()):wx.showToast({icon:"none",title:i.error_msg||"抽奖请求失败，请重试",duration:3e3})},error:function(){wx.showToast({icon:"none",title:"抽奖请求失败，请重试",duration:3e3})}})},startRollTap:function(){s&&(this.data.times_left<=0?this.setData({noChanceTip:!0}):(a("wxmini_luckydraw"),this.getResult()))},rotate:function(){var t=this,e=this.aniData,i=parseInt(360/this.data.prize_num*this.data.result_num);e.rotate(3600*this.data.rotate_num-i).step(),this.setData({animationData:e.export()}),this.data.rotate_num++,setTimeout((function(){t.setData({modalShow:!0}),s=!0}),5e3)},confirm:function(){"goods"==this.data.prise_type&&this.setData({modalFormShow:!0})},formConfirm:function(){this.data.receiver&&this.data.address&&this.data.cellphone?/^1[3|4|5|7|8]\d{9}$/.test(this.data.cellphone)?this.submitForm():wx.showToast({title:"手机号不正确",icon:"none"}):wx.showToast({title:"数据不能为空",icon:"none"})},submitForm:function(){var e=this;wx.request({url:u,method:"POST",header:{Cookie:t.globalData.sessionid},data:i({partner:d,prize_user_id:e.data.prize_user_id,cellphone:e.data.cellphone,address:e.data.address,receiver:e.data.receiver}),success:function(t){var i=t.data;i.success?(wx.showToast({title:"提交成功"}),e.setData({modalFormShow:!1})):wx.showToast({title:i.error_msg,icon:"none"})},error:function(){wx.showToast({icon:"none",title:"抽奖请求失败，请重试",duration:3e3})}})},hideTip:function(){this.setData({noChanceTip:!1})},formSubmit:function(t){t.detail&&t.detail.formId&&this.setData({form_id:t.detail.formId})},onShareAppMessage:function(){var e=this;return{title:"这个小程序你迟早用得上，赶快收藏吧。",path:"/pages/index/index?user_id="+e.data.user_id,imageUrl:"https://static.chunyuyisheng.com/@/media/images/2018/04/18/6d12/c0aa79f332a0_w696_h556_.png",success:function(a){e.data.form_id&&wx.request({url:r,method:"POST",header:{Cookie:t.globalData.sessionid},data:i({partner:d,form_id:e.data.form_id}),success:function(t){wx.showToast({title:"转发成功"})},error:function(){}})},fail:function(t){}}}});
},{isPage:true,isComponent:true,currentFile:'pages/big_wheel/index.js'});require("pages/big_wheel/index.js");