import axios from 'axios';

const BASE_URL = 'https://glacial-gorge-77575.herokuapp.com';

export function getProducts(date,length,provider,page,next,child) {
	console.log(date+' '+length+' '+provider+' '+page+' '+next+' '+child)
	return axios.get(`${BASE_URL}/api/products?date=${date}&length=${length}&provider=${provider}&page=${page}&next=${next}&child=${child}`)
		.then(response => response.data);
}
