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
Z([[7],[3,'isChoose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./pages/navigator/pintu/cut/cut.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var t7B=_n('privacy')
_(r,t7B)
var a6B=_v()
_(r,a6B)
if(_oz(z,0,e,s,gg)){a6B.wxVkey=1
}
a6B.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/navigator/pintu/cut/cut.wxml'] = [$gwx_XC_25, './pages/navigator/pintu/cut/cut.wxml'];else __wxAppCode__['pages/navigator/pintu/cut/cut.wxml'] = $gwx_XC_25( './pages/navigator/pintu/cut/cut.wxml' );
	;__wxRoute = "pages/navigator/pintu/cut/cut";__wxRouteBegin = true;__wxAppCurrentFile__="pages/navigator/pintu/cut/cut.js";define("pages/navigator/pintu/cut/cut.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(){getApp();Page({data:{canvasInfo:{id:"mycanvas",width:320,height:568},showInfo:{width:320,height:568},systemInfo:{width:320,height:568,screenHeight:0},fixedHeight:0,img:"",isChoose:!1,ad:{}},onLoad:function(t){var e=this;wx.getSystemInfo({success:function(t){console.log(t.screenHeight),e.setData({"systemInfo.width":t.windowWidth,"systemInfo.height":t.windowHeight,"systemInfo.screenHeight":t.screenHeight})}}),getApp().showADlist().then((function(){var t=wx.getStorageSync("adlist");console.log(t.ad.anzhuoad),e.setData({appConfig:t}),e.showinte()}))},showinte:function(){let t;this.data.appConfig.ad.wxinter&&(wx.createInterstitialAd&&(t=wx.createInterstitialAd({adUnitId:this.data.appConfig.ad.wxinter}),t.onLoad(()=>{}),t.offClose(),t.offError(),t.onError(t=>{}),t.onClose(()=>{})),t&&(1==this.data.appConfig.ad.insetgp?this.inadset=setInterval(()=>{t.show().catch(t=>{console.error(t)})},1e3*this.data.appConfig.ad.wxinsettime):setTimeout(()=>{t.show().catch(t=>{console.error(t)})},1e3*this.data.appConfig.ad.wxinsettime)))},imageToCanvas:function(t){var e=this.data.canvasInfo,i=wx.createCanvasContext(e.id,this);i.drawImage(t,0,0,e.width,e.height),i.draw()},cutImage:function(t){var e=this;wx.getImageInfo({src:t,success:function(i){var o=i.width,n=i.height;wx.getSystemInfo({success:function(i){e.setData({"systemInfo.width":i.windowWidth,"systemInfo.height":i.windowHeight,"canvasInfo.width":o,"canvasInfo.height":n,"systemInfo.screenHeight":i.screenHeight,"showInfo.width":i.windowWidth,"showInfo.height":i.windowWidth/o*n});var a=e.data.systemInfo.height/2,s=e.data.showInfo.height+10;console.log("fh:"+a),console.log("ch:"+s),s>a&&e.setData({fixedHeight:s-a}),e.imageToCanvas(t)}})}})},previewImage:function(t){var e=this.data.canvasInfo,i=t.currentTarget.dataset.index;wx.canvasToTempFilePath({canvasId:e.id,x:i%3*e.width/3,y:parseInt(i/3)*e.height/3,width:e.width/3,height:e.height/3,success:function(t){console.log("成功路径： "+t.tempFilePath);var e=[];e.push(t.tempFilePath),wx.previewImage({urls:e})}},this)},chooseImage:function(t){var e=this;wx.chooseImage({count:1,sizeType:["compressed"],success:function(t){var i=t.tempFilePaths[0];wx.showLoading({title:"安全检测中..."}),wx.uploadFile({url:getApp().globalData.appurl+"SensitiveProcessingInfo/pictureInvolvingYellowCheck",formData:{appid:wx.getAccountInfoSync().miniProgram.appId},filePath:i,name:"file",header:{"content-type":"multipart/form-data"},success:function(t){wx.hideLoading();const o=JSON.parse(t.data);console.log(i),200==o.code&&0==o.resultStatus?(wx.showToast({title:"图片检测成功",icon:"none",duration:1500}),e.setData({img:i,isChoose:!0}),e.cutImage(i)):wx.showModal({title:"提示",content:o.data,success:()=>{}})},fail:function(t){wx.showToast({title:"上传失败",icon:"none",duration:2e3})},complete:function(t){console.log(t.errMsg)}})}})},onShareAppMessage:function(t){return{title:"九宫格切图",path:"/pages/navigator/pintu/cut/cut"}},onShareTimeline:function(t){return{title:"九宫格切图"}},saveAll:function(){var t=this.data.canvasInfo;wx.showLoading({title:"正在保存"});for(var e=0;e<9;e++)wx.canvasToTempFilePath({canvasId:t.id,x:e%3*t.width/3,y:parseInt(e/3)*t.height/3,width:t.width/3,height:t.height/3,success:function(t){wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){wx.hideLoading({complete:function(t){wx.showToast({title:"保存成功"})}})},fail:function(t){console.log("err:"+t),wx.hideLoading({complete:function(t){}}),wx.showToast({title:"保存失败",icon:"none"})}})}},this)}})}();
},{isPage:true,isComponent:true,currentFile:'pages/navigator/pintu/cut/cut.js'});require("pages/navigator/pintu/cut/cut.js");