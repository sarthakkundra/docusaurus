---
id: integration-with-existing-apps
title: Integration with Existing Apps
original_id: integration-with-existing-apps
---

React Native is great when you are starting a new mobile app from scratch. However, it also works well for adding a single view or user flow to existing native applications. With a few steps, you can add new React Native based features, screens, views, etc.

The specific steps are different depending on what platform you're targeting.

<div className="toggler">
  <ul role="tablist" id="toggle-language">
    <li id="objc" className="button-objc" aria-selected="false" role="tab" tabIndex={0} aria-controls="objctab" onClick="displayTab('language', 'objc')">
      iOS (Objective-C)
    </li>
    <li id="swift" className="button-swift" aria-selected="false" role="tab" tabIndex={0} aria-controls="swifttab" onClick="displayTab('language', 'swift')">
      iOS (Swift)
    </li>
    <li id="android" className="button-android" aria-selected="false" role="tab" tabIndex={0} aria-controls="androidtab" onClick="displayTab('language', 'android')">
      Android (Java)
    </li>
  </ul>
</div>

block

## Key Concepts

The keys to integrating React Native components into your iOS application are to:

1.  Set up React Native dependencies and directory structure.
2.  Understand what React Native components you will use in your app.
3.  Add these components as dependencies using CocoaPods.
4.  Develop your React Native components in JavaScript.
5.  Add a `` to your iOS app. This view will serve as the container for your React Native component.
6.  Start the React Native server and run your native application.
7.  Verify that the React Native aspect of your application works as expected.

The keys to integrating React Native components into your Android application are to:

1.  Set up React Native dependencies and directory structure.
2.  Develop your React Native components in JavaScript.
3.  Add a `` to your Android app. This view will serve as the container for your React Native component.
4.  Start the React Native server and run your native application.
5.  Verify that the React Native aspect of your application works as expected.

## Prerequisites

Follow the React Native CLI Quickstart in the [environment setup guide](environment-setup) to configure your development environment for building React Native apps for iOS.

### 1. Set up directory structure

To ensure a smooth experience, create a new folder for your integrated React Native project, then copy your existing iOS project to a `` subfolder.

Follow the React Native CLI Quickstart in the [environment setup guide](environment-setup) to configure your development environment for building React Native apps for Android.

### 1. Set up directory structure

To ensure a smooth experience, create a new folder for your integrated React Native project, then copy your existing Android project to an `` subfolder.

### 2. Install JavaScript dependencies

Go to the root directory for your project and create a new `` file with the following contents:

```



```

