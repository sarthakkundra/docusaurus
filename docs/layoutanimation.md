---
id: layoutanimation
title: LayoutAnimation
---

Automatically animates views to their new positions when the next layout happens.

A common way to use this API is to call it before updating the state hook in functional components and calling `setState` in class components.

Note that in order to get this to work on **Android** you need to set the following flags via `UIManager`:

```js
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
```

## Example

```SnackPlayer name=LayoutAnimation&supportedPlatforms=android,ios

import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}
      >
        <Text>Press me to {expanded ? "collapse" : "expand"}!</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={style.tile}>
          <Text>I disappear sometimes!</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  tile: {
    background: "lightGrey",
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  }
});

export default App;

```

block

---

# Reference

## Methods

### ``

```jsx
```

Schedules an animation to happen on the next layout.

#### Parameters:

| Name              | Type     | Required | Description                                                |
| ----------------- | -------- | -------- | ---------------------------------------------------------- |
| config            | object   | Yes      | See config description below.                              |
| onAnimationDidEnd | function | No       | Called when the animation finished. Only supported on iOS. |

The `parameter is an object with the keys below. [`](layoutanimation.md#create) returns a valid object for `, and the [`](layoutanimation.md#presets) objects can also all be passed as the ``.

- `` in milliseconds
- ``, optional config for animating in new views
- ``, optional config for animating views that have been updated
- ``, optional config for animating views as they are removed

The config that's passed to `,`, or `` has the following keys:

- ``, the [animation type](layoutanimation.md#types) to use
- `, the [layout property](layoutanimation.md#properties) to animate (optional, but recommended for` and ``)
- `(number, optional and only for use with`)
- `` (number, optional)
- `` (number, optional)
- `` (number, optional)

---

### ``

```jsx
```

Helper that creates an object (with `,`, and `fields) to pass into [`](layoutanimation.md#configurenext). The `parameter is an [animation type](layoutanimation.md#types), and the` parameter is a [layout property](layoutanimation.md#properties).

Example usage:

      Function Component Example


      Class Component Example

```SnackPlayer name=LayoutAnimation&supportedPlatforms=android,ios



```

```SnackPlayer name=LayoutAnimation&supportedPlatforms=android,ios



```

## Properties

### Types

An enumeration of animation types to be used in the [``](layoutanimation.md#create) method, or in the `/`/`configs for [`](layoutanimation.md#configurenext). (example usage: ``)

| Types         |
| ------------- |
| spring        |
| linear        |
| easeInEaseOut |
| easeIn        |
| easeOut       |
| keyboard      |

---

### Properties

An enumeration of layout properties to be animated to be used in the [``](layoutanimation.md#create) method, or in the `/`/`configs for [`](layoutanimation.md#configurenext). (example usage: ``)

| Properties |
| ---------- |
| opacity    |
| scaleX     |
| scaleY     |
| scaleXY    |

---

### Presets

A set of predefined animation configs to pass into [``](layoutanimation.md#configurenext).

| Presets       | Value |
| ------------- | ----- |
| easeInEaseOut | ``    |
| linear        | ``    |
| spring        | ``    |

---

### ``

Calls `with`.

---

### ``

Calls `with`.

---

### ``

Calls `with`.

Example usage:

      Function Component Example


      Class Component Example

```SnackPlayer name=LayoutAnimation&supportedPlatforms=android,ios



```

```SnackPlayer name=LayoutAnimation&supportedPlatforms=android,ios



```
