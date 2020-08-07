---
id: activityindicator
title: ActivityIndicator
original_id: activityindicator
---

Displays a circular loading indicator.

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

```SnackPlayer name=ActivityIndicator%20Function%20Component%20Example



```

```SnackPlayer name=ActivityIndicator%20Class%20Component%20Example



```

# Reference

## Props

Inherits [View Props](view#props).

### ``

Whether to show the indicator (true, the default) or hide it (false).

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

The foreground color of the spinner (default is gray on iOS and dark cyan on Android).

| Type            | Required |
| --------------- | -------- |
| [color](colors) | No       |

---

### ``

Whether the indicator should hide when not animating (true by default).

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Size of the indicator (default is 'small'). Passing a number to the size prop is only supported on Android.

| Type                           | Required |
| ------------------------------ | -------- |
| enum('small', 'large'), number | No       |
