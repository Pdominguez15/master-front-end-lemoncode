import React from "react";

//Componentes
import { SnackbarComponent } from "./snackbar.component";

interface Props {
  open: boolean;
  companyFilter: string;
}

export const SnackbarContainer: React.FC<Props> = (props) => {
  //Props

  const { open, companyFilter } = props;
  return (
    <>
      <SnackbarComponent open={open} company={companyFilter} />
    </>
  );
};
