// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem('authToken', token);
    console.log('Token guardado correctamente');
  } catch (error) {
    console.log('Error al guardar el token:', error);
  }
};

const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.log('Error al obtener el token:', error);
  }
};

const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
    console.log('Token eliminado correctamente');
  } catch (error) {
    console.log('Error al eliminar el token:', error);
  }
};

export { saveAuthToken, getAuthToken, removeAuthToken };
