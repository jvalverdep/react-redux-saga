import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../common/interfaces/root-state";
import { RandomPlayer } from "../../components";
import { getPlayerRequest } from "../../store/reducers/player/actions";
import "./RandomPlayer.container.css";

export default function RandomPlayerContainer() {
  const dispatch = useDispatch();
  const { value, error, loading } = useSelector(
    (state: IRootState) => state.playerReducer.randomPlayer
  );

  function renderRandomPlayer() {
    if (loading) {
      return <div data-testid="loading">Loading...</div>;
    } else if (error) {
      return <div data-testid="error">Error: {error}</div>;
    }
    return value && <RandomPlayer player={value} />;
  }

  return (
    <>
      <div className="container-btn">
        <Button
          data-testid="get-player-btn"
          onClick={() => dispatch(getPlayerRequest())}
          variant="contained"
          color="primary"
        >
          Get Random Player
        </Button>
      </div>
      {renderRandomPlayer()}
    </>
  );
}
