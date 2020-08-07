---
id: datepickerios
title: '🚧 DatePickerIOS'
---

&gt; **Deprecated.** Use [@react-native-community/datetimepicker](https://github.com/react-native-community/react-native-datetimepicker) instead.

Use `DatePickerIOS` to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the `onDateChange` callback and update the `date` prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect `props.date` as the source of truth.

### Example

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

```SnackPlayer name=DatePickerIOS&supportedPlatforms=ios



```

```SnackPlayer name=DatePickerIOS&supportedPlatforms=ios



```

---

# Reference

## Props

Inherits [View Props](view.md#props).

### ``

The currently selected date.

| Type | Required |
| ---- | -------- |
| Date | Yes      |

---

### ``

Date change handler.

This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead.

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### ``

Date change handler.

This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time.

| Type     | Required |
| -------- | -------- |
| function | Yes      |

---

### ``

Maximum date.

Restricts the range of possible date/time values.

| Type | Required |
| ---- | -------- |
| Date | No       |

Example with `` set to December 31, 2017:

---

### ``

Minimum date.

Restricts the range of possible date/time values.

| Type | Required |
| ---- | -------- |
| Date | No       |

See [``](datepickerios.md#maximumdate) for an example image.

---

### ``

The interval at which minutes can be selected.

| Type                                       | Required |
| ------------------------------------------ | -------- |
| enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30) | No       |

Example with `set to`:

---

### ``

The date picker mode.

| Type                                          | Required |
| --------------------------------------------- | -------- |
| enum('date', 'time', 'datetime', 'countdown') | No       |

Example with `set to`, `, and`: ![](/docs/assets/DatePickerIOS/mode.png)

---

### ``

The locale for the date picker. Value needs to be a [Locale ID](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html).

| Type   | Required |
| ------ | -------- |
| String | No       |

---

### ``

Timezone offset in minutes.

By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 \* 60.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### ``

Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth.

| Type | Required |
| ---- | -------- |
| Date | No       |
