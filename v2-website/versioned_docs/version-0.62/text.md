---
id: text
title: Text
original_id: text
---

A React component for displaying text.

`Text` supports nesting, styling, and touch handling.

In the following example, the nested title and body text will inherit the `fontFamily` from `styles.baseText`, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:

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

```SnackPlayer name=Text%20Functional%20Component%20Example



```

```SnackPlayer name=Text%20Class%20Component%20Example



```

## Nested text

Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (`on iOS,` on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.

```SnackPlayer name=Nested%20Text%20Example



```

Behind the scenes, React Native converts this to a flat `or` that contains the following information:

```jsx
```

## Containers

The `element is unique relative to layout: everything inside is no longer using the Flexbox layout but using text layout. This means that elements inside of a` are no longer rectangles, but wrap when they see the end of the line.

```jsx
```

## Limited Style Inheritance

On the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:

```css
```

All elements in the document will inherit this font unless they or one of their parents specifies a new rule.

In React Native, we are more strict about it: **you must wrap all the text nodes inside of a `` component**. You cannot have a text node directly under a ``.

```jsx
```

You also lose the ability to set up a default font for an entire subtree. Meanwhile, `only accepts a single font name, which is different from` in CSS. The recommended way to use consistent fonts and sizes across your application is to create a component `that includes them and use this component across your app. You can also use this component to make more specific components like` for other kinds of text.

```jsx
```

Assuming that `is a component that only renders out its children into a` component with styling, then `` can be defined as follows:

```jsx
```

Composing `` in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.

React Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.

```jsx
```

We believe that this more constrained way to style text will yield better apps:

- (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.

- (Implementor) The implementation of React Native is also simplified. We do not need to have a `` field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.

---

# Reference

## Props

### ``

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `` nodes separated by space.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Tells the screen reader to treat the currently focused on element as having a specific role.

Possible values for `` is one of:

- `` - The element has no role.
- `` - The element should be treated as a button.
- `` - The element should be treated as a link.
- `` - The element is a header that divides content into sections.
- `` - The element should be treated as a search field.
- `` - The element should be treated as an image.
- `` - The element should be treated like a keyboard key.
- `` - The element should be treated as text.
- `` - The element provides app summary information.
- `` - The element has the role of both an image and also a button.
- `` - The element allows adjustment over a range of values.

On iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both 'image' and 'button'. See the [Accessibility guide](accessibility.md#accessibilitytraits-ios) for more information.

On Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS

| Type              | Required |
| ----------------- | -------- |
| AccessibilityRole | No       |

---

### ``

Tells the screen reader to treat the currently focused on element as being in a specific state.

You can provide one state, no state, or multiple states. The states must be passed in through an object. Ex: ``.

Possible values for `` are:

- `` - The element is in a selected state.
- `` - The element is in a disabled state.

| Type   | Required |
| ------ | -------- |
| object | No       |

---

### ``

When set to `, indicates that the view is an accessibility element. The default value for a` element is ``.

See the [Accessibility guide](accessibility.md#accessible-ios-android) for more information.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Specifies whether fonts should be scaled down automatically to fit given style constraints.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Specifies whether fonts should scale to respect Text Size accessibility settings. The default is ``.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Determines the types of data converted to clickable URLs in the text element. By default no data types are detected.

You can provide only one type.

Possible values for `` are:

- ``
- ``
- ``
- ``
- ``

| Type                                                | Required | Platform |
| --------------------------------------------------- | -------- | -------- |
| enum('phoneNumber', 'link', 'email', 'none', 'all') | No       | Android  |

---

### ``

Specifies the disabled state of the text view for testing purposes

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

When `is set, this prop defines how text will be truncated.` must be set in conjunction with this prop.

This can be one of the following values:

- `` - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
- `` - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
- `` - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
- `` - Lines are not drawn past the edge of the text container.

The default is ``.

| Type                                   | Required |
| -------------------------------------- | -------- |
| enum('head', 'middle', 'tail', 'clip') | No       |

---

### ``

Specifies largest possible scale a font can reach when `` is enabled. Possible values:

- `` (default): inherit from the parent node or the global default (0)
- ``: no max, ignore parent/global default
- `= 1--&gt;`: sets the `` of this node to this value

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | iOS      |

---

### ``

Used to locate this view from native code.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.

This prop is commonly used with ``.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

Invoked on mount and layout changes with

``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

This function is called on long press.

e.g., ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `` when it is not the responder.

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

This function is called on press.

e.g., ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The user is moving their finger.

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Fired at the end of the touch.

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The responder has been taken from the `. Might be taken by other views after a call to`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Some other `wants to become responder and is asking this` to release its responder. Returning `` allows its release.

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

If a parent `wants to prevent a child` from becoming responder on a touch start, it should have this handler which returns ``.

`, where` is a synthetic touch event as described above.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked on Text layout

| Type                                           | Required |
| ---------------------------------------------- | -------- |
| function: (event: TextLayoutEvent) =&gt; mixed | No       |

- TextLayoutEvent - SyntheticEvent object that contains a key called `` with a value which is an array containing objects with the following properties
  - {"{"} x: number, y: number, width: number, height: number, ascender: number, capHeight: number, descender: number, text: string, xHeight: number,{"}"}

---

### ``

When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.

| Type                                                                       | Required |
| -------------------------------------------------------------------------- | -------- |
| object: {"{"}top: number, left: number, bottom: number, right: number{"}"} | No       |

---

### ``

Lets the user select text, to use the native copy and paste functionality.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

The highlight color of the text.

| Type               | Required | Platform |
| ------------------ | -------- | -------- |
| [color](colors.md) | No       | Android  |

---

### ``

| Type                                                                             | Required |
| -------------------------------------------------------------------------------- | -------- |
| [Text Style Props](text-style-props.md), [View Style Props](view-style-props.md) | No       |

---

### ``

When ``, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Used to locate this view in end-to-end tests.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

Set text break strategy on Android API Level 23+, possible values are `,`, `The default value is`.

| Type                                      | Required | Platform |
| ----------------------------------------- | -------- | -------- |
| enum('simple', 'highQuality', 'balanced') | No       | Android  |

# Known issues

- [react-native#22811](https://github.com/facebook/react-native/issues/22811): Nested Text elements do not support `` attribute
