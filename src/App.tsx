import  Navbar  from "./components/navbar";
import { MantineProvider } from "@mantine/core";
const links = [{
link: "/" , label: "Home" , key: "home"
}, {
link: "/developers" , label: "Developers" , key: "developers"
},{
link: "https://github.com/itchatapp/" , label: "GitHub" , key: "github"
}, {
link: "/contact" , label: "Contact" , key: "Contact"
}]

function App(){
  return (
    <>
  <MantineProvider theme={{ colorScheme: 'dark' }} >
    <Navbar links={links}/>
    <div className="shadow"></div>
    </MantineProvider>
    </>

  )
}

export default App;
