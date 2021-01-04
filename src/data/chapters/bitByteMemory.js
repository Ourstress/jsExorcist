import { TAGS } from "../constants";

const bitByteMemoryQns = [
  {
    id: 41,
    title: "The computer's alphabet",
    question: `While the english language has 26 letters in its alphabet, the ***alphabet for computers*** is only two letters - 0 and 1.  \n  \nThis means "words" for computers would be sequences of 0s and 1s.  \n  \nAnother term for 0 and 1 is [binary numbers](https://en.wikipedia.org/wiki/Binary_number) which you would come across frequently too!  \n  \nWhich of the following would be recognised by the computer? - abc, 011, one1`,
    answer: ["011"],
    hint: "The computer only recognises binary numbers",
    tags: [TAGS.bitBytes],
  },
  {
    id: 42,
    title: "Data and bits",
    question: `The computer only recognises the binary numbers 0 and 1.  \n  \nFor the computer to work with data like a number *123* or text like *"hello world"*, these data must be converted to binary numbers.  \n  \nIn this [conversion table](https://www.phys.uconn.edu/~rozman/Courses/P2200_13F/downloads/ascii.pdf), we can see that the letter *a* maps to \`01100001\` while in [this reference](https://www2.math.upenn.edu/~deturck/m170/wk8/lecture/binary.html), the number 4 is \`100\` in binary  \n  \nAs you can see, a bit (short for binary digit) is the smallest unit of data in a computer.  \n  \nEach digit in \`011\`, \`1001\` is a bit.  \n  \n1000 is comprised of how many bits?`,
    answer: ["4", "four"],
    hint: "Each bit of information is either 0 or 1",
    tags: [TAGS.bitBytes],
  },
  {
    id: 43,
    title: "bytes",
    question: `To store more information, we need a sequence of bits to represent it.  \n  \nA byte is made up of 8 bits. And with 8 bits, a byte let us represent ASCII characters like small and capital english alphabet characters!  \n  \n[More info](https://web.stanford.edu/class/cs101/bits-bytes.html)  \n  \nWhat is the ASCII representation for the capital letter A?`,
    answer: ["65", "1000001"],
    hint: "Look up the ASCII table online",
    tags: [TAGS.bitBytes],
  },
  {
    id: 44,
    title: "memory",
    question: `What has bits and bytes got to do with Javascript?  \n  \nUnder the hood, our JS code gets converted to bytes that are stored in the computer hardware called [memory](https://web.stanford.edu/class/cs101/hardware-1.html).  \n  \nEach byte has its own memory address so the computer knows where different parts of the code can be found.  \n  \nJavascript _ _ _ _ _ _ _ _ _ _ _ _ _ manages memory for us - [refer to this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)`,
    answer: ["automatically"],
    hint: "refer to the link on the last line",
    tags: [TAGS.bitBytes],
  },
];

export default bitByteMemoryQns;
