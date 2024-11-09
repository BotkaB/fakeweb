import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {

    const [tLista, setTLista] = useState([]);


    function getAdat(vegpont) {
        myAxios
            .get(vegpont)


            .then(function (response) {
                // handle success
                console.log(response.data);
                setTLista(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    useEffect(() => {
        getAdat('/products')
    }, []);

    function postAdat(vegpont, adat) {
      myAxios
            .post(vegpont, adat)


            .then(function (response) {
                // handle success
                console.log(response);
              
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
 
    return <ApiContext.Provider value={{ tLista, postAdat }}>
        {children}
    </ApiContext.Provider>

}