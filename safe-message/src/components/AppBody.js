import './styles.css';
import Title from './Title';
import Description from './Description';
import EmailForm from './EmailForm';
import React, { useState } from 'react';
import ScrollableGrid from './ScrollableGrid';
import LoadingIcon from './LoadingIcon';

const LoggedInContext = React.createContext();
const EmailContext = React.createContext();
const LoadingContext = React.createContext();

function AppBody()
{
    const [loggedIn, setLoggedIn] = useState(false);

    const [emails, setEmails] = useState();

    const [loading, setLoading] = useState(false);

    const handleLoggedInChange = (isLoggedIn) => {
        setLoggedIn(isLoggedIn);
    }

    const handleEmails = (emailList) => {
        setEmails(emailList);
    }

    const handleLoading = (loading) => {
        setLoading(loading);
    }

        return(
        <LoggedInContext.Provider value = {loggedIn}>
            <EmailContext.Provider value = {emails}>
                <LoadingContext.Provider value = {loading}>
                <div className='appBody'>
                    <Title></Title>
                    {loggedIn ? <ScrollableGrid list={emails}></ScrollableGrid> : <div><Description></Description>
                    <EmailForm loggedIn={loggedIn} onLoginChange={handleLoggedInChange} 
                    emails = {emails} onEmailChange = {handleEmails} 
                    loading = {loading} onLoadingChange ={handleLoading}></EmailForm>
                    </div>}
                    {loading ? <LoadingIcon></LoadingIcon> : <p></p>}
                </div>
                </LoadingContext.Provider>
            </EmailContext.Provider>
        </LoggedInContext.Provider>
        )
}

export default AppBody;