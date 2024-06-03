import AppButton from "../../components/UI/Header/AppButton/AppButton";
import AppLink from "../../components/UI/Header/AppLink/AppLink";
import { AppRegistration } from "../../components/UI/AppRegistration/AppRegistration";
import AppInput from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.style";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export const LoginPage = () => {
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
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      useremail: "",
      userpassword: ""
    }
  })


  return (
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          control={control}
          name="useremail" 
          render={({ field }) => (
            <AppInput inputPlaceholder="Введите свой email" inputType="email" {...field} />
          )}
        />
        <Controller
          control={control}
          name="userpassword"
          render={({ field }) => (
            <AppInput inputPlaceholder="Пароль" inputType="password" {...field} />
          )}
        />

        <AppButton buttonText="Войти" buttonType="submit" />
      </form>
      <AppLink linkText="Забыли пароль?" />
      <AppRegistration />
    </SCLoginPage>
  );
};
