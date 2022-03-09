import React, {useState} from "react";

let AddForm = () =>{

    let [state, setState] = useState({
        user :
            {
                id: '',
                name: '',
                contact : '',
                email: '',
                role: ''
            }
    });

    let {user}= state;

    return (
        <React.Fragment>
            <h3>Welcome to Add Form</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <label>
                            Username
                            <input
                                value={user.name}
                                type="text" name="name" />
                        </label>
                        <label>
                            Contact
                            <input
                                value={user.contact}
                                type="text" name="contact"/>
                        </label>
                        <label>
                            Email
                            <input
                                value={user.email}
                                type="email" name="email" />
                        </label>
                        <label>
                            Role
                            <input
                                value={user.role}
                                type="text" name="role" />
                        </label>
                        <input type="button" className="btn btn-danger" value="ADD" />
                        <input type="button" className="btn btn-outline-danger" value="Cancel" />
                    </form>
                </div>
                </div>

            {/* <h2>Welcome</h2>
            <pre>{JSON.stringify(props.selectedContact)}</pre> */}
        </React.Fragment>

    )
}
export  default AddForm;