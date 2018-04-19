import {axiosPost} from './config'

export const postSample = (data1, data2, data3) => {
  console.log(data1, data2, data3, '데이터모음')
  return axiosPost('/api/contents/sample', {
    data1: data1,
    data2: data2,
    data3: data3
  })
}
