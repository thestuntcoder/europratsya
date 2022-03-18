import * as React from 'react';
import JobAd from './job-ad';

export default function JobAds(props) {
  let output = [];
  let limit = parseInt(props.limit);
  const lang = props.language;

  for (var key in props.data) {
    if (props.data[key].node.employer == null) continue;
    if (props.data[key].node.job_categories == null) continue;
    if (props.data[key].node.slug == null) continue;
    if (
      props.data[key].node.description.uk == null &&
      props.data[key].node.description.en == null
    )
      continue;

    let desc =
      lang === 'uk'
        ? props.data[key].node.description.uk == null
          ? props.data[key].node.description.en
          : props.data[key].node.description.uk
        : props.data[key].node.description.en;

    output.push(
      <JobAd
        employer={props.data[key].node.employer.name}
        location={
          props.data[key].node.city + ', ' + (lang === 'uk')
            ? props.data[key].node.country.title.uk
            : props.data[key].node.country.title.en
        }
        profession={props.data[key].node.job_categories[0].title}
        expiraition_date={props.data[key].node.validUntil}
        salary={props.data[key].node.salary}
        title={
          lang === 'uk'
            ? props.data[key].node.title.uk
            : props.data[key].node.title.en
        }
        contact_detail={props.data[key].node.contact}
        description={desc[0].children[0].text.substring(0, 200) + '...'}
        linkto={
          (lang === 'uk' ? '/uk' : '') +
          '/job/' +
          props.data[key].node.slug.current
        }
        key={key}
      />
    );

    if (--limit <= 0) break;
  }

  return (
    <div className="lg:grid-cols-3 lg:max-w-none grid max-w-lg gap-5 mx-auto mt-12">
      {output}
    </div>
  );
}
