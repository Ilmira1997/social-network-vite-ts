import AppButton from "../../components/UI/Header/AppButton/AppButton";
import AppLink from "../../components/UI/Header/AppLink/AppLink";
import AppInput from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.style";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppRegistration } from "../../components/UI/AppRegistration/AppRegistration";
import { useLoginUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";



const loginFormSchema =yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
  .string()
  .min(4, "Пароль должен содержать как минимум 4 символа")
  .required("Обязательное поле!"),
  
 });

export const LoginPage = () => {
  const navigate = useNavigate();

const [loginUser,{data:userData}]=useLoginUserMutation()

  interface ILoginForm {
    useremail: string;
    userpassword: string;
  }

  const onLoginSubmit = (data: ILoginForm) => {
    loginUser({email:data.useremail,password:data.userpassword})
   console.log(data);
   
  };

  const { 
    control, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
    resolver: yupResolver(loginFormSchema)
  });

  useEffect(()=>{
    if(userData?.user_id){
      navigate("/main-page")
    }
    console.log(userData);
    
  }, [userData,navigate])

  return (
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          control={control}
          name="useremail" 
          render={({ field }) => (
            <AppInput 
            isRequired={false} 
            inputType="email"
            inputPlaceholder="Введите свой email"
            isError={errors.useremail ? true : false}
            errorText={errors.useremail?.message}
            {...field}
            
            />
          )}
        />
        <Controller
          control={control}
          name="userpassword"
          render={({ field }) => (
            <AppInput 
            isRequired={false}
            inputPlaceholder="Пароль" 
            inputType="password" 
            {...field} 
            isError={errors.userpassword ? true : false}
            errorText={errors.userpassword?.message}
            />
          )}
        />

        <AppButton buttonText="Войти" buttonType="submit" />
      </form>
      <AppLink linkText="Забыли пароль?" />
      <AppRegistration/>
    </SCLoginPage>
  );
};
