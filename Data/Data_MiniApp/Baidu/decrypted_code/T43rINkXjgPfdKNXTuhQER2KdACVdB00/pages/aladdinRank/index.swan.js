var _sjsSupporter={compiler:!1};window.define("pages/aladdinRank/index.swan",(function(e,a){a.exports={componentUsingComponentMap:{"components/GameDetailNavigationBar.swan":["game-detail-navigation-bar"],"components/Footer.swan":["footer-label"],"components/BookModal.swan":["book-modal"],"components/InstallModal.swan":["install-modal"],"components/PauseModal.swan":["pause-modal"],"components/FloatDownload.swan":["float-download"],"components/GameDetailGuide.swan":["game-detail-guide"],"components/AlaGameItemWrapper.swan":["ala-game-item-wrapper"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view class="aladdinRank-page"><view class="page-content" style="padding-top:{{\'\' + contentPaddingTop + \'px\'}}"><view class="nav-wrapper"><game-detail-navigation-bar is-transparent="{{false}}" title="{{title}}" show-title="{{true}}" show-home="{{true}}" back-icon-white="{{false}}" is-fixed="{{false}}" data-on-click-back-proxy="onClickBack" class="swan-spider-tap" on-bindonClickBack="eventHappen(\'onClickBack\', $event, \'__handlerProxy\', \'\', \'bind\')" /><view class="filter-wrapper" s-if="tabList.length"><view class="filter-noscroll" s-if="tabList.length <= 4 && tabList.length >1"><view class="filter-item {{[index===currentTab?\'selected\':\'\']}} swan-spider-tap" s-for="item, index in tabList" data-tap-proxy="onTabClick" data-tap-args="{{[index]}}" on-bindtap="eventHappen(\'tap\', $event, \'__handlerProxy\', \'\', \'bind\')">{{item.title}}\n                        <view class="bottom-line" s-if="index === currentTab" /></view></view><scroll-view class="filter-scroll" s-elif="tabList.length >4" scroll-x="{{true}}"><view class="scroll-item" s-for="item, index in tabList"><view class="filter-item {{[index===currentTab?\'selected\':\'\']}} swan-spider-tap" data-tap-proxy="onTabClick" data-tap-args="{{[index]}}" on-bindtap="eventHappen(\'tap\', $event, \'__handlerProxy\', \'\', \'bind\')">{{item.title}}\n                            <view class="bottom-line" s-if="index === currentTab" /></view></view></scroll-view></view></view><view class="gamelist-wrapper"><template s-for="tab, tabIndex in tabList"><template s-if="tabIndex === currentTab"><ala-game-item-wrapper s-for="item, index in tab.app_detail.list" item="{{item}}" index="{{index}}" is-for-ranking="{{type === 1}}" channelid="{{channelid}}" /></template></template><footer-label s-if="isLoaded" show-loading-more="{{hasMore}}" show-footer-line="{{false}}" /></view><float-download is-from-sub-page="{{true}}" /><game-detail-guide guide-info="更多好玩游戏~" s-if="isShowGuide" data-on-guide-close-proxy="onGuideClose" class="swan-spider-tap" on-bindonGuideClose="eventHappen(\'onGuideClose\', $event, \'__handlerProxy\', \'\', \'bind\')" /><book-modal s-if="isShowBookModal" /><install-modal s-if="showIntallModal" is-from-sub-page="{{true}}" /><pause-modal s-if="showPauseModal" is-from-sub-page="{{true}}" /></view></view>',isComponent:!1,componentPath:"pages/aladdinRank/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));