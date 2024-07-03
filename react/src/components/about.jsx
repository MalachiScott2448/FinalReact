import Reviews from './reviews'
import Foods from './foods'

const About =()=> {

    return (
        <>
        <main>
            <section className='sectionAbout'>
                <div className="container">
                    <div className="row">
                        <div className="d-flex">
                            <div className="col-4">
                                <img className='img' src='media/restaurant.jpg' alt='An image of a building that resembles a sea food establishment' width='100%'/>
                            </div>
                            <div className="col-8">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex">
                            <div className="col-8">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-4">
                                <img className='img' src='media/crab-dinner.jpg' alt='A magnificent image of a crab dinner meant for catering' width='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <>
                <Reviews/>
            </>   
        </>
    )
}

export default About