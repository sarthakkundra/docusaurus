---
id: textinput
title: TextInput
original_id: textinput
---

A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

One use case is to plop down a `TextInput` and subscribe to the `onChangeText` events to read the user input. There are also other events, such as `onSubmitEditing` and `onFocus` that can be subscribed to. A quick example:

```SnackPlayer

import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);

```

Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.

Note that some props are only available with `multiline={true/false}`. Additionally, border styles that apply to only one side of the element (e.g., `borderBottomColor`, `borderLeftWidth`, etc.) will not be applied if `multiline=false`. To achieve the same effect, you can wrap your `TextInput` in a `View`:

```SnackPlayer

import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
 'AwesomeProject',
 () => UselessTextInputMultiline
);

```

`TextInput` has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this is to either not set height explicitly, case in which the system will take care of displaying the border in the correct position, or to not display the border by setting `underlineColorAndroid` to transparent.

Note that on Android performing text selection in input can change app's activity `windowSoftInputMode` param to `adjustResize`. This may cause issues with components that have position: 'absolute' while keyboard is active. To avoid this behavior either specify `windowSoftInputMode` in AndroidManifest.xml ( https: ) or control this param programmatically with native code.

### Props

- [View props...](view.md#props)

* [``](textinput.md#allowfontscaling)
* [``](textinput.md#autocapitalize)
* [``](textinput.md#autocorrect)
* [``](textinput.md#autofocus)
* [``](textinput.md#bluronsubmit)
* [``](textinput.md#carethidden)
* [``](textinput.md#clearbuttonmode)
* [``](textinput.md#cleartextonfocus)
* [``](textinput.md#contextMenuHidden)
* [``](textinput.md#datadetectortypes)
* [``](textinput.md#defaultvalue)
* [``](textinput.md#disablefullscreenui)
* [``](textinput.md#editable)
* [``](textinput.md#enablesreturnkeyautomatically)
* [``](textinput.md#inlineimageleft)
* [``](textinput.md#inlineimagepadding)
* [``](textinput.md#keyboardappearance)
* [``](textinput.md#keyboardtype)
* [``](textinput.md#maxlength)
* [``](textinput.md#multiline)
* [``](textinput.md#numberoflines)
* [``](textinput.md#onblur)
* [``](textinput.md#onchange)
* [``](textinput.md#onchangetext)
* [``](textinput.md#oncontentsizechange)
* [``](textinput.md#onendediting)
* [``](textinput.md#onfocus)
* [``](textinput.md#onkeypress)
* [``](textinput.md#onlayout)
* [``](textinput.md#onscroll)
* [``](textinput.md#onselectionchange)
* [``](textinput.md#onsubmitediting)
* [``](textinput.md#placeholder)
* [``](textinput.md#placeholdertextcolor)
* [``](textinput.md#returnkeylabel)
* [``](textinput.md#returnkeytype)
* [``](textinput.md#securetextentry)
* [``](textinput.md#selection)
* [``](textinput.md#selectioncolor)
* [``](textinput.md#selectionstate)
* [``](textinput.md#selecttextonfocus)
* [``](textinput.md#spellcheck)
* [``](textinput.md#style)
* [``](textinput.md#textbreakstrategy)
* [``](textinput.md#underlinecolorandroid)
* [``](textinput.md#value)

### Methods

- [``](textinput.md#clear)
- [``](textinput.md#isfocused)

---

# Reference

## Props

### ``

Specifies whether fonts should scale to respect Text Size accessibility settings. The default is ``.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Can tell `` to automatically capitalize certain characters.

- ``: all characters.
- ``: first letter of each word.
- ``: first letter of each sentence (_default_).
- ``: don't auto capitalize anything.

| Type                                             | Required |
| ------------------------------------------------ | -------- |
| enum('none', 'sentences', 'words', 'characters') | No       |

---

### ``

If `, disables auto-correct. The default value is`.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

If `, focuses the input on`. The default value is ``.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

If `, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting` to `means that pressing return will blur the field and trigger the` event instead of inserting a newline into the field.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

If `, caret is hidden. The default value is`.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

When the clear button should appear on the right side of the text view. This property is supported only for single-line TextInput component.

| Type                                                       | Required | Platform |
| ---------------------------------------------------------- | -------- | -------- |
| enum('never', 'while-editing', 'unless-editing', 'always') | No       | iOS      |

---

### ``

If ``, clears the text field automatically when editing begins.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

If `, context menu is hidden. The default value is`.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Determines the types of data converted to clickable URLs in the text input. Only valid if `and`. By default no data types are detected.

You can provide one type or an array of many types.

Possible values for `` are:

- ``
- ``
- ``
- ``
- ``
- ``

| Type                                                                                                                                                     | Required | Platform |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'), ,array of enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all') | No       | iOS      |

---

### ``

Provides an initial value that will change when the user starts typing. Useful for basic use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

When `, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When`, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to ``.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

If `, text is not editable. The default value is`.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

If `, the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is`.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

If defined, the provided image resource will be rendered on the left. The image resource must be inside `` and referenced like

```



```

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | Android  |

---

### ``

Padding between the inline image, if any, and the text input itself.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Determines the color of the keyboard.

| Type                             | Required | Platform |
| -------------------------------- | -------- | -------- |
| enum('default', 'light', 'dark') | No       | iOS      |

---

### ``

Determines which keyboard to open, e.g.``.

The following values work across platforms:

- ``
- ``
- ``
- ``

_iOS Only_

The following values work on iOS only:

- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``

_Android Only_

The following values work on Android only:

- ``

| Type                                                                                                                                                                                                    | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password') | No       |

---

### ``

Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

If `, the text input can be multiple lines. The default value is`.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Sets the number of lines for a `. Use it with multiline set to` to be able to fill the lines.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

---

### ``

Callback that is called when the text input is blurred.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input's text changes.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input's content size changes. This will be called with ``.

Only called for multiline text inputs.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when text input ends.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input is focused.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when a key is pressed. This will be called with `where` is `or` for respective keys and the typed-in character otherwise including `for space. Fires before` callbacks. Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked on mount and layout changes with ``.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Invoked on content scroll with ``. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input selection is changed. This will be called with ``.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input's submit button is pressed. Invalid if `` is specified.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

The string that will be rendered before text input has been entered.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### ``

The text color of the placeholder string.

| Type               | Required |
| ------------------ | -------- |
| [color](colors.md) | No       |

---

### ``

Sets the return key to the label. Use it instead of ``.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | Android  |

---

### ``

Determines how the return key should look. On Android you can also use ``.

_Cross platform_

The following values work across platforms:

- ``
- ``
- ``
- ``
- ``

_Android Only_

The following values work on Android only:

- ``
- ``

_iOS Only_

The following values work on iOS only:

- ``
- ``
- ``
- ``
- ``
- ``

| Type                                                                                                                              | Required |
| --------------------------------------------------------------------------------------------------------------------------------- | -------- |
| enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo') | No       |

---

### ``

If `, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is`. Does not work with 'multiline={"{"}true{"}"}'.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

The start and end of the text input's selection. Set start and end to the same value to position the cursor.

| Type                                        | Required |
| ------------------------------------------- | -------- |
| object: {"{"}start: number,end: number{"}"} | No       |

---

### ``

The highlight and cursor color of the text input.

| Type               | Required |
| ------------------ | -------- |
| [color](colors.md) | No       |

---

### ``

An instance of ``, this is some state that is responsible for maintaining selection information for a document.

Some functionality that can be performed with this instance is:

- ``
- ``
- ``

&gt; You can reference `in [`](https://github.com/facebook/react-native/blob/master/Libraries/vendor/document/selection/DocumentSelectionState.js)

| Type                   | Required | Platform |
| ---------------------- | -------- | -------- |
| DocumentSelectionState | No       | iOS      |

---

### ``

If ``, all text will automatically be selected on focus.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

If `, disables spell-check style (i.e. red underlines). The default value is inherited from`.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Note that not all Text styles are supported, an incomplete list of what is not supported includes:

- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``

see [Issue#7070](https://github.com/facebook/react-native/issues/7070) for more detail.

[Styles](style.md)

| Type                  | Required |
| --------------------- | -------- |
| [Text](text.md#style) | No       |

---

### ``

Set text break strategy on Android API Level 23+, possible values are `,`, `The default value is`.

| Type                                      | Required | Platform |
| ----------------------------------------- | -------- | -------- |
| enum('simple', 'highQuality', 'balanced') | No       | Android  |

---

### ``

The color of the `` underline.

| Type               | Required | Platform |
| ------------------ | -------- | -------- |
| [color](colors.md) | No       | Android  |

---

### ``

The value to show for the text input. `is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to only setting the same value, either set`, or set/update `` to prevent unwanted edits without flicker.

| Type   | Required |
| ------ | -------- |
| string | No       |

## Methods

### ``

```jsx
```

Removes all text from the ``.

---

### ``

```jsx
```

Returns `if the input is currently focused;` otherwise.
