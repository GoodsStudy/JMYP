import { post } from '../../api/axios/http'
export const Login = param => post('/login', param)