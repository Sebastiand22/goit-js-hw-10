// Importă Axios și Notiflix
import axios from 'axios';
import Notiflix from 'notiflix';

// Setează cheia de autentificare
const API_KEY = 'live_KC7xvB2UdP1OrUZ3pc4mD62vuVXHo60KRrFsQShIaOeinXXLqh4Yp2aFMAxrpucG';
axios.defaults.headers.common['x-api-key'] = API_KEY;

// Funcția pentru a obține lista de rase:
export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure('Failed to fetch breeds');
      console.error('Failed to fetch breeds', error);
    });
}
// Funcția pentru a obține informații despre pisică în funcție de breedId:
export function fetchCatByBreed(breedId) {
    return axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure('Failed to fetch cat information');
        console.error('Failed to fetch cat information', error);
      });
  }
  

