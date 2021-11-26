import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
// Button from Material UI

// Dispatch
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    
    return (
        <div className='sidebar'>
            {/* Not a classic button but button from Material UI */}
            {/* But we need to add some style first */}
            {/* startIcon to make Icon inside Button */}

            {/* className In object MUST BE outside the component */}
            <Button 
                startIcon={<AddIcon fontSize="large" />} 
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}    
                // dispatch like a gun. Turn the open to true
            >
                Compose
            </Button>

            {/* Selected for the selected css in the sidebar */}
            <SidebarOption Icon={InboxIcon} title="Inbox" number={56} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={56} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={56} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={56} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={56} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={56} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton ><PersonIcon /></IconButton>
                    <IconButton ><DuoIcon /></IconButton>
                    <IconButton ><PhoneIcon /></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
