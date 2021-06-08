import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

interface CounterComponentProps {
  value: number;
  onAdd: () => void;
  onSubstract: () => void;
}

function Counter(props: CounterComponentProps) {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Actual
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.value}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={props.onSubstract}
        >
          -
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={props.onAdd}
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
}

export default Counter;
