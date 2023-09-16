const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const createEndpoint = (endpoint: string): string => `${DEFAULT_BASE_URL}/${endpoint}`;

const APIEndpoints: ApiEndpoints = {
  api: {
    notion: {
      users: createEndpoint('api/notion/users'),
      posts: createEndpoint('api/notion/posts'),
    },
  },
};

export default APIEndpoints;
