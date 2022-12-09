import { ref } from 'vue';
import axios from 'axios';

const useAxios = (url, options = {}) => {
  const data = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async() => {
    try {
      loading.value = true;
      const response = await axios(url, options);
      data.value = response.data;
    } catch (err) {
      error.value = err.message;
      loading.value = false;
      console.log(error.value);
    }
  };
  fetchData();

  return { data, loading, error, fetchData };
};

export default useAxios;
