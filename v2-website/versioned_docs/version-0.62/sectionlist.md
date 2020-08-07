---
id: sectionlist
title: SectionList
original_id: sectionlist
---

A performant interface for rendering sectioned lists, supporting the most handy features:

- Fully cross-platform.
- Configurable viewability callbacks.
- List header support.
- List footer support.
- Item separator support.
- Section header support.
- Section separator support.
- Heterogeneous data and item rendering support.
- Pull to Refresh.
- Scroll loading.

If you don't need section support and want a simpler interface, use [`<FlatList>`](flatlist.md).

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

```SnackPlayer name=SectionList%20Example



```

```SnackPlayer name=SectionList%20Example



```

This is a convenience wrapper around [``](virtualizedlist.md), and thus inherits its props (as well as those of [``](scrollview.md) that aren't explicitly listed here, along with the following caveats:

- Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
- This is a `which means that it will not re-render if` remain shallow-equal. Make sure that everything your `function depends on is passed as a prop (e.g.`) that is not `after updates, otherwise your UI may not update on changes. This includes the` prop and parent component state.
- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
- By default, the list looks for a `prop on each item and uses that for the React key. Alternatively, you can provide a custom` prop.

---

# Reference

## Props

Inherits [ScrollView Props](scrollview.md#props).

### ``

Default renderer for every item in every section. Can be over-ridden on a per-section basis. Should return a React element.

| Type     | Required |
| -------- | -------- |
| function | Yes      |

The render function will be passed an object with the following keys:

- 'item' (object) - the item object as specified in this section's `` key
- 'index' (number) - Item's index within the section.
- 'section' (object) - The full section object as specified in ``.
- 'separators' (object) - An object with the following keys:
  - 'highlight' (function) - ``
  - 'unhighlight' (function) - ``
  - 'updateProps' (function) - ``
    - 'select' (enum) - possible values are 'leading', 'trailing'
    - 'newProps' (object)

---

### ``

The actual data to render, akin to the `prop in [`](flatlist.md).

