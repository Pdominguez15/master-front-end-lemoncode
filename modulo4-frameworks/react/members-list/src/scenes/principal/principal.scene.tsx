import React from "react";
import { ListMembersContainer } from "pods/list-members";
import { CenteredLayout } from "layout/centerLayout";

export const PrincipalScene: React.FC = () => {
  return (
    <CenteredLayout>
      <ListMembersContainer />
    </CenteredLayout>
  );
};
