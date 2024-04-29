import {useState} from "react";
import axios from "axios"

function CarCreator() {

    const[brand, setBrand] = useState('')
    const[license_plate_number, setLicense_plate_number] = useState('')
    const[model, setModel] = useState('')
    const[daily_cost, setDaily_cost] = useState(0)

    const[error, setError] = useState('')

    function handleSubmit() {
        const body = {
            brand: brand,
            license_plate_number: license_plate_number,
            model: model,
            daily_cost: daily_cost
        }

        if(brand.trim() === '') {
            setError('A márka nem lehet üres')
        } else if(license_plate_number.trim() === '') {
            setError('A rendszám nem lehet üres')
        } else if(model.trim() === '') {
            setError('A modell nem lehet üres')
        } else if(isNaN(daily_cost) || daily_cost === 0) {
            setError('A napi díj nem lehet üres vagy 0')
        } else {
            console.log(body)
            axios.post('http://localhost:3000/cars/api/cars', body)
                .then()
                .catch((e) => console.log(e))
        }
    }
    return(
        <div className="w-full p-4">
            <p className="text-3xl font-bold">
                Autó létrehozása
            </p>
            <div>
                <form className="flex-col space-y-4 justify-items-center">
                    <div>
                        <input type="text" className="border-2 border-gray-200 rounded-lg h-8 w-80 p-1" placeholder={'Márka'}
                               onChange={(text) => setBrand(text.target.value)}/>
                    </div>
                    <div>
                        <input type="text" className="border-2 border-gray-200 rounded-lg h-8 w-80 p-1" placeholder={'Rendszám'}
                               onChange={(text) => setLicense_plate_number(text.target.value)}/>
                    </div>
                    <div>
                        <input type="text" className="border-2 border-gray-200 rounded-lg h-8 w-80 p-1" placeholder={'Modell'}
                               onChange={(text) => setModel(text.target.value)}/>
                    </div>
                    <div>
                        <input type="number" className="border-2 border-gray-200 rounded-lg h-8 w-80 p-1" placeholder={'Napi díj'}
                               onChange={(value) => setDaily_cost(parseInt(value.target.value))}/>
                    </div>
                    <p>{error}</p>
                    <button type="submit" onClick={handleSubmit}>Létrehozás</button>
                </form>
            </div>
        </div>
    )
}

export default CarCreator;