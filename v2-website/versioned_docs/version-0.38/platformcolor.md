---
id: platformcolor
title: PlatformColor
---

```js
PlatformColor(color1, [color2, ...colorN]);
```

You can use the `PlatformColor` function to access native colors on the target platform by supplying the native color’s corresponding string value. You pass a string to the `PlatformColor` function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.

If you pass more than one string value to the `PlatformColor` function, it will treat the first value as the default and the rest as fallback.

```js
PlatformColor('bogusName', 'linkColor');
```

Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components.

<div className="toggler">
  <span>Developer Notes</span>
  <span role="tablist" className="toggle-devNotes">
    <button role="tab" className="button-webNote" onClick="displayTabs('devNotes', 'webNote')">Web</button>
  </span>
</div>

block

&gt; If you’re familiar with design systems, another way of thinking about this is that `` lets you tap into the local design system's color tokens so your app can blend right in!

For a full list of the types of system colors supported, see:

- Android:
  - [R.attr](https://developer.android.com/reference/android/R.attr) - `` prefix
  - [R.color](https://developer.android.com/reference/android/R.color) - `` prefix
- [iOS UIColor](https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors)

## Example

```jsx
```

The string value provided to the `function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a` or a ``, as shown on the example above.

&gt; **Note:** You can find a complete example that demonstrates proper, intended use of `` in [PlatformColorExample.js](https://github.com/facebook/react-native/blob/master/RNTester/js/examples/PlatformColor/PlatformColorExample.js).
