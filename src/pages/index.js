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

];
function Feature1({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
    title: "What's New?",
    imageUrl: 'img/undraw_pending_approval_xuu9.svg',
    href: "docs/getting_started/whats_new",
  }, {
    title: "FAQ's",
    imageUrl: 'img/undraw_Faq_re_31cw.svg',
    href: "docs/help_support/support",
  },
  {
    title: "Troubleshooting",
    imageUrl: 'img/undraw_bug_fixing_oc7a.svg',
    href: "docs/help_support/troubleshooting",
  },
  {
    title: "CloudLAN Free Room",
    imageUrl: 'img/undraw_features_overview_jg7a.svg',
    href: "docs/features/cloudlan_room#cloudlan-free-room",
  },
  {
    title: "Invite & Join Room",
    imageUrl: 'img/undraw_join_of2w.svg',
    href: "docs/#invite--join-room",
  },

  {
    title: 'Service Casting',
    imageUrl: 'img/undraw_real-time_sync_o57k.svg',
    href: "docs/features/cloudlan_service_cast",
  },


]
function Feature2({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl);
  const linkUrl = useBaseUrl(href);
  return (
    <div className={clsx('col col--2', styles.quickLinkfeatures)} >
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
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="text--center">
            <img className={styles.quickTitleImage} src={"img/undraw_searching_p5ux.svg"} alt={"How can we help you?"} />
          </div>
          <div>
            <h3><center>How can we help you?</center></h3>
            <p><center>We are always here to help whenever you have questions </center> </p>
          </div>
          {/* <hr></hr> */}
        </div>
        {features2 && features2.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features2.map((props, idx) => (
                  <Feature2 key={idx} {...props} />
                ))}
              </div>
              {/* <hr></hr> */}
            </div>
          </section>
        )}
        {features1 && features1.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features1.map((props, idx) => (
                  <Feature1 key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
