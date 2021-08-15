// import
import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';

// styles
import './styles.scss';

// component
const Resources = ({ references, fadeInContent }) => {
  return (
    <animated.article className="resources" style={ fadeInContent }>
      <section className="resources__list">
        {
          references.map((reference) => {
            return (
              <div className="resources__item">
                { reference.title }
                <br />
                <a href={ reference.link }
                  target="_blank"
                  rel="noreferrer"
                  className="resources__item__link"
                >
                  { reference.link }
                </a>
              </div>
            )
          })
        }
      </section>
    </animated.article>
  );
};

const mapStateToProps = (state) => ({
  references: state.reference.references,
});

// export
export default connect(mapStateToProps, null)(Resources);