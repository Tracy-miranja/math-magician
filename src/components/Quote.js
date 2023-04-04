import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as id } from 'uuid';

const loadingMessage = <p>Waiting for data loading....</p>;
const errorMessage = <p>Oops, something went wrong!!!</p>;

const Apps = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const quotesApi = async () => {
    setIsLoading(true);
    try {
      fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 'FSvXTjxiPe8a+r73Jt+dLQ==j1LfG5Zfc7QrFBl8',
        },
      })
        .then((Response) => Response.json())
        .then((data) => {
          setQuotes(data);
        });
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    quotesApi();
  }, [setQuotes, setIsLoading]);
  return (
    <>
      <h1>Math Magicians</h1>
      <div className="quotesbox">
        {isLoading ? loadingMessage : null}
        {hasError ? errorMessage : null}
        {quotes && Array.isArray(quotes)
        && quotes.map((data) => (
          <div key={id()}>
            <h1>
              {data.quote}
              {' '}
              -
              {' '}
              {data.author}
            </h1>
            {/* <h3 /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Apps;
