import { yupResolver } from '@hookform/resolvers/yup'
import { locationDetailsSchema } from '../../schemas/locationDetailsSchema'
import StrikeForm from '../../components/Form/StrikeForm'
import StrikeSelect from '../../components/Form/StrikeSelect'
import StrikeInput from '../../components/Form/StrikeInput'
import StrikeTextArea from '../../components/Form/StrikeTextArea'
import { useGetUserDetailsQuery, useUpdateUserDetailsMutation } from '../../redux/features/auth/authApi'
import ThreeDotsLoader from '../../components/ThreeDotsLoader'
import { countryOptions } from '../../options/countryOptions'
import { stateOptions } from '../../options/stateOptions'
import { cityOptions } from '../../options/cityOptions'
import { toast } from 'react-toastify'
import SubmitBtnLoader from '../../components/SubmitBtnLoader'


export default function ProfileLocationDetails() {
  // RTK Query Hooks 
  const {data, isLoading} = useGetUserDetailsQuery();
  const [updateUser, { isLoading: isLoadingUpdateUser }] =
  useUpdateUserDetailsMutation();

  const {location} = data?.response?.UserData || {};
  const {country, state, city, address, pincode} = location || {};

  let defaultValues = {
    country:{label:country, value:country},
    state:{label:state, value:state},
    city:{label:city, value:city},
    address,
    pincode
  }

  if(isLoading){
    return <ThreeDotsLoader/>
  }
  const handleSubmitLocationDetails = async(data)=>{
    console.log("Location Details===> ", data)
    const updateData = {
      country:data?.country?.value,
      state:data?.state?.value,
      city:data?.city?.value,
      pincode:data?.pincode,
      address:data?.address
    }
    console.log("Update Location Data===> ", updateData)
    // Call API
    try {
      const res = await updateUser({location:updateData});
      if (res?.error) {
        console.log("User updated api response===>", res);
        // return toast.error(res?.error?.data?.response?.message);
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Updated user location details successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  }
  return (
    <StrikeForm onSubmit={handleSubmitLocationDetails} resolver={yupResolver(locationDetailsSchema)} defaultValues={defaultValues}>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <StrikeSelect options={countryOptions} name="country" label="Country" required={true}/>
      <StrikeSelect options={stateOptions} name="state" label="State" required={true}/>
      <StrikeSelect options={cityOptions} name="city" label="City" required={true}/>
      <StrikeInput type="text" name="pincode" label="Pincode"/>
      <div className='lg:col-span-2'><StrikeTextArea type="text" name="address" label="Address" required={true}/></div>
    </div>
    <div className="flex justify-center items-center">
        {isLoadingUpdateUser ? (
          <div className="w-[10rem] mt-[1.5rem]">
            <SubmitBtnLoader />
          </div>
        ) : (
          <button type="submit" className="submitBtn w-[10rem] mt-[1.5rem]">
            Save
          </button>
        )}
      </div>
  </StrikeForm>
  )
}

