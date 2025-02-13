import Button from "./Button";

interface CardProps {
    title: string;
    description: string;
    price: number
    buttonText: string;
}

function Card({ title, description, price, buttonText }: CardProps) {
    return (
        <div className="bg-primary rounded-lg shadow-lg text-white text-center flex flex-col h-full">
            <div className="p-6 pb-0 flex-grow">
                <h2 className="font-bold text-subtitle-h2">{title}</h2>
                <p className="mb-4">{description}</p>
            </div>
            <div className="pb-6">
                <h2 className="font-bold text-subtitle-h2">DESDE {price}€</h2>
                <div className="flex justify-center mt-4">
                    <Button text={buttonText} variant="card" onClick={(text) => console.log("Click" + text)} />
                </div>
            </div>
        </div>

    )
}

export default Card