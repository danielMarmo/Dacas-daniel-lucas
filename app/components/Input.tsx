interface InputProps {
    type: string;
    placeholder: string;
    extraClassName?: string;
}

function Input({ type, placeholder, extraClassName }: InputProps) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={`text-paragraph-h1 font-lexend bg-background text-black border rounded-full p-2 ${extraClassName}`}
             />
    )
}

export default Input