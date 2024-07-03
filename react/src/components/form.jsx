const Form =( { formData, handleChange, handleSubmit })=> {

    return (
        <div className="container">
            <form className="form login-form" id="form" onSubmit={handleSubmit}>
                <div className="mb-3 row d-flex text-center justify-content-center">
                    <div className="col-auto">
                        <label htmlFor="fName" className="form-label text-capitalize">first name</label>
                        <input type="text" id="fName" name="fName" value={FormData.fName} onChange={handleChange} className="form-control" required/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="lName" className="form-label text-capitalize">last name</label>
                        <input type="text" id="lName" name="lName" value={FormData.lName} onChange={handleChange} className="form-control" required/>
                    </div>
                </div>
                <div className="mb-3 row text-center justify-content-center">
                    <div className="col-auto">
                        <label htmlFor="email" className="form-label text-capitalize">email</label>
                        <input type="email" id="email" name="email" value={FormData.value} onChange={handleChange} className="form-control" required/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="username" className="form-label text-capitalize">username</label>
                        <input type="text" id="username" name="username" value={FormData.username} onChange={handleChange} className="form-control" required/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="password" className="form-label text-capitalize">password</label>
                        <input type="password" id="password" name="password" value={FormData.password} onChange={handleChange} className="form-control" required/>
                    </div>
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="text-capitalize">create login</button>
                </div>
            </form>
        </div>
    )
}

export default Form