import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { locationDetailsSchema } from '../../schemas/locationDetailsSchema'
import StrikeForm from '../../components/Form/StrikeForm'
import StrikeSelect from '../../components/Form/StrikeSelect'
import StrikeInput from '../../components/Form/StrikeInput'
import StrikeTextArea from '../../components/Form/StrikeTextArea'
import { useGetUserDetailsQuery } from '../../redux/features/auth/authApi'
import ThreeDotsLoader from '../../components/ThreeDotsLoader'
import { countryOptions } from '../../options/countryOptions'
import { stateOptions } from '../../options/stateOptions'
import { cityOptions } from '../../options/cityOptions'


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

