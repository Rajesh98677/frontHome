import axios from "axios";

const API = axios.create({ baseURL: "https://backend-30ip.onrender.com" });

// const url ='http://localhost:5000/rentals';

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchrental = (id) => API.get(`/rentals/${id}`);
export const fetchRentalsBySearch = (searchQuery) =>
  API.get(
    `/rentals/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

export const fetchRentals = (page) => API.get(`/rentals?page=${page}`);
export const createRental = (newRental) => API.post("/rentals", newRental);
export const contact = (newContact) => API.post("/contact", newContact);
export const service = (newService) => API.post("/service", newService);
export const updateRental = (id, updatedRental) =>
  API.patch(`/rentals/${id}`, updatedRental);

export const likePost = (id) => API.patch(`/rentals/${id}/likePost`);
export const allRentals = () => API.get("/allRentals");
export const allUsers = () => API.get("/allUsers");

export const signUp = (formData) => API.post("/user/signup", formData);
export const signIn = (formData) => API.post("/user/signin", formData);
export const adminSignUp = (formData) => API.post("/admin/asignup", formData);
export const adminSignIn = (formData) => API.post("/admin/asignin", formData);
export const deleteRental = (id) => API.delete(`/rentals/${id}`);

// export function fetchRentals() {
//     throw new Error('Function not implemented.');
// }
