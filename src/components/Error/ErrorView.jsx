import s from './ErrorView.module.css';

const ErrorView = () => {
  return (
    <div className={s.errorWrapper}>
      <p className={s.errorDesc}>Извините, по Вашему запросу ничего не найдено! Попробуйте изменить запрос.</p>
    </div>  
  )
}

export default ErrorView;