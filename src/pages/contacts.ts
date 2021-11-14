import { Contact } from "../components/Chat/ChatContact";
import ManPhoto from "../assets/person-2.jpg";
import WomanPhoto1 from "../assets/person-1.jpg";
import WomanPhoto2 from "../assets/person-3.jpg";

// FAKE CONTACTS, to be fetched from an API
const CONTACTS: Contact[] = [
  {
    id: 0,
    contactName: "Chiril Cugureanu",
    contactPhoto: ManPhoto,
    phoneNumber: "447543773999",
    messageHistory: [
      {
        self: false,
        messageText: "sent you £3,310.00",
        timestamp: new Date("December 17, 2020 13:21:00"),
        id: 0,
      },
      {
        self: false,
        messageText: "Hello Ally, how are you?",
        timestamp: new Date("December 17, 2020 13:24:00"),
        id: 1,
      },
      {
        self: true,
        messageText:
          "Hi! These photos are amazing! I’ll add them to moodboard and send you the final presentation. Thank you!",
        timestamp: new Date("December 17, 2020 13:26:00"),
        id: 2,
      },
      {
        self: false,
        messageText: "I'm super exited!!!",
        timestamp: new Date("December 17, 2020 13:29:00"),
        id: 3,
      },
      {
        self: true,
        messageText:
          "This is gonna be our greatest project ever! I'm so excited!",
        timestamp: new Date(),
        id: 4,
      },
      {
        self: false,
        messageText:
          "Yeah, but I think we should bring in more people, it'll be a lotta fun :))",
        timestamp: new Date(),
        id: 5,
      },
      {
        self: true,
        messageText:
          "I also had this idea, my friend Richard seems good enough, I'll speak to him tonight!",
        timestamp: new Date(),
        id: 6,
      },
      {
        self: true,
        messageText:
          "Btw, I found a good rent offer for an office nearby us, I've just emailed them!",
        timestamp: new Date(),
        id: 7,
      },
      {
        self: false,
        messageText: "Sounds good to me! 💪",
        timestamp: new Date(),
        id: 8,
      },
      {
        self: false,
        messageText: "Call me if you get any news!",
        timestamp: new Date(),
        id: 9,
      },
    ],
  },
  {
    id: 1,
    contactName: "Emma Luyben",
    contactPhoto: WomanPhoto1,
    phoneNumber: "447543773333",
    messageHistory: [
      {
        self: false,
        messageText: "sent you £3,310.00",
        timestamp: new Date("December 17, 2020 13:21:00"),
        id: 0,
      },
      {
        self: false,
        messageText: "Hello Ally, how are you?",
        timestamp: new Date("December 17, 2020 13:24:00"),
        id: 1,
      },
      {
        self: true,
        messageText:
          "Hi! These photos are amazing! I’ll add them to moodboard and send you the final presentation. Thank you!",
        timestamp: new Date("December 17, 2020 13:26:00"),
        id: 2,
      },
    ],
  },
  {
    id: 2,
    contactName: "Jess Monet",
    contactPhoto: WomanPhoto2,
    phoneNumber: "447543773777",
    messageHistory: [],
  },
  {
    id: 3,
    contactName: "Roxanne Dupont",
    contactPhoto: WomanPhoto2,
    phoneNumber: "447543773277",
    messageHistory: [],
  },
  {
    id: 4,
    contactName: "Lavigne Laurent",
    contactPhoto: WomanPhoto2,
    phoneNumber: "447543771777",
    messageHistory: [],
  },
  {
    id: 5,
    contactName: "Lise Bernier",
    contactPhoto: WomanPhoto2,
    phoneNumber: "443543773777",
    messageHistory: [],
  },
];

export default CONTACTS;