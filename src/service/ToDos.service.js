import http from "./http-common";

class ToDosService {
  GetAllData() {
    return http.get("/ToDo");
  }

  get(id) {
    return http.get(`/ToDo/${id}`);
  }

  create(data) {
    return http.post("/Todo", data);
  }

  update(id, data) {
    return http.put(`/ToDo/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ToDo/${id}`);
  }

  
}

export default new ToDosService();