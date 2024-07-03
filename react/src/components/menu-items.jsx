const Menuitems =(props)=> {
    const { item_name, price, img } = props

    const imgUrl = (itemName) => {
        if (!itemName) {
            return '/media/defaultProfile.png'
        }
        const formattedName = itemName.replace(/\s+/g,'').toLowerCase()
        return `/media/${formattedName}.jpg`
    }

    return (
        <div className='menuCard'>
            <div className="card text-center">
                <img src={imgUrl(item_name)} className="img-fluid rounded" alt={item_name}/>
                <div className="card-body">
                    <h4 className="card-title">{props.item_name}</h4>
                    <p>${props.price}</p>
                </div>
            </div>
        </div>
    )
}


export default Menuitems;
