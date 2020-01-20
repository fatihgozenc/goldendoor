import Breadcrumb from '../../Breadcrumb';
import parse from 'html-react-parser';
import './style.scss';

export default function({data}){

	return (
		<>
    <div className="page__title page__title--downloads">
      <Breadcrumb 
        slug={data.slug} 
        title={data.title} />
      <h1>{data.title}</h1>
    </div>

    <div className="impressum">
      {parse(data.content)}
    </div>
    
    </>
	)
};