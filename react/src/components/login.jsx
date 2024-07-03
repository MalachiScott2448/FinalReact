import Form from "./form"

const Login =(props)=> {
    
    return (
        <>
            <main className="main" id="formMain">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center">Create a login</h2>
                        <Form/>
                    </div>

                    <div className="row textBoxMain">
                        <div className="col-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="row textBoxFine">
                        <p className="text-center">By creating an account you agree to the above and will be a violation of the coalition of you disagree or not</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login