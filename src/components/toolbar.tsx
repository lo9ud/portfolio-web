import { HomeIcon, ChatBubbleLeftRightIcon, IdentificationIcon, FolderIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

function ToolbarButton({icon, title, href}:{icon:React.ReactNode, title:string, href:string}){
    return (
        <Link href={href} className="text-center basis-24 m-2 p-1">
        <div className="h-5">{icon}</div>
        <span>{title}</span>
        </Link>
    )
    
}

export function Toolbar() {
  return (
    <div className="flex flex-row justify-around items-center w-full h-min px-4 py-2">
        <ToolbarButton title="Home"     href="/"         icon={<HomeIcon className="w-full h-full"/>}               />
        <ToolbarButton title="Projects" href="/projects" icon={<FolderIcon className="w-full h-full"/>}             />
        <ToolbarButton title="About"    href="/about"    icon={<ChatBubbleLeftRightIcon className="w-full h-full"/>}/>
        <ToolbarButton title="Contact"  href="/contact"  icon={<IdentificationIcon className="w-full h-full"/>}     />
    </div>
    )
  }