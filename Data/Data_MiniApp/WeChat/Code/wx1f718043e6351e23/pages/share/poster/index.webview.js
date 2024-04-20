$gwx_XC_123=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_123 || [];
function gz$gwx_XC_123_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_123_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_123_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_123_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'c-page'])
Z([1,true])
Z(z[1])
Z([3,'分享海报'])
Z([3,'share-poster-container'])
Z([[7],[3,'loading']])
Z([3,'imageLongPress'])
Z([3,'share-poster-wrapper'])
Z([3,'sharePic'])
Z(z[1])
Z([[7],[3,'sharePoster']])
Z([a,[3,'width: '],[[6],[[7],[3,'ImgInfo']],[3,'width']],[3,';height: '],[[6],[[7],[3,'ImgInfo']],[3,'height']],[3,';']])
Z(z[10])
Z([3,'poster-bottom'])
Z([3,'savePosterToAlbum'])
Z([3,'poster-download-btn'])
Z([3,'点击保存海报到相册'])
Z([3,'canvas-box'])
Z([3,'shareCanvas'])
Z([a,[3,'canvas-share '],[[2,'?:'],[[7],[3,'sharePoster']],[1,'hidden'],[1,'']]])
Z(z[1])
Z(z[18])
Z([a,z[11][1],[[6],[[7],[3,'canvasInfo']],[3,'width']],z[11][3],[[6],[[7],[3,'canvasInfo']],[3,'height']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_123_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_123_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_123=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_123=true;
var x=['./pages/share/poster/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_123_1()
var oB7C=_n('view')
_rz(z,oB7C,'class',0,e,s,gg)
var cC7C=_mz(z,'header',['isFullPage',1,'isPlaceholder',1,'title',2],[],e,s,gg)
var oD7C=_n('div')
_rz(z,oD7C,'class',4,e,s,gg)
var lE7C=_v()
_(oD7C,lE7C)
if(_oz(z,5,e,s,gg)){lE7C.wxVkey=1
var tG7C=_n('loading')
_(lE7C,tG7C)
}
var eH7C=_mz(z,'view',['bind:longpress',6,'class',1],[],e,s,gg)
var bI7C=_mz(z,'image',['class',8,'disableScroll',1,'src',2,'style',3],[],e,s,gg)
_(eH7C,bI7C)
_(oD7C,eH7C)
var aF7C=_v()
_(oD7C,aF7C)
if(_oz(z,12,e,s,gg)){aF7C.wxVkey=1
var oJ7C=_n('view')
_rz(z,oJ7C,'class',13,e,s,gg)
var xK7C=_mz(z,'view',['bind:tap',14,'class',1],[],e,s,gg)
var oL7C=_oz(z,16,e,s,gg)
_(xK7C,oL7C)
_(oJ7C,xK7C)
_(aF7C,oJ7C)
}
var fM7C=_n('view')
_rz(z,fM7C,'class',17,e,s,gg)
var cN7C=_mz(z,'canvas',['canvasId',18,'class',1,'disableScroll',2,'id',3,'style',4],[],e,s,gg)
_(fM7C,cN7C)
_(oD7C,fM7C)
lE7C.wxXCkey=1
lE7C.wxXCkey=3
aF7C.wxXCkey=1
_(cC7C,oD7C)
_(oB7C,cC7C)
_(r,oB7C)
var hO7C=_n('Privacy')
_(r,hO7C)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_123";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_123();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/share/poster/index.wxml'] = [$gwx_XC_123, './pages/share/poster/index.wxml'];else __wxAppCode__['pages/share/poster/index.wxml'] = $gwx_XC_123( './pages/share/poster/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/share/poster/index.wxss'] = setCssToHead([".",[1],"canvas-box{height:",[0,1],";left:0;overflow:hidden;position:absolute;top:",[0,-200],";width:",[0,750],"}\n.",[1],"share-poster-container{position:relative}\n.",[1],"canvas-share{left:0;opacity:0;position:absolute;top:0;-webkit-transform:translateY(-1000%);transform:translateY(-1000%)}\n.",[1],"share-poster-wrapper{padding-bottom:",[0,180],"}\n.",[1],"sharePic{display:block}\n.",[1],"poster-bottom{-webkit-align-items:center;align-items:center;background-color:#fff;bottom:0;box-shadow:0 ",[0,6]," ",[0,15]," 0 rgba(0,0,0,.06);display:-webkit-flex;display:flex;height:",[0,180],";-webkit-justify-content:center;justify-content:center;left:0;position:fixed;width:100%}\n.",[1],"poster-download-btn{background:#0052d9;border-radius:",[0,5],";color:#fff;font-size:",[0,30],";height:",[0,60],";line-height:",[0,60],";text-align:center;width:",[0,400],"}\n",],undefined,{path:"./pages/share/poster/index.wxss"});
}