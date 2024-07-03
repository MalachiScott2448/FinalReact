const Suggestion =()=> {

    const rand = () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const randomReview = reviews[randomIndex];
        return randomReview;
    };

    return (
        <section className="sectionSuggestion">
            
        </section>
    )
}

export default Suggestion