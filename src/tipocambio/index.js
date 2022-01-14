import React from 'react';
import {ScrollView, View} from 'react-native';

import Title from './title';
import Table from './table';

import {styles} from '../_assets/styles';

const Index = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title />
        <Table />
      </View>
    </ScrollView>
  );
}

export default Index;