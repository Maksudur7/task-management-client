import Barner from "../Barner/Barner";
import DevelopYourExpreance from "../Develop Expreance/DevelopYourExpreance";
import Footer from "../Footer/Footer";
import HomeSlider from "../Sliders/HomeSlider";


const Home = () => {
    return (
        <div>
            <Barner></Barner>
            <HomeSlider></HomeSlider>
            <DevelopYourExpreance></DevelopYourExpreance>
            <Footer></Footer>
        </div>
    );
};

export default Home;