import Axios from 'axios'

const BASE_URL =
	process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

const axios = Axios.create({
	withCredentials: true
})

export const httpService = {
	get(endpoint, data) {
		console.log(endpoint)
		return ajax(endpoint, 'GET', data)
	},
	post(endpoint, data) {
		return ajax(endpoint, 'POST', data)
	},
	put(endpoint, data) {
		return ajax(endpoint, 'PUT', data)
	},
	delete(endpoint, data) {
		return ajax(endpoint, 'DELETE', data)
	}
}

async function ajax(endpoint, method = 'GET', data = null) {
	try {	
		console.log(endpoint)
		const res = await axios({
			url: `${BASE_URL}${endpoint}`,
			method,
			data,
			params: method === 'GET' ? data : null
		})
		return res.data
	} catch (err) {
		console.dir(err)
		if (err.response && err.response.status === 401) {
			// Depends on routing startegy - hash or history
			window.location.assign('/#/login')
			// window.location.assign('/login')
			// router.push('/login')
		}
		throw err
	}
}
