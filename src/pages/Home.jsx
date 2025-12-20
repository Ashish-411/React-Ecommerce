import HeroSection from "../components/HeroSection";
import FeatureProduct from "../components/FeatureProduct";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

function Home(){
    const data={
        name: "Easy Store",
    }
    return(
        <>
        <HeroSection myData={data}/>
        <FeatureProduct/>
        <Services/>
        <Trusted/>
        </>
    );
};
export default Home;