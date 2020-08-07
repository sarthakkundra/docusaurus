---
id: transforms
title: Transforms
original_id: transforms
---

Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.

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

```SnackPlayer name=Transforms



```

```SnackPlayer name=Transforms



```

---

# Reference

## Methods

### ``

`` accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object.

The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:

```js
```

The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:

```js
```

| Type                                                                                                                                                                                                                                                                                                                                                  | Required |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| array of objects: {"{"}perspective: number{"}"}, {"{"}rotate: string{"}"}, {"{"}rotateX: string{"}"}, {"{"}rotateY: string{"}"}, {"{"}rotateZ: string{"}"}, {"{"}scale: number{"}"}, {"{"}scaleX: number{"}"}, {"{"}scaleY: number{"}"}, {"{"}translateX: number{"}"}, {"{"}translateY: number{"}"}, {"{"}skewX: string{"}"}, {"{"}skewY: string{"}"} | No       |

---

### `,`, `,`, `,`, ``

&gt; **Deprecated.** Use the [``](transforms#transform) prop instead.
