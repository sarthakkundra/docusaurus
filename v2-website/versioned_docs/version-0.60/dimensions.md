---
id: dimensions
title: Dimensions
original_id: dimensions
---

```jsx
import { Dimensions } from 'react-native';
```

You can get the application window's width and height using below code:

```jsx
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
```

&gt; Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a `StyleSheet`).

If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example.

### Example

<div className="toggler">
  <ul role="tablist" className="toggle-syntax">
    <li id="functional" className="button-functional" aria-selected="false" role="tab" tabIndex={0} aria-controls="functionaltab" onClick="displayTabs('syntax', 'functional')">
      Function Component Example
    </li>
    <li id="classical" className="button-classical" aria-selected="false" role="tab" tabIndex={0} aria-controls="classicaltab" onClick="displayTabs('syntax', 'classical')">
      Class Component Example
    </li>
  </ul>
</div>

block

```SnackPlayer name=Dimensions



```

```SnackPlayer name=Dimensions



```

# Reference

## Methods

### ``

```jsx
```

Add an event handler. Supported events:

- `: Fires when a property within the` object changes. The argument to the event handler is an object with `and` properties whose values are the same as the return values of `and`, respectively.

---

### ``

```jsx
```

Initial dimensions are set before `` is called so they should be available before any other require's are run, but may be updated later.

&gt; Note: Although dimensions are available immediately, they may change (e.g due to device rotation) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ``).

Example: ``

@param {"{"}string{"}"} dim Name of dimension as defined when calling ``. @returns {"{"}Object?{"}"} Value for the dimension.

&gt; For Android the `dimension will exclude the size used by the` (if not translucent) and ``

---

### ``

```jsx
```

Remove an event handler.

---

### ``

```jsx
```

This should only be called from native code by sending the didUpdateDimensions event.

@param {"{"}object{"}"} dims string-keyed object of dimensions to set
