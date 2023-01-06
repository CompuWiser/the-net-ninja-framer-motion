import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FC } from "react";

const backdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal: Variants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

interface Props {
  showModal: boolean;
}

const Modal: FC<Props> = ({ showModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
