import axios from 'axios';

export default function fetch() {
    return axios({
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                appid: "ea621eaf28bddbc4794ca4324f83e77e",
                q: "manchester"
            }
        })
        .then(function(response) {
            console.log(response.data.main.temp);
        })
        .catch((error) => {
            console.error(error);
        });
}