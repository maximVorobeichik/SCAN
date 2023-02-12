import React from 'react';
import { useState } from 'react';
//import { json } from 'stream/consumers';
import css from "./index.module.css"
import { useAppDispatch } from 'src/hook';
import { addTodo, } from 'src/store/todoSlice';
//import { useAppSelector } from 'src/hook';
import { HOST } from "../../API"
// interface ToDoItemProps{
//     id: string;
//     title: string
// }
// const TodoItem:React.FC<ToDoItemProps>=({id,title})=>{}


const Login: React.FC = () => {
    const [loginBoolen, setLoginBoolen] = useState(false)
    const [passwordBoolen, setPasswordBoolen] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useAppDispatch();
    //const token = useAppSelector(state => state.todos)
    //  console.log(token)


    const onChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {

        var a: boolean
        if (e.currentTarget.value.startsWith("+")) {
            var patt = new RegExp(
                '^' +                           // No leading content.
                '[-+]?' +                       // Optional sign.
                '(?:[0-9]{0,30}\\.)?' +         // Optionally 0-30 decimal digits of mantissa.
                '[0-9]{1,30}' +                 // 1-30 decimal digits of integer or fraction.
                '(?:[Ee][-+]?[1-2]?[0-9])?' +   // Optional exponent 0-29 for scientific notation.
                '$'                             // No trailing content.
            )
            //  console.log(patt.test(e.currentTarget.value))
            a = patt.test(e.currentTarget.value)
            setLoginBoolen(a)
            if (a) {
                setLogin(e.currentTarget.value)
            }
        } else if (e.currentTarget.value === "") {
            setLoginBoolen(false)
        } else {
            setLoginBoolen(true)
            setLogin(e.currentTarget.value)
        }

    }
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {

        if (e.currentTarget.value === "") {
            setPasswordBoolen(false)
        } else {
            setPasswordBoolen(true)
            setPassword(e.currentTarget.value)
        }
    }

    const onClick = async () => {

        if (loginBoolen !== false && passwordBoolen !== false) {


            try {
                const options = {
                    // Будем использовать метод POST
                    method: 'POST',
                    // Добавим тело запроса
                    body: JSON.stringify({
                        login: login,
                        password: password

                    }),
                    // Дополнительный заголовое с описанием типа данных,
                    // которые мы отправляем серверу. В данном случае
                    // сервер jsonplaceholder будет знать, как ему
                    // обрабатывать запрос
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }
                // Делаем запрос за данными
                await fetch(HOST + '/login', options)
                    .then(response => {
                        if (!response.ok) {
                            //  setError( response.json.)
                            // response.json()
                            throw new Error('Error occurred!')

                        }
                        return response.json()
                    })
                    .then(json => {
                        var a2: string = json.accessToken;
                        console.log("Token--", a2)
                        dispatch(addTodo(a2));

                    }

                    ).catch((err) => {
                        //   setError(false)
                        setPasswordBoolen(false)
                        setLoginBoolen(false)
                        setPassword("")
                        setLogin("")
                        console.log(err, "error")
                    })

            } catch {
                setPasswordBoolen(false)
                setLoginBoolen(false)
                setPassword("")
                setLogin("")
                console.log("errrer")
            }


        }

    }
    return (
        <div>
            <div className={css.flex_block}>
                <div className={css.marginLog}>
                    <h1 className={css.h1Text}>Для оформления подписки
                        на тариф, необходимо авторизоваться.</h1>
                    <div className={css.picCharacters}></div>
                </div>
                <div className={css.picLock}>

                </div>
                <div className={css.loginBlock}>
                    <div className={css.loginMenu}>
                        <div className={css.flex_block}>
                            <div>
                                <h4 className={css.logInText}>
                                    Войти
                                </h4>
                                <div className={css.loginLine}>

                                </div>
                            </div>
                            <div className={css.loginMenu}>
                                <h4 className={css.registrMenuText}>
                                    Зарегистрироваться
                                </h4>
                                <div className={css.registrLine}>

                                </div>
                            </div>

                        </div>
                        <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Логин или номер телефона:</p>

                        <input type="text" className={loginBoolen ? css.input : css.inputErr} onChange={onChangeLogin} />

                        {loginBoolen ? null : (<p className={css.textErr}>Введите корректные данные</p>)}

                        <p className={css.textLoginBox} style={{ marginTop: "40px" }}>Пароль:</p>
                        <input type="password" className={passwordBoolen ? css.input : css.inputErr} onChange={onChangePassword} />

                        {passwordBoolen ? null : (<p className={css.textErr}>Неправильный пароль</p>)}


                        {loginBoolen ? (passwordBoolen ? <button className={css.buttonLogInValidTrue} onClick={onClick} style={{ marginTop: "40px" }}>Войти</button>
                            : <button className={css.buttonLogIn} style={{ marginTop: "40px" }}>Войти</button>) : <button className={css.buttonLogIn} style={{ marginTop: "40px" }} >Войти</button>
                        }


                        <button className={css.backupPassword} >Восстановить пароль</button>
                        <p className={css.textLoginBox} >Войти через:</p>
                        <div className={css.flex_block}>
                            <div className={css.blockAlterLog}>
                                <div className={css.picGoogle}></div>
                            </div>
                            <div className={css.blockAlterLog}>
                                <div className={css.picFaceBook}></div>
                            </div>
                            <div className={css.blockAlterLog}>
                                <div className={css.picYandex}></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}



export default Login;
