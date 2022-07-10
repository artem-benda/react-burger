import { useState, ChangeEvent } from 'react';

export function useForm<T>(initialValues: T) {
    const [form, setValue] = useState<T>(initialValues);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const setValues = (values: T) => {
      setValue({ ...form, ...values });
    }

    return { form, onChange, setValues };
}