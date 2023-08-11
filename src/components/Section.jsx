import PropTypes from 'prop-types';

export const Section = ({ children, title = null }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-2">
        {title && <h2 className="text-2xl font-medium mb-4">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};
