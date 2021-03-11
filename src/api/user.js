import {basePath, apiVersion} from './config'

export function signUpApi(data){
    const url = `${basePath}/${apiVersion}/sign-up`;
    const params = {
        method : "POST",
        body : JSON.stringify(data),
        Headers:{
            "Content-type" : "application/json"
        }
    }



    fetch(url,params).then(response=>{
       console.log(response)
    })
}