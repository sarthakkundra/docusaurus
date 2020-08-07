---
id: dynamiccolorios
title: DynamicColorIOS
original_id: dynamiccolorios
---

The `DynamicColorIOS` function is a platform color type specific to iOS.

```jsx
DynamicColorIOS({ light: color, dark: color });
```

`DynamicColorIOS` takes a single argument as an object with two keys: `dark` and `light`. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.

&gt; In the future, more keys might become available for different user preferences, like high contrast.

At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes.

<div className="toggler">
  <span>Developer Notes</span>
  <span role="tablist" className="toggle-devNotes">
    <button role="tab" className="button-webNote" onClick="displayTabs('devNotes', 'webNote')">Web</button>
    <button role="tab" className="button-iosNote" onClick="displayTabs('devNotes', 'iosNote')">iOS</button>
  </span>
</div>

block

&gt; If you’re familiar with `` in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!

&gt; The `function is similar to the iOS native methods [`](https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider)

## Example

```jsx
```
