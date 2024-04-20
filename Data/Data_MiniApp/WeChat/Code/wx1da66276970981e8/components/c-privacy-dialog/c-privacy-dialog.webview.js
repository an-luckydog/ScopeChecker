$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([[4],[[5],[[5],[1,'zero-privacy']],[[7],[3,'h']]]])
Z([3,'zero-privacy-container'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'--color:'],[[7],[3,'f']]],[1,';']],[[2,'+'],[1,'--bgcolor:'],[[7],[3,'g']]]])
Z([3,'title'])
Z([3,'用户隐私保护提示'])
Z([3,'content'])
Z([3,' 使用前请仔细阅读 '])
Z([[7],[3,'c']])
Z([a,[[7],[3,'b']]])
Z([3,' 。 当您点击同意后，即表示您已理解并同意该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用该服务。 '])
Z([3,'footer'])
Z([[7],[3,'d']])
Z([3,'btn disagree-btn'])
Z([3,'拒绝'])
Z([[7],[3,'e']])
Z([3,'btn agree-btn'])
Z([3,'agree-btn'])
Z([3,'agreePrivacyAuthorization'])
Z([3,' 同意 '])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./components/c-privacy-dialog/c-privacy-dialog.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var lUL=_v()
_(r,lUL)
if(_oz(z,0,e,s,gg)){lUL.wxVkey=1
var aVL=_n('view')
_rz(z,aVL,'class',1,e,s,gg)
var tWL=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var eXL=_n('view')
_rz(z,eXL,'class',4,e,s,gg)
var bYL=_oz(z,5,e,s,gg)
_(eXL,bYL)
_(tWL,eXL)
var oZL=_n('view')
_rz(z,oZL,'class',6,e,s,gg)
var x1L=_oz(z,7,e,s,gg)
_(oZL,x1L)
var o2L=_n('text')
_rz(z,o2L,'catchtap',8,e,s,gg)
var f3L=_oz(z,9,e,s,gg)
_(o2L,f3L)
_(oZL,o2L)
var c4L=_oz(z,10,e,s,gg)
_(oZL,c4L)
_(tWL,oZL)
var h5L=_n('view')
_rz(z,h5L,'class',11,e,s,gg)
var o6L=_mz(z,'view',['bindtap',12,'class',1],[],e,s,gg)
var c7L=_oz(z,14,e,s,gg)
_(o6L,c7L)
_(h5L,o6L)
var o8L=_mz(z,'button',['bindagreeprivacyauthorization',15,'class',1,'id',2,'openType',3],[],e,s,gg)
var l9L=_oz(z,19,e,s,gg)
_(o8L,l9L)
_(h5L,o8L)
_(tWL,h5L)
_(aVL,tWL)
_(lUL,aVL)
}
lUL.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/c-privacy-dialog/c-privacy-dialog.wxml'] = [$gwx_XC_24, './components/c-privacy-dialog/c-privacy-dialog.wxml'];else __wxAppCode__['components/c-privacy-dialog/c-privacy-dialog.wxml'] = $gwx_XC_24( './components/c-privacy-dialog/c-privacy-dialog.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/c-privacy-dialog/c-privacy-dialog.wxss'] = setCssToHead([".",[1],"zero-privacy{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;background-color:rgba(0,0,0,.5);display:flex;box-sizing:border-box;align-items:center;justify-content:center;-webkit-justify-content:center;animation:fadeIn .2s linear both}\n.",[1],"zero-privacy-container{width:",[0,580],";min-height:",[0,400],";background:var(--bgcolor);border-radius:16px;padding:",[0,50],";font-size:14px;animation:fadeInBig .2s linear .2s both;-webkit-backdrop-filter:blur(",[0,10],");backdrop-filter:blur(",[0,10],")}\n.",[1],"zero-privacy-container .",[1],"title{color:#333;font-size:",[0,36],";text-align:center}\n.",[1],"zero-privacy-container .",[1],"content{color:#595959;margin-top:",[0,36],";margin-bottom:",[0,36],";line-height:",[0,50],"}\n.",[1],"zero-privacy-container .",[1],"content wx-text{color:var(--color)}\n.",[1],"zero-privacy-container .",[1],"footer{display:flex;justify-content:space-between}\n.",[1],"zero-privacy-container .",[1],"footer wx-button:after{border:none}\n.",[1],"zero-privacy-container .",[1],"footer .",[1],"btn{width:",[0,200],";line-height:",[0,80],";border-radius:24px;text-align:center}\n.",[1],"zero-privacy-container .",[1],"footer .",[1],"disagree-btn{background-color:#f6f6f6;color:#4c4c4c}\n.",[1],"zero-privacy-container .",[1],"footer .",[1],"agree-btn{line-height:",[0,80],";background-color:var(--color);color:#fff;margin:0}\n.",[1],"zero-bottom{align-items:flex-end}\n.",[1],"zero-bottom .",[1],"zero-privacy-container{width:100%;animation:fadeIn .2s linear both;animation:fadeInUp .2s linear .2s both;padding-bottom:calc(env(safe-area-inset-bottom) + ",[0,30],");border-radius:24px 24px 0 0}\n.",[1],"zero-bottom .",[1],"footer{padding:0 ",[0,40],"}\n.",[1],"zero-bottom .",[1],"footer .",[1],"btn{width:",[0,250],"}\n@keyframes fadeIn{0%{opacity:.5}\nto{opacity:1}\n}@keyframes fadeInBig{0%{opacity:0;transform:scale(.5)}\nto{opacity:1;transform:scale(1)}\n}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}\nto{opacity:1;transform:translateZ(0)}\n}",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/c-privacy-dialog/c-privacy-dialog.wxss:1:828)",{path:"./components/c-privacy-dialog/c-privacy-dialog.wxss"});
}