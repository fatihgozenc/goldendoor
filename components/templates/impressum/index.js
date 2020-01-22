import { NextSeo } from 'next-seo';
import Breadcrumb from '../../Breadcrumb';
import parse from 'html-react-parser';
import './style.scss';

export default function({data}){

  const breakAdded = data.content.replace(/\n/g, "<br />");

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
      <h1>{data.title}</h1>
    </div>

    <div className="impressum">
      {parse(breakAdded)}
    </div>
    
    </>
	)
};