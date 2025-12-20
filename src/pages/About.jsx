import HeroSection from "../components/HeroSection";
function About(){
    const data={
            name: "Easy Ecommerce",
        }
    return(
        <>
            <HeroSection myData={data}/>
        </>
    );
}
export default About;