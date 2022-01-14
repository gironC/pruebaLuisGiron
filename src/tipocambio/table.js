import React, {useState, useEffect} from 'react';
import {View, Pressable, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {getTipoCambioRangos} from '../_api/gets';

import { styles } from '../_assets/styles';

const Table = props => {
  const [fechaI,setFechaI] = new useState(new Date());
  const [fechaF,setFechaF] = new useState(new Date());
  const [openI,setOpenI] = new useState(false);
  const [openF,setOpenF] = new useState(false);
  const [textI, setTextI] = new useState('Fecha Inicio');
  const [textF, setTextF] = new useState('Fecha Fin');
  const [promedioC, setPromedioC] = new useState(0);
  const [promedioV, setPromedioV] = new useState(0);
  const [registro, setRegistro] = new useState([]);
  function definirFechaI(date) {
    let dia = '', mes = '', anio = '';
    setOpenI(false);
    setFechaI(date);
    dia = ('0' + date.getDate()).slice(-2);
    mes = ('0' + (date.getMonth() + 1)).slice(-2);
    anio = date.getFullYear();
    setTextI(dia + '/' + mes + '/' + anio);
  }
  function definirFechaF(date) {
    let dia = '', mes = '', anio = '';
    setOpenF(false);
    setFechaF(date);
    dia = ('0' + date.getDate()).slice(-2);
    mes = ('0' + (date.getMonth() + 1)).slice(-2);
    anio = date.getFullYear();
    setTextF(dia + '/' + mes + '/' + anio);
  }
  function setPromedio(){
    let sumaC = 0, sumaV = 0, proC = 0, proV = 0, tabla = JSON.parse(JSON.stringify(registro));
    getTipoCambioRangos(textI,textF)
    .then(res => {
      console.log(res);
      res.Vars.map(i => {
        sumaC = sumaC + i.compra;
        sumaV = sumaV + i.venta;
      });
      proC = (sumaC / res.TotalItems).toFixed(2);
      proV = (sumaV / res.TotalItems).toFixed(2);
      setPromedioC(proC);
      setPromedioV(proV);
      tabla.push({fechaI:textI,fechaF:textF,compra:proC.toString(),venta:proV.toString()});
      setRegistro(tabla);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return(
    <View style={styles.subcontainer}>
      <Pressable style={styles.textbox} onPress={() => setOpenI(true)}>
        <Text style={[styles.textM]}>{textI}</Text>
      </Pressable>
      <Pressable style={styles.textbox} onPress={() => setOpenF(true)}>
        <Text style={[styles.textM]}>{textF}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setPromedio()}>
        <Text style={[styles.textM, styles.textWhite]}>Buscar</Text>
      </Pressable>
      <View style={{paddingBottom:10}} />
      <Text style={[styles.textS,styles.textPrimary]}>Promedio de valor de compra</Text>
      <Text style={[styles.textL,styles.textBlack]}>{promedioC}</Text>
      <Text style={[styles.textS,styles.textPrimary]}>Promedio de valor de venta</Text>
      <Text style={[styles.textL,styles.textBlack]}>{promedioV}</Text>
      <View style={{paddingBottom:10}} />
      <Text style={[styles.textL,styles.textPrimary]}>Registro</Text>
      <View style={styles.table}>
        {registro.map((item, index) => {return(
          <View style={styles.table_row}>
            <View style={{width:'50%'}}>
              <Text style={[styles.textS,styles.textPrimary]}>Fecha Inicio</Text>
              <Text style={[styles.textM,styles.textBlack]}>{item.fechaI}</Text>
              <Text style={[styles.textS,styles.textPrimary]}>Fecha Fin</Text>
              <Text style={[styles.textM,styles.textBlack]}>{item.fechaF}</Text>
            </View>
            <View style={{width:'50%'}}>
              <Text style={[styles.textS,styles.textPrimary]}>Promedio compra</Text>
              <Text style={[styles.textM,styles.textBlack]}>{item.compra}</Text>
              <Text style={[styles.textS,styles.textPrimary]}>PromedioVenta</Text>
              <Text style={[styles.textM,styles.textBlack]}>{item.venta}</Text>
            </View>
          </View>
        )})}
      </View>
      <DatePicker modal open={openI} date={fechaI} mode='date' onConfirm={(date) => definirFechaI(date)} onCancel={() => setOpenI(false)} />
      <DatePicker modal open={openF} date={fechaF} mode='date' onConfirm={(date) => definirFechaF(date)} onCancel={() => setOpenF(false)} />
    </View>
  )
}

export default Table;