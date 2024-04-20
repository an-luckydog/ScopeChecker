$gwx_XC_78=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_78 || [];
function gz$gwx_XC_78_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_78_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_78_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_78_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_78_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_78_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_78=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_78=true;
var x=['./pages/doctor_topic_list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_78_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_78";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_78();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/doctor_topic_list/index.wxml'] = [$gwx_XC_78, './pages/doctor_topic_list/index.wxml'];else __wxAppCode__['pages/doctor_topic_list/index.wxml'] = $gwx_XC_78( './pages/doctor_topic_list/index.wxml' );
	;__wxRoute = "pages/doctor_topic_list/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/doctor_topic_list/index.js";define("pages/doctor_topic_list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../3B123513829A079C5D745D1477BC7B70.js")),e=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js"),a="".concat(e.baseUrl,"/cooperation/wap/doctor_homepage_topic/list");Page({data:{doctorId:"",topicList:[],currentType:"0",currentPage:1,isLoadingMore:!1,hasContent:!0,isFirstPage:!0,visitPageName:"话题列表页",fromVisitPage:""},onLoad:function(t){this.setData({doctorId:t.doc_id,fromVisitPage:t.from_visit_page||""}),this.getAllTopic()},onShow:function(){(0,t.default)({fromName:this.data.fromVisitPage,name:this.data.visitPageName,extraInfo:{}})},onReachBottom:function(){this.setData({isLoadingMore:!0,isFirstPage:!1}),this.fetchList(this.data.currentPage+1,this.data.currentType,!0)},_request:function(t,e){var i=this,o={doctor_id:this.data.doctorId,page:t,count_per_page:20};return e&&"0"!==e&&(o.topic_content_type=e),console.log("page",o.page,"type",o.topic_content_type),wx.showLoading({title:"加载中",mask:!0}),new Promise((function(t,e){wx.request({url:a,data:o,success:function(e){return t(e)},fail:function(t){return e(t)},complete:function(){wx.hideLoading(),i.setData({isLoadingMore:!1})}})}))},processRawData:function(t,e){var a=t.data.topic_list;this.setData({hasContent:a&&a.length}),a.splice(19),a.forEach((function(t){2===t.topic_content_type?(t.topicContentTypeText="语音",t.icon="https://resourced.chunyu.mobi/Uu4AAABvB-lIl3oW-3647a560-6a40-4edb-814d-8a53b76f7862_w24_h24_.png"):1===t.topic_content_type?(t.topicContentTypeText="图文",t.icon="https://resourced.chunyu.mobi/mQ4AAADvBelIl3oW-307f030f-71ad-43fd-a190-02682fbebdc8_w24_h24_.png"):(t.topicContentTypeText="简答",t.icon="https://resourced.chunyu.mobi/daAAAAAtEulIl3oW-352d9ebb-b901-4920-adbc-9f685c3993ab_w24_h24_.png")}));var i=a;e&&(i=this.data.topicList.concat(a)),this.setData({topicList:i})},getAllTopic:function(){var t=this;this.setData({currentType:"0"}),this._request(1).then((function(e){wx.hideLoading(),e.data&&0===e.data.error_code&&t.processRawData(e)}))},fetchList:function(t,e,a){var i=this;t||(t=1),this._request(t,e).then((function(t){wx.hideLoading(),t.data&&0===t.data.error_code&&(i.processRawData(t,a),a&&t.data.topic_list&&t.data.topic_list.length&&i.setData({currentPage:i.data.currentPage+1}))}))},handleButtonTap:function(t){var e=t.currentTarget.dataset.type;e!==String(this.data.currentType)&&(this.setData({currentPage:1,currentType:e,isFirstPage:!0}),this.fetchList(1,e),wx.pageScrollTo({scrollTop:0,duration:600}))}});
},{isPage:true,isComponent:true,currentFile:'pages/doctor_topic_list/index.js'});require("pages/doctor_topic_list/index.js");