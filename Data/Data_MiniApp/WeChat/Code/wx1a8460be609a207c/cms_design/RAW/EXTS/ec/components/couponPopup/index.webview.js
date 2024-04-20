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
Z([3,'cnpidx_1'])
Z([3,'goodsClick'])
Z([[7],[3,'couponList']])
Z([[7],[3,'currentGoodsId']])
Z([3,'cnpidx_2'])
Z([[2,'==='],[[7],[3,'mode']],[1,'sigle']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([3,'cnpidx_3'])
Z([[2,'==='],[[7],[3,'mode']],[1,'multiple']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var c9J=_n('view')
_rz(z,c9J,'id',0,e,s,gg)
var o0J=_mz(z,'coupon-sigle',['bind:tap',1,'couponList',1,'currentGoodsId',2,'id',3,'visible',4],[],e,s,gg)
_(c9J,o0J)
var lAK=_mz(z,'coupon-multiple',['bind:tap',6,'couponList',1,'currentGoodsId',2,'id',3,'visible',4],[],e,s,gg)
_(c9J,lAK)
_(r,c9J)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'] = [$gwx_XC_24, './cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'];else __wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml'] = $gwx_XC_24( './cms_design/RAW/EXTS/ec/components/couponPopup/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['cms_design/RAW/EXTS/ec/components/couponPopup/index.wxss'] = setCssToHead([[2,"./cms_design/RAW/EXTS/ec/titan.component.wxss"],[2,"./ec/RAW/styles/ecStyle.wxss"],".",[1],"coupon-popup-sigle .",[1],"coupon-custom-popup{top:",[0,168],"!important}\n.",[1],"popup-contianer{background:linear-gradient(0deg,hsla(0,0%,100%,.94),hsla(0,0%,100%,.94)),var(--theme-main);height:",[0,240],";width:calc(100vw - ",[0,56],")}\n.",[1],"popup-contianer .",[1],"title{-webkit-align-items:center;align-items:center;color:var(--theme-main);display:-webkit-flex;display:flex;font-size:",[0,26],";font-weight:400;height:",[0,72],";line-height:",[0,72],";padding-left:",[0,28],";width:100%}\n.",[1],"title .",[1],"title-icon{margin-right:",[0,12],"}\n.",[1],"popup-contianer .",[1],"coupon-content{-webkit-align-items:center;align-items:center;background:linear-gradient(274.88deg,hsla(0,0%,100%,.5),#fff 56.11%);border:",[0,2]," solid #fff;border-radius:var(--border-radius-s10);box-shadow:0 ",[0,8]," ",[0,20]," rgba(0,0,0,.04);display:-webkit-flex;display:flex;height:",[0,152],";margin-left:",[0,16],";padding:",[0,34]," ",[0,28],";width:calc(100% - ",[0,32],")}\n.",[1],"coupon-content .",[1],"icon{background:var(--theme-main);border-radius:50%;height:",[0,84],";width:",[0,84],"}\n.",[1],"coupon-content .",[1],"icon .",[1],"icon-img{height:100%;width:100%}\n.",[1],"coupon-info{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin-left:",[0,24],"}\n.",[1],"coupon-name{font-size:",[0,28],";font-weight:500;line-height:",[0,34],"}\n.",[1],"coupon-name,.",[1],"coupon-price{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;height:",[0,42],"}\n.",[1],"coupon-price{color:var(--theme-main);margin-left:",[0,10],"}\n.",[1],"coupon-price .",[1],"symblo{font-size:",[0,26],";font-weight:600;line-height:",[0,32],"}\n.",[1],"coupon-price .",[1],"num{font-size:",[0,42],";font-weight:700;line-height:",[0,42],";margin-left:",[0,2],"}\n.",[1],"coupon-info .",[1],"coupon-time{color:#757575;font-size:",[0,24],";line-height:",[0,28],";margin-top:",[0,12],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./cms_design/RAW/EXTS/ec/components/couponPopup/index.wxss:1:10028)",{path:"./cms_design/RAW/EXTS/ec/components/couponPopup/index.wxss"});
}