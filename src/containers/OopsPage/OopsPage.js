import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import i18n from '../../utils/i18n';
import './OopsPage.css';
import {Link} from "react-router-dom";

class OopsPage extends Component {
  render() {
    return (
      <DocumentTitle title={i18n.t('title_page.oops_page')}>
        <div className="oops_page">
          <div className="paper-404">
            <div className="title">Oops!</div>
            <img src={require("../../assets/images/shippo404.png")} alt="Not Found" />
            <div className="paper-404-content">
              <h2>{i18n.t('oops_pages.description')}</h2>
              <h1>{i18n.t('oops_pages.note')}</h1>
              <Link to="/"><button className="button"><span>{i18n.t('button.backhome')}</span></button></Link>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default OopsPage;