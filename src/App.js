import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

// React-route help us to have different page in our page, body, ...
// ============ To init react-router ===========
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  // Switch is replaced by Routes in v6 an elder
  Route,
  // Link
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
// =============================================

// Import the select from mailSlice and use Selector
import { useSelector, useDispatch } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice'
import { selectUser, login } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // For make the login persistant
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
    // This line in commentary MUST BE WRITE >>>>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      {/* {!user ? }  means if there is no user */}
      {!user ? (
          <Login />
      ) : (
            <div className="app">
              <Header />
              
              <div className="app__body">
                <Sidebar />
                
                {/* Route few things for do the localhost/ to localhost/mail */}
                <Routes>
                  <Route path="/mail" element={<Mail />} />
                  <Route path="/" element={<EmailList />} />
                </Routes>
              </div>

              {sendMessageIsOpen && <SendMail />}
          </div>
      )}
    </Router>
  );
}

export default App;
