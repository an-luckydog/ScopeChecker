$gwx_XC_95=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_95 || [];
function gz$gwx_XC_95_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'show_full']])
Z([3,'qaInfo.benefactor_info'])
Z(z[2])
Z(z[2])
Z([[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'user_type']],[1,'buy_user']])
Z([3,'is-benefactor'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'i']],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'t']]])
Z([[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'t']])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'u']],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'c']]])
Z([[6],[[6],[[7],[3,'qaInfo']],[3,'status_info']],[3,'extra_desc']])
Z([[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'f']])
Z([[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'user_type']],[1,'other']])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'u']],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'f']]],[[2,'=='],[[6],[[7],[3,'qaInfo']],[3,'service_status']],[1,'c']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_95=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_95=true;
var x=['./pages/give_qa_detail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_95_1()
var f12=_n('view')
_rz(z,f12,'class',0,e,s,gg)
var c22=_v()
_(f12,c22)
if(_oz(z,1,e,s,gg)){c22.wxVkey=1
var o42=_v()
_(c22,o42)
if(_oz(z,2,e,s,gg)){o42.wxVkey=1
}
o42.wxXCkey=1
}
else{c22.wxVkey=2
var c52=_v()
_(c22,c52)
if(_oz(z,3,e,s,gg)){c52.wxVkey=1
}
c52.wxXCkey=1
}
var h32=_v()
_(f12,h32)
if(_oz(z,4,e,s,gg)){h32.wxVkey=1
var o62=_v()
_(h32,o62)
if(_oz(z,5,e,s,gg)){o62.wxVkey=1
var l72=_n('view')
_rz(z,l72,'class',6,e,s,gg)
var a82=_v()
_(l72,a82)
if(_oz(z,7,e,s,gg)){a82.wxVkey=1
var t92=_v()
_(a82,t92)
if(_oz(z,8,e,s,gg)){t92.wxVkey=1
}
t92.wxXCkey=1
}
else if(_oz(z,9,e,s,gg)){a82.wxVkey=2
var e02=_v()
_(a82,e02)
if(_oz(z,10,e,s,gg)){e02.wxVkey=1
}
e02.wxXCkey=1
}
else if(_oz(z,11,e,s,gg)){a82.wxVkey=3
}
a82.wxXCkey=1
_(o62,l72)
}
else if(_oz(z,12,e,s,gg)){o62.wxVkey=2
var bA3=_v()
_(o62,bA3)
if(_oz(z,13,e,s,gg)){bA3.wxVkey=1
}
bA3.wxXCkey=1
}
o62.wxXCkey=1
}
c22.wxXCkey=1
h32.wxXCkey=1
_(r,f12)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_95";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_95();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/give_qa_detail/index.wxml'] = [$gwx_XC_95, './pages/give_qa_detail/index.wxml'];else __wxAppCode__['pages/give_qa_detail/index.wxml'] = $gwx_XC_95( './pages/give_qa_detail/index.wxml' );
	;__wxRoute = "pages/give_qa_detail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/give_qa_detail/index.js";define("pages/give_qa_detail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,t=a.baseUrl+"/cooperation/wap/refund_common_service/",s=a.baseUrl+"/events/activity/give_qa/info/";Page({data:{show_full:!0,qaInfo:{},service_id:""},onLoad:function(a){var i=this,t=a.service_id;i.service_id=t,i.setData({service_id:t}),e.globalData.appIsLogin.then((function(){i.getQaInfo(t)}))},getQaInfo:function(a){var i=this;wx.request({url:s,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},data:{partner:e.globalData.partner,service_id:a,from_wx_mini:1},success:function(e){var a=e.data;if(a.success){var t=a.user_type,s=a.service_status,r=a.specific_service_id;"use_user"==t&&wx.redirectTo({url:"../qa_im/index?problem_id="+r}),"other"==t&&("u"==s||"f"==s||"c"==s?i.setData({show_full:!1}):wx.redirectTo({url:"../give_qa_quiz/index?service_id="+i.data.service_id})),i.setData({problem_id:r,qaInfo:e.data})}else wx.showToast({title:e.data.error||"加载失败，请稍后重试"})},fail:function(e){wx.showToast({title:e.data.error||"加载失败，请稍后重试"})}})},applyRefund:function(){var a=this.data.service_id;wx.showModal({title:"确定申请退款？",content:"已花费的金额会立即返回您的账户",confirmColor:"#1B91E0",cancelColor:"#1B91E0",success:function(s){if(1==s.confirm){var r={service_id:a,partner:e.globalData.partner,from_wx_mini:1,is_json:1};wx.request({url:t,header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},method:"POST",data:i(r),success:function(e){e.data.success?wx.redirectTo({url:"../give_qa_detail/index?service_id="+a+"&from_type=refund"}):wx.showToast({title:e.data.error_msg||"申请退款失败",icon:"loading"})},fail:function(){wx.showToast({title:s.data.error_msg||"申请退款失败",icon:"loading"})}})}}})},onShareAppMessage:function(){return{title:"送你一份专家问诊服务，打开直接和医生沟通",desc:"春雨医生+",imageUrl:"https://static.chunyuyisheng.com/@/media/images/2018/04/27/0abb/a3a8707a1209_w696_h556_.png",path:"/pages/give_qa_detail/index?from_type=share&service_id="+this.data.service_id,success:function(e){},fail:function(e){}}}});
},{isPage:true,isComponent:true,currentFile:'pages/give_qa_detail/index.js'});require("pages/give_qa_detail/index.js");