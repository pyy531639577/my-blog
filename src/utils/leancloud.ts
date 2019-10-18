import * as AV from 'leancloud-storage'
import config from '@/config/index'

AV.init({
  appId: config.leancloud.appId,
  appKey: config.leancloud.appKey
})

export default AV
