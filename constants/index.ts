import axios from 'axios';

export const icons = {
  google: require("@/assets/icons/google.png"),
  lips: require("@/assets/icons/lips.png"),
}

export const api = axios.create({
  baseURL: 'http://njord.vps.webdock.cloud', // usa HTTPS se disponibile
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});