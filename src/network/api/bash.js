import {request} from "network/request";
export function selectPoint(page_number,item_number,search) {
    return request({
      url: '/selectPoint?page_number='+page_number+'&item_number='+item_number+'&search='+search,
      method: 'get'
    //   headers: {'Content-Type': 'multipart/form-data'}
  
    })
  }
//登录请求
export function login(username,password) {
    return request({
      url: '/login',
      method: 'post',
      data: {
          username: username,
          password: password
      }
  
    })
  }
  //下车请求
export function downCart(student_id) {
    return request({
      url: '/downCart',
      method: 'post',
      data: {
        student_id:student_id
      }
  
    })
  }
    //上车请求
export function upCart(student_id,location) {
    return request({
      url: '/upCart',
      method: 'post',
      data: {
        student_id:student_id,
        location:location
      }
  
    })
  }