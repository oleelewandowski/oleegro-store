import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const response = await axios.get<Color[]>(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching colors:", error);
    throw error;
  }
};

export default getColors;
