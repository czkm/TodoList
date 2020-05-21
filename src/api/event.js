
import { post } from '../util/request'

// 获取字段表信息
export async function setEvent (params) {
  let headers = {}
  let response = await post('/event/set', params, {
    headers: headers
  })
  return response
}
export async function getEvent (params) {
  let headers = {}
  let response = await post('/event/get', params, {
    headers: headers
  })
  return response
}
export async function updataEvent (params) {
  let headers = {}
  let response = await post('/event/update', params, {
    headers: headers
  })
  return response
}

export async function deletedEvent (params) {
  let headers = {}
  let response = await post('/event/deleted', params, {
    headers: headers
  })
  return response
}
// // 获取字段表信息
// export async function findByidExample (params) {
//   let headers = {}
//   let response = await post('/example/findByid_Example', params, {
//     headers: headers
//   })
//   return response
// }
// export async function updateByidExample (params) {
//   let headers = {}
//   let response = await post('/example/updateByid_Example', params, {
//     headers: headers
//   })
//   return response
// }

// // 获取字段表信息
// export async function deleteByidExample (params) {
//   let headers = {}
//   let response = await post('/example/deleteByid_Example', params, {
//     headers: headers
//   })
//   return response
// }
