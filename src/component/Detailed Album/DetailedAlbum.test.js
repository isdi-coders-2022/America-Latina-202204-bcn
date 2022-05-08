import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import Button from "../Button/Button";
import DetailedAlbum from "./DetailedAlbum";
import UiProvider from "../../store/contexts/UiProvider";

describe("Given a DetailedAlbum Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading and an image", () => {
      const album = {
        album: {
          artist: "Linkin Park",
          tags: {
            tag: [
              {
                url: "https://www.last.fm/tag/rock",
                name: "rock",
              },
              {
                url: "https://www.last.fm/tag/alternative+rock",
                name: "alternative rock",
              },
              {
                url: "https://www.last.fm/tag/nu+metal",
                name: "nu metal",
              },
              {
                url: "https://www.last.fm/tag/linkin+park",
                name: "linkin park",
              },
              {
                url: "https://www.last.fm/tag/alternative",
                name: "alternative",
              },
            ],
          },
          name: "Minutes to Midnight",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
            },
            {
              size: "mega",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
            },
            {
              size: "",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
            },
          ],
          tracks: {
            track: [
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Wake",
                name: "Wake",
                "@attr": {
                  rank: 1,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Given+Up",
                name: "Given Up",
                "@attr": {
                  rank: 2,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: 199,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Leave+Out+All+the+Rest",
                name: "Leave Out All the Rest",
                "@attr": {
                  rank: 3,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Bleed+It+Out",
                name: "Bleed It Out",
                "@attr": {
                  rank: 4,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Shadow+of+the+Day",
                name: "Shadow of the Day",
                "@attr": {
                  rank: 5,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/What+I%27ve+Done",
                name: "What I've Done",
                "@attr": {
                  rank: 6,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Hands+Held+High",
                name: "Hands Held High",
                "@attr": {
                  rank: 7,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/No+More+Sorrow",
                name: "No More Sorrow",
                "@attr": {
                  rank: 8,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/Valentine%27s+Day",
                name: "Valentine's Day",
                "@attr": {
                  rank: 9,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/In+Between",
                name: "In Between",
                "@attr": {
                  rank: 10,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/In+Pieces",
                name: "In Pieces",
                "@attr": {
                  rank: 11,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
              {
                streamable: {
                  fulltrack: "0",
                  "#text": "0",
                },
                duration: null,
                url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight/The+Little+Things+Give+You+Away",
                name: "The Little Things Give You Away",
                "@attr": {
                  rank: 12,
                },
                artist: {
                  url: "https://www.last.fm/music/Linkin+Park",
                  name: "Linkin Park",
                  mbid: "f59c5520-5f46-4d2c-b2c4-822eabf53419",
                },
              },
            ],
          },
          listeners: "1754130",
          playcount: "49029781",
          url: "https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight",
          wiki: {
            published: "04 Apr 2011, 17:48",
            summary:
              'Minutes to Midnight is the third studio album by American rock band Linkin Park, released on May 14, 2007 through Warner Bros. Records This album showed some change of genre of linkin park from nu metal to other experimental genres. The album has been certified double platinum in the United States and shipped over 3.3 million copies worldwide in its first four weeks of release. It is their first studio album with a Parental Advisory label. The album debuted at number one in the United States and in 15 other countries, including the United Kingdom and Canada, around the world. <a href="https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight">Read more on Last.fm</a>.',
            content:
              'Minutes to Midnight is the third studio album by American rock band Linkin Park, released on May 14, 2007 through Warner Bros. Records This album showed some change of genre of linkin park from nu metal to other experimental genres.  The album has been certified double platinum in the United States and shipped over 3.3 million copies worldwide in its first four weeks of release. It is their first studio album with a Parental Advisory label.\n\nThe album debuted at number one in the United States and in 15 other countries, including the United Kingdom and Canada, around the world. In the United States, the album had the biggest first week sales of 2007 at the time, with 625,000 albums sold. The album reached number twenty-five on Rolling Stone\'s list of the Top 50 Albums of 2007. The album has sold more than 8 millions copies worldwide as of October, 2009. The album is named in reference to the Doomsday Clock.\n\nMinutes to Midnight was delayed several times before its release. First scheduled for Summer of 2006, then Fall of 2006, then early 2007, the album\'s release date was finally set for May 15, 2007. In an interview in September 2006, Shinoda explained: "When songs are pouring out you don\'t ever want to stop that. We already have over 100 roughs for songs. We\'ve narrowed it down since but we\'re not ready to commit to those yet."\n\nFrom the late stages of the demo sessions, the song "QWERTY", which was rumored to be on Minutes to Midnight, appeared on the Linkin Park Underground v6.0 CD on December 5, 2006 in both live and studio demo versions.\n\n"This was a year-and-a-half long process of really hard work and experimentation in the studio that yielded about 150 rough songs," guitarist Brad Delson told Billboard.com. "Not only is this album incredibly diverse, but the depth of the material is really strong."\n\nThe first single, "What I\'ve Done", was released April 2, 2007, and debuted at number one on the United States Modern Rock chart.\n\n"Given Up", "What I\'ve Done" and "No More Sorrow" made their live debut on April 28, 2007 in Berlin. Live performances of these three songs at the Sessions@AOL were released on AOL on May 5, 2007.\n\nOn May 12, 2007, Linkin Park played "Bleed It Out" on Saturday Night Live, along with "What I\'ve Done". Also, on May 18, 2007, Linkin Park appeared on Jimmy Kimmel Live!, and again performed "What I\'ve Done" and "Bleed It Out".\n\nOn January 16, 2008, "Valentine\'s Day" finally made its live debut in Hannover, Germany.\nCountry \tRelease Date\nWorldwide \tMay 14, 2007 (2007-05-14)\nCanada \tMay 15, 2007\n\nSONGFACTS\n\n1\nLinkin Park singer Chester Bennington on In Pieces: "I got divorced recently and that was very difficult. I also got remarried so there was a big contrast in my life. For a while I couldn\'t be completely happy with the new life I was starting and I couldn\'t end the last one. This is a song about all of that."\n\n2.THE LITTLE THINGS YOU GIVE AWAY\nThis song deals with the aftermath of Hurricane Katrina and its effect on the city of New Orleans. The band finished this song after visiting New Orleans after the hurricane hit. (thanks, Bronte - Wrexham, Wales)\n\nThis is one of the few Linkin Park songs with a guitar solo. (thanks, Jake - Albuquerque, NM)\n\nGuitarist Brad Delson in Kerrang! magazine: "This is our favorite song on the record. It\'s the biggest statement that we\'ve ever made. Nothing could go after it as everything would get eclipsed by it, that\'s why it\'s at the end."\n\nSinger Mike Shinoda in the same Kerrang! interview: "Brad has always avoided solos because he doesn\'t like to show off. But when he played that solo, though, it was one of the most emotional moments we\'ve recorded. It says what the lyrics are saying without any words."\n\n3. BLEED IT OUT\n\nLinkin Park singer Mike Shinoda in Kerrang! Magazine: "I wrote the lyrics to this about 100 times. it\'s always frustrating as a lyricist to come in with a new version that you spent hours on and have the band tell you that it\'s not there yet. in one case, they listened to my lyrics for 30 seconds and told me to start over again. that was pretty hard. it felt like I was bringing in the lyrics, getting punched in the face and then going back to the drawing board. When it finally came together I said to the band \'I don\'t think anyone but us could have made a song like this\'. It\'s a f--king bizarre death-party-rap-hoedown!"\n\n4.WHAT I\'VE DONE \n\nIn this song, Chester Bennington sings about things we\'ve done that we regret - how we want to forget it all and move on. According to Bennington, the theme of the song is "admitting to your faults of the past and kind of accepting it and moving on and trying to become something better."\n\nThe album title Minutes To Midnight refers to military terms of nuclear warfare, otherwise known as the Doomsday Clock. It is a political statement, but could also indicate the pressure the band was under to finish the album. (thanks, Steven - Anderson, CA, for above 2)\n\nRick Rubin produced this track, and stripped Linkin Park\'s sound down to give them a more raw feel. Rubin did something similar in his work with Johnny Cash and Neil Diamond. (thanks, Bertrand - Paris, France)\n\nMike Shinoda in Kerrang! Magazine: "On the other albums, Brad (Delson) and I started every song together (separately). But this was the only song that we wrote together and was the last one we finished. We wanted a song that encapsulated the feel of the whole record and I think this is that song. You\'re going to get something different out of every time you listen to it."\n\nThis debuted at #1 on the Modern Rock Tracks chart April 12th 2007. "What I\'ve Done" was the third song in this tally\'s 19-year existence to begin its chart life at #1. The other two were R.E.M.\'s "What\'s the Frequency, Kenneth?" and Red Hot Chili Peppers\' "Dani California."\n\nThe album Minutes To Midnight went to #1 in 28 of the countries in which it was released. <a href="https://www.last.fm/music/Linkin+Park/Minutes+to+Midnight">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
          },
        },
      };
      render(
        <AlbumProvider>
          <DetailedAlbum albumInfo={album.album} />
        </AlbumProvider>
      );
      const searchedHeaders = screen.getAllByRole("heading");
      const searchedImage = screen.getAllByRole("img");

      const expectedHeadings = 3;
      const expectedImage = 1;

      expect(searchedHeaders.length).toBe(expectedHeadings);
      expect(searchedImage.length).toBe(expectedImage);
    });
  });
  describe("When the Button component is clicked", () => {
    test("Then the props onClick is called", () => {
      const onClickAction = jest.fn();

      render(
        <AlbumProvider>
          <UiProvider>
            <Button type="modifyInfo" action={onClickAction} />
          </UiProvider>
        </AlbumProvider>
      );
      const button = screen.getByRole("button");

      userEvent.click(button);

      expect(onClickAction).toHaveBeenCalled();
    });
  });
});
