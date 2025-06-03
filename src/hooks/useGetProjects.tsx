import { useCallback, useEffect, useState } from "react";
import { Project } from "../types/ProjectType";

const useGetProjects = (slug?: string, limit?: number) => {
    const [projects, setProjects] = useState<Project[]>();
    const [selectedProject, setSelectedProject] = useState<Project>();

    const fetchProject = useCallback(async () => {
        const request = await fetch('/contents/projects.json', {method: 'GET'});
        const json = await request.json();
        const selectedProject = json?.projects?.find((row: any) => row.slug === slug);
        setSelectedProject(selectedProject);
        if (limit) {
            setProjects(json?.projects?.slice(0,4));
        } else {
            setProjects(json?.projects);
        }
    }, [slug, limit]);

    useEffect(() => {
        fetchProject();
    }, [fetchProject]);

    return {
        projects,
        selectedProject
    }
}

export default useGetProjects;