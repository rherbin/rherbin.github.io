import Image from 'next/image'

export default function Cv(){
    return (
        <div className="grid grid-cols-5">
            <div className="col-start-2 col-span-3 width-[720px] text-5xl border-2 rounded-xl justify-center">
                <Image width={100} height={100} src="/thispersondoesnotexist.jpg"></Image>
            </div>
        </div>
    )
}