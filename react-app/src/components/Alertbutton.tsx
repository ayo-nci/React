interface Props {
    onClose?: () => void;
    children?: string;
}

const Alertbutton = ({children, onClose}: Props) => {

  return (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {children}
          <button type="button"  onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
}

export default Alertbutton