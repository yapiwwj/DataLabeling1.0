// 用于所有尝试的axios请求
import request from '@/utils/request'

export const backTag = (projectName, tagValue) => {
  return request.post('/textProject/getTextTag', {
    projectName,
    tagValue
  })
}