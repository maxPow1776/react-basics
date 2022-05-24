import { List, Button, Divider } from "antd";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AnimalsService from "../API/AnimalsService";
import { useFetching } from "../hooks/useFetching";

const Info: React.FC = () => {
  const params = useParams();
  const [info, setInfo] = useState<string[]>([]);
  const [mainInfo, setMainInfo] = useState<{ type: string; name: string }>({
    type: "",
    name: "",
  });

  const [fetchAnimalById, isAnimalLoading, error] = useFetching(async () => {
    const animal = await AnimalsService.getAnimalById(params.id);
    const animalInfo: string[] = [];
    if (animal) {
      if (animal.age) animalInfo.push(`Age: ${animal.age}`);
      if (animal.city) animalInfo.push(`City: ${animal.city}`);
      if (animal.price) animalInfo.push(`Price: ${animal.price}`);
      if (animal.color) animalInfo.push(`Color: ${animal.color}`);
      if (animal.favoriteFood)
        animalInfo.push(`Favorite food: ${animal.favoriteFood.join(", ")}`);
      setInfo(animalInfo);
      setMainInfo({ type: animal.type, name: animal.name });
    }
  });

  useEffect(() => {
    fetchAnimalById();
  }, []);

  return (
    <>
      {error && <h1>Произошла ошибка ${error}</h1>}
      {isAnimalLoading && <h2>Loading...</h2>}
      <Divider orientation="left">Animal</Divider>
      <List
        header={
          <>
            <div>Type: {mainInfo.type}</div>
            <div>Name: {mainInfo.name}</div>
          </>
        }
        bordered
        dataSource={info}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <NavLink to="/">
        <Button style={{ marginTop: 15 }}>Home</Button>
      </NavLink>
    </>
  );
};

export default Info;
