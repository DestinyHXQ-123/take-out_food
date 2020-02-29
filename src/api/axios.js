// 封装所有请求接口文件,方便后期维护
import axios from 'axios'

let req = axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
})

//请求商家信息
export function getSeller(){
    return req.get('/api/seller')
}

//请求商品类别
export function Commodity(){
    return req.get('/api/goods')
}

// 请求评价
export function getevaluate(){
    return req.get('/api/ratings')
}

