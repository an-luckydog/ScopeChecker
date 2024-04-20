$gwx_XC_97=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_97 || [];
function gz$gwx_XC_97_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_97_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_97_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_97_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'qaInfo.benefactor_info'])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_97_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_97_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_97=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_97=true;
var x=['./pages/give_qa_quiz/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_97_1()
var oD3=_n('view')
_rz(z,oD3,'class',0,e,s,gg)
var fE3=_v()
_(oD3,fE3)
if(_oz(z,1,e,s,gg)){fE3.wxVkey=1
}
var cF3=_v()
_(oD3,cF3)
if(_oz(z,2,e,s,gg)){cF3.wxVkey=1
}
fE3.wxXCkey=1
cF3.wxXCkey=1
_(r,oD3)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_97";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_97();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/give_qa_quiz/index.wxml'] = [$gwx_XC_97, './pages/give_qa_quiz/index.wxml'];else __wxAppCode__['pages/give_qa_quiz/index.wxml'] = $gwx_XC_97( './pages/give_qa_quiz/index.wxml' );
	;__wxRoute = "pages/give_qa_quiz/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/give_qa_quiz/index.js";define("pages/give_qa_quiz/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";for(var e=getApp(),a=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),t=require("../../92BC1755829A079CF4DA7F52C55D7B70.js").param,s=a.baseUrl+"/events/activity/give_qa/info/",i=a.baseUrl+"/events/activity/give_qa/user_ask/",n=[],o=1;o<=24;o++)n.push(o+"个月");for(var c=3;c<=125;c++)n.push(c+"岁");Page({data:{content:"",sex:"",age:"",show_full:!0,male_checked:!1,female_checked:!1,ages:n,value:[41],service_id:"",qaInfo:{}},onLoad:function(a){var t=this,s=a.service_id;t.service_id=s,t.setData({service_id:s}),e.globalData.appIsLogin.then((function(){t.getQaInfo(s)}))},getQaInfo:function(a){var t=this;wx.request({url:s,header:{"Content-Type":"application/json",Cookie:e.globalData.sessionid},data:{partner:e.globalData.partner,service_id:a,from_wx_mini:1},success:function(e){e.data.success?t.setData({qaInfo:e.data}):wx.showToast({title:e.data.error||"加载失败，请稍后重试",icon:"none"})},fail:function(e){wx.showToast({title:e.data.error||"加载失败，请稍后重试",icon:"none"})}})},updateText:function(e){var a=e.detail.value;this.setData({content:a})},changeSex:function(e){var a=e.currentTarget.dataset.sex,t=this.data.male_checked,s=this.data.female_checked;"male"==a?t?this.setData({sex:"",male_checked:!1,female_checked:!1}):this.setData({sex:"男",male_checked:!0,female_checked:!1}):s?this.setData({sex:"",male_checked:!1,female_checked:!1}):this.setData({sex:"女",male_checked:!1,female_checked:!0})},bindChange:function(e){var a=e.detail.value;this.setData({value:a,age:n[a]})},checkParams:function(){var e=this.data.content.length,a=this.data.sex,t=this.data.age;return e<10||e>500?(wx.showToast({title:"字数为10-500字",icon:"none"}),!1):a?!!t||(wx.showToast({title:"请选择年龄",icon:"none"}),!1):(wx.showToast({title:"请选择性别",icon:"none"}),!1)},submitProblem:function(){var a=this.data,s=[];if(this.checkParams()){var n={type:"text",text:a.content},o={type:"patient_meta",sex:a.sex,age:a.age};s.push(n),s.push(o),wx.request({url:i,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e.globalData.sessionid},data:t({partner:e.globalData.partner,service_id:this.data.service_id,content:JSON.stringify(s)}),success:function(e){e.data.success?wx.redirectTo({url:"../qa_im/index?problem_id="+e.data.problem_id}):wx.showToast({title:e.data.error_msg||"提问失败",icon:"none"})},fail:function(e){wx.showToast({title:e.data.error_msg||"提问失败",icon:"none"})}})}}});
},{isPage:true,isComponent:true,currentFile:'pages/give_qa_quiz/index.js'});require("pages/give_qa_quiz/index.js");