import useAuthContext from "@/hooks/useAuthContext"
import { Input } from "./ui/input"
import { MdSearch} from "react-icons/md"
const TopBar = () => {
  const {user}= useAuthContext();
  return (
    <div className="w-full h-[70px] bg-white flex px-6 justify-between items-center">
            <div className="w-[300px] h-[30px] relative flex items-center">
                <Input 
                placeholder="Search here"
                className="max-w-full max-h-full bg-transparent shadow-none px-3"/>
                
                <MdSearch className="absolute mr-2 right-0 cursor-pointer"/>

            </div>

            <div className="flex gap-4 items-center">
                <p className="text-[16px]">Hello, <span className="font-semibold">{user?.name}</span></p>
                {/* Image here */}
            </div>

      
    </div>
  )
}

export default TopBar
