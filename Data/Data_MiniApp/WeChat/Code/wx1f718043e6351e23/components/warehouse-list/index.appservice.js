$gwx_XC_71=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_71 || [];
function gz$gwx_XC_71_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([3,'index'])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'index',[[7],[3,'index']]]])
Z([3,'listItem'])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_71=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_71=true;
var x=['./components/warehouse-list/index.wxml'];d_[x[0]]={}
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_71_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/warehouse-list/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_71_1()
var oFX=_v()
_(r,oFX)
var cGX=function(lIX,oHX,aJX,gg){
var eLX=_v()
_(aJX,eLX)
var bMX=_oz(z,3,lIX,oHX,gg)
var oNX=_gd(x[0],bMX,e_,d_)
if(oNX){
var xOX=_1z(z,2,lIX,oHX,gg) || {}
var cur_globalf=gg.f
eLX.wxXCkey=3
oNX(xOX,xOX,eLX,gg)
gg.f=cur_globalf
}
else _w(bMX,x[0],1,82)
return aJX
}
oFX.wxXCkey=2
_2z(z,0,cGX,e,s,gg,oFX,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_71";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_71();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/warehouse-list/index.wxml'] = [$gwx_XC_71, './components/warehouse-list/index.wxml'];else __wxAppCode__['components/warehouse-list/index.wxml'] = $gwx_XC_71( './components/warehouse-list/index.wxml' );
	;__wxRoute = "components/warehouse-list/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/warehouse-list/index.js";define("components/warehouse-list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{list:{type:Array,value:[]},searchWords:{type:String,value:""},searchType:{type:String,value:""},isDetail:{type:Boolean,value:!1}},data:{},methods:{toDetail:function(e){var a=e.currentTarget.dataset.item||{},r=a.id,i=a.data_type;a.page_url;this.data.searchWords&&t.QD.event("SearchResultClick",{keywords:this.data.searchWords,is_recommendword:"hot"===this.data.searchType,is_historyword:"history"===this.data.searchType,result_tab_name:"干货",result_number:this.data.list.length,ContentID:r.toString(),rank_number:e.currentTarget.dataset.key+1}),"news"==i?wx.navigateTo({url:"/pages/activity/news_detail/index?id="+r}):wx.navigateTo({url:"/pages/case/tool_detail/index?id="+r}),this.data.isDetail&&this.triggerEvent("toDetail")}}});
},{isPage:false,isComponent:true,currentFile:'components/warehouse-list/index.js'});require("components/warehouse-list/index.js");