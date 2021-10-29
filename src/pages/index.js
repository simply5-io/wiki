import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { render } from 'react-dom';

// function Home() {
//   const context = useDocusaurusContext();
//   const {siteConfig = {}} = context;
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <header className={clsx('hero hero--primary', styles.heroBanner)}>
//         <div className="container">
//           <h1 className="hero__title">{siteConfig.title}</h1>
//         </div>
//       </header>
//     </Layout>
//   );
// }
const features1 = [
  // {
  //   title: 'Vision & Mission',
  //   imageUrl: 'img/undraw_target_kriv.svg',
  //   description: (
  //     <>
  //       <b> Is to simplify networking solutions.</b>
  //       <p> Is to democratize networking solutions using cloud services & support for multi-brand hardware to provide simplified Enterprise-class solutions. </p>
  //     </>
  //   ),
  // },
  // {},
  // {
  //   title: 'Enabling working from anywhere',
  //   imageUrl: 'img/undraw_working_from_anywhere_ub67.svg',
  //   description: (
  //     <>
  //       <p>We offer Enterprise level quick network solutions for SMBs at the best cost.
  //         <br></br>We are proud to provide virtual offices to save more and grow more for remote teams.<br /></p>
  //     </>
  //   ),
  // },
  {

  }

];
function Feature1({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--2', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div>
        <h3><center>{title}</center></h3>
        <p><center>{description}</center></p>
      </div>
    </div>
  );
}

const features2 = [

  {
    title: "CloudLAN",
    imageUrl: 'img/cloudlan_logo.svg',
    href: "/cloudlan_home",
    description: "Remote-enable in 10 minutes"
  }, {
    title: "Node",
    imageUrl: 'img/node_logo.png',
    href: "docs/node/intro",
    description: "Enable your business Free WiFi in 10 minutes"
  }
]
function Feature2({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl);
  const linkUrl = useBaseUrl(href);
  return (
    <div className={clsx('col col-centered', styles.homefeatures)} text-align="center" width="30%" >
      <a href={linkUrl}>
        <div className={clsx(styles.feature)}>
          {imgUrl && (
            <div className="text--center" >
              <img className={styles.quickLinkImage} src={imgUrl} alt={title} />
            </div>
          )}
          <div>
            <h5><center>{title}</center></h5>
            <p><center>{description}</center></p>
          </div>
        </div></a>
    </div>
  );
}
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Get More Out Of CloudLAN<head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <div>
              <p p="500px"></p>
              <hr></hr>
            </div>
            {/* <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/cloudlan/')}>
              Get Started
            </Link> */}
          </div>
        </div>
      </header>
      <main>
        {features2 && features2.length > 0 && (
          <section className={styles.features} >
            <div className="container" >
              <hr></hr>
                <div className="row">
                  {features2.map((props, idx) => (
                    <Feature2 key={idx} {...props} />
                  ))}
                </div>
                <hr></hr>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
