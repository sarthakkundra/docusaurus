---
id: layout-props
title: Layout Props
---

&gt; More detailed examples about those properties can be found on the [Layout with Flexbox](flexbox) page.

### Example

The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property `flexWrap`.

```SnackPlayer name=LayoutProps%20Example

import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];
  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
  };

  const changeSetting = (value, options, setterFunction) => {
    if (value == options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };

  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    };
    return <View style={sqStyle} />;
  };
  const [squares, setSquares] = useState([Square(), Square(), Square()]);
  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight }} />
      <View style={[styles.container, styles.playingSpace, hookedStyles]}>
        {squares.map(elem => elem)}
      </View>
      <ScrollView style={[styles.container]}>
        <View style={[styles.controlSpace]}>
          <View style={styles.buttonView}>
            <Button
              title="Change Flex Direction"
              onPress={() =>
                changeSetting(flexDirection, flexDirections, setFlexDirection)
              }
            />
            <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Justify Content"
              onPress={() =>
                changeSetting(
                  justifyContent,
                  justifyContents,
                  setJustifyContent
                )
              }
            />
            <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Align Items"
              onPress={() =>
                changeSetting(alignItems, alignItemsArr, setAlignItems)
              }
            />
            <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Direction"
              onPress={() => changeSetting(direction, directions, setDirection)}
            />
            <Text style={styles.text}>{directions[direction]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Flex Wrap"
              onPress={() => changeSetting(wrap, wraps, setWrap)}
            />
            <Text style={styles.text}>{wraps[wrap]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Add Square"
              onPress={() => setSquares([...squares, Square()])}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Delete Square"
              onPress={() =>
                setSquares(squares.filter((v, i) => i != squares.length - 1))
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  text: { textAlign: 'center' },
});

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default App;

```

---

# Reference

## Props

### `alignContent`

`alignContent` controls how rows align in the cross direction, overriding the `alignContent` of the parent. See https: for more details.

| Type                                                                                 | Required |
| ------------------------------------------------------------------------------------ | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around') | No       |

---

### ``

`aligns children in the cross direction. For example, if children are flowing vertically,` controls how they align horizontally. It works like `` in CSS (default: stretch). See for more details.

| Type                                                            | Required |
| --------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

---

### ``

`controls how a child aligns in the cross direction, overriding the` of the parent. It works like `` in CSS (default: auto). See for more details.

