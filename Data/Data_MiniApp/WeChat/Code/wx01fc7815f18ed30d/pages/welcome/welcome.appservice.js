$gwx_XC_34=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];
function gz$gwx_XC_34_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_34=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_34=true;
var x=['./pages/welcome/welcome.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_34_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_34";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_34();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/welcome/welcome.wxml'] = [$gwx_XC_34, './pages/welcome/welcome.wxml'];else __wxAppCode__['pages/welcome/welcome.wxml'] = $gwx_XC_34( './pages/welcome/welcome.wxml' );
	;__wxRoute = "pages/welcome/welcome";__wxRouteBegin = true;__wxAppCurrentFile__="pages/welcome/welcome.js";define("pages/welcome/welcome.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(){getApp();var t=require("../../utils/relationship.js");Page({data:{second_height:0,screenData:"我",result:"",id1:"丈夫",id2:"妻子",id3:"back",id4:"clean",id5:"爸爸",id6:"妈妈",id7:"哥哥",id8:"弟弟",id9:"姐姐",id10:"妹妹",id11:"儿子",id12:"女儿",id13:"each",id14:"=",id15:"?",isTrue:!1,sex:1},onLoad:function(t){},fx:function(t){},onShareAppMessage:function(){return{title:"亲戚关系太复杂，还不知怎么称呼？快来算一算！",path:"/pages/index/index",imageUrl:"../../images/shareBack.jpg"}},switchChange:function(t){t.detail.value?this.setData({sex:0}):this.setData({sex:1})},clickButton:function(e){var i=this.data.screenData.toString(),a=this.data.result.toString(),s=e.target.id;if(s==this.data.id3){if("我"==i)return;i=i.substring(0,i.length-3),a=d=t({text:i,sex:this.data.sex,reverse:!1,type:"default"})}else if(s==this.data.id4)i="我",a="";else{i=i.substring(0,i.length);var d=t({text:i,sex:this.data.sex,reverse:!1,type:"default"});if(console.log(d),s==this.data.id14){if(i.length>=22)return void(a="关系有点远，年长就叫老祖宗吧~");a=d}else if(s==this.data.id13){if(i.length>=22)return void(a="关系有点远，年长就叫老祖宗吧~");this.data.isTrue?(d=t({text:i,sex:this.data.sex,reverse:!1,type:"default"}),this.setData({isTrue:!1})):(d=t({text:i,sex:this.data.sex,reverse:!0,type:"default"}),this.setData({isTrue:!0})),a=d}else s==this.data.id15?wx.previewImage({urls:["https://hfh7.com/wp-content/uploads/2020/09/202009011551592.jpg"]}):i.length>=22?a="关系有点远，年长就叫老祖宗~\n同龄人就叫帅哥美女吧":1==this.data.sex&&s==this.data.id1&&"我"==i||0==this.data.sex&&s==this.data.id2&&"我"==i||(d=t({text:i=i+"的"+s,sex:this.data.sex,reverse:!1,type:"default"}),this.isNull(d)&&(d="哎呀，关系太复杂了啊，我算不出来"),a=d)}this.setData({screenData:i,result:a})},naviIndex:function(t){wx.reLaunch({url:"/pages/index/index"})},isNull:function(t){return 0==t.length}})}();
},{isPage:true,isComponent:true,currentFile:'pages/welcome/welcome.js'});require("pages/welcome/welcome.js");