import Input from './Input'
import Button from './Button';
import Textarea from './Textarea';

function Form() {
    const handleClick = (text: string) => {
        console.log("Click" + text);
    };

    return (
        <div className='container mx-auto'>
            
        <form className="grid grid-cols-3 gap-4 p-4 mx-auto w-full">
            <Input
                type="text"
                placeholder="Nombre"
                extraClassName="col-span-1"
            />
            <Input
                type="text"
                placeholder="Correo electrónico"
                extraClassName="col-span-2"
            />
            <Input
                type="text"
                placeholder="Teléfono"
                extraClassName="col-span-3"
            />
            <Textarea
                name="mensaje"
                placeholder="Mensaje"
                extraClassName="col-span-3"
            />
            <div>
                <div className="pb-3">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms" className="text-paragraph-h1 font-lexend"> Acepto la Politica de Privacidad</label>
                </div>
                <Button text="Enviar" onClick={handleClick} />
            </div>
        </form>
        </div>
    )
}

export default Form