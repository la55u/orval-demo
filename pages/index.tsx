import type { NextPage } from "next";
import { Suspense } from "react";
import { useListPets } from "../api/api";
import { ErrorBoundary } from "react-error-boundary";

const Home: NextPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<p>Loading...</p>}>
        <Contents />
      </Suspense>
    </ErrorBoundary>
  );
};

const Contents = () => {
  const { data } = useListPets();

  if (!data) return null;

  return <pre>{JSON.stringify(data.data, null, 4)}</pre>;
};

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default Home;
