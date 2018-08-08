import React from 'react';
import ExpandableWidget from '../expandableWidget/expandableWidget';
import { Query } from 'react-apollo';
import commquery from '../../queries/commercial';

const CommercialProjects = () => (
	<Query query={commquery}>
{ ({ loading, error, data } ) => {
	if(loading) return <div className="gallery_loadingSpinner"></div>
  if (error) return <h1>Error fetching project!</h1>
	return (
    <div>
      <h2>Commerical Projects </h2>
		    <div className="gallery_previewMain">
          {data.portfolioProjects.map((projects, index) => (
						<ExpandableWidget key={index} imageSrc={projects.portfolioimage.url}
										widgetTitle={projects.projectTitle}
										externalLink={projects.projectLink}
										widgetDescription={projects.projectDescription}/>
            ))}
		      </div>
    </div>
			)
  }}
	</Query>
);

export default CommercialProjects;
