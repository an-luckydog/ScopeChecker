var _sjsSupporter={compiler:!1};window.define("pages/image-tools/deWatermark/index.swan",(function(e,n){n.exports={componentUsingComponentMap:{"payment/Components/Navbar/Navbar.swan":["Navbar"],"payment/Components/NavbarPlaceholder/placeholder.swan":["NavbarPlaceholder"],"components/nav-bar/nav-bar.swan":["nav-bar"],"components/loading-process/index.swan":["loading-process"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view class="compress"><nav-bar id="nav-bar" titleText="图片去水印" customBg="#f7f9fc" showBack="{{true}}"></nav-bar><view class="content" style="padding-top: {{totalHeight}}px"><view class="banner"><view class="banner-title"><image src="https://staticsns.cdn.bcebos.com/amis/2022-9/1663568381552/pic-dewatermark.png" mode="widthFix" class="banner-title-icon"></image><text >图片去水印</text></view><image src="https://staticsns.cdn.bcebos.com/amis/2022-8/1660630822634/pic-dewatermark.png" mode="widthFix" class="banner-back"></image></view><view class="transform-container"><view class="introduce"><view class="h4">功能介绍</view><view class="list"><view class="item">· 去除图片上的水印图案</view><view class="item">· 去除后的图片将保存至网盘【文档加工-图片去水印】文件夹</view></view></view></view><view class="bottom {{isIpx ? \'ipx\': \'\'}}"><button class="btn local swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleLocalFile\', \'\', \'bind\')">选择本地图片</button><button class="btn swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handlePanFile\', \'\', \'bind\')">选择网盘中的图片</button></view></view><loading-process s-if="{{showLoading}}" msg="上传中，请稍候..." class="swan-spider-tap" on-bindcancel="eventHappen(\'cancel\', $event, \'handleCancel\', \'\', \'bind\')"></loading-process></view>',isComponent:!1,componentPath:"pages/image-tools/deWatermark/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));