Next, make sure you have [installed the yarn package manager](https://yarnpkg.com/lang/en/docs/install/).

Install the `and` packages. Open a terminal or command prompt, then navigate to the directory with your `` file and run:

```sh



```

This will print a message similar to the following (scroll up in the yarn output to see it):

&gt; warning "[react-native@0.52.2](mailto:react-native@0.52.2)" has unmet peer dependency "[react@16.2.0](mailto:react@16.2.0)".

This is OK, it means we also need to install React:

```sh



```

Yarn has created a new `` folder. This folder stores all the JavaScript dependencies required to build your project.

Add `to your` file.

### 3. Install CocoaPods

[CocoaPods](http://cocoapods.org) is a package management tool for iOS and macOS development. We use it to add the actual React Native framework code locally into your current project.

We recommend installing CocoaPods using [Homebrew](http://brew.sh/).

```sh



```

&gt; It is technically possible not to use CocoaPods, but that would require manual library and linker additions that would overly complicate this process.

## Adding React Native to your app

Assume the [app for integration](https://github.com/JoelMarcey/iOS-2048) is a [2048](https://en.wikipedia.org/wiki/2048_%28video_game%29) game. Here is what the main menu of the native application looks like without React Native.

Assume the [app for integration](https://github.com/JoelMarcey/swift-2048) is a [2048](https://en.wikipedia.org/wiki/2048_%28video_game%29) game. Here is what the main menu of the native application looks like without React Native.

![Before RN Integration](/docs/assets/react-native-existing-app-integration-ios-before.png)

### Command Line Tools for Xcode

Install the Command Line Tools. Choose "Preferences..." in the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![Xcode Command Line Tools](/docs/assets/GettingStartedXcodeCommandLineTools.png)

### Configuring CocoaPods dependencies

Before you integrate React Native into your application, you will want to decide what parts of the React Native framework you would like to integrate. We will use CocoaPods to specify which of these "subspecs" your app will depend on.

The list of supported `s is available in [`](https://github.com/facebook/react-native/blob/master/React.podspec). They are generally named by functionality. For example, you will generally always want the ``. That will get you the `,`, `and other core React Native libraries. If you want to add the React Native` library (e.g., for `elements), then you will need the` `. If you want the` library (e.g., for `elements), then you will need the` ``.

You can specify which `s your app will depend on in a` file. The easiest way to create a `is by running the CocoaPods` command in the `` subfolder of your project:

```sh



```

The `` will contain a boilerplate setup that you will tweak for your integration purposes.

&gt; The `version changes depending on your version of`. Refer to for the specific version of `` you should be using.

Ultimately, your `` should look something similar to this:

```



```

```



```

After you have created your ``, you are ready to install the React Native pod.

```sh



```

You should see output such as:

```



```

&gt; If this fails with errors mentioning ``, make sure that in Xcode in **Preferences &gt; Locations** the Command Line Tools are assigned.

&gt; If you get a warning such as "_The `target overrides the` build setting defined in ``. This can lead to problems with the CocoaPods installation_", then make sure the `in` for both `and` only contain ``.

### Code integration

Now we will actually modify the native iOS application to integrate React Native. For our 2048 sample app, we will add a "High Score" screen in React Native.

#### The React Native component

The first bit of code we will write is the actual React Native code for the new "High Score" screen that will be integrated into our application.

##### 1. Create a `` file

First, create an empty `` file in the root of your React Native project.

`is the starting point for React Native applications, and it is always required. It can be a small file that`s other file that are part of your React Native component or application, or it can contain all the code that is needed for it. In our case, we will put everything in ``.

##### 2. Add your React Native code

In your `, create your component. In our sample here, we will add a` component within a styled ``

```jsx
```

&gt; `` is the name of your module that will be used when you add a view to React Native from within your iOS application.

#### The Magic: ``

Now that your React Native component is created via `, you need to add that component to a new or existing`. The easiest path to take is to optionally create an event path to your component and then add that component to an existing ``.

We will tie our React Native component with a new native view in the `that will actually contain it called` .

##### 1. Create an Event Path

You can add a new link on the main game menu to go to the "High Score" React Native page.

![Event Path](/docs/assets/react-native-add-react-native-integration-link.png)

##### 2. Event Handler

We will now add an event handler from the menu link. A method will be added to the main `of your application. This is where` comes into play.

When you build a React Native application, you use the [Metro bundler][metro] to create an `that will be served by the React Native server. Inside` will be our `module. So, we need to point our` to the location of the `resource (via`) and tie it to the module.

We will, for debugging purposes, log that the event handler was invoked. Then, we will create a string with the location of our React Native code that exists inside the `. Finally, we will create the main`. Notice how we provide `as the` that we created [above](#the-react-native-component) when writing the code for our React Native component.

First `the` header.

```objectivec



```

&gt; The `are here for illustration purposes so we have some data for our high score screen. In our React Native component, we will use` to get access to that data.

```objectivec



```

&gt; Note that `starts up a new JSC VM. To save resources and simplify the communication between RN views in different parts of your native app, you can have multiple views powered by React Native that are associated with a single JS runtime. To do that, instead of using`, use [``](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L93) to create a bridge and then use ``.

First `the` library.

```jsx
```

&gt; The `are here for illustration purposes so we have some data for our high score screen. In our React Native component, we will use` to get access to that data.

```swift



```

&gt; Note that `starts up a new JSC VM. To save resources and simplify the communication between RN views in different parts of your native app, you can have multiple views powered by React Native that are associated with a single JS runtime. To do that, instead of using`, use [``](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L89) to create a bridge and then use ``.

&gt; When moving your app to production, the `can point to a pre-bundled file on disk via something like`. You can use the `script in` to generate that pre-bundled file.

&gt; When moving your app to production, the `can point to a pre-bundled file on disk via something like`. You can use the `script in` to generate that pre-bundled file.

##### 3. Wire Up

Wire up the new link in the main menu to the newly added event handler method.

![Event Path](/docs/assets/react-native-add-react-native-integration-wire-up.png)

&gt; One of the easier ways to do this is to open the view in the storyboard and right click on the new link. Select something such as the `` event, drag that to the storyboard and then select the created method from the list provided.

### Test your integration

You have now done all the basic steps to integrate React Native with your current application. Now we will start the [Metro bundler][metro] to build the `package and the server running on` to serve it.

##### 1. Add App Transport Security exception

Apple has blocked implicit cleartext HTTP resource loading. So we need to add the following our project's `` (or equivalent) file.

```xml



```

&gt; App Transport Security is good for your users. Make sure to re-enable it prior to releasing your app for production.

##### 2. Run the packager

To run your app, you need to first start the development server. To do this, run the following command in the root directory of your React Native project:

```sh



```

##### 3. Run the app

If you are using Xcode or your favorite editor, build and run your native iOS application as normal. Alternatively, you can run the app from the command line using:

```



```

In our sample application, you should see the link to the "High Scores" and then when you click on that you will see the rendering of your React Native component.

Here is the _native_ application home screen:

![Home Screen](/docs/assets/react-native-add-react-native-integration-example-home-screen.png)

Here is the _React Native_ high score screen:

![High Scores](/docs/assets/react-native-add-react-native-integration-example-high-scores.png)

&gt; If you are getting module resolution issues when running your application please see [this GitHub issue](https://github.com/facebook/react-native/issues/4968) for information and possible resolution. [This comment](https://github.com/facebook/react-native/issues/4968#issuecomment-220941717) seemed to be the latest possible resolution.

### See the Code

You can examine the code that added the React Native screen to our sample app on [GitHub](https://github.com/JoelMarcey/iOS-2048/commit/9ae70c7cdd53eb59f5f7c7daab382b0300ed3585).

You can examine the code that added the React Native screen to our sample app on [GitHub](https://github.com/JoelMarcey/swift-2048/commit/13272a31ee6dd46dc68b1dcf4eaf16c1a10f5229).

## Adding React Native to your app

### Configuring maven

Add the React Native dependency to your app's `` file:

```gradle



```

&gt; If you want to ensure that you are always using a specific React Native version in your native build, replace `with an actual React Native version you've downloaded from`.

Add an entry for the local React Native maven directory to ``. Be sure to add it to the "allprojects" block, above other maven repositories:

```gradle



```

&gt; Make sure that the path is correct! You shouldn’t run into any “Failed to resolve: com.facebook.react:react-native:0.x.x" errors after running Gradle sync in Android Studio.

### Configuring permissions

Next, make sure you have the Internet permission in your ``:

```



```

If you need to access to the `add to your`:

```



```

This is only used in dev mode when reloading JavaScript from the development server, so you can strip this in release builds if you need to.

### Cleartext Traffic (API level 28+)

&gt; Starting with Android 9 (API level 28), cleartext traffic is disabled by default; this prevents your application from connecting to the [Metro bundler][metro]. The changes below allow cleartext traffic in debug builds.

#### 1. Apply the `option to your Debug`

```xml





--&gt;

```

This is not required for Release builds.

To learn more about Network Security Config and the cleartext traffic policy [see this link](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted).

### Code integration

Now we will actually modify the native Android application to integrate React Native.

#### The React Native component

The first bit of code we will write is the actual React Native code for the new "High Score" screen that will be integrated into our application.

##### 1. Create a `` file

First, create an empty `` file in the root of your React Native project.

`is the starting point for React Native applications, and it is always required. It can be a small file that`s other file that are part of your React Native component or application, or it can contain all the code that is needed for it. In our case, we will put everything in ``.

##### 2. Add your React Native code

In your `, create your component. In our sample here, we will add a` component within a styled ``:

```jsx
```

##### 3. Configure permissions for development error overlay

If your app is targeting the Android `or greater, make sure you have the permission` enabled for the development build. You can check this with `. This is required in dev builds because React Native development errors must be displayed above all the other windows. Due to the new permissions system introduced in the API level 23 (Android M), the user needs to approve it. This can be achieved by adding the following code to your Activity's in` method.

```java



```

Finally, the `method (as shown in the code below) has to be overridden to handle the permission Accepted or Denied cases for consistent UX. Also, for integrating Native Modules which use`, we need to pass the result to the `method of our` instance.

```java



```

#### The Magic: ``

Let's add some native code in order to start the React Native runtime and tell it to render our JS component. To do this, we're going to create an `that creates a`, starts a React application inside it and sets it as the main content view.

&gt; If you are targeting Android version &lt;5, use the `class from the` package instead of ``.

```java



```

&gt; If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your index.js file (it’s the first argument to the `` method).

If you are using Android Studio, use `to add all missing imports in your MyReactActivity class. Be careful to use your package’s` and not the one from the `` package.

We need set the theme of `to` because some React Native UI components rely on this theme.

```xml



```

&gt; A `can be shared by multiple activities and/or fragments. You will want to make your own` or `and have a singleton _holder_ that holds a`. When you need the `(e.g., to hook up the` to the lifecycle of those Activities or Fragments) use the one provided by the singleton.

Next, we need to pass some activity lifecycle callbacks to the `and`:

```java



```

We also need to pass back button events to React Native:

```java



```

This allows JavaScript to control what happens when the user presses the hardware back button (e.g. to implement navigation). When JavaScript doesn't handle the back button press, your `method will be called. By default this finishes your`.

Finally, we need to hook up the dev menu. By default, this is activated by (rage) shaking the device, but this is not very useful in emulators. So we make it show when you press the hardware menu button (use `` if you're using Android Studio emulator):

```java



```

Now your activity is ready to run some JavaScript code.

### Test your integration

You have now done all the basic steps to integrate React Native with your current application. Now we will start the [Metro bundler][metro] to build the `` package and the server running on localhost to serve it.

##### 1. Run the packager

To run your app, you need to first start the development server. To do this, run the following command in the root directory of your React Native project:

```sh



```

##### 2. Run the app

Now build and run your Android app as normal.

Once you reach your React-powered activity inside the app, it should load the JavaScript code from the development server and display:

![Screenshot](/docs/assets/EmbeddedAppAndroid.png)

### Creating a release build in Android Studio

You can use Android Studio to create your release builds too! It’s as quick as creating release builds of your previously-existing native Android app. There’s one additional step, which you’ll have to do before every release build. You need to execute the following to create a React Native bundle, which will be included with your native Android app:

```sh



```

&gt; Don’t forget to replace the paths with correct ones and create the assets folder if it doesn’t exist.

Now, create a release build of your native app from within Android Studio as usual and you should be good to go!

### Now what?

At this point you can continue developing your app as usual. Refer to our [debugging](debugging) and [deployment](running-on-device) docs to learn more about working with React Native.

[metro]: https://facebook.github.io/metro/
