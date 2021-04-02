import React,{useState,useEffect} from 'react'
import { Switch,List,Button,Modal as ModalAntd, notification,} from 'antd'
import Modal from '../../../Modal';
import DragSortableList from 'react-drag-sortable'
import {  EditOutlined ,DeleteOutlined  } from "@ant-design/icons";
import {updateMenuApi,activateMenuApi,deleteMenuApi} from '../../../../api/menu'
import {getAccessToken} from '../../../../api/auth'
import AddMenuWebForm from '../AddMenuWebForm'
import EditMenuWebForm from '../EditMenuWebForm'

import './MenuWebList.scss';

const { confirm} = ModalAntd;


export default function MenuWebList(props){
    const {menu, setReloadMenuWeb} = props

    //estado del nuevo estado del menu
    const [listItems, setListItems] = useState([])
    const [isVisibleModal, setIsVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null);

    //el array para la lista para componente drag

    

    useEffect(() => {
        const listItemsArray = [];

        menu.forEach(item => {
                listItemsArray.push({
                    content: <MenuItem 
                    item={item} 
                    activateMenu={activateMenu } 
                    editMenuWebModal={editMenuWebModal}
                    deleteMenu={deleteMenu}
                    />
                })
        });

        setListItems(listItemsArray)
    }, [menu])



    //función que activa y desactiva el menu

    const activateMenu = (menu, status) => {
        const accesToken = getAccessToken();

        activateMenuApi(accesToken, menu._id,status).then(response =>{
            notification["success"]({
                message: response
            })
        })
    }





    //funcion que da el acomodo de cada item
    const onSort = (sortedList,dropEvent) =>{
const accesToken = getAccessToken();


    sortedList.forEach(item =>{
        const { _id} = item.content.props.item;
        const order = item.rank;
        updateMenuApi(accesToken,_id,{order})
    })
     
    }



    //función del modal para los botones

    const addMenuWebModal = () =>{
        setIsVisible(true);
        setModalTitle("Creando nuevo Menu");
        setModalContent(
            <AddMenuWebForm
                setIsVisible={setIsVisible}
                setReloadMenuWeb={setReloadMenuWeb}
            />
        )
    }


    const deleteMenu = menu => {
        const accesToken = getAccessToken();

        confirm({
            title:"Eliminando menu",
            content: `¿Estas seguro de que quieres eliminar el menu ${menu.title}`,
            okText: "Eliminar",
            okType:"danger",
            cancelText: "Cancelar",
            onOk(){
                deleteMenuApi(accesToken,menu._id)
                .then(response => {
                    notification["success"]({
                        message: response
                    })
                    setReloadMenuWeb(true)
                })
                .catch(() => {
                    notification["error"]({
                        message: "Error del servidor, intentelo más tarde."
                    })
                })
            }
        })


    }



    //funcion para editar el form
    const editMenuWebModal = menu =>{
        setIsVisible(true);
        setModalTitle(`Editanto menu: ${menu.title}`);
        setModalContent(
            <EditMenuWebForm
                setIsVisible={setIsVisible}
                setReloadMenuWeb={setReloadMenuWeb}
                menu={menu}
            />
        )
    }



    return(
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary" onClick={addMenuWebModal}>Crear Menu</Button>
            </div>

            <div className="menu-web-list__items">
                <DragSortableList items={listItems} onSort={onSort} type="vertical"/>
            </div>

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


function MenuItem(props){
const {item,activateMenu,editMenuWebModal,deleteMenu} = props;

return(
    
    <List.Item 
        actions={[
            <Switch defaultChecked={item.active} 
                onChange={e => activateMenu(item,e)} />,
            <Button type="primary" onClick={()=> editMenuWebModal(item)}>
                <EditOutlined />
            </Button>,
            <Button type="danger" onClick={()=> deleteMenu(item) }>
                <DeleteOutlined />
            </Button>
            
        ]}
    >
        <List.Item.Meta title={item.title} description={item.url}/>
    </List.Item>

) 
}