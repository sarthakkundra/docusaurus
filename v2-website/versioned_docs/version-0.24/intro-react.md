---
id: intro-react
title: React Fundamentals
description: To understand React Native fully, you need a solid foundation in React. This short introduction to React can help you get started or get refreshed.
---

React Native runs on [React](https://reactjs.org/), a popular open source library for building user interfaces with JavaScript. To make the most of React Native, it helps to understand React itself. This section can get you started or can serve as a refresher course.

We’re going to cover the core concepts behind React:

- components
- JSX
- props
- state

If you want to dig deeper, we encourage you to check out [React’s official documentation](https://reactjs.org/docs/getting-started.html).

## Your first component

The rest of this introduction to React uses cats in its examples: friendly, approachable creatures that need names and a cafe to work in. Here is your very first Cat component:

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

```SnackPlayer name=Your%20Cat



```

Here is how you do it: To define your `component, first use JavaScript’s [`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) to import React and React Native’s [``](/docs/next/text) Core Component:

```jsx
```

Your component starts as a function:

```jsx
```

You can think of components as blueprints. Whatever a function component returns is rendered as a **React element.** React elements let you describe what you want to see on the screen.

Here the `component will render a` element:

```jsx
```

You can export your function component with JavaScript’s [``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) for use throughout your app like so:

```jsx
```

Class components tend to be a bit more verbose than function components.

```SnackPlayer name=Your%20Cat



```

You additionally import `` from React:

```jsx
```

Your component starts as a class extending `` instead of as a function:

```jsx
```

Class components have a `` function. Whatever is returned inside it is rendered as a React element:

```jsx
```

And as with function components, you can export your class component:

```jsx
```

&gt; This is one of many ways to export your component. This kind of export works well with the Snack Player. However, depending on your app’s file structure, you might need to use a different convention. This [handy cheatsheet on JavaScript imports and exports](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829) can help.

Now take a closer look at that `statement.` is using a kind of JavaScript syntax that makes writing elements convenient: JSX.

## JSX

React and React Native use **JSX,** a syntax that lets you write elements inside JavaScript like so: `. The React docs have [a comprehensive guide to JSX](https://reactjs.org/docs/jsx-in-depth.html) you can reference to learn even more. Because JSX is JavaScript, you can use variables inside it. Here you are declaring a name for the cat,`, and embedding it with curly braces inside ``.

```SnackPlayer name=Curly%20Braces



```

Any JavaScript expression will work between curly braces, including function calls like ``:

```SnackPlayer name=Curly%20Braces



```

You can think of curly braces as creating a portal into JS functionality in your JSX!

&gt; Because JSX is included in the React library, it won’t work if you don’t have `` at the top of your file!

## Custom Components

You’ve already met [React Native’s Core Components](intro-react-native-components). React lets you nest these components inside each other to create new components. These nestable, reusable components are at the heart of the React paradigm.

For example, you can nest [``](text) and [``](textinput) inside a [``](view) below, and React Native will render them together:

```SnackPlayer name=Custom%20Components



```

Developer Notes

    Web
    Android

&gt; If you’re familiar with web development, `and` might remind you of HTML! You can think of them as the `and` tags of application development.

&gt; On Android, you usually put your views inside `,`, `, etc. to define how the view’s children will be arranged on the screen. In React Native,` uses Flexbox for its children’s layout. You can learn more in [our guide to layout with Flexbox](flexbox).

You can render this component multiple times and in multiple places without repeating your code by using ``:

```SnackPlayer name=Multiple%20Components



```

Any component that renders other components is a **parent component.** Here, `is the parent component and each` is a **child component.**

You can put as many cats in your cafe as you like. Each `` renders a unique element—which you can customize with props.

## Props

**Props** is short for “properties.” Props let you customize React components. For example, here you pass each `a different` for `` to render:

```SnackPlayer name=Multiple%20Props



```

Most of React Native’s Core Components can be customized with props, too. For example, when using [``](image), you pass it a prop named [``](image#source) to define what image it shows:

```SnackPlayer name=Props



```

`has [many different props](image#props), including [`](image#style), which accepts a JS object of design and layout related property-value pairs.

&gt; Notice the double curly braces `surrounding`‘s width and height. In JSX, JavaScript values are referenced with `. This is handy if you are passing something other than a string as props, like an array or number:`. However, JS objects are **_also_** denoted with curly braces: `. Therefore, to pass a JS object in JSX, you must wrap the object in **another pair** of curly braces:`

You can build many things with props and the Core Components [``](text), [``](image), and [``](view)! But to build something interactive, you’ll need state.

## State

While you can think of props as arguments you use to configure how components render, **state** is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

&gt; As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time.

The following example takes place in a cat cafe where two hungry cats are waiting to be fed. Their hunger, which we expect to change over time (unlike their names), is stored as state. To feed the cats, press their buttons—which will update their state.

      State with Function Components


      State with Class Components

You can add state to a component by calling [React’s `` Hook](https://reactjs.org/docs/hooks-state.html). A Hook is a kind of function that lets you “hook into” React features. For example, `` is a Hook that lets you add state to function components. You can learn more about [other kinds of Hooks in the React documentation.](https://reactjs.org/docs/hooks-intro.html)

```SnackPlayer name=State



```

First, you will want to import `` from React like so:

```jsx
```

Then you declare the component’s state by calling `inside its function. In this example,` creates an `` state variable:

```jsx
```

&gt; You can use `to track any kind of data: strings, numbers, Booleans, arrays, objects. For example, you can track the number of times a cat has been petted with`!

Calling `` does two things:

- it creates a “state variable” with an initial value—in this case the state variable is `and its initial value is`
- it creates a function to set that state variable’s value—``

It doesn’t matter what names you use. But it can be handy to think of the pattern as ``.

Next you add the [``](button) Core Component and give it an `` prop:

```jsx
```

Now, when someone presses the button, `will fire, calling the`. This sets the state variable `to`. When `is false, the`’s `prop is set to` and its `` also changes:

```jsx
```

&gt; You might’ve noticed that although `is a [const](https://developer.mozilla.org/Web/JavaScript/Reference/Statements/const), it is seemingly reassignable! What is happening is when a state-setting function like` is called, its component will re-render. In this case the `function will run again—and this time,` will give us the next value of ``.

Finally, put your cats inside a `` component:

```jsx
```

The older class components approach is a little different when it comes to state.

```SnackPlayer name=State%20and%20Class%20Components



```

As always with class components, you must import the `` class from React:

```jsx
```

In class components, state is stored in a state object:

```jsx
```

As with accessing props with `, you access this object inside your component with`:

```jsx
```

And you set individual values inside the state object by passing an object with the key value pair for state and its new value to ``:

```jsx
```

&gt; Do not change your component's state directly by assigning it a new value with `. Calling` allows React to track changes made to state that trigger rerendering. Setting state directly can break your app's reactivity!

When `is false, the`’s `prop is set to` and its `` also changes:

```jsx
```

Finally, put your cats inside a `` component:

```jsx
```

&gt; See the `and` above? These bits of JSX are [fragments](https://reactjs.org/docs/fragments.html). Adjacent JSX elements must be wrapped in an enclosing tag. Fragments let you do that without nesting an extra, unnecessary wrapping element like ``.

---

Now that you’ve covered both React and React Native’s Core Components, let’s dive deeper on some of these core components by looking at [handling ``](handling-text-input).
