import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import antipasto from "../../asset/img/antipasto.png";
import primo from "../../asset/img/pasta.png";
import bevanda from "../../asset/img/beverage.png";
import carne from "../../asset/img/steak.png";
import dolce from "../../asset/img/dessert.png";
import contorno from "../../asset/img/dish.png";
import pizza from "../../asset/img/pizza.png";
import insalata from "../../asset/img/insalata.png";
import pesce from "../../asset/img/pesce.png";
import zuppa from "../../asset/img/zuppa.png";
import secondo from "../../asset/img/secondo.png";
import beer from "../../asset/img/beer.png";
import gelato from "../../asset/img/gelato.png";
import bar from "../../asset/img/bar.png";
import sandwich from "../../asset/img/sandwich.png";
import caffetteria from "../../asset/img/caffetteria.png";
import aperitivo from "../../asset/img/aperitivo.png";
import { RootState, WardItem } from "@/types/state";

const GroupButton: React.FC = () => {
  const reparti = useSelector((state: RootState) => state.menu.ward);

  return (
    <Container fluid className="d-flex flex-column gap-2 m-0 p-0">
      {reparti &&
        reparti.length > 0 &&
        reparti.map((dish: WardItem) => (
          <Link
            key={dish.id}
            to={dish.id.toString()}
            smooth={true}
            offset={-135}
            duration={100}
          >
            <div className="btn-group d-flex gap-3">
              {dish.name.toLowerCase().includes("antipasto") ||
              dish.name.toLowerCase().includes("antipasti") ? (
                <Image width={60} src={antipasto.src} />
              ) : dish.name.toLowerCase().includes("primo") ||
                dish.name.toLowerCase().includes("primi") ||
                dish.name.toLowerCase() === "cucina" ? (
                <Image width={60} src={primo.src} />
              ) : dish.name.toLowerCase().includes("secondi") ||
                dish.name.toLowerCase().includes("secondo") ? (
                <Image width={60} src={secondo.src} />
              ) : dish.name.toLowerCase().includes("contorno") ||
                dish.name.toLowerCase().includes("contorni") ? (
                <Image width={60} src={contorno.src} />
              ) : dish.name.toLowerCase().includes("bevanda") ||
                dish.name.toLowerCase().includes("bevande") ||
                dish.name.toLowerCase().includes("bibita") ||
                dish.name.toLowerCase().includes("bibite") ? (
                <Image width={60} src={bevanda.src} />
              ) : dish.name.toLowerCase().includes("dolce") ||
                dish.name.toLowerCase().includes("dolci") ? (
                <Image width={60} src={dolce.src} />
              ) : dish.name.toLowerCase().includes("pesci") ||
                dish.name.toLowerCase().includes("pesce") ||
                dish.name.toLowerCase().includes("mare") ? (
                <Image width={60} src={pesce.src} />
              ) : dish.name.toLowerCase().includes("pizza") ||
                dish.name.toLowerCase().includes("pizze") ? (
                <Image width={60} src={pizza.src} />
              ) : dish.name.toLowerCase() === "insalata" ||
                dish.name.toLowerCase() === "insalate" ? (
                <Image width={60} src={insalata.src} />
              ) : dish.name.toLowerCase() === "carne" ||
                dish.name.toLowerCase() === "carni" ? (
                <Image width={60} src={carne.src} />
              ) : dish.name.toLowerCase() === "zuppa" ||
                dish.name.toLowerCase() === "zuppe" ? (
                <Image width={60} src={zuppa.src} />
              ) : dish.name.toLowerCase() === "birra" ||
                dish.name.toLowerCase() === "birre" ? (
                <Image width={60} src={beer.src} />
              ) : dish.name.toLowerCase() === "gelato" ||
                dish.name.toLowerCase() === "gelati" ? (
                <Image width={60} src={gelato.src} />
              ) : dish.name.toLowerCase().includes("bar") ? (
                <Image width={60} src={bar.src} />
              ) : dish.name.toLowerCase().includes("panini") ||
                dish.name.toLowerCase().includes("panino") ? (
                <Image width={60} src={sandwich.src} />
              ) : dish.name.toLowerCase().includes("caffetteria") ||
                dish.name.toLowerCase().includes("caffetterie") ? (
                <Image width={60} src={caffetteria.src} />
              ) : dish.name.toLowerCase().includes("aperitivo") ||
                dish.name.toLowerCase().includes("aperitivi") ? (
                <Image width={60} src={aperitivo.src} />
              ) : null}
              <span>{dish.name}</span>
            </div>
          </Link>
        ))}
    </Container>
  );
};
export default GroupButton;
