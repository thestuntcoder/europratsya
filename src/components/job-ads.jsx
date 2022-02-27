import * as React from 'react';
import JobAd from './job-ad';

export default function JobAds() {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <JobAd
        employer="Addidas"
        location="Stuttgart, Germany"
        profession="Data Analyst"
        expiraition_date="Mar 16, 2022"
        salary="65.000 €"
        visa_requirement="Handled by employer"
        contact_detail="Contact detail"
      />

      <JobAd
        employer="Gilette"
        location="Dublin, Ireland"
        profession="SEO expert"
        expiraition_date="Apr 16, 2022"
        salary="45.000 €"
        visa_requirement="No visa required"
        contact_detail="Contact detail"
      />

      <JobAd
        employer="Metz Hairstyle"
        location="Paris, France"
        profession="SEO expert"
        expiraition_date="Mar 21, 2022"
        salary="75.000 €"
        visa_requirement="No visa required"
        contact_detail="Contact detail"
      />
    </div>
  );
}
