import { createClient } from 'contentful';

const Client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

  export default Client;
