$gwx_XC_56=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_56 || [];
function gz$gwx_XC_56_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'swiper-wrap'])
Z([a,[3,'height: '],[[7],[3,'height']],[3,'rpx; border-radius: '],[[7],[3,'borderRadius']],[3,'rpx; background-color: '],[[7],[3,'backgroundColor']],[3,';']])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'length']],[1,1]])
Z([3,'onItemTap'])
Z([3,'swiper-item-img'])
Z([1,0])
Z([3,'widthFix'])
Z([[6],[[6],[[7],[3,'list']],[1,0]],[3,'imgURL']])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,1]])
Z([1,true])
Z([3,'onSwiperChange'])
Z(z[9])
Z([3,'swiper'])
Z([[7],[3,'currentIndex']])
Z([[7],[3,'duration']])
Z([[7],[3,'interval']])
Z([[7],[3,'list']])
Z([3,'index'])
Z([[7],[3,'index']])
Z(z[3])
Z(z[4])
Z(z[18])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'imgURL']])
Z([3,'indicator-wrap'])
Z(z[16])
Z(z[17])
Z([a,[3,'indicator-item'],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'currentIndex']]],[1,' active'],[1,'']]])
Z([a,[3,'transition-duration: '],[[2,'/'],[[7],[3,'duration']],[1,1000]],[3,'s;']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_56=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_56=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_56_1()
var b1WB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var o2WB=_v()
_(b1WB,o2WB)
if(_oz(z,2,e,s,gg)){o2WB.wxVkey=1
var x3WB=_mz(z,'image',['bind:tap',3,'class',1,'data-index',2,'mode',3,'src',4],[],e,s,gg)
_(o2WB,x3WB)
}
else if(_oz(z,8,e,s,gg)){o2WB.wxVkey=2
var o4WB=_mz(z,'swiper',['autoplay',9,'bind:change',1,'circular',2,'class',3,'current',4,'duration',5,'interval',6],[],e,s,gg)
var f5WB=_v()
_(o4WB,f5WB)
var c6WB=function(o8WB,h7WB,c9WB,gg){
var lAXB=_n('swiper-item')
_rz(z,lAXB,'itemId',18,o8WB,h7WB,gg)
var aBXB=_mz(z,'image',['bind:tap',19,'class',1,'data-index',2,'mode',3,'src',4],[],o8WB,h7WB,gg)
_(lAXB,aBXB)
_(c9WB,lAXB)
return c9WB
}
f5WB.wxXCkey=2
_2z(z,16,c6WB,e,s,gg,f5WB,'item','index','index')
_(o2WB,o4WB)
var tCXB=_n('view')
_rz(z,tCXB,'class',24,e,s,gg)
var eDXB=_v()
_(tCXB,eDXB)
var bEXB=function(xGXB,oFXB,oHXB,gg){
var cJXB=_mz(z,'view',['class',27,'style',1],[],xGXB,oFXB,gg)
_(oHXB,cJXB)
return oHXB
}
eDXB.wxXCkey=2
_2z(z,25,bEXB,e,s,gg,eDXB,'item','index','index')
_(o2WB,tCXB)
}
o2WB.wxXCkey=1
_(r,b1WB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_56";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_56();
	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxml'] = [$gwx_XC_56, './miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxml'] = $gwx_XC_56( './miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxss'] = setCssToHead([".",[1],"swiper-wrap{overflow:hidden;position:relative;width:100%}\n.",[1],"swiper{height:100%}\n.",[1],"swiper,.",[1],"swiper-item-img{width:100%}\n.",[1],"indicator-wrap{-webkit-align-items:center;align-items:center;bottom:",[0,10],";display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;right:0}\n.",[1],"indicator-item{background:#eee;border-radius:",[0,4],";height:",[0,8],";margin:0 ",[0,4],";transition-property:width;transition-timing-function:ease;width:",[0,8],"}\n.",[1],"indicator-item.",[1],"active{background:#fff;width:",[0,20],"}\n",],undefined,{path:"./miniprogram_npm/@tmsfe/tms-ui/swiper/swiper.wxss"});
}