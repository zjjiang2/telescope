import React from 'react';

const FavIconContext = React.createContext(function noop() {});

export const FavIconProvider = FavIconContext.Provider;

export const useFavIcon = ({ icon }) => {
  const setFavIconFolder = React.useContext(FavIconContext);

  React.useEffect(() => {
    if (icon) {
      setFavIconFolder(icon);
    }

    return () => setFavIconFolder(null);
  }, []);
};
