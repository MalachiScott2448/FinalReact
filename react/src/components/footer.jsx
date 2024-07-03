import { Link } from "react-router-dom";

const Footer =()=> {

    return (
        <footer className="footer">
            <div className="container">
                <ul className="d-flex justify-content-center">
                    <li><Link to="./error404">Contact</Link></li>
                    <li><Link to="./error404">Career</Link></li>
                    <li><Link to="./error404">Location</Link></li>
                    <li><a href="https://bit.ly/3W75oEO" target="_blank">Gift Cards</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer