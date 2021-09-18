import React from 'react'

const Navbar = ({ filterMenu, menuCategory }) => {
    return (
        <>
            <div className="navigation mb-4">
                <div className="menuNav">
                    {
                        menuCategory?.map((curCat) => (
                            <span onClick={() => filterMenu(curCat)} className="btn Btn">{curCat}</span>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default Navbar
