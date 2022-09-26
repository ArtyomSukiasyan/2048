import { blok } from "../constants/blok";
import styles from "../style.module.css";

const Blog = ({ isBlack }: any) => {
  let color = styles.blokchilth2;

  switch (isBlack) {
    case blok.color2:
      color = styles.blokchilth22;
      break;
    case blok.color4:
      color = styles.blokchilth8;
      break;
    case blok.color8:
      color = styles.blokchilth16;
      break;
    case blok.color16:
      color = styles.blokchilth32;
      break;
    case blok.color32:
      color = styles.blokchilth64;
      break;
    case blok.color64:
      color = styles.blokchilth128;
      break;
    case blok.color128:
      color = styles.blokchilth256;
      break;
    case blok.color256:
      color = styles.blokchilth512;
      break;
    case blok.color512:
      color = styles.blokchilth1024;
      break;
    case blok.color1024:
      color = styles.blokchilth2048;
      break;
    case blok.color2048:
      color = styles.blokchilth4096;
      break;
    case blok.color4096:
      color = styles.blokchilth2;
      break;
    case blok.color8192:
      color = styles.blokchilth8192;
      break;
    default:
      color = styles.blokchilth;
  }

  return (
    <div className={styles.numberBlok}>
      <div className={`${styles.blokchilth} ${color}`}>{isBlack}</div>
    </div>
  );
};

export default Blog;
