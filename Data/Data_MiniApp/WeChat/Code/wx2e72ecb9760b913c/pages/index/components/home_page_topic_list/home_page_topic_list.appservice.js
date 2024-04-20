$gwx_XC_135=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_135 || [];
function gz$gwx_XC_135_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_135_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_135_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_135_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'topic-list-section'])
Z([3,'changeTab'])
Z([3,'tab-bar'])
Z([[7],[3,'currentTabIndex']])
Z([[7],[3,'channelList']])
Z([3,'swiperTabChange'])
Z([3,'list-swiper-holder'])
Z(z[3])
Z([a,[3,'height:'],[[7],[3,'swiperHeight']],[3,'px']])
Z([3,'handleUpdateSwiperHeight'])
Z([3,'component-topic-list'])
Z([[7],[3,'visitPageName']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_135_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_135_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_135=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_135=true;
var x=['./pages/index/components/home_page_topic_list/home_page_topic_list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_135_1()
var oR8=_n('view')
_rz(z,oR8,'class',0,e,s,gg)
var xS8=_mz(z,'cy-tab',['bindselectedChangeEvent',1,'class',1,'selectedIndex',2,'tabList',3],[],e,s,gg)
_(oR8,xS8)
var oT8=_mz(z,'swiper',['bindchange',5,'class',1,'current',2,'style',3],[],e,s,gg)
var fU8=_mz(z,'topic-list',['bind:update-swiper-height',9,'class',1,'visitPageName',2],[],e,s,gg)
_(oT8,fU8)
_(oR8,oT8)
_(r,oR8)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_135";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_135();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/components/home_page_topic_list/home_page_topic_list.wxml'] = [$gwx_XC_135, './pages/index/components/home_page_topic_list/home_page_topic_list.wxml'];else __wxAppCode__['pages/index/components/home_page_topic_list/home_page_topic_list.wxml'] = $gwx_XC_135( './pages/index/components/home_page_topic_list/home_page_topic_list.wxml' );
	;__wxRoute = "pages/index/components/home_page_topic_list/home_page_topic_list";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/components/home_page_topic_list/home_page_topic_list.js";define("pages/index/components/home_page_topic_list/home_page_topic_list.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/defineProperty"),t=require("../../../../@babel/runtime/helpers/toConsumableArray"),a=require("../../../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl+"/cooperation/wap/health_news/",n=getApp();Component({data:{swiperHeight:0,currentTabIndex:0,channelList:[{channel_id:0,label:"热点",list:[],page:1},{channel_id:null,label:"专家科普",list:[],page:1},{channel_id:21,label:"生活",list:[],page:1},{channel_id:6,label:"母婴",list:[],page:1},{channel_id:18,label:"辟谣",list:[],page:1}],visitPageName:"首页-小程序"},methods:{getNewsList:function(){var i=this,s=this.data.currentTabIndex,l=this.data.channelList[s],r={from_wx_mini:1,page:l.page,partner:n.globalData.partner,release_time:"2020-04-22 10:30:00",channel_id:l.channel_id};1===s?this.selectComponent(".component-topic-list").loadMore():wx.request({url:a,data:r,header:{"Content-Type":"application/json",Cookie:n.globalData.sessionid},success:function(a){if(console.log(a),a.data&&a.data.content_list&&a.data.content_list.length){var n,r=[];r=1===l.page?t(a.data.content_list):[].concat(t(l.list),t(a.data.content_list));var c="channelList[".concat(s,"].list"),o="channelList[".concat(s,"].page");console.log(c),i.setData((e(n={},c,r),e(n,o,l.page+1),n)),i.setSwiperHeight(),console.log(i.data.channelList[i.data.currentTabIndex])}}})},changeTab:function(e){var t=Number(e.detail.index);if(t!==this.data.currentTabIndex){var a=this.data.channelList[t];if(this.setData({currentTabIndex:t}),1!==t)0===a.list.length?this.getNewsList():this.setSwiperHeight();else if(1===t){this.selectComponent(".component-topic-list").changeTab()}}},calcSwiperHeight:function(){return 105*this.data.channelList[this.data.currentTabIndex].list.length},setSwiperHeight:function(){this.setData({swiperHeight:this.calcSwiperHeight()})},handleUpdateSwiperHeight:function(e){console.log(e),this.setData({swiperHeight:e.detail.height})},swiperTabChange:function(e){this.changeTab({detail:{index:e.detail.current}})}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/components/home_page_topic_list/home_page_topic_list.js'});require("pages/index/components/home_page_topic_list/home_page_topic_list.js");