import Http from '~/utils/http'

export default new class Home extends Http {
  getTenantIdByName = (name: string) => {
    // return this.get(`/admin-api/system/tenant/get-id-by-name?name=${name}` )
    return this.get({url:'/admin-api/system/tenant/get-id-by-name', data: {name: name}} )
  }
}
