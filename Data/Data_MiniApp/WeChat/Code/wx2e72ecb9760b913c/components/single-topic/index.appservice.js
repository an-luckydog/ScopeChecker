$gwx_XC_40=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_40 || [];
function gz$gwx_XC_40_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_40_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_40_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_40_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'track'])
Z([[7],[3,'navigateType']])
Z([[6],[[6],[[7],[3,'processedData']],[3,'topic_info']],[3,'jump_url']])
Z([3,'detail-holder'])
Z([[6],[[6],[[7],[3,'processedData']],[3,'doctor_info']],[3,'tag']])
Z([[2,'!=='],[[7],[3,'fromType']],[1,'qa_im']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_40_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_40_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_40=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_40=true;
var x=['./components/single-topic/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_40_1()
var hAG=_mz(z,'navigator',['bindtap',0,'openType',1,'url',1],[],e,s,gg)
var oBG=_n('view')
_rz(z,oBG,'class',3,e,s,gg)
var cCG=_v()
_(oBG,cCG)
if(_oz(z,4,e,s,gg)){cCG.wxVkey=1
}
var oDG=_v()
_(oBG,oDG)
if(_oz(z,5,e,s,gg)){oDG.wxVkey=1
}
cCG.wxXCkey=1
oDG.wxXCkey=1
_(hAG,oBG)
_(r,hAG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_40";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_40();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/single-topic/index.wxml'] = [$gwx_XC_40, './components/single-topic/index.wxml'];else __wxAppCode__['components/single-topic/index.wxml'] = $gwx_XC_40( './components/single-topic/index.wxml' );
	;__wxRoute = "components/single-topic/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/single-topic/index.js";define("components/single-topic/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{topicData:{type:Object,value:{}},navigateType:{type:String,value:"navigate"},fromType:{type:String,value:""}},data:{processedData:{},currentPage:[],currentType:0},observers:{topicData:function(t){t&&Object.keys(t).length&&this.setIcon()}},methods:{setIcon:function(){var t=this.data.topicData;2===t.topic_info.content_type?(t.topic_info.topicContentTypeText="语音",t.topic_info.icon="https://resourced.chunyu.mobi/Uu4AAABvB-lIl3oW-3647a560-6a40-4edb-814d-8a53b76f7862_w24_h24_.png"):1===this.data.topicData.topic_info.content_type?(t.topic_info.topicContentTypeText="图文",t.topic_info.icon="https://resourced.chunyu.mobi/mQ4AAADvBelIl3oW-307f030f-71ad-43fd-a190-02682fbebdc8_w24_h24_.png"):(t.topic_info.topicContentTypeText="简答",t.topic_info.icon="https://resourced.chunyu.mobi/daAAAAAtEulIl3oW-352d9ebb-b901-4920-adbc-9f685c3993ab_w24_h24_.png"),this.setData({processedData:t})},track:function(){"mainPage"===this.data.fromType&&t.sensors.track("AppClick",{app:"weixin_mini",click_position:"seo-首页内容",source_type:this.data.processedData.topic_info.topicContentTypeText})}}});
},{isPage:false,isComponent:true,currentFile:'components/single-topic/index.js'});require("components/single-topic/index.js");