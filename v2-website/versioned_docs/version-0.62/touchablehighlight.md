---
id: touchablehighlight
title: TouchableHighlight
original_id: touchablehighlight
---

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.

The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.

TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.

```jsx
function MyComponent(props) {
  return (
    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>My Component</Text>
    </View>
  );
}

<TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"
  onPress={() => alert('Pressed!')}>
  <MyComponent />
</TouchableHighlight>;
```

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

```SnackPlayer name=TouchableHighlight%20Function%20Component%20Example



```

```SnackPlayer name=TouchableHighlight%20Class%20Component%20Example



```

---

# Reference

## Props

Inherits [TouchableWithoutFeedback Props](touchablewithoutfeedback.md#props).

### ``

Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires `` to be set.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

Called immediately after the underlay is hidden.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Called immediately after the underlay is shown.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

| Type       | Required |
| ---------- | -------- |
| View.style | No       |

---

### ``

The color of the underlay that will show through when the touch is active.

| Type               | Required |
| ------------------ | -------- |
| [color](colors.md) | No       |

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

---

### ``

Handy for snapshot tests.

| Type | Required |
| ---- | -------- |
| bool | No       |
