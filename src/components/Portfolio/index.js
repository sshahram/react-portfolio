import { Grid } from '@material-ui/core';
import projects from '../../projects.json';
import ProjectCard from '../Project';

const Portfolio = () => {
    return (
        <Grid container spacing={3}>
            {
                projects.map(project => {
                    return (
                        <Grid item xs={12} md={4} key={project.id}>
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                github={project.github}
                                liveUrl={project.liveUrl}
                                image={project.image}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
};

export default Portfolio;
