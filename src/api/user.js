
import { post } from '../util/request'

// 获取字段表信息
export async function setUser (params) {
  let headers = {}
  let response = await post('/user/set', params, {
    headers: headers
  })
  return response
}
export async function getUser (params) {
  let headers = {}
  let response = await post('/user/get', params, {
    headers: headers
  })
  return response
}
// 获取字段表信息
export async function loginUser (params) {
  let headers = {}
  let response = await post('/user/login', params, {
    headers: headers
  })
  return response
}
export async function signUser (params) {
  let headers = {}
  let response = await post('/user/sign', params, {
    headers: headers
  })
  return response
}

// // 获取字段表信息
// export async function deleteByidExample (params) {
//   let headers = {}
//   let response = await post('/example/deleteByid_Example', params, {
//     headers: headers
//   })
//   return response
// }
