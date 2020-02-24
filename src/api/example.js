
import { get, post } from '../util/request'

// 获取字段表信息
export async function exampleGet (params) {
  let headers = {}
  let response = await get('/example/get', params, {
    headers: headers
  })
  return response
}
export async function addExample (params) {
  let headers = {}
  let response = await post('/example/add_Example', params, {
    headers: headers
  })
  return response
}
// 获取字段表信息
export async function findByidExample (params) {
  let headers = {}
  let response = await post('/example/findByid_Example', params, {
    headers: headers
  })
  return response
}
export async function updateByidExample (params) {
  let headers = {}
  let response = await post('/example/updateByid_Example', params, {
    headers: headers
  })
  return response
}

// 获取字段表信息
export async function deleteByidExample (params) {
  let headers = {}
  let response = await post('/example/deleteByid_Example', params, {
    headers: headers
  })
  return response
}
