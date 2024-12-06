
const sectionStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: "url(/DaltronicFooter.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export default function Footer() {
    return (
        <div style={sectionStyle} className="w-full sticky bottom-0">
            <div className="p-8 flex flex-col justify-between h-3/4">
                <h2 className="text-4xl">Contact</h2>

                <div>
                    <div className="text-gray-400">
                        (720)334-8094
                    </div>
                    <div className="text-gray-400">
                        dallas@daltronic.com
                    </div>
                </div>

                <div>
                    <button className="bg-[#2bb673] p-4 border-md hover:bg-[#009d51]">GET IN TOUCH</button>
                </div>
            </div>
        </div>
    );
}
