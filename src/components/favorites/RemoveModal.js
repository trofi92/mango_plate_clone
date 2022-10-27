import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/modalSlice";
import { removeAllItem } from "../../features/favorites/favoritesSlice";
import styles from "./Modal.module.css";

const RemoveModal = () => {
  const dispatch = useDispatch();
  return (
    <aside className={styles.modalContainer}>
      <div className={styles.modal}>
        <h4>목록을 모두 비울까요?</h4>
        <br />
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={`${styles.btn} ${styles.confirmBtn}`}
            onClick={() => {
              dispatch(removeAllItem());
              dispatch(closeModal());
            }}
          >
            정리해주세요!
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.clearBtn}`}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            한 번 더 확인해볼게요!
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RemoveModal;
