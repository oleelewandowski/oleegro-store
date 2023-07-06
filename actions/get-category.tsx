import axios from "axios";
import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const response = await axios.get<Category>(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

export default getCategory;
