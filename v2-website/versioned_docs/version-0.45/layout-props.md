---
id: layout-props
title: Layout Props
original_id: layout-props
---

### Props

- [`marginHorizontal`](layout-props.md#marginhorizontal)
- [`alignContent`](layout-props.md#aligncontent)
- [`alignSelf`](layout-props.md#alignself)
- [`aspectRatio`](layout-props.md#aspectratio)
- [`borderBottomWidth`](layout-props.md#borderbottomwidth)
- [`borderLeftWidth`](layout-props.md#borderleftwidth)
- [`borderRightWidth`](layout-props.md#borderrightwidth)
- [`borderTopWidth`](layout-props.md#bordertopwidth)
- [`borderWidth`](layout-props.md#borderwidth)
- [`bottom`](layout-props.md#bottom)
- [`display`](layout-props.md#display)
- [`flex`](layout-props.md#flex)
- [`flexBasis`](layout-props.md#flexbasis)
- [`flexDirection`](layout-props.md#flexdirection)
- [`flexGrow`](layout-props.md#flexgrow)
- [`flexShrink`](layout-props.md#flexshrink)
- [`flexWrap`](layout-props.md#flexwrap)
- [`height`](layout-props.md#height)
- [`justifyContent`](layout-props.md#justifycontent)
- [`left`](layout-props.md#left)
- [`margin`](layout-props.md#margin)
- [`marginBottom`](layout-props.md#marginbottom)
- [`alignItems`](layout-props.md#alignitems)
- [`marginLeft`](layout-props.md#marginleft)
- [`marginRight`](layout-props.md#marginright)
- [`marginTop`](layout-props.md#margintop)
- [`marginVertical`](layout-props.md#marginvertical)
- [`maxHeight`](layout-props.md#maxheight)
- [`maxWidth`](layout-props.md#maxwidth)
- [`minHeight`](layout-props.md#minheight)
- [`minWidth`](layout-props.md#minwidth)
- [`overflow`](layout-props.md#overflow)
- [`padding`](layout-props.md#padding)
- [`paddingBottom`](layout-props.md#paddingbottom)
- [`paddingHorizontal`](layout-props.md#paddinghorizontal)
- [`paddingLeft`](layout-props.md#paddingleft)
- [`paddingRight`](layout-props.md#paddingright)
- [`paddingTop`](layout-props.md#paddingtop)
- [`paddingVertical`](layout-props.md#paddingvertical)
- [`position`](layout-props.md#position)
- [`right`](layout-props.md#right)
- [`top`](layout-props.md#top)
- [`width`](layout-props.md#width)
- [`zIndex`](layout-props.md#zindex)
- [`direction`](layout-props.md#direction)

---

# Reference

## Props

### `marginHorizontal`

Setting `marginHorizontal` has the same effect as setting both `marginLeft` and `marginRight`.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### `alignContent`

`alignContent` controls how rows align in the cross direction, overriding the `alignContent` of the parent. See https: for more details.

| Type                                                                                 | Required |
| ------------------------------------------------------------------------------------ | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around') | No       |

---

### ``

`controls how a child aligns in the cross direction, overriding the` of the parent. It works like `` in CSS (default: auto). See for more details.

| Type                                                                    | Required |
| ----------------------------------------------------------------------- | -------- |
| enum('auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

---

### ``

Aspect ratio control the size of the undefined dimension of a node. Aspect ratio is a non-standard property only available in react native and not CSS.

- On a node with a set width/height aspect ratio control the size of the unset dimension
- On a node with a set flex basis aspect ratio controls the size of the node in the cross axis if unset
- On a node with a measure function aspect ratio works as though the measure function measures the flex basis
- On a node with flex grow/shrink aspect ratio controls the size of the node in the cross axis if unset
- Aspect ratio takes min/max dimensions into account

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`works like` in CSS. See for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`works like` in CSS. See for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`works like` in CSS. See for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`works like` in CSS. See for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`works like` in CSS. See for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`` is the number of logical pixels to offset the bottom edge of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details of how `` affects layout.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` sets the display type of this component.

It works similarly to `` in CSS, but only support 'flex' and 'none'. 'flex' is the default.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

In React Native `does not work the same way that it does in CSS.` is a number rather than a string, and it works according to the `` library at

When `is a positive number, it makes the component flexible and it will be sized proportional to its flex value. So a component with` set to 2 will take twice the space as a component with `` set to 1.

When `is 0, the component is sized according to` and `` and it is inflexible.

When `is -1, the component is normally sized according` and `. However, if there's not enough space, the component will shrink to its` and ``.

flexGrow, flexShrink, and flexBasis work the same as in CSS.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`controls which directions children of a container go.` goes left to right, `goes top to bottom, and you may be able to guess what the other two do. It works like` in CSS, except the default is ``. See for more details.

| Type                                                   | Required |
| ------------------------------------------------------ | -------- |
| enum('row', 'row-reverse', 'column', 'column-reverse') | No       |

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

`controls whether children can wrap around after they hit the end of a flex container. It works like` in CSS (default: nowrap). See for more details.

| Type                   | Required |
| ---------------------- | -------- |
| enum('wrap', 'nowrap') | No       |

---

### ``

`` sets the height of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`aligns children in the main direction. For example, if children are flowing vertically,` controls how they align vertically. It works like `` in CSS (default: flex-start). See for more details.

| Type                                                                      | Required |
| ------------------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around') | No       |

---

### ``

`` is the number of logical pixels to offset the left edge of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details of how `` affects layout.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

Setting `has the same effect as setting each of`, `,`, and ``. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`aligns children in the cross direction. For example, if children are flowing vertically,` controls how they align horizontally. It works like `` in CSS (default: stretch). See for more details.

| Type                                                            | Required |
| --------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

Setting `has the same effect as setting both` and ``.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` is the maximum height for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` is the maximum width for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` is the minimum height for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` is the minimum width for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`controls how a children are measured and displayed.` causes views to be clipped while `causes views to be measured independently of their parents main axis.`overflow\` in CSS (default: visible). See for more details.

| Type                                | Required |
| ----------------------------------- | -------- |
| enum('visible', 'hidden', 'scroll') | No       |

---

### ``

Setting `has the same effect as setting each of`, `,`, and ``. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

Setting `is like setting both of` and ``.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

Setting `is like setting both of` and ``.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`in React Native is similar to regular CSS, but everything is set to` by default, so `` positioning is always relative to the parent.

If you want to position a child using specific numbers of logical pixels relative to its parent, set the child to have `` position.

If you want to position a child relative to something that is not its parent, don't use styles for that. Use the component tree.

See for more details on how `` differs between React Native and CSS.

| Type                         | Required |
| ---------------------------- | -------- |
| enum('absolute', 'relative') | No       |

---

### ``

`` is the number of logical pixels to offset the right edge of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details of how `` affects layout.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` is the number of logical pixels to offset the top edge of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details of how `` affects layout.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`` sets the width of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

`controls which components display on top of others. Normally, you don't use`. Components render according to their order in the document tree, so later components draw over earlier ones. `` may be useful if you have animations or custom modal interfaces where you don't want this behavior.

It works like the CSS `property - components with a larger` will render on top. Think of the z-direction like it's pointing from the phone into your eyeball. See for more details.

On iOS, `may require`s to be siblings of each other for it to work as expected.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`specifies the directional flow of the user interface. The default is`, except for root node which will have value based on the current locale. See for more details.

| Type                          | Required | Platform |
| ----------------------------- | -------- | -------- |
| enum('inherit', 'ltr', 'rtl') | No       | iOS      |
