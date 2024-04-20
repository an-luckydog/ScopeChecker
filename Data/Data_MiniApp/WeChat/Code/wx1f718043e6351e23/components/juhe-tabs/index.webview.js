$gwx_XC_42=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_42 || [];
function gz$gwx_XC_42_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'styleCategortry']],[1,1]],[[7],[3,'tabList']]],[[6],[[7],[3,'tabList']],[3,'length']]])
Z([3,'tabs'])
Z([3,'tab'])
Z([3,'index'])
Z(z[2])
Z([[7],[3,'tabList']])
Z(z[3])
Z([3,'chooseTabActive'])
Z([a,[3,'tab-item '],[[2,'?:'],[[2,'=='],[[7],[3,'cid']],[[6],[[7],[3,'tab']],[3,'data_id']]],[1,'active'],[1,'']]])
Z([[6],[[7],[3,'tab']],[3,'data_id']])
Z(z[9])
Z([[7],[3,'tab']])
Z([[6],[[7],[3,'tab']],[3,'title']])
Z([a,[[6],[[7],[3,'tab']],[3,'title']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'styleCategortry']],[1,2]],[[7],[3,'tabList']]],[[6],[[7],[3,'tabList']],[3,'length']]])
Z([3,'icon-industryList'])
Z([3,'icon-swiper-wrapper'])
Z([[2,'>'],[[6],[[7],[3,'tabList']],[3,'length']],[1,1]])
Z([[7],[3,'autoplay']])
Z([3,'swiperChange'])
Z([1,true])
Z([3,'icon-swiper'])
Z([[7],[3,'iconSwiperActive']])
Z([a,[3,'height:'],[[2,'?:'],[[2,'>'],[[6],[[6],[[7],[3,'tabList']],[[7],[3,'iconSwiperActive']]],[3,'length']],[1,5]],[1,340],[1,180]],[3,'rpx']])
Z(z[5])
Z(z[3])
Z([3,'swiper-item'])
Z([3,'banner-swiper-item'])
Z([3,'none'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'bannerItem'])
Z([3,'swiper-indicator'])
Z(z[5])
Z(z[3])
Z([a,[3,'swiper-indicator-dot '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'iconSwiperActive']]],[1,'swiper-indicator-dot-active'],[1,'']]])
Z(z[21])
Z([a,z[23][1],z[23][2],z[23][3]])
Z([[8],'item',[[6],[[7],[3,'tabList']],[1,0]]])
Z(z[30])
Z(z[30])
Z([3,'icon-item'])
Z([[7],[3,'item']])
Z(z[3])
Z(z[7])
Z([3,'banner-item-one'])
Z([[6],[[7],[3,'item']],[3,'data_id']])
Z(z[45])
Z(z[41])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([3,'banner-item-img'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'banner']])
Z([3,'banner-item-text'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'tabss'])
Z([3,'tabContain'])
Z([3,'item'])
Z([[7],[3,'pageList']])
Z([3,'key'])
Z([[7],[3,'change']])
Z(z[41])
Z([[7],[3,'op_id']])
Z([[7],[3,'type']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_42=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_42=true;
var x=['./components/juhe-tabs/index.wxml'];d_[x[0]]={}
d_[x[0]]["bannerItem"]=function(e,s,r,gg){
var z=gz$gwx_XC_42_1()
var b=x[0]+':bannerItem'
r.wxVkey=b
gg.f=$gdc(f_["./components/juhe-tabs/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',40,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',43,'class',1,'data-id',2,'data-index',3,'data-item',4,'data-name',5],[],cF,fE,gg)
var oJ=_mz(z,'image',['class',49,'mode',1,'src',2],[],cF,fE,gg)
_(cI,oJ)
var lK=_n('view')
_rz(z,lK,'class',52,cF,fE,gg)
var aL=_oz(z,53,cF,fE,gg)
_(lK,aL)
_(cI,lK)
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,41,oD,e,s,gg,xC,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_42_1()
var xM7=_v()
_(r,xM7)
if(_oz(z,0,e,s,gg)){xM7.wxVkey=1
var fO7=_n('view')
_rz(z,fO7,'class',1,e,s,gg)
var cP7=_n('view')
_rz(z,cP7,'class',2,e,s,gg)
var hQ7=_v()
_(cP7,hQ7)
var oR7=function(oT7,cS7,lU7,gg){
var tW7=_mz(z,'view',['bindtap',7,'class',1,'data-id',2,'data-index',3,'data-item',4,'data-name',5],[],oT7,cS7,gg)
var eX7=_n('text')
var bY7=_oz(z,13,oT7,cS7,gg)
_(eX7,bY7)
_(tW7,eX7)
_(lU7,tW7)
return lU7
}
hQ7.wxXCkey=2
_2z(z,5,oR7,e,s,gg,hQ7,'tab','index','index')
_(fO7,cP7)
_(xM7,fO7)
}
var oN7=_v()
_(r,oN7)
if(_oz(z,14,e,s,gg)){oN7.wxVkey=1
var oZ7=_n('view')
_rz(z,oZ7,'class',15,e,s,gg)
var x17=_n('view')
_rz(z,x17,'class',16,e,s,gg)
var o27=_v()
_(x17,o27)
if(_oz(z,17,e,s,gg)){o27.wxVkey=1
var f37=_mz(z,'swiper',['autoplay',18,'bindchange',1,'circular',2,'class',3,'current',4,'style',5],[],e,s,gg)
var c47=_v()
_(f37,c47)
var h57=function(c77,o67,o87,gg){
var a07=_n('swiper-item')
var tA8=_n('view')
_rz(z,tA8,'class',26,c77,o67,gg)
var eB8=_mz(z,'view',['class',27,'hoverClass',1],[],c77,o67,gg)
var bC8=_v()
_(eB8,bC8)
var oD8=_oz(z,30,c77,o67,gg)
var xE8=_gd(x[0],oD8,e_,d_)
if(xE8){
var oF8=_1z(z,29,c77,o67,gg) || {}
var cur_globalf=gg.f
bC8.wxXCkey=3
xE8(oF8,oF8,bC8,gg)
gg.f=cur_globalf
}
else _w(oD8,x[0],3,508)
_(tA8,eB8)
_(a07,tA8)
_(o87,a07)
return o87
}
c47.wxXCkey=2
_2z(z,24,h57,e,s,gg,c47,'item','index','index')
_(o27,f37)
var fG8=_n('view')
_rz(z,fG8,'class',31,e,s,gg)
var cH8=_v()
_(fG8,cH8)
var hI8=function(cK8,oJ8,oL8,gg){
var aN8=_n('view')
_rz(z,aN8,'class',34,cK8,oJ8,gg)
_(oL8,aN8)
return oL8
}
cH8.wxXCkey=2
_2z(z,32,hI8,e,s,gg,cH8,'item','index','index')
_(o27,fG8)
}
else{o27.wxVkey=2
var tO8=_mz(z,'view',['class',35,'style',1],[],e,s,gg)
var eP8=_v()
_(tO8,eP8)
var bQ8=_oz(z,38,e,s,gg)
var oR8=_gd(x[0],bQ8,e_,d_)
if(oR8){
var xS8=_1z(z,37,e,s,gg) || {}
var cur_globalf=gg.f
eP8.wxXCkey=3
oR8(xS8,xS8,eP8,gg)
gg.f=cur_globalf
}
else _w(bQ8,x[0],3,891)
_(o27,tO8)
}
o27.wxXCkey=1
_(oZ7,x17)
_(oN7,oZ7)
}
var oT8=_n('view')
_rz(z,oT8,'class',54,e,s,gg)
var fU8=_n('view')
_rz(z,fU8,'class',55,e,s,gg)
var cV8=_v()
_(fU8,cV8)
var hW8=function(cY8,oX8,oZ8,gg){
var a28=_mz(z,'juhe-item',['change',59,'item',1,'op_id',2,'type',3],[],cY8,oX8,gg)
_(oZ8,a28)
return oZ8
}
cV8.wxXCkey=4
_2z(z,57,hW8,e,s,gg,cV8,'item','index','key')
_(oT8,fU8)
_(r,oT8)
xM7.wxXCkey=1
oN7.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_42";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_42();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/juhe-tabs/index.wxml'] = [$gwx_XC_42, './components/juhe-tabs/index.wxml'];else __wxAppCode__['components/juhe-tabs/index.wxml'] = $gwx_XC_42( './components/juhe-tabs/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/juhe-tabs/index.wxss'] = setCssToHead([".",[1],"all-text{color:#000;font-size:",[0,30],";line-height:",[0,30],"}\n.",[1],"tabss{margin-top:",[0,14],"}\n.",[1],"tabs{margin:",[0,46]," auto 0}\n.",[1],"tab,.",[1],"tabs{width:",[0,690],"}\n.",[1],"tab{box-shadow:0 0 ",[0,35]," 0 rgba(204,215,237,.66);display:-webkit-flex;display:flex;height:",[0,89],";margin-bottom:",[0,44],"}\n.",[1],"tab-item{color:#3c3d3d;font-size:",[0,24],";font-weight:700;line-height:",[0,89],";text-align:center;transition:all .2s;width:50%}\n.",[1],"tab-item wx-text{color:#0070ff}\n.",[1],"active{background-color:#006eff;position:relative}\n.",[1],"active,.",[1],"active wx-text{color:#fff}\n.",[1],"active::after{border:",[0,10]," solid transparent;border-top-color:#006eff;bottom:",[0,-18],";content:\x22\x22;height:0;left:50%;margin-left:",[0,-5],";position:absolute;width:0}\n.",[1],"tabContain{width:100%}\n.",[1],"tabContain .",[1],"videos{padding:0 ",[0,30],"}\n.",[1],"tabContain .",[1],"videos .",[1],"videoContain{height:",[0,410],";width:",[0,690],"}\n.",[1],"tabContain .",[1],"imgs{padding:0 ",[0,30],";width:",[0,690],"}\n.",[1],"icon-industryList{margin-top:",[0,28],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper{position:relative}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper{height:auto;width:",[0,750],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"swiper-item{position:relative;width:",[0,750],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"swiper-item .",[1],"icon-item{display:block;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 ",[0,42]," 0 ",[0,60],";position:relative;width:",[0,750],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"swiper-item .",[1],"icon-item .",[1],"banner-item-one{margin-right:",[0,37],";margin-top:",[0,14],";width:",[0,100],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"swiper-item .",[1],"icon-item .",[1],"banner-item-one:nth-of-type(5n){margin-right:0}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"swiper-item .",[1],"icon-item .",[1],"banner-item-one .",[1],"banner-item-img{background:#fff;border-radius:50%;box-shadow:",[0,0]," ",[0,20]," ",[0,38]," ",[0,2]," rgba(218,223,239,.8);display:block;height:",[0,84],";margin:0 auto ",[0,18],";width:",[0,84],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"swiper-item .",[1],"icon-item .",[1],"banner-item-one .",[1],"banner-item-text{color:#2f2f2f;font-size:",[0,24],";line-height:",[0,24],";text-align:center}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"icon-item{display:block;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 ",[0,42]," 0 ",[0,60],";position:relative;width:",[0,750],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"icon-item .",[1],"banner-item-one{margin-right:",[0,37],";margin-top:",[0,14],";width:",[0,100],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"icon-item .",[1],"banner-item-one:nth-of-type(5n){margin-right:0}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"icon-item .",[1],"banner-item-one .",[1],"banner-item-img{background:#fff;border-radius:50%;box-shadow:",[0,0]," ",[0,20]," ",[0,38]," ",[0,2]," rgba(218,223,239,.8);display:block;height:",[0,84],";margin:0 auto ",[0,18],";width:",[0,84],"}\n.",[1],"icon-industryList .",[1],"icon-swiper-wrapper .",[1],"icon-swiper .",[1],"icon-item .",[1],"banner-item-one .",[1],"banner-item-text{color:#2f2f2f;font-size:",[0,24],";line-height:",[0,24],";text-align:center}\n.",[1],"icon-industryList .",[1],"swiper-indicator{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;height:",[0,14],";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;text-align:center;width:100%}\n.",[1],"icon-industryList .",[1],"swiper-indicator .",[1],"swiper-indicator-dot{background:#dcdcdc;border-radius:50%;height:",[0,14],";margin:0 ",[0,5],";width:",[0,14],"}\n.",[1],"icon-industryList .",[1],"swiper-indicator .",[1],"swiper-indicator-dot-active{background:#0052d9}\n.",[1],"image-intro{margin-top:",[0,50],";width:100%}\n.",[1],"image-intro wx-image{height:",[0,185],";width:",[0,710],"}\n.",[1],"case-list{margin:",[0,38]," ",[0,24]," ",[0,40],"}\n.",[1],"case-list .",[1],"list-item{background:#fff;display:-webkit-flex;display:flex;height:",[0,180],";margin-bottom:",[0,20],"}\n.",[1],"case-list .",[1],"list-item .",[1],"list-item-img{background:#eee;height:",[0,180],";margin-right:",[0,25],";width:",[0,240],"}\n.",[1],"case-list .",[1],"list-item .",[1],"list-item-info{height:",[0,180],";padding-top:",[0,30],";text-align:left;width:",[0,380],"}\n.",[1],"case-list .",[1],"list-item .",[1],"list-item-title{-webkit-line-clamp:1;color:#156bda;font-size:",[0,28],";margin-bottom:",[0,12],"}\n.",[1],"case-list .",[1],"list-item .",[1],"list-item-summary,.",[1],"case-list .",[1],"list-item .",[1],"list-item-title{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-break:break-all}\n.",[1],"case-list .",[1],"list-item .",[1],"list-item-summary{-webkit-line-clamp:3;color:#8e8e8e;font-size:",[0,21],";line-height:",[0,33],"}\n.",[1],"download{background-color:#fdfdff;border-radius:5px;box-shadow:0 0 14px 1px #dae0f0;box-sizing:border-box;display:-webkit-flex;display:flex;height:",[0,150],";-webkit-justify-content:space-between;justify-content:space-between;margin:",[0,38]," ",[0,24],";padding:",[0,40]," ",[0,30],"}\n.",[1],"download .",[1],"download-info .",[1],"download-title{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#353535;display:-webkit-box;font-size:",[0,21],";overflow:hidden;text-overflow:ellipsis;word-break:break-all}\n.",[1],"download .",[1],"download-info .",[1],"download-tag{background-color:#3479fe;border-radius:5px;color:#fff;font-size:",[0,18],";height:",[0,38],";margin-top:",[0,10],";width:",[0,110],"}\n.",[1],"download .",[1],"download-btn,.",[1],"download .",[1],"download-info .",[1],"download-tag{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",[1],"download .",[1],"download-btn{border:1px solid #136add;border-radius:18px;color:#156bda;font-size:",[0,21],";height:",[0,50],";margin-top:",[0,6],";width:",[0,198],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/juhe-tabs/index.wxss:1:3498)",{path:"./components/juhe-tabs/index.wxss"});
}