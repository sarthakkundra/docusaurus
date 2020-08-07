---
id: image-style-props
title: Image Style Props
original_id: image-style-props
---

### Examples

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

```SnackPlayer name=Image%20Style%20Props%20Function%20Component%20Example



```

```SnackPlayer name=Image%20Style%20Props%20Class%20Component%20Example



```

      Function Component Example


      Class Component Example

```SnackPlayer name=Style%20Border%20Radius%20Function%20Component%20Example



```

```SnackPlayer name=Style%20Border%20Radius%20Class%20Component%20Example



```

      Function Component Example


      Class Component Example

```SnackPlayer name=Style%20BorderWidth%20and%20BorderColor%20Function%20Component%20Example



```

```SnackPlayer name=Style%20BorderWidth%20and%20BorderColor%20Class%20Component%20Example



```

      Function Component Example


      Class Component Example

```SnackPlayer name=Style%20tintColor%20Function%20Component



```

```SnackPlayer name=Style%20tintColor%20Class%20Component



```

# Reference

## Props

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type                      | Required |
| ------------------------- | -------- |
| enum('visible', 'hidden') | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type               | Required |
| ------------------ | -------- |
| [color](colors.md) | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type               | Required |
| ------------------ | -------- |
| [color](colors.md) | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type                      | Required |
| ------------------------- | -------- |
| enum('visible', 'hidden') | No       |

---

### ``

| Type                                                    | Required |
| ------------------------------------------------------- | -------- |
| enum('cover', 'contain', 'stretch', 'repeat', 'center') | No       |

---

### ``

Changes the color of all the non-transparent pixels to the tintColor.

| Type               | Required |
| ------------------ | -------- |
| [color](colors.md) | No       |

---

### ``

When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color. This is useful in cases which are not supported by the Android implementation of rounded corners:

- Certain resize modes, such as 'contain'
- Animated GIFs

A typical way to use this prop is with images displayed on a solid background and setting the `` to the same color as the background.

For details of how this works under the hood, see

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | Android  |
