const logoContainerStyle = {
    backgroundImage: "url(/daltronic-with-tagline.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
};


export default function Header() {
    return (
        <div className="p-8">
            <div className="w-full flex justify-between pb-8">
                <span className="font-bold py-4">Daltronic LLC</span>
                <button className="bg-[#2bb673] p-4 border-md hover:bg-[#009d51]">GET IN TOUCH</button>
            </div>
            <div className="w-full flex justify-between flex-wrap">
                <div className="w-full lg:w-1/2 max-w-[200px] h-[150px]" style={logoContainerStyle}>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="text-4xl leading-relaxed text-center lg:text-right xl:text-right">EXPERIENCED AUTOMATION & CONTROLS INTEGRATION</div>
                </div>
            </div>
        </div>
    );
}
