import Button from "../components/Button";
import Card from "../components/Card";

export default function Welcome() {
  const handleClick = (text: string) => {
    console.log("Click" + text);
  };

  return (
    <div className="bg-background flex flex-col items-center p-4">
      <h1 className="text-3xl">Biblioteca de componentes</h1>
      <div className="justify-center space-x-4 mt-4">
        <Button text="Click Me!!!!" onClick={handleClick} />
        <Button text="Cuidador!" onClick={handleClick} variant="header" />
        <Button text="Cuidador!" onClick={handleClick} variant="headerSecondary" />
        <Button text="PANIC!!" onClick={handleClick} variant="card" />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card
          title="Oferta1"
          description="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor."
          price={100}
          buttonText="Boton1"
        />
         <Card
          title="Oferta1"
          description="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor."
          price={100}
          buttonText="Boton1"
        />
         <Card
          title="Oferta1"
          description="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor.
          loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor."
          price={100}
          buttonText="Boton1"
        />
      </div>
    </div>

  );
}