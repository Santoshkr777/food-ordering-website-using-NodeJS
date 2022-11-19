import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    The online food ordering business also allows customers to order their
                     food beforehand, and the system will put in place the order at 
                    a specific time. Online ordering is easy, yet they have to improve 
                    more on their online ordering system.
                    The biggest advantage of ordering online is that the customer can save a
                     lot of time and effort. So it is essential
                     to have some best catchy food delivery slogans.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}