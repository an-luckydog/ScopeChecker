$gwx_XC_62=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_62 || [];
function gz$gwx_XC_62_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loadMore'])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([3,'height:100%'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([[2,'==='],[[7],[3,'contentType']],[1,'case']])
Z([[7],[3,'list']])
Z([[7],[3,'searchType']])
Z([[7],[3,'searchWord']])
Z([[2,'==='],[[7],[3,'contentType']],[1,'tool']])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[2,'==='],[[7],[3,'contentType']],[1,'activity']])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[2,'==='],[[7],[3,'contentType']],[1,'scene']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_62=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_62=true;
var x=['./components/sk-result/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_62_1()
var o8T=_mz(z,'scroll-view',['bindscrolltolower',0,'scrollTop',1,'scrollY',1,'style',2],[],e,s,gg)
o8T.rawAttr={"model:scroll-top":"{{scrollTop}}",};var f9T=_v()
_(o8T,f9T)
if(_oz(z,4,e,s,gg)){f9T.wxVkey=1
var c0T=_v()
_(f9T,c0T)
if(_oz(z,5,e,s,gg)){c0T.wxVkey=1
var hAU=_mz(z,'case-list',['list',6,'searchType',1,'searchWords',2],[],e,s,gg)
_(c0T,hAU)
}
else if(_oz(z,9,e,s,gg)){c0T.wxVkey=2
var oBU=_mz(z,'warehouse-list',['list',10,'searchType',1,'searchWords',2],[],e,s,gg)
_(c0T,oBU)
}
else if(_oz(z,13,e,s,gg)){c0T.wxVkey=3
var cCU=_mz(z,'industry-activities',['list',14,'searchType',1,'searchWords',2],[],e,s,gg)
_(c0T,cCU)
}
else if(_oz(z,17,e,s,gg)){c0T.wxVkey=4
}
c0T.wxXCkey=1
c0T.wxXCkey=3
c0T.wxXCkey=3
c0T.wxXCkey=3
}
else{f9T.wxVkey=2
}
f9T.wxXCkey=1
f9T.wxXCkey=3
_(r,o8T)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_62";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_62();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/sk-result/index.wxml'] = [$gwx_XC_62, './components/sk-result/index.wxml'];else __wxAppCode__['components/sk-result/index.wxml'] = $gwx_XC_62( './components/sk-result/index.wxml' );
	;__wxRoute = "components/sk-result/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/sk-result/index.js";define("components/sk-result/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/defineProperty"),t=getApp();Component({externalClasses:["ext-class"],properties:{contentType:{type:String,value:""},searchWord:{type:String,value:"",observer:function(){this.getSearchList()}},searchAgain:{type:Number,value:0,observer:function(e){e>0&&this.getSearchList()}},searchType:{type:String,value:""}},data:{list:[],pageNum:10,scrollTop:0},lifetimes:{attached:function(){this.loadEnd=!1,this.loading=!1,this.page=1}},methods:{getSearchList:function(){var t=this;this.loadEnd=!1,this.getKeywordSearch().then((function(n){t.setData({list:n}),t.triggerEvent("loadData",e({},"".concat(t.data.contentType),n.length)),t.setData({scrollTop:0})}))},getKeywordSearch:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return console.log("🚀 ~ file: index.js ~ line 66 ~ getKeywordSearch ~ page",n),new Promise((function(a){e.page=n;var r=e.data,i=r.contentType,o=r.searchWord,s=r.pageNum;r.list;return e.loading||e.loadEnd?a([]):(e.loading=!0,t.API.keywordSearch(o,i,(n-1)*s,s).then((function(t){if(e.loading=!1,0==t.code){var n="activity"===i?t.content:t.content.list;return n.length<s&&(e.loadEnd=!0),a(n)}return a([])})).catch((function(){e.loading=!1,a([])})))}))},loadMore:function(){var e=this;this.page++,this.getKeywordSearch(this.page).then((function(t){e.setData({list:e.data.list.concat(t)})}))},toScene:function(e){var n=e.currentTarget.dataset.item,a=n.id,r=n.key,i=this.data,o=i.searchType,s=i.searchWord,c=i.list;t.QD.event("SearchResultClick",{keywords:s,is_recommendword:"hot"===o,is_historyword:"history"===o,result_tab_name:"场景",result_number:c.length,ContentID:a.toString(),rank_number:r+1}),wx.navigateTo({url:"/pages/scene/detail/index?id=".concat(a)})}}});
},{isPage:false,isComponent:true,currentFile:'components/sk-result/index.js'});require("components/sk-result/index.js");