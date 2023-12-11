import { useState, useEffect } from "react";

function withDataFetch(WrappedComponent, fetchData) {
  return function (props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const data = await fetchData(props);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}


export default withDataFetch;