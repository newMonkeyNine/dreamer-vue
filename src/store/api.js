/**
 * Created by liuhaolei on 2018/09/14
 */
import axios from 'axios';

// 使用代理
// const HOST =process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8000/';
// const HOST = 'https://node-douban-api.herokuapp.com'
//拼接基本数据
axios.defaults.baseURL = "http://47.104.174.247:7001/"

axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";



//新的用户登陆
export const accountLogin = params=>{
  return axios.post('user/login.api',params)
}

//新的用户注册
export const registUser = params=>{
  return axios.post('user/regist.api',params)
}

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon',
  }
};


export function fetch(url) {

  return new Promise((resolve, reject)=> {
    axios.get("https://node-douban-api.herokuapp.com" + url)
        .then(response => {
          resolve(response.data);
        })
  })
}

export function fetchItemByType(type) {
  return fetch(`${type}`);
}


export function fetchMoviesByType(type, start = 0, count = 20) {
  return fetchItemByType(`/movie/${type}?start=${start}&count=${count}`)
}

export function fetchMovieById(id) {
  return fetch(`/movie/subject/${id}`);
}

export function fetchSearchMovies(query, start = 0) {
  let url = encodeURI(`/movie/search?q=${query}&start=${start}`);
  return fetch(url);
}