import axios from "axios";

import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const response = await axios.get<Billboard>(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching billboard:", error);
    throw error;
  }
};

export default getBillboard;
