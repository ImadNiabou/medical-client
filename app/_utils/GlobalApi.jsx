const { headers } = require("next/headers");
const { default: axios } = require("axios");
const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getDoctorList = () => axiosClient.get("/doctors?populate=*");
const getDoctorByCategory = (category) =>
  axiosClient.get(
    "/doctors?filters[category][Name][$in]=" + category + "&populate=*"
  );

const getDoctorById = (id) => axiosClient.get("/doctors/" + id + "?populate=*");

const bookAppointment = (data) => axiosClient.post("/appointments", data);

const getUserBookingList = (userEmail) =>
  axiosClient.get(
    "/appointments?[filters][Email][$eq]=" +
      userEmail +
      "&populate[doctor][populate][Image][populate][0]=url&spopulate=*"
  );

const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);

export default {
  getCategory,
  getDoctorList,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
  deleteBooking,
};
