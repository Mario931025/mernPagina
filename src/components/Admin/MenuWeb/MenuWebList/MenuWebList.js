import React,{useState,useEffect} from 'react'
import { Switch,List,Button,Modal as ModalAntd,} from 'antd'
import Modal from '../../../Modal';
import DragSortableList from 'react-drag-sortable'
import {  EditOutlined ,DeleteOutlined  } from "@ant-design/icons";
import {updateMenuApi} from '../../../../api/menu'
import {getAccessToken} from '../../../../api/auth'

import './MenuWebList.scss';

const { confirm} = ModalAntd;


export default function MenuWebList(props){
    const {menu, setReloadMenuWeb} = props

    //estado del nuevo estado del menu
    const [listItems, setListItems] = useState([])
    const [isVisibleModal, setisVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null);

    //el array para la lista para componente drag

    

    useEffect(() => {
        const listItemsArray = [];

        menu.forEach(item => {
                listItemsArray.push({
                    content: <MenuItem item={item}/>
                })
        });

        setListItems(listItemsArray)
    }, [menu])

    //funcion que da el acomodo de cada item
    const onSort = (sortedList,dropEvent) =>{
const accesToken = getAccessToken();


    sortedList.forEach(item =>{
        const { _id} = item.content.props.item;
        const order = item.rank;
        updateMenuApi(accesToken,_id,{order})
    })
     
    }


    return(
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary">Menu</Button>
            </div>

            <div className="menu-web-list__items">
                <DragSortableList items={listItems} onSort={onSort} type="vertical"/>
            </div>
        </div>

        
    )
}


function MenuItem(props){
const {item} = props;

return(
    
    <List.Item 
        actions={[
            <Switch defaultChecked={item.active} />,
            <Button type="primary">
                <EditOutlined />
            </Button>,
            <Button type="danger">
                <DeleteOutlined />
            </Button>
            
        ]}
    >
        <List.Item.Meta title={item.title} description={item.url}/>
    </List.Item>

) 
}