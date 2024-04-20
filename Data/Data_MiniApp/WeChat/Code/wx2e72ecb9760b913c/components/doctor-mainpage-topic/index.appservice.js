$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_29 || [];
function gz$gwx_XC_29_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'topicList']],[3,'length']])
Z([[7],[3,'topicList']])
Z([3,'id'])
Z([3,'trackEvent'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'jump_url']])
Z([[6],[[7],[3,'item']],[3,'is_top']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./components/doctor-mainpage-topic/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
var tIE=_v()
_(r,tIE)
if(_oz(z,0,e,s,gg)){tIE.wxVkey=1
var eJE=_v()
_(tIE,eJE)
var bKE=function(xME,oLE,oNE,gg){
var cPE=_mz(z,'navigator',['bind:tap',3,'data-index',1,'url',2],[],xME,oLE,gg)
var hQE=_v()
_(cPE,hQE)
if(_oz(z,6,xME,oLE,gg)){hQE.wxVkey=1
}
hQE.wxXCkey=1
_(oNE,cPE)
return oNE
}
eJE.wxXCkey=2
_2z(z,1,bKE,e,s,gg,eJE,'item','index','id')
}
tIE.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_29";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/doctor-mainpage-topic/index.wxml'] = [$gwx_XC_29, './components/doctor-mainpage-topic/index.wxml'];else __wxAppCode__['components/doctor-mainpage-topic/index.wxml'] = $gwx_XC_29( './components/doctor-mainpage-topic/index.wxml' );
	;__wxRoute = "components/doctor-mainpage-topic/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/doctor-mainpage-topic/index.js";define("components/doctor-mainpage-topic/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),e="".concat(t.baseUrl,"/cooperation/wap/doctor_homepage_topic/list");Component({properties:{doctorId:{type:String,value:""},visitPageName:{type:String,value:""}},data:{topicList:[]},observers:{doctorId:function(t){t&&this.getTopicList()}},methods:{getTopicList:function(){var t=this;wx.request({url:e,data:{doctor_id:this.data.doctorId},success:function(e){if(e.data&&0===e.data.error_code){var o=e.data.topic_list;if(o&&o.length){var i=o.filter((function(t,e){return e<=3}));i.forEach((function(t){2===t.topic_content_type?(t.topicContentTypeText="语音",t.icon="https://resourced.chunyu.mobi/Uu4AAABvB-lIl3oW-3647a560-6a40-4edb-814d-8a53b76f7862_w24_h24_.png"):1===t.topic_content_type?(t.topicContentTypeText="图文",t.icon="https://resourced.chunyu.mobi/mQ4AAADvBelIl3oW-307f030f-71ad-43fd-a190-02682fbebdc8_w24_h24_.png"):(t.topicContentTypeText="简答",t.icon="https://resourced.chunyu.mobi/daAAAAAtEulIl3oW-352d9ebb-b901-4920-adbc-9f685c3993ab_w24_h24_.png")})),t.setData({topicList:i}),console.log(t.data.topicList)}}},complete:function(){console.log("complete")}})},trackEvent:function(t){var e=t.currentTarget.dataset.index;if(this.data.topicList[e]){var o={app:"weixin_mini",click_position:"专家科普卡片",page_readable_name:"医生主页",click_position_value:this.data.topicList[e].title};getApp().sensors.track("AppClick",o)}},trackMoreList:function(){getApp().sensors.track("AppClick",{app:"weixin_mini",click_position:"专家科普查看全部",page_readable_name:"医生主页"})}}});
},{isPage:false,isComponent:true,currentFile:'components/doctor-mainpage-topic/index.js'});require("components/doctor-mainpage-topic/index.js");