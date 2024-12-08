import Image from "next/image";

export default function Header() {
    return (
        <div className="p-4 lg:p-8 xl:p-8">
            <div className="w-full flex justify-between pb-8">
                <div className="font-bold pt-4 text-lg pl-0 lg:pl-8 xl:pl-8">Daltronic LLC</div>
                <a className="bg-[#2bb673] p-4 hover:bg-[#009d51] text-sm cursor-pointer h-[50px]" href="mailto:dallas@daltronic.com">
                    GET IN TOUCH
                </a>
            </div>
            <div className="w-full flex justify-between flex-wrap">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center lg:justify-start xl:justify-start pl-0 lg:pl-8 xl:pl-8">
                    <Image src="/static/daltronic-with-tagline.png" alt="daltronic-logo" width="200" height="128" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="block text-2xl lg:text-4xl xl:text-4xl !leading-normal text-center lg:text-right xl:text-right">
                        EXPERIENCED AUTOMATION<br/>
                        & CONTROLS INTEGRATION
                    </div>
                </div>
            </div>
        </div>
    );
}
