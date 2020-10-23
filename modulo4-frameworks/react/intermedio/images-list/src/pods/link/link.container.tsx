import React from "react";

//Componentes
import { LinkComponent } from "./link.component";

//Modelo
import { LinkVM, ClassesProp } from "./link.vm";

//CSS
import * as classesPropias from "./link.styles";

interface Props {
  link: LinkVM;
}

export const LinkContainer: React.FunctionComponent<Props> = (props) => {
  const { link } = props;

  const [myLink, setmyLink] = React.useState<LinkVM>({
    category: "",
    to: "",
    css: {
      category: "",
      link: "",
    },
  });
  React.useEffect(() => {
    const css: ClassesProp = {
      category: classesPropias.category,
      link: classesPropias.link,
    };
    const myLink = {
      ...link,
      css,
    };
    setmyLink(myLink);
  }, [link]);

  return (
    <>
      <LinkComponent link={myLink} />
    </>
  );
};
