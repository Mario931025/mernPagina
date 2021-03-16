import React,{useState} from 'react'
import {MailOutlined,LockOutlined  } from '@ant-design/icons'
import {Form,Input,Button,Checkbox,notification} from 'antd'
import { emailValidation, minLenghtValidation} from '../../../utils/FormValidation'
import {signUpApi} from '../../../api/user'

import "./RegisterForm.scss"

export default function RegisterForm() {

    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        repeatPassword: "",
        privacyPolicy: false
    })


    const [formValid, setformValid] = useState({

        email:false,
        password:false,
        repeatPassword: false,
        privacyPolicy: false
    })
    
    
    
    
    
    const changeForm = e =>{
        
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name] : e.target.checked  //saca el vcalor del cheked
            })
        }else{
            setInputs({
                ...inputs,
                [e.target.name] : e.target.value
            })
        }
    }


const inputValidation = e =>{
 
    const { type, name} = e.target;

    if(type === "email"){
        setformValid({
            ...formValid,
            [name]: emailValidation(e.target)
        })
    }

    if(type === "password"){
        setformValid({
            ...formValid,
            [name]: minLenghtValidation(e.target,6)
        })
    }

    if(type === "checkBox"){
        setformValid({
            ...formValid,
            [name]: e.target.checked
        })
    }


}



    const register = async e =>{
    

    
      

       const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal){
            notification['error']({
                message :"todos los campos son obligatorios. すべてのフィールドを確認してください。"
            })
        }else{
            if(passwordVal !== repeatPasswordVal){
                notification["error"]({
                    message :"Las contraseñas deben de ser iguales, recuerda usar mayúsculas, minúsculas y número"
                })
            }else{
                

                //CONECTA CON API Y REGISTA EL USUARIO

                const result = await signUpApi(inputs)
                

                if(!result.ok){
                    notification["error"]({
                        message: result.message
                    })
                    resetForm();
                }else{
                    notification["success"]({
                        message: result.message
                    })

                    resetForm();
                }

            }
        }


    }



    const resetForm = ()=>{
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs({
            email:"",
            password:"",
            repeatPassword: "",
            privacyPolicy: false
        })

        setformValid({
            
            email:false,
            password:false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }


    return (
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<MailOutlined style={{color:"rgba(0,0,0,.25)"}}/>}
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="register-form__input"
                    onChange={inputValidation}
                    value = {inputs.email}
                />

            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{color:"rgba(0,0,0,.25)"}}/>}
                    type="password"
                    name="password"
                    placeholder="Constraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.password}
                />

            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{color:"rgba(0,0,0,.25)"}}/>}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir constraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />

            </Form.Item>

            <Form.Item>
               <Checkbox name ="privacyPolicy"    onChange={inputValidation}
                 checked={inputs.privacyPolicy}
               >
                   He leido y acepto la politica de privacidad
               </Checkbox>

            </Form.Item>

            <Form.Item>
               <Button htmlType="submit" className="register-form__button">
                   Crear cuenta
               </Button>

            </Form.Item>

        </Form>
    )
}


