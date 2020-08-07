---
id: textinput
title: TextInput
original_id: textinput
---

A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

The most basic use case is to plop down a `TextInput` and subscribe to the `onChangeText` events to read the user input. There are also other events, such as `onSubmitEditing` and `onFocus` that can be subscribed to. A minimal example:

```SnackPlayer name=TextInput

import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

```

Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.

Note that some props are only available with `multiline={true/false}`. Additionally, border styles that apply to only one side of the element (e.g., `borderBottomColor`, `borderLeftWidth`, etc.) will not be applied if `multiline=false`. To achieve the same effect, you can wrap your `TextInput` in a `View`:

```SnackPlayer name=TextInput

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

```

`TextInput` has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this is to either not set height explicitly, case in which the system will take care of displaying the border in the correct position, or to not display the border by setting `underlineColorAndroid` to transparent.

Note that on Android performing text selection in input can change app's activity `windowSoftInputMode` param to `adjustResize`. This may cause issues with components that have position: 'absolute' while keyboard is active. To avoid this behavior either specify `windowSoftInputMode` in AndroidManifest.xml ( https: ) or control this param programmatically with native code.

---

# Reference

## Props

Inherits [View Props](view.md#props).

### ``

Specifies whether fonts should scale to respect Text Size accessibility settings. The default is ``.

| Type | Required |
| ---- | -------- |
| bool | No       |

---

### ``

Can tell `to automatically capitalize certain characters. This property is not supported by some keyboard types such as`.

- ``: all characters.
- ``: first letter of each word.
- ``: first letter of each sentence (_default_).
- ``: don't auto capitalize anything.

| Type                                             | Required |
| ------------------------------------------------ | -------- |
| enum('none', 'sentences', 'words', 'characters') | No       |

---

### ``

Specifies autocomplete hints for the system, so it can provide autofill. On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content. To disable autocomplete, set `to`.

Possible values for `` are:

- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``

| Type                                                                                                                                                         | Required | Platform |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- |
| enum('off', 'username', 'password', 'email', 'name', 'tel', 'street-address', 'postal-code', 'cc-number', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year') | No       | Android  |

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

When the clear button should appear on the right side of the text view. This property is supported only for single-line TextInput component. The default value is ``.

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

Provides an initial value that will change when the user starts typing. Useful for use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.

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

Say the system whether the individual fields in your app should be included in a view structure for autofill purposes on Android API Level 26+, possible values are `,`, `,`, `. The default value is`.

- ``: Let the Android System use its heuristics to determine if the view is important for autofill.
- ``: This view isn't important for autofill.
- ``: This view and its children aren't important for autofill.
- ``: This view is important for autofill.
- ``: This view is important for autofill, but its children aren't important for autofill.

| Type                                                                       | Required | Platform |
| -------------------------------------------------------------------------- | -------- | -------- |
| enum('auto', 'no', 'noExcludeDescendants', 'yes', 'yesExcludeDescendants') | No       | Android  |

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

An optional identifier which links a custom [InputAccessoryView](inputaccessoryview.md) to this text input. The InputAccessoryView is rendered above the keyboard when this text input is focused.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | iOS      |

---

### ``

Determines the color of the keyboard.

| Type                             | Required | Platform |
| -------------------------------- | -------- | -------- |
| enum('default', 'light', 'dark') | No       | iOS      |

---

### ``

Determines which keyboard to open, e.g.``.

See screenshots of all the types [here](http://lefkowitz.me/2018/04/30/visual-guide-to-react-native-textinput-keyboardtype-options/).

The following values work across platforms:

- ``
- ``
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

_Android Only_

The following values work on Android only:

- ``

| Type                                                                                                                                                                                                    | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password') | No       |

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

Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

If `, the text input can be multiple lines. The default value is`. It is important to note that this aligns the text to the top on iOS, and centers it on Android. Use with `set to` for the same behavior in both platforms.

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

Callback that is called when the text input's text changes. This will be called with ``

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.

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

Callback that is called when the text input is focused. This is called with ``.

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

Callback that is called when the text input selection is changed. This will be called with `. This prop requires` to be set.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Callback that is called when the text input's submit button is pressed with the argument ``.

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

### ``

_iOS Only_

If `, allows TextInput to pass touch events to the parent component. This allows components such as SwipeableListView to be swipeable from the TextInput on iOS, as is the case on Android by default. If`, TextInput always asks to handle the input (except when disabled). The default value is ``.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

If `, scrolling of the text view will be disabled. The default value is`. Only works with ``.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

If `, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is`. Does not work with ``.

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

When `, it will prevent the soft keyboard from showing when the field is focused. The default value is`.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | Android  |

---

### ``

If `, disables spell-check style (i.e. red underlines). The default value is inherited from`.

| Type | Required | Platform |
| ---- | -------- | -------- |
| bool | No       | iOS      |

---

### ``

Give the keyboard and the system information about the expected semantic meaning for the content that users enter.

For iOS 11+ you can set `to` or `` to enable autofill of login details from the device keychain.

For iOS 12+ `can be used to indicate a new password input the user may want to save in the keychain, and` can be used to indicate that a field can be autofilled by a code arriving in an SMS.

To disable autofill, set `to`.

Possible values for `` are:

- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``

| Type                                                                                                                                                                                                                                                                                                                                                                                                       | Required | Platform |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| enum('none', 'URL', 'addressCity', 'addressCityAndState', 'addressState', 'countryName', 'creditCardNumber', 'emailAddress', 'familyName', 'fullStreetAddress', 'givenName', 'jobTitle', 'location', 'middleName', 'name', 'namePrefix', 'nameSuffix', 'nickname', 'organizationName', 'postalCode', 'streetAddressLine1', 'streetAddressLine2', 'sublocality', 'telephoneNumber', 'username', 'password') | No       | iOS      |

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

The value to show for the text input. `is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to setting the same value, either set`, or set/update `` to prevent unwanted edits without flicker.

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

# Known issues

- [react-native#19096](https://github.com/facebook/react-native/issues/19096): Doesn't support Android's ``.
- [react-native#19366](https://github.com/facebook/react-native/issues/19366): Calling .focus() after closing Android's keyboard via back button doesn't bring keyboard up again.
