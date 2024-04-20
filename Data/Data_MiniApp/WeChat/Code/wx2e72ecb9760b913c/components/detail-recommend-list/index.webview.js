$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldRecommendShow']])
Z([3,'recommend-list-holder'])
Z([3,'main-header'])
Z([3,'相关推荐'])
Z([[7],[3,'commendList']])
Z([3,'single-doctor'])
Z([3,'redirect'])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./components/detail-recommend-list/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var a4K=_v()
_(r,a4K)
if(_oz(z,0,e,s,gg)){a4K.wxVkey=1
var t5K=_n('view')
_rz(z,t5K,'class',1,e,s,gg)
var e6K=_n('text')
_rz(z,e6K,'class',2,e,s,gg)
var b7K=_oz(z,3,e,s,gg)
_(e6K,b7K)
_(t5K,e6K)
var o8K=_v()
_(t5K,o8K)
var x9K=function(fAL,o0K,cBL,gg){
var oDL=_n('view')
_rz(z,oDL,'class',5,fAL,o0K,gg)
var cEL=_mz(z,'single-topic',['navigateType',6,'topicData',1],[],fAL,o0K,gg)
_(oDL,cEL)
_(cBL,oDL)
return cBL
}
o8K.wxXCkey=4
_2z(z,4,x9K,e,s,gg,o8K,'item','index','')
_(a4K,t5K)
}
a4K.wxXCkey=1
a4K.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/detail-recommend-list/index.wxml'] = [$gwx_XC_25, './components/detail-recommend-list/index.wxml'];else __wxAppCode__['components/detail-recommend-list/index.wxml'] = $gwx_XC_25( './components/detail-recommend-list/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/detail-recommend-list/index.wxss'] = setCssToHead([".",[1],"recommend-list-holder{background-color:#fff;padding:",[0,24]," 0 0}\n.",[1],"medicine-classroom-list{font-family:PingFangSC-Regular;padding:",[0,40]," 0 0 ",[0,30],";position:relative;width:100%}\n.",[1],"main-header{font-size:",[0,32],";padding-left:15px}\n.",[1],"medicine-classroom{border-bottom:",[0,1]," solid #e7e7e7;box-sizing:border-box;overflow:hidden;padding:",[0,40]," 0}\n.",[1],"medicine-classroom.",[1],"last-one{border-bottom:",[0,1]," solid transparent}\n.",[1],"medicine-classroom .",[1],"header{color:#323232;font-size:",[0,30],";letter-spacing:0;line-height:",[0,34],";margin-bottom:",[0,34],";width:",[0,680],"}\n.",[1],"medicine-classroom .",[1],"main{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:",[0,72],";width:100%}\n.",[1],"medicine-classroom .",[1],"main-img{border:",[0,1]," solid hsla(0,0%,91%,.4);border-radius:50%;display:block;height:",[0,72],";width:",[0,72],"}\n.",[1],"medicine-classroom .",[1],"main-content{height:",[0,72],";margin-left:",[0,20],";width:",[0,600],"}\n.",[1],"main-content .",[1],"main-content__top{margin-bottom:",[0,12],";width:100%}\n.",[1],"main-content .",[1],"main-content__top,.",[1],"main-content__bottom{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;overflow:hidden}\n.",[1],"doctor-name,.",[1],"doctor-post,.",[1],"doctor-title,.",[1],"hospital,.",[1],"three{font-size:",[0,26],";letter-spacing:0;line-height:",[0,30],"}\n.",[1],"hospital{line-height:",[0,34],";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:",[0,500],"}\n.",[1],"doctor-post{margin:0 ",[0,10],"}\n.",[1],"three{background:#ffefeb;border-radius:2px;color:#fd7352;font-size:",[0,24],";margin-right:",[0,16],";padding:",[0,2]," ",[0,6],"}\n.",[1],"doctor-post,.",[1],"doctor-title,.",[1],"hospital{color:#999}\n.",[1],"doctor-name{color:#323232}\n",],undefined,{path:"./components/detail-recommend-list/index.wxss"});
}