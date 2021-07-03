import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 404 &&
    error.response.status < 500

  // Unexpected errors
  if (!expectedError) {
    console.log('Logging the error', error)
    toast.error('An unexpected error occurred.')
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
