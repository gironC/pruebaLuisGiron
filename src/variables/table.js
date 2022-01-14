import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import { styles } from '../_assets/styles';

import {getVariablesDisponibles} from '../_api/gets';

const Table = props => {
  const [cat_moneda, setCat_moneda] = useState([]);
  useEffect(()=>{
    getVariablesDisponibles()
    .then(res => {
      setCat_moneda(res.Variables);
    })
    .catch(error => {
      console.log(error);
    })
  },[]);
  return(
    <View style={styles.subcontainer}>
      <View style={styles.table}>
        {cat_moneda.map((item,index) => {return(
          <View style={styles.table_row} key={index.toString()}>
            <Text style={{paddingHorizontal:5}}>{item.moneda}</Text>
            <Text style={{paddingHorizontal:5,flex:1}}>{item.descripcion}</Text>
          </View>
        )})}
      </View>
    </View>
  )
}

export default Table;