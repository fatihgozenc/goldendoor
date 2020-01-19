import Breadcrumb from '../../Breadcrumb';
import parse from 'html-react-parser';
import Carousel from '../../carousel'
import Icon from '../../Icon';
import './style.scss';

export default function({data}){

  const images = data.fields.factsheets.factsheet_bearbeitung.map(item =>(
    item.factsheet_bild
  ));
  const pdfData = data.fields.factsheets.factsheet_bearbeitung.map(item => (
    {name: item.factsheet_name, link: item.factsheet_dokument }
  ));

	return (
		<>
    <div className="page__title page__title--downloads">
      <Breadcrumb 
        slug={data.slug} 
        title={data.title} />
      <h1>{data.title}</h1>
    </div>
    <Carousel
        name="downloads"
        data={pdfData}
        content={data.fields.factsheets} 
        imgList={images}
        img_width={250}
        img_height={180}
        visibleImages={5}
        duration={750}
      />
      <div className="presskit" id="presskit">
        <div className="presskit__block">
          <h2>Presskit</h2>
          {parse(data.fields.presskit.inhalt)}
        </div>
        <div className="presskit__block">
          {Object.entries(data.fields.presskit.bearbeitung).map((item, key) => (
            
            <a key={key} href={item[1]} target="_blank" className="singleloc__button">
                <Icon type="factsheet" name={item[0].split('_').length > 1 ? `${item[0].split('_')[0]} ${item[0].split('_')[1]}` : item[0] }/>
            </a>
          ))}
        </div>
      </div>
    </>
	)
};