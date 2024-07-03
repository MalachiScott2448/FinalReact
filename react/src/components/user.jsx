const User =(props)=> {

    console.log(props.dateCreated)
    return (
        <div className="col-mb-3">
            <div className="user-div">
                <h3 className="text-capitalize">{props.lastName},{props.firstName}</h3>
                <p className="user-text">{props.username}</p>
                <p className="user-email">{props.email}</p>
            </div>
        </div>
    )
}

export default User