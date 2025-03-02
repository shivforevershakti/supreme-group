import { Header } from "./component/Header";
import { ContactUs } from "./component/ContactUs";
import { Footer } from "./component/Footer";
import { MainComponent } from "./component/MainComponent";
import SliderComponent from "./component/SliderComponent";



export default function Home() {
  return (
    <div className="">
     <Header/>
     <MainComponent/>
     <SliderComponent/>
     <ContactUs/>
     <Footer />
    </div>
  );
}
