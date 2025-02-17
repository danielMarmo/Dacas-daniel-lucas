function Header() { 
    return (
      <div>
        <div>
          <div className="bg-primary text-white flex justify-between items-center h-10">
            <div className="col flex ml-4">
              <img className="w-5 h-5" src="./app/assets/icons/envelope.svg" alt="" />
              <p className="ml-2 text-paragraph-h3">info@dacasmarketing.online</p>   
              <img className="ml-10 w-5 h-5" src="./app/assets/icons/phone.svg" alt="" />
            <p className="ml-2 text-paragraph-h3">+34 621 52 47 01</p>
            </div>
  
            <div className="col flex mr-4">
              <img className="w-5 h-5" src="./app/assets/icons/linkedin.svg" alt="LinkedIn" />
              <p className="ml-2 mr-10 text-paragraph-h3">LinkedIn</p>
  
              <img className="w-5 h-5" src="./app/assets/icons/insta.svg" alt="Instagram" />
              <p className="ml-2 text-paragraph-h3">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  