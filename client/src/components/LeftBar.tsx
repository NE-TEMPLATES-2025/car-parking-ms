import { data } from "@/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button";

const LeftBar = () => {
    const [isActive,setIsActive]= useState("Dashboard");
    console.log(isActive)
    

  return (
    <div className="w-full min-h-screen pt-4 pb-12 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-4">
            <div className="w-full px-6">
             <h2 className="text-3xl font-bold">CarPark</h2>
            </div>

            <div className="w-full flex flex-col gap-4">
                {data.navBarLinks.map((link)=>(
                    <Link 
                    onClick={()=>setIsActive(link.title)}
                    key={link.id} 
                    to={link.route}>
                        <div className={`w-full pl-6 py-2 ${isActive === link.title ? "bg-blue-300/10 ": "bg-transparent"} flex gap-3 items-center`}>
                        {link.icon}
                        <h4>{link.title}</h4>
                           
                        </div>
                    </Link>
                ))}
            </div>

        </div>

        <div className="w-full px-6 flex flex-col gap-4">
            <Link to="/settings">
            <div className="w-full flex gap-3">
                <img src="" alt=""/>
                <h4>Settings</h4>
            </div>
            </Link>
            <Link to="/login">
            <div className="w-full flex gap-3">
                <img src="" alt=""/>
                <h4>Log out</h4>
            </div>
            </Link>
            
        </div>
      
    </div>
  )
}

export default LeftBar
