type Variant = "offer" | "persons";

import type { JSX } from "react";
import Button from "./Button";

interface CardProps {
    title?: string;
    description?: string;
    price?: number;
    buttonText?: string;
    variant?: Variant;
    img?: string;
    nombre?: string;
    puesto?: string;
}

function Card({ title, description, price, buttonText,
                img, nombre, puesto,
                variant = "offer" }
            : CardProps) {

    const variants: Record<Variant, JSX.Element> = {
        offer: (
            <div className="bg-primary rounded-lg shadow-lg text-white text-center flex flex-col h-full">
                <div className="p-6 pb-0 flex-grow">
                    <h2 className="font-bold text-subtitle-h2">{title}</h2>
                    <p className="mb-4">{description}</p>
                </div>
                <div className="pb-6">
                    <h2 className="font-bold text-subtitle-h2">DESDE {price}€</h2>
                    <div className="flex justify-center mt-4">
                        <Button text={buttonText || "Boton"} variant="card" onClick={(text) => console.log("Click" + text)} />
                    </div>
                </div>
            </div>
        ),
        persons: (
            <div className="text-center flex flex-col h-full">
                <div className="flex-grow">
                    <img src={img} alt=""/>
                    <div className="p-4">
                        <h1 className="text-subtitle-h1 font-bold">{nombre}</h1>
                        <h3 className="text-subtitle-h3">{puesto}</h3>
                    </div>
                </div>
            </div>
        )
    };

    return variants[variant];
}

export default Card;
