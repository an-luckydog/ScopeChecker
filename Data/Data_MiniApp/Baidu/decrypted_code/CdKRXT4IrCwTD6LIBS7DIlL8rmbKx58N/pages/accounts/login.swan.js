var _sjsSupporter={compiler:!1};window.define("pages/accounts/login.swan",(function(e,n){n.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="tips_top" s-if="{{!!errorMsg}}">{{errorMsg}}</view><view class="login-main-wrapper"><view class="logo"></view><view class="agreement"><view class="agreement-checkbox swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'onCheckAgreement\', \'\', \'bind\')"><icon s-if="{{isCheckedAgreement}}" type="success" size="{{checkAgreementSize}}" /><view s-else class="agreement-checkbox-nocheck" /></view><view class="agreement-text">阅读并同意携程的\n            <text class="agreement-link swan-spider-tap" data-jumptype="agreement" on-bindtap="eventHappen(\'tap\', $event, \'onJump\', \'\', \'bind\')">《服务协议》</text>和\n            <text class="agreement-link swan-spider-tap" data-jumptype="policy" on-bindtap="eventHappen(\'tap\', $event, \'onJump\', \'\', \'bind\')">《个人信息保护政策》</text></view></view><template s-if="{{isXiaoHongShuMode}}"><template s-if="{{isXiaoHongShuModeSupportOneTapLogin}}"><button class="btn-primary btn-login-by-mobile-onetap btn-common swan-spider-tap" hover-class="btn-primary_hover" open-type="{{isCheckedAgreement ? \'getPhoneNumber\' : \'\'}}" on-bindgetphonenumber="eventHappen(\'getphonenumber\', $event, \'onClickGetPhoneNumber\', \'\', \'bind\')" on-bindtap="eventHappen(\'tap\', $event, \'onClickGetPhoneNumberWhenNotAgree\', \'\', \'bind\')">手机号一键登录\n            </button></template><template s-else><button class="btn-primary btn-login-by-mobile-onetap btn-common swan-spider-tap" hover-class="btn-primary_hover" on-bindtap="eventHappen(\'tap\', $event, \'onClickShowDynamicLoginView\', \'\', \'bind\')">手机号登录\n            </button></template></template><template s-else><button class="btn-primary btn-login-by-mobile-onetap btn-common swan-spider-tap" hover-class="btn-primary_hover" open-type="{{isCheckedAgreement ? \'getPhoneNumber\' : \'\'}}" on-bindgetphonenumber="eventHappen(\'getphonenumber\', $event, \'onClickGetPhoneNumber\', \'\', \'bind\')" on-bindtap="eventHappen(\'tap\', $event, \'onClickGetPhoneNumberWhenNotAgree\', \'\', \'bind\')">手机号一键登录\n        </button><view class=\'btn-login-by-mobile-dynamic swan-spider-tap\' on-bindtap="eventHappen(\'tap\', $event, \'onClickShowDynamicLoginView\', \'\', \'bind\')">其他手机号登录\n        </view></template></view><view class="login-by-mobile-dynamic-wrapper" id="dynamicLoginView" s-if="{{isShowDynamicLogin}}"><view class=\'login-by-mobile-dynamic-title\'>短信验证登录\n        <icon class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'onClickHideDynamicLoginView\', \'\', \'bind\')"></icon></view><view class="login-by-mobile-dynamic-tips" s-if="{{dynamicLoginTips}}">{{dynamicLoginTips}}</view><view class="login-form_list"><view class="login-item"><input placeholder-class="input-ph" class="login-item_input" type="number" name="mobilephone" id="mobilephone" maxlength="15" placeholder="注册或绑定手机号" on-bindinput="eventHappen(\'input\', $event, \'textChange\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'getImageCode\', \'\', \'bind\')" /></view><view class="login-item" s-if="{{isShowImageCode}}"><input placeholder-class="input-ph" class="login-item_input login-item_input-auth login-item_input-picauth" placeholder="验证码右图所示" id="img_code_box" name="img_code_box" on-bindinput="eventHappen(\'input\', $event, \'textChange\', \'\', \'bind\')" /><image src="{{imgCodeUrl}}" data_hash="{{captchaID}}" id="img_code" alt="" class="auth-image swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'getImageCode\', \'\', \'bind\')" /></view><view class="login-item"><input placeholder-class="input-ph" class="login-item_input login-item_input-auth" type="text" maxlength="8" name="dyncpwd" id="dyncpwd" placeholder="短信动态码" on-bindinput="eventHappen(\'input\', $event, \'textChange\', \'\', \'bind\')" /><button s-if="{{isGetDynamicCodeEnable}}" class="btn-line login-item_auth btn-common swan-spider-tap" hover-class="btn-line_hover" on-bindtap="eventHappen(\'tap\', $event, \'sendVerifyCodeWithRiskControl\', \'\', \'bind\')">{{getDynamicText}}\n            </button><button s-else class="btn-disabled login-item_auth btn-common" disabled="true">{{getDynamicText}}\n            </button></view><button class="btn-primary btn-login btn-common swan-spider-tap" hover-class="btn-primary_hover" id="dynamicLogin" on-bindtap="eventHappen(\'tap\', $event, \'onClickDynamicLogin\', \'\', \'bind\')">登录\n        </button></view></view><view class=\'mask\' s-if="{{isShowMask}}"></view>',isComponent:!1,componentPath:"pages/accounts/login.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));