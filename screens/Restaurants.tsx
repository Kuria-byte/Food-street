import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import colors from '../assets/ultis/colors';
import FONTS from '../assets/ultis/fonts';
import RestaurantList from './RestaurantList';

const Restaurants = memo(() => {
    return (
        <ScrollableTabView
            style={styles.container}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar style={styles.scrollableTabBar} />}
            tabBarActiveTextColor={'#0EAD69'}
            tabBarUnderlineStyle={styles.tabBarUnLine}
            tabBarInactiveTextColor={'#7D8699'}
            tabBarTextStyle={styles.tabBarText}>

            <RestaurantList />
    =
        </ScrollableTabView>
    );
});

export default Restaurants;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.while,
    },
    tabBarUnLine: {
        backgroundColor: '#0EAD69',
        height: 2,
        alignSelf: 'center',
    },
    tabBarText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 12,
        fontWeight: '600',
    },
    scrollableTabBar: {
        borderColor: colors.while,
        borderTopWidth: 0,
    },
});
