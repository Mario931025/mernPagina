import React,{useState,useEffect} from 'react';
import {Switch,List,Avatar,Button,notification,Modal as ModalAntd} from 'antd'
import {EditOutlined,StopOutlined ,DeleteOutlined,CheckOutlined    } from "@ant-design/icons";
import noAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../Modal'
import EditUserForm from "../EditUserForm"
import  AddUserForm from '../addUserForm'
import {getAvatarApi, activateUserApi,deleteUserApi} from '../../../../api/user'
import {getAccessToken} from '../../../../api/auth'


import './ListUsers.scss'


//para el aviso de borrar en la BD
const {confirm} = ModalAntd;

export default function ListUsers(props){

    
   const {usersActive,usersInactive,setRealoadUsers} = props;

  
   const [viewUsersActives, setviewUsersActives] =  useState(true)

   const [isVisibleModal, setIsVisible] = useState(false)
   const [modalTitle, setmodalTitle] = useState("");
   const [modalContent, setmodalContent] = useState(null)


   const addUserModal = () =>{

        setIsVisible(true);
        setmodalTitle("Creando nuevo usuario");
        setmodalContent(
            <AddUserForm
                setIsVisible={setIsVisible}
                setRealoadUsers={setRealoadUsers}
            />
        )
   }

    return (
        <div className="list-users">

            <div className="list-users__header">

            <div className="list-users__header-switch">
                <Switch
                    defaultChecked
                    onChange={()=> setviewUsersActives(!viewUsersActives) }
                />
                <span>
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>

            <Button type="primary" onClick={addUserModal}>
                Nuevo usuario
            </Button>

            </div>

          
            {viewUsersActives ? 
            <UsersActive usersActive={usersActive} 
            setIsVisible={setIsVisible} 
            setmodalTitle={setmodalTitle}
            setmodalContent={setmodalContent}
            setRealoadUsers={setRealoadUsers}
            /> : <UsersInactive usersInactive={usersInactive} setRealoadUsers={setRealoadUsers}/>}
        
        <Modal
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisible}
        >
           {modalContent}
        </Modal>
        
        </div>
    )
}


function UsersActive(props){

    const { usersActive,setIsVisible,setmodalTitle,setmodalContent,usersInactive,setRealoadUsers} = props;


    const editUser = user =>{
        //usa la info de cada usuario 
        setIsVisible(true)
        setmodalTitle(`Editar ${user.name} ${user.lastname}`);
        setmodalContent(<EditUserForm user={user } setIsVisible={setIsVisible } setRealoadUsers={setRealoadUsers}/>)
    }

    return (
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => <UserActive user={user} editUser={editUser} setRealoadUsers={setRealoadUsers} /> }
        />
    )
}



function UserActive(props){
    const {user,editUser,setRealoadUsers} = props;
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        
        if(user.avatar){

            getAvatarApi(user.avatar).then(response =>{
                setAvatar(response)
            })
        }else{
            setAvatar(null)
        }

       
    }, [user])


    const desactiveUser = () => {

        const accessToken = getAccessToken();

        activateUserApi(accessToken,user._id,false)
        .then(response=>{
            notification["success"]({
                message:response
            })

            setRealoadUsers(true)
        })
        .catch(err =>{
            notification["error"] ({
                message: err
            })
        })
    }


    const showDeleteConfirm = () =>{
        const accessToken = getAccessToken();

        confirm({
            title: "Eliminando usuario de la Base de Datos",
            content: `¿Estas seguro de eliminar a ${user.email}?`,
            okText:"Eliminar",
            okType:"danger",
            cancelText:"Cancelar",
            onOk(){
                deleteUserApi(accessToken,user._id)
                .then(response =>{
                    notification["success"]({
                        message:response
                    })
                    setRealoadUsers(true);
                })
                .catch(err=>{
                    notification["error"]({
                        message:err
                    })
                })
            }
        })
    };



    return (
        <List.Item
        actions={[
            <Button
                type="primary"
                onClick={()=> editUser(user)}
            >
            <EditOutlined />

            </Button>,

            <Button
                type="danger"
                onClick={desactiveUser}
            >
            <StopOutlined />

            </Button>,
           

            <Button
                type="danger"
                onClick={showDeleteConfirm}
            >
            <DeleteOutlined />

            </Button>,




            
        ]}
    >
        <List.Item.Meta 
            avatar={<Avatar src={avatar ? avatar : noAvatar} />}
            title={`
                ${user.name? user.name : "..."}
                ${user.lastname ? user.lastname : "..."}
            `}
            description={user.email}
        />
    </List.Item>

    )
}

function UserInactive(props){

    const {user,setRealoadUsers} = props;
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        
        if(user.avatar){

            getAvatarApi(user.avatar).then(response =>{
                setAvatar(response)
            })
        }else{
            setAvatar(null)
        }

       
    }, [user])

    
    const activeUser = () => {

        const accessToken = getAccessToken();

        activateUserApi(accessToken,user._id,true)
        .then(response=>{
            notification["success"]({
                message:response
            })

            setRealoadUsers(true)
        })
        .catch(err =>{
            notification["error"] ({
                message: err
            })
        })
    }


    
    const showDeleteConfirm = () =>{
        const accessToken = getAccessToken();

        confirm({
            title: "Eliminando usuario de la Base de Datos",
            content: `¿Estas seguro de eliminar a ${user.email}?`,
            okText:"Eliminar",
            okType:"danger",
            cancelText:"Cancelar",
            onOk(){
                deleteUserApi(accessToken,user._id)
                .then(response =>{
                    notification["success"]({
                        message:response
                    })
                    setRealoadUsers(true);
                })
                .catch(err=>{
                    notification["error"]({
                        message:err
                    })
                })
            }
        })
    };


    return(
        <List.Item
        actions={[
            <Button
                type="primary"
                onClick={activeUser}
            >
           <CheckOutlined />

            </Button>,

           
           

            <Button
                type="danger"
                onClick={showDeleteConfirm}
            >
            <DeleteOutlined />

            </Button>,




            
        ]}
    >
        <List.Item.Meta 
            avatar={<Avatar src={avatar ? avatar : noAvatar} />}
            title={`
                ${user.name? user.name : "..."}
                ${user.lastname ? user.lastname : "..."}
            `}
            description={user.email}
        />
    </List.Item>
    )
}





function UsersInactive(props){

    const {usersInactive,setRealoadUsers} = props;
   
  

   return (
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => <UserInactive user={user} setRealoadUsers={setRealoadUsers}/>}
        />
    )
}
