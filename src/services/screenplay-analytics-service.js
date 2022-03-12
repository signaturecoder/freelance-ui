import Env from './../environment/environment'
import { endpoint } from '../constants/Constant';
import axios from "axios";


const  getScreenAttributes=(id)=>{
    return axios.get(`${endpoint.SCENE_ATTRIBUTE}?screenplayuid=${id}`);
 }

 const  getCharacterAttributes=(id)=>{
    return axios.get(`${endpoint.SCENE}?screenplayuid=${id}`);
 }

 const uploadAnalysis=(payload)=>{
    return axios.post(`${endpoint.ANALYSIS_UPLOAD}`,payload);
 }

  
  export {
    getScreenAttributes,
    getCharacterAttributes,
    uploadAnalysis
  };