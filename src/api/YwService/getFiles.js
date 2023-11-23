import request from '@/utils/request'

export const getFiles = (files, projectId) => {
  return request.post('/upload/files', {
    files,
    projectId
  })
}