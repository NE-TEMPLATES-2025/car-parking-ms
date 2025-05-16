import LeftBar from "@/components/LeftBar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-row max-w-5xl">
      <div className="w-[15%] h-full">
        <LeftBar/>
      </div>

      <div className="w-[85%] h-full">
        <Outlet/>
      </div>
      
    </main>
  )
}

export default RootLayout
