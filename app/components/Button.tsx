type Variant = "primary" | "header" | "headerSecondary" | "card";

interface ButtonProps {
    text: string;
    variant?: Variant;
    onClick: (text: string) => void;
}

function Button({ text, variant = "primary", onClick }: ButtonProps) {
    const variants: Record<Variant, string> = {
        primary: "bg-background hover:bg-gray-200 text-black border py-2 px-10 rounded-full",
        header: "bg-background hover:bg-gray-200 py-5 px-2",
        headerSecondary: "bg-primary hover:bg-hover text-white py-5 px-2",
        card: "bg-background hover:bg-gray-200 text-primary py-2 px-15 rounded-full font-bold",
    };

    return (
        <button
            className={`${variants[variant]} btn cursor-pointer text-paragraph-h1 font-lexend`}
            onClick={() => {
                onClick(text);
            }}
        >
            {text}
        </button>

    );
}

export default Button;