import Button from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";

export default function Welcome() {
  const handleClick = (text: string) => {
    console.log("Click" + text);
  };

  return (
    <div className="bg-background flex flex-col items-center p-4">
      <h1 className="text-3xl pb-10">El header se muestra arriba</h1>

      <h1 className="text-3xl">Tipos de botones</h1>
      <div className="justify-center space-x-4 mt-4">
        <Button text="Primary" onClick={handleClick} />
        <Button text="Header" onClick={handleClick} variant="header" />
        <Button text="HeaderSecondary" onClick={handleClick} variant="headerSecondary" />
        <Button text="Card" onClick={handleClick} variant="card" />
      </div>

      <h1 className="text-3xl">Cards de ofertas</h1>
      <div className="grid grid-cols-3 gap-4 mt-4 container mx-auto">
        <Card
          title="Oferta1"
          description="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor."
          price={100}
          buttonText="Boton1"
        />
        <Card
          title="Oferta2"
          description="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor."
          price={100}
          buttonText="Boton2"
        />
        <Card
          title="Oferta3"
          description="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor. loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor."
          price={100}
          buttonText="Boton3"
        />

      </div>

      <h1 className="text-3xl">Cards de personas</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card
          img="https://w7.pngwing.com/pngs/640/269/png-transparent-silhouette-person-people-icon-animals-logo-head-thumbnail.png"
          nombre="Nombre"
          puesto="Puesto"
          variant="persons"
        />
        <Card
          img="https://w7.pngwing.com/pngs/640/269/png-transparent-silhouette-person-people-icon-animals-logo-head-thumbnail.png"
          nombre="Nombre"
          puesto="Puesto"
          variant="persons"
        />
        <Card
          img="https://w7.pngwing.com/pngs/640/269/png-transparent-silhouette-person-people-icon-animals-logo-head-thumbnail.png"
          nombre="Nombre"
          puesto="Puesto"
          variant="persons"
        />

      </div>

      <h1 className="text-3xl">Formulario</h1>
      <Form />

      <h1 className="text-3xl">Footer</h1>
    </div>

  );
}