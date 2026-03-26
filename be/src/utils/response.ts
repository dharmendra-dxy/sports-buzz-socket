import { Response } from "../types/response.types";

const response = ({success, data, message, error}: Response) => {
  return {success, data, message, error}
}

export default response;