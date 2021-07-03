import React from "react";

const ContactList = (props) => {
    
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon " ></i>

            </div>
            )
        })

    return(
        <div>
            <h2>Contact List</h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
            
        </div>
    )
}

export default ContactList;