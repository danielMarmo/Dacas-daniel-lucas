import Button from "./Button";

function Header() {
  const handleClick = (text: string) => {
    console.log("Click" + text);
  };

  return (
    <div>
      <div className="bg-primary text-white flex justify-between items-center h-10">
        <div className="col flex ps-10">
          <img className="w-5 h-5" src="./app/assets/icons/envelope.svg" alt="" />
          <p className="ml-2 text-paragraph-h3">info@dacasmarketing.online</p>
          <img className="ml-10 w-5 h-5" src="./app/assets/icons/phone.svg" alt="" />
          <p className="ml-2 text-paragraph-h3">+34 621 52 47 01</p>
        </div>

        <div className="col flex pe-10">
          <img className="w-5 h-5" src="./app/assets/icons/linkedin.svg" alt="LinkedIn" />
          <p className="ml-2 mr-10 text-paragraph-h3">LinkedIn</p>

          <img className="w-5 h-5" src="./app/assets/icons/insta.svg" alt="Instagram" />
          <p className="ml-2 text-paragraph-h3">Instagram</p>
        </div>
      </div>

      <div className="bg-background flex justify-between items-center">
        <div className="col flex ps-10">
          <img src="./app/assets/img/logoDacas.png" alt="" />
        </div>

        <div className="col flex pe-10 gap-5">
          <Button text="Nosotros"onClick={handleClick} variant="header" />
          <Button text="Servicios" onClick={handleClick} variant="header" />
          <Button text="Noticias" onClick={handleClick} variant="header" />
          <Button text="Contacto" onClick={handleClick} variant="headerSecondary" />
        </div>
      </div>
    </div>
  );
}

export default Header;
