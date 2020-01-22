import { NextSeo } from 'next-seo';
import Breadcrumb from '../../Breadcrumb';
import parse from 'html-react-parser';
import './style.scss';

export default function({data}){

	return (
		<>
    <NextSeo
      title={data.fields.seo.title}
      description={data.fields.seo.description}
    />
    <div className="page__title page__title--downloads">
      <Breadcrumb 
        slug={data.slug} 
        title={data.title} />
      <h1>{data.fields.eroffnungstitel}</h1>
    </div>

    <div className="engagement">
      
      {
        data.fields.engagement_eintrage.map((item, key) => (
          <div key={key} className="engagement__item">
            <div className="engagement__item--img backgroundImg" 
            style={{ backgroundImage: "url(" + item.info.bild + ")" }}/>
            <div className="engagement__item--info">
              <h3>{item.info.titel}</h3>
              <h4>{item.info.subtitel}</h4>
              {parse(item.inhalt)}
            </div>
          </div>
        ))
      }

    </div>
    
    </>
	)
};