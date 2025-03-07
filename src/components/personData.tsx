// personData.
export interface BioSection {
  title: string;
  content: string;
}
export interface Person {
  id: number;
  person: string;
  image: string;
  quotes: string;
  bio:
    | string // Allows simple bio format
    | {
        summary: string;
        sections: BioSection[];
      };
}
export const pages: Person[] = [
  {
    id: 1,
    person: "Ritesh_Agarwal",
    image: "/images/Ritesh_Agarwal.jpg",
    quotes:
      "“One should accept failure, and be willing to learn, unlearn and relearn again”",
    bio: {
      summary:
        "Ritesh Agarwal-The Youngest Billionaire of India has a net worth of around Rs  16000 crores. The most amazing part is Ritesh Agarwal founded OYO when he was just 21 years old. In the span of 10 years OYO became one of the top hotel chains in the world with an approximate valuation of more than Rs 330 crore. Since the inception of OYO, the founder has never looked back. Let us understand The Youngest Billionaire Mr. Ritesh Agarwal success story in detail.",
      sections: [
        {
          title: "Early Life",
          content:
            "Ritesh Agarwal was born on 16th November 1993 in a Marwari Family. He was born in Bissam Cuttack, Odisha and bought up in Titilagarh. His family ran a small shop in Rayagada. He graduated from Sacred Heart School and later St. Johns Senior Secondary School before moving to Delhi in 2011 for college.",
        },
        {
          title: "How Ritesh Started OYO",
          content:
            "Immense love for innovation, Ritesh chose to drop out of college and pursue his vision.\n" +
            "At the tender age of 18 in 2012, he embarked on his business career with Oravel Stays, a budget accommodation portal.\n" +
            "This venture received a grant of Rs 30 lakh and set the stage for his subsequent success.\n\n" +
            "In 2013, at just 19, Agarwal earned a coveted spot in the Thiel Fellowship, initiated by Peter Thiel, securing a USD 100,000 grant to bring his ideas to fruition.\n" +
            "With this opportunity, he transformed Oravel Stays into OYO Rooms, a disruptive force in the hospitality industry.\n" +
            "The success of Oravel Stays laid the foundation for OYO Rooms’ inception in May 2013, marking a significant milestone in Agarwal’s entrepreneurial journey.",
        },
        {
          title: "The First Initiative",
          content:
            "OYO started as Oravel Stays, a platform for listing and booking budget accommodations. Agarwal renamed it to OYO in 2013 after receiving a grant of $100,000 from the Thiel Fellowship, a program for young innovators by PayPal co-founder Peter Thiel. OYO operated on a full-fledged hotel chain model that leased and franchised assets\n" +
            "It invested in capex, hired general managers to oversee operations and customer experience, and generated job opportunities for hospitality enthusiasts.  OYO expanded to Malaysia in 2016, its first region outside India. It also introduced dynamic pricing to capitalize on seasonality, demand surges and special events.\n" +
            "OYO expanded to China, Indonesia, the UK, the US, Europe and the Middle East in 2018 and 2019. It also launched new products and services such as OYO Townhouse, OYO Life, OYO Workspaces, OYO Wizard and OYO \n" +
            "OYO had more than 43,000 properties and 10 lakh (1 million) rooms across 800 cities in 80 countries as of January 2020. It had over 17,000 employees globally.  OYO’s investors included SoftBank Group, Didi Chuxing, Greenoaks Capital, Sequoia India, Lightspeed India, Hero Enterprise, Airbnb and China Lodging Group.",
        },
        {
          title: "Achievements",
          content:
            "Ritesh Agarwal has won many awards and accolades for his work including the Business World Young Entrepreneur Award. He is a regular speaker at entrepreneurial conferences and institutes across India and the world and a fellow of the Thiel foundation\n" +
            "All achievements of Ritesh Agarwal have included in a book called “Kaleidoscope” written by him, which has around 25 award-winning short stories, selected amongst several other stories nominated in an online contest organized by SpringTide. Other than that, he loves traveling and going for long drives to unwind himself and likes playing basketball when he is not working",
        },
      ],
    },
  },
  {
    id: 2,
    person: "Ratan_tata",
    image: "/images/Ratan_tata.jpg",
    quotes:
      "“The greatest pleasure I’ve had is trying to do something that everybody says could not be done”",
    bio: {
      summary:
        "Birth, Age, Family, and EducationRatan Tata is a prominent Indian industrialist, philanthropist, and former chairman of the Tata Group, known for his significant contributions to the business landscape and his philanthropic efforts. Ratan Tata has passed away at the age of 86. His death was confirmed on October 9, 2024, following his admission to Mumbai's Breach Candy Hospital for age-related health issues, where he was later moved to the ICU",

      sections: [
        {
          title: "Early Life & Education",
          content:
            "Born on 28 December 1937 in Bombay, British India (present-day Mumbai), Ratan Tata is the son of Naval Tata and Sooni Commissariat. They got separated when Ratan Tata was 10 years old. He was then formally adopted by his grandmother Navajbai Tata through the J. N. Petit Parsi Orphanage. Ratan Tata was raised with his half-brother Noel Tata (son of Naval Tata and Simone Tata). \n" +
            "The 84-year-old attended Campion School, Mumbai, Cathedral and John Connon School, Mumbai, Bishop Cotton School, Shimla, and Riverdale Country School in New York City. He is an alumnus of Cornell University and Harvard Business School.",
        },
        {
          title: "Ratan Tata as Chairperson of Tata Sons",
          content:
            "When JRD Tata stepped down as the chairperson of Tata Sons in 1991, he named Ratan Tata his successor. He faced stiff resistance from many companies heads who spent decades in their respective companies. Tata began replacing them by setting a retirement age. He further made it compulsory for each company to report to the group office. Under his leadership, the overlapping companies of Tata Sons were streamlined into a synergized whole. \n" +
            "During his 21 years of stewardship, revenues grew over 40 times, and profit over 50 times. He got Tata Tea to acquire Tetley, Tata Motors to acquire Jaguar Land Rover, and Tata Steel to acquire Corus, turning the organization from a largely India-centric group into a global business. \n" +
            "He also conceptualized the Tata Nano car. The car was capped at a price that was within the reach of the average Indian consumer. \n" +
            "Upon turning 75, Ratan Tata stepped down as the Chairperson of Tata Sons on 28 December 2012. Cyrus Mistry was named his successor, however, the Board of Directors and Legal division voted for his removal on 24 October 2016 and Ratan Tata was then made the group's interim chairman.\n" +
            "A selection committee comprising Ratan Tata, TVS Group head Venu Srinivasan, Amit Chandra of Bain Capital, former diplomat Ronen Sen, and Lord Kumar Bhattacharya was formed to find the successor of Ratan Tata. The committee named  Natarajan Chandrasekaran as the Chairperson of Tata Sons on 12 January 2017.\n" +
            "Ratan Tata invested his personal savings in  Snapdeal, Teabox, and CashKaro.com. He also invested in Ola Cabs, Xiaomi, Nestaway, and Dogspot.",
        },
        {
          title: "Famous Quotes By Ratan Tata",
          content:
            "1- “I don’t believe in taking the right decisions. I take decisions and then make them right.”\n" +
            "2- “If you want to walk fast, walk alone. But if you want to walk far, walk together. \n" +
            "3- “I’ve often felt that the Indian Tiger has not been unleashed.” \n" +
            "4- “People still believe what they read is necessarily the truth.”\n" +
            "5-  “If it stands the test of public scrutiny, do it… If it doesn’t stand the test of public scrutiny then don’t do it.”\n" +
            "6- “Power and wealth are not two of my main stakes.”\n" +
            "7- “I have been constantly telling people to encourage people, to question the unquestioned, and not to be ashamed to bring up new ideas, new processes to get things done.\n" +
            "",
        },
      ],
    },
  },
  {
    id: 3,
    person: "steve_jobs",
    image: "/images/steve_jobs.webp",
    quotes:
      "“Your time is limited, so don't waste it living someone else's life”",
    bio: {
      summary:
        "Steve Jobs was one of the founders of Apple Inc., one of the most successful companies in the world. As head of Apple, Jobs introduced many popular electronic products, including the Macintosh computer and the iPhone",

      sections: [
        {
          title: "Steve Jobs Early Life",
          content:
            "Steven Paul Jobs was born on February 24, 1955, in San Francisco, California, U.S. He was adopted and raised in the San Francisco Bay Area. He had a younger sister, Patricia.\n" +
            "As a child, Steve liked reading, swimming, music, and practical jokes. He also spent a lot of time building electronics. As a young teenager, he got a summer job at an electronics company. In high school, he joined an electronics club whose members were called wireheads.\n" +
            "In 1972 Jobs went to college for less than a year. In 1974 he worked at Atari, a video-game company. Later that year he began working with an old friend named Stephen Wozniak.",
        },
        {
          title: "Steve Jobs Career",
          content:
            "Jobs and Wozniak built a computer in Jobs’s garage. They called it the Apple I. In 1977 the friends released the Apple II. Sales were so high that their company, also called Apple, soon became one of the top companies in the United States.\n" +
            "In 1984 Apple introduced the Macintosh, or Mac. It featured a mouse and a picture-based screen. The Mac did not sell as well as personal computers that used Microsoft software (see Bill Gates). The directors of Apple fired Jobs in 1985.\n" +
            "Jobs formed a new computer company called NeXT. He also bought Pixar, which made computer-animated movies. Pixar’s success made Jobs a billionaire.\n" +
            "By the mid-1990s, Apple was failing. In 1997 Jobs was asked to lead the company once again. His popular new products—including colorful iMac computers and laptops—saved Apple.\n" +
            "In 2001 Jobs introduced the iPod. It quickly became the top-selling portable music player. The iPhone was released in 2007. It could be used to make phone calls, access the Internet, play music, and more. In 2010 Apple began selling the iPad, a tablet computer.\n" +
            "As Apple’s success climbed, Jobs began to have health problems. He learned that he had cancer in 2003. Nevertheless, he remained in charge of the company until 2011. Jobs died on October 5, 2011, in Palo Alto, California. Nearly 11 years after his death, he was awarded the Presidential Medal of Freedom. The medal is the highest nonmilitary award in the United States.",
        },
      ],
    },
  },
];
