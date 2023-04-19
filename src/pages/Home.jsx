import { toast } from "react-toastify";
import Nav from "../components/nav"
import Banner from "../components/banner"
import Summary from "../components/summary"
import List from "../components/list"
import Footer from "../components/footer"

export async function homeAction({request}) {
  const data = await request.formData()
  const {_action, ...values} = Object.fromEntries(data)

  console.log(values)
  return toast.success(`Recipe Card created!`)
}

const Home = () => {
  return (
    <div className="home">
      <Nav/>
      <Banner/>
      <Summary/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Home
