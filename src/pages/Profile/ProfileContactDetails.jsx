import { yupResolver } from '@hookform/resolvers/yup'
import StrikeForm from '../../components/Form/StrikeForm'
import StrikeInput from '../../components/Form/StrikeInput'
import { contactDetailsSchema } from '../../schemas/contactDetailsSchema'
import { useGetUserDetailsQuery } from '../../redux/features/auth/authApi';
import ThreeDotsLoader from '../../components/ThreeDotsLoader';

export default function ProfileContactDetails() {
  const {data, isLoading} = useGetUserDetailsQuery();
  const {email, mobileNumber} = data?.response?.UserData || {};
  const defaultValues = {
    email,
    mobileNumber
  }

  if(isLoading){
    return <ThreeDotsLoader/>
  }

  console.log({email, mobileNumber})
  const handleSubmitContactDetails = (data)=>{
    console.log("Contact Details===> ", data)
  }
  return (
    <StrikeForm onSubmit={handleSubmitContactDetails} resolver={yupResolver(contactDetailsSchema)} defaultValues={defaultValues}>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2.5rem] gap-y-[1.5rem]">
      <StrikeInput type="text" name="mobileNumber" label="Mobile Number" required={true} readonly={true}/>
      <StrikeInput type="email" name="email" label="Email" required={true} readonly={true}/>
    </div>
    <div className="flex justify-center items-center">
      <button type="submit" className="submitBtn w-[22rem] mt-[1.5rem]">
        Save
      </button>
    </div>
  </StrikeForm>
  )
}

