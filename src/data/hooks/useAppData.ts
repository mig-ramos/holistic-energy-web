import { useContext } from "react";
import AppContext from "@/data/contexts/app/AppContext";

const useAppData = () => useContext(AppContext)

export default useAppData;