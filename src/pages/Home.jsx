import Navbar from "../components/Navbar"
import { Outlet } from "react-router"

const Home = () => {

  return (
    <>
      <Navbar />
      <main style={{padding:"1rem"}}>
        <Outlet />
      </main>
    </>
  )
}

export default Home