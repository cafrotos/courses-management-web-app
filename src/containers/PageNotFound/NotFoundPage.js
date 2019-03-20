import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import i18n from '../../utils/i18n';
import './404_NotFound.css';
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
  render() {
    return (
      <DocumentTitle title={i18n.t('title_page.404_page')}>
        <div className="notfound_page">
          <div className="paper-404">
            <div className="title">{i18n.t('title_page.404_page')}</div>
            <img src={require("../../assets/images/shippo404.png")} alt="Not Found" />
            <div className="paper-404-content">
              <h2>{i18n.t('404_pages.description')}</h2>
              <Link to="/"><button className="button"><span>{i18n.t('button.backhome')}</span></button></Link>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default NotFoundPage;