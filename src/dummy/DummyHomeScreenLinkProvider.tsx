import smota from "../assets/smota.jpg";
import image2 from "../assets/img/smota-jumbotron-2.jpg";

export interface Link {
  title: string;
  url: string;
  image: string;
  text: string;
};

export const DummyCategories = [
  "Mass Essentials",
];

export const DummyLinks: { [index: string]: Link[] } = {
  "Mass Essentials": [
    {
      title: 'Book Mass',
      url: 'https://mycatholic.sg',
      image: smota,
      text: 'Click here to book mass',
    },
    {
      title: 'Media',
      url: '/media',
      image: image2,
      text: 'Online Mass, Liturgy of the Word, Videos and Photos',
    },
    {
      title: 'Pew Check In',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfJJkhD56UVS3J4t7UgSmwCLu6sEhHWKi-i4tajsUSSn_4Fcg/viewform',
      image: image2,
      text: 'Click here to check into your pew',
    },
    {
      title: 'Mass Timings',
      url: 'https://www.stmary.sg/web/index.php/news-events/timings',
      image: smota,
      text: 'Click here to see Mass Timings',
    },
    {
      title: 'Mass Readings',
      url: 'http://www.usccb.org/bible/readings',
      image: smota,
      text: 'Click here for the mass readings',
    },
    {
      title: 'Infant Baptism',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/infant-and-children-baptism',
      image: smota,
      text: 'Click here for infant Baptism info',
    },
    {
      title: 'Adult Baptism',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/adult-baptism',
      image: smota,
      text: 'Click here for adult Baptism info',
    },
    {
      title: 'Confirmation',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/confirmation',
      image: smota,
      text: 'Click here for Confirmation information',
    },
    {
      title: 'Holy Matrimony',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/holy-matrimony',
      image: smota,
      text: 'Click here for marriage info',
    },
    {
      title: 'Anointing of the Sick',
      url: 'https://www.stmary.sg/web/index.php/pastoral-services/anointing-home-communion',
      image: smota,
      text: 'Click here for Anointing of the Sick info',
    },
    {
      title: 'Reconciliation',
      url: '',
      image: smota,
      text: 'Click here for Sacrament of Reconciliation info',
    }
  ],
};