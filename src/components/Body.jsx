import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledBodyWrapper, StyledHeading, StyledPara } from "./style";

const Body = () => {
    const [chapters, setChapters] = useState([]);
  useEffect(() => {

    // Get all chapters
    async function getChapters() {
      try {
        const options = {
          method: "GET",
          url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
          params: { limit: "100" },
          headers: {
            "X-RapidAPI-Key":
              "5aad306723msh4d278b8d563341fp16463fjsn760f1560c7c1",
            "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
          },
        };
        const { data } = await axios.request(options);
        setChapters(data);
      } catch (e) {
        console.log(e);
      }
    }

    

                    

    getChapters();
  }, []);

  useEffect(() => {
    if(chapters.length > 0){
// Get quote of the day
async function getQuote() {
    try {
        // Pick a random chapter check for the number of verses and pick a random verse
        let randomChapter = Math.floor(Math.random() * chapters.length - 1);
        let randomVerse = Math.floor(
            Math.random() * chapters[randomChapter].verses_count
        );
        randomChapter = randomChapter === -1 || randomChapter === 0 ? 1 : randomChapter;
        randomVerse = randomVerse === -1 || randomVerse === 0 ? 1 : randomVerse;

        const options = {
            method: "GET",
            url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${randomChapter}/verses/${randomVerse}/`,
            headers: {
                "X-RapidAPI-Key":
                  "5aad306723msh4d278b8d563341fp16463fjsn760f1560c7c1",
                "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
              },
        };
        const { data } = await axios.request(options);
        console.log(data);
        

        
        
    } catch (e) {
        console.log(e);
    }
}
getQuote();
    }
  }, [chapters])

  return (
    <StyledBodyWrapper>
      <StyledHeading>Introduction</StyledHeading>
      <StyledPara>
        The Bhagavad Gita (Sanskrit: भगवद्गीता, romanized: bhagavad-gītā,
        literal translation 'The Song by God'), often referred to as the Gita,
        is a 700-verse Hindu scripture, which is part of the epic Mahabharata.
        It forms the chapters 23-40 of book 6 of the Mahabharata called the
        Bhishma Parva. The work is dated to the second half of the first
        millennium BCE. Typical of the Hindu synthesis, it is considered one of
        the holy scriptures of Hinduism.
        <br />
        <br />
        The Bhagavad Gita is set in a narrative framework of dialogue between
        the Pandava prince Arjuna and his charioteer guide Krishna, an avatar of
        lord Vishnu. At the start of the Kurukshetra War between the Pandavas
        and the Kauravas, Arjuna despairs thinking about the violence and death
        the war will cause in the battle against his kin and becomes emotionally
        preoccupied with a dilemma. Wondering if he should renounce the war,
        Arjuna seeks the counsel of Krishna, whose answers and discourse
        constitute the Bhagavad Gita. Krishna counsels Arjuna to "fulfil his
        Kshatriya (warrior) duty" for the upholdment of dharma. The
        Krishna-Arjuna dialogue covers a broad range of spiritual topics,
        touching upon moral and ethical dilemmas, and philosophical issues that
        go far beyond the war that Arjuna faces. The setting of the text in a
        battlefield has been interpreted as an allegory for the struggles of
        human life.
        <br />
        <br />
        Summarizing the Upanishadic conceptions of God, the Gita posits the
        existence of a lower human self (Atman) and the higher God self
        (Brahman) within each individual. The dialogue between the prince and
        his charioteer has been interpreted as a metaphor for an immortal
        dialogue between the human self and God. Commentators of Vedanta read
        varying notions in the Bhagavad Gita about the relationship between the
        Atman (individual Self) and Brahman (universal Self); Advaita Vedanta
        affirms on the non-dualism of Atman and Brahman, Vishishtadvaita asserts
        qualified non-dualisim with Atman and Brahman being related but
        different in certain aspects, while Dvaita Vedanta declares the complete
        duality of Atman and Brahman.
        <br />
        <br />
        As per Hindu mythology, the Bhagavad Gita was written by the god
        Ganesha, as told to him by the sage Veda Vyasa. The Bhagavad Gita
        presents a synthesis of various Hindu ideas about dharma, theistic
        bhakti, and the yogic ideal of moksha. The text covers Jñāna, Bhakti,
        Karma, and Rāja yogas, while incorporating ideas from the Samkhya-Yoga
        philosophy. The Bhagavad Gita is one of the most revered Hindu texts and
        has a unique pan-Hindu influence. Numerous commentaries have been
        written on the Bhagavad Gita with differing views on its essentials.
      </StyledPara>
    </StyledBodyWrapper>
  );
};

export default Body;
