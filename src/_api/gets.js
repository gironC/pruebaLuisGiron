import axios from "axios";

const url = 'http://192.168.3.171/backendGenesis/api/';

export const getVariablesDisponibles = async() => {
  return axios.get(`${url}variablesDisponibles`,{
  })
  .then(res => res.data)
  .catch(error => {throw error});
}

export const getTipoCambioRangos = async(fechaI, fechaF) => {
  return axios.get(`${url}tipoCambioRango`,{
    params: {
      fechaI: fechaI,
      fechaF: fechaF
    }
  })
  .then(res => res.data)
  .catch(error => {throw error});
}