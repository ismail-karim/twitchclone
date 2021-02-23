import axios from "axios";

let api = axios.create({
    headers: {
        'Client-ID' : 'ugncrh5xxzbx5sd5chv34e0c8rx5hx',
        'Authorization' : 'Bearer 2adjb0cw6d3u0damf9dwzm3zu3cava'
    }
})
/*
CLIENT_ID = i6idfoh4bv9f2i3brj1ztzpg8keqz7
REDIRECT = 'http://127.0.0.1/'
 LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token
LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=ugncrh5xxzbx5sd5chv34e0c8rx5hx&redirect_uri=http://localhost&response_type=token
2adjb0cw6d3u0damf9dwzm3zu3cava
 */
export default api;
