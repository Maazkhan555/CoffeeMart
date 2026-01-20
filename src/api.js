import axios from "axios";


const BaseUrl=axios({

baseURL:'http://localhost:7000',
withCredentials:true
})


export default BaseUrl;