import React from 'react';
import { StatusBar, StyleSheet, ScrollView, View, Text, } from 'react-native';
import { colors } from "../../styles";

import Header from "./components/Header";
import Bookmark from "./components/Bookmark";
import About from "./components/About";
import Stats from "./components/Stats";
import Amenities from './components/Amenities';
import Adress from './components/Adress';
import Extras from './components/Extras';


export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Header />

            <View>
                <Bookmark />
                <About />
                <Stats />
                <Amenities />
                <Adress />
                <Extras />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }

});

