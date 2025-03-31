+function(a, p, P, b, y){
    a.braze = {};
    a.brazeQueue = [];
    for (var s = "BrazeSdkMetadata DeviceProperties Card Card_prototype_dismissCard Card_prototype_removeAllSubscriptions Card_prototype_removeSubscription Card_prototype_subscribeToClickedEvent Card_prototype_subscribeToDismissedEvent Card_fromContentCardsJson Banner CaptionedImage ClassicCard ControlCard ContentCards ContentCards_prototype_getUnviewedCardCount Feed Feed_prototype_getUnreadCardCount ControlMessage InAppMessage InAppMessage_SlideFrom InAppMessage_ClickAction InAppMessage_DismissType InAppMessage_OpenTarget InAppMessage_ImageStyle InAppMessage_Orientation InAppMessage_TextAlignment InAppMessage_CropType InAppMessage_prototype_closeMessage InAppMessage_prototype_removeAllSubscriptions InAppMessage_prototype_removeSubscription InAppMessage_prototype_subscribeToClickedEvent InAppMessage_prototype_subscribeToDismissedEvent InAppMessage_prototype_fromJson FullScreenMessage ModalMessage HtmlMessage SlideUpMessage User User_Genders User_NotificationSubscriptionTypes User_prototype_addAlias User_prototype_addToCustomAttributeArray User_prototype_addToSubscriptionGroup User_prototype_getUserId User_prototype_incrementCustomUserAttribute User_prototype_removeFromCustomAttributeArray User_prototype_removeFromSubscriptionGroup User_prototype_setCountry User_prototype_setCustomLocationAttribute User_prototype_setCustomUserAttribute User_prototype_setDateOfBirth User_prototype_setEmail User_prototype_setEmailNotificationSubscriptionType User_prototype_setFirstName User_prototype_setGender User_prototype_setHomeCity User_prototype_setLanguage User_prototype_setLastKnownLocation User_prototype_setLastName User_prototype_setPhoneNumber User_prototype_setPushNotificationSubscriptionType InAppMessageButton InAppMessageButton_prototype_removeAllSubscriptions InAppMessageButton_prototype_removeSubscription InAppMessageButton_prototype_subscribeToClickedEvent FeatureFlag FeatureFlag_prototype_getStringProperty FeatureFlag_prototype_getNumberProperty FeatureFlag_prototype_getBooleanProperty automaticallyShowInAppMessages destroyFeed hideContentCards showContentCards showFeed showInAppMessage toggleContentCards toggleFeed changeUser destroy getDeviceId initialize isPushBlocked isPushPermissionGranted isPushSupported logCardClick logCardDismissal logCardImpressions logContentCardImpressions logContentCardClick logContentCardsDisplayed logCustomEvent logFeedDisplayed logInAppMessageButtonClick logInAppMessageClick logInAppMessageHtmlClick logInAppMessageImpression logPurchase openSession requestPushPermission removeAllSubscriptions removeSubscription requestContentCardsRefresh requestFeedRefresh refreshFeatureFlags requestImmediateDataFlush enableSDK isDisabled setLogger setSdkAuthenticationSignature addSdkMetadata disableSDK subscribeToContentCardsUpdates subscribeToFeedUpdates subscribeToInAppMessage subscribeToSdkAuthenticationFailures toggleLogging unregisterPush wipeData handleBrazeAction subscribeToFeatureFlagsUpdates getAllFeatureFlags".split(" "), i = 0; i < s.length; i++){
      var m = s[i];
      m = m.replace(/\\./g, "_").replace(/^[0-9]/, "_$&");
      a.braze[m] = (new Function("return function " + m + "(){window.brazeQueue.push(arguments); return true}"))();
    }
    window.braze.getCachedContentCards = function () {
      return new window.braze.ContentCards;
    };
    window.braze.getCachedFeed = function () {
      return new window.braze.Feed;
    };
    window.braze.getUser = function () {
      return new window.braze.User;
    };
    window.braze.getFeatureFlag = function () {
      return new window.braze.FeatureFlag;
    };
    (y = p.createElement(P)).type = 'text/javascript';
    y.src = 'https://js.appboycdn.com/web-sdk/4.8/braze.min.js';
    y.async = 1;
    (b = p.getElementsByTagName(P)[0]).parentNode.insertBefore(y, b);
  }(window, document, 'script');

  function initBraze () {
    return setTimeout(function ()  {
      braze.initialize(window.BRAZE_SDK_API_KEY, {
        baseUrl: window.BRAZE_SDK_ENDPOINT,
        allowUserSuppliedJavascript: true
      });
  
      braze.automaticallyShowInAppMessages();
  
      if (window.__userMeta) {
        braze.changeUser(window.__userMeta.id);

          if (braze.getUser && braze.getUser().setFirstName) {
              braze.getUser().setFirstName(window.__userMeta.first_name);
              braze.getUser().setEmail(window.__userMeta.email);
              braze.getUser().setCustomUserAttribute('ident', window.__userMeta.ident);
              braze.getUser().setCustomUserAttribute('has_active_subscription', !!window.__userMeta.tariffPlans.length);
              braze.getUser().setCustomUserAttribute('signed_up_date', window.__userMeta.registeredAt);
          }
      } else {
        var index = window.BRAZE_PAGE_VIEW_URLS.findIndex(p => window.location.pathname.endsWith(p))

        if (typeof window.sendBrazeCustomEvent === 'function' && index !== -1) {
          window.sendBrazeCustomEvent({ eventName: 'page_view', eventData: { url: window.location.href } })
        };
      }

      braze.openSession();
      
      braze.requestPushPermission()
      window.isBrazeInitialized = true
    }, window.__brazeInitDelay * 1000);
  }
  