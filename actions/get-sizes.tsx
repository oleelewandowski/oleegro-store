import { Size } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const response = await axios.get<Size[]>(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching sizes:", error);
    throw error;
  }
};

export default getSizes;
