import Image from "next/image";

function FooterCredit({ name, href, imgsrc, imgalt }: {name: string; href: string; imgsrc?:string; imgalt?:string}) {
    return (
        <a
            href={href}
            className="text-xs w-max"
            target="_blank"
            rel="noopener noreferrer"
        >   
            {(imgsrc&&imgalt)?<Image src={imgsrc} alt={imgalt}/>:""}
            {name}
        </a>
    );
}

function FooterCreditBox({children}: {children: React.ReactNode[]}) {
    let inner = Array(children.length*2 + 1).fill(0).map((val, ind, arr) => {
        if (ind % 2 === 0) {
            return <span key={ind} className="text-xs w-max">|</span>;
        } else {
            return children[(ind-1)/2];
        }
    });
    return <div className="flex flex-row w-4/5 justify-between p-1">{inner}</div>;
}
export function Footer() {
  return <footer className=" h-max w-full flex flex-col items-center p-3">
    <Image src="../../public/logo/logo.svg" alt="LO9UD Logo" width={64} height={64} />
    <FooterCreditBox>
      <FooterCredit name="Next.js" href="https://nextjs.org/" />
      <FooterCredit name="Tailwind CSS" href="https://tailwindcss.com/" />
      <FooterCredit name="Heroicons" href="https://heroicons.com/" />
    </FooterCreditBox>
    <span className="text-xs w-max">© {new Date().getFullYear()} Adam Kent</span>
    </footer>;
}
