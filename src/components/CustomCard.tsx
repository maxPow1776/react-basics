import { Button, Card } from "antd";
import { NavLink } from "react-router-dom";

type CustomCardProps = {
  id: number;
  type: string;
  name: string;
};

const CustomCard = (props: CustomCardProps) => {
  return (
    <Card
      title={`Animal ${props.id + 1}`}
      extra={
        <NavLink to={`/info/${props.id}`}>
          <Button type="primary">More Info</Button>
        </NavLink>
      }
      style={{ marginBottom: 20, width: 300 }}
    >
      <p>Type: {props.type}</p>
      <p>Name: {props.name}</p>
    </Card>
  );
};

export default CustomCard;
