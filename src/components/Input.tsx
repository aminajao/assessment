import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  className = '',
  placeholder,
  label,
  error,
  disabled = false,
  name,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block mb-2 text-xl font-light text-[#304050] dark:text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...props}
        className="bg-gray-50 border border-[#AEB3B7] text-gray-900 sm:text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full py-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {error && <p className="text-veryTiny text-red-400">{error}</p>}
    </div>
  );
};
