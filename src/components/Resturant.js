import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Menu from './menuAPIList'
import Navbar from './Navbar'
import SingleMenu from './SingleMenu'

const categoryList = [...new Set(Menu.map((curEle) => (
    curEle.category
))), "All"]
// console.log('Category = ', categoryList);



const Resturant = () => {

    const [menus, setMenus] = useState(Menu)
    const [menuCategory, setMenuCategory] = useState(categoryList)

    const filterMenu = (category) => {

        if (category === 'All') {
            setMenus(Menu)
            return
        }

        const menuList = Menu.filter((curEle) => (
            curEle.category === category
        ))
        setMenus(menuList)
    }

    return (
        <>
            <Container>
                <div className="logo">
                    <h3><i class="fas fa-utensils"></i> Sanju's Kitchen</h3>
                </div>
                <Navbar filterMenu={filterMenu} menuCategory={menuCategory} />
                <Row>
                    {
                        menus?.map((menu, i) => (
                            <Col key={i} lg={3} md={4} sm={6}>
                                <SingleMenu menu={menu} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </>
    )
}

export default Resturant
