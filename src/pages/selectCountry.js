import React, {useState } from 'react'
import { Country, State, City } from 'country-state-city';

function SelectCountry() {
  const [allStates, setstates] = useState("")
  const [city, setCity] = useState("")
  const Countries = Country.getAllCountries().map((country) => {
    return <option key={country.isoCode} value={[country.isoCode,country.name]}>{country.name}</option>
  })

  const handleCountry = (e) => {
      const code = e.target.value.split(",")
      const countryName = code[1]
    const States = State.getAllStates().filter((state) => {
      return state.countryCode === code[0]
    })
    setstates(States)
  }

  let States;
  if (allStates) {
    States = allStates.map((state) => {
      return <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
    })
  }

  const handlestate = (e) => {
    const city = City.getAllCities().filter((city) => {
      return city.stateCode === e.target.value
    })
     setCity(city)
  }


  let cities;
  if (city) {
    cities = city.map((city) => {
      return <option key={city.id} value={city.name}>{city.name}</option>
    })
  }

  const handlecity = (e) => {
    console.log(e.target.value)
  }

  return (
    <>

      <div className='max-w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center'>
        <div class="flex flex-col justify-center">
          <div class="mb-3 xl:w-96">
            <select className="m-0 form-select appearance-none block w-full px-3  py-1.5  font-normal  text-base  text-gray-700   bg-white bg-clip-padding bg-no-repeat   border border-solid border-gray-300 rounded  transition   ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onClick={handleCountry}>
              <option selected>Open this select your country</option>
              {Countries}
            </select>
          </div>
          <div class="mb-3 xl:w-96">
            <select className="m-0 form-select appearance-none block w-full px-3  py-1.5  font-normal  text-base  text-gray-700   bg-white bg-clip-padding bg-no-repeat   border border-solid border-gray-300 rounded  transition   ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onClick={handlestate}>
              <option selected>Open this select state</option>
              {States ? States : ""}
            </select>
          </div>
          <div class="mb-3 xl:w-96">
            <select className="m-0 form-select appearance-none block w-full px-3  py-1.5  font-normal  text-base  text-gray-700   bg-white bg-clip-padding bg-no-repeat   border border-solid border-gray-300 rounded  transition   ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onClick={handlecity}>
              <option selected>Open this select city</option>
              {cities ? cities : ""}
            </select>
          </div>
        </div>

      </div>

    </>
  )
}

export default SelectCountry
