import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Naviguation from "../components/Naviguation";

const Home = () => {
    return (
        <div className="home">
            <Naviguation></Naviguation>
            <Logo></Logo>
            <h1> Accueil</h1>
            <Countries></Countries>

        </div>
    )
}

export default Home;