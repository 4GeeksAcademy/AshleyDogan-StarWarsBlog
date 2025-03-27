import { json } from "react-router";

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
        const store = getStore();
        if (store.people <= 0) {
          const response = await fetch("https://www.swapi.tech/api/people/");
          const peopleArray = await response.json();
          console.log("here is your peopleArray.results", peopleArray.results);
          for (let details of peopleArray.results) {
            const detailsResponse = await fetch(details.url);
            const detailsPerson = await detailsResponse.json();
            setStore({ people: [...store.people, detailsPerson.result] });
            // console.log("people from set store", store.people);
          }
          localStorage.setItem("people", JSON.stringify(store.people));
        }
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
        return personalDetails;
      },

      getVehicles: async () => {
        const store = getStore();
        if (store.vehicles <= 0) {
          const response = await fetch("https://www.swapi.tech/api/vehicles/");
          const vehiclesArray = await response.json();
          for (let details of vehiclesArray.results) {
            const detailsVehicleResponse = await fetch(details.url);
            const detailsVehicle = await detailsVehicleResponse.json();
            setStore({ vehicles: [...store.vehicles, detailsVehicle.result] });
            console.log("vehicles from set store", store.vehicles);
          }
          localStorage.setItem("vehicles", JSON.stringify(store.vehicles));
        }
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
        return updatedVehicleDetails;
      },

      getPlanets: async () => {
        const store = getStore();
        if (store.planets <= 0) {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          const planetArray = await response.json();
          for (let details of planetArray.results) {
            const detailsResponse = await fetch(details.url);
            const detailsPlanet = await detailsResponse.json();
            setStore({ planets: [...store.planets, detailsPlanet.result] });
          }
          localStorage.setItem("planets", JSON.stringify(store.planets));
        }
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
