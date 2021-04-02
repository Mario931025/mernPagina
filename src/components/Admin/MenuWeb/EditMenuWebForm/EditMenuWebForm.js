import React , {useState,useEffect} from "react";
import {Form, Input, Button,notification} from 'antd'
import { updateMenuApi} from '../../../../api/menu'
import {getAccessToken} from '../../../../api/auth'
import {FontColorsOutlined,LinkOutlined}  from '@ant-design/icons'

import "./EditFormWebForm.scss";

export default function EditMenuWebForm(props){ 
    
   
    const {setIsVisible, setReloadMenuWeb, menu} = props;
    const [menuWebData, setMenuWebData] = useState(menu)

    useEffect(() => {
       
        setMenuWebData(menu);

    }, [menu])

    const editMenu = event =>{
        
        if(!menuWebData.title || !menuWebData.url){
            notification["error"]({
                message: "Todos los campos son obligatorios"
            })
        }else{
            const accesToken = getAccessToken();

            updateMenuApi(accesToken,menuWebData._id,menuWebData)
            .then(response =>{
                notification["success"]({
                    message: response
                })
                setIsVisible(false);
                setReloadMenuWeb(true);
            })
            .catch(()=>{
                notification["error"]({
                    message: "Error del servidor, intentelo más tarde"
                })
            })
        }
    }


    return(
         <div className="edit-menu-web-form">
             <EditForm
              menuWebData={menuWebData}
              setMenuWebData={setMenuWebData}
              editMenu={editMenu}
            
             />
         </div>
     )
 }

 function EditForm(props){

      const {menuWebData,setMenuWebData,editMenu} = props;

    return(
        <Form className="form-edit" onFinish={editMenu}>
            <Form.Item>
                <Input
                    prefix={<FontColorsOutlined/>}
                    placeholder="Titulo"
                    value={menuWebData.title}
                    onChange ={e => setMenuWebData({...menuWebData,title:e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="url"
                    value={menuWebData.url}
                    onChange ={e => setMenuWebData({...menuWebData,url:e.target.value})}
                />    
            </Form.Item>
            <Form.Item>
               <Button type="primary" htmlType="submit" className="btn-submit"> 
               Actualizar 
                </Button> 
            </Form.Item>
        </Form>
    )
 }