| Type                                                                    | Required |
| ----------------------------------------------------------------------- | -------- |
| enum('auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

---

### ``

Aspect ratio controls the size of the undefined dimension of a node. Aspect ratio is a non-standard property only available in React Native and not CSS.

- On a node with a set width/height, aspect ratio controls the size of the unset dimension
- On a node with a set flex basis, aspect ratio controls the size of the node in the cross axis if unset
- On a node with a measure function, aspect ratio works as though the measure function measures the flex basis
- On a node with flex grow/shrink, aspect ratio controls the size of the node in the cross axis if unset
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

When direction is `,` is equivalent to `. When direction is`, `is equivalent to`.

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

When direction is `,` is equivalent to `. When direction is`, `is equivalent to`.

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

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`specifies the directional flow of the user interface. The default is`, except for root node which will have value based on the current locale. See for more details.

| Type                          | Required | Platform |
| ----------------------------- | -------- | -------- |
| enum('inherit', 'ltr', 'rtl') | No       | iOS      |

---

### ``

`` sets the display type of this component.

It works similarly to `` in CSS but only supports 'flex' and 'none'. 'flex' is the default.

| Type                 | Required |
| -------------------- | -------- |
| enum('none', 'flex') | No       |

---

### ``

When the direction is `,` is equivalent to `. When the direction is`, `is equivalent to`.

This style takes precedence over the `and` styles.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

In React Native `does not work the same way that it does in CSS.` is a number rather than a string, and it works according to the [Yoga](https://github.com/facebook/yoga).

When `is a positive number, it makes the component flexible, and it will be sized proportional to its flex value. So a component with` set to 2 will take twice the space as a component with `set to 1.` equates to ``.

When `is 0, the component is sized according to` and ``, and it is inflexible.

When `is -1, the component is normally sized according to` and `. However, if there's not enough space, the component will shrink to its` and ``.

`,`, and `` work the same as in CSS.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`is an axis-independent way of providing the default size of an item along the main axis. Setting the` of a child is similar to setting the `of that child if its parent is a container with` or setting the `of a child if its parent is a container with`. The `of an item is the default size of that item, the size of the item before any` and `` calculations are performed.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`controls which directions children of a container go.` goes left to right, `goes top to bottom, and you may be able to guess what the other two do. It works like` in CSS, except the default is ``. See for more details.

| Type                                                   | Required |
| ------------------------------------------------------ | -------- |
| enum('row', 'row-reverse', 'column', 'column-reverse') | No       |

---

### ``

`` describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children.

`accepts any floating point value &gt;= 0, with 0 being the default value. A container will distribute any remaining space among its children weighted by the children’s` values.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

[``](layout-props#flexshrink) describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. `is very similar to` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed.

`accepts any floating point value &gt;= 0, with 1 being the default value. A container will shrink its children weighted by the children’s` values.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

`controls whether children can wrap around after they hit the end of a flex container. It works like` in CSS (default: nowrap). See for more details. Note it does not work anymore with `(the default), so you may want to use` for example (breaking change details: ).

| Type                                   | Required |
| -------------------------------------- | -------- |
| enum('wrap', 'nowrap', 'wrap-reverse') | No       |

---

### ``

`` sets the height of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`aligns children in the main direction. For example, if children are flowing vertically,` controls how they align vertically. It works like `` in CSS (default: flex-start). See for more details.

| Type                                                                                      | Required |
| ----------------------------------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly') | No       |

---

### ``

`` is the number of logical pixels to offset the left edge of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details of how `` affects layout.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

Setting `has the same effect as setting each of`, `,`, and ``. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

When direction is `,` is equivalent to `. When direction is`, `is equivalent to`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

Setting `has the same effect as setting both` and ``.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

When direction is `,` is equivalent to `. When direction is`, `is equivalent to`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

Setting `has the same effect as setting both` and ``.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`` is the maximum height for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`` is the maximum width for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`` is the minimum height for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`` is the minimum width for this component, in logical pixels.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`controls how children are measured and displayed.` causes views to be clipped while `causes views to be measured independently of their parents' main axis. It works like` in CSS (default: visible). See for more details.

| Type                                | Required |
| ----------------------------------- | -------- |
| enum('visible', 'hidden', 'scroll') | No       |

---

### ``

Setting `has the same effect as setting each of`, `,`, and ``. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

When direction is `,` is equivalent to `. When direction is`, `is equivalent to`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

Setting `is like setting both of` and ``.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

When direction is `,` is equivalent to `. When direction is`, `is equivalent to`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`works like` in CSS. See for more details.

| Type            | Required |
| --------------- | -------- |
| number, ,string | No       |

---

### ``

Setting `is like setting both of` and ``.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

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

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

When the direction is `,` is equivalent to `. When the direction is`, `is equivalent to`.

This style takes precedence over the `,`, and `` styles.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`` is the number of logical pixels to offset the top edge of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See for more details of how `` affects layout.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`` sets the width of this component.

It works similarly to `` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported. See for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

---

### ``

`controls which components display on top of others. Normally, you don't use`. Components render according to their order in the document tree, so later components draw over earlier ones. `` may be useful if you have animations or custom modal interfaces where you don't want this behavior.

It works like the CSS `property - components with a larger` will render on top. Think of the z-direction like it's pointing from the phone into your eyeball. See for more details.

On iOS, `may require`s to be siblings of each other for it to work as expected.

| Type   | Required |
| ------ | -------- |
| number | No       |

---
