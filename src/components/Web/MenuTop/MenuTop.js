import React,{useState,useEffect} from 'react';
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import SocialLinks from '../SocialLinks'
import {getMenuApi} from '../../../api/menu'
import logoWhite from '../../../assets/img/png/bunkan2.png'

import './MenuTop.scss'


export default function MenuTop(){

    const [menuData, setmenuData] = useState([])

   
    useEffect(() => {
        
        getMenuApi().then(response => {
            const arrayMenu = [];
            response.menu.forEach(item => {
                if(item.active){
                    arrayMenu.push(item);
                }
            });
            setmenuData(arrayMenu);
        })
    }, [])
    
    return (
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top__logo">
                <Link to ={"/"}>
                    <img src={logoWhite} alt="BUNKAN NICHIBOKU"/>
                </Link>
            </Menu.Item>

            {menuData.map(item =>{
                const external = item.url.indexOf("http") > -1 ? true : false

                if(external){
                    return(
                        <Menu.Item key={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank">{item.title}</a>

                        </Menu.Item>
                    )
                }

                return( //parea las paginas  internas
                    <Menu.Item key={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank">{item.title}</a>

                        </Menu.Item>
                )

            })}
            
            <SocialLinks/>
        </Menu>
    )
}