$gwx_XC_89=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_89 || [];
function gz$gwx_XC_89_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'场景应用详情'])
Z([3,'page-bg page'])
Z([a,[3,'min-height:calc(100vh - '],[[7],[3,'topHeight']],[3,'px)']])
Z([[7],[3,'ready']])
Z([[2,'>'],[[6],[[7],[3,'sceneAppItem']],[3,'length']],[1,0]])
Z([[7],[3,'sceneAppItem']])
Z([3,'index'])
Z([3,'toDetail'])
Z([3,'scene-list'])
Z([[7],[3,'item']])
Z([3,'item-image'])
Z([[6],[[7],[3,'item']],[3,'banner']])
Z([3,'item-text'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'list-more'])
Z([3,'暂无数据'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_89=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_89=true;
var x=['./pages/brand/list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_89_1()
var c94B=_n('header')
_rz(z,c94B,'title',0,e,s,gg)
_(r,c94B)
var o04B=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var lA5B=_v()
_(o04B,lA5B)
if(_oz(z,3,e,s,gg)){lA5B.wxVkey=1
var aB5B=_v()
_(lA5B,aB5B)
if(_oz(z,4,e,s,gg)){aB5B.wxVkey=1
var tC5B=_v()
_(aB5B,tC5B)
var eD5B=function(oF5B,bE5B,xG5B,gg){
var fI5B=_mz(z,'view',['bindtap',7,'class',1,'data-item',2],[],oF5B,bE5B,gg)
var cJ5B=_mz(z,'image',['class',10,'src',1],[],oF5B,bE5B,gg)
_(fI5B,cJ5B)
var hK5B=_n('view')
_rz(z,hK5B,'class',12,oF5B,bE5B,gg)
var oL5B=_oz(z,13,oF5B,bE5B,gg)
_(hK5B,oL5B)
_(fI5B,hK5B)
_(xG5B,fI5B)
return xG5B
}
tC5B.wxXCkey=2
_2z(z,5,eD5B,e,s,gg,tC5B,'item','index','index')
}
else{aB5B.wxVkey=2
var cM5B=_n('view')
_rz(z,cM5B,'class',14,e,s,gg)
var oN5B=_oz(z,15,e,s,gg)
_(cM5B,oN5B)
_(aB5B,cM5B)
}
var lO5B=_n('consult-btn')
_(lA5B,lO5B)
var aP5B=_n('home-tips')
_(lA5B,aP5B)
aB5B.wxXCkey=1
}
else{lA5B.wxVkey=2
var tQ5B=_n('loading')
_(lA5B,tQ5B)
}
lA5B.wxXCkey=1
lA5B.wxXCkey=3
lA5B.wxXCkey=3
_(r,o04B)
var eR5B=_n('no-card-tip')
_(r,eR5B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_89";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_89();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/brand/list/index.wxml'] = [$gwx_XC_89, './pages/brand/list/index.wxml'];else __wxAppCode__['pages/brand/list/index.wxml'] = $gwx_XC_89( './pages/brand/list/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/brand/list/index.wxss'] = setCssToHead([".",[1],"page{padding-top:",[0,67],"}\n.",[1],"scene-list{background:#fff;border-radius:",[0,20],";height:",[0,428],";margin:0 ",[0,28]," ",[0,43]," ",[0,30],";overflow:hidden;width:",[0,692],"}\n.",[1],"item-image{height:",[0,340],";width:",[0,692],"}\n.",[1],"item-text{color:#273755;font-size:",[0,24],";height:",[0,87],";line-height:",[0,87],";overflow:hidden;padding:0 ",[0,35],";text-overflow:ellipsis;white-space:nowrap;width:100%}\n",],undefined,{path:"./pages/brand/list/index.wxss"});
}