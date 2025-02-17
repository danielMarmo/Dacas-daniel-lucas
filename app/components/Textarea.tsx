interface TextareaProps {
    name: string;
    placeholder: string;
    extraClassName?: string;
}

function Textarea({ name, placeholder, extraClassName }: TextareaProps) {
    return (
        <textarea 
            name={name} 
            placeholder={placeholder}
            className={`text-paragraph-h1 font-lexend bg-background text-black border rounded-[20px] ${extraClassName}`}>
        </textarea>
    )
}

export default Textarea