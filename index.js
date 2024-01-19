/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee, {EventType} from '@notifee/react-native';

function onMessageReceived(message) {
  notifee.displayNotification(JSON.parse(message.data.notifee));
}

AppRegistry.registerComponent(appName, () => App);
