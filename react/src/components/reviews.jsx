import React from 'react';

const Reviews = () => {

    class Review {
        constructor(name, review, stars) {
            this.name = name;
            this.review = review;
            this.stars = stars;
        }
    }

    const reviews = [
        new Review('Sofia Albertson', 'Some of the best food I have ever eaten!', 5),
        new Review('Norman Danielson', 'I couldn\'t find Foo but the food was ight.', 3),
        new Review('Eric Son', 'I remember in day when you have to and someone was yes;', 6),
        new Review('Mickey Mouse', 'If I had a nickle for every!', 4),
        new Review('The Grinch', 'There wasn\'t a Christmas to steal so I tried stealing the restaurant and got kicked out?', 4),
        new Review('Jimmy', 'I forgot to clock in...', 10)
    ]

    const rand = () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const randomReview = reviews[randomIndex];
        return randomReview;
    };

    const randomReview1 = rand()
    const randomReview2 = rand()

    return (
        <section className='sectionReview'>
            <div className="container">
                <div className="row">
                    <div className="reviewCard card">
                        <div className="row no-gutters">
                            <div className="col-md-2">
                                <img className='card-img-left' src='media/defaultProfile.jpg' alt='Default profile image' width="100%"/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h4 className='card-title'>{randomReview1.name}</h4>
                                    <p className='card-text'>Review: "{randomReview1.review}"</p>
                                    <p className='card-text'>Number of Stars given: "{randomReview1.stars}"</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="row">
                    <div className="reviewCard card">
                        <div className="row no-gutters">
                            <div className="col-md-2">
                                <img className='card-img-left' src='media/defaultProfile.jpg' alt='Default profile image' width="100%"/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h4 className='card-title'>{randomReview2.name}</h4>
                                    <p className='card-text'>Review: "{randomReview2.review}"</p>
                                    <p className='card-text'>Number of Stars given: "{randomReview2.stars}"</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
