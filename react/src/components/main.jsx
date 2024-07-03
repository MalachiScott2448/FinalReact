import Reviews from './reviews'

const Main =()=> {

    return (
       <>
        <main className="main">
                <section className="sectionMain">
                {/* <img className="img-responsive" src="media/heroImg.png" alt="jumbotron" width="100%" height="50%" /> */}
                    <div className="container">
                        <div className="row">
                            <div className="overlay overlay-text text-center">
                                <h2>Food for Foo!</h2>
                                <p>Food you foo, food for you. All food for Foo and you!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sectionChef">
                    <div className="container">
                        <div className="d-flex flex-row text-center">
                            <h1>Our Chefs:</h1>
                            <div className="chefArea col-4">
                                <img className="chefHeadshot" src="media/spongebob.png" alt="an image of Spongebob" width="100%"/>
                                <h3>Spongebob</h3>
                            </div>
                            <div className="chefArea col-4">
                                <img className="chefHeadshot" src="media/bob.png" alt="an image of Bob" width="100%"/>
                                <h3>Bob</h3>
                            </div>
                            <div className="chefArea col-4">
                                <img className="chefHeadshot" src="media/jimmy.png" alt="an image of Jimmy" width="100%"/>
                                <h3>Jimmy</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="sectionCarousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 text-center">
                                <div className="textArea">
                                    <h3>Menu Item</h3>
                                    <p>This area is for the description of the menu item shown in the image to the right of this text.</p>
                                </div>
                            </div>
                            <div className="col-8 text-center">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block" src="media/defaultProfile.jpg" alt="First slide" width='50%'/>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block" src="media/defaultProfile.jpg" alt="Second slide" width='50%'/>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block" src="media/defaultProfile.jpg" alt="Third slide" width='50%'/>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button>Button one</button>
                                <button>Button two</button>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <>
                <Reviews />
            </>
        </>
        
    ) 
}

export default Main