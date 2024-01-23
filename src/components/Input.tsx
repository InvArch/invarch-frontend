import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<Partial<HTMLInputElement>> {
  id?: string;
  type?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <input
        {...props}
        ref={ref}
        className={`rounded-md w-full h-[45px] py-2 px-3 text-invarchOffBlack text-xs leading-tight bg-invarchCream border-transparent focus:outline-none focus:ring-0 focus:border-invarchRose focus:text-invarchPink ${ props.className }`}
      />
    </>
  );
});

export default Input;

