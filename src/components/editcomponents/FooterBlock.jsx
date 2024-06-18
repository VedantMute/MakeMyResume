import React from 'react';

const FooterItem = ({ text, link }) => {
    return (
        <li>
            <a href={link}>
                {text}
            </a>
        </li>
    );
};

const footerItems = [
    {
        id: 1,
        text: "Disclaimer |",
        link: "disclaimer"
    },
    {
        id: 2,
        text: "Feedback",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScvUx9b7fSmMUZAqH5S_tkSrq13hlmL9EB7NmPm3BNMBGP8yA/viewform?usp=sf_link"
    }
];

const FooterBlock = () => {
    return (
        <footer className="pt-2 courier-prime-regular">
            <div className="bg-gray-200  pt-12 px-4 sm:px-10 md:px-12 lg:px-8">
                <div className="max-w-7xl mx-auto text-bold ml-0 px-6 lg:ml-auto text-center lg:text-left">Crafted with 💖 by<br />
                    <a href="https://www.github.com/VedantMute/VedantMute" className="text-3xl text-gray-700 font-semibold">Vedant Mute</a>
                </div>
                <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-y-5 py-3 mt-3 border-t border-t-gray-300 px-6">
                    <p className="text-gray-700 ">
                        &copy; 2024 Make My Resume 
                    </p>
                    <nav>
                        <ul className="flex items-center gap-x-5 text-gray-800 ">
                            {
                                footerItems.map(footerItem => (
                                    <FooterItem key={footerItem.id} {...footerItem} />
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default FooterBlock;
