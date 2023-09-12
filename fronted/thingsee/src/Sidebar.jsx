import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, Bs0Square}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Bs0Square  className='icon_header'/> Thingsee Project
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <div className='card'>
                <div className='card-inner'>
                    <h3>Air Quality Index</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>120</h1>
            </div>

            
    
            <div className='card'>
                <div className='card-inner'>
                    <h3>Air Pressure</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>120</h1>
            </div>
        </ul>
    </aside>
  )
}

export default Sidebar