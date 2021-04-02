import React,{useState,useCallback,useEffect} from 'react';
import {Avatar, Form, input,Select,Button,Row,Col, Input, notification} from 'antd'
import {useDropzone} from 'react-dropzone'
import {  UserOutlined,MailOutlined ,LockOutlined  } from "@ant-design/icons";
import NoAvatar from '../../../../assets/img/png/no-avatar.png'
import {getAvatarApi,uploadAvatarApi,updateUserApi} from '../../../../api/user'
import {getAccessToken} from '../../../../api/auth'


import "./EditUserForm.scss";


export default function EditUserForm(props){
    const {user,setIsVisible,setRealoadUsers} = props;
    const [avatar, setAvatar] = useState(null);
//se guarda la info del usuario



const [userData, setUserData] = useState({})

//actualiza usuario completo ***

useEffect(() => {
   setUserData({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    avatar: user.avatar
   })
}, [user])


//use para el avatar  ***
useEffect(() => {
    if(user.avatar){
        getAvatarApi(user.avatar).then(response =>{
            setAvatar(response)
        })
    }else{
        setAvatar(null)
    }

}, [user])




//cambia el avatar del form

useEffect(() => {
    if(avatar){
        setUserData({...userData, avatar: avatar.file}) //** */
    }
}, [avatar])


const updateUser = e =>{
    
    const token = getAccessToken();
    //todos los datos del usuario
    let userUpdate = userData;
    //caambio a let por que cambia

    if(userUpdate.password || userUpdate.repeatPassword){
        if(userUpdate.password !== userUpdate.repeatPassword){
            notification["error"] ({
                message : "Las contraseñas tienen que ser iguales"
            })
            return;
        }else{
            //no nos llega el campo de repetir desde el formulario
            delete userUpdate.repeatPassword
        }
       
    }




    if(!userUpdate.name || !userUpdate.lastname || !userUpdate.email){
        notification["error"]({
            message: "El nombre, apellidos y email son obligatorios"
        })
        return;
    }

    if(typeof userUpdate.avatar ==="object"){
        uploadAvatarApi(token,userUpdate.avatar,user._id).then(
            response => {
                userUpdate.avatar = response.avatarName;
                updateUserApi(token,userUpdate,user._id).then(result =>{
                    notification["success"]({
                        message : result.message
                    });

                    setIsVisible(false)
                    setRealoadUsers(true)
                    
                })
            }
        )
    }else{
        updateUserApi(token,userUpdate,user._id).then(result =>{
            notification["success"]({
                message : result.message
            });
            setIsVisible(false)
            setRealoadUsers(true)
        })
    }

}


    return (
        <div className="edit-user-form">
            <UploadAvatar avatar={avatar} setAvatar={setAvatar}/>
           <EditForm  userData={userData} setUserData={setUserData} updateUser={updateUser}/>
        </div>
    )
}

//documentacion del componente 
function UploadAvatar(props){
    const {avatar, setAvatar} = props;
    const [avatarUrl,setAvatarUrl] = useState(null)
    //////*/*/*/*/*/

    useEffect(() => {
        
        if(avatar){
            if(avatar.preview){
                setAvatarUrl(avatar.preview)
            }else{
                setAvatarUrl(avatar)
            }
        }else{
            setAvatarUrl(null)
        }
    }, [avatar])


    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({file,preview: URL.createObjectURL(file)})
        },
        [setAvatar]
    );

    const {getRootProps,getInputProps,isDragActive} = useDropzone({
        accept : "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    })

    return(
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive ? ( <Avatar size={150} src={NoAvatar}/>)
            : (<Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar}/>)}
        </div>
    )


}


function EditForm(props){

   const {Option} = Select;

    const {userData, setUserData, updateUser} = props;

    return(
        <Form className="form-edit" onFinish={updateUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={ <UserOutlined />}
                            placeholder="Nombre"
                            value={userData.name}
                            onChange={e => setUserData({...userData, name: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item>
                        <Input 
                            prefix={ <UserOutlined />}
                            placeholder="Apellido"
                            value={userData.lastname}
                            onChange={e => setUserData({...userData, lastname: e.target.value})}
                        />
                    </Form.Item>
                </Col>

            </Row>


            <Row gutter={24}>
                <Col span={12}>
                <Form.Item>
                <Input 
                            prefix={ <MailOutlined />}
                            placeholder="Email"
                            value={userData.email}
                            onChange={e => setUserData({...userData, email: e.target.value})}
                        />
                 </Form.Item>
                </Col>
               
                <Col span={12}>
                <Form.Item>
                    <Select 
                        placeholder="Selecciona un rol"
                        onChange={e => setUserData({...userData, role: e})}
                        value={userData.role}>
                        
                        <Option value="admin">Administrador</Option>
                        <Option value="editor">Editor</Option>
                        <Option value="reviewr">Revisor</Option>    

                    </Select>
                    </Form.Item>
                </Col>

            </Row>


            <Row gutter={24}>
            <Col span={12}>
                <Form.Item>
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Contraseña"
                        onChange={e => 
                            setUserData({...userData,password: e.target.value})
                        }
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item>
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Repetir contraseña"
                        onChange={e => 
                            setUserData({...userData,repeatPassword: e.target.value})
                        }
                    />
                </Form.Item>
            </Col>
                   

            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualiza usuario 
                </Button>
            </Form.Item>
        </Form>
    )
}