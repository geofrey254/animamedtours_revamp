import Navbar from "./Navbar";
import Hero from "./Hero";
import Jumbotron from "./Jumbotron";
import Us from "./Us";
import Why from "./Why";
import CTA from "./CTA";
import Social from "./Social";
import Foot from "./Foot";
import About_top from "./About_top";
import Partner from "./Partner";
import Activities from "./Activities";
import Services_top from "./Services_top";
import Service_one from "./Service_one";
import Service_two from "./Service_two";
import Service_three from "./Service_three";
import Contact_page from "./Contact_page";
import Contact_banner from "./Contact_banner";
import Script from "next/script";

export {
  Navbar,
  Hero,
  Jumbotron,
  Us,
  Why,
  CTA,
  Social,
  Foot,
  About_top,
  Partner,
  Activities,
  Services_top,
  Service_one,
  Service_two,
  Service_three,
  Contact_page,
  Contact_banner,
};

function Home() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V0M25W89MT" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V0M25W89MT');
        `}
      </Script>
    </div>
  );
}

export default Home;
