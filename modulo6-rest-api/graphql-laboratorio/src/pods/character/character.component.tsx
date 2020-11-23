import React from 'react';
import { Formik, Form } from 'formik';

//Modelo
import { Character } from './character.vm';

//Componente
import { TextFieldComponent } from 'common/components';

//Material ui
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import InputAdornment from '@material-ui/core/InputAdornment';

//CSS
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <TextFieldComponent
            name="status"
            label="Status"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <TextFieldComponent
            name="species"
            label="Species"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <TextFieldComponent
            name="gender"
            label="Gender"
            inputProps={{
              readOnly: true,
              disabled: true,
            }}
          />

          <TextFieldComponent
            name="commentary"
            label="Commentary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
