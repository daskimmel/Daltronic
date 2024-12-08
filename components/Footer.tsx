
const sectionStyle = {
    width: "100%",
    backgroundImage: "url(/static/DaltronicFooter.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export default function Footer() {
    return (
        <div style={sectionStyle} className="w-full bottom-0 h-[200px] lg:h-[300px] xl:h-[300px]">
            <div className="p-8 flex flex-col justify-between h-3/4">
                <h2 className="text-4xl">Contact</h2>

                <div>
                    <div className="text-gray-400">
                        (720) 334-8094
                    </div>
                    <div className="text-gray-400">
                        dallas@daltronic.com
                    </div>
                </div>

                <div className="mt-8">
                    <a className="bg-[#2bb673] p-4 hover:bg-[#009d51] text-sm cursor-pointer" href="mailto:dallas@daltronic.com">
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </div>
    );
}
