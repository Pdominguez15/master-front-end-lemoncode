import * as React from 'react';

//Modelo
import { CharacterEntityVm } from '../character-collection.vm';

//Material
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

//CSS
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card className={classes.content}>
      <CardHeader
        title={character.id + ' ' + character.name}
        subheader={character.status}
      />
      <CardContent>
        <CardMedia
          image={character.image}
          title={character.name}
          style={{ height: 0, paddingTop: '56.25%' }}
        />
      </CardContent>
      <CardActions className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(character.id)}
        >
          Ver ficha personaje
        </Button>
      </CardActions>
    </Card>
  );
};
