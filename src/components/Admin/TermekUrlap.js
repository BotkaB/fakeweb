import React, { useContext, useState } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

export default function TermekUrlap() {
    const {postAdat}=useContext(ApiContext);

    const [adat, setAdat] = useState({
        title: 'asdffgf',
        price: 100,
        category: '',
        description: '',
        image: ''

    })

    function kuldesKezeles(event) {
        event.preventDefault()

        console.log(adat);
        postAdat('/products', adat);
    }

    function valtozasKezeles(event){
        const sv={...adat}
        // sv.title=event.target.value
         //sv["title"]=event.target.value
         sv[event.target.id]=event.target.value
         setAdat({...sv})

    }

    return (
        <div>
            <form onSubmit={kuldesKezeles}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Termék neve
                        </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    aria-describedby="title Help" 
                    value={adat.title}
                    onChange={valtozasKezeles}
                       
                  
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                       Ár
                        </label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="price" 
                    min="100"
                    max="100000"
                    aria-describedby="title Help" 
                    value={adat.price}
                    onChange={valtozasKezeles}
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="tcategory" className="form-label">
                        Kategória
                        </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="category" 
                    aria-describedby="category Help" 
                    value={adat.category}
                    onChange={valtozasKezeles}
                       
                  
                    />

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}


