import http from "./http-common";

class EmployeesService {
  GetAllData() {
    return http.get("/v1/employees");
  }

  get(id) {
    return http.get(`/v1/employee/${id}`);
  }

  create(data) {
    return http.post("/v1/create", data);
  }

  update(id, data) {
    return http.put(`/v1/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/v1/delete/${id}`);
  }

  
}

export default new EmployeesService();