| Type                                        | Required |
| ------------------------------------------- | -------- |
| array of [Section](sectionlist.md#section)s | Yes      |

---

### ``

A marker property for telling the list to re-render (since it implements `). If any of your`, Header, Footer, etc. functions depend on anything outside of the `` prop, stick it here and treat it immutably.

| Type | Required |
| ---- | -------- |
| any  | No       |

---

### ``

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| Type   | Required |
| ------ | -------- |
| number | Yes      |

---

### ``

Reverses the direction of scroll. Uses scale transforms of -1.

| Type      | Required |
| --------- | -------- |
| [boolean] | No       |

---

### ``

Rendered in between each item, but not at the top or bottom. By default, `,`, and `props are provided.` provides `/` which will update the `prop, but you can also add custom props with`.

| Type                           | Required |
| ------------------------------ | -------- |
| [component, function, element] | No       |

---

### ``

Used to extract a unique key for a given item at the specified index. Key is used for caching and as the React key to track item re-ordering. The default extractor checks ``, then falls back to using the index, like React does. Note that this sets keys for each item, but each overall section still needs its own key.

| Type                                     | Required |
| ---------------------------------------- | -------- |
| (item: Item, index: number) =&gt; string | Yes      |

---

### ``

Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.

| Type                           | Required |
| ------------------------------ | -------- |
| [component, function, element] | No       |

---

### ``

Rendered at the very end of the list. Can be a React Component Class, a render function, or a rendered element.

| Type                           | Required |
| ------------------------------ | -------- |
| [component, function, element] | No       |

---

### ``

Rendered at the very beginning of the list. Can be a React Component Class, a render function, or a rendered element.

| Type                         | Required |
| ---------------------------- | -------- |
| component, function, element | No       |

---

### ``

Called once when the scroll position gets within `` of the rendered content.

| Type                                                   | Required |
| ------------------------------------------------------ | -------- |
| [(info: {"{"}distanceFromEnd: number{"}"}) =&gt; void] | No       |

---

### ``

How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the `callback. Thus a value of 0.5 will trigger` when the end of the content is within half the visible length of the list.

| Type     | Required |
| -------- | -------- |
| [number] | No       |

---

### ``

If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the `prop correctly. To offset the RefreshControl from the top (e.g. by 100 pts), use`.

| Type            | Required |
| --------------- | -------- |
| [() =&gt; void] | No       |

---

### ``

Called when the viewability of rows changes, as defined by the `` prop.

| Type     | Required |
| -------- | -------- |
| function | No       |

The function will be passed an object with the following keys:

- 'viewableItems' (array of ``s)
- 'changed' (array of ``s)

The `type is exported by`:

| Name       | Type    | Required |
| ---------- | ------- | -------- |
| item       | any     | Yes      |
| key        | string  | Yes      |
| index      | number  | No       |
| isViewable | boolean | Yes      |
| section    | any     | No       |

---

### ``

Set this true while waiting for new data from a refresh.

| Type      | Required |
| --------- | -------- |
| [boolean] | No       |

---

### ``

Note: may have bugs (missing content) in some circumstances - use at your own risk.

This may improve scroll performance for large lists.

| Type    | Required |
| ------- | -------- |
| boolean | No       |

---

### ``

Rendered at the bottom of each section.

| Type                                                       | Required |
| ---------------------------------------------------------- | -------- |
| [(info: {"{"}section: SectionT{"}"}) =&gt; ?React.Element] | No       |

---

### ``

Rendered at the top of each section. These stick to the top of the `by default on iOS. See`.

| Type                                                       | Required |
| ---------------------------------------------------------- | -------- |
| [(info: {"{"}section: SectionT{"}"}) =&gt; ?React.Element] | No       |

---

### ``

Rendered at the top and bottom of each section (note this is different from `which is only rendered between items). These are intended to separate sections from the headers above and below and typically have the same highlight response as`. Also receives `,`, and any custom props from ``.

| Type         | Required |
| ------------ | -------- |
| [ReactClass] | No       |

---

### ``

Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.

| Type    | Required |
| ------- | -------- |
| boolean | No       |

## Methods

### ``

```jsx
```

Scrolls to the item at the specified `and` (within the section) positioned in the viewable area such that `` 0 places it at the top (and may be covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle.

&gt; Note: Cannot scroll to locations outside the render window without specifying the `or` prop.

**Parameters:**

| Name   | Type   | Required | Description |
| ------ | ------ | -------- | ----------- |
| params | object | Yes      | See below.  |

Valid `` keys are:

- 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to ``.
- 'itemIndex' (number) - Index within section for the item to scroll to. Required.
- 'sectionIndex' (number) - Index for section that contains the item to scroll to. Required.
- 'viewOffset' (number) - A fixed number of pixels to offset the final target position, e.g. to compensate for sticky headers.
- 'viewPosition' (number) - A value of `places the item specified by index at the top,` at the bottom, and `` centered in the middle.

---

### ``

```jsx
```

Tells the list an interaction has occurred, which should trigger viewability calculations, e.g. if `` is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.

---

### ``

```jsx
```

Displays the scroll indicators momentarily.

| Platform |
| -------- |
| iOS      |

## Type Definitions

### Section

An object that identifies the data to be rendered for a given section.

| Type |
| ---- |
| any  |

**Properties:**

| Name                     | Type                         | Description                                                                                                                                      |
| ------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| data                     | array                        | The data for rendering items in this section. Array of objects, much like [``'s data prop](flatlist.md#data).                                    |
| [key]                    | string                       | Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections, the array index will be used by default.           |
| [renderItem]             | function                     | Optionally define an arbitrary item renderer for this section, overriding the default [``](sectionlist.md#renderitem) for the list.              |
| [ItemSeparatorComponent] | component, function, element | Optionally define an arbitrary item separator for this section, overriding the default [``](sectionlist.md#itemseparatorcomponent) for the list. |
| [keyExtractor]           | function                     | Optionally define an arbitrary key extractor for this section, overriding the default [``](sectionlist.md#keyextractor).                         |
