$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'left'])
Z([[7],[3,'isEditting']])
Z([3,'changeTitle'])
Z([3,'title'])
Z([1,100])
Z([3,'点击输入'])
Z([3,'placeholder-title'])
Z([[7],[3,'title']])
Z([3,'copy-input-x'])
Z([3,'复制：'])
Z([3,'changeValue'])
Z([3,'content'])
Z(z[4])
Z([[7],[3,'maxlength']])
Z([3,'点击输入需要复制的内容'])
Z([3,'placeholder-value'])
Z([[7],[3,'value']])
Z(z[3])
Z([a,[[7],[3,'title']]])
Z(z[8])
Z(z[9])
Z(z[11])
Z([a,[[7],[3,'value']]])
Z([3,'right'])
Z([3,'copy'])
Z([3,'btn'])
Z([3,'hover'])
Z([3,'复制'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./components/ImgTextCopy/ImgTextCopy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var oZG=_n('view')
_rz(z,oZG,'class',0,e,s,gg)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,1,e,s,gg)){f1G.wxVkey=1
var c2G=_mz(z,'textarea',['autoHeight',-1,'bindinput',2,'class',1,'cursorSpacing',2,'placeholder',3,'placeholderClass',4,'value',5],[],e,s,gg)
_(f1G,c2G)
var h3G=_n('view')
_rz(z,h3G,'class',8,e,s,gg)
var o4G=_n('text')
var c5G=_oz(z,9,e,s,gg)
_(o4G,c5G)
_(h3G,o4G)
var o6G=_mz(z,'input',['bindinput',10,'class',1,'cursorSpacing',2,'maxlength',3,'placeholder',4,'placeholderClass',5,'value',6],[],e,s,gg)
_(h3G,o6G)
_(f1G,h3G)
}
else{f1G.wxVkey=2
var l7G=_n('view')
_rz(z,l7G,'class',17,e,s,gg)
var a8G=_oz(z,18,e,s,gg)
_(l7G,a8G)
_(f1G,l7G)
var t9G=_n('view')
_rz(z,t9G,'class',19,e,s,gg)
var e0G=_n('text')
var bAH=_oz(z,20,e,s,gg)
_(e0G,bAH)
_(t9G,e0G)
var oBH=_n('view')
_rz(z,oBH,'class',21,e,s,gg)
var xCH=_oz(z,22,e,s,gg)
_(oBH,xCH)
_(t9G,oBH)
_(f1G,t9G)
}
f1G.wxXCkey=1
_(r,oZG)
var oDH=_n('view')
_rz(z,oDH,'class',23,e,s,gg)
var fEH=_mz(z,'button',['bindtap',24,'class',1,'hoverClass',2],[],e,s,gg)
var cFH=_oz(z,27,e,s,gg)
_(fEH,cFH)
_(oDH,fEH)
_(r,oDH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ImgTextCopy/ImgTextCopy.wxml'] = [$gwx_XC_27, './components/ImgTextCopy/ImgTextCopy.wxml'];else __wxAppCode__['components/ImgTextCopy/ImgTextCopy.wxml'] = $gwx_XC_27( './components/ImgTextCopy/ImgTextCopy.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/ImgTextCopy/ImgTextCopy.wxss'] = setCssToHead([".",[1],"left{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;margin-right:34px}\n.",[1],"right,.",[1],"right .",[1],"btn{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",[1],"right .",[1],"btn{background-image:linear-gradient(115deg,#f43b67,#ee4a38);border-radius:4px;color:#fff;font-size:13px;font-weight:700;height:32px;-webkit-justify-content:center;justify-content:center;min-width:70px}\n.",[1],"avatar{border-radius:50%;display:block;height:50px;margin-right:10px;width:50px}\n.",[1],"title{color:rgba(0,0,0,.9);font-size:15px;font-weight:700;margin-bottom:9px;width:100%}\n.",[1],"content{color:rgba(0,0,0,.5);-webkit-flex:1;flex:1;font-size:13px}\n.",[1],"hover{opacity:.6}\n.",[1],"placeholder-title{color:rgba(0,0,0,.3);font-size:15px;font-weight:700;line-height:1.53}\n.",[1],"placeholder-value{color:rgba(0,0,0,.3);font-size:13px}\n.",[1],"copy-input-x{color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:13px;word-break:break-all}\n",],undefined,{path:"./components/ImgTextCopy/ImgTextCopy.wxss"});
}