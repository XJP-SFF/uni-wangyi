import { ownServer, wangyiServer } from './config.js'
export function request(url, data, method='GET'){
	return new Promise((resolve, reject) => {
		uni.request({
			url: ownServer.host + ownServer.basePath + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (error) => {
				reject(error);
			}
		})
	})
}

export function wangyiRequest(url,method='GET',data){
	return new Promise((resolve, reject) => {
		uni.request({
			url: wangyiServer.host + wangyiServer.basePath + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
				// console.log(res.data)
			},
			fail: (error) => {
				reject(error);
			}
		})
	})
}

