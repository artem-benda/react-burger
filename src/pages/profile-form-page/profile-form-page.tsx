import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, SyntheticEvent } from 'react';
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import { useForm } from "../../hooks/use-form";
import { editUserThunk } from "../../services/actions/auth";
import styles from "./profile-form-page.module.css";

// Fix ошибки ts для компонентов yandex
declare module 'react' {
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    }
}

interface IEditUserRequestState {
    editUserRequest: boolean;
    editUserFailed: boolean;
}

interface IProfileForm {
    name: string;
    email: string;
    password: string;
}

const ProfileFormPage = () => {
    const dispatch = useAppDispatch();

    const user = useAppSelector(store => store.auth.user);
    const { editUserRequest, editUserFailed }: IEditUserRequestState = useAppSelector(store => store.auth);

    const { form, onChange, setValues } = useForm<IProfileForm>({ name: '', email: '', password: '', ...user });

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
            e.preventDefault();
            dispatch(editUserThunk(form));
        },
        [dispatch, form]
    );

    const onCancelClick = () => {
        setValues({ name: '', email: '', password: '', ...user })
    }

    const isDataModified = user !== null && (form.name !== user.name || form.email !== user.email);

    return (
        <>
            <article className={styles.profileContentsColumn}>
                <form onSubmit={onSubmit} className={styles.profileForm}>
                    <div className="mt-6"><Input placeholder="Имя" icon={"EditIcon"} value={form.name} name={'name'} onChange={onChange} /></div>
                    <div className="mt-6"><Input placeholder="E-mail" icon={"EditIcon"} value={form.email} name={'email'} onChange={onChange} type='email' /></div>
                    <div className="mt-6"><Input placeholder="Пароль" icon={"EditIcon"} value={form.password} name={'password'} onChange={onChange} type='password' /></div>
                    { isDataModified &&
                        <div className={styles.buttonsContainer + " mt-6"}>
                            <Button type="primary" size="medium" onClick={onCancelClick}>
                                Отмена
                            </Button>
                            <Button type="primary" size="medium" htmlType="submit">
                                Сохранить
                            </Button>
                        </div>
                    }
                </form>
                { editUserFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось изменить данные пользователя. Проверьте корректность введенных значений.
                    </p>
                }
                { editUserRequest &&
                    <p className="text text_type_main-default pt-6 text-centered">
                        Отправка запроса...
                    </p>
                }
            </article>
            <article className={styles.profileSideColumn}></article>
        </>
    );
}

export default ProfileFormPage;