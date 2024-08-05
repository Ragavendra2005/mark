import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/home">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/customers">
            <BsFillArchiveFill className='icon' /> Customers
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/orders">
            <BsFillGrid3X3GapFill className='icon' /> Orders
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/transport">
            <BsPeopleFill className='icon' /> Transport
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/warehouse">
            <BsListCheck className='icon' /> Warehouse
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/shipments">
            <BsMenuButtonWideFill className='icon' /> Shipments
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
       
      </ul>
    </aside>
  );
}

export default Sidebar;
