import { List } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import AnimalsService from "../API/AnimalsService";
import { useFetching } from "../hooks/useFetching";
import { useAnimals } from "../hooks/useAnimals";

const Home: React.FC = () => {
  const [animals, setAnimals] = useState([]);
  const [withCats, setWithCats] = useState<boolean>(false);
  const sortedAnimals = useAnimals(animals, withCats);

  const [fetchAnimals, isAnimalsLoading, error] = useFetching(async () => {
    const response = await AnimalsService.getAllAnimals();
    setAnimals(response);
  });

  useEffect(() => {
    fetchAnimals();
  }, []);

  const hideCats = (): void => setWithCats((prev) => !prev);

  return (
    <>
      <Header hideCats={hideCats} withCats={withCats} />
      {error && <h1>Произошла ошибка ${error}</h1>}
      {isAnimalsLoading ? (
        <h2>Loading...</h2>
      ) : (
        <List
          grid={{ column: 3 }}
          dataSource={sortedAnimals}
          renderItem={(item: { id: number; type: string; name: string }) => (
            <CustomCard id={item.id} type={item.type} name={item.name} />
          )}
        />
      )}
    </>
  );
};

export default Home;
