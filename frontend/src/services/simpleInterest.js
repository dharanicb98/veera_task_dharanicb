import axios from 'axios';


const baseUrl = process.env.baseUrl || 'http://localhost:5000/api/v1'


export const calculateSimpleInterest = async ( payload ) => {
    try {
      const response = await axios.post(baseUrl + '/simple-interest', payload)
      return response.data
    }
    catch (e) {
      throw new Error(e?.response?.data?.error)
    }
}