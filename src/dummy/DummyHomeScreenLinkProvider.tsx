import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faQrcode, faBook, faChurch, faHeart, faFire, faCross, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
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
  "Sacraments": [
    {
      iconName: icon(faChurch),
      title: 'Infant Baptism',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/infant-and-children-baptism',
    },
    {
      iconName: icon(faChurch),
      title: 'Adult Baptism',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/adult-baptism',
    },
    {
      iconName: icon(faFire),
      title: 'Confirmation',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/confirmation',
    },
    {
      iconName: icon(faHeart),
      title: 'Holy Matrimony',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/holy-matrimony',
    },
    {
      iconName: icon(faCross),
      title: 'Anointing of the Sick',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/anointing-home-communion',
    },
    {
      iconName: icon(faPrayingHands),
      title: 'Reconciliation',
      url: ''
    }
  ],
};