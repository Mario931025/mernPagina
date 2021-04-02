import React, {useState} from "react";
import {
    Form,
    Input,
    Select,
    Button,
    Row,
    Col,
    notification

} from'antd';
import { signUpAdminApi} from '../../../../api/user';
import { getAccessToken} from '../../../../api/auth'
import {  UserOutlined,MailOutlined ,LockOutlined,UserAddOutlined } from "@ant-design/icons";


import "./AddUserForm.scss";


export default function EditUserForm(props){

    const {setIsVisible,setRealoadUsers} = props;
    const [userData,setUserData] = useState({});

    const addUser = e =>{
        
        if(
            !userData.name ||
            !userData.lastname ||
            !userData.role ||
            !userData.email ||
            !userData.password ||
            !userData.repeatPassword
        ){
            notification["error"]({
                message : "Todos los campos son olbigatorios"
            })
        }else if (userData.password !== userData.repeatPassword){
            notification["error"]({
                message : "Las contraseñas tienen que ser iguales"
            })
        }else{

            const AccessToken = getAccessToken();

            signUpAdminApi(AccessToken, userData)
                .then(response => {
                    notification["success"]({
                        message : response
                    })

                    setIsVisible(false);
                    setRealoadUsers(true);
                    setUserData({});
                })
                .catch(err =>{
                    notification["error"]({
                        message: err
                    })
                })
        }


    }

    return(
        <div className="add-user-form">
            <AddForm
                userData={userData}
                setUserData={setUserData}
                addUser={addUser}
            />
        </div>
    )
}


function AddForm(props){
    const { userData, setUserData,addUser} = props
    const {Option} = Select;

    return(
        <Form className="form-add" onFinish={addUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={ <UserAddOutlined />}
                            placeholder="Nombre"
                            value={userData.name}
                            onChange={e => setUserData({...userData,name:e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserAddOutlined />}
                            placeholder="Apellido"
                            value={userData.lastname}
                            onChange={e => setUserData({...userData,lastname:e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={< MailOutlined/>}
                            placeholder="Correo"
                            value={userData.email}
                            onChange={e => setUserData({...userData,email:e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Selecciona un rol"
                            onChange={e => setUserData({...setUserData,role: e})}
                            value={userData.role}
                        >
                            <Option value="admin">Administrador</Option>
                            <Option value="editor">Editor</Option>
                            <Option value="reviwer">Revisor</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>


            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={ <LockOutlined/>}
                            type="password"
                            placeholder="Contraseña"
                            value={userData.password}
                            onChange={e => setUserData({...userData,password:e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item>
                        <Input
                            prefix={ <LockOutlined/>}
                            type="password"
                            placeholder="Repetir Contraseña"
                            value={userData.repeatPassword}
                            onChange={e => setUserData({...userData,repeatPassword:e.target.value})}
                        />
                    </Form.Item>
                  
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Crear Usuario
                </Button>
            </Form.Item>

        </Form>
    )

}