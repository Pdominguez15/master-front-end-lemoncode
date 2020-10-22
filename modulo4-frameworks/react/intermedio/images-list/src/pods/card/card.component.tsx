import React from "react";

//Modelo
import { Article } from "./card.vm";

//Componentes material UI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
    width: "100%",
  },
  action: {
    justifyContent: "center",
  },
}));

interface Props {
  article: Article;
  cart: boolean;
  onBuy?: (id: string, checked: boolean) => void;
  onDelete?: (id: string) => void;
}

export const CardComponent: React.FunctionComponent<Props> = (props) => {
  //Props
  const { article, cart, onBuy, onDelete } = props;

  //Separar propriedades props
  const { id, checked, css, title, image } = article;

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  const handleBuy = (event) => {
    onBuy(event.target.value, event.target.checked);
  };

  const handleDelete = (id) => () => {
    onDelete(id);
  };

  return (
    <Card className={css.root}>
      <CardHeader
        title={title}
        classes={{ content: css.title, title: css.titleSpan }}
      />

      <CardMedia className={classes.media} image={image} />

      <CardActions className={classes.action}>
        {!cart && (
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleBuy}
                name="checkboxBuy"
                color="primary"
                value={id}
              />
            }
            label="Buy"
          />
        )}

        {cart && (
          <IconButton aria-label="delete" onClick={handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
