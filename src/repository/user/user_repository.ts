import { api } from "../api";

export function getUserAdoptedPets(token: string) {
  try {
    const response = api.get(`/user/pets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export function getUserSavedPets(token: string) {
  try {
    const response = api.get(`/user/pets/saved`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

// export function getUserInfo(token: string) {
//   try {
//     const response = api.get(`/user`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// }
