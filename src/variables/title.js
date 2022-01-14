import React from 'react';
import {View, Text} from 'react-native';

import { styles } from '../_assets/styles';

const Title = props => {
  return(
    <View style={styles.subcontainer}>
      <Text style={[styles.textL, styles.textPrimary, styles.textBold]}>Variables disponibles</Text>
    </View>
  )
}

export default Title;