$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'mode']],[1,'list']])
Z([3,'banner-swiper-wrapper'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,1]])
Z([[7],[3,'autoplay']])
Z([3,'swiperChange'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,2]])
Z([3,'banner-swiper'])
Z([3,'1'])
Z([3,'27px'])
Z([3,'42px'])
Z([3,'true'])
Z([[7],[3,'list']])
Z([3,'index'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'bannerItem'])
Z([[8],'item',[[6],[[7],[3,'list']],[1,0]]])
Z(z[14])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'listItem'])
Z(z[14])
Z(z[20])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./components/home-scene-application/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-scene-application/index.wxml"],"",1)
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
d_[x[0]]["listItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var b=x[0]+':listItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/home-scene-application/index.wxml"],"",1)
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
var z=gz$gwx_XC_30_1()
var b3H=_v()
_(r,b3H)
if(_oz(z,0,e,s,gg)){b3H.wxVkey=1
var o4H=_n('view')
_rz(z,o4H,'class',1,e,s,gg)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,2,e,s,gg)){x5H.wxVkey=1
var o6H=_mz(z,'swiper',['autoplay',3,'bindchange',1,'circular',2,'class',3,'displayMultipleItems',4,'nextMargin',5,'previousMargin',6,'snapToEdge',7],[],e,s,gg)
var f7H=_v()
_(o6H,f7H)
var c8H=function(o0H,h9H,cAI,gg){
var lCI=_v()
_(cAI,lCI)
var aDI=_oz(z,14,o0H,h9H,gg)
var tEI=_gd(x[0],aDI,e_,d_)
if(tEI){
var eFI=_1z(z,13,o0H,h9H,gg) || {}
var cur_globalf=gg.f
lCI.wxXCkey=3
tEI(eFI,eFI,lCI,gg)
gg.f=cur_globalf
}
else _w(aDI,x[0],2,478)
return cAI
}
f7H.wxXCkey=2
_2z(z,11,c8H,e,s,gg,f7H,'item','index','index')
_(x5H,o6H)
}
else{x5H.wxVkey=2
var bGI=_v()
_(x5H,bGI)
var oHI=_oz(z,16,e,s,gg)
var xII=_gd(x[0],oHI,e_,d_)
if(xII){
var oJI=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
bGI.wxXCkey=3
xII(oJI,oJI,bGI,gg)
gg.f=cur_globalf
}
else _w(oHI,x[0],2,798)
}
x5H.wxXCkey=1
_(b3H,o4H)
}
else{b3H.wxVkey=2
var fKI=_v()
_(b3H,fKI)
var cLI=function(oNI,hMI,cOI,gg){
var lQI=_v()
_(cOI,lQI)
var aRI=_oz(z,20,oNI,hMI,gg)
var tSI=_gd(x[0],aRI,e_,d_)
if(tSI){
var eTI=_1z(z,19,oNI,hMI,gg) || {}
var cur_globalf=gg.f
lQI.wxXCkey=3
tSI(eTI,eTI,lQI,gg)
gg.f=cur_globalf
}
else _w(aRI,x[0],4,70)
return cOI
}
fKI.wxXCkey=2
_2z(z,17,cLI,e,s,gg,fKI,'item','index','index')
}
b3H.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-scene-application/index.wxml'] = [$gwx_XC_30, './components/home-scene-application/index.wxml'];else __wxAppCode__['components/home-scene-application/index.wxml'] = $gwx_XC_30( './components/home-scene-application/index.wxml' );
	;__wxRoute = "components/home-scene-application/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/home-scene-application/index.js";define("components/home-scene-application/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{autoplay:{type:Boolean,default:!1},list:{type:Array},mode:{type:String}},data:{bannerActive:0},attached:function(){console.log("list",this.data.list)},methods:{swiperChange:function(t){var e=t.detail,a=e.current;e.source;this.setData({bannerActive:a})},tarGoDetail:function(e){var a,r=e.currentTarget.dataset.item;if("OUTLINK"==r.data_type)if(r.jump_url="",r.dataParse={},r.outlink&&4!=+JSON.parse(r.outlink).jump_type){try{var p=JSON.parse(r.outlink);p&&(r.dataParse=p,2==p.jump_type&&!p.outUrl&&p.url&&(p.outUrl=p.url)),p&&p.outUrl&&2==p.jump_type&&(r.jump_url=p.outUrl),1==p.jump_type&&(r.data_type="none"),3==p.jump_type&&p.appId&&p.pageUrl&&(r.data_type="MINIAPP")}catch(t){}a=r.data_id,"OUTLINK"!=r.data_type&&"MINIAPP"!=r.data_type||(a=r.dataParse);e.currentTarget.dataset.key;r.type&&2==r.type&&(r.data_type="ONLINE"),t.tool.redirect(r.data_type,a)}else{var i=e.currentTarget.dataset.item.data_id;wx.navigateTo({url:"/pages/scene/detail/index?id="+i})}else{var d=e.currentTarget.dataset.item.data_id;wx.navigateTo({url:"/pages/scene/detail/index?id="+d})}}}});
},{isPage:false,isComponent:true,currentFile:'components/home-scene-application/index.js'});require("components/home-scene-application/index.js");