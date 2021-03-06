/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useCallback} from 'react';

type ValidateRules<T> = (input: T | undefined, data?: any) => string | false;

type TypeInputData<T> =
  | []
  | [ValidateRules<T>[] | undefined]
  | [
      /* Validate */ ValidateRules<T>[] | undefined,
      /* Default Value */ T | null,
    ];
type Props<T> = {
  [key in keyof T]?: TypeInputData<T[key]>;
};

export const useForm = <T>(
  props: Props<T>,
): [
  FormDataType<T>,
  FormDataOptionalType<T>,
  <Key extends keyof T>(key: Key) => (value?: T[Key]) => void,
  () => ReturnTypeValidate<T>,
] => {
  // Init Data in form
  const [formData, setFormData] = useState<FormDataType<T>>(
    (() => {
      const formObject: FormDataType<T> = {} as FormDataType<T>;
      (Object.keys(props) as (keyof T)[]).forEach(key => {
        const propsField = props[key];
        const lengthPropsField = Number(propsField?.length);
        const valueField =
          Number(lengthPropsField) > 1 && props[key]?.[lengthPropsField - 1];

        formObject[key] =
          (!Array.isArray(valueField) && valueField) || undefined;
      });
      return formObject;
    })(),
  );
  const [errors, setErrors] = useState<FormDataOptionalType<T>>({});

  const onValidateField = <Key extends keyof T>(key: Key, value?: T[Key]) => {
    const validateList = props[key]?.[0];

    let errorMessage = '';

    validateList &&
      validateList?.every(funcValidate => {
        const errMessage = funcValidate(value, formData);
        errMessage && (errorMessage = errMessage ?? '');
        return !errorMessage;
      });
    return errorMessage;
  };

  const onChange = useCallback(
    <Key extends keyof T>(key: Key) => {
      return (value?: T[Key]) => {
        const errorsValidate: FormDataOptionalType<T> = {
          ...errors,
          [key]: undefined,
        };
        const errorMessage = onValidateField(key, value);
        errorMessage && (errorsValidate[key] = errorMessage);

        setErrors({...errorsValidate});
        setFormData({...formData, [key]: value});
      };
    },
    [formData, errors],
  );

  const onValidate = useCallback((): ReturnTypeValidate<T> => {
    // Error Object
    const errorsValidate: FormDataOptionalType<T> = {};
    // Loop for object and assign error
    for (const [key, value] of Object.entries(formData) as [
      keyof T,
      T[keyof T],
    ][]) {
      const errorMessage = onValidateField(key, value);
      errorMessage && (errorsValidate[key] = errorMessage);
    }
    setErrors(errorsValidate);
    return [!Object.keys(errorsValidate).length, formData];
  }, [formData]);

  return [formData, errors, onChange, onValidate];
};
