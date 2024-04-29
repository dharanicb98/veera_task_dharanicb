import axios from 'axios';


const baseUrl = process.env.baseUrl || 'http://localhost:5000/api/v1'


export const getAllUsers = async ( payload ) => {
    try {
      const response = await axios.get(baseUrl + `/users/?column_name=${payload?.column_name}&column_value=${payload?.column_value}`)
      return response.data
    }
    catch (e) {
      throw new Error(e?.response?.data?.error)
    }
}