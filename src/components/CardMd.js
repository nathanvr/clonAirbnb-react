import '../styles/components/CardMd.scss';

const CardMd = ({ service }) => {
  return (
    <div className="bg-cardmd" key={service._id}>
      <div className="rectangle-md">
        <img
          loading="lazy"
          src={service.images[0]}
          alt={service.description}></img>
      </div>
      <h2 className="country">
        {service.city} / {service.country}
      </h2>
      <h3 className="cmdtexth3">{service.title}</h3>
      <p className="cmdtextp">{service.price}</p>
    </div>
  );
};

export default CardMd;
