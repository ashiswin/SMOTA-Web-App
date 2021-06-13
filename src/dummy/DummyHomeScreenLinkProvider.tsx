import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faQrcode, faBook, faChurch, faHeart, faFire, faCross, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import smota from "../assets/smota.jpg";

export interface Link {
  iconName: Icon;
  title: string;
  url: string;
  image: string;
  text: string;
};

export const DummyCategories = [
  "Mass Essentials",
  "Sacraments"
];

export const DummyLinks: { [index: string]: Link[] } = {
  "Mass Essentials": [
    {
      iconName: icon(far.faCalendarPlus),
      title: 'Book Mass',
      url: 'https://mycatholic.sg',
      image: smota,
      text: 'Click here to book mass',
    },
    {
      iconName: icon(faQrcode),
      title: 'Pew Check In',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfJJkhD56UVS3J4t7UgSmwCLu6sEhHWKi-i4tajsUSSn_4Fcg/viewform',
      image: smota,
      text: 'Click here to check into your pew',
    },
    {
      iconName: icon(far.faClock),
      title: 'Mass Timings',
      url: 'https://www.stmary.sg/web/index.php/news-events/timings',
      image: smota,
      text: 'Click here to see Mass Timings',
    },
    {
      iconName: icon(faBook),
      title: 'Mass Readings',
      url: 'http://www.usccb.org/bible/readings',
      image: smota,
      text: 'Click here for the mass readings',
    },
  ],
  "Sacraments": [
    {
      iconName: icon(faChurch),
      title: 'Infant Baptism',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/infant-and-children-baptism',
      image: smota,
      text: 'Click here for infant Baptism info',
    },
    {
      iconName: icon(faChurch),
      title: 'Adult Baptism',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/adult-baptism',
      image: smota,
      text: 'Click here for adult Baptism info',
    },
    {
      iconName: icon(faFire),
      title: 'Confirmation',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/confirmation',
      image: smota,
      text: 'Click here for Confirmation information',
    },
    {
      iconName: icon(faHeart),
      title: 'Holy Matrimony',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/holy-matrimony',
      image: smota,
      text: 'Click here for marriage info',
    },
    {
      iconName: icon(faCross),
      title: 'Anointing of the Sick',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/anointing-home-communion',
      image: smota,
      text: 'Click here for Anointing of the Sick info',
    },
    {
      iconName: icon(faPrayingHands),
      title: 'Reconciliation',
      url: '',
      image: smota,
      text: 'Click here for Sacrament of Reconciliation info',
    }
  ],
};