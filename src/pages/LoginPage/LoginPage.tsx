import AppButton from "../../components/UI/Header/AppButton/AppButton";
import AppLink from "../../components/UI/Header/AppLink/AppLink";
import AppInput from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.style";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppRegistration } from "../../components/UI/AppRegistration/AppRegistration";




export const LoginPage = () => {
 const loginFormSchema =yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
  .string()
  .min(4, "Пароль должен содержать как минимум 4 символа")
  .required("Обязательное поле!"),

 });


  const navigate = useNavigate()
  interface ILoginForm {
    useremail: string,
    userpassword: string
  }

  const onLoginSubmit = (data: ILoginForm) => {
    console.log(data);
    if (data) {
      navigate("/main-page")
    }
  };

  const { 
    control, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      useremail: "",
      userpassword: ""
    },
    resolver: yupResolver(loginFormSchema)
  });


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
