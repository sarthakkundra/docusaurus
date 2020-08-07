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

---

### ``

Whether to show the indicator (`) or hide it (`).

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | ``      |

---

### ``

The foreground color of the spinner.

| Type            | Required | Default                                    |
| --------------- | -------- | ------------------------------------------ |
| [color](colors) | No       | `(system accent default color)Android` iOS |

---

### `` iOS

Whether the indicator should hide when not animating.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | ``      |

---

### ``

Size of the indicator.

| Type                    | Required | Default |
| ----------------------- | -------- | ------- |
| enum(`,`)number Android | No       | ``      |
