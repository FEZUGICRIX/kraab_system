import axios from 'axios';

export const clientDataEmail = async (formData) => {
  try {
    const url = 'https://kraabmod.fi/api/clientDataEmail.php';

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
