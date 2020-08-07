---
id: activityindicator
title: ActivityIndicator
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

| Type | Default |
| ---- | ------- |
| bool | ``      |

---

### ``

The foreground color of the spinner.

| Type            | Default                                    |
| --------------- | ------------------------------------------ |
| [color](colors) | `(system accent default color)Android` iOS |

---

### `` iOS

Whether the indicator should hide when not animating.

| Type | Default |
| ---- | ------- |
| bool | ``      |

---

### ``

Size of the indicator.

| Type                    | Default |
| ----------------------- | ------- |
| enum(`,`)number Android | ``      |
