import * as React from 'react';
import JobAd from './job-ad';

export default function JobAds() {
  return (
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <JobAd
        image="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        employer="Addidas"
        location="Stuttgart, Germany"
        profession="Data Analyst"
        expiraition_date="Mar 16, 2022"
      />

      <JobAd
        image="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        employer="Gilette"
        location="Dublin, Ireland"
        profession="SEO expert"
        expiraition_date="Apr 16, 2022"
      />

      <JobAd
        image="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        employer="Metz Hairstyle"
        location="Paris, France"
        profession="SEO expert"
        expiraition_date="Mar 21, 2022"
      />
    </div>
  );
}
