import type { NextPage } from "next";
import { Suspense } from "react";
import { useListPets } from "../api/api";

const Home: NextPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Contents />
    </Suspense>
  );
};

const Contents = () => {
  const { data } = useListPets();

  if (!data) return null;

  return <pre>{JSON.stringify(data.data, null, 4)}</pre>;
};

export default Home;
