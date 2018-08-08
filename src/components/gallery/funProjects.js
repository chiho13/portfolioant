import React, { Component } from 'react';
import ExpandableWidget from '../expandableWidget/expandableWidget';
import { Query } from 'react-apollo';
import funquery from '../../queries/fun';

const FunProjects = () => (
	<Query query={funquery}>
{ ({ loading, error, data } ) => {
	if(loading) return <div className="gallery_loadingSpinner"></div>
  if (error) return <h1>Error fetching project!</h1>
	return (
    <div>
    <h2>Demo Projects</h2>
		<div className="gallery_previewMain">
        {data.portfolioProjects.map((projects, index) => (
						<ExpandableWidget key={index} imageSrc={projects.portfolioimage.url}
										widgetTitle={projects.projectTitle}
										externalLink={projects.projectLink}
										widgetDescription={projects.projectDescription}
                    buttonText="Demo"/>
        ))}
		</div>
    </div>
			)
  }}
	</Query>
);

export default FunProjects;
