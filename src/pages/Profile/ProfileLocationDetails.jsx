import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { locationDetailsSchema } from '../../schemas/locationDetailsSchema'
import StrikeForm from '../../components/Form/StrikeForm'
import StrikeSelect from '../../components/Form/StrikeSelect'
import StrikeInput from '../../components/Form/StrikeInput'
import StrikeTextArea from '../../components/Form/StrikeTextArea'
import { useGetUserDetailsQuery } from '../../redux/features/auth/authApi'
import ThreeDotsLoader from '../../components/ThreeDotsLoader'

const cityOptions = [
  { "label": "Mumbai", "value": "mumbai" },
  { "label": "New Delhi", "value": "new_delhi" },
  { "label": "Bangalore", "value": "bangalore" },
  { "label": "Chennai", "value": "chennai" },
  { "label": "Kolkata", "value": "kolkata" },
  { "label": "Hyderabad", "value": "hyderabad" },
  { "label": "Ahmedabad", "value": "ahmedabad" },
  { "label": "Jaipur", "value": "jaipur" },
  { "label": "Pune", "value": "pune" },
  { "label": "Surat", "value": "surat" },
  { "label": "Lucknow", "value": "lucknow" },
  { "label": "Kanpur", "value": "kanpur" },
  { "label": "Nagpur", "value": "nagpur" },
  { "label": "Indore", "value": "indore" },
  { "label": "Chandigarh", "value": "chandigarh" },
  { "label": "Bhopal", "value": "bhopal" },
  { "label": "Coimbatore", "value": "coimbatore" },
  { "label": "Vadodara", "value": "vadodara" },
  { "label": "Patna", "value": "patna" },
  { "label": "Visakhapatnam", "value": "visakhapatnam" }
]

const stateOptions = [
  { "label": "Maharashtra", "value": "maharashtra" },
  { "label": "Delhi", "value": "delhi" },
  { "label": "Karnataka", "value": "karnataka" },
  { "label": "Tamil Nadu", "value": "tamil_nadu" },
  { "label": "West Bengal", "value": "west_bengal" },
  { "label": "Telangana", "value": "telangana" },
  { "label": "Gujarat", "value": "gujarat" },
  { "label": "Rajasthan", "value": "rajasthan" },
  { "label": "Uttar Pradesh", "value": "uttar_pradesh" },
  { "label": "Madhya Pradesh", "value": "madhya_pradesh" },
  { "label": "Chandigarh", "value": "chandigarh" },
  { "label": "Bihar", "value": "bihar" },
  { "label": "Andhra Pradesh", "value": "andhra_pradesh" },
  { "label": "Kerala", "value": "kerala" },
  { "label": "Jharkhand", "value": "jharkhand" },
  { "label": "Odisha", "value": "odisha" },
  { "label": "Haryana", "value": "haryana" },
  { "label": "Himachal Pradesh", "value": "himachal_pradesh" },
  { "label": "Sikkim", "value": "sikkim" },
  { "label": "Meghalaya", "value": "meghalaya" }
]

const countryOptions = [
  { "label": "India", "value": "india" },
  { "label": "United States", "value": "united_states" },
  { "label": "China", "value": "china" },
  { "label": "Japan", "value": "japan" },
  { "label": "Germany", "value": "germany" },
  { "label": "France", "value": "france" },
  { "label": "United Kingdom", "value": "united_kingdom" },
  { "label": "Canada", "value": "canada" },
  { "label": "Australia", "value": "australia" },
  { "label": "Brazil", "value": "brazil" },
  { "label": "South Africa", "value": "south_africa" },
  { "label": "Russia", "value": "russia" },
  { "label": "Italy", "value": "italy" },
  { "label": "Mexico", "value": "mexico" },
  { "label": "Spain", "value": "spain" },
  { "label": "South Korea", "value": "south_korea" },
  { "label": "Saudi Arabia", "value": "saudi_arabia" },
  { "label": "Argentina", "value": "argentina" },
  { "label": "Turkey", "value": "turkey" },
  { "label": "Indonesia", "value": "indonesia" }
]


export default function ProfileLocationDetails() {
  const {data, isLoading} = useGetUserDetailsQuery();
  const {location} = data?.response?.UserData || {};
  const {country, state, city, address} = location|| {};
  console.log({location})
  let defaultValues = {
    country:{label:country, value:country},
    state:{label:state, value:state},
    city:{label:city, value:city},
    address,
    pinCode:''
  }

  if(isLoading){
    return <ThreeDotsLoader/>
  }
  const handleSubmitLocationDetails = (data)=>{
    console.log("Location Details===> ", data)
  }
  return (
    <StrikeForm onSubmit={handleSubmitLocationDetails} resolver={yupResolver(locationDetailsSchema)} defaultValues={defaultValues}>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <StrikeSelect options={countryOptions} name="country" label="Country" required={true}/>
      <StrikeSelect options={stateOptions} name="state" label="State" required={true}/>
      <StrikeSelect options={cityOptions} name="city" label="City" required={true}/>
      <StrikeInput type="text" name="pinCode" label="Pincode"/>
      <div className='lg:col-span-2'><StrikeTextArea type="text" name="address" label="Address" required={true}/></div>
    </div>
    <div className="flex justify-center items-center">
      <button type="submit" className="submitBtn w-[10rem] mt-[1.5rem]">
        Save
      </button>
    </div>
  </StrikeForm>
  )
}

