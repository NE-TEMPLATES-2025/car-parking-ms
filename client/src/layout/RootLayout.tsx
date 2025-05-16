import LeftBar from "@/components/LeftBar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-row max-w-5xl">
      <div className="w-[20%] h-full pr-6">
        <LeftBar/>
      </div>

      <div className="w-[80%] h-full">
        <Outlet/>
      </div>
      
    </main>
  )
}

export default RootLayout
