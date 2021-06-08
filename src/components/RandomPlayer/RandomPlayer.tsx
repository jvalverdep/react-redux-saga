import {
  Card,
  CardContent,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { IPlayer } from "../../common/interfaces/entities";

interface IProps {
  player: IPlayer;
}

const useStyles = makeStyles(() => ({
  root: {
    marginButton: 16,
  },
  general: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

function RandomPlayer(props: IProps) {
  const styles = useStyles();

  function renderGeneralInfo() {
    const { name, gender, picture } = props.player;
    return (
      <Card component={Paper} style={{ width: 400, margin: "auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            General
          </Typography>
          <div className={styles.general}>
            <div className="player-section-image">
              <img src={picture.medium} alt="" />
            </div>
            <div className="personal-info">
              <p>
                <strong>Title: </strong>
                {name.title}
              </p>
              <p>
                <strong>Sexo: </strong>
                {gender}
              </p>
              <p>
                <strong>Nombre: </strong>
                {name.first} {name.last}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  return <div className={styles.root}>{renderGeneralInfo()}</div>;
}

export default RandomPlayer;
