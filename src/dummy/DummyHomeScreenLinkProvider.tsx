import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faQrcode, faBook } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

export interface Link {
  iconName: Icon;
  title: string;
  url: string;
};

export const DummyCategories = [
  "Mass Essentials",
  "Sacraments"
];

export const DummyLinks: {[index: string]: Link[]} = {
  "Mass Essentials": [
    {
      iconName: icon(far.faCalendarPlus),
      title: 'Book Mass',
      url: 'https://mycatholic.sg',
    },
    {
      iconName: icon(faQrcode),
      title: 'Pew Check In',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfJJkhD56UVS3J4t7UgSmwCLu6sEhHWKi-i4tajsUSSn_4Fcg/viewform',
    },
    {
      iconName: icon(far.faClock),
      title: 'Mass Timings',
      url: 'https://www.stmary.sg/web/index.php/news-events/timings',
    },
    {
      iconName: icon(faBook),
      title: 'Mass Readings',
      url: 'http://www.usccb.org/bible/readings',
    },
  ],
  "Sacraments": [],
};