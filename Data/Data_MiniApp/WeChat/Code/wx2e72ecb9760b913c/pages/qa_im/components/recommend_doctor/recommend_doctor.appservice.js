$gwx_XC_187=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_187 || [];
function gz$gwx_XC_187_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_187_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_187_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_187_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldRecommendDoctorsShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_187_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_187_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_187=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_187=true;
var x=['./pages/qa_im/components/recommend_doctor/recommend_doctor.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_187_1()
var t5JB=_v()
_(r,t5JB)
if(_oz(z,0,e,s,gg)){t5JB.wxVkey=1
}
t5JB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_187";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_187();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qa_im/components/recommend_doctor/recommend_doctor.wxml'] = [$gwx_XC_187, './pages/qa_im/components/recommend_doctor/recommend_doctor.wxml'];else __wxAppCode__['pages/qa_im/components/recommend_doctor/recommend_doctor.wxml'] = $gwx_XC_187( './pages/qa_im/components/recommend_doctor/recommend_doctor.wxml' );
	;__wxRoute = "pages/qa_im/components/recommend_doctor/recommend_doctor";__wxRouteBegin = true;__wxAppCurrentFile__="pages/qa_im/components/recommend_doctor/recommend_doctor.js";define("pages/qa_im/components/recommend_doctor/recommend_doctor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../BC983DD1829A079CDAFE55D6E84D7B70.js"),o="".concat(e.baseUrl,"/cooperation/wap/problem_recommend_volunteer_doctors/"),t=getApp();Component({properties:{problemId:{type:String,value:""},visitPageName:{type:String,value:""}},observers:{problemId:function(e){e&&this.getDoctorList()}},data:{recommendDoctors:[],shouldRecommendDoctorsShow:!1},methods:{getDoctorList:function(){var e=this;wx.request({url:o,data:{problem_id:this.data.problemId},header:{Cookie:t.globalData.sessionid},success:function(o){var t;Boolean(0===o.data.error_code&&o.data.recommend_doctors&&o.data.recommend_doctors.length)&&e.setData({shouldRecommendDoctorsShow:!0,recommendDoctors:o.data.recommend_doctors}),null!==(t=o.data.recommend_doctors)&&void 0!==t&&t.length||e.triggerEvent("has-doctors",{status:!1})}})},track:function(){t.sensors.track("AppClick",{app:"weixin_mini",click_position:"义诊推荐卡片",scene_type:"SEO输出",page_readable_name:"QA详情页"})}}});
},{isPage:false,isComponent:true,currentFile:'pages/qa_im/components/recommend_doctor/recommend_doctor.js'});require("pages/qa_im/components/recommend_doctor/recommend_doctor.js");