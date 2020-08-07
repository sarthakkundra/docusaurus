---
id: getting-started
title: Getting Started
original_id: getting-started
---

This page will help you install and build your first React Native app. If you already have React Native installed, you can skip ahead to the [Tutorial](tutorial.md).

<strong>If you are new to mobile development</strong>, the easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many [features](https://expo.io/features), the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator. If you'd like to try out React Native directly in your web browser before installing any tools, you can try out [Snack](https://snack.expo.io/).

<strong>If you are already familiar with mobile development</strong>, you may want to use React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

<div className="toggler">
  <ul role="tablist" id="toggle-guide">
    <li id="quickstart" className="button-quickstart" aria-selected="false" role="tab" tabIndex={0} aria-controls="quickstarttab" onClick="displayTab('guide', 'quickstart')">
      Expo CLI Quickstart
    </li>
    <li id="native" className="button-native" aria-selected="false" role="tab" tabIndex={0} aria-controls="nativetab" onClick="displayTab('guide', 'native')">
      React Native CLI Quickstart
    </li>
  </ul>
</div>

block

Assuming that you have [Node 10 LTS](https://nodejs.org/en/download/) or greater installed, you can use npm to install the Expo CLI command line utility:

```sh



```

Then run the following commands to create a new React Native project called "AwesomeProject":

```sh



```

This will start a development server for you.

Running your React Native application

Install the [Expo](https://expo.io) client app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, follow on-screen instructions to get a link.

Modifying your app

Now that you have successfully run the app, let's modify it. Open `` in your text editor of choice and edit some lines. The application should reload automatically once you save your changes.

That's it!

Congratulations! You've successfully run and modified your first React Native app.

Now what?

Expo also has [docs](https://docs.expo.io) you can reference if you have questions specific to the tool. You can also ask for help at [Expo forums](https://forums.expo.io).

These tools help you get started quickly, but before committing to building your app with Expo CLI, [read about the limitations](https://docs.expo.io/versions/latest/introduction/why-not-expo/).

If you have a problem with Expo, before creating a new issue, please see if there's an existing issue about it:

- in the [Expo CLI issues](https://github.com/expo/expo-cli/issues) (for issues related to Expo CLI), or
- in the [Expo issues](https://github.com/expo/expo/issues) (for issues about the Expo client or SDK).

If you're curious to learn more about React Native, continue on to the [Tutorial](tutorial.md).

Running your app on a simulator or virtual device

Expo CLI allows you to run your React Native app on a physical device without setting up a development environment. If you want to run your app on the iOS Simulator or an Android Virtual Device, please refer to the instructions for "React Native CLI Quickstart" to learn how to install Xcode or set up your Android development environment.

Once you've set these up, you can launch your app on an Android Virtual Device by running `, or on the iOS Simulator by running` (macOS only).

Caveats

Because you don't build any native code when using Expo to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.

If you know that you'll eventually need to include your own native code, Expo is still a good way to get started. In that case you'll need to "[eject](https://docs.expo.io/versions/latest/workflow/customizing/)" eventually to create your own native builds. If you do eject, the "React Native CLI Quickstart" instructions will be required to continue working on your project.

Expo CLI configures your project to use the most recent React Native version that is supported by the Expo client app. The Expo client app usually gains support for a given React Native version about a week after the React Native version is released as stable. You can check [this document](https://docs.expo.io/versions/latest/sdk/overview/#sdk-version) to find out what versions are supported.

If you're integrating React Native into an existing project, you'll want to skip Expo CLI and go directly to setting up the native build environment. Select "React Native CLI Quickstart" above for instructions on configuring a native build environment for React Native.

Follow these instructions if you need to build native code in your project. For example, if you are integrating React Native into an existing application, or if you "ejected" from Expo, you'll need this section.

The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android. If you want to develop for both Android and iOS, that's fine - you can pick one to start with, since the setup is a bit different.

Development OS:

    macOS
    Windows
    Linux

Target OS:

    iOS
    Android

Unsupported

A Mac is required to build projects with native code for iOS. You can follow the Quick Start to learn how to build your app using Expo instead.

Installing dependencies

You will need Node, Watchman, the React Native command line interface, and Xcode.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

Installing dependencies

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.

Installing dependencies

You will need Node, the React Native command line interface, Python2, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

Node, Watchman, JDK

We recommend installing Node, Watchman, and JDK using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```



```

If you have already installed Node on your system, make sure it is Node 8.3 or newer.

[Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

If you have already installed JDK on your system, make sure it is JDK 8 or newer.

Node

Follow the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/) to install Node 8.3 or newer.

Node, Python2, JDK

We recommend installing Node and Python2 via [Chocolatey](https://chocolatey.org), a popular package manager for Windows.

React Native also requires a recent version of the [Java SE Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), as well as Python 2. Both can be installed using Chocolatey.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

```powershell



```

If you have already installed Node on your system, make sure it is Node 8.3 or newer. If you already have a JDK on your system, make sure it is version 8 or newer.

&gt; You can find additional installation options on [Node's Downloads page](https://nodejs.org/en/download/).

The React Native CLI

Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:

```



```

&gt; If you get an error like `, try installing npm directly:`.

The React Native CLI

Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Command Prompt or shell:

```powershell



```

&gt; If you get an error like `, try installing npm directly:`.

Xcode

The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 9.4 or newer.

Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![Xcode Command Line Tools](/docs/assets/GettingStartedXcodeCommandLineTools.png)

Java Development Kit

React Native requires version 8 of the Java SE Development Kit (JDK). You may download and install [OpenJDK](http://openjdk.java.net) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager. You may also [Download and install Oracle JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if desired.

Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

- ``
- ``
- `` ([See here for AMD](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))
- ``

* ``
* ``
* ``

Then, click "Next" to install all of these components.

&gt; If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

![Android Studio Welcome](/docs/assets/GettingStartedAndroidStudioWelcomeMacOS.png)

![Android Studio Welcome](/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)

&gt; The SDK Manager can also be found within the Android Studio "Preferences" dialog, under **Appearance & Behavior** → **System Settings** → **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `` entry, then make sure the following items are checked:

- ``
- `or`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `` is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `or` config file:

```



```

```



```

&gt; `is specific to`. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type `to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running`.

&gt; Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under **Appearance & Behavior** → **System Settings** → **Android SDK**.

Open the System pane under **System and Security** in the Windows Control Panel, then click on **Change settings...**. Open the **Advanced** tab and click on **Environment Variables...**. Click on **New...** to create a new `` user variable that points to the path to your Android SDK:

![ANDROID_HOME Environment Variable](/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

The SDK is installed, by default, at the following location:

```powershell



```

You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under **Appearance & Behavior** → **System Settings** → **Android SDK**.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

4. Add platform-tools to Path

Open the System pane under **System and Security** in the Windows Control Panel, then click on **Change settings...**. Open the **Advanced** tab and click on **Environment Variables...**. Select the **Path** variable, then click **Edit**. Click **New** and add the path to platform-tools to the list.

The default location for this folder is:

```powershell



```

Watchman

Follow the [Watchman installation guide](https://facebook.github.io/watchman/docs/install#buildinstall) to compile and install Watchman from source.

&gt; [Watchman](https://facebook.github.io/watchman/docs/install) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance and increased compatibility in certain edge cases (translation: you may be able to get by without installing this, but your mileage may vary; installing this now may save you from a headache later).

Creating a new application

Use the React Native command line interface to generate a new React Native project called "AwesomeProject":

```



```

This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Expo (or Create React Native App), or if you're adding iOS support to an existing React Native project (see [Platform Specific Code](platform-specific-code.md)). You can also use a third-party CLI to init your React Native app, such as [Ignite CLI](https://github.com/infinitered/ignite).

[Optional] Using a specific version

If you want to start a new project with a specific React Native version, you can use the `` argument:

```



```

```



```

Creating a new application

Use the React Native command line interface to generate a new React Native project called "AwesomeProject":

```



```

This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Create React Native App, or if you're adding Android support to an existing React Native project (see [Platform Specific Code](platform-specific-code.md)). You can also use a third-party CLI to init your React Native app, such as [Ignite CLI](https://github.com/infinitered/ignite).

[Optional] Using a specific version

If you want to start a new project with a specific React Native version, you can use the `` argument:

```



```

```



```

Preparing the Android device

You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

Using a physical device

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](running-on-device.md).

Using a virtual device

If you use Android Studio to open ``, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

![Android Studio AVD Manager](/docs/assets/GettingStartedAndroidStudioAVD.png)

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **Pie** API Level 28 image.

&gt; We recommend configuring [VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) on your system to improve performance. Once you've followed those instructions, go back to the AVD Manager.

&gt; If you don't have HAXM installed, click on "Install HAXM" or follow [these instructions](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows) to set it up, then go back to the AVD Manager.

&gt; If you don't have HAXM installed, follow [these instructions](https://github.com/intel/haxm/wiki/Installation-Instructions-on-macOS) to set it up, then go back to the AVD Manager.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

Running your React Native application

Run `` inside your React Native project folder:

```



```

You should see your new app running in the iOS Simulator shortly.

![AwesomeProject on iOS](/docs/assets/GettingStartediOSSuccess.png)

`` is one way to run your app. You can also run it directly from within Xcode.

&gt; If you can't get this to work, see the [Troubleshooting](troubleshooting.md#content) page.

Running on a device

The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions [here](running-on-device.md).

Running your React Native application

Run `` inside your React Native project folder:

```



```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

![AwesomeProject on Android](/docs/assets/GettingStartedAndroidSuccessMacOS.png)

![AwesomeProject on Android](/docs/assets/GettingStartedAndroidSuccessWindows.png)

`` is one way to run your app - you can also run it directly from within Android Studio.

&gt; If you can't get this to work, see the [Troubleshooting](troubleshooting.md#content) page.

Modifying your app

Now that you have successfully run the app, let's modify it.

- Open `` in your text editor of choice and edit some lines.
- Hit `` in your iOS Simulator to reload the app and see your changes!

* Open `` in your text editor of choice and edit some lines.
* Press the `key twice or select` from the Developer Menu (``) to see your changes!

Modifying your app

Now that you have successfully run the app, let's modify it.

- Open `` in your text editor of choice and edit some lines.
- Press the `key twice or select` from the Developer Menu (``) to see your changes!

That's it!

Congratulations! You've successfully run and modified your first React Native app.

That's it!

Congratulations! You've successfully run and modified your first React Native app.

Now what?

- Turn on [Live Reload](debugging.md#reloading-javascript) in the Developer Menu. Your app will now reload automatically whenever you save any changes!

- If you want to add this new React Native code to an existing application, check out the [Integration guide](integration-with-existing-apps.md).

If you're curious to learn more about React Native, continue on to the [Tutorial](tutorial.md).

Now what?

- Turn on [Live Reload](debugging.md#reloading-javascript) in the Developer Menu. Your app will now reload automatically whenever you save any changes!

- If you want to add this new React Native code to an existing application, check out the [Integration guide](integration-with-existing-apps.md).

If you're curious to learn more about React Native, continue on to the [Tutorial](tutorial.md).
