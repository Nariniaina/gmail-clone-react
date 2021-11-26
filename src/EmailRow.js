import React from 'react'
import { Checkbox, IconButton} from '@material-ui/core';
// OulinedIcon is a custom icon
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import './EmailRow.css'
// useHistory / useNavigate from React-router
import { useNavigate } from "react-router-dom";
import { SelectMail } from './features/mailSlice';
import { useDispatch } from 'react-redux'

function EmailRow({id, title, subject, description, time}) {
    // Hook code : useHistory / useNavigate for V6 and elder
    // Give us history of the webpage

    //Push into new webpage and push to return in homepage
    const history = useNavigate();

    // This is how we access data via REDUX
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(SelectMail({
            id,
            title,
            subject,
            description,
            time,
        }));

        history("/mail");
        // Now into the Mail component >>>
    }

    return (
        // onClick must be here not in the parent
        // This is how we use it

        // This is link to the Routes we do in the App.js
        <div onClick={openMail} className='emailRow'>
        {/* How we launch it static */}
        {/* <div onClick={() => history("/mail") } className='emailRow'></div> */}
            <div className="emailRow__options">
                <Checkbox />
                <IconButton><StarBorderOutlinedIcon/></IconButton>
                <IconButton><LabelImportantOutlinedIcon/></IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject} - 
                    <span className='emailRow__description'>
                        {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
