import React from 'react';

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => {
  return (
    <div className="font-general-regular mb-4">
      <label
        className="text-primary-dark dark:text-primary-light mb-1 block text-lg"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className="dark:border-primary-dark text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark text-md w-full rounded-md border border-gray-300 border-opacity-50 px-5 py-2 shadow-sm"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

export default FormInput;
