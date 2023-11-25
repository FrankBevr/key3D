import styles from "./PrimaryButton.module.css";
const PrimaryButton = ({
  label,
  labelVis,
  state,
  iconLeftComp,
  iconRightComp,
  iconLeftVis,
  iconRightVis,
  ...props
}) => {
  /* state is not neccessary currently. State gets regulated thruh css in the imported modules. */
  return (
    <button className={styles.default} {...props}>
      <div className={styles.innerContent}>
        {iconLeftVis && (
          <div className={styles.leftItem}>
            {iconLeftComp || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
              >
                <path
                  d="M19 12H5"
                  stroke="#1F2223"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="#1F2223"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        )}

        {labelVis && <div className={styles.label}>{label}</div>}
        {iconRightVis && (
          <div className={styles.rightItem}>
            {iconRightComp || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
              >
                <path
                  d="M5 12H19"
                  stroke="#1F2223"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#1F2223"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default PrimaryButton;
