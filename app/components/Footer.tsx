import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
    const handleClick = (text: string) => {
        console.log("Click" + text);
    };

    return (
        <footer className="bg-gray-100 text-primary py-10">
            <div className="mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <img src="./app/assets/img/logoDacas.png" alt="Dacas Marketing" className="h-12" />
                        <p className="text-paragraph-h1">Our vision is to provide convenience and help increase your sales business.</p>
                        <div className="flex gap-10">
                            <a href="#" className="text-xl">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-xl">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="text-xl">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-subtitle-h3">About</h3>
                        <ul className="space-y-2 text-paragraph-h1">
                            <li><a href="#" className="hover:underline">How it works</a></li>
                            <li><a href="#" className="hover:underline">Featured</a></li>
                            <li><a href="#" className="hover:underline">Partnership</a></li>
                            <li><a href="#" className="hover:underline">Business Relation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-subtitle-h3">Community</h3>
                        <ul className="space-y-2 text-paragraph-h1">
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Podcast</a></li>
                            <li><a href="#" className="hover:underline">Invite a friend</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-subtitle-h3">Socials</h3>
                        <ul className="space-y-2 text-paragraph-h1">
                            <li><a href="#" className="hover:underline">Discord</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 my-6"></div>

                <div className="flex flex-col md:flex-row justify-between text-paragraph-h1">
                    <p className="font-bold">©2022 Dacas Marketing. All rights reserved</p>
                    <div className="flex space-x-6 font-bold">
                        <a href="#" className="hover:underline">Privacy & Policy</a>
                        <a href="#" className="hover:underline">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Header;
