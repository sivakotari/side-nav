import React, { Component } from 'react';
import Constants from '../Constants';

class SideNav extends Component {
  render() {
  	let {sideNavClass} = this.props;
  	return (
  		<div className={`sideNavContainer ${sideNavClass}`} style={Constants.sideNav.styles}>
  			{
  				Object.keys(Constants.sideNav.viewOrder).map( section =>
						<div className="sideNavInnerContainer" key={section}>
							<div className="sectionTitle">
								{Constants.sideNav[section].display}
							</div>
							{
								Object.keys(Constants.sideNav[section].viewOrder).map( link => 
									<div className="linkTitle" key={link}>
										<a href={Constants.sideNav[section][link].linkTo}>
											{ Constants.sideNav[section][link].display }
										</a>
									</div>
								)
							}
						</div>
  				)
  			}
  		</div>
  	)
  }
}

export default SideNav;