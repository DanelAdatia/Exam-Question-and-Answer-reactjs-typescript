import { Card, CardContent } from "@mui/material";
import "./PageFormat.css";

export interface IAppProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const PageFormat = ({ children }: IAppProps) => {
  return (
    <div className="PageFormat">
      <Card className="CardFormat">
        <CardContent className="CardContentFormat">{children}</CardContent>
      </Card>
    </div>
  );
};

export default PageFormat;
