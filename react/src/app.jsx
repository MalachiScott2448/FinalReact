import { useState, useEffect } from "react"
import axios from "axios"

import Header from "./components/header"
import Main from "./components/main"
import About from "./components/about"
import Menu from "./components/menu"
import Itemsingle from './components/item-single'
import Login from './components/login'
import Footer from './components/footer'
import Error from './components/error'

import {Routes, Route} from 'react-router-dom'

const App =()=> {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
        fName: '',
        lName: ''
    })

    const [ users, setUsers ] = useState( [] )

    useEffect(() => {
        axios.get('http://localhost:3005/api/users')
            .then(res => setUsers(res.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleChange =(e)=> {
        const { name, value } = e.target

        setFormData(prevState => {
            return { 
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {
        let regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (regx.test(formData.password) === false) {
            alert('Password not valid, \nMust contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character\n-at least 8 characters')
        }
        else {
            axios({
                method: 'post', 
                url: 'http://localhost:3005/api/users/create',
                data: formData
            })
        }
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/:endpoint/:id' element={<Itemsingle/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={ <Error/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App