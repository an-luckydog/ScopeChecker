$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];
function gz$gwx_XC_26_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([3,'index'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'listItem'])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./components/home-custom-cases/index.wxml'];d_[x[0]]={}
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-custom-cases/index.wxml"],"",1)
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
var z=gz$gwx_XC_26_1()
var fUF=_v()
_(r,fUF)
var cVF=function(oXF,hWF,cYF,gg){
var l1F=_v()
_(cYF,l1F)
var a2F=_oz(z,3,oXF,hWF,gg)
var t3F=_gd(x[0],a2F,e_,d_)
if(t3F){
var e4F=_1z(z,2,oXF,hWF,gg) || {}
var cur_globalf=gg.f
l1F.wxXCkey=3
t3F(e4F,e4F,l1F,gg)
gg.f=cur_globalf
}
else _w(a2F,x[0],1,82)
return cYF
}
fUF.wxXCkey=2
_2z(z,0,cVF,e,s,gg,fUF,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-custom-cases/index.wxml'] = [$gwx_XC_26, './components/home-custom-cases/index.wxml'];else __wxAppCode__['components/home-custom-cases/index.wxml'] = $gwx_XC_26( './components/home-custom-cases/index.wxml' );
	;__wxRoute = "components/home-custom-cases/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/home-custom-cases/index.js";define("components/home-custom-cases/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Component({properties:{list:{type:Array,value:[]}},data:{},methods:{toDetail:function(a){var t,i=a.currentTarget.dataset.item;if("OUTLINK"==i.data_type){if(i.jump_url="",i.dataParse={},i.outlink&&4!=+JSON.parse(i.outlink).jump_type)try{var s=JSON.parse(i.outlink);s&&(i.dataParse=s,2==s.jump_type&&!s.outUrl&&s.url&&(s.outUrl=s.url)),s&&s.outUrl&&2==s.jump_type&&(i.jump_url=s.outUrl),1==s.jump_type&&(i.data_type="none"),3==s.jump_type&&s.appId&&s.pageUrl&&(i.data_type="MINIAPP")}catch(e){}else{var d=a.currentTarget.dataset.item.data_id,r="";switch(a.currentTarget.dataset.item.data_type.toLowerCase()){case"signup":r=2==a.currentTarget.dataset.item.type?"pages/online/detail/index?id="+d:"pages/activity/act_detail/index?id="+d;break;case"cases":r="pages/case/case_detail/index?id="+d;break;case"tools":r="pages/case/tool_detail/index?id="+d;break;case"news":r="pages/activity/news_detail/index?id="+d;break;case"scene":r="pages/scene/detail/index?id="+d}wx.navigateTo({url:"/"+r})}t=i.data_id,"OUTLINK"!=i.data_type&&"MINIAPP"!=i.data_type||(t=i.dataParse);a.currentTarget.dataset.key;i.type&&2==i.type&&(i.data_type="ONLINE"),e.tool.redirect(i.data_type,t)}else{var p=a.currentTarget.dataset.item.data_id,n="";switch(a.currentTarget.dataset.item.data_type.toLowerCase()){case"signup":n=2==a.currentTarget.dataset.item.type?"pages/online/detail/index?id="+p:"pages/activity/act_detail/index?id="+p;break;case"cases":n="pages/case/case_detail/index?id="+p;break;case"tools":n="pages/case/tool_detail/index?id="+p;break;case"news":n="pages/activity/news_detail/index?id="+p;break;case"scene":n="pages/scene/detail/index?id="+p}wx.navigateTo({url:"/"+n})}}}});
},{isPage:false,isComponent:true,currentFile:'components/home-custom-cases/index.js'});require("components/home-custom-cases/index.js");