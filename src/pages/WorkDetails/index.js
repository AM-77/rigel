import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import Image from '../../components/Image';
import Loader from '../../components/Loader';
import Footer from '../../containers/Footer';
import { obj2arr, isNumeric } from '../../utils/helpers';

import {
  WorkDetailsWrapper,
  InnerWrapper,
  DivColumn,
  DivRow,
  H1,
  H2,
  H4,
  P,
  B,
  WorkLink,
} from './style';

const WorkDetails = () => {
  const { t } = useTranslation();
  const { workId } = useParams();
  const history = useHistory();

  const works = t('works', { returnObjects: true });
  const [work, setWork] = useState();
  const [laoding, setLaoding] = useState(true);

  useEffect(() => {
    if (isNumeric(workId)) {
      setWork(works[workId]);
    } else {
      history.push('/work');
    }
  }, []);

  useEffect(() => {
    setLaoding(false);
  }, [work]);

  useEffect(() => {
    if (isNumeric(workId)) {
      setLaoding(true);
      setWork(works[workId]);
    } else {
      history.push('/work');
    }
  }, [workId]);

  if (laoding) {
    return (
      <WorkDetailsWrapper>
        <InnerWrapper>
          <Loader />
        </InnerWrapper>
        <Footer />
      </WorkDetailsWrapper>
    );
  }

  const { id, title, subtitle, content, builtWith, links, imgs } = work;

  return (
    <WorkDetailsWrapper>
      <InnerWrapper>
        <DivRow className="content">
          <DivColumn className="infos">
            <DivColumn className="title">
              <H1>{title}</H1>
              <H4>{subtitle}</H4>
            </DivColumn>
            <DivRow>
              <P>{content}</P>
            </DivRow>
            <DivColumn>
              <H2>Built With:</H2>
              <DivRow className="tools">
                {builtWith.map((item) => (
                  <B className="tool" key={item}>
                    {item}
                  </B>
                ))}
              </DivRow>
            </DivColumn>

            <DivColumn>
              <H2>Links:</H2>
              <DivRow className="links">
                {obj2arr(links).map((link) => (
                  <WorkLink className="link" to={link[1]} key={link[1]}>
                    {link[0]}
                  </WorkLink>
                ))}
              </DivRow>
            </DivColumn>
          </DivColumn>
          <DivColumn className="imgs">
            <LightgalleryProvider>
              {imgs.map((img) => (
                <LightgalleryItem
                  key={img}
                  group="any"
                  src={`/assets/images/works/${id}/${img}`}
                >
                  <Image
                    alt={`work ${id}`}
                    src={`/assets/images/works/${id}/${img}`}
                  />
                </LightgalleryItem>
              ))}
            </LightgalleryProvider>
          </DivColumn>
        </DivRow>
        <DivRow className="works-nav">
          <WorkLink
            to={`/work/details/${id - 1}`}
            className={`work-link ${id === 0 ? 'disable' : ''}`}
          >
            <b>&laquo;</b>
            <span>Prev work</span>
          </WorkLink>
          <WorkLink to="/work" className="work-link ">
            All works
          </WorkLink>
          <WorkLink
            to={`/work/details/${id + 1}`}
            className={`work-link  ${id === works.length - 1 ? 'disable' : ''}`}
          >
            <span>Next work</span>
            <b>&raquo;</b>
          </WorkLink>
        </DivRow>
      </InnerWrapper>
      <Footer />
    </WorkDetailsWrapper>
  );
};

export default WorkDetails;
