$gwx_XC_47=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_47 || [];
function gz$gwx_XC_47_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_47_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_47_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_47_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'live-box'])
Z([3,'liveFullScreenChange'])
Z([3,'liveNetStatus'])
Z([3,'liveStateChange'])
Z([3,'live-player'])
Z([3,'LivePlayer'])
Z([[7],[3,'video_url']])
Z([3,'live-action-wrapper'])
Z([3,'player-action'])
Z([3,'player-status-text'])
Z([a,[3,' '],[[7],[3,'statusText']],[3,' ']])
Z([[2,'!'],[[7],[3,'isFs']]])
Z([3,'enterFullScreen'])
Z([3,'player-fs'])
Z([3,'https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/old_img/fullscreen.png'])
Z([[7],[3,'isFs']])
Z([3,'exitFullScreen'])
Z(z[13])
Z([3,'https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/old_img/exitfullscreen.png'])
Z([[2,'!'],[[7],[3,'livePlayed']]])
Z([3,'tapLive'])
Z([3,'live-i'])
Z([3,'https://mkttencent-1256915710.file.myqcloud.com/saas/cloud-mini/old_img/icon_play.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_47_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_47_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_47=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_47=true;
var x=['./components/live-box/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_47_1()
var oD0=_n('view')
_rz(z,oD0,'class',0,e,s,gg)
var fE0=_mz(z,'live-player',['bindfullscreenchange',1,'bindnetstatus',1,'bindstatechange',2,'class',3,'id',4,'src',5],[],e,s,gg)
var cF0=_n('cover-view')
_rz(z,cF0,'class',7,e,s,gg)
var oH0=_n('cover-view')
_rz(z,oH0,'class',8,e,s,gg)
var lK0=_n('cover-view')
_rz(z,lK0,'class',9,e,s,gg)
var aL0=_oz(z,10,e,s,gg)
_(lK0,aL0)
_(oH0,lK0)
var cI0=_v()
_(oH0,cI0)
if(_oz(z,11,e,s,gg)){cI0.wxVkey=1
var tM0=_mz(z,'cover-image',['bindtap',12,'class',1,'src',2],[],e,s,gg)
_(cI0,tM0)
}
var oJ0=_v()
_(oH0,oJ0)
if(_oz(z,15,e,s,gg)){oJ0.wxVkey=1
var eN0=_mz(z,'cover-image',['bindtap',16,'class',1,'src',2],[],e,s,gg)
_(oJ0,eN0)
}
cI0.wxXCkey=1
oJ0.wxXCkey=1
_(cF0,oH0)
var hG0=_v()
_(cF0,hG0)
if(_oz(z,19,e,s,gg)){hG0.wxVkey=1
var bO0=_mz(z,'cover-image',['bindtap',20,'class',1,'src',2],[],e,s,gg)
_(hG0,bO0)
}
hG0.wxXCkey=1
_(fE0,cF0)
_(oD0,fE0)
_(r,oD0)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_47";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_47();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/live-box/index.wxml'] = [$gwx_XC_47, './components/live-box/index.wxml'];else __wxAppCode__['components/live-box/index.wxml'] = $gwx_XC_47( './components/live-box/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/live-box/index.wxss'] = setCssToHead([".",[1],"live-box{background:#000;height:",[0,388],";margin:",[0,30]," auto 0;position:relative;width:",[0,690],"}\n.",[1],"live-player{display:block;height:100%;position:relative;width:100%}\n.",[1],"live-action-wrapper{box-sizing:border-box;height:100%;left:0;padding-top:",[0,150],";position:absolute;top:0;width:100%;z-index:10}\n.",[1],"live-logo-wrapper{box-sizing:border-box;height:",[0,60],";width:auto}\n.",[1],"live-w{height:",[0,35],";left:",[0,22],";top:",[0,22],";width:",[0,131],";z-index:1}\n.",[1],"live-i,.",[1],"live-w{position:absolute}\n.",[1],"live-i{display:block;height:",[0,100],";left:50%;margin-left:",[0,-50],";margin-top:",[0,-50],";top:50%;width:",[0,100],"}\n.",[1],"live-text{color:#fff;display:block;font-size:",[0,34],";font-weight:400;line-height:",[0,40],";margin:0 auto;text-align:center;width:",[0,690],"}\n.",[1],"player-action{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.7);bottom:0;box-sizing:border-box;color:#fff;display:-webkit-flex;display:flex;font-size:",[0,22],";height:",[0,70],";-webkit-justify-content:space-between;justify-content:space-between;left:0;max-width:100%;padding:",[0,10],";position:absolute;width:100vw}\n.",[1],"player-status-text{padding-left:",[0,10],";text-align:left}\n.",[1],"player-fs{height:",[0,56],";width:",[0,56],"}\n",],undefined,{path:"./components/live-box/index.wxss"});
}