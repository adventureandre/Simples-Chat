import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import {connect} from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigation = createBottomTabNavigator();

function Conversas() {
    return (
        <ConversasNavigation.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >

            <ConversasNavigation.Screen name="ConversasStack" component={ConversasStack} options={{ title: 'Conversas'  }} />
            <ConversasNavigation.Screen name="ContatoList" component={ContatoList} options={{ title: 'Contatos' }} />
            <ConversasNavigation.Screen name="Config" component={Config} options={{ title: 'Config' }} />

        </ConversasNavigation.Navigator>
    )
}

export default Conversas;