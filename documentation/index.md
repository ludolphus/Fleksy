# Appcelerator Fleksy Module

## Description

![Fleksy Keyboard](https://camo.githubusercontent.com/61dc0c76680d6e1a3c3954a0994cc548c6bf0baf/687474703a2f2f666c656b73792e636f6d2f323031342f77702d636f6e74656e742f75706c6f6164732f323031342f30322f4769742d42616e6e657232312e706e67 "Appcelerator Fleksy Module")

Give your users the choice of an alternative keyboard for the first time ever on iOS!

This module will give your app users the option to choose the Fleksy keyboard. It requires that the user has the Fleksy app installed. If not first time use of your app will ask the user to install the Fleksy app and switches to the [AppStore](https://itunes.apple.com/us/app/fleksy-keyboard-happy-typing/id520337246?mt=8)

## Accessing the Appcelerator Fleksy Module

To access this module from JavaScript, you would do the following:

	var Fleksy = require("com.fleksy");

The Fleksy variable is a reference to the Module object.

There are no properties or methods, just include the module and you're good to go.

## Setting up your app for Fleksy

The Fleksy SDK requires that you setup a URL scheme. To do this open your tiapp.xml file and add the following:

~~~
    <ios>
        <plist>
            <dict>
                <key>CFBundleURLTypes</key>
                <array>
                    <dict>
                        <key>CFBundleURLSchemes</key>
                        <array>
                            <string>Fleksy-YOUR_BUNDLE_ID</string>
                        </array>
                        <key>CFBundleURLName</key>
                        <string>YOUR_BUNDLE_ID</string>
                    </dict>
                </array>
            </dict>
        </plist>
    </ios>
~~~

If you already have a <ios> and <plist> key update it to reflect the above.

Change YOUR_BUNDLE_ID to reflect your app's bundle name.

[Further details on the Fleksy SDK](https://github.com/Fleksy/FleksySDK)

## Usage

See [example/app.js](https://github.com/ludolphus/Fleksy/blob/master/example/app.js)

## Author

Steven van Loef
Twitter: @ludolphus
App.net @ludolphus

## License

see [https://github.com/Fleksy/FleksySDK/blob/master/LICENSE.pdf](https://github.com/Fleksy/FleksySDK/blob/master/LICENSE.pdf)
