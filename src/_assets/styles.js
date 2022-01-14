import React from 'react';
import {StyleSheet} from 'react-native';

const colors = {
  primary: '#003366',
  secondary: '#E5E5CC',
  black: '#000000',
  white: '#ffffff',
  light: '#eeeeee',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    paddingTop: 30
  },
  subcontainer: {
    width: '100%',
    backgroundColor: colors.light,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  table: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  table_row: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    flexDirection: 'row'
  },
  textbox: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    marginBottom: 10
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },

// TEXTOS
  textS: {fontSize: 12},
  textM: {fontSize: 16},
  textL: {fontSize: 20},
  textXL: {fontSize: 24},
  textPrimary: {color: colors.primary},
  textSecondary: {color: colors.secondary},
  textWhite: {color: colors.white},
  textBlack: {color: colors.black},
  textBold: {fontWeight: 'bold'},
  textItalic: {fontStyle: 'italic'},
});