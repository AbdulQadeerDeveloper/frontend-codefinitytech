import axios from "axios";

// Your Google Sheets API URL from deployment
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyODWuCzhtZ0wSrGftVMUp98IOkxf3qLo76hcu9DsuxsISrhDlqNhfRShog8v6ECRH0/exec";

const api = axios.create({
  baseURL: GOOGLE_SHEETS_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// For backward compatibility with existing code
api.post = (url, data) => {
  // If the endpoint is "/contact", send to Google Sheets
  if (url === "/contact" || url === "contact") {
    return axios.post(GOOGLE_SHEETS_URL, data);
  }
  // For other endpoints, use the regular API
  return axios.post(import.meta.env.VITE_API_URL + url, data);
};

export default api;