var _sjsSupporter={compiler:!1};window.define("pages/bindPhone/index.swan",(function(e,n){n.exports={componentUsingComponentMap:{"components/commonSmsCode/index.swan":["common-sms-code"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="line-wrapper"></view><view class="bind"><view class="inputItem"><view class="inputText">手机号</view><view class="inputFlex"><view class="inputFlex swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountryCode\', \'\', \'bind\')"><view >+{{formData.areaCode}}</view><image class="vanIcon" src="https://m.airchina.com.cn/ac/assets/iN/xcx/ic_arrow_gray_1.png" /></view><input type="number" value="{{formData.phone}}" data-type="phone" placeholder="请输入手机号" placeholder-class="placeholder" maxlength="{{formData.areaCode == \'86\' ? 11 : 20}}" on-bindinput="eventHappen(\'input\', $event, \'handInput\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'handleBlur\', \'\', \'bind\')" /></view><view s-if="{{rules.phone}}" class="input-error">手机号码格式不正确\n    </view></view><view class="inputItem"><view class="inputText">验证码</view><view class="inputFlex"><input class="inputLine" value="{{formData.vericode}}" data-type="vericode" placeholder="请输入验证码" placeholder-class="placeholder" type="number" maxlength="6" on-bindinput="eventHappen(\'input\', $event, \'handInput\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'handleBlur\', \'\', \'bind\')" /><common-sms-code phone="{{formData.phone}}" areaCode="{{formData.areaCode}}" businessType="{{formData.businessType}}" /></view><view s-if="{{rules.vericode}}" class="input-error">请输入6位数验证码\n    </view></view><view class="btn-wrapper"><button size="default" type="warn" disabled="{{disabled}}" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleConfirm\', \'\', \'bind\')">确定</button></view></view>',isComponent:!1,componentPath:"pages/bindPhone/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));