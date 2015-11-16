'use strict';

import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

class Anchor extends Component {
  onPress() {
    if (this.props.href) React.NativeModules.WebViewModal.showWebViewWithURL(this.props.href);
  }
  render() {
    var currentColor = this.props.color ? this.props.color : '007aff';
    return (
      <TouchableOpacity
        onPress={this.onPress.bind(this)}
        style={{borderBottomWidth: this.props.line ? 1 : 0, borderBottomColor: currentColor}}>
        <Text style={[{color: currentColor, fontSize: 14}, this.props.color]}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = Anchor;