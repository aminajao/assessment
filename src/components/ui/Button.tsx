interface ButtonProps {
  variant?: string;
  text: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = ({
  type,
  variant,
  text,
  onClick,
  loading,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      disabled={loading || disabled}
      type={type}
      onClick={onClick}
      className={`${className} ${
        variant === 'outline'
          ? 'border text-[#0D1A26] text-sm font-bold py-[7px] px-3 border-[#AEB3B7] rounded-md'
          : 'disabled:cursor-not-allowed px-20 flex justify-center items-center disabled:opacity-50 bg-primary font-medium rounded-[4px] text-lg py-2.5 text-center'
      } `}
    >
      {loading ? 'Loading...' : text}
    </button>
  );
};
