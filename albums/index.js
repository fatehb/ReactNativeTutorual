//Import Library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Ceate Component
const App = () => (
    <Text>SomeText</Text>
);

//Render Component
AppRegistry.registerComponent('albums', () => App);
