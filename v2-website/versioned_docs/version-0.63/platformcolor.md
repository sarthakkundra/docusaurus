---
id: platformcolor
title: PlatformColor
original_id: platformcolor
---

```js
PlatformColor(color1, [color2, ...colorN]);
```

You can use the `PlatformColor` function to access native colors on the target platform by supplying the native color’s corresponding string value. You pass a string to the `PlatformColor` function, and provided it exists on that platform, that native color will be applied to the control or Javascript component specified in your style. All native color logic also translates if applicable, meaning if the native color specified is themes and/or high contrast sensitive, that logic will also transfer to the JavaScript component being colored.

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

The string value provided to the `function must match and agree with the same string as it exists on the native platform the app is being run on. This means to avoid runtime errors the function should be wrapped in a platform check, either through a` or a ``.

&gt; **Note:** You can find a complete example that demonstrates proper, intended use of `` in [PlatformColorExample.js](https://github.com/facebook/react-native/blob/master/RNTester/js/examples/PlatformColor/PlatformColorExample.js).
