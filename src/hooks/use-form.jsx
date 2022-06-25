import { useState } from 'react';

export function useForm(initialValues) {
    const [form, setValue] = useState(initialValues);

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const setValues = values => {
      setValue({ ...form, ...values });
    }

    return { form, onChange, setValues };
}