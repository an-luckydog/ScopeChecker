__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'cwx/component/perInfoProtectFloat/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c;var M=R.m;var O=R.r;var A={};var K=U===true;return {C:(C,T,E,B)=>{var a=D.show?1:0;B(a,(C,T,E)=>{if(a===1){E("view",{},(N,C)=>{if(C)L(N,"perInfoProtectFloat")},(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"pop")},(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"float-wrapper")},(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"title")},(C,T)=>{C?T("个人信息保护指引"):T()});E("view",{},(N,C)=>{if(C)L(N,"content");if(C)O(N,"bindtap","navToUrl")},(C,T,E,B,F)=>{F(D.descList,null,U?U.descList:undefined,[0,"descList"],(C,b,c,d,e,f,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"paragraph")},(C,T,E,B,F)=>{F(b,null,U?d:undefined,[...f],(C,g,h,i,j,k,T,E)=>{E("text",{},(N,C)=>{if(C||K||!!Z(i,"url")||undefined)L(N,X(g).url?"link":"");if(C||K||Z(i,"url"))R.d(N,"url",X(g).url)},(C,T)=>{C||K||Z(i,"text")?T(Y(X(g).text)):T()})})})})});E("view",{},(N,C)=>{if(C)L(N,"btns")},(C,T,E)=>{E("button",{},(N,C)=>{if(C)L(N,"agree");if(C)O(N,"bindtap","handleAgree")},(C,T)=>{C?T("同意并继续"):T()});E("button",{},(N,C)=>{if(C)L(N,"reject");if(C)O(N,"bindtap","handleReject")},(C,T)=>{C||K||U.rejectBtnText?T(Y(D.rejectBtnText)):T()})})})});E("view",{},(N,C)=>{if(C)L(N,"bg");if(C)O(N,"catchtouchmove","true")},(C)=>{})})}})},B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['cwx/component/perInfoProtectFloat/index.wxss'] = setCssToHead([".",[1],"perInfoProtectFloat{left:0;top:0;z-index:10011}\n.",[1],"perInfoProtectFloat,.",[1],"perInfoProtectFloat .",[1],"bg{background-color:rgba(0,0,0,.7);height:100%;position:fixed;width:100%}\n.",[1],"perInfoProtectFloat .",[1],"pop{align-items:center;display:flex;height:100%;justify-content:center;z-index:10000}\n.",[1],"perInfoProtectFloat .",[1],"wrapper{margin:0 ",[0,30],"}\n.",[1],"perInfoProtectFloat .",[1],"float-wrapper{background:#fff;border-radius:",[0,16],";height:",[0,790],";width:",[0,562],"}\n.",[1],"perInfoProtectFloat .",[1],"title{color:#333;font-family:PingFangSC-Medium;font-size:",[0,34],";font-weight:500;height:",[0,46],";letter-spacing:",[0,.2],";line-height:",[0,46],";margin:",[0,40]," 0 ",[0,20],";text-align:center}\n.",[1],"perInfoProtectFloat .",[1],"content{color:#333;font-family:PingFangSC-Medium;font-size:",[0,28],";font-weight:400;height:",[0,506],";letter-spacing:0;line-height:",[0,42],";margin:0 ",[0,44],";overflow:hidden;overflow-y:scroll;text-align:left}\n.",[1],"perInfoProtectFloat .",[1],"btns .",[1],"agree{background:#0086f6;border-radius:",[0,8],";color:#fff;font-family:PingFangSC-Regular;font-size:",[0,30],";font-weight:400;height:",[0,72],";letter-spacing:",[0,.3],";line-height:",[0,72],";margin:",[0,24]," ",[0,32],"}\n.",[1],"perInfoProtectFloat .",[1],"btns .",[1],"reject{background:#fff;color:#999;font-family:PingFangSC-Regular;font-size:",[0,22],";font-weight:400;height:",[0,30],";letter-spacing:0;line-height:",[0,30],"}\n.",[1],"perInfoProtectFloat wx-button,.",[1],"perInfoProtectFloat wx-button::after{border:none}\n.",[1],"perInfoProtectFloat wx-text.",[1],"link{color:#0086f6}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./cwx/component/perInfoProtectFloat/index.wxss:1:1311)",{path:"./cwx/component/perInfoProtectFloat/index.wxss"});
}