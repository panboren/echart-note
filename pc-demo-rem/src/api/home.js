import Http from './http'

/*
*  获取自动 select
* */
export const textSelect = () => {
  return Http.get('/text-select')
}

/*

export const getSupportEnterpriseList = (data) => {
  return Http.post('/fg-support-enterprise/getSupportEnterpriseList', data)
}

/!*

发改局-产业扶持政策复制接口复制文档复制地址
GET
*!/

export const getSupportList = () => {
  return Http.get('/fg-support/getSupportList')
}
*/
