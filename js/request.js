const req = (method) => {
    return (url, config = {}) => {
        return axios({
            baseURL: 'http://draw.a10086a.com',
            method,
            url,
            ...config
        }).then(res => {
            const { data } = res
            if (data.code === 200) {
                return { res: data.data || data }
            } else {
                return { err: res }
            }
        }, err => ({ err }))
    }
}

window.GET = req('get')
window.POST = req('post')