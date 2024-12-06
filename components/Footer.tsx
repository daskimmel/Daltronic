
const sectionStyle = {
    width: "100%",
    backgroundImage: "url(/DaltronicFooter.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export default function Footer() {
    return (
        <div style={sectionStyle} className="w-full bottom-0 h-[200px] lg:h-[300px] xl:h-[300px]">
            <div className="p-4 flex flex-col justify-between h-3/4">
                <h2 className="text-4xl">Contact</h2>

                <div>
                    <div className="text-gray-400">
                        (720) 334-8094
                    </div>
                    <div className="text-gray-400">
                        dallas@daltronic.com
                    </div>
                </div>

                <div className="mt-2">
                    <button className="bg-[#2bb673] p-4 rounded-md hover:bg-[#009d51]">GET IN TOUCH</button>
                </div>
            </div>
        </div>
    );
}
