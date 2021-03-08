import "../sass/Entete.scss";
import photoProfil from "../img/avatars/raph_grece.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({

    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    extraLarge: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },


}));
export default function Entete(props) {

    const classes = useStyles();

    return (
        <section>
            <Avatar src={photoProfil} className={classes.extraLarge + " avatar"} alt="Raphael Jeudy">
            </Avatar>
            <div className="descPerso">
                <h1>Raphaël Jeudy</h1>
                <p>
                    Salut ! Je suis un jeune développeur de jeu ! Touche
                    à tout, je code, je design et j’expérimente avec plusieurs moteurs de jeu. Je crois que pour faire un bon
                    jeu, tous les éléments sont cruciaux : le son, les visuels autant qu’une bonne programmation bien faite
                    et optimisée !
                </p>
            </div>
        </section>

    );
}