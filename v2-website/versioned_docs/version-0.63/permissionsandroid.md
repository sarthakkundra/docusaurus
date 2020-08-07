---
id: permissionsandroid
title: PermissionsAndroid
original_id: permissionsandroid
---

<div className="banner-native-code-required">
  <h3>Project with Native Code Required</h3>
  <p>
    The following section only applies to projects with native code exposed. If you are using the managed <code>expo-cli</code> workflow, see the guide on <a href="https://docs.expo.io/versions/latest/sdk/permissions/">Permissions</a> in the Expo documentation for the appropriate alternative.
  </p>
</div>

`PermissionsAndroid` provides access to Android M's new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in `AndroidManifest.xml`. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.

On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so `check` should always result to `true` and `request` should always resolve to `PermissionsAndroid.RESULTS.GRANTED`.

If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional `rationale` argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear.

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

```SnackPlayer name=PermissionsAndroid%20Example&supportedPlatforms=android



```

```SnackPlayer name=PermissionsAndroid%20Example&supportedPlatforms=android



```

### Permissions that require prompting the user

Available as constants under ``:

- ``: 'android.permission.READ_CALENDAR'
- ``: 'android.permission.WRITE_CALENDAR'
- ``: 'android.permission.CAMERA'
- ``: 'android.permission.READ_CONTACTS'
- ``: 'android.permission.WRITE_CONTACTS'
- ``: 'android.permission.GET_ACCOUNTS'
- ``: 'android.permission.ACCESS_FINE_LOCATION'
- ``: 'android.permission.ACCESS_COARSE_LOCATION'
- ``: 'android.permission.RECORD_AUDIO'
- ``: 'android.permission.READ_PHONE_STATE'
- ``: 'android.permission.CALL_PHONE'
- ``: 'android.permission.READ_CALL_LOG'
- ``: 'android.permission.WRITE_CALL_LOG'
- ``: 'com.android.voicemail.permission.ADD_VOICEMAIL'
- ``: 'android.permission.USE_SIP'
- ``: 'android.permission.PROCESS_OUTGOING_CALLS'
- ``: 'android.permission.BODY_SENSORS'
- ``: 'android.permission.SEND_SMS'
- ``: 'android.permission.RECEIVE_SMS'
- ``: 'android.permission.READ_SMS'
- ``: 'android.permission.RECEIVE_WAP_PUSH'
- ``: 'android.permission.RECEIVE_MMS'
- ``: 'android.permission.READ_EXTERNAL_STORAGE'
- ``: 'android.permission.WRITE_EXTERNAL_STORAGE'

### Result strings for requesting permissions

Available as constants under ``:

- ``: 'granted'
- ``: 'denied'
- ``: 'never_ask_again'

---

# Reference

## Methods

### ``

```jsx
```

---

### ``

```jsx
```

Returns a promise resolving to a boolean value as to whether the specified permissions has been granted.

**Parameters:**

| Name       | Type   | Required | Description                  |
| ---------- | ------ | -------- | ---------------------------- |
| permission | string | Yes      | The permission to check for. |

---

### ``

```jsx
```

Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again.

If `` is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed () and then shows the system permission dialog.

**Parameters:**

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| permission | string | Yes      | The permission to request. |
| rationale  | object | No       | See `` below.              |

**Rationale:**

| Name           | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| title          | string | Yes      | The title of the dialog.         |
| message        | string | Yes      | The message of the dialog.       |
| buttonPositive | string | Yes      | The text of the positive button. |
| buttonNegative | string | No       | The text of the negative button. |
| buttonNeutral  | string | No       | The text of the neutral button.  |

---

### ``

```jsx
```

Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again.

**Parameters:**

| Name        | Type  | Required | Description                      |
| ----------- | ----- | -------- | -------------------------------- |
| permissions | array | Yes      | Array of permissions to request. |
