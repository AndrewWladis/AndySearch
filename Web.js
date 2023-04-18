import { View, } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import styles from './Styles';

export default function Web({ route, navigation }) {
  return (
    <View style={styles.web}>
      <WebView source={{ uri: route.params.url }} style={styles.browser} />
    </View>
  );
}