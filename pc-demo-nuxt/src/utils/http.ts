import {hash} from 'ohash'

/*
*api封装
@param { string ] url 清求地址
{ Object ] options useFtech第二个参敬@param
@param { object } headers 自定义header头，单独设置headers区分清求参数，也好置类里

*/
const BAS_EURL = 'http://api-dashboard.yudao.iocoder.cn'
const fetch = (url: string, options?: any, headers?: any, baseURL?:string): Promise<any> =>{
  const reqUrl = (baseURL ?? BAS_EURL) + url // 你的族口地丛
  const key = hash(JSON.stringify(options) + url) // 参数一样进行二次请求
  console.log(key)
  return  new Promise((resolve, reject) =>{
    console.log(reqUrl)
    useFetch(reqUrl,{...options,key,
      onRequest({ request, options }) {
        // 设置请求报头
        options.headers = {
          ...options.headers,
          token: useCookie( 'token').value,
          ...headers
        } || {}

        console.log('onRequest', request, options)

        /** 如果接口需求携带token请求，则可先自行使用官方的useCookie()方法设置Cookie存储后，再使用useCookie()方法，取出token使用。如下例子：*/
        // const token = useCookie('token')
        //  //@ts-ignore
        // options.headers.Authorization = token.value||null
      },
      onRequestError({ request, options, error }) {
        console.log('onRequestError', request, options, error)
        // 处理请求错误
        console.log('服务器链接失败!')
        reject(error)
      },
      onResponse({ request, response, options }) {
        console.log('onResponse',request, response, options)
        // 处理响应数据
        resolve(response._data)
      },
      onResponseError({ request, response, options }) {
        console.log('onResponseError',request, response, options)
        // 处理响应错误
      }})



    /*  useFetch(reqUrl,{...options,key, headers: customHeaders}).then(({data,error})=>{
      console.log('获取数据', data, error)
      if(error.value) {
        return reject(error.value)
      }
      if(!data?.value) {
        throw createError({
          statusCode: 509,
          statusMessage:reqUrl,
          message:'自己后端接口的报错信息'
        })
      }else{
        resolve(data.value)
      }

    }).catch((err: any)=>{
      reject(err)
    })*/

  })
}

interface HttpParms {
  url: string,      // 请求api接口地址
  data?: any,         // 请求体
  headers?: any,       // 添加查询搜索参数到URL
  baseURL?: string,  // 请求的基本URL，即后台服务器地址，（若服务器请求地址只有一个，可不填）
}


export default class Http {

  get(opt: HttpParms): Promise<any> {
    return fetch(opt.url, {method: 'get', params: opt.data}, opt.headers,opt.baseURL)
  }

  post(opt: HttpParms): Promise<any> {
    return fetch(opt.url, {method: 'post', params: opt.data}, opt.headers,opt.baseURL)
  }

  put(opt: HttpParms): Promise<any> {
    return fetch(opt.url, {method: 'put', params: opt.data}, opt.headers,opt.baseURL)

  }

  delete(opt: HttpParms): Promise<any> {
    return fetch(opt.url, {method: 'delete', params: opt.data}, opt.headers,opt.baseURL)
  }
}
