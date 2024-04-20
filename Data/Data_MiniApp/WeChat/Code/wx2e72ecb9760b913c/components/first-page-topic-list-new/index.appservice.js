$gwx_XC_32=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_32 || [];
function gz$gwx_XC_32_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'topic-holder'])
Z([[7],[3,'topicList']])
Z([3,'id'])
Z([3,'mainPage'])
Z([[7],[3,'item']])
Z([[7],[3,'isLoading']])
Z([[2,'!'],[[6],[[7],[3,'topicList']],[3,'length']]])
Z([3,'暂无资讯'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_32=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_32=true;
var x=['./components/first-page-topic-list-new/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_32_1()
var hIF=_n('view')
_rz(z,hIF,'class',0,e,s,gg)
var oJF=_v()
_(hIF,oJF)
var cKF=function(lMF,oLF,aNF,gg){
var ePF=_mz(z,'single-topic',['fromType',3,'topicData',1],[],lMF,oLF,gg)
_(aNF,ePF)
return aNF
}
oJF.wxXCkey=4
_2z(z,1,cKF,e,s,gg,oJF,'item','index','id')
var bQF=_mz(z,'cy-loading',['loading',5,'noResult',1,'noResultTip',2],[],e,s,gg)
_(hIF,bQF)
_(r,hIF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_32";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_32();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/first-page-topic-list-new/index.wxml'] = [$gwx_XC_32, './components/first-page-topic-list-new/index.wxml'];else __wxAppCode__['components/first-page-topic-list-new/index.wxml'] = $gwx_XC_32( './components/first-page-topic-list-new/index.wxml' );
	;__wxRoute = "components/first-page-topic-list-new/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/first-page-topic-list-new/index.js";define("components/first-page-topic-list-new/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/cooperation/wap/topic_check_list/",e=getApp();Component({properties:{visitPageName:{type:String,value:""}},data:{currentPage:1,currentType:"0",isLoading:!1,topicList:[],hasContent:!1,contentHeight:0,typeMap:{1:"图文",2:"语音",4:"简答"}},methods:{triggerFetch:function(){this.fetchList(this.data.currentPage+1,this.data.currentType,!0)},_baseRequest:function(e,i){var n=this;return new Promise((function(o,c){if(n.data.isLoading)return c();n.setData({isLoading:!0});var a={page:e||1};["1","2","4"].indexOf(i)>-1&&(a.content_type=i),console.log("page",a.page,"type",a.content_type),wx.request({url:t,method:"GET",data:a,success:function(t){return o(t)},fail:function(){return c()},complete:function(){n.setData({isLoading:!1}),wx.nextTick((function(){n.getContentHeight()}))}})}))},getContentHeight:function(){var t=this,e=this.createSelectorQuery().select(".topic-list-component");e&&e.boundingClientRect((function(e){t.setData({contentHeight:e.height}),t.triggerEvent("listupdated",{height:t.data.contentHeight})})).exec()},getContentHeightNew:function(){console.log(11),this.triggerEvent("update-swiper-height",{height:160*this.data.topicList.length})},processRawData:function(t,e){var i=t.data.topic_check_list;this.setData({hasContent:i&&i.length}),i.forEach((function(t){t.id=t.topic_info.id,2===t.topic_info.content_type?(t.topic_info.topicContentTypeText="语音",t.topic_info.icon="https://resourced.chunyu.mobi/Uu4AAABvB-lIl3oW-3647a560-6a40-4edb-814d-8a53b76f7862_w24_h24_.png"):1===t.topic_info.content_type?(t.topic_info.topicContentTypeText="图文",t.topic_info.icon="https://resourced.chunyu.mobi/mQ4AAADvBelIl3oW-307f030f-71ad-43fd-a190-02682fbebdc8_w24_h24_.png"):(t.topic_info.topicContentTypeText="简答",t.topic_info.icon="https://resourced.chunyu.mobi/daAAAAAtEulIl3oW-352d9ebb-b901-4920-adbc-9f685c3993ab_w24_h24_.png")}));var n=i;e&&(n=this.data.topicList.concat(i)),this.setData({topicList:n})},fetchList:function(t,e,i){var n=this;this._baseRequest(t,e).then((function(t){t.data&&(wx.hideLoading(),n.processRawData(t,i),n.getContentHeightNew(),i&&t.data.topic_check_list&&t.data.topic_check_list.length&&n.setData({currentPage:n.data.currentPage+1}))})).catch((function(){wx.hideLoading()}))},getAllTopic:function(){this.setData({currentType:"0"}),this.fetchList(1,"0"),this.triggerEvent("tofaketabbar",{type:"0"});try{e.sensors.track("AppClick",{app:"weixin_mini",click_position:"首页-内容分类",click_position_value:"全部"})}catch(t){console.log(t)}},handleButtonTap:function(t,i){var n;n=i?t:t.currentTarget.dataset.type;try{e.sensors.track("AppClick",{app:"weixin_mini",click_position:"首页-内容分类",click_position_value:this.data.typeMap[n]})}catch(t){console.log(t)}n!==String(this.data.currentType)&&(this.setData({currentPage:1,currentType:n,isFirstPage:!0}),this.fetchList(1,n))},loadMore:function(){this.triggerFetch()},changeTab:function(){0===this.data.topicList.length&&this.getAllTopic()}}});
},{isPage:false,isComponent:true,currentFile:'components/first-page-topic-list-new/index.js'});require("components/first-page-topic-list-new/index.js");