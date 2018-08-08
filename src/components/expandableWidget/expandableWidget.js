import React, { Component } from 'react';
import classNames from 'classnames';
import './expandableWidget.scss';

export default class expandableWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.expandWidget = this.expandWidget.bind(this);
  }

  expandWidget(e) {
      e.preventDefault();
        this.setState({active: !this.state.active});
  }

	render() {
    const widgetDescription = this.props.widgetDescription.split("?");

    let expandable = classNames('expandableWidget', this.state.active ? 'expandableWidget-open' : '');

      return (
        <div className={expandable} >
              <div className="expandableWidget_click" onClick={this.expandWidget}>
                <img className="expandableWidget_previewMainImage" src={this.props.imageSrc} alt={this.props.widgetTitle}/>
                <h3>{this.props.widgetTitle}<div className="expandableWidget_chevron"></div></h3>
              </div>

               <div className="expandableWidget_content">
               {widgetDescription.map((object, i) => {
                  return <p key={i}>{object}</p>
               })}
               <a className="expandableWidget_linkButton" href={this.props.externalLink} target="_blank" rel="noopener noreferrer">{this.props.buttonText ? this.props.buttonText: "Open Site"}</a>
               </div>
        </div>
      );
    }
}
