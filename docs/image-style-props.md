---
id: image-style-props
title: Image Style Props
---

## Examples

### Image Resize Mode

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

```SnackPlayer name=Image%20Resize%20Modes%20Function%20Component%20Example



```

```SnackPlayer name=Image%20Resize%20Modes%20Class%20Component%20Example



```

### Image Border

      Function Component Example


      Class Component Example

```SnackPlayer name=Style%20BorderWidth%20and%20BorderColor%20Function%20Component%20Example



```

```SnackPlayer name=Style%20BorderWidth%20and%20BorderColor%20Class%20Component%20Example



```

### Image Border Radius

      Function Component Example


      Class Component Example

```SnackPlayer name=Style%20Border%20Radius%20Function%20Component%20Example



```

```SnackPlayer name=Style%20Border%20Radius%20Class%20Component%20Example



```

### Image Tint

      Function Component Example


      Class Component Example

```SnackPlayer name=Style%20tintColor%20Function%20Component



```

```SnackPlayer name=Style%20tintColor%20Class%20Component



```

# Reference

## Props

### ``

The property defines whether or not the back face of a rotated image should be visible.

| Type      | Default |
| --------- | ------- |
| enum(`,`) | ``      |

---

### ``

| Type               |
| ------------------ |
| [color](colors.md) |

---

### ``

| Type   |
| ------ |
| number |

---

### ``

| Type   |
| ------ |
| number |

---

### ``

| Type               |
| ------------------ |
| [color](colors.md) |

---

### ``

| Type   |
| ------ |
| number |

---

### ``

| Type   |
| ------ |
| number |

---

### ``

| Type   |
| ------ |
| number |

---

### ``

| Type   |
| ------ |
| number |

---

### ``

Set an opacity value for the image. The number should be in the range from `to`.

| Type   | Default |
| ------ | ------- |
| number | ``      |

---

### ``

| Type      | Default |
| --------- | ------- |
| enum(`,`) | ``      |

---

### `` Android

When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color. This is useful in cases which are not supported by the Android implementation of rounded corners:

- Certain resize modes, such as ``
- Animated GIFs

A typical way to use this prop is with images displayed on a solid background and setting the `` to the same color as the background.

For details of how this works under the hood, see [Fresco documentation](https://frescolib.org/docs/rounded-corners-and-circles.html).

| Type   |
| ------ |
| string |

---

### ``

| Type                 | Default |
| -------------------- | ------- |
| enum(`,`, `,`, `) |` |

---

### ``

Changes the color of all the non-transparent pixels to the tintColor.

| Type               |
| ------------------ |
| [color](colors.md) |
