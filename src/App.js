import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import { widgetsStore } from './widgetsStore';
import { WidgetToolContainer } from './components';

export const App = () =>
  <Provider store={widgetsStore}>
    <WidgetToolContainer />
  </Provider>;