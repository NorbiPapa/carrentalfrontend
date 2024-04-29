import CarDTO from "../interfaces/CarDTO.ts";
import axios from "axios";

function CarCard(car: CarDTO) {

    function handleRental() {
        axios.post('http://localhost:3000/rentals/api/cars/' + car.id + '/rent')
            .then(() =>console.log('sikeres kölcsönzés'))
            .catch((e) => console.log(e.response.data))
    }
    return(
        <>
            <div className="border-2 border-gray-200 h-11/12 mb-8 w-96 space-y-4">
                <h3 className="text-4xl">{car.license_plate_number}</h3>
                <p className="text-xl">Márka: {car.brand}</p>
                <p className="text-xl">Modell: {car.model}</p>
                <p className="text-xl">Napidíj: {car.daily_cost}</p>
                <img className="" src={`../../images/${car.brand + '_' + car.model}.png`} alt={'asd'}/>
                <button onClick={handleRental}>Kölcsönzés</button>
            </div>
        </>
    )
}

export default CarCard;