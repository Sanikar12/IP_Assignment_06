import Navbar from "../components/Navbar"
import Hero from "../components/Props"
import what from "../components/assets/what.avif"
import Contact from "../components/contactm"



function Service(){
    return(
        <>
        <Navbar/>
        <Hero
        myname ="<>Sanika Rane<>"
        cName="heromid"
        heroImg={what}
        title="Contact Me"
        btnClass="hide"
        />
      <center><Contact/></center>  
        </>
    )
}

export default Service;