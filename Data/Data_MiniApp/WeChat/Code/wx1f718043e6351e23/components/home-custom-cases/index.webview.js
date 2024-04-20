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
Z([3,'list-wrapper'])
Z([[7],[3,'list']])
Z([3,'index'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'listItem'])
Z(z[4])
Z([3,'toDetail'])
Z([3,'list-item'])
Z([[7],[3,'item']])
Z([3,''])
Z([3,'list-item-thumb'])
Z([[6],[[7],[3,'item']],[3,'banner']])
Z([3,'list-item-info'])
Z([3,'list-item-title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'list-tag'])
Z([3,'label'])
Z([[6],[[7],[3,'item']],[3,'tag']])
Z(z[2])
Z([3,'list-tag-one'])
Z([a,[[6],[[7],[3,'label']],[3,'name']]])
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
var oB=_mz(z,'view',['bindtap',6,'class',1,'data-item',2],[],e,s,gg)
var xC=_mz(z,'image',['alt',9,'class',1,'src',2],[],e,s,gg)
_(oB,xC)
var oD=_n('view')
_rz(z,oD,'class',12,e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',13,e,s,gg)
var cF=_oz(z,14,e,s,gg)
_(fE,cF)
_(oD,fE)
var hG=_n('view')
_rz(z,hG,'class',15,e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_n('view')
_rz(z,eN,'class',19,lK,oJ,gg)
var bO=_oz(z,20,lK,oJ,gg)
_(eN,bO)
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,17,cI,e,s,gg,oH,'label','index','index')
_(oD,hG)
_(oB,oD)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var t1O=_n('view')
_rz(z,t1O,'class',0,e,s,gg)
var e2O=_v()
_(t1O,e2O)
var b3O=function(x5O,o4O,o6O,gg){
var c8O=_v()
_(o6O,c8O)
var h9O=_oz(z,4,x5O,o4O,gg)
var o0O=_gd(x[0],h9O,e_,d_)
if(o0O){
var cAP=_1z(z,3,x5O,o4O,gg) || {}
var cur_globalf=gg.f
c8O.wxXCkey=3
o0O(cAP,cAP,c8O,gg)
gg.f=cur_globalf
}
else _w(h9O,x[0],1,82)
return o6O
}
e2O.wxXCkey=2
_2z(z,1,b3O,e,s,gg,e2O,'item','index','index')
_(r,t1O)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-custom-cases/index.wxml'] = [$gwx_XC_26, './components/home-custom-cases/index.wxml'];else __wxAppCode__['components/home-custom-cases/index.wxml'] = $gwx_XC_26( './components/home-custom-cases/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/home-custom-cases/index.wxss'] = setCssToHead([".",[1],"list-wrapper{height:auto;width:",[0,750],"}\n.",[1],"list-item{background:#fff;border-radius:",[0,30],";box-shadow:",[0,0]," ",[0,0]," ",[0,40]," ",[0,0]," #dadfef;display:-webkit-flex;display:flex;height:auto;margin:0 ",[0,30]," ",[0,30]," ",[0,39],";padding:",[0,30]," ",[0,25]," ",[0,27],";width:",[0,681],"}\n.",[1],"list-item-thumb{background:#eee;height:",[0,133],";margin-right:",[0,31],";width:",[0,236],"}\n.",[1],"list-item-info{height:auto;width:",[0,365],"}\n.",[1],"list-item-title{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#273755;display:-webkit-box;font-size:",[0,28],";font-weight:600;height:",[0,72],";line-height:",[0,36],";margin-bottom:",[0,28],";overflow:hidden;width:",[0,365],"}\n.",[1],"list-tag{-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;width:100%}\n.",[1],"list-tag,.",[1],"list-tag-one{display:-webkit-flex;display:flex;height:",[0,36],"}\n.",[1],"list-tag-one{-webkit-align-items:center;align-items:center;border:",[0,2]," solid #0052d9;border-radius:",[0,10],";color:#0052d9;font-size:",[0,20],";-webkit-justify-content:center;justify-content:center;line-height:",[0,32],";margin-right:",[0,12],";padding:0 ",[0,13],";width:auto}\n",],undefined,{path:"./components/home-custom-cases/index.wxss"});
}