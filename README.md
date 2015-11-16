# react-native-inapp-browser
A in-App browser for react native based apps using [TransitApp/SVWebViewController](https://github.com/TransitApp/SVWebViewController).

Because there is some dependency problems, I cannot add [TransitApp/SVWebViewController](https://github.com/TransitApp/SVWebViewController) as a submodule.

![inappguide](https://cloud.githubusercontent.com/assets/4535844/11191829/fde22b94-8c73-11e5-9caa-01ea11434016.gif)

## Install
1. `npm install react-native-inapp-browser`
2. Go to `node_modules` ➜ `react-native-inapp-browser` ➜ `RCTInAppBrowser`
3. Drag `RCTInAppBrowser` ___***FOLDER***___ into your master project
4. Run your project (`Cmd+R`)

![inapp](https://cloud.githubusercontent.com/assets/4535844/11191714/0a59c982-8c73-11e5-9507-ea03121502f3.gif)

## Basic Usage
```jsx
import Anchor from 'react-native-inapp-browser';

<Anchor href='http://google.com' color='e67221' line>URL_PLACEHOLDER</Anchor>
```

## Configurations
The **`<Anchor/>`** object can take the following props:

### Basic Parameters
- `href`: *REQUIRED*, the URL of the button.
- `color`: The shortcut for `color` attribute, will apply to the text-decoration style and font color.
- `line`: Adding this will display a underline decoration.

___NOTE: If you are using the `style` props to style this button yourself, I suggest not using the `color` and `line` props.___

## Demo
```jsx
import Anchor from 'react-native-inapp-browser';

class MyApp extends React.Component {
  render() {
    return (
      <React.View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Anchor href='http://google.com'>Open Google.com</Anchor>
      </React.View>
    );
  }
}
React.AppRegistry.registerComponent('MyApp', () => MyApp);
```

## Questions
If something is undocumented here, and it is not clear with you, feel free to create an issue here, I will tried my best to answer you.

## Anything else
Feel free to request new features, just create an issue.
It will be very welcome to pull request for me.

My email ```me@idickyt.com```

Facebook [Dicky Tsang](https://www.facebook.com/idickytsang)

Sina Weibo ```@桐乃```
