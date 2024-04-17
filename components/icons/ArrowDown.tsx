import styles from "@/styles/components/icons/ArrowDown.module.css";

export type ArrowDownProps = { onClick: () => void };

const ArrowDown = ({ onClick }: ArrowDownProps) => {
  return <div className={styles.arrowDown} onClick={onClick} />;
};

export default ArrowDown;
