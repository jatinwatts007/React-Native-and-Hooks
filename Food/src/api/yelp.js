import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer _bMbZx8YohoJUzHZgbvMJvAENvXT0q0uNzUon3tYqgU9y04XnSvLTCoA9-va_qEBh9AM0q1YtkNe_FQEoLjqd9_LLZXd0-TSGyfbkD7Q6VR16iPtWopSAT2SpUvOXnYx',
  },
});
