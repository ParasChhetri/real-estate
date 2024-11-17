
export const Footer = () => {
    return(
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <span className="text-2xl text-white">RE</span>
                    <p className="text-white text-justify mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique, temporibus beatae ab error facere ut at omnis quas deleniti recusandae saepe unde tempore nobis vero totam aspernatur rem eaque.
                    </p>
                </div>
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-white">
                        <a href="#Header" className=" hover:text-red-600">Home</a>
                        <a href="#About" className="hover:text-red-600">About</a>
                        <a href="#Contact" className="hover:text-red-600">Contact us</a>
                        <a href="#" className="hover:text-red-600">Privacy policy</a>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
                <p className="text-white mb-4 max-w-80">Latest updates, articles, and resources sent to your inbox weekly.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"/>
                    <button type="button" className="py-2 px-4 rounded bg-blue-700 text-white">Subsribe</button>
                </div>
                </div>
            </div>
            <div className="border-t border-gray-500 py-4 mt-10 text-center text-white">
                <p>Copyright 2024 © Paras Chhetri. All rights reserved.</p>
                <p>Made by Paras Chhetri</p>
            </div>
        </div>
    );
}
