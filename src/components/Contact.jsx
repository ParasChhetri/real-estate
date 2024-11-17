import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3f722370-89bb-4cc8-b53f-372f21bbd42f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form submission successfull")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };
    return (
        <motion.div initial={{opacity: 0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}} 
        viewport={{once: true}} className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-1 under font-light">us</span></h1>
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready to make a move? Let&apos;s build your future togeather</p>

            {/* form */}
            <form className="max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={onSubmit}>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Your name
                        <input type="text" placeholder="Your name" name="Name" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2"/>
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your email
                        <input type="email" placeholder="Your email" name="Email" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2"/>
                    </div>
                </div>
                <div className="my-6 text-left">
                    Write your message
                    <textarea name="Message" placeholder="Enter your message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"></textarea>
                </div>
                <button className="bg-blue-700 text-white px-12 py-2 mb-10 rounded">
                    {
                        result ? result : "Send"
                    }
                </button>
            </form>
        </motion.div>
    );
}
