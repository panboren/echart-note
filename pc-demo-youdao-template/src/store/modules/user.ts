import { store } from '../index'
import { defineStore } from 'pinia'
import { getAccessToken, removeToken } from '@/utils/auth'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'
import { getInfo, loginOut } from '@/api/login'

const { wsCache } = useCache()

interface UserVO {
  id: number
  avatar: string
  nickname: string
}
interface UserInfoVO {
  permissions: string[]
  roles: string[]
  isSetUser: boolean
  user: UserVO
}

export const useUserStore = defineStore('admin-user', {
  state: (): UserInfoVO => ({
    permissions: [],
    roles: [],
    isSetUser: false,
    user: {
      id: 0,
      avatar: '',
      nickname: ''
    }
  }),
  getters: {
    getPermissions(): string[] {
      return this.permissions
    },
    getRoles(): string[] {
      return this.roles
    },
    getIsSetUser(): boolean {
      return this.isSetUser
    },
    getUser(): UserVO {
      return this.user
    }
  },
  actions: {
    async setUserInfoAction() {
      if (!getAccessToken()) {
        this.resetState()
        return null
      }
      // let userInfo = wsCache.get(CACHE_KEY.USER)
      // if (!userInfo) {
      //   userInfo = await getInfo()
      // }

     const  userInfo = {
        "user": {
          "id": 1,
          "nickname": "芋道源码",
          "avatar": "http://127.0.0.1:48080/admin-api/infra/file/4/get/37e56010ecbee472cdd821ac4b608e151e62a74d9633f15d085aee026eedeb60.png"
        },
        "roles": [
          "common",
          "super_admin"
        ],
        "permissions": [
          "",
          "system:sms-template:update",
          "system:error-code:export",
          "system:menu:query",
          "infra:file-config:query",
          "system:permission:assign-role-menu",
          "system:user:query",
          "system:error-code:query",
          "system:sms-template:send-sms",
          "infra:file-config:create",
          "system:user:export",
          "system:dept:update",
          "system:dept:delete",
          "system:tenant:update",
          "infra:api-access-log:export",
          "system:error-code:create",
          "system:tenant-package:update",
          "system:dept:query",
          "infra:file-config:export",
          "system:sms-template:delete",
          "system:tenant-package:delete",
          "system:role:delete",
          "system:dept:create",
          "infra:file-config:delete",
          "system:menu:create",
          "system:tenant:query",
          "system:dict:create",
          "system:dict:query",
          "infra:api-access-log:query",
          "infra:api-error-log:query",
          "system:dict:update",
          "infra:file:query",
          "system:user:update-password",
          "system:sms-log:query",
          "system:dict:export",
          "system:post:query",
          "system:tenant:export",
          "system:post:update",
          "system:sms-channel:create",
          "infra:api-error-log:update-status",
          "system:post:create",
          "system:tenant:create",
          "system:user:delete",
          "system:sms-template:export",
          "system:user:import",
          "system:error-code:update",
          "system:post:export",
          "infra:file:delete",
          "system:user:update",
          "system:menu:delete",
          "system:sms-template:create",
          "system:sms-channel:update",
          "system:sms-template:query",
          "system:sms-channel:query",
          "system:error-code:delete",
          "system:menu:update",
          "system:login-log:query",
          "system:permission:assign-role-data-scope",
          "system:role:update",
          "system:tenant-package:create",
          "system:user:list",
          "system:login-log:export",
          "system:user:create",
          "system:operate-log:query",
          "system:sms-log:export",
          "system:role:export",
          "infra:file-config:update",
          "system:permission:assign-user-role",
          "system:post:delete",
          "system:sms-channel:delete",
          "system:tenant:delete",
          "system:tenant-package:query",
          "system:role:create",
          "system:dict:delete",
          "system:operate-log:export",
          "system:role:query",
          "infra:api-error-log:export"
        ],
        "menus": [
          {
            "id": 1,
            "parentId": 0,
            "name": "系统管理",
            "path": "/system",
            "component": null,
            "componentName": null,
            "icon": "system",
            "visible": true,
            "keepAlive": true,
            "alwaysShow": true,
            "children": [
              {
                "id": 1224,
                "parentId": 1,
                "name": "租户管理",
                "path": "tenant",
                "component": null,
                "componentName": null,
                "icon": "peoples",
                "visible": true,
                "keepAlive": true,
                "alwaysShow": true,
                "children": [
                  {
                    "id": 1138,
                    "parentId": 1224,
                    "name": "租户列表",
                    "path": "list",
                    "component": "system/tenant/index",
                    "componentName": "SystemTenant",
                    "icon": "peoples",
                    "visible": true,
                    "keepAlive": true,
                    "alwaysShow": true,
                    "children": null
                  },
                  {
                    "id": 1225,
                    "parentId": 1224,
                    "name": "租户套餐",
                    "path": "package",
                    "component": "system/tenantPackage/index",
                    "componentName": "SystemTenantPackage",
                    "icon": "eye",
                    "visible": true,
                    "keepAlive": true,
                    "alwaysShow": true,
                    "children": null
                  }
                ]
              },
              {
                "id": 100,
                "parentId": 1,
                "name": "用户管理",
                "path": "user",
                "component": "system/user/index",
                "componentName": "SystemUser",
                "icon": "user",
                "visible": true,
                "keepAlive": true,
                "alwaysShow": true,
                "children": null
              }
            ]
          }
        ]
      }



      this.permissions = userInfo.permissions
      this.roles = userInfo.roles
      this.user = userInfo.user
      this.isSetUser = true
      wsCache.set(CACHE_KEY.USER, userInfo)
      wsCache.set(CACHE_KEY.ROLE_ROUTERS, userInfo.menus)
    },
    async loginOut() {
      await loginOut()
      removeToken()
      wsCache.clear()
      this.resetState()
    },
    resetState() {
      this.permissions = []
      this.roles = []
      this.isSetUser = false
      this.user = {
        id: 0,
        avatar: '',
        nickname: ''
      }
    }
  }
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
