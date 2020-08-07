---
id: flatlist
title: FlatList
original_id: flatlist
---

A performant interface for rendering basic, flat lists, supporting the most handy features:

- Fully cross-platform.
- Optional horizontal mode.
- Configurable viewability callbacks.
- Header support.
- Footer support.
- Separator support.
- Pull to Refresh.
- Scroll loading.
- ScrollToIndex support.

If you need section support, use [`<SectionList>`](sectionlist.md).

Minimal Example:

```

<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>

```

More complex example demonstrating `PureComponent` usage for perf optimization and avoiding bugs.

- By binding the `onPressItem` handler, the props will remain `===` and `PureComponent` will prevent wasteful re-renders unless the actual `id`, `selected`, or `title` props change, even if the inner `SomeOtherWidget` has no such optimizations.
- By passing `extraData={this.state}` to `FlatList` we make sure `FlatList` itself will re-render when the `state.selected` changes. Without setting this prop, `FlatList` would not know it needs to re-render any items because it is also a `PureComponent` and the prop comparison will not show any changes.
- `keyExtractor` tells the list to use the `id`s for the react keys.

```

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <SomeOtherWidget
        {...this.props}
        onPress={this._onPress}
      />
    )
  }
}

class MyList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

```

This is a convenience wrapper around [`<VirtualizedList>`](virtualizedlist.md), and thus inherits its props (as well as those of `ScrollView`) that aren't explicitly listed here, along with the following caveats:

- Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
- This is a `PureComponent` which means that it will not re-render if `props` remain shallow-equal. Make sure that everything your `renderItem` function depends on is passed as a prop (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on changes. This includes the `data` prop and parent component state.
- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate ands momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
- By default, the list looks for a `key` prop on each item and uses that for the React key. Alternatively, you can provide a custom `keyExtractor` prop.

Also inherets [ScrollView Props](scrollview.md#props), unless it is nested in another FlatList of same orientation.

### Props

- [`keyExtractor`](flatlist.md#keyextractor)
- [`data`](flatlist.md#data)
- [`initialNumToRender`](flatlist.md#initialnumtorender)
- [`numColumns`](flatlist.md#numcolumns)
- [`renderItem`](flatlist.md#renderitem)
- [`ItemSeparatorComponent`](flatlist.md#itemseparatorcomponent)
- [`extraData`](flatlist.md#extradata)
- [`getItemLayout`](flatlist.md#getitemlayout)
- [`horizontal`](flatlist.md#horizontal)
- [`ListFooterComponent`](flatlist.md#listfootercomponent)
- [`initialScrollIndex`](flatlist.md#initialscrollindex)
- [`inverted`](flatlist.md#inverted)
- [`ListEmptyComponent`](flatlist.md#listemptycomponent)
- [`legacyImplementation`](flatlist.md#legacyimplementation)
- [`ListHeaderComponent`](flatlist.md#listheadercomponent)
- [`onEndReached`](flatlist.md#onendreached)
- [`onEndReachedThreshold`](flatlist.md#onendreachedthreshold)
- [`onRefresh`](flatlist.md#onrefresh)
- [`onViewableItemsChanged`](flatlist.md#onviewableitemschanged)
- [`refreshing`](flatlist.md#refreshing)
- [`removeClippedSubviews`](flatlist.md#removeclippedsubviews)
- [`columnWrapperStyle`](flatlist.md#columnwrapperstyle)
- [`viewabilityConfig`](flatlist.md#viewabilityconfig)
- [`progressViewOffset`](flatlist.md#progressviewoffset)

### Methods

- [`scrollToEnd`](flatlist.md#scrolltoend)
- [`scrollToIndex`](flatlist.md#scrolltoindex)
- [`scrollToItem`](flatlist.md#scrolltoitem)
- [`scrollToOffset`](flatlist.md#scrolltooffset)
- [`recordInteraction`](flatlist.md#recordinteraction)
- [`flashScrollIndicators`](flatlist.md#flashscrollindicators)

---

# Reference

## Props

### `keyExtractor`

Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks `item.key`, then falls back to using the index, like React does.

| Type                                      | Required |
| ----------------------------------------- | -------- |
| (item: ItemT, index: number) =&gt; string | Yes      |

---

### `data`

For simplicity, data is a plain array. If you want to use something else, like an immutable list, use the underlying `VirtualizedList` directly.

| Type                  | Required |
| --------------------- | -------- |
| [$ReadOnlyArrayitemt] | Yes      |

---

### ``

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| Type   | Required |
| ------ | -------- |
| number | Yes      |

---

### ``

Multiple columns can only be rendered with `and will zig-zag like a` layout. Items should all be the same height - masonry layouts are not supported.

| Type   | Required |
| ------ | -------- |
| number | Yes      |

---

### ``

Takes an item from `` and renders it into the list. Example usage:

```



```

Provides additional metadata like `if you need it, as well as a more generic` function which let's you set whatever props you want to change the rendering of either the leading separator or trailing separator in case the more common `and` (which set the `` prop) are insufficient for your use-case.

| Type | Required |
| ---- | -------- |


| (info: {"{"} item: ItemT, index: number, separators: {"{"} highlight: () =&gt; void, unhighlight: () =&gt; void, updateProps: (select: 'leading' | 'trailing', newProps: Object) =&gt; void, {"}"}, {"}"}) =&gt; ?React.Element | Yes |

---

### ``

Rendered in between each item, but not at the top or bottom. By default, `and` props are provided. `provides`/`which will update the` prop, but you can also add custom props with ``.

| Type         | Required |
| ------------ | -------- |
| [ReactClass] | No       |

---

### ``

A marker property for telling the list to re-render (since it implements `). If any of your`, Header, Footer, etc. functions depend on anything outside of the `` prop, stick it here and treat it immutably.

| Type | Required |
| ---- | -------- |
| any  | No       |

---

### ``

`is an optional optimizations that let us skip measurement of dynamic content if you know the height of items a priori.` is efficient if you have fixed height items, for example:

```



```

Remember to include separator length (height or width) in your offset calculation if you specify ``.

| Type | Required |
| ---- | -------- |


| ( data: ?Array, index: number, ) =&gt; {"{"}length: number, offset: number, index: number{"}"} | No |

---

### ``

If true, renders items next to each other horizontally instead of stacked vertically.

| Type      | Required |
| --------- | -------- |
| [boolean] | No       |

---

### ``

Rendered at the bottom of all the items. Can be a React Component Class, a render function, or a rendered element.

| Type                          | Required |
| ----------------------------- | -------- |
| [ReactClass ‖ ,React.Element] | No       |

---

### ``

Instead of starting at the top with the first item, start at `. This disables the "scroll to top" optimization that keeps the first` items always rendered and immediately renders the items starting at this initial index. Requires `` to be implemented.

| Type     | Required |
| -------- | -------- |
| [number] | No       |

---

### ``

Reverses the direction of scroll. Uses scale transforms of -1.

| Type      | Required |
| --------- | -------- |
| [boolean] | No       |

---

### ``

Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.

| Type                          | Required |
| ----------------------------- | -------- |
| [ReactClass ‖ ,React.Element] | No       |

---

### ``

| Type      | Required |
| --------- | -------- |
| [boolean] | No       |

---

### ``

Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.

| Type                          | Required |
| ----------------------------- | -------- |
| [ReactClass ‖ ,React.Element] | No       |

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

If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the `` prop correctly.

| Type            | Required |
| --------------- | -------- |
| [() =&gt; void] | No       |

---

### ``

Called when the viewability of rows changes, as defined by the `` prop.

| Type | Required |
| ---- | -------- |


\| [(info: {"{"} viewableItems: Array, changed: Array, {"}"}) =&gt; void] | No |

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

Optional custom style for multi-item rows generated when numColumns &gt; 1.

| Type     | Required |
| -------- | -------- |
| StyleObj | No       |

---

### ``

See `` for flow type and further documentation.

| Type              | Required |
| ----------------- | -------- |
| ViewabilityConfig | No       |

---

### ``

Set this when offset is needed for the loading indicator to show correctly.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| number | No       | Android  |

## Methods

### ``

```jsx
```

Scrolls to the end of the content. May be janky without `` prop.

---

### ``

```jsx
```

Scrolls to the item at the specified index such that it is positioned in the viewable area such that `0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.` is a fixed number of pixels to offset the final target position.

Note: cannot scroll to locations outside the render window without specifying the `` prop.

---

### ``

```jsx
```

Requires linear scan through data - use `` instead if possible.

Note: cannot scroll to locations outside the render window without specifying the `` prop.

---

### ``

```jsx
```

Scroll to a specific content pixel offset in the list.

Check out [scrollToOffset](virtualizedlist.md#scrolltooffset) of VirtualizedList

---

### ``

```jsx
```

Tells the list an interaction has occured, which should trigger viewability calculations, e.g. if `` is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.

---

### ``

```jsx
```

Displays the scroll indicators momentarily.
