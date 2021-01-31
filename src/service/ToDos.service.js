import http from "./http-common";

class ToDosService {
  GetAllData() {
    return http.get("/ToDo/GetAllData");
  }

  get(id) {
    return http.get(`/ToDo/GetDataById?Id=${id}`);
  }

  create(data) {
    return http.post("/Todo/AddData", data);
  }

  update(id, data) {
    return http.put(`/ToDo/UpdateData/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new ToDosService();