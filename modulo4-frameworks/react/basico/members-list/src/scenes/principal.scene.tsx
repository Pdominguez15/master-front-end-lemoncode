import React from "react";
import { ListMembersContainer } from "pods/members-list";
import { CenteredLayout } from "layout/centerLayout";

export const PrincipalScene: React.FC = () => {
  return (
    <CenteredLayout>
      <ListMembersContainer />
    </CenteredLayout>
  );
};
