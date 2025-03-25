const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      personDetails: {
        description: "",
        properties: {},
      },
      vehicles: [],
      vehicleDetails: {
        description: "",
        properties: {},
      },
      planets: [],
      planetDetails: {
        description: "",
        properties: {},
      },
      store: [],
      favorites: [],
    },
    actions: {
      getPeople: async () => {
        const response = await fetch("https://www.swapi.tech/api/people/");
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ people: data.results });
      },

      getPeopleDetails: async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        const personalDetails = {
          description: data.result.description,
          properties: { ...data.result.properties },
        };
        setStore({ personDetails: personalDetails });
      },

      getVehicles: async () => {
        const response = await fetch("https://www.swapi.tech/api/vehicles/");
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ vehicles: data.results });
      },

      getVehicleDetails: async (id) => {
        const response = await fetch(
          `https://www.swapi.tech/api/vehicles/${id}`
        );
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        const updatedVehicleDetails = {
          description: data.result.description,
          properties: { ...data.result.properties },
        };
        setStore({ vehicleDetails: updatedVehicleDetails });
      },

      getPlanets: async () => {
        const response = await fetch("https://www.swapi.tech/api/planets/");
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ planets: data.results });
      },

      getPlanetsDetails: async (id) => {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${id}`
        );
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        const updatedPlanetDetails = {
          description: data.result.description,
          properties: { ...data.result.properties },
        };
        setStore({ planetDetails: updatedPlanetDetails });
      },

      addFavorite: (favoriteItem) => {
        const store = getStore();
        store.favorites.push(favoriteItem);
        setStore(store);
      },

      removeFavorite: (deletedFavorite) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (item) => item !== deletedFavorite
        );
        setStore({
          favorites: updatedFavorites,
        });
      },
    },
  };
};

export default getState;
