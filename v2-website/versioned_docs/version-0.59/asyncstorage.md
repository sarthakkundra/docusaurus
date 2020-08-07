---
id: asyncstorage
title: AsyncStorage
original_id: asyncstorage
---

&gt; **Deprecated.** Use [react-native-community/react-native-async-storage](https://github.com/react-native-community/react-native-async-storage) instead.

`AsyncStorage` is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.

It is recommended that you use an abstraction on top of `AsyncStorage` instead of `AsyncStorage` directly for anything more than light usage since it operates globally.

On iOS, `AsyncStorage` is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, `AsyncStorage` will use either [RocksDB](http://rocksdb.org/) or SQLite based on what is available.

The `AsyncStorage` JavaScript code is a facade that provides a clear JavaScript API, real `Error` objects, and non-multi functions. Each method in the API returns a `Promise` object.

Importing the `AsyncStorage` library:

```jsx
import { AsyncStorage } from 'react-native';
```

Persisting data:

```jsx
_storeData = async () => {
  try {
    await AsyncStorage.setItem(
      '@MySuperStore:key',
      'I like to save it.'
    );
  } catch (error) {
    // Error saving data
  }
};
```

Fetching data:

```jsx
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
```

### Methods

- [`getItem`](asyncstorage.md#getitem)
- [`setItem`](asyncstorage.md#setitem)
- [`removeItem`](asyncstorage.md#removeitem)
- [`mergeItem`](asyncstorage.md#mergeitem)
- [`clear`](asyncstorage.md#clear)
- [`getAllKeys`](asyncstorage.md#getallkeys)
- [`flushGetRequests`](asyncstorage.md#flushgetrequests)
- [`multiGet`](asyncstorage.md#multiget)
- [`multiSet`](asyncstorage.md#multiset)
- [`multiRemove`](asyncstorage.md#multiremove)
- [`multiMerge`](asyncstorage.md#multimerge)

---

# Reference

## Methods

### `getItem()`

```jsx

static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)

```

Fetches an item for a `key` and invokes a callback upon completion. Returns a `Promise` object.

**Parameters:**

| Name     | Type                                         | Required | Description                                                       |
| -------- | -------------------------------------------- | -------- | ----------------------------------------------------------------- |
| key      | string                                       | Yes      | Key of the item to fetch.                                         |
| callback | ?(error: ?Error, result: ?string) =&gt; void | No       | Function that will be called with a result if found or any error. |

---

### `setItem()`

```jsx

static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)

```

Sets the value for a `key` and invokes a callback upon completion. Returns a `Promise` object.

**Parameters:**

| Name     | Type                        | Required | Description                                  |
| -------- | --------------------------- | -------- | -------------------------------------------- |
| key      | string                      | Yes      | Key of the item to set.                      |
| value    | string                      | Yes      | Value to set for the `key`.                  |
| callback | ?(error: ?Error) =&gt; void | No       | Function that will be called with any error. |

---

### `removeItem()`

```jsx

static removeItem(key: string, [callback]: ?(error: ?Error) => void)

```

Removes an item for a `key` and invokes a callback upon completion. Returns a `Promise` object.

**Parameters:**

| Name     | Type                        | Required | Description                                  |
| -------- | --------------------------- | -------- | -------------------------------------------- |
| key      | string                      | Yes      | Key of the item to remove.                   |
| callback | ?(error: ?Error) =&gt; void | No       | Function that will be called with any error. |

---

### `mergeItem()`

```jsx

static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)

```

Merges an existing `key` value with an input value, assuming both values are stringified JSON. Returns a `Promise` object.

**NOTE:** This is not supported by all native implementations.

**Parameters:**

| Name     | Type                        | Required | Description                                  |
| -------- | --------------------------- | -------- | -------------------------------------------- |
| key      | string                      | Yes      | Key of the item to modify.                   |
| value    | string                      | Yes      | New value to merge for the `key`.            |
| callback | ?(error: ?Error) =&gt; void | No       | Function that will be called with any error. |

Example:

```jsx
let UID123_object = {
  name: 'Chris',
  age: 30,
  traits: { hair: 'brown', eyes: 'brown' }
};
// You only need to define what will be added or updated
let UID123_delta = {
  age: 31,
  traits: { eyes: 'blue', shoe_size: 10 }
};

AsyncStorage.setItem(
  'UID123',
  JSON.stringify(UID123_object),
  () => {
    AsyncStorage.mergeItem(
      'UID123',
      JSON.stringify(UID123_delta),
      () => {
        AsyncStorage.getItem('UID123', (err, result) => {
          console.log(result);
        });
      }
    );
  }
);

// Console log result:
// => {'name':'Chris','age':31,'traits':
//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}
```

---

### `clear()`

```jsx

static clear([callback]: ?(error: ?Error) => void)

```

Erases _all_ `AsyncStorage` for all clients, libraries, etc. You probably don't want to call this; use `removeItem` or `multiRemove` to clear only your app's keys. Returns a `Promise` object.

**Parameters:**

| Name     | Type                        | Required | Description                                  |
| -------- | --------------------------- | -------- | -------------------------------------------- |
| callback | ?(error: ?Error) =&gt; void | No       | Function that will be called with any error. |

---

### `getAllKeys()`

```jsx

static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)

```

Gets _all_ keys known to your app; for all callers, libraries, etc. Returns a `Promise` object.

**Parameters:**

| Name     | Type                                            | Required | Description                                                     |
| -------- | ----------------------------------------------- | -------- | --------------------------------------------------------------- |
| callback | ?(error: ?Error, keys: ?Arraystring) =&gt; void | No       | Function that will be called with all keys found and any error. |

---

### ``

```jsx
```

Flushes any pending requests using a single batch call to get the data.

---

### ``

```jsx
```

This allows you to batch the fetching of items given an array of `` inputs. Your callback will be invoked with an array of corresponding key-value pairs found:

```



```

The method returns a `` object.

**Parameters:**

| Name     | Type                                                      | Required | Description                                                                                                         |
| -------- | --------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| keys     | Array                                                     | Yes      | Array of key for the items to get.                                                                                  |
| callback | ?(errors: ?Array, result: ?Array&lt;Array&gt;) =&gt; void | No       | Function that will be called with a key-value array of the results, plus an array of any key-specific errors found. |

Example:

```jsx
```

---

### ``

```jsx
```

Use this as a batch operation for storing multiple key-value pairs. When the operation completes you'll get a single callback with any errors:

```



```

The method returns a `` object.

**Parameters:**

| Name          | Type                         | Required | Description                                                                  |
| ------------- | ---------------------------- | -------- | ---------------------------------------------------------------------------- |
| keyValuePairs | Array&lt;Array&gt;           | Yes      | Array of key-value array for the items to set.                               |
| callback      | ?(errors: ?Array) =&gt; void | No       | Function that will be called with an array of any key-specific errors found. |

---

### ``

```jsx
```

Call this to batch the deletion of all keys in the `array. Returns a` object.

**Parameters:**

| Name     | Type                         | Required | Description                                                             |
| -------- | ---------------------------- | -------- | ----------------------------------------------------------------------- |
| keys     | Array                        | Yes      | Array of key for the items to delete.                                   |
| callback | ?(errors: ?Array) =&gt; void | No       | Function that will be called an array of any key-specific errors found. |

Example:

```jsx
```

---

### ``

```jsx
```

Batch operation to merge in existing and new values for a given set of keys. This assumes that the values are stringified JSON. Returns a `` object.

**NOTE**: This is not supported by all native implementations.

**Parameters:**

| Name          | Type                         | Required | Description                                                                  |
| ------------- | ---------------------------- | -------- | ---------------------------------------------------------------------------- |
| keyValuePairs | Array&lt;Array&gt;           | Yes      | Array of key-value array for the items to merge.                             |
| callback      | ?(errors: ?Array) =&gt; void | No       | Function that will be called with an array of any key-specific errors found. |

Example:

```jsx
```
