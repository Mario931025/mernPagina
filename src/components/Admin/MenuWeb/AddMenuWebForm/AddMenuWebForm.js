import React,{useState} from 'react';
import {Form,Input,Button,Select, notification} from 'antd';
import {FontColorsOutlined}  from '@ant-design/icons'
import {addMenuApi} from '../../../../api/menu';
import {getAccessToken} from '../../../../api/auth'

import "./AddMenuWebForm.scss";

export default function AddMenuWebForm(props){
    console.log(props)
   
    

    const {setIsVisibleModal, setReloadMenuWeb} = props;
    const [menuWebData, setmenuWebData] = useState({})


    const addMenu = () =>{
        
     
       
        let finalData = {
            title: menuWebData.title,
            url: (menuWebData.http ? menuWebData.http : "http://")+menuWebData.url
        }

        if(!finalData.title || !finalData.url || !menuWebData.url ){
            notification["error"]({
                message: "Todos los campos son obligatorios"
            })
        }else{
            const accessToken = getAccessToken();
            finalData.active = false; //por defecto
            finalData.order = 1000; //grande por que se ira hasta abajo
        
            addMenuApi(accessToken,finalData)
                .then(response => {
                    notification["success"]({
                        message: response
                    })

                    setIsVisibleModal(false);
                    setReloadMenuWeb(true);
                    setmenuWebData({})
                    finalData = {};
                })
                .catch(() => {
                    notification["error"]({
                        message: "Error en el servidor"
                    })
                })
        
        }



    }

    return(
        <div className="add-menu-web-form">
            <AddForm
                menuWebData={menuWebData}
                setmenuWebData={setmenuWebData}
                addMenu={addMenu}
            />
        </div>
    )
}


function AddForm(props) {
    const {menuWebData,setmenuWebData,addMenu} = props;

    //de antd
    const {Option } = Select;

    const selectBefore = (

        <Select
            defaultValue="http://"
            style={{width:90}}
            onChange={e => setmenuWebData({...menuWebData,http: e})}
        >
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    )
    

    

    return(
        <Form className="form-add" onFinish={addMenu}>
            <Form.Item>
                <Input
                    prefix={<FontColorsOutlined />}
                    placeholder="Titulo"
                    value={menuWebData.title}
                    onChange={e => setmenuWebData({...menuWebData, title: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    addonBefore={selectBefore}
                    placeholder="URL"
                    value={menuWebData.url}
                    onChange={e => setmenuWebData({...menuWebData, url: e.target.value})}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                Crear Menu
                </Button>
            </Form.Item>
        </Form>
    )
}