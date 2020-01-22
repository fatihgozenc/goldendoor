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
      <h1>{data.title}</h1>
    </div>

    <div className="engagement">
      
    </div>
    
    </>
	)
};