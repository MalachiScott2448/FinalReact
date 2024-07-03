import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import MenuitemSingle from './menu-single'

const Itemsingle =()=>{

    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3005/api/menu/${id}`)
          .then(res => res.json())
          .then(data => setData(data));
      }, []);

    const imgUrl = (itemName) => {
        if (!itemName) {
            return '/media/defaultProfile.png'
        }
        const formattedName = itemName.replace(/\s+/g,'').toLowerCase()
        return `/media/${formattedName}.jpg`
    }

    const imagePic = imgUrl(data.item_name)

    return(
        <main className="main">
            <div className="container">
                <div className="row">
                    <MenuitemSingle
                        img={imagePic}
                        price={data.price}
                        item_name={data.item_name}
                    />
                </div>
            </div>
        </main>
    )
}

export default Itemsingle