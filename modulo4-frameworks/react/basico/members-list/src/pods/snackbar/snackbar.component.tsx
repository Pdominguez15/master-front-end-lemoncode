import React from "react";

//Componentes material UI
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  open: boolean;
  company: string;
}

export const SnackbarComponent: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(props.open);
  const [company, setCompany] = React.useState(props.company);

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  React.useEffect(() => {
    if (props.open) {
      setCompany(props.company);
      setOpen(props.open);
    } else {
      setOpen(false);
    }
  }, [props.open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          No existe la empresa {company}. Por favor, busque una nueva
          organización.
        </Alert>
      </Snackbar>
    </div>
  );
};
