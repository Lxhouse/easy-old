let baseURL = 'http://localhost:9020'
export const $http=function(url,data={},method='GET'){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL+url,
			method,
			data,
			success:(res)=> {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}