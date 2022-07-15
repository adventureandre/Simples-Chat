import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import {connect} from 'react-redux';


import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';

const ConversasStackNavigation = createStackNavigator();

function Conversas() {
    return (
        <ConversasStackNavigation.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >

            <ConversasStackNavigation.Screen name="ConversasList" component={ConversasList} options={{ title: 'Conversas'  }} />
            <ConversasStackNavigation.Screen name="ConversaInterna" component={ConversaInterna} options={{ title: 'Conversa interna' }} />

        </ConversasStackNavigation.Navigator>
    )
}

export default Conversas;