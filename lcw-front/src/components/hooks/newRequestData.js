
import axios from "axios";

const newRequestData = (url,body) => {
   let data = "";
    let urlLink = url

const headers = {
    'headers': {
        'Content-Type': 'application/json'
    }
}

        axios
            .post(urlLink,body,headers)
            .then((response) => {
console.log("res",response.data)
                data=response.data;
                
                console.log("response", response.data)
            })
            .catch((error) => {
                console.log("erro newRequest:", error)
            });

    return data;

}

export default newRequestData