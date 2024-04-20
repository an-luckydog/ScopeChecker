$gwx_XC_50=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_50 || [];
function gz$gwx_XC_50_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_50_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_50_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_50_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'image']],[[8],'round',[[7],[3,'round']]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[8],'width',[[7],[3,'width']]],[[8],'height',[[7],[3,'height']]]],[[8],'radius',[[7],[3,'radius']]]]]])
Z([[2,'!'],[[7],[3,'error']]])
Z([3,'onError'])
Z([3,'onLoad'])
Z([3,'image-class van-image__img'])
Z([[7],[3,'lazyLoad']])
Z([[12],[[6],[[7],[3,'computed']],[3,'mode']],[[5],[[7],[3,'fit']]]])
Z([[7],[3,'showMenuByLongpress']])
Z([[7],[3,'src']])
Z([[7],[3,'webp']])
Z([[2,'&&'],[[7],[3,'loading']],[[7],[3,'showLoading']]])
Z([3,'loading-class van-image__loading'])
Z([[7],[3,'useLoadingSlot']])
Z([3,'loading'])
Z([3,'van-image__loading-icon'])
Z([3,'photo'])
Z([[2,'&&'],[[7],[3,'error']],[[7],[3,'showError']]])
Z([3,'error-class van-image__error'])
Z([[7],[3,'useErrorSlot']])
Z([3,'error'])
Z([3,'van-image__error-icon'])
Z([3,'photo-fail'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_50_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_50_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_50=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_50=true;
var x=['./wxcomponents/vant/image/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_50_1()
var oH4=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var xI4=_v()
_(oH4,xI4)
if(_oz(z,3,e,s,gg)){xI4.wxVkey=1
var cL4=_mz(z,'image',['bind:error',4,'bind:load',1,'class',2,'lazyLoad',3,'mode',4,'showMenuByLongpress',5,'src',6,'webp',7],[],e,s,gg)
_(xI4,cL4)
}
var oJ4=_v()
_(oH4,oJ4)
if(_oz(z,12,e,s,gg)){oJ4.wxVkey=1
var hM4=_n('view')
_rz(z,hM4,'class',13,e,s,gg)
var oN4=_v()
_(hM4,oN4)
if(_oz(z,14,e,s,gg)){oN4.wxVkey=1
var cO4=_n('slot')
_rz(z,cO4,'name',15,e,s,gg)
_(oN4,cO4)
}
else{oN4.wxVkey=2
var oP4=_mz(z,'van-icon',['customClass',16,'name',1],[],e,s,gg)
_(oN4,oP4)
}
oN4.wxXCkey=1
oN4.wxXCkey=3
_(oJ4,hM4)
}
var fK4=_v()
_(oH4,fK4)
if(_oz(z,18,e,s,gg)){fK4.wxVkey=1
var lQ4=_n('view')
_rz(z,lQ4,'class',19,e,s,gg)
var aR4=_v()
_(lQ4,aR4)
if(_oz(z,20,e,s,gg)){aR4.wxVkey=1
var tS4=_n('slot')
_rz(z,tS4,'name',21,e,s,gg)
_(aR4,tS4)
}
else{aR4.wxVkey=2
var eT4=_mz(z,'van-icon',['customClass',22,'name',1],[],e,s,gg)
_(aR4,eT4)
}
aR4.wxXCkey=1
aR4.wxXCkey=3
_(fK4,lQ4)
}
xI4.wxXCkey=1
oJ4.wxXCkey=1
oJ4.wxXCkey=3
fK4.wxXCkey=1
fK4.wxXCkey=3
_(r,oH4)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_50";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_50();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/image/index.wxml'] = [$gwx_XC_50, './wxcomponents/vant/image/index.wxml'];else __wxAppCode__['wxcomponents/vant/image/index.wxml'] = $gwx_XC_50( './wxcomponents/vant/image/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['wxcomponents/vant/image/index.wxss'] = setCssToHead([[2,"./wxcomponents/vant/common/index.wxss"],".",[1],"van-image{display:inline-block;position:relative}\n.",[1],"van-image--round{border-radius:50%;overflow:hidden}\n.",[1],"van-image--round .",[1],"van-image__img{border-radius:inherit}\n.",[1],"van-image__error,.",[1],"van-image__img,.",[1],"van-image__loading{display:block;height:100%;width:100%}\n.",[1],"van-image__error,.",[1],"van-image__loading{-webkit-align-items:center;align-items:center;background-color:var(--image-placeholder-background-color,#f7f8fa);color:var(--image-placeholder-text-color,#969799);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:var(--image-placeholder-font-size,14px);-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:0}\n.",[1],"van-image__loading-icon{color:var(--image-loading-icon-color,#dcdee0);font-size:var(--image-loading-icon-size,32px)!important}\n.",[1],"van-image__error-icon{color:var(--image-error-icon-color,#dcdee0);font-size:var(--image-error-icon-size,32px)!important}\n",],undefined,{path:"./wxcomponents/vant/image/index.wxss"});
}