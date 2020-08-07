---
id: touchableopacity
title: TouchableOpacity
original_id: touchableopacity
---

&gt; If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](pressable.md) API.

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

Opacity is controlled by wrapping the children in an `Animated.View`, which is added to the view hierarchy. Be aware that this can affect layout.

## Example

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

```SnackPlayer name=TouchableOpacity%20Function%20Component%20Example



```

```SnackPlayer name=TouchableOpacity%20Class%20Component%20Example



```

---

# Reference

## Props

Inherits [TouchableWithoutFeedback Props](touchablewithoutfeedback.md#props).

### ``

| Type       | Required |
| ---------- | -------- |
| View.style | No       |

---

### ``

Determines what the opacity of the wrapped view should be when touch is active. Defaults to ``.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

_(Apple TV only)_ Object with properties to control Apple TV parallax effects.

- `: If`, parallax effects are enabled. Defaults to ``.
- `: Defaults to`.
- `: Defaults to`.
- `: Defaults to`.
- `: Defaults to`.
- `: Defaults to`.
- `: Defaults to`.
- `: Defaults to`.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| object | No       | iOS      |

---

### ``

_(Apple TV only)_ TV preferred focus (see documentation for the View component).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

TV next focus down (see documentation for the View component).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

TV next focus forward (see documentation for the View component).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

TV next focus left (see documentation for the View component).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

TV next focus right (see documentation for the View component).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

TV next focus up (see documentation for the View component).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

## Methods

### ``

```jsx
```

Animate the touchable to a new opacity.
