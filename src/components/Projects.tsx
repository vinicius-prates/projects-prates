import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Card } from "./Card";
export type ProjectType = {
  id: string;
  name: string;
  description: string;
  leader: string;
  status: number;
  created_at: string;
};
export const Projects = () => {
   useEffect(() => {
    fetchProjects()
   },[]) 
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const fetchProjects = async () => {
    const { data: Projects, error } = await supabase.from("projects").select();

    if (error) {
      console.log(`Error: ${error.message}, Code: ${error.code}`);
    } else {
      setProjects(Projects!);
      console.log(Projects);
    }
  };
  if(!projects){
    return(
        <div>lero</div>
    )
  }else{

      return <div className=" flex flex-col gap-6  bg-[#242337] px-5 py-7"></div>;
    }
};
