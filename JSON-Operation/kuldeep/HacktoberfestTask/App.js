/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import moment from 'moment';
import {List} from "./src/JSON/data";

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.listData = List

    }

    _renderItemData = (item) => {
        let lastname = item.name.split(" ");
        let price = parseInt(item.balance.substr(1)) * 74;
        let address = item.address.split(",");
        let domain = item.email.split(".");
        let startDate = moment(item.registered).local();
        let duration = moment.duration(moment(new Date()), startDate);
        return (
            <View>
                <Text>{lastname[1]}</Text>
                <Text>{price}</Text>
                <Text>{item.tags.length}</Text>
                <Text>Street : {address[0]}</Text>
                <Text>city : {address[1]}</Text>
                <Text>state : {address[2]}</Text>
                <Text>pincode : {address[3]}</Text>
                <Text>.{domain[1]}</Text>
                <Text>{`${duration.asYears()} Years ${duration.asMonths()} Months ${duration.asDays()} Days `}</Text>
                <Text>Friends Count : {item.friends.length}</Text>
                <Text>{item.favoriteFruit}</Text>
                <View style={{width: "100%", backgroundColor: 'gray', height: 1}}/>
            </View>
        )
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.listData}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => this._renderItemData(item)}
                />
            </View>
        );
    }
}
