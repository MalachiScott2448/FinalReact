const MenuitemSingle =(props)=> {
    const { item_name, price, img } = props

    const imgUrl = (itemName) => {
        if (!itemName) {
            return '/media/defaultProfile.png'
        }
        const formattedName = itemName.replace(/\s+/g,'').toLowerCase()
        return `/media/${formattedName}.jpg`
    }

    const opinions = [
        'Mmm looks good!',
        'Taste better than it looks!',
        'A delicious choice!',
        'Couldn\'t have chosen better myself!',
        'Go on, get it. You deserve it!'
    ]

    const randomOpinion = () => {
        const randomIndex = Math.floor(Math.random() * opinions.length);
        const randomOpinion = opinions[randomIndex];
        return randomOpinion;
    }

    const random = randomOpinion()

    return (
        <div className='menuCardSingle'>
            <div className="card text-center">
                <div className="row">
                    <div className="col-6">
                        <img src={imgUrl(item_name)} className="img-fluid rounded" alt={item_name} width="100%"/>
                    </div>
                    <div className="col-6">
                        <div className="card-body">
                            <h4 className="card-title text-capitalize">{props.item_name}</h4>
                            <p>${props.price}</p>
                        </div>
                        <div className="cartButton">
                            <button type="button" className="btn btn-info text-capitalize cartBtn">Add to Cart</button>
                            <button type="button" className="btn btn-info text-capitalize cartBtn">Taste Later</button>
                        </div>
                        <div className="opinion">
                            <p>"{random}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuitemSingle