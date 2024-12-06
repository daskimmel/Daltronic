const logoContainerStyle = {
    width: "200px",
    backgroundImage: "url(/daltronic-with-tagline.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};


export default function Header() {
    return (
        <div className="p-8">
            <div className="w-full flex justify-between pb-8">
                <span>Daltronic LLC</span>
                <button className="bg-[#2bb673] p-4 border-md hover:bg-[#009d51]">GET IN TOUCH</button>
            </div>
            <div className="w-full flex justify-between">
                <div className="w-[50%] ml-4" style={logoContainerStyle}>
                </div>
                <div className="w-[50%]">
                    <div className="text-4xl leading-relaxed text-right">EXPERIENCED AUTOMATION & CONTROLS INTEGRATION</div>
                </div>
            </div>
        </div>
    );
}
