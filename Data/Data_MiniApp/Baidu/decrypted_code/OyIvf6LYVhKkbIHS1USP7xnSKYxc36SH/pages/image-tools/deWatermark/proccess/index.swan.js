var _sjsSupporter={compiler:!1};window.define("pages/image-tools/deWatermark/proccess/index.swan",(function(e,a){a.exports={componentUsingComponentMap:{"payment/Components/Navbar/Navbar.swan":["Navbar"],"payment/Components/NavbarPlaceholder/placeholder.swan":["NavbarPlaceholder"],"components/nav-bar/nav-bar.swan":["nav-bar"],"components/loading-process/index.swan":["loading-process"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view class="compress-proccess"><nav-bar id="nav-bar" titleText="图片去水印" customBg="#f5f6fa" showHome="{{true}}" showBack="{{true}}"></nav-bar><view class="content" style="padding-top: {{totalHeight}}px;height: {{screenHeight}}px"><view class="scroll"><view class="body" s-for="item,index in resultImageList"><image class="img2" image-menu-prevent mode=\'widthFix\' src="{{item.filePath}}" /><image s-if="{{item.state === 3}}" class="img1 {{showDelWaterMark?\'\':\'dis\'}}" image-menu-prevent mode=\'widthFix\' src="data:image/jpg;base64,{{item.resFilePath}}" /><image s-else-if="{{item.state === 1}}" class="img1" image-menu-prevent src="https://staticsns.cdn.bcebos.com/amis/2022-6/1656591041567/%20dewatermark-image-loading.gif" /><view s-else class="re-load"><view class="re-load__btn swan-spider-tap" data-index="{{index}}" on-bindtap="eventHappen(\'tap\', $event, \'handleReload\', \'\', \'bind\')">重试</view></view></view></view><view class="export swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleExport\', \'\', \'bind\')"><view class="export-button"><text class="badge">限免</text><text >导出图片</text></view></view><view class="contrast swan-spider-tap" on-bindtouchstart="eventHappen(\'touchstart\', $event, \'showDelwaterMarkPdf\', \'\', \'bind\')" on-bindtouchend="eventHappen(\'touchend\', $event, \'showOriginalPdf\', \'\', \'bind\')"></view></view><loading-process s-if="{{showLoading}}" msg="{{loadingMsg}}" class="swan-spider-tap" on-bindcancel="eventHappen(\'cancel\', $event, \'handleCancel\', \'\', \'bind\')"></loading-process></view>',isComponent:!1,componentPath:"pages/image-tools/deWatermark/proccess/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));