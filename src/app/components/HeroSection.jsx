import Image from "next/image";

export default function HeroSection() {
    return (
        <>
            <div className="relative h-[320px] w-full top-0 overflow-hidden">
                <Image
                    src="/assets/background-image.jpg" 
                    alt="Hero Background"
                    fill
                    objectFit="cover"
                    priority
                    className="z-0"
                />
                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/100 to-transparent z-10"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center text-black py-10 bg-white z-20 mt-4">
                <h1 className="text-5xl font-bold mb-4 text-blue-500">Calm your mind. Change your life.</h1>
                <p className="text-lg mb-8">The #1 app for sleep, meditation, and relaxation</p>
                <div className="flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg">
                        Try Calm for Free
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-3 px-10 rounded-full text-lg shadow-lg">
                        Already have an account?
                    </button>
                </div>
            </div>
        </>
    );
}
