import { post } from '../../api/axios/http'
export const UploadImg = param => post('/upload', param)