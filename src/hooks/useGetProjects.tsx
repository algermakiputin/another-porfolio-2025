import { useCallback, useEffect, useState } from "react";
import { Project } from "../types/ProjectType";

const useGetProjects = (slug?: string) => {
    const [projects, setProjects] = useState<Project[]>();
    const [selectedProject, setSelectedProject] = useState<Project>();

    const fetchProject = useCallback(async () => {
        const request = await fetch('/contents/projects.json', {method: 'GET'});
        const json = await request.json();
        const selectedProject = json?.projects?.find((row: any) => row.slug === slug);
        setSelectedProject(selectedProject);
        setProjects(json?.projects);
    }, [slug]);

    useEffect(() => {
        fetchProject();
    }, [fetchProject]);

    return {
        projects,
        selectedProject
    }
}

export default useGetProjects;