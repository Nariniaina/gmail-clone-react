import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import firebase from 'firebase/compat/app'; //v9

function SendMail() {
    // This is how we use that library
    // For link input form

    //For version 6.X.X
    // const { register, handleSubmit, watch, errors } = useForm();
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        // form validation : the object is not return if the required is empty

        // firebase recup
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        );

        dispatch(closeSendMessage());
    };

    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* handleSubmit here */}
                <input name='to' placeholder="To :" type="email"
                // ref={register({ required: true })} Version 6.X.X
                {...register('to', { required: true })}
                />
                {errors.to && <p className="sendMail__error">To is Required</p>}
                {/* Error handling */}

                <input name='subject' placeholder="Subject" type="text"
                {...register('subject', { required: true })}
                />
                {errors.subject && <p className="sendMail__error">Subject is Required</p>}
                {/* Error handling */}

                <input name='message' className="sendMail__message" placeholder="Message ..." type="text"
                {...register('message', { required: true })}
                />
                {errors.message && <p className="sendMail__error">Message is Required</p>}
                {/* Error handling */}

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
