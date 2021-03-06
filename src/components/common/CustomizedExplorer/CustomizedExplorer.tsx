import React from "react";
import {
  Container,
  SemanticShorthandItem,
  Tab,
  TabPaneProps,
} from "semantic-ui-react";
import { color } from "^@styles/global";

export interface CustomizedExplorerProps {
  panes: {
    pane?: SemanticShorthandItem<TabPaneProps>;
    menuItem?: any;
    render?: () => React.ReactNode;
  }[];
}

export const CustomizedExplorer = ({ panes }: CustomizedExplorerProps) => {
  return (
    <div style={{ marginTop: "2em", minHeight: "800px" }}>
      <Container fluid>
        <Tab
          menu={{
            fluid: true,
            vertical: true,
            tabular: true,
          }}
          panes={panes}
        />
      </Container>
    </div>
  );
};
