import { Icon } from "@iconify/react/dist/iconify.js";
import Error from "../UI/Error";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/createUserSlice";
import { useEffect } from "react";

export default function StrikeFile({ name, type, label }) {
  const dispatch = useDispatch()
  const {
    watch,
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const selectedFile = watch(name);
  useEffect(()=>{
    selectedFile?.length > 0 && dispatch(addUserDetails({[name]:selectedFile}))
  }, [selectedFile, dispatch])

  return (
    <div>
      <p>{label}</p>
      {/* Upload file  */}
      {!selectedFile?.length && (
        <div
          onClick={() => document.getElementById("file").click()}
          className={`border-[1px] border-gray-300 rounded-md p-1 min-h-[100px] flex justify-center items-center cursor-pointer duration-300 ${
            errors[name]?.message ? "border-red-200" : "border-[#e7e4e4]"
          }`}
        >
          <Icon
            className="text-gray-300 text-[5rem]"
            icon="line-md:cloud-upload-outline-loop"
          />
          <input
            id="file"
            className="hidden"
            {...register(name, { required: true })}
            type={type}
            name={name}
          />
        </div>
      )}

      {/*Display uploaded file  */}
      {selectedFile?.length > 0 && (
        <div className="border-[1px] border-gray-300 rounded-md p-1 min-h-[200px] flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-full"
            src={URL.createObjectURL(selectedFile[0])}
            alt=""
          />
          <h3>{selectedFile[0].name}</h3>
          <Icon
            className="border-[1px] cursor-pointer border-red-700 text-red-700 hover:bg-red-700 hover:text-white duration-200 rounded-md text-[2rem] p-1"
            icon="radix-icons:cross-2"
            onClick={() =>
              setValue("file", undefined, {
                shouldTouch: true,
                shouldValidate: true,
              })
            }
          />
        </div>
      )}
      {errors[name]?.message && <Error message={errors[name]?.message} />}
    </div>
  );
}
