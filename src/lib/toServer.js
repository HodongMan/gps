import axios from 'axios';

const kUrl = "http://localhost:8000";

export function getBlurBlur(){
  return axios.get(`${kUrl}/api/map`);
}

/*
getBlurBlur()
.then((response) => this.setState({data : response.data}))
.catch((error) => console.log(error));

*/
