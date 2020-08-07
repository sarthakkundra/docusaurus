---
id: building-for-tv
title: Building For TV Devices
---

TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications.

<div className="toggler">
  <ul role="tablist" id="toggle-platform">
    <li id="android" className="button-android" aria-selected="false" role="tab" tabIndex={0} aria-controls="androidtab" onClick="displayTab('platform', 'android')">
      Android
    </li>
    <li id="ios" className="button-ios" aria-selected="false" role="tab" tabIndex={0} aria-controls="iostab" onClick="displayTab('platform', 'ios')">
      🚧 iOS
    </li>
  </ul>
</div>

block

&gt; **Deprecated.** Use [react-native-tvos](https://github.com/react-native-community/react-native-tvos) instead. For the details please check the [0.62 release blog post](https://reactnative.dev/blog/#moving-apple-tv-to-react-native-tvos).

The RNTester app supports Apple TV; use the `` build target to build for tvOS.

## Build changes

- _Native layer_: React Native Xcode projects all now have Apple TV build targets, with names ending in the string '-tvOS'.

- _react-native init_: New React Native projects created with `` will have Apple TV target automatically created in their XCode projects.

- _JavaScript layer_: Support for Apple TV has been added to ``. You can check whether code is running on AppleTV by doing

```jsx
```

## Build changes

- _Native layer_: To run React Native project on Android TV make sure to make the following changes to ``

```xml



    ...

      ...



    ...
  --&gt;

```

- _JavaScript layer_: Support for Android TV has been added to ``. You can check whether code is running on Android TV by doing

```js
```

## Code changes

- _General support for tvOS_: Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.

- _Common codebase_: Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.

- _Access to touchable controls_: When running on Apple TV, the native view class is `, which has additional methods to make use of the tvOS focus engine. The` mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so `,` and `` will work as expected. In particular:

  - `` will be executed when the touchable view goes into focus
  - `` will be executed when the touchable view goes out of focus
  - `` will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.

* _Access to touchable controls_: When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The `mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so`, `,` and `` will work as expected. In particular:

  - `` will be executed when the touchable view goes into focus
  - `` will be executed when the touchable view goes out of focus
  - `` will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.

- _TV remote/keyboard input_: A new native class, `, sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by` (a subclass of `), that fires a JS event. This event will be picked up by instances of the` JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of `` and listen for these events, as in the following code:

* _TV remote/keyboard input_: A new native class, `, sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the` JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of `` and listen for these events, as in the following code:

```jsx
```

- _Dev Menu support_: On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )

- _TV remote animations_: `` native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.

- _Back navigation with the TV remote menu button_: The `` component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote.

- _TabBarIOS behavior_: The `component wraps the native` API, which works differently on Apple TV. To avoid jittery re-rendering of the tab bar in tvOS (see [this issue](https://github.com/facebook/react-native/issues/15081)), the selected tab bar item can only be set from Javascript on initial render, and is controlled after that by the user through native code.

* _Dev Menu support_: On the simulator, cmd-M will bring up the developer menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )

- _Known issues_:

  - [ListView scrolling](https://github.com/facebook/react-native/issues/12793). The issue can be worked around by setting `` to false in ListView and similar components. For more discussion of this issue, see [this PR](https://github.com/facebook/react-native/pull/12944).

* _Known issues_:

  - `` components do not work for now (i.e. they cannot receive focus).
